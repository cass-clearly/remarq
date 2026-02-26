/**
 * Performance test suite for Remarq.
 *
 * Measures how Remarq performs on documents of varying sizes:
 *   Phase 1 — Scaling: load time, anchor time, sidebar render, memory
 *   Phase 2 — Anchoring profile: per-annotation timing via MutationObserver
 *
 * The anchoring code path (rangeFromSelector -> Apache Annotator's
 * createTextQuoteSelectorMatcher) is profiled by observing when each
 * <mark class="fb-highlight"> appears in the DOM — one timestamp per
 * unique comment ID.
 *
 * Run:      npm run test:perf
 * Requires: npm run build (feedback-layer bundle must exist)
 */

import puppeteer from 'puppeteer';
import http from 'node:http';
import { readFileSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import {
  generatePage,
  generateAnnotations,
} from '../fixtures/long-document-generator.mjs';

// ── Configuration ──────────────────────────────────────────────

const SIZES = [
  { paragraphs: 100,  annotations: 10 },
  { paragraphs: 500,  annotations: 50 },
  { paragraphs: 1000, annotations: 100 },
  { paragraphs: 5000, annotations: 100 },
];

// Fixed document size, varying annotation count — isolates anchoring cost
const PROFILING_RUNS = [
  { paragraphs: 1000, annotations: 10 },
  { paragraphs: 1000, annotations: 50 },
  { paragraphs: 1000, annotations: 100 },
];

// Fail if these thresholds are exceeded (only enforced for key sizes)
const THRESHOLDS = {
  1000: { loadMs: 3000, anchorMs: 5000, memMB: 150 },
};

// ── Helpers ────────────────────────────────────────────────────

function fmt(ms) {
  return ms < 1000 ? `${Math.round(ms)}ms` : `${(ms / 1000).toFixed(2)}s`;
}

function pad(s, n) { return String(s).padEnd(n); }

// ── Mock HTTP Server ───────────────────────────────────────────

function createMockServer(bundle) {
  let annotations = [];

  const server = http.createServer((req, res) => {
    const url = new URL(req.url, 'http://localhost');

    if (url.pathname === '/feedback-layer.js') {
      res.writeHead(200, { 'Content-Type': 'application/javascript' });
      res.end(bundle);
      return;
    }

    if (url.pathname.startsWith('/perf-test/')) {
      const count = parseInt(url.pathname.split('/')[2], 10);
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(generatePage(count));
      return;
    }

    if (url.pathname === '/comments') {
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ data: annotations }));
      return;
    }

    res.writeHead(404);
    res.end('Not found');
  });

  return {
    setAnnotations(a) { annotations = a; },
    listen: () => new Promise(r => server.listen(0, () => r(server.address().port))),
    close: () => new Promise(r => server.close(r)),
  };
}

// ── Anchor Profiler ────────────────────────────────────────────
//
// Injects a MutationObserver (via evaluateOnNewDocument) that records a
// performance.now() timestamp the first time each comment ID's highlight
// mark appears in the DOM.  This profiles rangeFromSelector without
// touching production code.

async function injectAnchorProfiler(page) {
  await page.evaluateOnNewDocument(() => {
    window.__anchorTimings = [];
    const seen = new Set();

    const startObserver = (target) => {
      const observer = new MutationObserver(mutations => {
        for (const mut of mutations) {
          for (const node of mut.addedNodes) {
            if (node.nodeType !== 1) continue;
            if (node.tagName !== 'MARK') continue;
            if (!node.dataset || !node.dataset.commentId) continue;
            const id = node.dataset.commentId;
            if (seen.has(id)) continue;
            seen.add(id);
            window.__anchorTimings.push(performance.now());
          }
        }
      });
      observer.observe(target, { childList: true, subtree: true });
    };

    // document.documentElement is null at evaluateOnNewDocument time;
    // poll until it exists so the observer is ready before any scripts run.
    const poll = setInterval(() => {
      if (document.documentElement) {
        clearInterval(poll);
        startObserver(document.documentElement);
      }
    }, 0);
  });
}

async function getAnchorProfile(page) {
  return page.evaluate(() => {
    const t = window.__anchorTimings;
    if (!t || t.length < 2) return null;

    const intervals = [];
    for (let i = 1; i < t.length; i++) intervals.push(t[i] - t[i - 1]);
    const sorted = [...intervals].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    return {
      count: t.length,
      totalMs: t[t.length - 1] - t[0],
      avgMs: (t[t.length - 1] - t[0]) / t.length,
      min: sorted[0],
      median: sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2,
      p95: sorted[Math.max(0, Math.ceil(sorted.length * 0.95) - 1)],
      max: sorted[sorted.length - 1],
    };
  });
}

// ── Measurement ────────────────────────────────────────────────

async function measure(browser, port, { paragraphs, annotations }, profile = false) {
  const page = await browser.newPage();
  if (profile) await injectAnchorProfiler(page);

  // 1. Page load
  const t0 = Date.now();
  await page.goto(`http://localhost:${port}/perf-test/${paragraphs}`, {
    waitUntil: 'domcontentloaded',
  });
  const loadMs = Date.now() - t0;

  // 2. Anchoring — wait for all .fb-highlight marks to appear
  const t1 = Date.now();
  let anchored = 0;
  if (annotations > 0) {
    try {
      await page.waitForFunction(
        n => document.querySelectorAll('.fb-highlight').length >= n,
        { timeout: 120_000 },
        annotations,
      );
      anchored = annotations;
    } catch {
      anchored = await page.evaluate(
        () => document.querySelectorAll('.fb-highlight').length,
      );
    }
  }
  const anchorMs = Date.now() - t1;

  // 3. Sidebar render — wait for comment cards
  const t2 = Date.now();
  let cards = 0;
  if (annotations > 0) {
    try {
      await page.waitForFunction(
        n => document.querySelectorAll('.fb-cmt-card').length >= n,
        { timeout: 30_000 },
        annotations,
      );
      cards = annotations;
    } catch {
      cards = await page.evaluate(
        () => document.querySelectorAll('.fb-cmt-card').length,
      );
    }
  }
  const sidebarMs = Date.now() - t2;

  // 4. Memory (Chrome-only API)
  const memMB = await page.evaluate(() =>
    performance.memory
      ? Math.round(performance.memory.usedJSHeapSize / 1_048_576)
      : null,
  );

  // 5. Profile data
  const anchorProfile = profile ? await getAnchorProfile(page) : null;

  await page.close();

  return {
    paragraphs, annotations, anchored, cards,
    loadMs, anchorMs, sidebarMs, memMB,
    anchorProfile,
  };
}

// ── Main ───────────────────────────────────────────────────────

async function run() {
  const bundlePath = resolve('serve/feedback-layer.js');
  if (!existsSync(bundlePath)) {
    console.error(
      'Error: serve/feedback-layer.js not found.\n' +
      'Run "npm run build" before running performance tests.',
    );
    process.exit(1);
  }

  const mock = createMockServer(readFileSync(bundlePath, 'utf-8'));
  const port = await mock.listen();

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--enable-precise-memory-info',
    ],
  });

  const results = [];
  const profiles = [];
  const failures = [];

  try {
    // ── Phase 1: Scaling ───────────────────────────────────
    console.log('\n== Phase 1: Document Size Scaling ==\n');

    for (const size of SIZES) {
      process.stdout.write(`  ${size.paragraphs}p / ${size.annotations}a ... `);
      mock.setAnnotations(generateAnnotations(size.paragraphs, size.annotations));

      const m = await measure(browser, port, size);
      results.push(m);

      console.log('done');
      console.log(
        `    Load ${fmt(m.loadMs)}  Anchor ${fmt(m.anchorMs)} (${m.anchored}/${size.annotations})  ` +
        `Sidebar ${fmt(m.sidebarMs)}  Memory ${m.memMB ?? 'N/A'}MB`,
      );

      const th = THRESHOLDS[size.paragraphs];
      if (th) {
        if (m.loadMs > th.loadMs) {
          const msg = `${size.paragraphs}p: load ${fmt(m.loadMs)} exceeds ${fmt(th.loadMs)}`;
          console.error(`    FAIL: ${msg}`);
          failures.push(msg);
        }
        if (m.anchorMs > th.anchorMs) {
          const msg = `${size.paragraphs}p: anchor ${fmt(m.anchorMs)} exceeds ${fmt(th.anchorMs)}`;
          console.error(`    FAIL: ${msg}`);
          failures.push(msg);
        }
        if (m.memMB != null && m.memMB > th.memMB) {
          const msg = `${size.paragraphs}p: memory ${m.memMB}MB exceeds ${th.memMB}MB`;
          console.error(`    FAIL: ${msg}`);
          failures.push(msg);
        }
      }

      if (m.anchored < size.annotations) {
        console.warn(`    Warning: only ${m.anchored}/${size.annotations} anchored`);
      }
    }

    // ── Phase 2: Anchoring Code Path Profile ───────────────
    console.log('\n== Phase 2: Anchoring Code Path Profile (1000 paragraphs) ==\n');

    for (const run of PROFILING_RUNS) {
      process.stdout.write(`  ${run.annotations} annotations ... `);
      mock.setAnnotations(generateAnnotations(run.paragraphs, run.annotations));

      const m = await measure(browser, port, run, true);
      profiles.push(m);

      console.log('done');
      console.log(
        `    Total ${fmt(m.anchorMs)}  Per-anchor ${fmt(m.anchorMs / run.annotations)}`,
      );

      if (m.anchorProfile) {
        const p = m.anchorProfile;
        console.log(
          `    Intervals: min ${fmt(p.min)}  median ${fmt(p.median)}  ` +
          `p95 ${fmt(p.p95)}  max ${fmt(p.max)}`,
        );
      }
    }

    // ── Summary Table ──────────────────────────────────────
    console.log('\n== Summary ==\n');
    console.log(
      `${pad('Paragraphs', 12)}${pad('Annot', 8)}${pad('Load', 10)}` +
      `${pad('Anchor', 10)}${pad('Sidebar', 10)}${pad('Mem MB', 8)}${pad('Per-Anchor', 12)}`,
    );
    console.log('-'.repeat(70));

    for (const m of results) {
      const perA = m.anchored > 0 ? fmt(m.anchorMs / m.anchored) : 'N/A';
      console.log(
        `${pad(m.paragraphs, 12)}${pad(m.annotations, 8)}${pad(fmt(m.loadMs), 10)}` +
        `${pad(fmt(m.anchorMs), 10)}${pad(fmt(m.sidebarMs), 10)}` +
        `${pad(m.memMB ?? 'N/A', 8)}${perA}`,
      );
    }

    // ── Recommendations ────────────────────────────────────
    console.log('\n== Recommendations ==\n');

    const med = results.find(r => r.paragraphs === 1000);
    if (med && med.anchorMs > 2000) {
      console.log(
        '  * rangeFromSelector is slow on 1000+ paragraph documents.\n' +
        '    Consider batching with requestIdleCallback to keep the main\n' +
        '    thread responsive during initial page load:\n' +
        '\n' +
        '      for (const ann of comments) {\n' +
        '        await new Promise(r => requestIdleCallback(r));\n' +
        '        const range = await rangeFromSelector(...);\n' +
        '        if (range) highlightRange(range, ann.id);\n' +
        '      }\n',
      );
    } else {
      console.log(
        '  * Anchoring performance is acceptable at current scale.\n' +
        '    requestIdleCallback batching is not needed yet, but should\n' +
        '    be reconsidered if annotation counts grow beyond 100.\n',
      );
    }

    const lrg = results.find(r => r.paragraphs === 5000);
    if (lrg && lrg.memMB != null && lrg.memMB > 100) {
      console.log(
        '  * Memory usage is elevated on very large documents.\n' +
        '    Consider lazy-loading annotations for off-screen content.\n',
      );
    }

    if (profiles.length >= 2) {
      const first = profiles[0];
      const last = profiles[profiles.length - 1];
      const perFirst = first.anchorMs / first.annotations;
      const perLast = last.anchorMs / last.annotations;
      if (perFirst > 0 && perLast / perFirst > 2) {
        console.log(
          `  * Per-annotation time scales superlinearly (${(perLast / perFirst).toFixed(1)}x).\n` +
          '    TextQuoteSelector DOM search may degrade with many anchored\n' +
          '    highlights. Investigate DOM caching or parallel anchoring.\n',
        );
      } else {
        console.log(
          '  * Per-annotation time scales linearly. The anchoring pipeline\n' +
          '    has no throughput bottleneck at current annotation counts.\n',
        );
      }
    }

    console.log(
      '  * selectorFromRange (called once per annotation creation) does a\n' +
      '    single DOM traversal and is not a performance concern.\n',
    );

    // ── JSON Output ────────────────────────────────────────
    console.log('\n== Results (JSON) ==');
    console.log(JSON.stringify({ scaling: results, profiling: profiles }, null, 2));

    // ── Exit ───────────────────────────────────────────────
    if (failures.length > 0) {
      console.error(`\nFAILED: ${failures.length} threshold(s) exceeded`);
      process.exitCode = 1;
    } else {
      console.log('\nAll performance thresholds passed.');
    }
  } finally {
    await browser.close();
    await mock.close();
  }
}

run();

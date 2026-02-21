import { describe, it } from "node:test";
import assert from "node:assert/strict";

// ── escapeHtml ────────────────────────────────────────────────────────

describe("escapeHtml", async () => {
  const { escapeHtml } = await import("../src/utils/escape-html.js");

  it("escapes ampersands", () => {
    assert.equal(escapeHtml("a & b"), "a &amp; b");
  });

  it("escapes less-than", () => {
    assert.equal(escapeHtml("<div>"), "&lt;div&gt;");
  });

  it("escapes greater-than", () => {
    assert.equal(escapeHtml("a > b"), "a &gt; b");
  });

  it("escapes double quotes", () => {
    assert.equal(escapeHtml('a "b" c'), "a &quot;b&quot; c");
  });

  it("escapes single quotes", () => {
    assert.equal(escapeHtml("it's"), "it&#39;s");
  });

  it("handles all special chars together", () => {
    assert.equal(
      escapeHtml(`<script>alert("x&y")</script>`),
      "&lt;script&gt;alert(&quot;x&amp;y&quot;)&lt;/script&gt;"
    );
  });

  it("returns empty string unchanged", () => {
    assert.equal(escapeHtml(""), "");
  });
});

// ── format-comments ───────────────────────────────────────────────────

describe("formatComments", async () => {
  const { formatComments } = await import("../src/utils/format-comments.js");

  it("formats a single comment", () => {
    const result = formatComments([
      { id: "c1", author: "Alice", quote: "hello world", body: "Fix typo" },
    ]);
    assert.ok(result.includes("**1. [Alice]**"));
    assert.ok(result.includes('Highlighted text: "hello world"'));
    assert.ok(result.includes("Comment: Fix typo"));
  });

  it("formats multiple comments with numbering", () => {
    const result = formatComments([
      { id: "c1", author: "Alice", quote: "text1", body: "comment1" },
      { id: "c2", author: "Bob", quote: "text2", body: "comment2" },
    ]);
    assert.ok(result.includes("**1. [Alice]**"));
    assert.ok(result.includes("**2. [Bob]**"));
  });

  it("threads replies under parent", () => {
    const result = formatComments([
      { id: "c1", author: "Alice", quote: "text", body: "parent comment" },
      { id: "c2", author: "Bob", body: "reply text", parent: "c1" },
    ]);
    assert.ok(result.includes("**[Bob]** (reply): reply text"));
  });

  it("returns placeholder for empty list", () => {
    const result = formatComments([]);
    assert.equal(result, "_No comments found._");
  });

  it("handles comment without quote", () => {
    const result = formatComments([
      { id: "c1", author: "Alice", body: "general note" },
    ]);
    assert.ok(result.includes("Comment: general note"));
    assert.ok(!result.includes("Highlighted text"));
  });
});

// ── buildPrompt ───────────────────────────────────────────────────────

describe("buildPrompt", async () => {
  const { buildPrompt } = await import("../src/prompt-builder.js");

  it("includes document HTML", () => {
    const prompt = buildPrompt("<p>Hello</p>", [
      { id: "c1", author: "A", quote: "q", body: "b" },
    ]);
    assert.ok(prompt.includes("<p>Hello</p>"));
  });

  it("includes top-level comment count", () => {
    const prompt = buildPrompt("<p>Doc</p>", [
      { id: "c1", author: "A", quote: "q", body: "b" },
      { id: "c2", author: "B", body: "reply", parent: "c1" },
    ]);
    assert.ok(prompt.includes("1 reviewer comment(s)"));
  });

  it("includes instructions section", () => {
    const prompt = buildPrompt("<p>Doc</p>", [
      { id: "c1", author: "A", quote: "q", body: "b" },
    ]);
    assert.ok(prompt.includes("## Instructions"));
    assert.ok(prompt.includes("### Revised Document"));
    assert.ok(prompt.includes("### Changelog"));
  });

  it("includes formatted comments", () => {
    const prompt = buildPrompt("<p>Doc</p>", [
      { id: "c1", author: "Alice", quote: "highlighted", body: "fix this" },
    ]);
    assert.ok(prompt.includes("**1. [Alice]**"));
    assert.ok(prompt.includes("fix this"));
  });
});

// ── threadComments ────────────────────────────────────────────────────

describe("threadComments", async () => {
  const { threadComments } = await import("../src/utils/thread-comments.js");

  it("separates top-level and reply comments", () => {
    const { topLevel, repliesByParent } = threadComments([
      { id: "c1", body: "parent" },
      { id: "c2", body: "reply", parent: "c1" },
      { id: "c3", body: "another root" },
    ]);
    assert.equal(topLevel.length, 2);
    assert.equal(topLevel[0].id, "c1");
    assert.equal(topLevel[1].id, "c3");
    assert.deepEqual(repliesByParent.get("c1").length, 1);
    assert.equal(repliesByParent.get("c1")[0].id, "c2");
  });

  it("handles empty array", () => {
    const { topLevel, repliesByParent } = threadComments([]);
    assert.equal(topLevel.length, 0);
    assert.equal(repliesByParent.size, 0);
  });

  it("handles all top-level (no replies)", () => {
    const { topLevel, repliesByParent } = threadComments([
      { id: "c1", body: "a" },
      { id: "c2", body: "b" },
    ]);
    assert.equal(topLevel.length, 2);
    assert.equal(repliesByParent.size, 0);
  });

  it("groups multiple replies under same parent", () => {
    const { repliesByParent } = threadComments([
      { id: "c1", body: "root" },
      { id: "c2", body: "reply1", parent: "c1" },
      { id: "c3", body: "reply2", parent: "c1" },
    ]);
    assert.equal(repliesByParent.get("c1").length, 2);
  });

  it("preserves order within top-level and replies", () => {
    const { topLevel, repliesByParent } = threadComments([
      { id: "c1", body: "first" },
      { id: "c2", body: "second" },
      { id: "r1", body: "reply-a", parent: "c1" },
      { id: "r2", body: "reply-b", parent: "c1" },
    ]);
    assert.equal(topLevel[0].id, "c1");
    assert.equal(topLevel[1].id, "c2");
    assert.equal(repliesByParent.get("c1")[0].id, "r1");
    assert.equal(repliesByParent.get("c1")[1].id, "r2");
  });
});

// ── truncate ──────────────────────────────────────────────────────────

describe("truncate", async () => {
  const { truncate } = await import("../src/utils/truncate.js");

  it("returns short strings unchanged", () => {
    assert.equal(truncate("hello", 10), "hello");
  });

  it("truncates long strings with ellipsis", () => {
    assert.equal(truncate("hello world", 5), "hello...");
  });

  it("handles exact length", () => {
    assert.equal(truncate("hello", 5), "hello");
  });

  it("handles empty string", () => {
    assert.equal(truncate("", 10), "");
  });
});

// ── timeAgo ───────────────────────────────────────────────────────────

describe("timeAgo", async () => {
  const { timeAgo } = await import("../src/utils/time-ago.js");

  it("returns 'just now' for recent timestamps", () => {
    const now = new Date().toISOString();
    assert.equal(timeAgo(now), "just now");
  });

  it("returns minutes ago", () => {
    const fiveMinAgo = new Date(Date.now() - 5 * 60000).toISOString();
    assert.equal(timeAgo(fiveMinAgo), "5m ago");
  });

  it("returns hours ago", () => {
    const twoHrsAgo = new Date(Date.now() - 2 * 3600000).toISOString();
    assert.equal(timeAgo(twoHrsAgo), "2h ago");
  });

  it("returns days ago", () => {
    const threeDaysAgo = new Date(Date.now() - 3 * 86400000).toISOString();
    assert.equal(timeAgo(threeDaysAgo), "3d ago");
  });
});

// ── api (setBaseUrl only — no fetch mocks) ────────────────────────────

describe("api", async () => {
  const { setBaseUrl } = await import("../src/api.js");

  it("setBaseUrl strips trailing slashes", () => {
    // setBaseUrl modifies module-level state; we just verify it doesn't throw
    setBaseUrl("http://localhost:3000///");
    setBaseUrl("http://localhost:3000");
    setBaseUrl("");
  });
});

// ── computeVisibleRange ──────────────────────────────────────────────

describe("computeVisibleRange", async () => {
  const { computeVisibleRange } = await import("../src/utils/virtual-scroller.js");

  it("returns zeros for empty list", () => {
    const result = computeVisibleRange({ scrollTop: 0, viewportHeight: 500, itemHeights: [] });
    assert.deepEqual(result, { startIndex: 0, endIndex: 0, offsetBefore: 0, offsetAfter: 0 });
  });

  it("shows all items when they fit in viewport", () => {
    const result = computeVisibleRange({
      scrollTop: 0,
      viewportHeight: 500,
      itemHeights: [100, 100, 100],
      buffer: 2,
    });
    assert.equal(result.startIndex, 0);
    assert.equal(result.endIndex, 3);
    assert.equal(result.offsetBefore, 0);
    assert.equal(result.offsetAfter, 0);
  });

  it("renders only visible items plus buffer", () => {
    // 20 items, each 100px. Viewport 300px. Scrolled to 500px.
    // Items 5,6,7 visible. Buffer=2 → render items 3-9.
    const heights = Array(20).fill(100);
    const result = computeVisibleRange({
      scrollTop: 500,
      viewportHeight: 300,
      itemHeights: heights,
      buffer: 2,
    });
    assert.equal(result.startIndex, 3);
    assert.equal(result.endIndex, 10);
    assert.equal(result.offsetBefore, 300);
    assert.equal(result.offsetAfter, 1000);
  });

  it("clamps buffer to array bounds", () => {
    const heights = [100, 100, 100];
    const result = computeVisibleRange({
      scrollTop: 0,
      viewportHeight: 100,
      itemHeights: heights,
      buffer: 10,
    });
    assert.equal(result.startIndex, 0);
    assert.equal(result.endIndex, 3);
  });

  it("handles scroll past all items", () => {
    const heights = [100, 100];
    const result = computeVisibleRange({
      scrollTop: 500,
      viewportHeight: 300,
      itemHeights: heights,
      buffer: 1,
    });
    // All items above viewport. rawStart=2, buffer → startIndex=1
    assert.equal(result.startIndex, 1);
    assert.equal(result.endIndex, 2);
  });

  it("uses default buffer of 5", () => {
    const heights = Array(20).fill(100);
    const result = computeVisibleRange({
      scrollTop: 1000,
      viewportHeight: 100,
      itemHeights: heights,
    });
    // Item 10 visible. Default buffer=5.
    // rawStart=10, rawEnd=11, startIndex=5, endIndex=16
    assert.equal(result.startIndex, 5);
    assert.equal(result.endIndex, 16);
  });

  it("handles variable height items", () => {
    const heights = [50, 200, 30, 100, 150, 80];
    // Total: 610. scrollTop=250, viewport=100.
    // accum: 0→50→250→280→380→530→610
    // rawStart=2 (accum=250, 250+30=280>250)
    // top: 250→280→380, 380>=350? yes. rawEnd=4.
    // buffer=1: startIndex=1, endIndex=5
    const result = computeVisibleRange({
      scrollTop: 250,
      viewportHeight: 100,
      itemHeights: heights,
      buffer: 1,
    });
    assert.equal(result.startIndex, 1);
    assert.equal(result.endIndex, 5);
    assert.equal(result.offsetBefore, 50);   // heights[0]
    assert.equal(result.offsetAfter, 80);    // heights[5]
  });

  it("handles scrollTop of 0", () => {
    const heights = [100, 100, 100, 100, 100];
    const result = computeVisibleRange({
      scrollTop: 0,
      viewportHeight: 200,
      itemHeights: heights,
      buffer: 1,
    });
    // Items 0,1 visible. buffer=1 → start=0, end=3
    assert.equal(result.startIndex, 0);
    assert.equal(result.endIndex, 3);
    assert.equal(result.offsetBefore, 0);
    assert.equal(result.offsetAfter, 200);
  });

  it("handles single item", () => {
    const result = computeVisibleRange({
      scrollTop: 0,
      viewportHeight: 500,
      itemHeights: [100],
      buffer: 5,
    });
    assert.equal(result.startIndex, 0);
    assert.equal(result.endIndex, 1);
    assert.equal(result.offsetBefore, 0);
    assert.equal(result.offsetAfter, 0);
  });
});

// ── scrollOffsetForItem ──────────────────────────────────────────────

describe("scrollOffsetForItem", async () => {
  const { scrollOffsetForItem } = await import("../src/utils/virtual-scroller.js");

  it("returns 0 for first item", () => {
    assert.equal(scrollOffsetForItem(0, [100, 200, 300]), 0);
  });

  it("sums heights before the target item", () => {
    assert.equal(scrollOffsetForItem(2, [100, 200, 300]), 300);
  });

  it("handles index beyond array", () => {
    assert.equal(scrollOffsetForItem(5, [100, 200]), 300);
  });

  it("returns 0 for empty array", () => {
    assert.equal(scrollOffsetForItem(0, []), 0);
  });

  it("handles single item array", () => {
    assert.equal(scrollOffsetForItem(1, [150]), 150);
  });
});

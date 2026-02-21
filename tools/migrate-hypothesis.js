#!/usr/bin/env node

'use strict';

const { parseArgs } = require('node:util');
const fs = require('node:fs');

const HYPOTHESIS_API = 'https://api.hypothes.is/api';
const HYPOTHESIS_PAGE_SIZE = 200; // max per request

function parseCliArgs() {
  const { values } = parseArgs({
    options: {
      'hypothesis-api-key': { type: 'string' },
      'hypothesis-user': { type: 'string' },
      'remarq-url': { type: 'string' },
      'document-uri': { type: 'string' },
      'dry-run': { type: 'boolean', default: false },
      'include-tags': { type: 'boolean', default: false },
      help: { type: 'boolean', default: false },
    },
  });

  if (values.help) {
    console.log(`Usage: node migrate-hypothesis.js [options]

Options:
  --hypothesis-api-key  Your Hypothesis developer API key (required)
  --hypothesis-user     Your Hypothesis username (required)
  --remarq-url          Base URL of your Remarq instance (required)
  --document-uri        Migrate only annotations for this document URL
  --dry-run             Preview migration without writing data
  --include-tags        Append Hypothesis tags to comment body
  --help                Show this help message`);
    process.exit(0);
  }

  const missing = [];
  if (!values['hypothesis-api-key']) missing.push('--hypothesis-api-key');
  if (!values['hypothesis-user']) missing.push('--hypothesis-user');
  if (!values['remarq-url']) missing.push('--remarq-url');

  if (missing.length > 0) {
    console.error(`Error: missing required arguments: ${missing.join(', ')}`);
    console.error('Run with --help for usage information.');
    process.exit(1);
  }

  return values;
}

async function fetchHypothesisAnnotations(apiKey, user, documentUri) {
  const annotations = [];
  let offset = 0;

  while (true) {
    const params = new URLSearchParams({
      user: `acct:${user}@hypothes.is`,
      limit: String(HYPOTHESIS_PAGE_SIZE),
      offset: String(offset),
      sort: 'created',
      order: 'asc',
    });

    if (documentUri) {
      params.set('uri', documentUri);
    }

    const url = `${HYPOTHESIS_API}/search?${params}`;
    const res = await fetch(url, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`Hypothesis API error ${res.status}: ${text}`);
    }

    const data = await res.json();
    annotations.push(...data.rows);

    if (data.rows.length < HYPOTHESIS_PAGE_SIZE) break;
    offset += HYPOTHESIS_PAGE_SIZE;
  }

  return annotations;
}

function extractTextQuoteSelector(annotation) {
  if (!annotation.target || annotation.target.length === 0) return null;

  for (const target of annotation.target) {
    if (!target.selector) continue;
    const tqs = target.selector.find((s) => s.type === 'TextQuoteSelector');
    if (tqs) return tqs;
  }

  return null;
}

function getAuthor(annotation) {
  if (annotation.user_info && annotation.user_info.display_name) {
    return annotation.user_info.display_name;
  }
  // Extract username from acct:username@authority format
  const match = annotation.user && annotation.user.match(/^acct:([^@]+)@/);
  return match ? match[1] : annotation.user || 'Unknown';
}

function getDocumentUri(annotation) {
  if (annotation.target && annotation.target.length > 0 && annotation.target[0].source) {
    return annotation.target[0].source;
  }
  return annotation.uri || null;
}

function buildCommentBody(annotation, includeTags) {
  let body = annotation.text || '';
  if (includeTags && annotation.tags && annotation.tags.length > 0) {
    body += `\n[tags: ${annotation.tags.join(', ')}]`;
  }
  return body;
}

function isReply(annotation) {
  return annotation.references && annotation.references.length > 0;
}

async function createRemarqComment(remarqUrl, comment) {
  const res = await fetch(`${remarqUrl}/comments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(comment),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Remarq API error ${res.status}: ${text}`);
  }

  return res.json();
}

async function migrate(args) {
  const apiKey = args['hypothesis-api-key'];
  const user = args['hypothesis-user'];
  const remarqUrl = args['remarq-url'].replace(/\/+$/, '');
  const documentUri = args['document-uri'] || null;
  const dryRun = args['dry-run'];
  const includeTags = args['include-tags'];

  console.log(`Fetching annotations from Hypothesis for user "${user}"...`);
  if (documentUri) console.log(`  Filtering by document: ${documentUri}`);

  const annotations = await fetchHypothesisAnnotations(apiKey, user, documentUri);
  console.log(`Found ${annotations.length} annotations.`);

  if (annotations.length === 0) {
    console.log('Nothing to migrate.');
    return;
  }

  // Separate roots and replies, process roots first
  const roots = annotations.filter((a) => !isReply(a));
  const replies = annotations.filter((a) => isReply(a));

  // Map from Hypothesis ID to Remarq ID
  const idMap = {};
  const errors = [];
  let migratedCount = 0;
  const total = annotations.length;

  // Process root annotations
  for (const annot of roots) {
    const selector = extractTextQuoteSelector(annot);
    const body = buildCommentBody(annot, includeTags);

    if (!body.trim()) {
      console.log(`  Skipping ${annot.id} — empty body`);
      continue;
    }

    const uri = getDocumentUri(annot);
    if (!uri) {
      console.log(`  Skipping ${annot.id} — no document URI`);
      continue;
    }

    const comment = {
      uri,
      quote: selector ? selector.exact || '' : '',
      prefix: selector ? selector.prefix || '' : '',
      suffix: selector ? selector.suffix || '' : '',
      body,
      author: getAuthor(annot),
    };

    migratedCount++;

    if (dryRun) {
      console.log(`  [${migratedCount}/${total}] (dry-run) Would create root comment: "${body.slice(0, 60)}..." on ${uri}`);
      idMap[annot.id] = `dry-run-${annot.id}`;
      continue;
    }

    try {
      const created = await createRemarqComment(remarqUrl, comment);
      idMap[annot.id] = created.id;
      console.log(`  [${migratedCount}/${total}] Migrated root: ${created.id}`);
    } catch (err) {
      console.error(`  [${migratedCount}/${total}] Failed root ${annot.id}: ${err.message}`);
      errors.push({ hypothesisId: annot.id, error: err.message, annotation: { text: annot.text, uri } });
    }
  }

  // Process replies
  for (const annot of replies) {
    const body = buildCommentBody(annot, includeTags);

    if (!body.trim()) {
      console.log(`  Skipping reply ${annot.id} — empty body`);
      continue;
    }

    const uri = getDocumentUri(annot);
    if (!uri) {
      console.log(`  Skipping reply ${annot.id} — no document URI`);
      continue;
    }

    // references[0] is the root annotation
    const rootHypothesisId = annot.references[0];
    const remarqParentId = idMap[rootHypothesisId];

    const comment = { uri, body, author: getAuthor(annot) };

    if (remarqParentId) {
      comment.parent = remarqParentId;
    } else {
      // Root wasn't migrated (deleted, or from another user) — create as root with note
      const selector = extractTextQuoteSelector(annot);
      comment.quote = selector ? selector.exact || '' : '';
      comment.prefix = selector ? selector.prefix || '' : '';
      comment.suffix = selector ? selector.suffix || '' : '';
      comment.body = `[Orphaned reply — original thread not found]\n\n${body}`;
    }

    migratedCount++;

    if (dryRun) {
      const type = remarqParentId ? 'reply' : 'orphaned root';
      console.log(`  [${migratedCount}/${total}] (dry-run) Would create ${type}: "${body.slice(0, 60)}..."`);
      idMap[annot.id] = `dry-run-${annot.id}`;
      continue;
    }

    try {
      const created = await createRemarqComment(remarqUrl, comment);
      idMap[annot.id] = created.id;
      const type = remarqParentId ? 'reply' : 'orphaned root';
      console.log(`  [${migratedCount}/${total}] Migrated ${type}: ${created.id}`);
    } catch (err) {
      console.error(`  [${migratedCount}/${total}] Failed reply ${annot.id}: ${err.message}`);
      errors.push({ hypothesisId: annot.id, error: err.message, annotation: { text: annot.text, uri } });
    }
  }

  // Summary
  console.log('\n--- Migration Summary ---');
  console.log(`Total annotations found: ${total}`);
  console.log(`Successfully migrated: ${migratedCount - errors.length}`);
  if (errors.length > 0) console.log(`Failed: ${errors.length}`);
  if (dryRun) console.log('(dry-run mode — no data was written)');

  // Write errors to file
  if (errors.length > 0 && !dryRun) {
    const errorFile = 'migration-errors.json';
    fs.writeFileSync(errorFile, JSON.stringify(errors, null, 2));
    console.log(`\nError details written to ${errorFile}`);
  }
}

migrate(parseCliArgs()).catch((err) => {
  console.error(`\nFatal error: ${err.message}`);
  process.exit(1);
});

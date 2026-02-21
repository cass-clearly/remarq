#!/usr/bin/env node

'use strict';

const { parseArgs } = require('node:util');
const fs = require('node:fs');

function parseCliArgs() {
  const { values } = parseArgs({
    options: {
      input: { type: 'string' },
      'remarq-url': { type: 'string' },
      'dry-run': { type: 'boolean', default: false },
      help: { type: 'boolean', default: false },
    },
  });

  if (values.help) {
    console.log(`Usage: node migrate-w3c-annotation.js [options]

Options:
  --input       Path to JSON file with W3C Web Annotation data (required)
  --remarq-url  Base URL of your Remarq instance (required)
  --dry-run     Preview migration without writing data
  --help        Show this help message`);
    process.exit(0);
  }

  const missing = [];
  if (!values.input) missing.push('--input');
  if (!values['remarq-url']) missing.push('--remarq-url');

  if (missing.length > 0) {
    console.error(`Error: missing required arguments: ${missing.join(', ')}`);
    console.error('Run with --help for usage information.');
    process.exit(1);
  }

  return values;
}

function loadAnnotations(inputPath) {
  const raw = fs.readFileSync(inputPath, 'utf-8');
  const data = JSON.parse(raw);

  // Handle single annotation, array, or AnnotationCollection
  if (Array.isArray(data)) return data;
  if (data.type === 'AnnotationCollection' || data.type === 'AnnotationPage') {
    return data.items || data.first?.items || [];
  }
  // Single annotation object
  return [data];
}

function extractBody(annotation) {
  const body = annotation.body;
  if (!body) return '';

  // body can be a string, object, or array
  if (typeof body === 'string') return body;

  if (Array.isArray(body)) {
    const textual = body.find((b) => b.type === 'TextualBody') || body[0];
    return textual?.value || '';
  }

  return body.value || '';
}

function extractAuthor(annotation) {
  const creator = annotation.creator;
  if (!creator) return 'Unknown';
  if (typeof creator === 'string') return creator;
  return creator.name || creator.nickname || 'Unknown';
}

function extractTarget(annotation) {
  const target = annotation.target;
  if (!target) return { uri: null, selector: null };

  // target can be a string, object, or array
  if (typeof target === 'string') return { uri: target, selector: null };

  const targetObj = Array.isArray(target) ? target[0] : target;
  const uri = targetObj.source || (typeof targetObj === 'string' ? targetObj : null);

  // Find TextQuoteSelector
  let selector = null;
  if (targetObj.selector) {
    if (Array.isArray(targetObj.selector)) {
      selector = targetObj.selector.find((s) => s.type === 'TextQuoteSelector') || null;
    } else if (targetObj.selector.type === 'TextQuoteSelector') {
      selector = targetObj.selector;
    }
  }

  return { uri, selector };
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
  const remarqUrl = args['remarq-url'].replace(/\/+$/, '');
  const dryRun = args['dry-run'];

  console.log(`Loading annotations from ${args.input}...`);
  const annotations = loadAnnotations(args.input);
  console.log(`Found ${annotations.length} annotations.`);

  if (annotations.length === 0) {
    console.log('Nothing to migrate.');
    return;
  }

  const errors = [];
  let migratedCount = 0;
  const total = annotations.length;

  for (const annot of annotations) {
    const body = extractBody(annot);

    if (!body.trim()) {
      console.log(`  Skipping annotation — empty body`);
      continue;
    }

    const { uri, selector } = extractTarget(annot);
    if (!uri) {
      console.log(`  Skipping annotation — no target URI`);
      continue;
    }

    const comment = {
      uri,
      quote: selector ? selector.exact || '' : '',
      prefix: selector ? selector.prefix || '' : '',
      suffix: selector ? selector.suffix || '' : '',
      body,
      author: extractAuthor(annot),
    };

    migratedCount++;

    if (dryRun) {
      console.log(`  [${migratedCount}/${total}] (dry-run) Would create comment: "${body.slice(0, 60)}..." on ${uri}`);
      continue;
    }

    try {
      const created = await createRemarqComment(remarqUrl, comment);
      console.log(`  [${migratedCount}/${total}] Migrated: ${created.id}`);
    } catch (err) {
      console.error(`  [${migratedCount}/${total}] Failed: ${err.message}`);
      errors.push({ error: err.message, annotation: { body: body.slice(0, 200), uri } });
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

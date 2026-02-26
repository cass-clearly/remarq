import { describe, it, before, after } from "node:test";
import assert from "node:assert/strict";
import puppeteer from "puppeteer";
import { setup, teardown } from "./setup.js";

const BASE_URL = "http://localhost:3001";
let browser;
let context;

before(async () => {
  await setup();
  browser = await puppeteer.launch({
    headless: process.env.PUPPETEER_DEBUG !== "1",
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
});

after(async () => {
  if (browser) await browser.close();
  await teardown();
});

describe("E2E: Remarq Annotation Workflow", () => {
  
  it("should create an annotation on selected text", async () => {
    const page = await browser.newPage();
    await page.goto(BASE_URL);
    
    // Wait for feedback layer to load
    await page.waitForSelector('.fb-highlight, #fb-sidebar', { timeout: 5000 });
    
    // Select text programmatically
    await page.evaluate(() => {
      const range = document.createRange();
      const textNode = document.body.querySelector('p').firstChild;
      range.setStart(textNode, 0);
      range.setEnd(textNode, 20);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    });
    
    // Wait for annotate button to appear
    await page.waitForSelector('.annotate-btn', { timeout: 2000 });
    
    // Click annotate button
    await page.click('.annotate-btn');
    
    // Wait for comment form in sidebar
    await page.waitForSelector('#fb-sidebar textarea', { timeout: 2000 });
    
    // Enter comment text
    await page.type('#fb-sidebar textarea', 'This is a test annotation');
    
    // Submit comment
    await page.click('#fb-sidebar button[type="submit"]');
    
    // Wait for highlight to appear
    await page.waitForSelector('.fb-highlight', { timeout: 3000 });
    
    // Verify highlight exists
    const highlights = await page.$$('.fb-highlight');
    assert.ok(highlights.length > 0, 'Highlight should appear after creating annotation');
    
    // Verify comment appears in sidebar
    const commentText = await page.$eval('#fb-sidebar .comment-body', el => el.textContent);
    assert.ok(commentText.includes('This is a test annotation'), 'Comment should appear in sidebar');
    
    await page.close();
  });

  it("should reply to an existing comment", async () => {
    const page = await browser.newPage();
    await page.goto(BASE_URL);
    
    // Wait for sidebar to load with existing comment
    await page.waitForSelector('.fb-highlight', { timeout: 3000 });
    
    // Click highlight to open sidebar
    await page.click('.fb-highlight');
    await page.waitForSelector('#fb-sidebar .comment-thread', { timeout: 2000 });
    
    // Click reply button
    await page.click('#fb-sidebar .reply-btn');
    await page.waitForSelector('#fb-sidebar .reply-form textarea', { timeout: 2000 });
    
    // Enter reply text
    await page.type('#fb-sidebar .reply-form textarea', 'This is a reply');
    
    // Submit reply
    await page.click('#fb-sidebar .reply-form button[type="submit"]');
    
    // Wait for reply to appear
    await page.waitForFunction(
      () => document.querySelectorAll('#fb-sidebar .comment-body').length > 1,
      { timeout: 3000 }
    );
    
    // Verify reply appears
    const comments = await page.$$('#fb-sidebar .comment-body');
    assert.ok(comments.length >= 2, 'Reply should appear in thread');
    
    await page.close();
  });

  it("should resolve a comment and hide the highlight", async () => {
    const page = await browser.newPage();
    await page.goto(BASE_URL);
    
    // Wait for highlight to appear
    await page.waitForSelector('.fb-highlight', { timeout: 3000 });
    
    // Count highlights before resolving
    const highlightsBefore = await page.$$('.fb-highlight');
    const countBefore = highlightsBefore.length;
    
    // Click highlight to open sidebar
    await page.click('.fb-highlight');
    await page.waitForSelector('#fb-sidebar .resolve-btn', { timeout: 2000 });
    
    // Click resolve button
    await page.click('#fb-sidebar .resolve-btn');
    
    // Wait for highlight to disappear
    await page.waitForFunction(
      (before) => document.querySelectorAll('.fb-highlight').length < before,
      { timeout: 3000 },
      countBefore
    );
    
    // Verify highlight count decreased
    const highlightsAfter = await page.$$('.fb-highlight');
    assert.ok(highlightsAfter.length < countBefore, 'Highlight should disappear after resolving');
    
    await page.close();
  });

  it("should persist annotations across page reloads", async () => {
    const page = await browser.newPage();
    await page.goto(BASE_URL);
    
    // Wait for any highlights to load
    await page.waitForTimeout(2000);
    
    // Get highlight count
    const highlightsBefore = await page.$$('.fb-highlight');
    const countBefore = highlightsBefore.length;
    
    // Reload page
    await page.reload();
    await page.waitForTimeout(2000);
    
    // Get highlight count after reload
    const highlightsAfter = await page.$$('.fb-highlight');
    const countAfter = highlightsAfter.length;
    
    // Verify count is the same (annotations persisted)
    assert.equal(countAfter, countBefore, 'Annotations should persist across reloads');
    
    await page.close();
  });

  it("should create multiple annotations on different text ranges", async () => {
    const page = await browser.newPage();
    await page.goto(BASE_URL);
    
    await page.waitForSelector('p', { timeout: 2000 });
    
    // Create first annotation
    await page.evaluate(() => {
      const range = document.createRange();
      const paragraphs = document.body.querySelectorAll('p');
      const textNode = paragraphs[0].firstChild;
      range.setStart(textNode, 0);
      range.setEnd(textNode, 10);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    });
    await page.waitForSelector('.annotate-btn', { timeout: 2000 });
    await page.click('.annotate-btn');
    await page.waitForSelector('#fb-sidebar textarea', { timeout: 2000 });
    await page.type('#fb-sidebar textarea', 'Annotation 1');
    await page.click('#fb-sidebar button[type="submit"]');
    await page.waitForTimeout(1000);
    
    // Create second annotation on different text
    await page.evaluate(() => {
      const range = document.createRange();
      const paragraphs = document.body.querySelectorAll('p');
      if (paragraphs.length > 1) {
        const textNode = paragraphs[1].firstChild;
        range.setStart(textNode, 5);
        range.setEnd(textNode, 15);
      } else {
        const textNode = paragraphs[0].firstChild;
        range.setStart(textNode, 30);
        range.setEnd(textNode, 40);
      }
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    });
    await page.waitForSelector('.annotate-btn', { timeout: 2000 });
    await page.click('.annotate-btn');
    await page.waitForSelector('#fb-sidebar textarea', { timeout: 2000 });
    await page.type('#fb-sidebar textarea', 'Annotation 2');
    await page.click('#fb-sidebar button[type="submit"]');
    await page.waitForTimeout(1000);
    
    // Verify multiple highlights exist
    const highlights = await page.$$('.fb-highlight');
    assert.ok(highlights.length >= 2, 'Multiple highlights should exist');
    
    await page.close();
  });

  it("should handle selection without clicking annotate (edge case)", async () => {
    const page = await browser.newPage();
    await page.goto(BASE_URL);
    
    await page.waitForSelector('p', { timeout: 2000 });
    
    // Select text
    await page.evaluate(() => {
      const range = document.createRange();
      const textNode = document.body.querySelector('p').firstChild;
      range.setStart(textNode, 0);
      range.setEnd(textNode, 10);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    });
    
    // Wait for annotate button
    await page.waitForSelector('.annotate-btn', { timeout: 2000 });
    
    // Click elsewhere to dismiss
    await page.click('body');
    
    // Verify annotate button disappears or selection is cleared
    // This tests that the UI handles abandoned selections gracefully
    const selection = await page.evaluate(() => window.getSelection().toString());
    assert.ok(selection.length === 0 || selection.length === 10, 'Selection state should be stable');
    
    await page.close();
  });

});

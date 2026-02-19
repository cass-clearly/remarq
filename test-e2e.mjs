/**
 * E2E test for the Remarq comment system.
 * Run with: node test-e2e.mjs
 * Requires: server on :3333 (serves both API and static files), puppeteer installed
 */

import puppeteer from "puppeteer";

const BASE = "http://localhost:3333";
const API = "http://localhost:3333";

let browser;

async function run() {
  browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    await testPageLoads();
    await testSidebarRenders();
    await testCreateComment();
    await testCommentPersistsOnReload();
    await testDeleteComment();
    await testAIRevision();
    await testDocumentIdBinding();
    console.log("\n✅ All tests passed!");
  } catch (err) {
    console.error("\n❌ Test failed:", err.message);
    console.error(err.stack);
    process.exitCode = 1;
  } finally {
    await browser.close();
  }
}

async function testPageLoads() {
  process.stdout.write("Test: page loads... ");
  const page = await browser.newPage();
  page.on("console", (msg) => {
    if (msg.type() === "error") console.log("\n  [console.error]", msg.text());
  });
  page.on("pageerror", (err) => console.log("\n  [pageerror]", err.message));

  const response = await page.goto(BASE + "/index.html", { waitUntil: "networkidle0" });
  if (!response.ok()) throw new Error(`Page load failed: ${response.status()}`);

  // Check no JS errors by verifying the sidebar rendered
  const title = await page.title();
  if (!title.includes("Feedback")) throw new Error(`Unexpected title: ${title}`);

  await page.close();
  console.log("OK");
}

async function testSidebarRenders() {
  process.stdout.write("Test: sidebar renders... ");
  const page = await browser.newPage();
  collectErrors(page);
  await page.goto(BASE + "/index.html", { waitUntil: "networkidle0" });

  // Wait for sidebar
  const sidebar = await page.$(".fb-sidebar");
  if (!sidebar) throw new Error("Sidebar not found");

  // Check name input exists
  const nameInput = await page.$(".fb-name-input");
  if (!nameInput) throw new Error("Name input not found");

  // Wait for comment list to load (async), then check empty state
  await page.waitForSelector(".fb-empty, .fb-cmt-card", { timeout: 3000 });
  const emptyMsg = await page.$eval(".fb-empty", (el) => el.textContent);
  if (!emptyMsg.includes("No comments")) throw new Error("Empty state not shown");

  await page.close();
  console.log("OK");
}

async function testCreateComment() {
  process.stdout.write("Test: create comment... ");

  // Clean slate
  await cleanDB();

  const page = await browser.newPage();
  collectErrors(page);
  await page.goto(BASE + "/index.html", { waitUntil: "networkidle0" });

  // Enter name
  await page.type(".fb-name-input", "TestUser");

  // Select text: "Collaborative document editing"
  const created = await page.evaluate(async () => {
    // Find the text node with our target text
    const article = document.querySelector("article");
    const h1 = article.querySelector("h1");
    const text = h1.firstChild;

    // Create a selection range on part of the heading
    const range = document.createRange();
    range.setStart(text, 4); // "The |Future..."
    range.setEnd(text, 14);  // "The Future| of..."

    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    // Trigger mouseup to show tooltip
    document.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));

    // Wait for tooltip to appear
    await new Promise((r) => setTimeout(r, 100));

    const tooltip = document.querySelector(".fb-annotate-tooltip");
    if (!tooltip) return { error: "Tooltip not found" };

    // Click the annotate button
    tooltip.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));

    // Wait for comment form
    await new Promise((r) => setTimeout(r, 200));

    const form = document.querySelector(".fb-form-card");
    if (!form) return { error: "Comment form not found" };

    return { ok: true };
  });

  if (created.error) throw new Error(created.error);

  // Type a comment and submit
  await page.type(".fb-form-textarea", "This is a test comment");
  await page.click(".fb-submit-btn");

  // Wait for the comment to be saved
  await page.waitForSelector(".fb-cmt-card", { timeout: 3000 });

  // Verify it shows in the sidebar
  const cardText = await page.$eval(".fb-cmt-card", (el) => el.textContent);
  if (!cardText.includes("test comment")) throw new Error("Comment not visible in sidebar");
  if (!cardText.includes("TestUser")) throw new Error("Author name not visible");

  // Verify it's in the backend
  const res = await fetch(API + "/comments?uri=" + encodeURIComponent("http://localhost:3333/index.html"));
  const json = await res.json();
  if (json.data.length !== 1) throw new Error(`Expected 1 comment in DB, got ${json.data.length}`);
  if (json.data[0].author !== "TestUser") throw new Error("Wrong author in DB");

  await page.close();
  console.log("OK");
}

async function testCommentPersistsOnReload() {
  process.stdout.write("Test: comments persist on reload... ");
  const page = await browser.newPage();
  collectErrors(page);
  await page.goto(BASE + "/index.html", { waitUntil: "networkidle0" });

  // Wait for comments to load
  await page.waitForSelector(".fb-cmt-card", { timeout: 3000 });

  const count = await page.$$eval(".fb-cmt-card", (els) => els.length);
  if (count !== 1) throw new Error(`Expected 1 comment card after reload, got ${count}`);

  // Check that highlight exists in the document
  const highlights = await page.$$eval(".fb-highlight", (els) => els.length);
  if (highlights < 1) throw new Error("No highlights found after reload");

  await page.close();
  console.log("OK");
}

async function testDeleteComment() {
  process.stdout.write("Test: delete comment... ");
  const page = await browser.newPage();
  collectErrors(page);
  await page.goto(BASE + "/index.html", { waitUntil: "networkidle0" });

  // Open sidebar first (starts collapsed), then delete
  await page.evaluate(() => {
    document.querySelector(".fb-sidebar-tab").click();
  });
  await new Promise((r) => setTimeout(r, 300));
  await page.evaluate(() => {
    document.querySelector(".fb-cmt-delete").click();
  });

  // Wait for deletion
  await new Promise((r) => setTimeout(r, 500));

  // Should show empty state
  const empty = await page.$(".fb-empty");
  if (!empty) throw new Error("Empty state not shown after delete");

  // Backend should be empty
  const res = await fetch(API + "/comments?uri=" + encodeURIComponent("http://localhost:3333/index.html"));
  const json = await res.json();
  if (json.data.length !== 0) throw new Error(`Expected 0 comments after delete, got ${json.data.length}`);

  await page.close();
  console.log("OK");
}

async function testAIRevision() {
  process.stdout.write("Test: AI revision... ");

  // Create a comment first
  await fetch(API + "/comments", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      uri: "http://localhost:3333/index.html",
      quote: "Collaborative document editing",
      body: "Needs expansion",
      author: "Reviewer1",
    }),
  });

  const page = await browser.newPage();
  collectErrors(page);
  await page.goto(BASE + "/index.html", { waitUntil: "networkidle0" });

  // Open the sidebar first
  await page.click(".fb-sidebar-tab");
  await new Promise((r) => setTimeout(r, 300));

  // Click the AI button in the sidebar header
  const btn = await page.$(".fb-ai-btn");
  if (!btn) throw new Error("AI button not found in sidebar");

  await btn.click();
  await page.waitForSelector(".hf-modal", { timeout: 3000 });

  // Check prompt area has content
  const promptText = await page.$eval(".hf-prompt-area", (el) => el.value);
  if (!promptText.includes("Needs expansion")) throw new Error("Prompt doesn't contain comment");
  if (!promptText.includes("Reviewer1")) throw new Error("Prompt doesn't contain author name");

  // Clean up
  await cleanDB();
  await page.close();
  console.log("OK");
}

async function testDocumentIdBinding() {
  process.stdout.write("Test: document ID binding... ");

  // 1. Create a document via the API to get a stable ID (unique URI per run)
  const uniqueUri = `https://example.com/e2e-docid-test-${Date.now()}`;
  const docRes = await fetch(API + "/documents", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ uri: uniqueUri }),
  });
  if (!docRes.ok) throw new Error(`Failed to create document: ${docRes.status}`);
  const doc = await docRes.json();
  const docId = doc.id;

  // 2. Navigate to test-docid.html with the document ID in the query string
  const page = await browser.newPage();
  collectErrors(page);
  await page.goto(BASE + `/test-docid.html?docId=${docId}`, { waitUntil: "networkidle0" });

  // Wait for sidebar to render
  await page.waitForSelector(".fb-sidebar", { timeout: 3000 });

  // 3. Clear any stored name, enter a fresh name, and create a comment via text selection
  await page.$eval(".fb-name-input", (el) => (el.value = ""));
  await page.type(".fb-name-input", "DocIdTester");

  const created = await page.evaluate(async () => {
    const article = document.querySelector("article");
    const h1 = article.querySelector("h1");
    const textNode = h1.firstChild;
    if (!textNode) return { error: "H1 text node not found" };

    // Select "Binding Test" from "Document ID Binding Test"
    const target = "Binding Test";
    const offset = textNode.textContent.indexOf(target);
    if (offset === -1) return { error: "Target text not found in H1" };

    const range = document.createRange();
    range.setStart(textNode, offset);
    range.setEnd(textNode, offset + target.length);

    const sel = window.getSelection();
    sel.removeAllRanges();
    sel.addRange(range);

    document.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
    await new Promise((r) => setTimeout(r, 100));

    const tooltip = document.querySelector(".fb-annotate-tooltip");
    if (!tooltip) return { error: "Tooltip not found" };

    tooltip.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
    await new Promise((r) => setTimeout(r, 200));

    const form = document.querySelector(".fb-form-card");
    if (!form) return { error: "Comment form not found" };

    return { ok: true };
  });

  if (created.error) throw new Error(created.error);

  await page.type(".fb-form-textarea", "Comment bound to document ID");
  await page.click(".fb-submit-btn");
  await page.waitForSelector(".fb-cmt-card", { timeout: 3000 });

  // 4. Verify GET /comments?document=<id> returns the comment
  const byDoc = await fetch(API + `/comments?document=${encodeURIComponent(docId)}`);
  const byDocJson = await byDoc.json();
  if (byDocJson.data.length !== 1) {
    throw new Error(`Expected 1 comment by document ID, got ${byDocJson.data.length}`);
  }
  if (byDocJson.data[0].author !== "DocIdTester") {
    throw new Error("Wrong author for document-keyed comment");
  }

  // 5. Verify GET /comments?uri=<page-url> returns nothing
  const pageUrl = `http://localhost:3333/test-docid.html?docId=${docId}`;
  const byUri = await fetch(API + `/comments?uri=${encodeURIComponent(pageUrl)}`);
  const byUriJson = await byUri.json();
  if (byUriJson.data.length !== 0) {
    throw new Error(`Expected 0 comments by URI, got ${byUriJson.data.length}`);
  }

  // Clean up: delete the comment and document
  for (const c of byDocJson.data) {
    await fetch(API + `/comments/${c.id}`, { method: "DELETE" });
  }
  await fetch(API + `/documents/${docId}`, { method: "DELETE" });

  await page.close();
  console.log("OK");
}

async function cleanDB() {
  const res = await fetch(API + "/comments?uri=" + encodeURIComponent("http://localhost:3333/index.html"));
  const json = await res.json();
  for (const ann of json.data) {
    await fetch(API + "/comments/" + ann.id, { method: "DELETE" });
  }
}

function collectErrors(page) {
  page.on("console", (msg) => {
    if (msg.type() === "error") console.log("\n  [console.error]", msg.text());
  });
  page.on("pageerror", (err) => console.log("\n  [pageerror]", err.message));
}

run();

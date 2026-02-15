/**
 * E2E test for the custom annotation system.
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
    await testCreateAnnotation();
    await testAnnotationPersistsOnReload();
    await testDeleteAnnotation();
    await testAuthorMode();
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

  // Wait for annotation list to load (async), then check empty state
  await page.waitForSelector(".fb-empty, .fb-ann-card", { timeout: 3000 });
  const emptyMsg = await page.$eval(".fb-empty", (el) => el.textContent);
  if (!emptyMsg.includes("No annotations")) throw new Error("Empty state not shown");

  await page.close();
  console.log("OK");
}

async function testCreateAnnotation() {
  process.stdout.write("Test: create annotation... ");

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

  // Wait for the annotation to be saved
  await page.waitForSelector(".fb-ann-card", { timeout: 3000 });

  // Verify it shows in the sidebar
  const cardText = await page.$eval(".fb-ann-card", (el) => el.textContent);
  if (!cardText.includes("test comment")) throw new Error("Annotation not visible in sidebar");
  if (!cardText.includes("TestUser")) throw new Error("Commenter name not visible");

  // Verify it's in the backend
  const res = await fetch(API + "/api/annotations?uri=" + encodeURIComponent("http://localhost:3333/index.html"));
  const annotations = await res.json();
  if (annotations.length !== 1) throw new Error(`Expected 1 annotation in DB, got ${annotations.length}`);
  if (annotations[0].commenter !== "TestUser") throw new Error("Wrong commenter in DB");

  await page.close();
  console.log("OK");
}

async function testAnnotationPersistsOnReload() {
  process.stdout.write("Test: annotations persist on reload... ");
  const page = await browser.newPage();
  collectErrors(page);
  await page.goto(BASE + "/index.html", { waitUntil: "networkidle0" });

  // Wait for annotations to load
  await page.waitForSelector(".fb-ann-card", { timeout: 3000 });

  const count = await page.$$eval(".fb-ann-card", (els) => els.length);
  if (count !== 1) throw new Error(`Expected 1 annotation card after reload, got ${count}`);

  // Check that highlight exists in the document
  const highlights = await page.$$eval(".fb-highlight", (els) => els.length);
  if (highlights < 1) throw new Error("No highlights found after reload");

  await page.close();
  console.log("OK");
}

async function testDeleteAnnotation() {
  process.stdout.write("Test: delete annotation... ");
  const page = await browser.newPage();
  collectErrors(page);
  await page.goto(BASE + "/index.html", { waitUntil: "networkidle0" });

  await page.waitForSelector(".fb-ann-card", { timeout: 3000 });
  await page.click(".fb-ann-delete");

  // Wait for deletion
  await new Promise((r) => setTimeout(r, 500));

  // Should show empty state
  const empty = await page.$(".fb-empty");
  if (!empty) throw new Error("Empty state not shown after delete");

  // Backend should be empty
  const res = await fetch(API + "/api/annotations?uri=" + encodeURIComponent("http://localhost:3333/index.html"));
  const annotations = await res.json();
  if (annotations.length !== 0) throw new Error(`Expected 0 annotations after delete, got ${annotations.length}`);

  await page.close();
  console.log("OK");
}

async function testAuthorMode() {
  process.stdout.write("Test: author mode... ");

  // Create an annotation first
  await fetch(API + "/api/annotations", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      uri: "http://localhost:3333/index.html",
      quote: "Collaborative document editing",
      prefix: "",
      suffix: "",
      comment: "Needs expansion",
      commenter: "Reviewer1",
    }),
  });

  const page = await browser.newPage();
  collectErrors(page);
  await page.goto(BASE + "/index.html?author=true", { waitUntil: "networkidle0" });

  // Check "Send Feedback to Claude" button exists
  const btn = await page.$(".hf-button");
  if (!btn) throw new Error("Author button not found");

  // Click it
  await btn.click();
  await page.waitForSelector(".hf-modal", { timeout: 3000 });

  // Check prompt area has content
  const promptText = await page.$eval(".hf-prompt-area", (el) => el.value);
  if (!promptText.includes("Needs expansion")) throw new Error("Prompt doesn't contain annotation");
  if (!promptText.includes("Reviewer1")) throw new Error("Prompt doesn't contain commenter name");

  // Clean up
  await cleanDB();
  await page.close();
  console.log("OK");
}

async function cleanDB() {
  const res = await fetch(API + "/api/annotations?uri=" + encodeURIComponent("http://localhost:3333/index.html"));
  const anns = await res.json();
  for (const ann of anns) {
    await fetch(API + "/api/annotations/" + ann.id, { method: "DELETE" });
  }
}

function collectErrors(page) {
  page.on("console", (msg) => {
    if (msg.type() === "error") console.log("\n  [console.error]", msg.text());
  });
  page.on("pageerror", (err) => console.log("\n  [pageerror]", err.message));
}

run();

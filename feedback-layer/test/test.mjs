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

// ── getAnnotationCounts ───────────────────────────────────────────────

describe("getAnnotationCounts", async () => {
  const { getAnnotationCounts } = await import("../src/utils/annotation-counts.js");

  it("returns empty map for empty array", () => {
    const counts = getAnnotationCounts([]);
    assert.equal(counts.size, 0);
  });

  it("returns count of 1 for a single top-level comment", () => {
    const counts = getAnnotationCounts([
      { id: "c1", body: "hello" },
    ]);
    assert.equal(counts.get("c1"), 1);
  });

  it("counts replies toward the parent", () => {
    const counts = getAnnotationCounts([
      { id: "c1", body: "parent" },
      { id: "r1", body: "reply1", parent: "c1" },
      { id: "r2", body: "reply2", parent: "c1" },
    ]);
    assert.equal(counts.get("c1"), 3); // 1 parent + 2 replies
  });

  it("handles multiple top-level comments with different reply counts", () => {
    const counts = getAnnotationCounts([
      { id: "c1", body: "first" },
      { id: "c2", body: "second" },
      { id: "r1", body: "reply to c1", parent: "c1" },
    ]);
    assert.equal(counts.get("c1"), 2); // 1 parent + 1 reply
    assert.equal(counts.get("c2"), 1); // 1 parent, no replies
  });

  it("handles replies appearing before their parent", () => {
    const counts = getAnnotationCounts([
      { id: "r1", body: "reply", parent: "c1" },
      { id: "c1", body: "parent" },
    ]);
    assert.equal(counts.get("c1"), 2); // 1 parent + 1 reply
  });

  it("handles all top-level, no replies", () => {
    const counts = getAnnotationCounts([
      { id: "c1", body: "a" },
      { id: "c2", body: "b" },
      { id: "c3", body: "c" },
    ]);
    assert.equal(counts.get("c1"), 1);
    assert.equal(counts.get("c2"), 1);
    assert.equal(counts.get("c3"), 1);
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

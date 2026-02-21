import { describe, it, before, after, beforeEach } from "node:test";
import assert from "node:assert/strict";

// Set ADMIN_PASSWORD for admin dashboard tests
process.env.ADMIN_PASSWORD = "test-admin-pw";

// ── Utility unit tests ──────────────────────────────────────────────

describe("generate-id", async () => {
  const { generateId, insertWithId } = await import("./generate-id.js");

  it("produces prefixed IDs", () => {
    const id = generateId("doc");
    assert.match(id, /^doc_[A-Za-z0-9_-]+$/);
  });

  it("produces unique IDs", () => {
    const ids = new Set(Array.from({ length: 100 }, () => generateId("cmt")));
    assert.equal(ids.size, 100);
  });

  it("insertWithId retries on collision", async () => {
    let calls = 0;
    const result = await insertWithId("doc", async (id) => {
      calls++;
      if (calls < 3) {
        const err = new Error("unique violation");
        err.code = '23505';
        throw err;
      }
      return id;
    });
    assert.equal(calls, 3);
    assert.match(result, /^doc_/);
  });

  it("insertWithId throws after max retries", async () => {
    await assert.rejects(
      () => insertWithId("doc", async () => {
        const err = new Error("unique violation");
        err.code = '23505';
        throw err;
      }),
      (err) => err.code === '23505'
    );
  });
});

describe("normalize-uri", async () => {
  const { normalizeUri } = await import("./normalize-uri.js");

  it("lowercases scheme and host", () => {
    assert.equal(normalizeUri("HTTPS://Example.COM/Page"), "https://example.com/Page");
  });

  it("upgrades http to https", () => {
    assert.equal(normalizeUri("http://example.com/page"), "https://example.com/page");
  });

  it("removes trailing slash", () => {
    assert.equal(normalizeUri("https://example.com/page/"), "https://example.com/page");
  });

  it("preserves root path slash", () => {
    assert.equal(normalizeUri("https://example.com/"), "https://example.com/");
  });

  it("strips tracking params", () => {
    assert.equal(
      normalizeUri("https://example.com/page?utm_source=twitter&foo=bar"),
      "https://example.com/page?foo=bar"
    );
  });

  it("removes fragment", () => {
    assert.equal(normalizeUri("https://example.com/page#section"), "https://example.com/page");
  });

  it("sorts query params", () => {
    assert.equal(
      normalizeUri("https://example.com/page?z=1&a=2"),
      "https://example.com/page?a=2&z=1"
    );
  });

  it("throws on invalid URI", () => {
    assert.throws(() => normalizeUri("not a url"), /Invalid URI/);
  });
});

describe("sanitize", async () => {
  const { sanitize } = await import("./sanitize.js");

  it("strips HTML tags", () => {
    assert.equal(sanitize("<b>bold</b>"), "bold");
  });

  it("trims whitespace", () => {
    assert.equal(sanitize("  hello  "), "hello");
  });

  it("passes through non-strings", () => {
    assert.equal(sanitize(42), 42);
    assert.equal(sanitize(null), null);
  });
});

// ── Admin view helpers ──────────────────────────────────────────────

describe("admin views", async () => {
  const { escapeHtml, timeAgo } = await import("./views/admin.js");

  it("escapeHtml escapes special characters", () => {
    assert.equal(escapeHtml('<script>"&'), "&lt;script&gt;&quot;&amp;");
  });

  it("escapeHtml handles empty/null input", () => {
    assert.equal(escapeHtml(""), "");
    assert.equal(escapeHtml(null), "");
    assert.equal(escapeHtml(undefined), "");
  });

  it("timeAgo returns just now for recent dates", () => {
    assert.equal(timeAgo(new Date().toISOString()), "just now");
  });

  it("timeAgo returns minutes ago", () => {
    const d = new Date(Date.now() - 5 * 60 * 1000).toISOString();
    assert.equal(timeAgo(d), "5m ago");
  });

  it("timeAgo returns hours ago", () => {
    const d = new Date(Date.now() - 3 * 60 * 60 * 1000).toISOString();
    assert.equal(timeAgo(d), "3h ago");
  });

  it("timeAgo returns days ago", () => {
    const d = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString();
    assert.equal(timeAgo(d), "7d ago");
  });
});

// ── Auth middleware ─────────────────────────────────────────────────

describe("auth middleware", async () => {
  const { checkPassword } = await import("./middleware/auth.js");

  it("checkPassword returns false for empty input", () => {
    assert.equal(checkPassword(""), false);
    assert.equal(checkPassword(null), false);
  });
});

// ── Integration tests ───────────────────────────────────────────────

describe("API", async () => {
  let app, pool, initSchema, server, BASE;

  before(async () => {
    ({ app, pool, initSchema } = await import("./index.js"));
    await initSchema();

    await new Promise((resolve) => {
      server = app.listen(0, "127.0.0.1", () => {
        const port = server.address().port;
        BASE = `http://127.0.0.1:${port}`;
        resolve();
      });
    });
  });

  after(async () => {
    server.close();
    // Don't end pool here — shared with multi-tenant suite below
  });

  beforeEach(async () => {
    await pool.query("DELETE FROM pending_notifications");
    await pool.query("DELETE FROM notification_preferences");
    await pool.query("DELETE FROM moderation_log");
    await pool.query("DELETE FROM comments WHERE parent IS NOT NULL");
    await pool.query("DELETE FROM comments");
    await pool.query("DELETE FROM documents");
  });

  // ── Health check ─────────────────────────────────────────────

  describe("GET /health", () => {
    it("returns 200 with status ok", async () => {
      const res = await fetch(`${BASE}/health`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.deepEqual(json, { status: "ok" });
    });
  });

  // ── Documents ─────────────────────────────────────────────────

  describe("GET /documents", () => {
    it("returns empty list", async () => {
      const res = await fetch(`${BASE}/documents`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.deepEqual(json, { object: "list", data: [] });
    });
  });

  describe("POST /documents", () => {
    it("creates a document", async () => {
      const res = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "http://example.com/page" }),
      });
      const json = await res.json();
      assert.equal(res.status, 201);
      assert.match(json.id, /^doc_/);
      assert.equal(json.object, "document");
      assert.equal(json.uri, "https://example.com/page"); // normalized
    });

    it("returns existing document for duplicate URI", async () => {
      const res1 = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/page" }),
      });
      const doc1 = await res1.json();
      assert.equal(res1.status, 201);

      const res2 = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/page" }),
      });
      const doc2 = await res2.json();
      assert.equal(res2.status, 200);
      assert.equal(doc2.id, doc1.id);
    });

    it("returns 400 when uri is missing", async () => {
      const res = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({}),
      });
      assert.equal(res.status, 400);
      const json = await res.json();
      assert.ok(json.error.message);
    });

    it("returns 400 when uri is invalid", async () => {
      const res = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "not a url" }),
      });
      assert.equal(res.status, 400);
      const json = await res.json();
      assert.ok(json.error.message);
    });
  });

  describe("GET /documents/:id", () => {
    it("retrieves a document", async () => {
      const create = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/page" }),
      });
      const doc = await create.json();

      const res = await fetch(`${BASE}/documents/${doc.id}`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.id, doc.id);
      assert.equal(json.object, "document");
    });

    it("returns 404 for missing document", async () => {
      const res = await fetch(`${BASE}/documents/doc_nonexistent`);
      assert.equal(res.status, 404);
      const json = await res.json();
      assert.ok(json.error.message);
    });
  });

  describe("DELETE /documents/:id", () => {
    it("deletes document and cascades comments", async () => {
      // Create doc + comment
      const docRes = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/page" }),
      });
      const doc = await docRes.json();

      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ document: doc.id, quote: "text", body: "hello", author: "me" }),
      });

      const delRes = await fetch(`${BASE}/documents/${doc.id}`, { method: "DELETE" });
      const deleted = await delRes.json();
      assert.equal(delRes.status, 200);
      assert.equal(deleted.id, doc.id);

      // Verify comments are gone
      const cmts = await fetch(`${BASE}/comments?document=${doc.id}`);
      const cmtJson = await cmts.json();
      assert.equal(cmtJson.data.length, 0);
    });

    it("returns 404 for missing document", async () => {
      const res = await fetch(`${BASE}/documents/doc_nonexistent`, { method: "DELETE" });
      assert.equal(res.status, 404);
    });
  });

  // ── Comments ──────────────────────────────────────────────────

  describe("POST /comments", () => {
    it("creates comment with URI (auto-creates document)", async () => {
      const res = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uri: "https://example.com/page",
          quote: "some text",
          body: "my comment",
          author: "tester",
        }),
      });
      const json = await res.json();
      assert.equal(res.status, 201);
      assert.match(json.id, /^cmt_/);
      assert.equal(json.object, "comment");
      assert.match(json.document, /^doc_/);
      assert.equal(json.body, "my comment");
      assert.equal(json.author, "tester");
      assert.equal(json.status, "open");
    });

    it("creates comment with document ID", async () => {
      const docRes = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/page" }),
      });
      const doc = await docRes.json();

      const res = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ document: doc.id, quote: "text", body: "hi", author: "me" }),
      });
      const json = await res.json();
      assert.equal(res.status, 201);
      assert.equal(json.document, doc.id);
    });

    it("creates reply without quote", async () => {
      const parent = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/p", quote: "q", body: "b", author: "a" }),
      });
      const parentJson = await parent.json();

      const res = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uri: "https://example.com/p",
          body: "reply",
          author: "a",
          parent: parentJson.id,
        }),
      });
      const json = await res.json();
      assert.equal(res.status, 201);
      assert.equal(json.parent, parentJson.id);
      assert.equal(json.status, null);
    });

    it("returns 404 when document ID does not exist", async () => {
      const res = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ document: "doc_nonexistent", quote: "q", body: "b", author: "a" }),
      });
      assert.equal(res.status, 404);
      const json = await res.json();
      assert.ok(json.error.message);
    });

    it("returns 400 when neither uri nor document is provided", async () => {
      const res = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quote: "q", body: "b", author: "a" }),
      });
      assert.equal(res.status, 400);
      const json = await res.json();
      assert.ok(json.error.message);
    });

    it("returns 400 when body is missing", async () => {
      const res = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/p", quote: "q", author: "a" }),
      });
      assert.equal(res.status, 400);
      const json = await res.json();
      assert.ok(json.error.message);
    });

    it("returns 400 when quote is missing for top-level comment", async () => {
      const res = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/p", body: "b", author: "a" }),
      });
      assert.equal(res.status, 400);
      const json = await res.json();
      assert.ok(json.error.message);
    });

    it("sanitizes body and author", async () => {
      const res = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uri: "https://example.com/p",
          quote: "quoted text",
          body: "<script>alert(1)</script>hello",
          author: "<b>user</b>",
        }),
      });
      const json = await res.json();
      assert.equal(json.body, "alert(1)hello");
      assert.equal(json.author, "user");
    });

    it("preserves quote text exactly for anchoring", async () => {
      const res = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uri: "https://example.com/p",
          quote: "Future of ",
          body: "test",
          author: "a",
        }),
      });
      const json = await res.json();
      assert.equal(json.quote, "Future of ");
    });

    it("normalizes URI", async () => {
      const res = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uri: "http://example.com/page?utm_source=x",
          quote: "q",
          body: "b",
          author: "a",
        }),
      });
      const json = await res.json();
      // Verify the document was created with normalized URI
      const docRes = await fetch(`${BASE}/documents/${json.document}`);
      const doc = await docRes.json();
      assert.equal(doc.uri, "https://example.com/page");
    });
  });

  describe("GET /comments", () => {
    it("lists comments by document ID", async () => {
      const cmtRes = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/p", quote: "q", body: "b", author: "a" }),
      });
      const cmt = await cmtRes.json();

      const res = await fetch(`${BASE}/comments?document=${cmt.document}`);
      const json = await res.json();
      assert.equal(json.object, "list");
      assert.equal(json.data.length, 1);
      assert.equal(json.data[0].id, cmt.id);
    });

    it("lists comments by URI", async () => {
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/byuri", quote: "q", body: "b", author: "a" }),
      });

      const res = await fetch(`${BASE}/comments?uri=${encodeURIComponent("https://example.com/byuri")}`);
      const json = await res.json();
      assert.equal(json.data.length, 1);
    });

    it("returns empty list for unknown URI", async () => {
      const res = await fetch(`${BASE}/comments?uri=${encodeURIComponent("https://unknown.com")}`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.deepEqual(json, { object: "list", data: [] });
    });

    it("returns all comments without document or uri param", async () => {
      // Create a comment so we have something to return
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/all", quote: "q", body: "b", author: "a" }),
      });
      const res = await fetch(`${BASE}/comments`);
      assert.equal(res.status, 200);
      const json = await res.json();
      assert.equal(json.object, "list");
      assert.ok(json.data.length >= 1);
    });

    it("filters by status=open and includes replies", async () => {
      const uri = "https://example.com/status-open";
      const c1 = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q1", body: "open one", author: "a" }),
      })).json();
      // Add a reply to the open root
      const r1 = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, body: "reply to open", author: "a", parent: c1.id }),
      })).json();
      const c2 = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q2", body: "closed one", author: "a" }),
      })).json();
      await fetch(`${BASE}/comments/${c2.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "closed" }),
      });

      const res = await fetch(`${BASE}/comments?document=${c1.document}&status=open`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.data.length, 2);
      assert.equal(json.data[0].id, c1.id);
      assert.equal(json.data[0].status, "open");
      assert.equal(json.data[1].id, r1.id);
      assert.equal(json.data[1].status, null);
    });

    it("filters by status=closed and includes replies", async () => {
      const uri = "https://example.com/status-closed";
      const c1 = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q1", body: "open one", author: "a" }),
      })).json();
      const c2 = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q2", body: "closed one", author: "a" }),
      })).json();
      // Add a reply to c2 before closing it
      const r2 = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, body: "reply to closed", author: "a", parent: c2.id }),
      })).json();
      await fetch(`${BASE}/comments/${c2.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "closed" }),
      });

      const res = await fetch(`${BASE}/comments?document=${c1.document}&status=closed`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.data.length, 2);
      assert.equal(json.data[0].id, c2.id);
      assert.equal(json.data[0].status, "closed");
      assert.equal(json.data[1].id, r2.id);
      assert.equal(json.data[1].status, null);
    });

    it("returns all when no status param, replies have null status", async () => {
      const uri = "https://example.com/status-all";
      const c1 = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q1", body: "open one", author: "a" }),
      })).json();
      await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q2", body: "closed one", author: "a" }),
      })).json();
      // Add a reply
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, body: "reply", author: "a", parent: c1.id }),
      });

      const res = await fetch(`${BASE}/comments?document=${c1.document}`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.data.length, 3);
      // Root comments have status, replies have null
      const roots = json.data.filter((c) => !c.parent);
      const replies = json.data.filter((c) => c.parent);
      roots.forEach((c) => assert.ok(c.status === "open" || c.status === "closed"));
      replies.forEach((c) => assert.equal(c.status, null));
    });

    it("returns 400 for invalid status", async () => {
      const c = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/status-invalid", quote: "q", body: "b", author: "a" }),
      })).json();

      const res = await fetch(`${BASE}/comments?document=${c.document}&status=invalid`);
      assert.equal(res.status, 400);
      const json = await res.json();
      assert.ok(json.error.message.includes("status"));
    });

    it("status filter works with uri param", async () => {
      const uri = "https://example.com/status-uri-filter";
      const c1 = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q1", body: "open one", author: "a" }),
      })).json();
      // Add reply to open root
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, body: "reply", author: "a", parent: c1.id }),
      });
      const c2 = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q2", body: "closed one", author: "a" }),
      })).json();
      await fetch(`${BASE}/comments/${c2.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "closed" }),
      });

      const res = await fetch(`${BASE}/comments?uri=${encodeURIComponent(uri)}&status=open`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.data.length, 2); // root + reply
      assert.equal(json.data[0].id, c1.id);
    });

    it("filters by search keyword in body", async () => {
      const uri = "https://example.com/search-body";
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q1", body: "fix the typo here", author: "Alice" }),
      });
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q2", body: "looks good to me", author: "Bob" }),
      });

      const res = await fetch(`${BASE}/comments?uri=${encodeURIComponent(uri)}&search=typo`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.data.length, 1);
      assert.ok(json.data[0].body.includes("typo"));
    });

    it("filters by search keyword in quote", async () => {
      const uri = "https://example.com/search-quote";
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "important paragraph", body: "needs work", author: "Alice" }),
      });
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "other text", body: "fine", author: "Bob" }),
      });

      const res = await fetch(`${BASE}/comments?uri=${encodeURIComponent(uri)}&search=important`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.data.length, 1);
      assert.ok(json.data[0].quote.includes("important"));
    });

    it("search is case-insensitive", async () => {
      const uri = "https://example.com/search-case";
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q", body: "Fix the Bug", author: "a" }),
      });

      const res = await fetch(`${BASE}/comments?uri=${encodeURIComponent(uri)}&search=fix%20the%20bug`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.data.length, 1);
    });

    it("search with no matches returns empty list", async () => {
      const uri = "https://example.com/search-empty";
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q", body: "hello world", author: "a" }),
      });

      const res = await fetch(`${BASE}/comments?uri=${encodeURIComponent(uri)}&search=nonexistent`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.data.length, 0);
    });

    it("filters by author", async () => {
      const uri = "https://example.com/author-filter";
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q1", body: "comment 1", author: "Alice" }),
      });
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q2", body: "comment 2", author: "Bob" }),
      });

      const res = await fetch(`${BASE}/comments?uri=${encodeURIComponent(uri)}&author=Alice`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.data.length, 1);
      assert.equal(json.data[0].author, "Alice");
    });

    it("author filter is case-insensitive", async () => {
      const uri = "https://example.com/author-case";
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q", body: "b", author: "Alice" }),
      });

      const res = await fetch(`${BASE}/comments?uri=${encodeURIComponent(uri)}&author=alice`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.data.length, 1);
    });

    it("combines search and author filters", async () => {
      const uri = "https://example.com/combined-filter";
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q1", body: "fix the typo", author: "Alice" }),
      });
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q2", body: "fix the bug", author: "Bob" }),
      });
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q3", body: "looks good", author: "Alice" }),
      });

      const res = await fetch(`${BASE}/comments?uri=${encodeURIComponent(uri)}&search=fix&author=Alice`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.data.length, 1);
      assert.equal(json.data[0].body, "fix the typo");
      assert.equal(json.data[0].author, "Alice");
    });

    it("combines search with document param", async () => {
      const uri = "https://example.com/search-doc";
      const c1 = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q1", body: "fix this issue", author: "a" }),
      })).json();
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q2", body: "looks fine", author: "a" }),
      });

      const res = await fetch(`${BASE}/comments?document=${c1.document}&search=issue`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.data.length, 1);
      assert.equal(json.data[0].id, c1.id);
    });
  });

  describe("GET /comments/:id", () => {
    it("retrieves a comment", async () => {
      const create = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/p", quote: "q", body: "b", author: "a" }),
      });
      const cmt = await create.json();

      const res = await fetch(`${BASE}/comments/${cmt.id}`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.id, cmt.id);
      assert.equal(json.object, "comment");
    });

    it("returns 404 for missing comment", async () => {
      const res = await fetch(`${BASE}/comments/cmt_nonexistent`);
      assert.equal(res.status, 404);
    });
  });

  describe("PATCH /comments/:id", () => {
    it("updates body", async () => {
      const create = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/p", quote: "q", body: "old", author: "a" }),
      });
      const cmt = await create.json();

      const res = await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: "new body" }),
      });
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.body, "new body");
    });

    it("updates status to closed", async () => {
      const create = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/p", quote: "q", body: "b", author: "a" }),
      });
      const cmt = await create.json();

      const res = await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "closed" }),
      });
      const json = await res.json();
      assert.equal(json.status, "closed");
    });

    it("updates status to open", async () => {
      const create = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/p", quote: "q", body: "b", author: "a" }),
      });
      const cmt = await create.json();

      // Close first
      await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "closed" }),
      });

      const res = await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "open" }),
      });
      const json = await res.json();
      assert.equal(json.status, "open");
    });

    it("returns 400 for invalid status", async () => {
      const create = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/p", quote: "q", body: "b", author: "a" }),
      });
      const cmt = await create.json();

      const res = await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "invalid" }),
      });
      assert.equal(res.status, 400);
      const json = await res.json();
      assert.ok(json.error.message);
    });

    it("returns 404 for missing comment", async () => {
      const res = await fetch(`${BASE}/comments/cmt_nonexistent`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: "new" }),
      });
      assert.equal(res.status, 404);
    });
  });

  describe("GET /comments cross-document and expand", () => {
    it("GET /comments?status=open without document/uri returns cross-document results", async () => {
      const uri1 = "https://example.com/cross-doc-1";
      const uri2 = "https://example.com/cross-doc-2";
      const c1 = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: uri1, quote: "q1", body: "open doc1", author: "a" }),
      })).json();
      const c2 = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: uri2, quote: "q2", body: "open doc2", author: "a" }),
      })).json();
      // Add reply to c1
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: uri1, body: "reply", author: "a", parent: c1.id }),
      });
      // Close c2
      await fetch(`${BASE}/comments/${c2.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "closed" }),
      });

      const res = await fetch(`${BASE}/comments?status=open`);
      const json = await res.json();
      assert.equal(res.status, 200);
      // Should include c1 (open root) and its reply, but not c2 (closed)
      const ids = json.data.map((c) => c.id);
      assert.ok(ids.includes(c1.id));
      assert.ok(!ids.includes(c2.id));
      // reply should be in results
      const reply = json.data.find((c) => c.parent === c1.id);
      assert.ok(reply);
      assert.equal(reply.status, null);
    });

    it("GET /comments?document=X&expand=document hydrates document object", async () => {
      const uri = "https://example.com/expand-test";
      const c = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q", body: "b", author: "a" }),
      })).json();

      const res = await fetch(`${BASE}/comments?document=${c.document}&expand=document`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.data[0].document.object, "document");
      assert.equal(json.data[0].document.uri, uri);
      assert.ok(json.data[0].document.id);
    });

    it("GET /comments?status=open&expand=document cross-document with hydration", async () => {
      const uri = "https://example.com/expand-cross";
      const c = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q", body: "b", author: "a" }),
      })).json();

      const res = await fetch(`${BASE}/comments?status=open&expand=document`);
      const json = await res.json();
      assert.equal(res.status, 200);
      const match = json.data.find((d) => d.id === c.id);
      assert.ok(match);
      assert.equal(match.document.object, "document");
      assert.equal(match.document.uri, uri);
    });

    it("GET /comments/:id?expand=document hydrates on single-resource fetch", async () => {
      const uri = "https://example.com/expand-single";
      const c = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q", body: "b", author: "a" }),
      })).json();

      const res = await fetch(`${BASE}/comments/${c.id}?expand=document`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.document.object, "document");
      assert.equal(json.document.uri, uri);
      assert.ok(json.document.id);
    });
  });

  describe("PATCH /comments/:id reply guards", () => {
    it("returns 400 when setting status on a reply", async () => {
      const parent = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/patch-reply", quote: "q", body: "parent", author: "a" }),
      })).json();
      const reply = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/patch-reply", body: "reply", author: "a", parent: parent.id }),
      })).json();

      const res = await fetch(`${BASE}/comments/${reply.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "closed" }),
      });
      assert.equal(res.status, 400);
      const json = await res.json();
      assert.ok(json.error.message.includes("replies"));
    });

    it("allows updating body on a reply", async () => {
      const parent = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/patch-reply-body", quote: "q", body: "parent", author: "a" }),
      })).json();
      const reply = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/patch-reply-body", body: "old reply", author: "a", parent: parent.id }),
      })).json();

      const res = await fetch(`${BASE}/comments/${reply.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: "updated reply" }),
      });
      assert.equal(res.status, 200);
      const json = await res.json();
      assert.equal(json.body, "updated reply");
      assert.equal(json.status, null);
    });
  });

  describe("DELETE /comments/:id", () => {
    it("deletes comment and cascades replies", async () => {
      const parent = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/p", quote: "q", body: "parent", author: "a" }),
      });
      const parentJson = await parent.json();

      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/p", body: "reply", author: "a", parent: parentJson.id }),
      });

      const res = await fetch(`${BASE}/comments/${parentJson.id}`, { method: "DELETE" });
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.id, parentJson.id);

      // Verify replies are also deleted
      const cmts = await fetch(`${BASE}/comments?document=${parentJson.document}`);
      const cmtJson = await cmts.json();
      assert.equal(cmtJson.data.length, 0);
    });

    it("returns 404 for missing comment", async () => {
      const res = await fetch(`${BASE}/comments/cmt_nonexistent`, { method: "DELETE" });
      assert.equal(res.status, 404);
    });
  });

  // ── Admin dashboard ──────────────────────────────────────────────

  describe("Admin dashboard", () => {

    // Helper: extract Set-Cookie header from response
    function getCookie(res) {
      const raw = res.headers.get("set-cookie");
      if (!raw) return "";
      return raw.split(";")[0];
    }

    // Helper: login and return session cookie
    async function adminLogin() {
      const res = await fetch(`${BASE}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "password=test-admin-pw",
        redirect: "manual",
      });
      return getCookie(res);
    }

    it("GET /admin redirects to login when unauthenticated", async () => {
      const res = await fetch(`${BASE}/admin/`, { redirect: "manual" });
      assert.equal(res.status, 302);
      assert.ok(res.headers.get("location").includes("/admin/login"));
    });

    it("GET /admin/login returns login page", async () => {
      const res = await fetch(`${BASE}/admin/login`);
      assert.equal(res.status, 200);
      const html = await res.text();
      assert.ok(html.includes("Remarq Admin"));
      assert.ok(html.includes('type="password"'));
    });

    it("POST /admin/login rejects wrong password", async () => {
      const res = await fetch(`${BASE}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "password=wrong",
        redirect: "manual",
      });
      assert.equal(res.status, 401);
      const html = await res.text();
      assert.ok(html.includes("Invalid password"));
    });

    it("POST /admin/login accepts correct password and redirects", async () => {
      const res = await fetch(`${BASE}/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: "password=test-admin-pw",
        redirect: "manual",
      });
      assert.equal(res.status, 302);
      assert.ok(res.headers.get("location").includes("/admin/documents"));
      assert.ok(getCookie(res));
    });

    it("GET /admin/documents shows document list when authenticated", async () => {
      const cookie = await adminLogin();

      // Create a document with a comment
      const docRes = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/admin-test" }),
      });
      const doc = await docRes.json();
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ document: doc.id, quote: "q", body: "test comment", author: "admin-tester" }),
      });

      const res = await fetch(`${BASE}/admin/documents`, {
        headers: { Cookie: cookie },
      });
      assert.equal(res.status, 200);
      const html = await res.text();
      assert.ok(html.includes("example.com/admin-test"));
      assert.ok(html.includes("Documents"));
    });

    it("GET /admin/documents/:id shows document detail with comments", async () => {
      const cookie = await adminLogin();

      const docRes = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/admin-detail" }),
      });
      const doc = await docRes.json();
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ document: doc.id, quote: "quoted text", body: "detail comment", author: "tester" }),
      });

      const res = await fetch(`${BASE}/admin/documents/${doc.id}`, {
        headers: { Cookie: cookie },
      });
      assert.equal(res.status, 200);
      const html = await res.text();
      assert.ok(html.includes("admin-detail"));
      assert.ok(html.includes("detail comment"));
      assert.ok(html.includes("tester"));
      assert.ok(html.includes("quoted text"));
    });

    it("GET /admin/documents/:id returns 404 for missing document", async () => {
      const cookie = await adminLogin();
      const res = await fetch(`${BASE}/admin/documents/doc_nonexistent`, {
        headers: { Cookie: cookie },
      });
      assert.equal(res.status, 404);
    });

    it("POST /admin/comments/:id/delete deletes comment with CSRF and logs moderation", async () => {
      const cookie = await adminLogin();

      // Create a comment
      const docRes = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/admin-delete" }),
      });
      const doc = await docRes.json();
      const cmtRes = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ document: doc.id, quote: "q", body: "spam comment", author: "spammer" }),
      });
      const cmt = await cmtRes.json();

      // Load the document detail page to get the CSRF token
      const detailRes = await fetch(`${BASE}/admin/documents/${doc.id}`, {
        headers: { Cookie: cookie },
      });
      const html = await detailRes.text();
      const csrfMatch = html.match(/name="_csrf" value="([^"]+)"/);
      assert.ok(csrfMatch, "CSRF token should be present in form");
      const csrfToken = csrfMatch[1];

      // Delete the comment
      const delRes = await fetch(`${BASE}/admin/comments/${cmt.id}/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Cookie: cookie,
        },
        body: `_csrf=${csrfToken}&reason=spam`,
        redirect: "manual",
      });
      assert.equal(delRes.status, 302);

      // Verify comment is deleted
      const getRes = await fetch(`${BASE}/comments/${cmt.id}`);
      assert.equal(getRes.status, 404);

      // Verify moderation log entry
      const { rows } = await pool.query(
        "SELECT * FROM moderation_log WHERE comment_id = $1",
        [cmt.id]
      );
      assert.equal(rows.length, 1);
      assert.equal(rows[0].action, "delete");
      assert.equal(rows[0].reason, "spam");
      assert.equal(rows[0].comment_author, "spammer");
    });

    it("POST /admin/comments/:id/delete rejects without CSRF token", async () => {
      const cookie = await adminLogin();

      const docRes = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/admin-csrf" }),
      });
      const doc = await docRes.json();
      const cmtRes = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ document: doc.id, quote: "q", body: "b", author: "a" }),
      });
      const cmt = await cmtRes.json();

      const res = await fetch(`${BASE}/admin/comments/${cmt.id}/delete`, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Cookie: cookie,
        },
        body: "reason=test",
        redirect: "manual",
      });
      assert.equal(res.status, 403);
    });

    it("POST /admin/logout destroys session", async () => {
      const cookie = await adminLogin();

      // Logout
      const logoutRes = await fetch(`${BASE}/admin/logout`, {
        method: "POST",
        headers: { Cookie: cookie },
        redirect: "manual",
      });
      assert.equal(logoutRes.status, 302);
      assert.ok(logoutRes.headers.get("location").includes("/admin/login"));

      // Session should be invalid now
      const res = await fetch(`${BASE}/admin/documents`, {
        headers: { Cookie: cookie },
        redirect: "manual",
      });
      assert.equal(res.status, 302);
      assert.ok(res.headers.get("location").includes("/admin/login"));
    });

    it("serves admin.css static file", async () => {
      const res = await fetch(`${BASE}/admin/admin.css`);
      assert.equal(res.status, 200);
      const css = await res.text();
      assert.ok(css.includes(".admin-nav"));
    });
  });
});

// ── Notification unit tests ──────────────────────────────────────────

describe("unsubscribe tokens", async () => {
  const { createUnsubscribeToken, verifyUnsubscribeToken } = await import("./notifications/unsubscribe.js");

  it("creates a base64url token", () => {
    const token = createUnsubscribeToken("user@example.com", "doc_abc123");
    assert.ok(token.length > 0);
    // base64url chars only
    assert.match(token, /^[A-Za-z0-9_-]+$/);
  });

  it("produces deterministic tokens for same input", () => {
    const t1 = createUnsubscribeToken("user@example.com", "doc_abc123");
    const t2 = createUnsubscribeToken("user@example.com", "doc_abc123");
    assert.equal(t1, t2);
  });

  it("produces different tokens for different emails", () => {
    const t1 = createUnsubscribeToken("a@example.com", "doc_abc123");
    const t2 = createUnsubscribeToken("b@example.com", "doc_abc123");
    assert.notEqual(t1, t2);
  });

  it("produces different tokens for different documents", () => {
    const t1 = createUnsubscribeToken("user@example.com", "doc_abc");
    const t2 = createUnsubscribeToken("user@example.com", "doc_xyz");
    assert.notEqual(t1, t2);
  });

  it("verifies a valid token", () => {
    const token = createUnsubscribeToken("user@example.com", "doc_abc123");
    assert.equal(verifyUnsubscribeToken(token, "user@example.com", "doc_abc123"), true);
  });

  it("rejects a tampered token", () => {
    const token = createUnsubscribeToken("user@example.com", "doc_abc123");
    const tampered = token.slice(0, -1) + (token.endsWith("a") ? "b" : "a");
    assert.equal(verifyUnsubscribeToken(tampered, "user@example.com", "doc_abc123"), false);
  });

  it("rejects wrong email", () => {
    const token = createUnsubscribeToken("user@example.com", "doc_abc123");
    assert.equal(verifyUnsubscribeToken(token, "other@example.com", "doc_abc123"), false);
  });

  it("rejects wrong document", () => {
    const token = createUnsubscribeToken("user@example.com", "doc_abc123");
    assert.equal(verifyUnsubscribeToken(token, "user@example.com", "doc_other"), false);
  });

  it("rejects empty token", () => {
    assert.equal(verifyUnsubscribeToken("", "user@example.com", "doc_abc123"), false);
  });
});

describe("email templates", async () => {
  const { instantNotification, digestNotification, escapeHtml, truncate } = await import("./notifications/templates.js");

  it("escapeHtml escapes special characters", () => {
    assert.equal(escapeHtml('<script>"&\''), "&lt;script&gt;&quot;&amp;&#39;");
  });

  it("escapeHtml handles empty/null", () => {
    assert.equal(escapeHtml(""), "");
    assert.equal(escapeHtml(null), "");
    assert.equal(escapeHtml(undefined), "");
  });

  it("truncate shortens long strings", () => {
    assert.equal(truncate("abcdefghij", 5), "abcde...");
  });

  it("truncate preserves short strings", () => {
    assert.equal(truncate("hello", 10), "hello");
  });

  it("truncate handles empty/null", () => {
    assert.equal(truncate("", 10), "");
    assert.equal(truncate(null, 10), "");
  });

  it("instantNotification returns subject and html", () => {
    const result = instantNotification({
      documentUri: "https://example.com/page",
      quote: "some quoted text",
      commentBody: "This needs fixing",
      commentAuthor: "Alice",
      unsubscribeUrl: "https://example.com/unsub",
    });
    assert.ok(result.subject.includes("New comment"));
    assert.ok(result.html.includes("Alice"));
    assert.ok(result.html.includes("This needs fixing"));
    assert.ok(result.html.includes("some quoted text"));
    assert.ok(result.html.includes("https://example.com/unsub"));
  });

  it("instantNotification HTML-escapes user content", () => {
    const result = instantNotification({
      documentUri: "https://example.com/page",
      quote: "<script>alert(1)</script>",
      commentBody: '<img onerror="hack()">',
      commentAuthor: "<b>Evil</b>",
      unsubscribeUrl: "https://example.com/unsub",
    });
    assert.ok(!result.html.includes("<script>"));
    assert.ok(!result.html.includes("<img"));
    assert.ok(!result.html.includes("<b>Evil"));
    assert.ok(result.html.includes("&lt;script&gt;"));
  });

  it("instantNotification handles missing quote", () => {
    const result = instantNotification({
      documentUri: "https://example.com/page",
      quote: "",
      commentBody: "hello",
      commentAuthor: "Bob",
      unsubscribeUrl: "https://example.com/unsub",
    });
    assert.ok(result.html.includes("hello"));
    // No blockquote when quote is empty
    assert.ok(!result.html.includes("<blockquote"));
  });

  it("digestNotification renders multiple items", () => {
    const result = digestNotification({
      documentUri: "https://example.com/page",
      items: [
        { quote: "q1", commentBody: "body1", commentAuthor: "Alice" },
        { quote: "q2", commentBody: "body2", commentAuthor: "Bob" },
      ],
      unsubscribeUrl: "https://example.com/unsub",
    });
    assert.ok(result.subject.includes("2 new comments"));
    assert.ok(result.html.includes("Alice"));
    assert.ok(result.html.includes("Bob"));
    assert.ok(result.html.includes("body1"));
    assert.ok(result.html.includes("body2"));
  });

  it("digestNotification singular for 1 item", () => {
    const result = digestNotification({
      documentUri: "https://example.com/page",
      items: [{ quote: "q", commentBody: "body", commentAuthor: "Alice" }],
      unsubscribeUrl: "https://example.com/unsub",
    });
    assert.ok(result.subject.includes("1 new comment"));
    assert.ok(!result.subject.includes("comments"));
  });

  it("digestNotification HTML-escapes user content", () => {
    const result = digestNotification({
      documentUri: "https://example.com/page",
      items: [{ quote: "<script>", commentBody: "<b>bad</b>", commentAuthor: "<img>" }],
      unsubscribeUrl: "https://example.com/unsub",
    });
    assert.ok(!result.html.includes("<script>"));
    assert.ok(!result.html.includes("<b>bad"));
    assert.ok(result.html.includes("&lt;script&gt;"));
  });
});

describe("email transport", async () => {
  const { sendEmail, _resetTransporter, _setTransporter } = await import("./notifications/email.js");

  beforeEach(() => {
    _resetTransporter();
  });

  it("sendEmail returns null when SMTP_HOST is not set", async () => {
    delete process.env.SMTP_HOST;
    const result = await sendEmail("user@example.com", "test", "<p>hi</p>");
    assert.equal(result, null);
  });

  it("sendEmail calls transporter.sendMail when set", async () => {
    const sent = [];
    _setTransporter({
      sendMail: async (opts) => { sent.push(opts); return { messageId: "test-123" }; },
    });
    const result = await sendEmail("user@example.com", "Test Subject", "<p>body</p>");
    assert.equal(sent.length, 1);
    assert.equal(sent[0].to, "user@example.com");
    assert.equal(sent[0].subject, "Test Subject");
    assert.ok(result.messageId);
  });
});

describe("notification service", async () => {
  const { notifyOnComment, runDigest, buildUnsubscribeUrl } = await import("./notifications/service.js");
  const { _setTransporter, _resetTransporter } = await import("./notifications/email.js");

  let pool;

  before(async () => {
    ({ pool } = await import("./index.js"));
  });

  beforeEach(async () => {
    _resetTransporter();
    await pool.query("DELETE FROM pending_notifications");
    await pool.query("DELETE FROM notification_preferences");
    await pool.query("DELETE FROM comments WHERE parent IS NOT NULL");
    await pool.query("DELETE FROM comments");
    await pool.query("DELETE FROM documents");
  });

  it("buildUnsubscribeUrl includes token, email, and document", () => {
    const url = buildUnsubscribeUrl("user@example.com", "doc_123");
    assert.ok(url.includes("token="));
    assert.ok(url.includes("email="));
    assert.ok(url.includes("document=doc_123"));
  });

  it("notifyOnComment sends to owner for top-level comment", async () => {
    const sent = [];
    _setTransporter({
      sendMail: async (opts) => { sent.push(opts); },
    });

    // Create a document with owner_email
    await pool.query("INSERT INTO documents (id, uri, owner_email) VALUES ('doc_notify1', 'https://example.com/n1', 'owner@example.com')");
    // Create a comment
    await pool.query("INSERT INTO comments (id, document, quote, body, author, status) VALUES ('cmt_notify1', 'doc_notify1', 'quote', 'hello', 'someone', 'open')");

    const comment = { id: "cmt_notify1", quote: "quote", body: "hello", author: "someone", parent: null };
    await notifyOnComment(pool, comment, "doc_notify1");

    assert.equal(sent.length, 1);
    assert.equal(sent[0].to, "owner@example.com");
  });

  it("notifyOnComment skips when author is owner", async () => {
    const sent = [];
    _setTransporter({
      sendMail: async (opts) => { sent.push(opts); },
    });

    await pool.query("INSERT INTO documents (id, uri, owner_email) VALUES ('doc_notify2', 'https://example.com/n2', 'owner@example.com')");
    await pool.query("INSERT INTO comments (id, document, quote, body, author, status) VALUES ('cmt_notify2', 'doc_notify2', 'quote', 'hello', 'owner@example.com', 'open')");

    const comment = { id: "cmt_notify2", quote: "quote", body: "hello", author: "owner@example.com", parent: null };
    await notifyOnComment(pool, comment, "doc_notify2");

    assert.equal(sent.length, 0);
  });

  it("notifyOnComment skips when no owner_email", async () => {
    const sent = [];
    _setTransporter({
      sendMail: async (opts) => { sent.push(opts); },
    });

    await pool.query("INSERT INTO documents (id, uri) VALUES ('doc_notify3', 'https://example.com/n3')");
    await pool.query("INSERT INTO comments (id, document, quote, body, author, status) VALUES ('cmt_notify3', 'doc_notify3', 'quote', 'hello', 'someone', 'open')");

    const comment = { id: "cmt_notify3", quote: "quote", body: "hello", author: "someone", parent: null };
    await notifyOnComment(pool, comment, "doc_notify3");

    assert.equal(sent.length, 0);
  });

  it("notifyOnComment enqueues for digest mode", async () => {
    const sent = [];
    _setTransporter({
      sendMail: async (opts) => { sent.push(opts); },
    });

    await pool.query("INSERT INTO documents (id, uri, owner_email) VALUES ('doc_notify4', 'https://example.com/n4', 'owner@example.com')");
    await pool.query("INSERT INTO notification_preferences (document, email, mode) VALUES ('doc_notify4', 'owner@example.com', 'digest')");
    await pool.query("INSERT INTO comments (id, document, quote, body, author, status) VALUES ('cmt_notify4', 'doc_notify4', 'quote', 'hello', 'someone', 'open')");

    const comment = { id: "cmt_notify4", quote: "quote", body: "hello", author: "someone", parent: null };
    await notifyOnComment(pool, comment, "doc_notify4");

    // No instant email sent
    assert.equal(sent.length, 0);
    // But pending notification exists
    const { rows } = await pool.query("SELECT * FROM pending_notifications WHERE email = 'owner@example.com'");
    assert.equal(rows.length, 1);
    assert.equal(rows[0].comment, "cmt_notify4");
  });

  it("notifyOnComment respects none mode", async () => {
    const sent = [];
    _setTransporter({
      sendMail: async (opts) => { sent.push(opts); },
    });

    await pool.query("INSERT INTO documents (id, uri, owner_email) VALUES ('doc_notify5', 'https://example.com/n5', 'owner@example.com')");
    await pool.query("INSERT INTO notification_preferences (document, email, mode) VALUES ('doc_notify5', 'owner@example.com', 'none')");
    await pool.query("INSERT INTO comments (id, document, quote, body, author, status) VALUES ('cmt_notify5', 'doc_notify5', 'quote', 'hello', 'someone', 'open')");

    const comment = { id: "cmt_notify5", quote: "quote", body: "hello", author: "someone", parent: null };
    await notifyOnComment(pool, comment, "doc_notify5");

    assert.equal(sent.length, 0);
    const { rows } = await pool.query("SELECT * FROM pending_notifications");
    assert.equal(rows.length, 0);
  });

  it("notifyOnComment notifies parent author on reply", async () => {
    const sent = [];
    _setTransporter({
      sendMail: async (opts) => { sent.push(opts); },
    });

    await pool.query("INSERT INTO documents (id, uri) VALUES ('doc_notify6', 'https://example.com/n6')");
    // Parent comment by alice
    await pool.query("INSERT INTO comments (id, document, quote, body, author, status) VALUES ('cmt_parent6', 'doc_notify6', 'quote', 'original', 'alice@test.com', 'open')");
    // Subscribe alice to this document
    await pool.query("INSERT INTO notification_preferences (document, email, mode) VALUES ('doc_notify6', 'alice@test.com', 'instant')");
    // Reply by bob
    await pool.query("INSERT INTO comments (id, document, quote, body, author, parent) VALUES ('cmt_reply6', 'doc_notify6', '', 'reply text', 'bob', 'cmt_parent6')");

    const comment = { id: "cmt_reply6", quote: "", body: "reply text", author: "bob", parent: "cmt_parent6" };
    await notifyOnComment(pool, comment, "doc_notify6");

    assert.equal(sent.length, 1);
    assert.equal(sent[0].to, "alice@test.com");
  });

  it("notifyOnComment does NOT notify unrelated subscribers on reply", async () => {
    const sent = [];
    _setTransporter({
      sendMail: async (opts) => { sent.push(opts); },
    });

    await pool.query("INSERT INTO documents (id, uri) VALUES ('doc_notify7', 'https://example.com/n7')");
    // Parent comment by alice
    await pool.query("INSERT INTO comments (id, document, quote, body, author, status) VALUES ('cmt_parent7', 'doc_notify7', 'quote', 'original', 'alice@test.com', 'open')");
    // Subscribe alice AND charlie — charlie is unrelated to this thread
    await pool.query("INSERT INTO notification_preferences (document, email, mode) VALUES ('doc_notify7', 'alice@test.com', 'instant')");
    await pool.query("INSERT INTO notification_preferences (document, email, mode) VALUES ('doc_notify7', 'charlie@test.com', 'instant')");
    // Reply by bob
    await pool.query("INSERT INTO comments (id, document, quote, body, author, parent) VALUES ('cmt_reply7', 'doc_notify7', '', 'reply text', 'bob', 'cmt_parent7')");

    const comment = { id: "cmt_reply7", quote: "", body: "reply text", author: "bob", parent: "cmt_parent7" };
    await notifyOnComment(pool, comment, "doc_notify7");

    // Only alice (parent author) should be notified, not charlie
    assert.equal(sent.length, 1);
    assert.equal(sent[0].to, "alice@test.com");
  });

  it("runDigest sends batched emails and deletes pending rows", async () => {
    const sent = [];
    _setTransporter({
      sendMail: async (opts) => { sent.push(opts); },
    });

    await pool.query("INSERT INTO documents (id, uri) VALUES ('doc_digest1', 'https://example.com/d1')");
    await pool.query("INSERT INTO comments (id, document, quote, body, author, status) VALUES ('cmt_d1', 'doc_digest1', 'q1', 'body1', 'alice', 'open')");
    await pool.query("INSERT INTO comments (id, document, quote, body, author, status) VALUES ('cmt_d2', 'doc_digest1', 'q2', 'body2', 'bob', 'open')");
    await pool.query("INSERT INTO pending_notifications (email, document, comment) VALUES ('digest@test.com', 'doc_digest1', 'cmt_d1')");
    await pool.query("INSERT INTO pending_notifications (email, document, comment) VALUES ('digest@test.com', 'doc_digest1', 'cmt_d2')");

    await runDigest(pool);

    // One digest email with both items
    assert.equal(sent.length, 1);
    assert.equal(sent[0].to, "digest@test.com");
    assert.ok(sent[0].html.includes("body1"));
    assert.ok(sent[0].html.includes("body2"));

    // Pending notifications should be deleted
    const { rows } = await pool.query("SELECT * FROM pending_notifications");
    assert.equal(rows.length, 0);
  });

  it("runDigest handles empty queue gracefully", async () => {
    const sent = [];
    _setTransporter({
      sendMail: async (opts) => { sent.push(opts); },
    });

    await runDigest(pool);
    assert.equal(sent.length, 0);
  });
});

// ── Notification API integration tests ──────────────────────────────

describe("Notification API", async () => {
  let app, pool, initSchema, server, BASE;
  const { _setTransporter, _resetTransporter } = await import("./notifications/email.js");

  before(async () => {
    ({ app, pool, initSchema } = await import("./index.js"));
    await initSchema();

    await new Promise((resolve) => {
      server = app.listen(0, "127.0.0.1", () => {
        const port = server.address().port;
        BASE = `http://127.0.0.1:${port}`;
        resolve();
      });
    });
  });

  after(async () => {
    server.close();
  });

  beforeEach(async () => {
    _resetTransporter();
    await pool.query("DELETE FROM pending_notifications");
    await pool.query("DELETE FROM notification_preferences");
    await pool.query("DELETE FROM moderation_log");
    await pool.query("DELETE FROM comments WHERE parent IS NOT NULL");
    await pool.query("DELETE FROM comments");
    await pool.query("DELETE FROM documents");
  });

  // ── Subscribe ──────────────────────────────────────────────

  describe("POST /notifications/subscribe", () => {
    it("creates a subscription with instant mode by default", async () => {
      const docRes = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/sub-test" }),
      });
      const doc = await docRes.json();

      const res = await fetch(`${BASE}/notifications/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "test@example.com", document: doc.id }),
      });
      const json = await res.json();
      assert.equal(res.status, 201);
      assert.equal(json.object, "notification_preference");
      assert.equal(json.email, "test@example.com");
      assert.equal(json.mode, "instant");
    });

    it("creates a subscription with digest mode", async () => {
      const docRes = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/sub-digest" }),
      });
      const doc = await docRes.json();

      const res = await fetch(`${BASE}/notifications/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "test@example.com", document: doc.id, mode: "digest" }),
      });
      const json = await res.json();
      assert.equal(res.status, 201);
      assert.equal(json.mode, "digest");
    });

    it("returns 400 when email is missing", async () => {
      const res = await fetch(`${BASE}/notifications/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ document: "doc_123" }),
      });
      assert.equal(res.status, 400);
    });

    it("returns 400 when document is missing", async () => {
      const res = await fetch(`${BASE}/notifications/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "test@example.com" }),
      });
      assert.equal(res.status, 400);
    });

    it("returns 400 for invalid mode", async () => {
      const res = await fetch(`${BASE}/notifications/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "test@example.com", document: "doc_123", mode: "none" }),
      });
      assert.equal(res.status, 400);
    });

    it("returns 400 for invalid email format", async () => {
      const res = await fetch(`${BASE}/notifications/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "not-an-email", document: "doc_123" }),
      });
      assert.equal(res.status, 400);
      const json = await res.json();
      assert.ok(json.error.message.includes("email"));
    });

    it("returns 404 for nonexistent document", async () => {
      const res = await fetch(`${BASE}/notifications/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "test@example.com", document: "doc_nonexistent" }),
      });
      assert.equal(res.status, 404);
    });
  });

  // ── Preferences ────────────────────────────────────────────

  describe("PATCH /notifications/preferences", () => {
    it("updates preference mode", async () => {
      const docRes = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/pref-test" }),
      });
      const doc = await docRes.json();

      // Subscribe first
      await fetch(`${BASE}/notifications/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "test@example.com", document: doc.id }),
      });

      // Update to digest
      const res = await fetch(`${BASE}/notifications/preferences`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "test@example.com", document: doc.id, mode: "digest" }),
      });
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.mode, "digest");
    });

    it("upserts preference if not exists", async () => {
      const docRes = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/pref-upsert" }),
      });
      const doc = await docRes.json();

      const res = await fetch(`${BASE}/notifications/preferences`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "new@example.com", document: doc.id, mode: "none" }),
      });
      assert.equal(res.status, 200);
      const json = await res.json();
      assert.equal(json.mode, "none");
    });

    it("returns 400 for invalid mode", async () => {
      const res = await fetch(`${BASE}/notifications/preferences`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "test@example.com", document: "doc_123", mode: "invalid" }),
      });
      assert.equal(res.status, 400);
    });

    it("returns 400 when fields are missing", async () => {
      const res = await fetch(`${BASE}/notifications/preferences`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "test@example.com" }),
      });
      assert.equal(res.status, 400);
    });

    it("returns 400 for invalid email format", async () => {
      const res = await fetch(`${BASE}/notifications/preferences`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "garbage", document: "doc_123", mode: "instant" }),
      });
      assert.equal(res.status, 400);
      const json = await res.json();
      assert.ok(json.error.message.includes("email"));
    });

    it("returns 404 for nonexistent document", async () => {
      const res = await fetch(`${BASE}/notifications/preferences`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "test@example.com", document: "doc_nonexistent", mode: "instant" }),
      });
      assert.equal(res.status, 404);
    });
  });

  // ── Unsubscribe ────────────────────────────────────────────

  describe("GET /notifications/unsubscribe", () => {
    it("unsubscribes with valid token", async () => {
      const { createUnsubscribeToken } = await import("./notifications/unsubscribe.js");

      const docRes = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/unsub-test" }),
      });
      const doc = await docRes.json();

      // Subscribe first
      await fetch(`${BASE}/notifications/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "unsub@example.com", document: doc.id }),
      });

      const token = createUnsubscribeToken("unsub@example.com", doc.id);
      const res = await fetch(
        `${BASE}/notifications/unsubscribe?token=${encodeURIComponent(token)}&email=${encodeURIComponent("unsub@example.com")}&document=${encodeURIComponent(doc.id)}`
      );
      assert.equal(res.status, 200);
      const html = await res.text();
      assert.ok(html.includes("Unsubscribed"));

      // Verify preference is now 'none'
      const { rows } = await pool.query(
        "SELECT mode FROM notification_preferences WHERE document = $1 AND email = $2",
        [doc.id, "unsub@example.com"]
      );
      assert.equal(rows[0].mode, "none");
    });

    it("returns 403 for invalid token", async () => {
      const res = await fetch(
        `${BASE}/notifications/unsubscribe?token=invalid&email=test@example.com&document=doc_123`
      );
      assert.equal(res.status, 403);
    });

    it("returns 400 for missing params", async () => {
      const res = await fetch(`${BASE}/notifications/unsubscribe?token=abc`);
      assert.equal(res.status, 400);
    });
  });

  // ── Document owner_email ───────────────────────────────────

  describe("Document owner_email", () => {
    it("POST /documents sets owner_email", async () => {
      const res = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/owner-test", owner_email: "owner@test.com" }),
      });
      const json = await res.json();
      assert.equal(res.status, 201);
      assert.equal(json.owner_email, "owner@test.com");
    });

    it("PATCH /documents/:id updates owner_email", async () => {
      const docRes = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/owner-patch" }),
      });
      const doc = await docRes.json();

      const res = await fetch(`${BASE}/documents/${doc.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ owner_email: "new-owner@test.com" }),
      });
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.owner_email, "new-owner@test.com");
    });

    it("PATCH /documents/:id clears owner_email", async () => {
      const docRes = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/owner-clear", owner_email: "owner@test.com" }),
      });
      const doc = await docRes.json();

      const res = await fetch(`${BASE}/documents/${doc.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ owner_email: "" }),
      });
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.ok(!json.owner_email);
    });

    it("PATCH /documents/:id returns 404 for missing document", async () => {
      const res = await fetch(`${BASE}/documents/doc_nonexistent`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ owner_email: "owner@test.com" }),
      });
      assert.equal(res.status, 404);
    });
  });

  // ── End-to-end notification flow ───────────────────────────

  describe("Subscribe + comment notification flow", () => {
    it("subscriber receives instant notification on new comment", async () => {
      const sent = [];
      _setTransporter({
        sendMail: async (opts) => { sent.push(opts); },
      });

      // Create document with owner
      const docRes = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/flow-test", owner_email: "owner@flow.com" }),
      });
      const doc = await docRes.json();

      // Post a comment (not by owner)
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ document: doc.id, quote: "some text", body: "looks good!", author: "reviewer" }),
      });

      // Wait a tick for fire-and-forget notification
      await new Promise((resolve) => setTimeout(resolve, 100));

      assert.equal(sent.length, 1);
      assert.equal(sent[0].to, "owner@flow.com");
      assert.ok(sent[0].subject.includes("New comment"));
    });

    it("subscriber with digest mode gets pending notification", async () => {
      const sent = [];
      _setTransporter({
        sendMail: async (opts) => { sent.push(opts); },
      });

      const docRes = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/flow-digest", owner_email: "digest-owner@flow.com" }),
      });
      const doc = await docRes.json();

      // Set owner to digest mode
      await fetch(`${BASE}/notifications/preferences`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "digest-owner@flow.com", document: doc.id, mode: "digest" }),
      });

      // Post a comment
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ document: doc.id, quote: "text", body: "feedback here", author: "reviewer" }),
      });

      await new Promise((resolve) => setTimeout(resolve, 100));

      // No instant email
      assert.equal(sent.length, 0);
      // Pending notification exists
      const { rows } = await pool.query("SELECT * FROM pending_notifications WHERE email = 'digest-owner@flow.com'");
      assert.equal(rows.length, 1);
    });

    it("unsubscribed user does not receive notifications", async () => {
      const sent = [];
      _setTransporter({
        sendMail: async (opts) => { sent.push(opts); },
      });

      const docRes = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/flow-unsub", owner_email: "unsub-owner@flow.com" }),
      });
      const doc = await docRes.json();

      // Unsubscribe the owner
      await fetch(`${BASE}/notifications/preferences`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: "unsub-owner@flow.com", document: doc.id, mode: "none" }),
      });

      // Post a comment
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ document: doc.id, quote: "text", body: "hello", author: "reviewer" }),
      });

      await new Promise((resolve) => setTimeout(resolve, 100));
      assert.equal(sent.length, 0);
    });
  });
});

// ── Multi-tenant tests ──────────────────────────────────────────────

describe("Multi-tenant API", async () => {
  let app, pool, initSchema, server, BASE;

  const KEY_A = "test_key_tenant_a";
  const KEY_B = "test_key_tenant_b";

  before(async () => {
    // Enable multi-tenant mode — the tenant middleware checks this at request time
    process.env.MULTI_TENANT = "true";

    ({ app, pool, initSchema } = await import("./index.js"));
    // Schema already initialized by previous suite, but ensure api_keys table exists
    await initSchema();

    // Insert test API keys
    await pool.query("INSERT INTO api_keys (key, label) VALUES ($1, $2) ON CONFLICT DO NOTHING", [KEY_A, "Tenant A"]);
    await pool.query("INSERT INTO api_keys (key, label) VALUES ($1, $2) ON CONFLICT DO NOTHING", [KEY_B, "Tenant B"]);

    await new Promise((resolve) => {
      server = app.listen(0, "127.0.0.1", () => {
        const port = server.address().port;
        BASE = `http://127.0.0.1:${port}`;
        resolve();
      });
    });
  });

  after(async () => {
    server.close();
    delete process.env.MULTI_TENANT;
    await pool.query("DELETE FROM pending_notifications");
    await pool.query("DELETE FROM notification_preferences");
    await pool.query("DELETE FROM moderation_log");
    await pool.query("DELETE FROM comments WHERE parent IS NOT NULL");
    await pool.query("DELETE FROM comments");
    await pool.query("DELETE FROM documents");
    await pool.query("DELETE FROM api_keys WHERE key IN ($1, $2)", [KEY_A, KEY_B]);
    await pool.end();
  });

  beforeEach(async () => {
    await pool.query("DELETE FROM pending_notifications");
    await pool.query("DELETE FROM notification_preferences");
    await pool.query("DELETE FROM moderation_log");
    await pool.query("DELETE FROM comments WHERE parent IS NOT NULL");
    await pool.query("DELETE FROM comments");
    await pool.query("DELETE FROM documents");
  });

  function authHeader(key) {
    return { Authorization: `Bearer ${key}` };
  }

  // ── Auth middleware ──────────────────────────────────────────

  describe("tenant auth middleware", () => {
    it("returns 401 when no Authorization header is sent", async () => {
      const res = await fetch(`${BASE}/documents`);
      assert.equal(res.status, 401);
      const json = await res.json();
      assert.equal(json.error.message, "API key required");
    });

    it("returns 401 for invalid API key", async () => {
      const res = await fetch(`${BASE}/documents`, {
        headers: { Authorization: "Bearer invalid_key_12345" },
      });
      assert.equal(res.status, 401);
      const json = await res.json();
      assert.equal(json.error.message, "Invalid API key");
    });

    it("returns 401 for malformed Authorization header", async () => {
      const res = await fetch(`${BASE}/documents`, {
        headers: { Authorization: "Basic abc123" },
      });
      assert.equal(res.status, 401);
    });

    it("returns 401 for empty Bearer token", async () => {
      const res = await fetch(`${BASE}/documents`, {
        headers: { Authorization: "Bearer " },
      });
      assert.equal(res.status, 401);
    });

    it("allows valid API key", async () => {
      const res = await fetch(`${BASE}/documents`, {
        headers: authHeader(KEY_A),
      });
      assert.equal(res.status, 200);
    });

    it("health endpoint does not require auth", async () => {
      const res = await fetch(`${BASE}/health`);
      assert.equal(res.status, 200);
      const json = await res.json();
      assert.deepEqual(json, { status: "ok" });
    });
  });

  // ── Tenant isolation: documents ─────────────────────────────

  describe("document isolation", () => {
    it("tenant A cannot see tenant B documents", async () => {
      // Tenant A creates a document
      await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_A) },
        body: JSON.stringify({ uri: "https://example.com/page" }),
      });

      // Tenant B lists documents — should see nothing
      const res = await fetch(`${BASE}/documents`, {
        headers: authHeader(KEY_B),
      });
      const json = await res.json();
      assert.equal(json.data.length, 0);
    });

    it("same URI creates separate documents per tenant", async () => {
      const uri = "https://example.com/shared-page";

      const resA = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_A) },
        body: JSON.stringify({ uri }),
      });
      const docA = await resA.json();
      assert.equal(resA.status, 201);

      const resB = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_B) },
        body: JSON.stringify({ uri }),
      });
      const docB = await resB.json();
      assert.equal(resB.status, 201);

      // Different document IDs
      assert.notEqual(docA.id, docB.id);
      // Same URI
      assert.equal(docA.uri, docB.uri);
    });

    it("GET /documents/:id returns 404 for another tenant's document", async () => {
      const resA = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_A) },
        body: JSON.stringify({ uri: "https://example.com/a-only" }),
      });
      const docA = await resA.json();

      const res = await fetch(`${BASE}/documents/${docA.id}`, {
        headers: authHeader(KEY_B),
      });
      assert.equal(res.status, 404);
    });

    it("DELETE /documents/:id returns 404 for another tenant's document", async () => {
      const resA = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_A) },
        body: JSON.stringify({ uri: "https://example.com/a-delete" }),
      });
      const docA = await resA.json();

      const res = await fetch(`${BASE}/documents/${docA.id}`, {
        method: "DELETE",
        headers: authHeader(KEY_B),
      });
      assert.equal(res.status, 404);

      // Verify document still exists for tenant A
      const check = await fetch(`${BASE}/documents/${docA.id}`, {
        headers: authHeader(KEY_A),
      });
      assert.equal(check.status, 200);
    });
  });

  // ── Tenant isolation: comments ──────────────────────────────

  describe("comment isolation", () => {
    it("tenant A cannot see tenant B comments", async () => {
      // Tenant A creates a comment
      const cmtRes = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_A) },
        body: JSON.stringify({ uri: "https://example.com/p", quote: "q", body: "b", author: "a" }),
      });
      const cmt = await cmtRes.json();

      // Tenant B lists comments for same URI — should see nothing
      const res = await fetch(`${BASE}/comments?uri=${encodeURIComponent("https://example.com/p")}`, {
        headers: authHeader(KEY_B),
      });
      const json = await res.json();
      assert.equal(json.data.length, 0);

      // Tenant A sees the comment
      const resA = await fetch(`${BASE}/comments?uri=${encodeURIComponent("https://example.com/p")}`, {
        headers: authHeader(KEY_A),
      });
      const jsonA = await resA.json();
      assert.equal(jsonA.data.length, 1);
      assert.equal(jsonA.data[0].id, cmt.id);
    });

    it("GET /comments/:id returns 404 for another tenant's comment", async () => {
      const cmtRes = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_A) },
        body: JSON.stringify({ uri: "https://example.com/p2", quote: "q", body: "b", author: "a" }),
      });
      const cmt = await cmtRes.json();

      const res = await fetch(`${BASE}/comments/${cmt.id}`, {
        headers: authHeader(KEY_B),
      });
      assert.equal(res.status, 404);
    });

    it("PATCH /comments/:id returns 404 for another tenant's comment", async () => {
      const cmtRes = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_A) },
        body: JSON.stringify({ uri: "https://example.com/p3", quote: "q", body: "b", author: "a" }),
      });
      const cmt = await cmtRes.json();

      const res = await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_B) },
        body: JSON.stringify({ body: "hacked" }),
      });
      assert.equal(res.status, 404);

      // Verify comment unchanged for tenant A
      const check = await fetch(`${BASE}/comments/${cmt.id}`, {
        headers: authHeader(KEY_A),
      });
      const checkJson = await check.json();
      assert.equal(checkJson.body, "b");
    });

    it("DELETE /comments/:id returns 404 for another tenant's comment", async () => {
      const cmtRes = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_A) },
        body: JSON.stringify({ uri: "https://example.com/p4", quote: "q", body: "b", author: "a" }),
      });
      const cmt = await cmtRes.json();

      const res = await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "DELETE",
        headers: authHeader(KEY_B),
      });
      assert.equal(res.status, 404);

      // Verify comment still exists for tenant A
      const check = await fetch(`${BASE}/comments/${cmt.id}`, {
        headers: authHeader(KEY_A),
      });
      assert.equal(check.status, 200);
    });

    it("POST /comments with another tenant's document ID returns 404", async () => {
      const docRes = await fetch(`${BASE}/documents`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_A) },
        body: JSON.stringify({ uri: "https://example.com/cross-doc" }),
      });
      const doc = await docRes.json();

      const res = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_B) },
        body: JSON.stringify({ document: doc.id, quote: "q", body: "b", author: "a" }),
      });
      assert.equal(res.status, 404);
    });

    it("cross-tenant list: GET /comments without document/uri is scoped", async () => {
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_A) },
        body: JSON.stringify({ uri: "https://example.com/xa", quote: "q", body: "tenant A comment", author: "a" }),
      });
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_B) },
        body: JSON.stringify({ uri: "https://example.com/xb", quote: "q", body: "tenant B comment", author: "b" }),
      });

      const resA = await fetch(`${BASE}/comments`, { headers: authHeader(KEY_A) });
      const jsonA = await resA.json();
      assert.equal(jsonA.data.length, 1);
      assert.equal(jsonA.data[0].body, "tenant A comment");

      const resB = await fetch(`${BASE}/comments`, { headers: authHeader(KEY_B) });
      const jsonB = await resB.json();
      assert.equal(jsonB.data.length, 1);
      assert.equal(jsonB.data[0].body, "tenant B comment");
    });

    it("expand=document works within tenant scope", async () => {
      const cmtRes = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_A) },
        body: JSON.stringify({ uri: "https://example.com/expand-mt", quote: "q", body: "b", author: "a" }),
      });
      const cmt = await cmtRes.json();

      const res = await fetch(`${BASE}/comments/${cmt.id}?expand=document`, {
        headers: authHeader(KEY_A),
      });
      const json = await res.json();
      assert.equal(json.document.object, "document");
      assert.equal(json.document.uri, "https://example.com/expand-mt");
    });

    it("status filter works in multi-tenant mode", async () => {
      const uri = "https://example.com/status-mt";
      const c1 = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_A) },
        body: JSON.stringify({ uri, quote: "q1", body: "open one", author: "a" }),
      })).json();
      const c2 = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_A) },
        body: JSON.stringify({ uri, quote: "q2", body: "will close", author: "a" }),
      })).json();
      await fetch(`${BASE}/comments/${c2.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_A) },
        body: JSON.stringify({ status: "closed" }),
      });

      const res = await fetch(`${BASE}/comments?uri=${encodeURIComponent(uri)}&status=open`, {
        headers: authHeader(KEY_A),
      });
      const json = await res.json();
      assert.equal(json.data.length, 1);
      assert.equal(json.data[0].id, c1.id);
    });

    it("search filter works in multi-tenant mode", async () => {
      const uri = "https://example.com/search-mt";
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_A) },
        body: JSON.stringify({ uri, quote: "q1", body: "fix the typo", author: "Alice" }),
      });
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_A) },
        body: JSON.stringify({ uri, quote: "q2", body: "looks good", author: "Bob" }),
      });

      const res = await fetch(`${BASE}/comments?uri=${encodeURIComponent(uri)}&search=typo`, {
        headers: authHeader(KEY_A),
      });
      const json = await res.json();
      assert.equal(json.data.length, 1);
      assert.ok(json.data[0].body.includes("typo"));
    });
  });
});

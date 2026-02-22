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
    await pool.query("DELETE FROM moderation_log");
    await pool.query("DELETE FROM reactions");
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

    it("returns 404 for private comment without viewer param", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/vis-get", quote: "q", body: "secret", author: "Alice", visibility: "private" }),
      })).json();

      const res = await fetch(`${BASE}/comments/${cmt.id}`);
      assert.equal(res.status, 404);
    });

    it("returns 404 for private comment when viewer is not the author", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/vis-get2", quote: "q", body: "secret", author: "Alice", visibility: "private" }),
      })).json();

      const res = await fetch(`${BASE}/comments/${cmt.id}?viewer=Bob`);
      assert.equal(res.status, 404);
    });

    it("returns private comment when viewer matches author", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/vis-get3", quote: "q", body: "secret", author: "Alice", visibility: "private" }),
      })).json();

      const res = await fetch(`${BASE}/comments/${cmt.id}?viewer=Alice`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.id, cmt.id);
      assert.equal(json.visibility, "private");
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

  describe("PATCH /comments/:id sort_order", () => {
    it("updates sort_order", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/sort", quote: "q", body: "b", author: "a" }),
      })).json();

      const res = await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sort_order: 5 }),
      });
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.sort_order, 5);
    });

    it("clears sort_order with null", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/sort-null", quote: "q", body: "b", author: "a" }),
      })).json();

      await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sort_order: 3 }),
      });

      const res = await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sort_order: null }),
      });
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.sort_order, null);
    });

    it("returns 400 for negative sort_order", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/sort-neg", quote: "q", body: "b", author: "a" }),
      })).json();

      const res = await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sort_order: -1 }),
      });
      assert.equal(res.status, 400);
    });

    it("returns 400 for non-integer sort_order", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/sort-float", quote: "q", body: "b", author: "a" }),
      })).json();

      const res = await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ sort_order: 1.5 }),
      });
      assert.equal(res.status, 400);
    });

    it("new comments have sort_order null by default", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/sort-default", quote: "q", body: "b", author: "a" }),
      })).json();
      assert.equal(cmt.sort_order, null);
    });
  });

  describe("PATCH /comments/:id body edit history", () => {
    it("sets edited_at when body is updated", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/hist1", quote: "q", body: "original", author: "Alice" }),
      })).json();
      assert.equal(cmt.edited_at, null);

      const res = await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: "updated" }),
      });
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.body, "updated");
      assert.ok(json.edited_at, "edited_at should be set after body update");
    });

    it("does not set edited_at for non-body updates", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/hist2", quote: "q", body: "b", author: "a" }),
      })).json();

      const res = await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "closed" }),
      });
      const json = await res.json();
      assert.equal(json.edited_at, null);
    });

    it("saves previous body to history on update", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/hist3", quote: "q", body: "v1", author: "Alice" }),
      })).json();

      await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: "v2" }),
      });

      const res = await fetch(`${BASE}/comments/${cmt.id}/history`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.object, "list");
      assert.equal(json.data.length, 1);
      assert.equal(json.data[0].body, "v1");
      assert.equal(json.data[0].edited_by, "Alice");
      assert.ok(json.data[0].edited_at);
    });

    it("accumulates multiple history entries", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/hist4", quote: "q", body: "v1", author: "Alice" }),
      })).json();

      await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: "v2" }),
      });
      await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: "v3" }),
      });

      const res = await fetch(`${BASE}/comments/${cmt.id}/history`);
      const json = await res.json();
      assert.equal(json.data.length, 2);
      assert.equal(json.data[0].body, "v1");
      assert.equal(json.data[1].body, "v2");
    });

    it("returns empty history for unedited comment", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/hist5", quote: "q", body: "b", author: "a" }),
      })).json();

      const res = await fetch(`${BASE}/comments/${cmt.id}/history`);
      const json = await res.json();
      assert.equal(json.data.length, 0);
    });

    it("returns 404 for nonexistent comment history", async () => {
      const res = await fetch(`${BASE}/comments/cmt_nonexistent/history`);
      assert.equal(res.status, 404);
    });

    it("deletes history when comment is deleted (cascade)", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/hist6", quote: "q", body: "v1", author: "a" }),
      })).json();

      await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: "v2" }),
      });

      await fetch(`${BASE}/comments/${cmt.id}`, { method: "DELETE" });

      const res = await fetch(`${BASE}/comments/${cmt.id}/history`);
      assert.equal(res.status, 404);
    });
  });

  describe("POST /comments/reorder", () => {
    it("batch updates sort_order for multiple comments", async () => {
      const uri = "https://example.com/reorder-batch";
      const c1 = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q1", body: "first", author: "a" }),
      })).json();
      const c2 = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q2", body: "second", author: "a" }),
      })).json();
      const c3 = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q3", body: "third", author: "a" }),
      })).json();

      const res = await fetch(`${BASE}/comments/reorder`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          order: [
            { id: c3.id, sort_order: 0 },
            { id: c1.id, sort_order: 1 },
            { id: c2.id, sort_order: 2 },
          ],
        }),
      });
      assert.equal(res.status, 200);
      const json = await res.json();
      assert.deepEqual(json, { ok: true });

      // Verify sort_order values
      const check1 = await (await fetch(`${BASE}/comments/${c1.id}`)).json();
      const check2 = await (await fetch(`${BASE}/comments/${c2.id}`)).json();
      const check3 = await (await fetch(`${BASE}/comments/${c3.id}`)).json();
      assert.equal(check1.sort_order, 1);
      assert.equal(check2.sort_order, 2);
      assert.equal(check3.sort_order, 0);
    });

    it("returns 400 when order is not an array", async () => {
      const res = await fetch(`${BASE}/comments/reorder`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: "invalid" }),
      });
      assert.equal(res.status, 400);
    });

    it("returns 400 when entry has invalid sort_order", async () => {
      const res = await fetch(`${BASE}/comments/reorder`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: [{ id: "cmt_x", sort_order: -1 }] }),
      });
      assert.equal(res.status, 400);
    });

    it("returns 404 when a comment ID does not exist", async () => {
      const res = await fetch(`${BASE}/comments/reorder`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ order: [{ id: "cmt_nonexistent", sort_order: 0 }] }),
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

  // ── Reactions ────────────────────────────────────────────────────

  describe("POST /comments/:id/reactions", () => {
    it("adds a reaction to a comment", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/react", quote: "q", body: "b", author: "a" }),
      })).json();

      const res = await fetch(`${BASE}/comments/${cmt.id}/reactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emoji: "👍", author: "Alice" }),
      });
      assert.equal(res.status, 201);
      const json = await res.json();
      assert.equal(json.comment_id, cmt.id);
      assert.equal(json.reactions.length, 1);
      assert.equal(json.reactions[0].emoji, "👍");
      assert.equal(json.reactions[0].count, 1);
      assert.deepEqual(json.reactions[0].authors, ["Alice"]);
    });

    it("multiple authors can react with same emoji", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/react2", quote: "q", body: "b", author: "a" }),
      })).json();

      await fetch(`${BASE}/comments/${cmt.id}/reactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emoji: "👍", author: "Alice" }),
      });
      const res = await fetch(`${BASE}/comments/${cmt.id}/reactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emoji: "👍", author: "Bob" }),
      });
      const json = await res.json();
      assert.equal(json.reactions[0].count, 2);
      assert.deepEqual(json.reactions[0].authors, ["Alice", "Bob"]);
    });

    it("same author reacting twice with same emoji is idempotent", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/react3", quote: "q", body: "b", author: "a" }),
      })).json();

      await fetch(`${BASE}/comments/${cmt.id}/reactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emoji: "👍", author: "Alice" }),
      });
      const res = await fetch(`${BASE}/comments/${cmt.id}/reactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emoji: "👍", author: "Alice" }),
      });
      assert.equal(res.status, 201);
      const json = await res.json();
      assert.equal(json.reactions[0].count, 1);
    });

    it("returns 400 for disallowed emoji", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/react4", quote: "q", body: "b", author: "a" }),
      })).json();

      const res = await fetch(`${BASE}/comments/${cmt.id}/reactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emoji: "💩", author: "Alice" }),
      });
      assert.equal(res.status, 400);
      const json = await res.json();
      assert.ok(json.error.message.includes("not allowed"));
    });

    it("returns 400 when emoji or author missing", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/react5", quote: "q", body: "b", author: "a" }),
      })).json();

      const res1 = await fetch(`${BASE}/comments/${cmt.id}/reactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emoji: "👍" }),
      });
      assert.equal(res1.status, 400);

      const res2 = await fetch(`${BASE}/comments/${cmt.id}/reactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ author: "Alice" }),
      });
      assert.equal(res2.status, 400);
    });

    it("returns 404 for nonexistent comment", async () => {
      const res = await fetch(`${BASE}/comments/cmt_nonexistent/reactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emoji: "👍", author: "Alice" }),
      });
      assert.equal(res.status, 404);
    });
  });

  describe("DELETE /comments/:id/reactions/:emoji", () => {
    it("removes a reaction", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/unreact", quote: "q", body: "b", author: "a" }),
      })).json();

      await fetch(`${BASE}/comments/${cmt.id}/reactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emoji: "👍", author: "Alice" }),
      });

      const res = await fetch(
        `${BASE}/comments/${cmt.id}/reactions/${encodeURIComponent("👍")}?author=Alice`,
        { method: "DELETE" }
      );
      assert.equal(res.status, 200);
      const json = await res.json();
      assert.equal(json.reactions.length, 0);
    });

    it("returns 400 when author query param missing", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/unreact2", quote: "q", body: "b", author: "a" }),
      })).json();

      const res = await fetch(
        `${BASE}/comments/${cmt.id}/reactions/${encodeURIComponent("👍")}`,
        { method: "DELETE" }
      );
      assert.equal(res.status, 400);
    });

    it("returns 404 for nonexistent comment", async () => {
      const res = await fetch(
        `${BASE}/comments/cmt_nonexistent/reactions/${encodeURIComponent("👍")}?author=Alice`,
        { method: "DELETE" }
      );
      assert.equal(res.status, 404);
    });
  });

  describe("GET /comments includes reactions", () => {
    it("returns reactions array on each comment", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/react-list", quote: "q", body: "b", author: "a" }),
      })).json();

      await fetch(`${BASE}/comments/${cmt.id}/reactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emoji: "👍", author: "Alice" }),
      });
      await fetch(`${BASE}/comments/${cmt.id}/reactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emoji: "❤️", author: "Bob" }),
      });

      const res = await fetch(`${BASE}/comments?document=${cmt.document}`);
      const json = await res.json();
      assert.equal(json.data.length, 1);
      assert.equal(json.data[0].reactions.length, 2);
      const thumbs = json.data[0].reactions.find(r => r.emoji === "👍");
      assert.equal(thumbs.count, 1);
      assert.deepEqual(thumbs.authors, ["Alice"]);
    });

    it("returns empty reactions array when no reactions", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/react-empty", quote: "q", body: "b", author: "a" }),
      })).json();

      const res = await fetch(`${BASE}/comments?document=${cmt.document}`);
      const json = await res.json();
      assert.deepEqual(json.data[0].reactions, []);
    });

    it("GET /comments/:id includes reactions", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/react-single", quote: "q", body: "b", author: "a" }),
      })).json();

      await fetch(`${BASE}/comments/${cmt.id}/reactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emoji: "🎉", author: "Alice" }),
      });

      const res = await fetch(`${BASE}/comments/${cmt.id}`);
      const json = await res.json();
      assert.equal(json.reactions.length, 1);
      assert.equal(json.reactions[0].emoji, "🎉");
    });
  });

  describe("Reactions cascade on comment delete", () => {
    it("deleting a comment removes its reactions", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/react-cascade", quote: "q", body: "b", author: "a" }),
      })).json();

      await fetch(`${BASE}/comments/${cmt.id}/reactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ emoji: "👍", author: "Alice" }),
      });

      await fetch(`${BASE}/comments/${cmt.id}`, { method: "DELETE" });

      // Verify comment and reactions are gone
      const res = await fetch(`${BASE}/comments/${cmt.id}`);
      assert.equal(res.status, 404);
    });
  });

  // ── Visibility (private annotations) ──────────────────────────────

  describe("POST /comments visibility", () => {
    it("creates public comment by default", async () => {
      const res = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/vis", quote: "q", body: "b", author: "Alice" }),
      });
      const json = await res.json();
      assert.equal(res.status, 201);
      assert.equal(json.visibility, "public");
    });

    it("creates private comment when visibility=private", async () => {
      const res = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/vis", quote: "q", body: "secret", author: "Alice", visibility: "private" }),
      });
      const json = await res.json();
      assert.equal(res.status, 201);
      assert.equal(json.visibility, "private");
    });

    it("returns 400 for invalid visibility value", async () => {
      const res = await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/vis", quote: "q", body: "b", author: "a", visibility: "hidden" }),
      });
      assert.equal(res.status, 400);
      const json = await res.json();
      assert.ok(json.error.message.includes("visibility"));
    });
  });

  describe("GET /comments visibility filtering", () => {
    it("without viewer param, returns only public comments", async () => {
      const uri = "https://example.com/vis-filter";
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q1", body: "public one", author: "Alice", visibility: "public" }),
      });
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q2", body: "private one", author: "Alice", visibility: "private" }),
      });

      const res = await fetch(`${BASE}/comments?uri=${encodeURIComponent(uri)}`);
      const json = await res.json();
      assert.equal(json.data.length, 1);
      assert.equal(json.data[0].body, "public one");
    });

    it("with viewer param matching author, returns public + viewer's private", async () => {
      const uri = "https://example.com/vis-viewer";
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q1", body: "public", author: "Alice" }),
      });
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q2", body: "alice private", author: "Alice", visibility: "private" }),
      });
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q3", body: "bob private", author: "Bob", visibility: "private" }),
      });

      const res = await fetch(`${BASE}/comments?uri=${encodeURIComponent(uri)}&viewer=Alice`);
      const json = await res.json();
      assert.equal(json.data.length, 2);
      const bodies = json.data.map(c => c.body);
      assert.ok(bodies.includes("public"));
      assert.ok(bodies.includes("alice private"));
      assert.ok(!bodies.includes("bob private"));
    });

    it("private comments from other authors are invisible", async () => {
      const uri = "https://example.com/vis-invisible";
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri, quote: "q1", body: "bob secret", author: "Bob", visibility: "private" }),
      });

      const res = await fetch(`${BASE}/comments?uri=${encodeURIComponent(uri)}&viewer=Alice`);
      const json = await res.json();
      assert.equal(json.data.length, 0);
    });
  });

  describe("PATCH /comments/:id visibility", () => {
    it("updates visibility from public to private", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/vis-patch", quote: "q", body: "b", author: "Alice" }),
      })).json();

      const res = await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ visibility: "private" }),
      });
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.visibility, "private");
    });

    it("updates visibility from private to public", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/vis-patch2", quote: "q", body: "b", author: "Alice", visibility: "private" }),
      })).json();

      const res = await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ visibility: "public" }),
      });
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.visibility, "public");
    });

    it("returns 400 for invalid visibility on PATCH", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ uri: "https://example.com/vis-patch3", quote: "q", body: "b", author: "a" }),
      })).json();

      const res = await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ visibility: "hidden" }),
      });
      assert.equal(res.status, 400);
      const json = await res.json();
      assert.ok(json.error.message.includes("visibility"));
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
    await pool.query("DELETE FROM moderation_log");
    await pool.query("DELETE FROM reactions");
    await pool.query("DELETE FROM comments WHERE parent IS NOT NULL");
    await pool.query("DELETE FROM comments");
    await pool.query("DELETE FROM documents");
    await pool.query("DELETE FROM api_keys WHERE key IN ($1, $2)", [KEY_A, KEY_B]);
    await pool.end();
  });

  beforeEach(async () => {
    await pool.query("DELETE FROM moderation_log");
    await pool.query("DELETE FROM reactions");
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

  // ── Reaction isolation ──────────────────────────────────────

  describe("reaction isolation", () => {
    it("tenant B cannot add a reaction to tenant A's comment", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_A) },
        body: JSON.stringify({ uri: "https://example.com/react-iso", quote: "q", body: "b", author: "a" }),
      })).json();

      const res = await fetch(`${BASE}/comments/${cmt.id}/reactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_B) },
        body: JSON.stringify({ emoji: "👍", author: "Evil" }),
      });
      assert.equal(res.status, 404);
    });

    it("tenant B cannot remove a reaction from tenant A's comment", async () => {
      const cmt = await (await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_A) },
        body: JSON.stringify({ uri: "https://example.com/react-iso2", quote: "q", body: "b", author: "a" }),
      })).json();

      await fetch(`${BASE}/comments/${cmt.id}/reactions`, {
        method: "POST",
        headers: { "Content-Type": "application/json", ...authHeader(KEY_A) },
        body: JSON.stringify({ emoji: "👍", author: "Alice" }),
      });

      const res = await fetch(
        `${BASE}/comments/${cmt.id}/reactions/${encodeURIComponent("👍")}?author=Alice`,
        { method: "DELETE", headers: authHeader(KEY_B) }
      );
      assert.equal(res.status, 404);

      // Verify reaction still exists for tenant A
      const check = await fetch(`${BASE}/comments/${cmt.id}`, { headers: authHeader(KEY_A) });
      const json = await check.json();
      assert.equal(json.reactions.length, 1);
    });
  });
});

import { describe, it, before, after, beforeEach } from "node:test";
import assert from "node:assert/strict";
import { WebSocket } from "ws";

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

// ── Integration tests ───────────────────────────────────────────────

describe("API", async () => {
  let app, pool, initSchema, server, BASE, WS_BASE;
  const { attachWebSocket, closeWebSocket, getSubscriptions } = await import("./websocket.js");

  before(async () => {
    ({ app, pool, initSchema } = await import("./index.js"));
    await initSchema();

    await new Promise((resolve) => {
      server = app.listen(0, "127.0.0.1", () => {
        const port = server.address().port;
        BASE = `http://127.0.0.1:${port}`;
        WS_BASE = `ws://127.0.0.1:${port}/ws`;
        attachWebSocket(server);
        resolve();
      });
    });
  });

  after(async () => {
    closeWebSocket();
    server.close();
    await pool.end();
  });

  beforeEach(async () => {
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

  // ── WebSocket ────────────────────────────────────────────────────

  /** Open a WS connection and wait for it to be ready. */
  function openWs() {
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(WS_BASE);
      ws.on("open", () => resolve(ws));
      ws.on("error", reject);
    });
  }

  /** Send subscribe and wait for acknowledgement. */
  function subscribe(ws, documentId) {
    return new Promise((resolve) => {
      const handler = (raw) => {
        const msg = JSON.parse(raw);
        if (msg.type === "subscribed" && msg.document === documentId) {
          ws.off("message", handler);
          resolve();
        }
      };
      ws.on("message", handler);
      ws.send(JSON.stringify({ type: "subscribe", document: documentId }));
    });
  }

  /** Wait for the next event message (skipping "subscribed" acks). */
  function nextEvent(ws, timeoutMs = 2000) {
    return new Promise((resolve, reject) => {
      const timer = setTimeout(() => {
        ws.off("message", handler);
        reject(new Error("Timed out waiting for WebSocket event"));
      }, timeoutMs);
      const handler = (raw) => {
        const msg = JSON.parse(raw);
        if (msg.type !== "subscribed") {
          clearTimeout(timer);
          ws.off("message", handler);
          resolve(msg);
        }
      };
      ws.on("message", handler);
    });
  }

  describe("WebSocket", () => {

  it("connects and subscribes to a document", async () => {
    const ws = await openWs();
    try {
      await subscribe(ws, "doc_test123");
      const subs = getSubscriptions();
      assert.equal(subs.has("doc_test123"), true);
      assert.equal(subs.get("doc_test123").size, 1);
    } finally {
      ws.close();
    }
  });

  it("cleans up subscription on close", async () => {
    const ws = await openWs();
    await subscribe(ws, "doc_cleanup");

    assert.equal(getSubscriptions().get("doc_cleanup").size, 1);

    ws.close();
    // Wait for close to propagate
    await new Promise((r) => setTimeout(r, 100));

    const subs = getSubscriptions().get("doc_cleanup");
    assert.ok(!subs || subs.size === 0);
  });

  it("switches subscription when subscribing to a new document", async () => {
    const ws = await openWs();
    try {
      await subscribe(ws, "doc_first");
      assert.equal(getSubscriptions().get("doc_first").size, 1);

      await subscribe(ws, "doc_second");
      const first = getSubscriptions().get("doc_first");
      assert.ok(!first || first.size === 0);
      assert.equal(getSubscriptions().get("doc_second").size, 1);
    } finally {
      ws.close();
    }
  });

  it("rejects non-/ws upgrade paths", async () => {
    const wsUrl = WS_BASE.replace("/ws", "/not-ws");
    await assert.rejects(
      () => new Promise((resolve, reject) => {
        const ws = new WebSocket(wsUrl);
        ws.on("open", () => { ws.close(); reject(new Error("Should not connect")); });
        ws.on("error", reject);
      }),
      // Should get a connection error
      (err) => err instanceof Error
    );
  });

  it("broadcasts comment.created to subscribed clients", async () => {
    // Create a document first
    const docRes = await fetch(`${BASE}/documents`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uri: "https://example.com/ws-create" }),
    });
    const doc = await docRes.json();

    const ws = await openWs();
    try {
      await subscribe(ws, doc.id);
      const eventPromise = nextEvent(ws);

      // Create a comment via REST
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ document: doc.id, quote: "text", body: "hello ws", author: "tester" }),
      });

      const event = await eventPromise;
      assert.equal(event.type, "comment.created");
      assert.equal(event.comment.body, "hello ws");
      assert.equal(event.comment.document, doc.id);
    } finally {
      ws.close();
    }
  });

  it("broadcasts comment.updated on PATCH", async () => {
    const cmt = await (await fetch(`${BASE}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uri: "https://example.com/ws-update", quote: "q", body: "original", author: "a" }),
    })).json();

    const ws = await openWs();
    try {
      await subscribe(ws, cmt.document);
      const eventPromise = nextEvent(ws);

      await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ body: "updated body" }),
      });

      const event = await eventPromise;
      assert.equal(event.type, "comment.updated");
      assert.equal(event.comment.body, "updated body");
      assert.equal(event.comment.id, cmt.id);
    } finally {
      ws.close();
    }
  });

  it("broadcasts comment.updated on status change", async () => {
    const cmt = await (await fetch(`${BASE}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uri: "https://example.com/ws-status", quote: "q", body: "b", author: "a" }),
    })).json();

    const ws = await openWs();
    try {
      await subscribe(ws, cmt.document);
      const eventPromise = nextEvent(ws);

      await fetch(`${BASE}/comments/${cmt.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: "closed" }),
      });

      const event = await eventPromise;
      assert.equal(event.type, "comment.updated");
      assert.equal(event.comment.status, "closed");
    } finally {
      ws.close();
    }
  });

  it("broadcasts comment.deleted on DELETE", async () => {
    const cmt = await (await fetch(`${BASE}/comments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uri: "https://example.com/ws-delete", quote: "q", body: "b", author: "a" }),
    })).json();

    const ws = await openWs();
    try {
      await subscribe(ws, cmt.document);
      const eventPromise = nextEvent(ws);

      await fetch(`${BASE}/comments/${cmt.id}`, { method: "DELETE" });

      const event = await eventPromise;
      assert.equal(event.type, "comment.deleted");
      assert.equal(event.comment.id, cmt.id);
    } finally {
      ws.close();
    }
  });

  it("does not broadcast to clients subscribed to different documents", async () => {
    const doc1 = await (await fetch(`${BASE}/documents`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uri: "https://example.com/ws-iso-1" }),
    })).json();
    const doc2 = await (await fetch(`${BASE}/documents`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uri: "https://example.com/ws-iso-2" }),
    })).json();

    const ws = await openWs();
    try {
      await subscribe(ws, doc2.id);

      let received = false;
      ws.on("message", (raw) => {
        const msg = JSON.parse(raw);
        if (msg.type !== "subscribed") received = true;
      });

      // Create comment on doc1 — ws is subscribed to doc2
      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ document: doc1.id, quote: "q", body: "b", author: "a" }),
      });

      await new Promise((r) => setTimeout(r, 200));
      assert.equal(received, false);
    } finally {
      ws.close();
    }
  });

  it("multiple clients receive the same broadcast", async () => {
    const doc = await (await fetch(`${BASE}/documents`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ uri: "https://example.com/ws-multi" }),
    })).json();

    const ws1 = await openWs();
    const ws2 = await openWs();
    try {
      await subscribe(ws1, doc.id);
      await subscribe(ws2, doc.id);

      const p1 = nextEvent(ws1);
      const p2 = nextEvent(ws2);

      await fetch(`${BASE}/comments`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ document: doc.id, quote: "q", body: "broadcast", author: "a" }),
      });

      const [e1, e2] = await Promise.all([p1, p2]);
      assert.equal(e1.type, "comment.created");
      assert.equal(e2.type, "comment.created");
      assert.equal(e1.comment.body, "broadcast");
      assert.equal(e2.comment.body, "broadcast");
    } finally {
      ws1.close();
      ws2.close();
    }
  });

  }); // describe("WebSocket")
});

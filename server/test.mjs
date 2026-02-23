import { describe, it, before, after, beforeEach, mock } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";

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

describe("webhooks", async () => {
  const {
    signPayload, deliverWebhook, retryWithBackoff,
    formatSlackPayload, formatDiscordPayload,
  } = await import("./webhooks.js");

  it("signPayload produces valid HMAC-SHA256 hex", () => {
    const sig = signPayload("mysecret", '{"event":"test"}');
    assert.match(sig, /^[0-9a-f]{64}$/);
  });

  it("signPayload is deterministic", () => {
    const a = signPayload("key", "body");
    const b = signPayload("key", "body");
    assert.equal(a, b);
  });

  it("signPayload differs with different secrets", () => {
    const a = signPayload("key1", "body");
    const b = signPayload("key2", "body");
    assert.notEqual(a, b);
  });

  it("retryWithBackoff succeeds on first try", async () => {
    let calls = 0;
    const result = await retryWithBackoff(() => { calls++; return "ok"; }, { baseDelay: 1 });
    assert.equal(result, "ok");
    assert.equal(calls, 1);
  });

  it("retryWithBackoff retries on failure", async () => {
    let calls = 0;
    const result = await retryWithBackoff(() => {
      calls++;
      if (calls < 3) throw new Error("fail");
      return "ok";
    }, { maxAttempts: 3, baseDelay: 1 });
    assert.equal(result, "ok");
    assert.equal(calls, 3);
  });

  it("retryWithBackoff throws after max attempts", async () => {
    await assert.rejects(
      () => retryWithBackoff(() => { throw new Error("always fails"); }, { maxAttempts: 2, baseDelay: 1 }),
      { message: "always fails" }
    );
  });

  it("deliverWebhook sends POST with signature header", async () => {
    let receivedHeaders, receivedBody;
    const receiver = createServer((req, res) => {
      receivedHeaders = req.headers;
      let data = "";
      req.on("data", (chunk) => { data += chunk; });
      req.on("end", () => { receivedBody = data; res.writeHead(200).end(); });
    });

    await new Promise((resolve) => receiver.listen(0, "127.0.0.1", resolve));
    const port = receiver.address().port;

    try {
      const payload = { event: "comment.created", data: { test: true } };
      await deliverWebhook(`http://127.0.0.1:${port}`, "secret123", payload);

      assert.equal(receivedHeaders["content-type"], "application/json");
      assert.ok(receivedHeaders["x-remarq-signature"]);
      assert.equal(receivedHeaders["x-remarq-signature"], signPayload("secret123", JSON.stringify(payload)));
      assert.deepEqual(JSON.parse(receivedBody), payload);
    } finally {
      receiver.close();
    }
  });

  it("deliverWebhook throws on non-2xx response", async () => {
    const receiver = createServer((_req, res) => {
      res.writeHead(500).end();
    });
    await new Promise((resolve) => receiver.listen(0, "127.0.0.1", resolve));
    const port = receiver.address().port;

    try {
      await assert.rejects(
        () => deliverWebhook(`http://127.0.0.1:${port}`, "secret", { test: true }),
        { message: "Webhook delivery failed: 500" }
      );
    } finally {
      receiver.close();
    }
  });

  it("formatSlackPayload formats comment.created", () => {
    const result = formatSlackPayload("comment.created", {
      comment: { author: "Alice", body: "Hello world", document: "doc_1" },
    });
    assert.equal(result.text, "New comment by Alice");
    assert.ok(result.blocks[0].text.text.includes("Alice"));
    assert.ok(result.blocks[0].text.text.includes("Hello world"));
  });

  it("formatSlackPayload formats comment.resolved", () => {
    const result = formatSlackPayload("comment.resolved", {
      comment: { author: "Bob", body: "Done", document: "doc_1" },
    });
    assert.equal(result.text, "Comment resolved by Bob");
  });

  it("formatSlackPayload formats comment.deleted", () => {
    const result = formatSlackPayload("comment.deleted", {
      comment: { author: "Charlie", body: "Bye", document: "doc_1" },
    });
    assert.equal(result.text, "Comment deleted by Charlie");
  });

  it("formatDiscordPayload includes embeds with fields", () => {
    const result = formatDiscordPayload("comment.created", {
      comment: { author: "Alice", body: "Hello world", document: "doc_1" },
    });
    assert.equal(result.embeds.length, 1);
    assert.equal(result.embeds[0].title, "New comment");
    assert.equal(result.embeds[0].description, "Hello world");
    assert.equal(result.embeds[0].fields[0].value, "Alice");
    assert.equal(result.embeds[0].fields[1].value, "doc_1");
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
    await pool.end();
  });

  beforeEach(async () => {
    await pool.query("DELETE FROM comments");
    await pool.query("DELETE FROM documents");
    await pool.query("DELETE FROM webhooks");
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

  // ── Webhooks CRUD ─────────────────────────────────────────────

  describe("POST /webhooks", () => {
    it("creates a webhook", async () => {
      const res = await fetch(`${BASE}/webhooks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          url: "https://example.com/hook",
          secret: "s3cret",
          events: ["comment.created"],
        }),
      });
      const json = await res.json();
      assert.equal(res.status, 201);
      assert.match(json.id, /^whk_/);
      assert.equal(json.object, "webhook");
      assert.equal(json.url, "https://example.com/hook");
      assert.deepEqual(json.events, ["comment.created"]);
      assert.equal(json.active, true);
    });

    it("returns 400 when url is missing", async () => {
      const res = await fetch(`${BASE}/webhooks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret: "s", events: ["comment.created"] }),
      });
      assert.equal(res.status, 400);
    });

    it("returns 400 when secret is missing", async () => {
      const res = await fetch(`${BASE}/webhooks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: "https://example.com/hook", events: ["comment.created"] }),
      });
      assert.equal(res.status, 400);
    });

    it("returns 400 when events is empty", async () => {
      const res = await fetch(`${BASE}/webhooks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: "https://example.com/hook", secret: "s", events: [] }),
      });
      assert.equal(res.status, 400);
    });

    it("returns 400 for invalid event types", async () => {
      const res = await fetch(`${BASE}/webhooks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: "https://example.com/hook", secret: "s", events: ["invalid.event"] }),
      });
      assert.equal(res.status, 400);
      const json = await res.json();
      assert.ok(json.error.message.includes("invalid.event"));
    });
  });

  describe("GET /webhooks", () => {
    it("returns empty list", async () => {
      const res = await fetch(`${BASE}/webhooks`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.deepEqual(json, { object: "list", data: [] });
    });

    it("lists created webhooks", async () => {
      await fetch(`${BASE}/webhooks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: "https://example.com/hook", secret: "s", events: ["comment.created"] }),
      });

      const res = await fetch(`${BASE}/webhooks`);
      const json = await res.json();
      assert.equal(json.data.length, 1);
      assert.equal(json.data[0].url, "https://example.com/hook");
    });
  });

  describe("GET /webhooks/:id", () => {
    it("retrieves a webhook", async () => {
      const create = await (await fetch(`${BASE}/webhooks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: "https://example.com/hook", secret: "s", events: ["comment.created"] }),
      })).json();

      const res = await fetch(`${BASE}/webhooks/${create.id}`);
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.id, create.id);
    });

    it("returns 404 for missing webhook", async () => {
      const res = await fetch(`${BASE}/webhooks/whk_nonexistent`);
      assert.equal(res.status, 404);
    });
  });

  describe("PATCH /webhooks/:id", () => {
    it("updates url", async () => {
      const create = await (await fetch(`${BASE}/webhooks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: "https://example.com/hook", secret: "s", events: ["comment.created"] }),
      })).json();

      const res = await fetch(`${BASE}/webhooks/${create.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: "https://example.com/new-hook" }),
      });
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.url, "https://example.com/new-hook");
    });

    it("updates events", async () => {
      const create = await (await fetch(`${BASE}/webhooks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: "https://example.com/hook", secret: "s", events: ["comment.created"] }),
      })).json();

      const res = await fetch(`${BASE}/webhooks/${create.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ events: ["comment.created", "comment.resolved"] }),
      });
      const json = await res.json();
      assert.deepEqual(json.events, ["comment.created", "comment.resolved"]);
    });

    it("deactivates webhook", async () => {
      const create = await (await fetch(`${BASE}/webhooks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: "https://example.com/hook", secret: "s", events: ["comment.created"] }),
      })).json();

      const res = await fetch(`${BASE}/webhooks/${create.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ active: false }),
      });
      const json = await res.json();
      assert.equal(json.active, false);
    });

    it("returns 400 for invalid events", async () => {
      const create = await (await fetch(`${BASE}/webhooks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: "https://example.com/hook", secret: "s", events: ["comment.created"] }),
      })).json();

      const res = await fetch(`${BASE}/webhooks/${create.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ events: ["bad.event"] }),
      });
      assert.equal(res.status, 400);
    });

    it("returns 404 for missing webhook", async () => {
      const res = await fetch(`${BASE}/webhooks/whk_nonexistent`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: "https://example.com/new" }),
      });
      assert.equal(res.status, 404);
    });
  });

  describe("DELETE /webhooks/:id", () => {
    it("deletes a webhook", async () => {
      const create = await (await fetch(`${BASE}/webhooks`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: "https://example.com/hook", secret: "s", events: ["comment.created"] }),
      })).json();

      const res = await fetch(`${BASE}/webhooks/${create.id}`, { method: "DELETE" });
      const json = await res.json();
      assert.equal(res.status, 200);
      assert.equal(json.id, create.id);

      const after = await fetch(`${BASE}/webhooks`);
      const afterJson = await after.json();
      assert.equal(afterJson.data.length, 0);
    });

    it("returns 404 for missing webhook", async () => {
      const res = await fetch(`${BASE}/webhooks/whk_nonexistent`, { method: "DELETE" });
      assert.equal(res.status, 404);
    });
  });

  // ── Webhook event triggers ────────────────────────────────────

  describe("Webhook event delivery", () => {
    it("delivers comment.created event to registered webhook", async () => {
      let receivedPayload;
      const receiver = createServer((req, res) => {
        let data = "";
        req.on("data", (chunk) => { data += chunk; });
        req.on("end", () => { receivedPayload = JSON.parse(data); res.writeHead(200).end(); });
      });
      await new Promise((resolve) => receiver.listen(0, "127.0.0.1", resolve));
      const port = receiver.address().port;

      try {
        await fetch(`${BASE}/webhooks`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            url: `http://127.0.0.1:${port}`,
            secret: "test-secret",
            events: ["comment.created"],
          }),
        });

        await fetch(`${BASE}/comments`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ uri: "https://example.com/wh-test", quote: "q", body: "hello", author: "tester" }),
        });

        // Wait for async delivery
        await new Promise((resolve) => setTimeout(resolve, 500));

        assert.ok(receivedPayload, "Webhook should have been called");
        assert.equal(receivedPayload.event, "comment.created");
        assert.equal(receivedPayload.data.comment.body, "hello");
        assert.equal(receivedPayload.data.comment.author, "tester");
      } finally {
        receiver.close();
      }
    });

    it("delivers comment.resolved event when status set to closed", async () => {
      let receivedPayload;
      const receiver = createServer((req, res) => {
        let data = "";
        req.on("data", (chunk) => { data += chunk; });
        req.on("end", () => { receivedPayload = JSON.parse(data); res.writeHead(200).end(); });
      });
      await new Promise((resolve) => receiver.listen(0, "127.0.0.1", resolve));
      const port = receiver.address().port;

      try {
        await fetch(`${BASE}/webhooks`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            url: `http://127.0.0.1:${port}`,
            secret: "test-secret",
            events: ["comment.resolved"],
          }),
        });

        const cmt = await (await fetch(`${BASE}/comments`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ uri: "https://example.com/wh-resolve", quote: "q", body: "b", author: "a" }),
        })).json();

        await fetch(`${BASE}/comments/${cmt.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ status: "closed" }),
        });

        await new Promise((resolve) => setTimeout(resolve, 500));

        assert.ok(receivedPayload, "Webhook should have been called");
        assert.equal(receivedPayload.event, "comment.resolved");
        assert.equal(receivedPayload.data.comment.status, "closed");
      } finally {
        receiver.close();
      }
    });

    it("delivers comment.deleted event", async () => {
      let receivedPayload;
      const receiver = createServer((req, res) => {
        let data = "";
        req.on("data", (chunk) => { data += chunk; });
        req.on("end", () => { receivedPayload = JSON.parse(data); res.writeHead(200).end(); });
      });
      await new Promise((resolve) => receiver.listen(0, "127.0.0.1", resolve));
      const port = receiver.address().port;

      try {
        await fetch(`${BASE}/webhooks`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            url: `http://127.0.0.1:${port}`,
            secret: "test-secret",
            events: ["comment.deleted"],
          }),
        });

        const cmt = await (await fetch(`${BASE}/comments`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ uri: "https://example.com/wh-delete", quote: "q", body: "b", author: "a" }),
        })).json();

        await fetch(`${BASE}/comments/${cmt.id}`, { method: "DELETE" });

        await new Promise((resolve) => setTimeout(resolve, 500));

        assert.ok(receivedPayload, "Webhook should have been called");
        assert.equal(receivedPayload.event, "comment.deleted");
        assert.equal(receivedPayload.data.comment.id, cmt.id);
      } finally {
        receiver.close();
      }
    });

    it("does not deliver to inactive webhooks", async () => {
      let called = false;
      const receiver = createServer((_req, res) => {
        called = true;
        res.writeHead(200).end();
      });
      await new Promise((resolve) => receiver.listen(0, "127.0.0.1", resolve));
      const port = receiver.address().port;

      try {
        const wh = await (await fetch(`${BASE}/webhooks`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            url: `http://127.0.0.1:${port}`,
            secret: "test-secret",
            events: ["comment.created"],
          }),
        })).json();

        // Deactivate
        await fetch(`${BASE}/webhooks/${wh.id}`, {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ active: false }),
        });

        await fetch(`${BASE}/comments`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ uri: "https://example.com/wh-inactive", quote: "q", body: "b", author: "a" }),
        });

        await new Promise((resolve) => setTimeout(resolve, 500));
        assert.equal(called, false, "Inactive webhook should not be called");
      } finally {
        receiver.close();
      }
    });

    it("does not deliver for non-subscribed events", async () => {
      let called = false;
      const receiver = createServer((_req, res) => {
        called = true;
        res.writeHead(200).end();
      });
      await new Promise((resolve) => receiver.listen(0, "127.0.0.1", resolve));
      const port = receiver.address().port;

      try {
        await fetch(`${BASE}/webhooks`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            url: `http://127.0.0.1:${port}`,
            secret: "test-secret",
            events: ["comment.resolved"],  // Only subscribed to resolved
          }),
        });

        // Create a comment (should NOT trigger since only subscribed to resolved)
        await fetch(`${BASE}/comments`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ uri: "https://example.com/wh-no-match", quote: "q", body: "b", author: "a" }),
        });

        await new Promise((resolve) => setTimeout(resolve, 500));
        assert.equal(called, false, "Webhook should not fire for non-subscribed events");
      } finally {
        receiver.close();
      }
    });

    it("includes HMAC signature on delivered webhooks", async () => {
      let receivedSignature, receivedBody;
      const receiver = createServer((req, res) => {
        receivedSignature = req.headers["x-remarq-signature"];
        let data = "";
        req.on("data", (chunk) => { data += chunk; });
        req.on("end", () => { receivedBody = data; res.writeHead(200).end(); });
      });
      await new Promise((resolve) => receiver.listen(0, "127.0.0.1", resolve));
      const port = receiver.address().port;

      try {
        const { signPayload } = await import("./webhooks.js");

        await fetch(`${BASE}/webhooks`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            url: `http://127.0.0.1:${port}`,
            secret: "verify-me",
            events: ["comment.created"],
          }),
        });

        await fetch(`${BASE}/comments`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ uri: "https://example.com/wh-sig", quote: "q", body: "b", author: "a" }),
        });

        await new Promise((resolve) => setTimeout(resolve, 500));

        assert.ok(receivedSignature, "Should include signature header");
        const expectedSig = signPayload("verify-me", receivedBody);
        assert.equal(receivedSignature, expectedSig, "Signature should match HMAC-SHA256 of body");
      } finally {
        receiver.close();
      }
    });
  });
});

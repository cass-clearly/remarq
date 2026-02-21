import { describe, it } from "node:test";
import assert from "node:assert/strict";

// ── renderMarkdown ───────────────────────────────────────────────────

describe("renderMarkdown", async () => {
  const { renderMarkdown } = await import("../src/utils/markdown.js");

  it("returns empty string for falsy input", () => {
    assert.equal(renderMarkdown(""), "");
    assert.equal(renderMarkdown(null), "");
    assert.equal(renderMarkdown(undefined), "");
  });

  it("returns plain text unchanged", () => {
    assert.equal(renderMarkdown("hello world"), "hello world");
  });

  it("renders bold text", () => {
    assert.equal(renderMarkdown("**bold**"), "<strong>bold</strong>");
  });

  it("renders italic text", () => {
    assert.equal(renderMarkdown("*italic*"), "<em>italic</em>");
  });

  it("renders inline code", () => {
    assert.equal(renderMarkdown("`code`"), "<code>code</code>");
  });

  it("renders links", () => {
    assert.equal(
      renderMarkdown("[click here](https://example.com)"),
      '<a href="https://example.com" rel="noopener noreferrer" target="_blank">click here</a>'
    );
  });

  it("renders bold inside italic", () => {
    const result = renderMarkdown("*hello **world***");
    assert.ok(result.includes("<strong>world</strong>"));
    assert.ok(result.includes("<em>"));
  });

  it("renders multiple markdown elements in one string", () => {
    const result = renderMarkdown("**bold** and *italic* and `code`");
    assert.ok(result.includes("<strong>bold</strong>"));
    assert.ok(result.includes("<em>italic</em>"));
    assert.ok(result.includes("<code>code</code>"));
  });

  it("does not apply bold/italic inside code spans", () => {
    const result = renderMarkdown("`**not bold**`");
    assert.equal(result, "<code>**not bold**</code>");
  });

  it("handles adjacent bold and italic", () => {
    const result = renderMarkdown("**bold** *italic*");
    assert.equal(result, "<strong>bold</strong> <em>italic</em>");
  });

  it("handles unclosed markers as plain text", () => {
    assert.equal(renderMarkdown("**unclosed"), "**unclosed");
    assert.equal(renderMarkdown("*unclosed"), "*unclosed");
    assert.equal(renderMarkdown("`unclosed"), "`unclosed");
  });

  it("handles empty markers", () => {
    // Empty bold/italic should not produce empty tags
    assert.equal(renderMarkdown("****"), "****");
    assert.equal(renderMarkdown("**"), "**");
  });

  it("handles links with parentheses in URL", () => {
    const result = renderMarkdown("[wiki](https://en.wikipedia.org/wiki/Foo_(bar))");
    assert.ok(result.includes('href="https://en.wikipedia.org/wiki/Foo_(bar)"'));
  });

  it("converts line breaks to <br> tags", () => {
    assert.equal(renderMarkdown("line one\nline two"), "line one<br>line two");
  });

  it("preserves paragraph breaks (double newlines)", () => {
    const result = renderMarkdown("paragraph one\n\nparagraph two");
    assert.equal(result, "paragraph one<br><br>paragraph two");
  });

  it("renders markdown with line breaks correctly", () => {
    const input = "Why don't we allow `foobar = baz`?\n\n`code block`\n\n[google](https://google.com)";
    const result = renderMarkdown(input);
    assert.ok(result.includes("<code>foobar = baz</code>"));
    assert.ok(result.includes("<code>code block</code>"));
    assert.ok(result.includes("<br><br>"));
    assert.ok(result.includes('<a href="https://google.com"'));
  });
});

// ── XSS prevention ──────────────────────────────────────────────────

describe("renderMarkdown XSS prevention", async () => {
  const { renderMarkdown } = await import("../src/utils/markdown.js");

  it("escapes HTML tags in input", () => {
    const result = renderMarkdown("<script>alert('xss')</script>");
    assert.ok(!result.includes("<script>"));
    assert.ok(result.includes("&lt;script&gt;"));
  });

  it("escapes HTML within bold markers", () => {
    const result = renderMarkdown("**<img onerror=alert(1)>**");
    assert.ok(!result.includes("<img"));
    assert.ok(result.includes("&lt;img"));
  });

  it("blocks javascript: URLs in links", () => {
    const result = renderMarkdown("[click](javascript:alert(1))");
    assert.ok(!result.includes("javascript:"));
    assert.ok(!result.includes("<a"));
    assert.ok(result.includes("click"));
  });

  it("blocks JavaScript: URLs case-insensitively", () => {
    const result = renderMarkdown("[click](JavaScript:alert(1))");
    assert.ok(!result.includes("<a"));
  });

  it("blocks data: URLs in links", () => {
    const result = renderMarkdown("[click](data:text/html,<script>alert(1)</script>)");
    assert.ok(!result.includes("data:"));
    assert.ok(!result.includes("<a"));
  });

  it("blocks vbscript: URLs in links", () => {
    const result = renderMarkdown("[click](vbscript:msgbox)");
    assert.ok(!result.includes("vbscript:"));
    assert.ok(!result.includes("<a"));
  });

  it("allows https links", () => {
    const result = renderMarkdown("[safe](https://example.com)");
    assert.ok(result.includes('<a href="https://example.com"'));
  });

  it("allows http links", () => {
    const result = renderMarkdown("[safe](http://example.com)");
    assert.ok(result.includes('<a href="http://example.com"'));
  });

  it("allows mailto links", () => {
    const result = renderMarkdown("[email](mailto:user@example.com)");
    assert.ok(result.includes('<a href="mailto:user@example.com"'));
  });

  it("escapes HTML attributes in link text", () => {
    const result = renderMarkdown('["><img onerror=alert(1)>](https://example.com)');
    assert.ok(!result.includes("<img"));
  });

  it("prevents injection via link URL with quotes", () => {
    // Quotes in URLs are HTML-escaped by escapeHtml, so &quot; inside a
    // double-quoted attribute value does NOT close the attribute (HTML5 spec).
    const result = renderMarkdown('[click](https://example.com" onclick="alert(1))');
    // The " is escaped to &quot; so the href attribute is never broken
    assert.ok(result.includes("&quot;"));
    assert.ok(!result.includes('onclick="alert'));
  });
});

// ── isSafeUrl ────────────────────────────────────────────────────────

describe("isSafeUrl", async () => {
  const { isSafeUrl } = await import("../src/utils/markdown.js");

  it("allows https URLs", () => {
    assert.equal(isSafeUrl("https://example.com"), true);
  });

  it("allows http URLs", () => {
    assert.equal(isSafeUrl("http://example.com"), true);
  });

  it("allows mailto URLs", () => {
    assert.equal(isSafeUrl("mailto:user@example.com"), true);
  });

  it("allows relative URLs", () => {
    assert.equal(isSafeUrl("/path/to/page"), true);
  });

  it("allows fragment URLs", () => {
    assert.equal(isSafeUrl("#section"), true);
  });

  it("blocks javascript: scheme", () => {
    assert.equal(isSafeUrl("javascript:alert(1)"), false);
  });

  it("blocks JAVASCRIPT: scheme (case insensitive)", () => {
    assert.equal(isSafeUrl("JAVASCRIPT:alert(1)"), false);
  });

  it("blocks data: scheme", () => {
    assert.equal(isSafeUrl("data:text/html,<script>alert(1)</script>"), false);
  });

  it("blocks vbscript: scheme", () => {
    assert.equal(isSafeUrl("vbscript:msgbox"), false);
  });

  it("blocks javascript: with leading whitespace", () => {
    assert.equal(isSafeUrl("  javascript:alert(1)"), false);
  });

  it("blocks javascript: with embedded tabs", () => {
    assert.equal(isSafeUrl("java\tscript:alert(1)"), false);
  });

  it("blocks javascript: with embedded newlines", () => {
    assert.equal(isSafeUrl("java\nscript:alert(1)"), false);
  });

  it("blocks javascript: with embedded carriage returns", () => {
    assert.equal(isSafeUrl("java\rscript:alert(1)"), false);
  });
});

describe("renderMarkdown – line breaks", async () => {
  const { renderMarkdown } = await import("../src/utils/markdown.js");

  it("converts newlines to <br> tags", () => {
    assert.equal(renderMarkdown("line1\nline2"), "line1<br>line2");
  });

  it("preserves multiple newlines", () => {
    assert.equal(renderMarkdown("a\n\nb"), "a<br><br>b");
  });
});

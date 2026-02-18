# Remarq — Jobs to Be Done

## For Reviewers

### 1. Inline Annotations
**When** I'm reviewing a document, **I want to** highlight text and leave comments directly on the page, **so that** I can give precise, contextual feedback without switching tools.

> **How Remarq solves it:** Select any text to open an annotation popover — type your comment and it's anchored right where it belongs.

### 2. No Accounts Required
**When** I'm asked to review something, **I want to** start giving feedback without creating an account, **so that** I can contribute immediately without friction.

> **How Remarq solves it:** Just type your name and start annotating. No signup, no login, no OAuth flow.

### 3. Threaded Replies
**When** I see an existing annotation I want to discuss, **I want to** reply in a thread, **so that** I can have focused discussions about specific passages.

> **How Remarq solves it:** Every annotation supports threaded replies — click "Reply" to continue the conversation in context.

## For Authors

### 4. Feedback in Context
**When** I'm collecting feedback on my writing, **I want to** see all annotations in one place alongside the original text, **so that** I can review every suggestion in context.

> **How Remarq solves it:** The sidebar shows all annotations grouped by their position in the document. Click any annotation to scroll to the highlighted passage.

### 5. AI-Assisted Revision
**When** I've received feedback from multiple reviewers, **I want to** send my document and all feedback to Claude with one click, **so that** I can get AI-assisted revisions without manually compiling feedback.

> **How Remarq solves it:** Author mode (`?author=true`) adds a "Send Feedback to Claude" button that generates a structured revision prompt with all annotations and the full document.

### 6. Text Anchoring
**When** I edit my document between review rounds, **I want** annotations to stay anchored to the exact text they reference, **so that** I never lose track of what feedback refers to.

> **How Remarq solves it:** Annotations use W3C TextQuoteSelectors (via Apache Annotator) with prefix/suffix context, so highlights survive minor edits to the surrounding text.

## For Teams / Engineering Leads

### 7. Single Script Tag Integration
**When** I want to add feedback capability to our documentation, **I want to** embed it with a single script tag, **so that** I can enable collaboration without a complex integration.

> **How Remarq solves it:** One `<script>` tag with two optional attributes. No build step, no framework dependency, no config files.

### 8. Self-Hosted with Zero Dependencies
**When** I'm choosing a feedback tool for my team, **I want** a self-hosted solution with no external dependencies, **so that** I can keep data on our own infrastructure with no vendor lock-in.

> **How Remarq solves it:** Node.js + SQLite. No external databases, no Docker required, no third-party services. `npm install && npm start`.

### 9. Resolve / Unresolve Workflow
**When** I'm managing feedback on a document, **I want to** resolve and unresolve annotations, **so that** I can track which feedback has been addressed.

> **How Remarq solves it:** One-click resolve/unresolve on any annotation. Resolved annotations hide their highlights to reduce visual clutter.

### 10. Works on Rich Content (Diagrams & SVGs)
**When** I'm writing technical documentation with diagrams, **I want** annotations that work on Mermaid diagrams and SVGs, **so that** I can get feedback on visual content too — not just prose.

> **How Remarq solves it:** The annotation layer works on any HTML content within the configured content selector, including rendered Mermaid diagrams and inline SVGs.

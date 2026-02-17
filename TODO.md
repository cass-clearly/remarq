# Remarq TODO

## 🐛 Bugs / Issues
- [ ] Test with very long documents (performance)
- [ ] Handle edge case: overlapping highlights
- [ ] Keyboard navigation for sidebar
- [ ] **Test with complex content types:**
  - [x] Mermaid diagrams (dynamically rendered SVG) ✅ Works!
  - [ ] Code blocks with syntax highlighting
  - [ ] Interactive widgets/components
  - [ ] Canvas/WebGL content
  - [ ] Iframes and embedded content

## ✨ Features - High Priority
- [ ] **SSO authentication** (Okta, Auth0, etc.)
  - [ ] Auto-detect username from SSO
  - [ ] Pull user avatars from SSO provider
  - [ ] Role-based permissions (author, reviewer, viewer)
- [ ] **Email notifications**
  - [ ] Notify document author when someone comments
  - [ ] Notify comment author when someone replies
  - [ ] Digest option (daily summary instead of per-comment)
- [ ] **Document subscriptions**
  - [ ] Subscribe button to follow any document
  - [ ] Get notified of ALL new comments (not just replies)
  - [ ] Unsubscribe option
  - [ ] Manage subscription preferences
- [ ] Private vs. public annotations
- [ ] Annotation exports (JSON, CSV, PDF)
- [ ] Search/filter annotations by commenter or keyword
- [ ] @mention notifications
- [ ] Emoji reactions (👍 ❤️ etc.) to comments

## 🎨 UX Improvements
- [ ] Dark mode support
- [ ] Customizable highlight colors
- [ ] Markdown support in comments (bold, italic, links)
- [ ] Rich text editor option
- [ ] Drag-to-reorder annotations (override document order)
- [ ] Keyboard shortcuts (J/K for next/prev, ESC to close, etc.)
- [ ] Annotation count badge on highlights
- [ ] Preview quote on hover over highlight

## 🔧 Technical Improvements
- [ ] Reduce bundle size (currently 174KB)
- [ ] Lazy load sidebar (don't render until opened)
- [ ] Virtual scrolling for 1000+ annotations
- [ ] WebSocket support for real-time updates
- [ ] Offline mode with sync
- [ ] Better error handling & user feedback
- [ ] Add TypeScript types
- [ ] Unit tests
- [ ] E2E tests

## 🖥️ Server / Infrastructure
- [ ] Docker container for server
- [ ] Database options beyond SQLite (Postgres, MySQL)
- [ ] Cloud-hosted server option (so users don't need to self-host)
- [ ] Rate limiting & spam protection
- [ ] Webhook notifications (Slack, Discord, email)
- [ ] Admin dashboard for managing annotations

## 📚 Documentation
- [ ] Video tutorial
- [ ] Interactive demo site
- [ ] API documentation for custom servers
- [ ] Migration guide from other annotation tools
- [ ] Best practices guide

## 🚀 Next Level Features
- [ ] Voice comments (audio recordings)
- [ ] Video annotations (timestamp-based for videos)
- [ ] AI-powered comment summaries
- [ ] Translation of comments (multi-language support)
- [ ] Annotation analytics (most commented sections, etc.)
- [ ] GitHub/GitLab integration (annotate code)
- [ ] Figma/design tool integration
- [ ] Browser extension version

## 🤔 Ideas / Research
- [ ] Real-time collaborative editing (Google Docs style)
- [ ] Version control for annotations (track comment history)
- [ ] Annotation templates/snippets for common feedback
- [ ] AI suggestions for resolving comments
- [ ] Mobile app (native iOS/Android)

---

## 📝 Implementation Notes

### SSO / Authentication
- **Options:** Okta, Auth0, Azure AD, Google Workspace
- **Approach:** Server-side session management, JWT tokens
- **Avatar API:** Most SSO providers expose user photo URLs
- **Fallback:** Gravatar if no SSO avatar available
- **Client-side:** Auto-detect logged-in user, remove name input field

### Email Notifications
- **Trigger points:**
  - New comment on document → email document author
  - Reply to comment → email original commenter
  - Document subscription → email all subscribers
- **Email service:** SendGrid, AWS SES, or Mailgun
- **Templates:** HTML emails with annotation context
- **Preferences:** Per-user notification settings (instant, digest, none)
- **Unsubscribe:** One-click unsubscribe links

### Mermaid Diagram Testing
- **Challenge:** Mermaid renders to SVG after page load
- **Solution options:**
  1. Wait for render, then enable annotations
  2. Annotate the source markdown instead of rendered SVG
  3. Store text positions relative to original HTML structure
- **Test cases:** Flowcharts, sequence diagrams, gantt charts
- **Similar issues:** Any client-side rendered content (charts, math equations)

---

## Completed ✅
- [x] Edit comments
- [x] Remove quoted text from display
- [x] Sort by document position
- [x] NPM package
- [x] CDN distribution
- [x] Threaded replies
- [x] Resolve/unresolve
- [x] Orphaned annotation filtering
- [x] Click highlights to open sidebar
- [x] Speech bubble style for "✎ Annotate" button
- [x] Test with Mermaid diagrams - works perfectly!

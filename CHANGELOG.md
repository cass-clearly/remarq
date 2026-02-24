# Changelog

## v2.0.1 (2026-02-24)

### Fixes

- Add shared/ directory to Dockerfile for v2.0.0 (#190)
- Inject print-hide CSS to fix iOS Safari print preview (#191)

## v2.0.0 (2026-02-24)

### Features

- Customizable highlight colors (#128)
- Show orphaned comments in sidebar (#182)
- Keyboard navigation for sidebar (#153)
- Emoji reactions on comments (#163)
- Dark mode support via CSS custom properties (#159)
- Toast notification system, replace alert() dialogs (#111)
- Open Graph and Twitter Card meta tags for docs page (#177)

### Fixes

- Dark mode styles for emoji reactions (#173)
- Fix annotate button on mobile text selection (#155)
- Wrap init/boot in try/catch to prevent breaking host pages (#114)
- Standardize error message extraction across all API fetch calls (#113)

### Documentation

- Comprehensive API documentation (#156)
- Best practices guide (#138)
- Logo and social preview (#53)

### Chores / Internal

- Pre-commit hook to auto-rebuild feedback-layer bundle (#170)
- Pull request template (#172)
- Extract pure functions to utils/ directory, remove _testExports (#110)
- Expand unit test coverage: client tests + server edge cases (#104)
- Remove default Postgres password — fail-fast pattern (#51)

# Changelog

All notable changes to Remarq will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.1.0] - 2026-02-15

### Added
- **Full Mermaid diagram support** - annotations now work on all Mermaid diagram types including:
  - Flowcharts and graphs (HTML-based rendering)
  - Sequence diagrams (SVG-based rendering)
  - Class diagrams
  - State diagrams
  - Entity Relationship Diagrams (ERD)
  - Gantt charts
  - Pie charts
  - Git graphs
  - User journey diagrams
- Automatic detection of Mermaid rendering and waits for diagrams to load before anchoring
- SVG text highlighting using rect overlays for diagrams that render as pure SVG
- Coordinate transformation for complex nested SVG groups (ERD support)
- Click-to-jump functionality works on all diagram types

### Fixed
- SVG highlight positioning in transformed groups (ERD entities)
- Click event propagation through highlight overlays to underlying text
- Proper separation of HTML vs SVG highlighting strategies

## [1.0.0] - 2024-02-14

### Added
- Initial public release
- Collaborative commenting and highlighting for HTML documents
- Threaded replies with resolve/unresolve functionality
- Document position-based sorting
- Click highlights to open sidebar
- Keyboard shortcuts (Cmd/Ctrl+Enter to submit)
- NPM package and CDN distribution
- Orphaned annotation filtering
- Edit and delete comments

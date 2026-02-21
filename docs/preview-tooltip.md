# Preview Tooltip on Hover

## Feature

When hovering over a highlight, a tooltip appears showing:
- Comment snippet (first 100 characters)
- Author name
- Status (Open/Resolved)

This allows quick preview without opening the sidebar.

## Implementation

The preview tooltip module (`src/preview-tooltip.js`) provides:

- `initPreviewTooltip(comments)` - Initialize with the comments array
- `updatePreviewComments(comments)` - Update when comments change
- `attachPreviewListeners(highlightElement, commentId)` - Attach to each highlight
- `injectPreviewStyles()` - Inject CSS (call once during boot)

### Integration

```javascript
import { 
  initPreviewTooltip, 
  updatePreviewComments, 
  attachPreviewListeners,
  injectPreviewStyles 
} from './preview-tooltip.js';

// During initialization
injectPreviewStyles();
initPreviewTooltip(comments);

// When creating each highlight
const highlight = highlightRange(range, commentId);
attachPreviewListeners(highlight, commentId);

// When comments are updated
updatePreviewComments(updatedComments);
```

### Behavior

- **Hover delay**: 200ms before showing (prevents flicker)
- **Positioning**: Follows mouse cursor, stays within viewport
- **Dismissal**: Hides on mouse leave
- **Click-through**: Clicking the tooltip opens the sidebar (if wired up)

## Styling

The tooltip uses:
- White background with subtle shadow
- Green "Open" status, gray "Resolved"
- Italic quoted text
- Author name in small gray text

All styles are injected via `injectPreviewStyles()`.

## Accessibility

The tooltip is purely visual enhancement. Screen readers and keyboard users will still rely on the sidebar for full comment access.

Future enhancement: Add ARIA tooltip attributes for better accessibility.

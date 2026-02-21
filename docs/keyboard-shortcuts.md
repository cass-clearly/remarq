# Keyboard Shortcuts

## Implemented Shortcuts

| Key | Action |
|-----|--------|
| `j` or `↓` | Navigate to next annotation |
| `k` or `↑` | Navigate to previous annotation |
| `Escape` | Close sidebar |
| `?` | Show keyboard shortcuts help |

## Usage

Keyboard shortcuts are active when the Remarq sidebar is open. They are automatically disabled when:
- Focus is in a text input or textarea
- User is typing a comment

## Implementation

The keyboard shortcuts module (`src/keyboard.js`) provides:

- `initKeyboardShortcuts({ onNavigate, onClose })` - Initialize with callbacks
- `setKeyboardEnabled(boolean)` - Enable/disable shortcuts (call when sidebar opens/closes)
- `setKeyboardComments(comments)` - Update the comment list for navigation
- `addKeyboardHelpButton(sidebar)` - Add a "?" help button to the sidebar

### Integration

To enable keyboard shortcuts in your implementation:

```javascript
import { 
  initKeyboardShortcuts, 
  setKeyboardEnabled, 
  setKeyboardComments,
  addKeyboardHelpButton 
} from './keyboard.js';

// During initialization
initKeyboardShortcuts({
  onNavigate: (commentId) => {
    focusCommentCard(commentId);
    scrollToHighlight(commentId);
    setActiveHighlight(commentId);
  },
  onClose: () => closeSidebar()
});

// When sidebar opens
setKeyboardEnabled(true);
setKeyboardComments(comments);

// When sidebar closes
setKeyboardEnabled(false);

// Add help button to sidebar
addKeyboardHelpButton(sidebarElement);
```

## Future Enhancements

- `r` - Reply to focused comment
- `Enter` - Resolve/unresolve focused comment
- `e` - Edit focused comment
- `n` - Create new annotation
- `/` - Focus search (if search is added)

## Accessibility

Keyboard shortcuts improve accessibility by allowing power users and keyboard-only users to navigate the annotation interface efficiently without relying on a mouse.

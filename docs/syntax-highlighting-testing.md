# Syntax Highlighting Compatibility Testing (#56)

## Issue

Syntax highlighters (Prism.js, Highlight.js, Shiki) wrap code tokens in `<span>` elements, which fragments text nodes. This may interfere with Apache Annotator's text anchoring, causing annotations to fail.

## Test Setup

A test page (`test-syntax-highlighting.html`) has been created with Prism.js-highlighted code blocks.

### Running the Test

1. Start the Remarq server:
   ```bash
   npm start
   ```

2. Build the feedback layer:
   ```bash
   npm run build
   ```

3. Open the test page:
   ```
   http://localhost:3333/test-syntax-highlighting.html
   ```

4. Perform test cases below

## Test Cases

### 1. Single Token Selection
- **Action**: Select a single keyword (e.g., "function" or "console")
- **Expected**: Annotate button appears, annotation can be created
- **Result**: ❓ (needs testing)

### 2. Multi-Token Selection
- **Action**: Select across multiple tokens (e.g., "console.log" which spans multiple `<span>` elements)
- **Expected**: Selection works, annotation anchors correctly
- **Result**: ❓ (needs testing)

### 3. Full Line Selection
- **Action**: Select an entire line including whitespace
- **Expected**: Annotation created successfully
- **Result**: ❓ (needs testing)

### 4. Re-anchoring After Reload
- **Action**: Create annotation, reload page, verify highlight appears
- **Expected**: Annotation re-anchors to the same text
- **Result**: ❓ (needs testing)

### 5. Different Highlighters

Test with:
- ✅ Prism.js (included in test page)
- ⬜ Highlight.js
- ⬜ Shiki

Create additional test pages for Highlight.js and Shiki if Prism.js reveals issues.

## Known Issues

Apache Annotator's `TextQuoteSelector` normalizes text content, which should handle fragmented spans. However, if issues occur:

### Possible Fixes
1. **Modify selection listener**: Normalize selected text across spans before creating selector
2. **Adjust anchoring logic**: Enhance range-finding to merge adjacent text nodes during matching
3. **Pre-process code blocks**: Strip highlighting spans before anchoring (risky, may break after DOM changes)

## Results

| Test Case | Prism.js | Highlight.js | Shiki |
|-----------|----------|--------------|-------|
| Single token | ❓ | ⬜ | ⬜ |
| Multi-token | ❓ | ⬜ | ⬜ |
| Full line | ❓ | ⬜ | ⬜ |
| Re-anchor | ❓ | ⬜ | ⬜ |

## Conclusion

(To be filled after testing)

- [ ] Syntax highlighting is compatible, no fixes needed
- [ ] Minor issues found, documented workarounds
- [ ] Major issues found, requires anchoring logic changes
- [ ] Incompatible, recommend avoiding or provide alternative approach

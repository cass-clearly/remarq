/**
 * Simple word-level inline diff between two strings.
 * Returns an array of segments: { type: "equal"|"add"|"remove", text: string }
 */
export function inlineDiff(oldStr, newStr) {
  const oldWords = tokenize(oldStr);
  const newWords = tokenize(newStr);

  // Longest Common Subsequence (LCS) via dynamic programming
  const m = oldWords.length;
  const n = newWords.length;

  // Build LCS length table
  const dp = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (oldWords[i - 1] === newWords[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Backtrack to build diff segments
  const segments = [];
  let i = m;
  let j = n;

  // Collect raw operations in reverse, then reverse at the end
  const ops = [];
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && oldWords[i - 1] === newWords[j - 1]) {
      ops.push({ type: "equal", text: oldWords[i - 1] });
      i--;
      j--;
    } else if (j > 0 && (i === 0 || dp[i][j - 1] >= dp[i - 1][j])) {
      ops.push({ type: "add", text: newWords[j - 1] });
      j--;
    } else {
      ops.push({ type: "remove", text: oldWords[i - 1] });
      i--;
    }
  }

  ops.reverse();

  // Merge consecutive segments of the same type
  for (const op of ops) {
    if (segments.length > 0 && segments[segments.length - 1].type === op.type) {
      segments[segments.length - 1].text += op.text;
    } else {
      segments.push({ type: op.type, text: op.text });
    }
  }

  return segments;
}

/**
 * Tokenize a string into words, preserving whitespace as part of
 * each token (trailing whitespace attached to the word).
 */
function tokenize(str) {
  const tokens = [];
  const re = /\S+\s*/g;
  let match;
  while ((match = re.exec(str)) !== null) {
    tokens.push(match[0]);
  }
  return tokens;
}

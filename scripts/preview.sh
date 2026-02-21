#!/usr/bin/env bash
set -euo pipefail

if [ $# -eq 0 ]; then
  echo "Usage: ./scripts/preview.sh <PR_NUMBER>"
  echo "Example: ./scripts/preview.sh 121"
  exit 1
fi

PR_NUMBER="$1"
PORT="${2:-3333}"
SERVER_PID=""

cleanup() {
  echo ""
  echo "Shutting down preview server..."
  if [ -n "$SERVER_PID" ]; then
    kill "$SERVER_PID" 2>/dev/null || true
    wait "$SERVER_PID" 2>/dev/null || true
  fi
  echo "Done. Switched back to main."
  git checkout main 2>/dev/null || true
}
trap cleanup EXIT INT TERM

echo "==> Checking out PR #${PR_NUMBER}..."
gh pr checkout "$PR_NUMBER"

echo "==> Installing dependencies..."
npm install --silent

echo "==> Building extension..."
npm run build

echo ""
echo "============================================"
echo "  🧪 PR #${PR_NUMBER} preview ready!"
echo ""
echo "  Test page: http://localhost:${PORT}"
echo "  Press Ctrl+C to stop"
echo "============================================"
echo ""

PORT="$PORT" node server/index.js &
SERVER_PID=$!
wait "$SERVER_PID"

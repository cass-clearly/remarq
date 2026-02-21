#!/usr/bin/env bash
set -euo pipefail

if [ $# -eq 0 ]; then
  echo "Usage: ./scripts/preview.sh <PR_NUMBER>"
  echo "Example: ./scripts/preview.sh 121"
  exit 1
fi

PR_NUMBER="$1"
PORT="${2:-3333}"

cleanup() {
  echo ""
  echo "Shutting down..."
  docker compose -f docker-compose.remarq.yml down 2>/dev/null || true
  echo "Done."
}
trap cleanup EXIT INT TERM

echo "==> Checking out PR #${PR_NUMBER}..."
gh pr checkout "$PR_NUMBER"

echo "==> Building extension..."
npm install --silent
npm run build

echo "==> Starting server + database via Docker..."
docker compose -f docker-compose.remarq.yml up --build -d

echo ""
echo "============================================"
echo "  🧪 PR #${PR_NUMBER} preview ready!"
echo ""
echo "  Test page: http://localhost:${PORT}"
echo "  Press Ctrl+C to stop"
echo "============================================"
echo ""

docker compose -f docker-compose.remarq.yml logs -f

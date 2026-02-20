#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_DIR="$(dirname "$SCRIPT_DIR")"

cd "$PROJECT_DIR"

echo "=== Remarq Setup ==="
echo ""

# Step 1: Check prerequisites
for cmd in docker; do
  if ! command -v "$cmd" &> /dev/null; then
    echo "ERROR: $cmd is not installed. Please install it first."
    exit 1
  fi
done

# Step 2: Build and start services
echo ">>> Starting Remarq (Postgres + server)..."
docker compose -f docker-compose.remarq.yml up --build -d

# Step 3: Wait for server to be ready
echo ">>> Waiting for server to be ready..."
MAX_WAIT=60
ELAPSED=0
while [ $ELAPSED -lt $MAX_WAIT ]; do
  if curl -sf http://localhost:3333/documents > /dev/null 2>&1; then
    echo "    Server is ready."
    break
  fi
  sleep 2
  ELAPSED=$((ELAPSED + 2))
  echo "    Waiting... (${ELAPSED}s / ${MAX_WAIT}s)"
done

if [ $ELAPSED -ge $MAX_WAIT ]; then
  echo "WARNING: Timed out waiting for server. Check 'docker compose -f docker-compose.remarq.yml ps' for status."
  exit 1
fi

echo ""
echo "=== Setup Complete ==="
echo ""
echo "  Remarq is running at: http://localhost:3333"
echo "  Demo page:            http://localhost:3333 (serves index.html)"
echo ""
echo "  Try it:"
echo "    1. Open http://localhost:3333 in your browser"
echo "    2. Highlight text and leave a comment"
echo "    3. Query the API: curl http://localhost:3333/comments"
echo ""

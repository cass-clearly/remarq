#!/usr/bin/env bash
set -euo pipefail

PR_NUMBER="${1:?Usage: preview-deploy.sh <PR_NUMBER>}"
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
STATE_DIR="$REPO_ROOT/.preview-state"
WORKTREE_DIR="$REPO_ROOT/.preview-worktrees/pr-${PR_NUMBER}"
PORT=$((4000 + PR_NUMBER))
PROJECT="remarq-pr-${PR_NUMBER}"
POSTGRES_PASSWORD="$(openssl rand -hex 16)"

mkdir -p "$STATE_DIR"

# Clean up any existing preview for this PR
if [[ -f "$STATE_DIR/pr-${PR_NUMBER}.json" ]]; then
  echo "Cleaning up existing preview for PR #${PR_NUMBER}..."
  "$REPO_ROOT/scripts/preview-cleanup.sh" "$PR_NUMBER" || true
fi

# Fetch PR branch and create worktree
git -C "$REPO_ROOT" fetch origin "pull/${PR_NUMBER}/head:pr-${PR_NUMBER}" --force
if [[ -d "$WORKTREE_DIR" ]]; then
  git -C "$REPO_ROOT" worktree remove "$WORKTREE_DIR" --force 2>/dev/null || rm -rf "$WORKTREE_DIR"
fi
mkdir -p "$(dirname "$WORKTREE_DIR")"
git -C "$REPO_ROOT" worktree add "$WORKTREE_DIR" "pr-${PR_NUMBER}"

# Create docker-compose override
OVERRIDE_FILE="$WORKTREE_DIR/docker-compose.preview.yml"
cat > "$OVERRIDE_FILE" <<EOF
services:
  postgres:
    ports: !override []
  server:
    ports:
      - "0.0.0.0:${PORT}:3333"
volumes:
  remarq-pgdata:
EOF

# Create .env
cat > "$WORKTREE_DIR/.env" <<EOF
POSTGRES_PASSWORD=${POSTGRES_PASSWORD}
EOF

# Start containers
docker compose -p "$PROJECT" \
  -f "$WORKTREE_DIR/docker-compose.remarq.yml" \
  -f "$OVERRIDE_FILE" \
  --env-file "$WORKTREE_DIR/.env" \
  up -d --build

# Start cloudflared tunnel
TUNNEL_LOG="$STATE_DIR/tunnel-${PR_NUMBER}.log"
cloudflared tunnel --url "http://localhost:${PORT}" --no-autoupdate > "$TUNNEL_LOG" 2>&1 &
TUNNEL_PID=$!

# Wait for tunnel URL (up to 30s)
TUNNEL_URL=""
for i in $(seq 1 30); do
  TUNNEL_URL=$(grep -oP 'https://[a-zA-Z0-9-]+\.trycloudflare\.com' "$TUNNEL_LOG" 2>/dev/null | head -1 || true)
  if [[ -n "$TUNNEL_URL" ]]; then
    break
  fi
  sleep 1
done

if [[ -z "$TUNNEL_URL" ]]; then
  echo "ERROR: Failed to get tunnel URL after 30s"
  cat "$TUNNEL_LOG"
  exit 1
fi

echo "Preview URL: $TUNNEL_URL"

# Save state
cat > "$STATE_DIR/pr-${PR_NUMBER}.json" <<EOF
{
  "pr": ${PR_NUMBER},
  "port": ${PORT},
  "tunnel_pid": ${TUNNEL_PID},
  "tunnel_url": "${TUNNEL_URL}",
  "compose_project": "${PROJECT}",
  "worktree": "${WORKTREE_DIR}"
}
EOF

# Post comment on PR
gh pr comment "$PR_NUMBER" --body "$(cat <<COMMENT
🚀 **Preview deployed!**

🔗 **URL:** ${TUNNEL_URL}

| Detail | Value |
|--------|-------|
| Port | \`${PORT}\` |
| Project | \`${PROJECT}\` |

_This preview will be automatically torn down when the PR is closed._
COMMENT
)"

echo "Preview for PR #${PR_NUMBER} deployed at ${TUNNEL_URL}"

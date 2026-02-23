#!/usr/bin/env bash
set -euo pipefail

PR_NUMBER="${1:?Usage: preview-cleanup.sh <PR_NUMBER>}"
REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
STATE_DIR="$REPO_ROOT/.preview-state"
STATE_FILE="$STATE_DIR/pr-${PR_NUMBER}.json"
WORKTREE_DIR="$REPO_ROOT/.preview-worktrees/pr-${PR_NUMBER}"
PROJECT="remarq-pr-${PR_NUMBER}"

echo "Cleaning up preview for PR #${PR_NUMBER}..."

# Kill tunnel
if [[ -f "$STATE_FILE" ]]; then
  TUNNEL_PID=$(grep -oP '"tunnel_pid":\s*\K[0-9]+' "$STATE_FILE" || true)
  if [[ -n "$TUNNEL_PID" ]]; then
    kill "$TUNNEL_PID" 2>/dev/null || true
    wait "$TUNNEL_PID" 2>/dev/null || true
  fi
fi

# Docker compose down
if [[ -d "$WORKTREE_DIR" ]]; then
  OVERRIDE_FILE="$WORKTREE_DIR/docker-compose.preview.yml"
  if [[ -f "$OVERRIDE_FILE" ]]; then
    docker compose -p "$PROJECT" \
      -f "$WORKTREE_DIR/docker-compose.remarq.yml" \
      -f "$OVERRIDE_FILE" \
      down -v --remove-orphans 2>/dev/null || true
  fi
fi

# Fallback: try to remove by project name alone
docker compose -p "$PROJECT" down -v --remove-orphans 2>/dev/null || true

# Remove worktree
if [[ -d "$WORKTREE_DIR" ]]; then
  git -C "$REPO_ROOT" worktree remove "$WORKTREE_DIR" --force 2>/dev/null || rm -rf "$WORKTREE_DIR"
fi

# Clean up branch
git -C "$REPO_ROOT" branch -D "pr-${PR_NUMBER}" 2>/dev/null || true

# Remove state and logs
rm -f "$STATE_FILE" "$STATE_DIR/tunnel-${PR_NUMBER}.log"

echo "Preview for PR #${PR_NUMBER} cleaned up."

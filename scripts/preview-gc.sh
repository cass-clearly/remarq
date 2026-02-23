#!/usr/bin/env bash
set -euo pipefail

REPO_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
STATE_DIR="$REPO_ROOT/.preview-state"
CLEANED=0

log() { echo "[preview-gc] $*"; }

# 1. Check state files for closed/merged PRs
if [[ -d "$STATE_DIR" ]]; then
  for state_file in "$STATE_DIR"/pr-*.json; do
    [[ -f "$state_file" ]] || continue
    PR_NUMBER=$(basename "$state_file" | grep -oP '\d+')
    PR_STATE=$(gh pr view "$PR_NUMBER" --json state --jq '.state' 2>/dev/null || echo "UNKNOWN")

    if [[ "$PR_STATE" != "OPEN" ]]; then
      log "PR #${PR_NUMBER} is ${PR_STATE} — cleaning up"
      "$REPO_ROOT/scripts/preview-cleanup.sh" "$PR_NUMBER" || true
      ((CLEANED++)) || true
    fi
  done
fi

# 2. Orphaned docker compose projects (no matching state file)
for project in $(docker compose ls --format json 2>/dev/null | jq -r '.[].Name' 2>/dev/null || true); do
  if [[ "$project" =~ ^remarq-pr-([0-9]+)$ ]]; then
    PR_NUMBER="${BASH_REMATCH[1]}"
    if [[ ! -f "$STATE_DIR/pr-${PR_NUMBER}.json" ]]; then
      log "Orphaned project ${project} (no state file) — removing"
      docker compose -p "$project" down -v --remove-orphans 2>/dev/null || true
      ((CLEANED++)) || true
    fi
  fi
done

# 3. Orphaned cloudflared processes
ACTIVE_PIDS=()
if [[ -d "$STATE_DIR" ]]; then
  for state_file in "$STATE_DIR"/pr-*.json; do
    [[ -f "$state_file" ]] || continue
    pid=$(grep -oP '"tunnel_pid":\s*\K[0-9]+' "$state_file" 2>/dev/null || true)
    [[ -n "$pid" ]] && ACTIVE_PIDS+=("$pid")
  done
fi

while IFS= read -r line; do
  [[ -z "$line" ]] && continue
  pid=$(echo "$line" | awk '{print $1}')
  # Skip if it's an active preview tunnel
  for active in "${ACTIVE_PIDS[@]+"${ACTIVE_PIDS[@]}"}"; do
    [[ "$pid" == "$active" ]] && continue 2
  done
  # Check if this cloudflared is a preview tunnel (listening on 4xxx port)
  if echo "$line" | grep -qP 'localhost:4\d{3}'; then
    log "Orphaned cloudflared PID ${pid} — killing"
    kill "$pid" 2>/dev/null || true
    ((CLEANED++)) || true
  fi
done < <(ps aux | grep 'cloudflared tunnel' | grep -v grep | awk '{print $2, $0}' || true)

if [[ "$CLEANED" -eq 0 ]]; then
  log "Nothing to clean up"
else
  log "Cleaned up ${CLEANED} item(s)"
fi

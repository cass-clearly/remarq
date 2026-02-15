#!/bin/bash
# Build, restart server, run E2E tests
set -e

cd "$(dirname "$0")"

# Build frontend
(cd feedback-layer && node build.js && cp dist/feedback-layer.js ../serve/feedback-layer.js)
echo "Bundle built"

# Restart server
kill $(lsof -ti:3333) 2>/dev/null || true
sleep 1
rm -f server/annotations.db*
(cd server && node index.js) &
sleep 1

# Run tests
node test-e2e.mjs
TEST_EXIT=$?

# Cleanup
kill $(lsof -ti:3333) 2>/dev/null || true

exit $TEST_EXIT

#!/bin/bash
# Build, restart server, run E2E tests
set -e

cd "$(dirname "$0")"

export POSTGRES_PASSWORD=remarq

# Build frontend
(cd feedback-layer && node build.js && cp dist/feedback-layer.js ../serve/feedback-layer.js)
echo "Bundle built"

# Start Postgres if not already running
docker compose -f docker-compose.remarq.yml up -d postgres
echo "Waiting for Postgres..."
until docker compose -f docker-compose.remarq.yml exec -T postgres pg_isready -U remarq -d remarq >/dev/null 2>&1; do
  sleep 1
done
echo "Postgres ready"

export DATABASE_URL=postgres://remarq:remarq@localhost:5433/remarq

# Restart server
kill $(lsof -ti:3333) 2>/dev/null || true
sleep 1
(cd server && node index.js) &
sleep 1

# Run tests
node test-e2e.mjs
TEST_EXIT=$?

# Cleanup
kill $(lsof -ti:3333) 2>/dev/null || true

exit $TEST_EXIT

#!/usr/bin/env bash
# Sync this tree to the VPS, rebuild dist/, restart systemd.
# Does not copy .env — OpenSky keys stay on the server.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
HOST="${DEPLOY_HOST:-root@178.156.214.95}"
DEST="${DEPLOY_PATH:-/opt/flight-globe}"
HEALTH_URL="${DEPLOY_HEALTH_URL:-http://178.156.214.95:8787/api/health}"

cd "$ROOT"

echo "→ rsync $ROOT/ → $HOST:$DEST/"
rsync -avz --delete \
  --exclude node_modules \
  --exclude dist \
  --exclude dist-ssr \
  --exclude .git \
  --exclude .env \
  --exclude '.env.*' \
  --exclude .DS_Store \
  --exclude .vite \
  --exclude server/.route-cache.json \
  --exclude server/.flights-cache.json \
  "$ROOT/" \
  "$HOST:$DEST/"

echo "→ install, build, restart on $HOST"
ssh -t "$HOST" "set -euo pipefail
  cd '$DEST'
  npm install
  npm run build
  if systemctl is-enabled flight-globe >/dev/null 2>&1; then
    systemctl restart flight-globe
    systemctl --no-pager --lines=20 status flight-globe
  else
    echo 'flight-globe.service is not enabled — start the process yourself'
  fi
"

if command -v curl >/dev/null 2>&1; then
  echo "→ health $HEALTH_URL"
  curl -fsS "$HEALTH_URL" || echo "health check failed (service may still be coming up)"
fi

echo "✓ deploy finished"

#!/usr/bin/env bash
set -euo pipefail

# 1) Ensure forks exist (works with or without submodules)
[ -d deps/pxt ] || git clone --depth 1 https://github.com/codewithher/pxt deps/pxt
[ -d libs/pxt-library ] || git clone --depth 1 https://github.com/codewithher/pxt-library libs/pxt-library

echo "step 1 done"

# 2) Build your PXT fork
( cd deps/pxt
  if [ -f package-lock.json ]; then npm ci; else npm install; fi
  npm run build
)

echo "step 2 done"

# 3) Use your fork's CLI directly (no 'npx', no 'link')
PXT_CLI="node $(pwd)/deps/pxt/built/pxt.js"
$PXT_CLI --version || true

echo "step 3 done"

# 4) Produce the static site
$PXT_CLI staticpkg --minify -o public
# If you need a subpath:  $PXT_CLI staticpkg --route atisa -o public

echo "step 4 done" 
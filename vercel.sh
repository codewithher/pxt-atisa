#!/usr/bin/env bash
set -euo pipefail

# 1) Ensure the dependencies are present (works with or without submodules)
[ -d deps/pxt ] || git clone --depth 1 https://github.com/codewithher/pxt deps/pxt
[ -d libs/pxt-library ] || git clone --depth 1 https://github.com/codewithher/pxt-library libs/pxt-library

echo "step 1" 

# 2) Build your PXT fork once so the target can link to it
( cd deps/pxt && npm install && npm run build )

echo "step 2"

# 3) Link to your local forks (keep npm pxt-core for the CLI; invoke via npx)
npx pxt link ./deps/pxt
# Your library is already under libs/, and will be bundled via `bundleddirs`,
# but linking is harmless if you want it treated as a local package too:
npx pxt link ./libs/pxt-library || true

echo "step 3"

# 4) Produce the static site for Vercel to serve
npx pxt staticpkg --minify -o public

echo "step 4" 
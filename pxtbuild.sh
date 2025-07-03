#!/bin/bash

set -e
cd ../pxt
npm run build
cd ../pxt-atisa
./link.sh
pxt serve

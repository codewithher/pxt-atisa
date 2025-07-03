#!/bin/bash

npm install
rm -R node_modules/pxt-core
rm -R node_modules/pxt-library
pxt link ../pxt
pxt link ../pxt-library

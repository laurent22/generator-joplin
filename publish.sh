#!/bin/bash
set -e
git pull
npm version patch
npm publish
git add -A
git c -m 'Publish'
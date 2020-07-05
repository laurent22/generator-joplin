#!/bin/bash
set -e
git pull
npm version patch
npm publish
git add -A
git commit -m 'Publish'
git push

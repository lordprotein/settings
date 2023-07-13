#!/usr/bin/env node

const child_process = require('child_process');

child_process.execFileSync(`node`, [`../scripts/copy-dev-dependencies.js`], {
  cwd: process.cwd()
})

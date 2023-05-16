#!/usr/bin/env node

process.env.appName = 'static-service';
console.log('===enter binary===');
console.log('process.cwd()');
console.log(process.cwd());
console.log('process.argv');
console.log(process.argv);
console.log('process.env.appName');
console.log(process.env.appName);

require('../dist/bundle.min.cjs');

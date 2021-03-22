#! /usr/bin/env node

const cp = require('child_process');
const path = require('path');
const chalk = require('chalk');
var fs = require('fs');

console.log(chalk.keyword('orange')('Initializing...'));

const item = {
  scripts: {
    start: 'node node_modules/react-auto-clean-template/bin/init.js',
  },
};

var json = JSON.stringify(item);
fs.writeFile('./package.json', json, (err) => {
  if (err) {
    console.error(err);
    return;
  }
});

const args = [];
cp.spawn('bash', [path.join(__dirname, 'react.sh')].concat(args), {
  stdio: 'inherit',
});

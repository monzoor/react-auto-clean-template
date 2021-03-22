#! /usr/bin/env node

const cp = require('child_process');
const path = require('path');
const chalk = require('chalk');

const args = [];
cp.spawn('bash', [path.join(__dirname, 'init.sh')].concat(args), {
  stdio: 'inherit',
});
console.log(chalk.green('Your template is ready.\nHappy working!!!'));

#! /usr/bin/env node

const path = require('path');
const chalk = require('chalk');
const { spawn } = require('child_process');

const args = [];
async function spawnChild() {
  const child = spawn('bash', [path.join(__dirname, 'init.sh')].concat(args));

  let data = '';

  for await (const chunk of child.stdout) {
    console.log(`${chalk.green('Process: ')} ${chunk}`);
    data += chunk;
  }
  let error = '';
  for await (const chunk of child.stderr) {
    console.error(`${chunk}`);
    error += chunk;
  }
  const exitCode = await new Promise((resolve, reject) => {
    child.on('close', resolve);
  });

  if (exitCode) {
    throw new Error(chalk.red(`subprocess error exit ${exitCode}, ${error}`));
  }
  return data;
}

spawnChild().then(
  (data) => {
    console.log(chalk.keyword('orange')('Finalizing...'));
    // console.log(chalk.green('async result:\n' + data));
    console.log(chalk.green('Your template is ready.\nHappy working!!!'));
    process.exit();
  },
  (err) => {
    console.error(chalk.red('async error:\n' + err));
  },
);

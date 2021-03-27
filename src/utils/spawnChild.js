#! /usr/bin/env node

const path = require('path');
const chalk = require('chalk');
const { spawn } = require('child_process');
const logUpdate = require('log-update');

async function spawnChild({ args = [], command, paths, bashFile }) {
  let child = '';
  let data = '';
  let error = '';

  const newArguments =
    command === 'bash' ? [path.join(__dirname, bashFile)].concat(args) : args;

  child = spawn(command, newArguments, {
    cwd: paths,
  });

  child.stdout.on('data', (data) => {
    logUpdate.clear();
    console.log(`${chalk.green(`Process:`)} ${data}`);
  });

  child.stderr.on('data', (data) => {
    console.error(`${data}`);
  });

  const exitCode = await new Promise((resolve, reject) => {
    child.on('close', resolve);
  });
  if (exitCode) {
    throw new Error(chalk.red(`subprocess error exit ${exitCode}, ${error}`));
  }
  return data;
}

module.exports = spawnChild;

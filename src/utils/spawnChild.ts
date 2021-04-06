#! /usr/bin/env node

import path from 'path';
import chalk from 'chalk';
import logUpdate from 'log-update';
import { spawn } from 'child_process';

const spawnChild = async ({
  args = [],
  command = '',
  paths = '',
  bashFile = '',
}) => {
  let data = '';
  let error = '';

  const newArguments =
    command === 'bash' ? [path.join(__dirname, bashFile)].concat(args) : args;

  let child = spawn(command, newArguments, {
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
};

export default spawnChild;

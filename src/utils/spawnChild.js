#! /usr/bin/env node

const path = require('path');
const chalk = require('chalk');
const { spawn } = require('child_process');

async function spawnChild(fileNameWithPath, args) {
  const child = spawn(
    'bash',
    [path.join(__dirname, fileNameWithPath)].concat(args),
  );

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

module.exports = spawnChild;

#! /usr/bin/env node

const { exec, spawn } = require('child_process');
const path = require('path');
const chalk = require('chalk');
const logUpdate = require('log-update');

const packageJsonData = require('./constants/packageJson');
const fileCreator = require('./utils/fileCreator');
const FILE_NAMES = require('./constants/fileNames');
const spawnChild = require('./utils/spawnChild');
const templateProcessor = require('./templateProcessor');

const frames = ['-', '\\', '|', '/'];
let i = 0;

const spinner = () => {
  const frame = frames[(i = ++i % frames.length)];
  logUpdate(chalk.yellow(`Working... ${frame}`));
};

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function init() {
  const args = process.argv.slice(2);
  const folderName = args[0];
  /**
   * Creating folder from argument
   */
  if (!folderName) {
    console.log(`${chalk.red('No folder name provided')}`);
    process.exit(1);
  }
  exec(`mkdir ${folderName}`);
  console.log(chalk.rgb(30, 203, 225)('Initializing something AWESOME...'));
  await sleep(50);

  /**
   * Creating package.json for starting template
   */
  fileCreator({
    path: `./${folderName}/${FILE_NAMES.JSON_FILE}`,
    data: packageJsonData,
  });

  console.log(chalk.blue('Starting CRA...'));

  const cra = await spawn('npx', ['create-react-app', 'new', '-y'], {
    stdio: 'inherit',
    cwd: folderName,
  });
  cra.on('exit', async function () {
    console.log(chalk.green('Fetching clean architecture template...'));
    await spawnChild({
      command: 'npm',
      args: ['i', 'react-auto-clean-template@latest', '--yes', '--force'],
      paths: `./${folderName}`,
    }).then(
      async () => {
        console.log(chalk.yellowBright('Project initialized'));
        await templateProcessor({ args });
      },
      (err) => {
        console.error(chalk.red('async error 111:\n' + err));
      },
    );
  });
}

init();

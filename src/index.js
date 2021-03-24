#! /usr/bin/env node

const { exec } = require('child_process');
const path = require('path');
const chalk = require('chalk');
// const logUpdate = require('log-update');

const packageJsonData = require('./constants/packageJson');
const fileCreator = require('./utils/fileCreator');
const FILE_NAMES = require('./constants/fileNames');
const spawnChild = require('./utils/spawnChild');
// const frames = ['-', '\\', '|', '/'];
// let i = 0;

// const tt = () => {
//   const frame = frames[(i = ++i % frames.length)];
//   logUpdate(`${chalk.yellow(frame)}`);
// };

const clearThis = '../';

function init() {
  const args = process.argv.slice(2);
  const folderName = args[0];
  if (!folderName) {
    console.log(`${chalk.red('No folder name provided')}`);
    process.exit(1);
  }
  console.log(chalk.keyword('orange')('Initializing something AWESOME...'));
  exec(`mkdir ${clearThis + folderName}`);

  fileCreator({
    path: `${clearThis + folderName}/${FILE_NAMES.JSON_FILE}`,
    data: packageJsonData,
  });

  // console.log(chalk.keyword('orange')('Initializing...'));

  // console.log('WOWOWO');
  // setTimeout(() => {
  //   logUpdate.clear();

  //   logUpdate.done();
  //   process.exit(1);
  // }, 3000);
  // throw new Error('name not found');
  // console.error('name not found');
  // fileCreator({
  //   path: PATHS.JSON_FILE,
  //   data: packageJsonData,
  // });
  // exec(`cd ${clearThis}`);
  // exec('npm i bootstrap');
  // exec('yarn start');

  spawnChild('./react.sh').then(
    (data) => {
      // console.log(chalk.keyword('orange')('Finalizing...'));
      console.log(chalk.green('async result:\n' + data));
      // console.log(chalk.green('Your template is ready.\nHappy working!!!'));
    },
    (err) => {
      console.error(chalk.red('async error:\n' + err));
    },
  );
}

init();
// console.log(process.argv.slice(2));

// const args = [];
// cp.spawn('bash', [path.join(__dirname, 'react.sh')].concat(args), {
//   stdio: 'inherit',
// });

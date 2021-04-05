const spawnChild = require('../utils/spawnChild');
const chalk = require('chalk');
const logUpdate = require('log-update');

const FILE_NAMES = require('../constants/fileNames');

const { args } = require('../utils/arguments');
const spinner = require('../utils/spinner');

const templateProcessor = async () => {
  console.log(
    `Process: ${chalk.yellow('Please wait! It`s gonna take time\n')}`,
  );
  let startSpinner = 0;

  startSpinner = setInterval(spinner, 80);
  await spawnChild({
    command: 'bash',
    args,
    bashFile: FILE_NAMES.PACKAGE_BASH,
    paths: args[0],
  }).then(
    () => {
      clearInterval(startSpinner);
      logUpdate.clear();
      console.log(chalk.keyword('orange')('Finalizing...'));
      console.log(chalk.green('Your template is ready.\nHappy working!!!'));
    },
    (err) => {
      console.error(chalk.red('async error :\n' + err));
    },
  );
};

module.exports = templateProcessor;

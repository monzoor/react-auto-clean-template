const spawnChild = require('./utils/spawnChild');
const chalk = require('chalk');
const logUpdate = require('log-update');

const frames = ['-', '\\', '|', '/'];
let i = 0;

const spinner = () => {
  const frame = frames[(i = ++i % frames.length)];
  logUpdate(chalk.yellow(`Working... ${frame}`));
};

const templateProcessor = async ({ args }) => {
  let startSpinner = 0;

  startSpinner = setInterval(spinner, 80);
  await spawnChild({
    command: 'bash',
    args,
    bashFile: '../../src/init.sh',
    paths: args[0],
  }).then(
    () => {
      clearInterval(startSpinner);
      logUpdate.clear();
      console.log(chalk.keyword('orange')('Finalizing...'));
      // console.log(chalk.green('async result:\n' + data));
      console.log(chalk.green('Your template is ready.\nHappy working!!!'));
      // process.exit();
    },
    (err) => {
      console.error(chalk.red('async error 222:\n' + err));
    },
  );
};

module.exports = templateProcessor;

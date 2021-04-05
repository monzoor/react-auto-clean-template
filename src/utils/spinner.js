const logUpdate = require('log-update');
const chalk = require('chalk');

const frames = ['-', '\\', '|', '/'];
let i = 0;

const spinner = () => {
  const frame = frames[(i = ++i % frames.length)];
  logUpdate(chalk.yellow(`Working... ${frame}`));
};

module.exports = spinner;

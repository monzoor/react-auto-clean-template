import chalk from 'chalk';
import logUpdate from 'log-update';

const frames = ['-', '\\', '|', '/'];
let i = 0;

const spinner = () => {
  const frame = frames[(i = ++i % frames.length)];
  logUpdate(chalk.yellow(`Working... ${frame}`));
};

export default spinner;

import chalk from 'chalk';
import logUpdate from 'log-update';

import FILE_NAMES from '../constants/fileNames';

import { args } from '../utils/arguments';

import spinner from '../utils/spinner';
import spawnChild from '../utils/spawnChild';

const templateProcessor = async () => {
  console.log(
    `Process: ${chalk.yellow('Please wait! It`s gonna take time\n')}`,
  );

  let startSpinner = setInterval(spinner, 80);
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

export default templateProcessor;

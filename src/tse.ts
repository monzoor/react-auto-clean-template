import { spawn } from 'child_process';
import chalk from 'chalk';

import createFolder from './utils/folderCreator';
import sleep from './utils/sleep';
import { folderName } from './utils/arguments';

const init = async () => {
  await createFolder();

  console.log(chalk.blue('Starting CRA...'));

  await sleep(1000);

  const cra = await spawn('npx', ['create-react-app', 'new', '-y'], {
    stdio: 'inherit',
    cwd: folderName,
  });

  cra.on('exit', async () => {
    console.log(chalk.green('CRA Successful'));
    console.log(chalk.blue('Fetching clean architecture template...'));
  });
};

init();

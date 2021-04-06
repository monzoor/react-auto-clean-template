import { spawn } from 'child_process';
import chalk from 'chalk';

// UTILS
import sleep from './utils/sleep';
import createFolder from './utils/folderCreator';
import { folderName } from './utils/arguments';

// CONSTANTS
import FILE_NAMES from './constants/fileNames';

// Initializer
import deleteFiles from './initialization/deleteFiles';
import moveFiles from './initialization/moveFiles';
import updateCRAPackageJson from './initialization/updateCRAPackageJson';
import updateIndex from './initialization/updateIndex';
import copyTemplate from './initialization/copyTemplate';
import templateProcessor from './initialization/templateProcessor';

console.time('Total time');
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

    await deleteFiles(FILE_NAMES.DELETE_LIST).then((response) => {
      console.log(response);
    });

    await moveFiles().then((response) => {
      console.log(response);
    });

    await updateCRAPackageJson().then((response) => {
      console.log(response);
    });

    await updateIndex().then((response) => {
      console.log(response);
    });

    FILE_NAMES.COPY_LOCATIONS.forEach(async (location) => {
      await copyTemplate(location.src, location.dest).then((response) => {
        console.log(response);
      });
    });

    await deleteFiles(FILE_NAMES.CLEAN_UP).then(async (response) => {
      console.log(response);
      await templateProcessor();
    });
  });
};

init();

import chalk from 'chalk';

// UTILS
import sleep from './utils/sleep';
import createFolder from './utils/folderCreator';

// CONSTANTS
import FILE_NAMES from './constants/fileNames';

// Initializer
import deleteFiles from './initialization/deleteFiles';

console.time('Total time');
const init = async () => {
  await createFolder();
  console.log(chalk.blue('Starting CRA...'));

  await sleep(1000);

  await deleteFiles(FILE_NAMES.DELETE_LIST).then((response) => {
    console.log(response);
  });
};

init();

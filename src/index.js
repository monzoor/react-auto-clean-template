#! /usr/bin/env node

const { spawn } = require('child_process');
const chalk = require('chalk');

// UTILS
const sleep = require('./utils/sleep');
const createFolder = require('./utils/folderCreator');

// Initializer
const updateCRAPackageJson = require('./initialization/updateCRAPackageJson');
const updateIndex = require('./initialization/updateIndex');
const copyTemplate = require('./initialization/copyTemplate');
const deleteFiles = require('./initialization/deleteFiles');
const moveFiles = require('./initialization/moveFiles');
const templateProcessor = require('./initialization/templateProcessor');

// CONSTANTS
const FILE_NAMES = require('./constants/fileNames');
const { folderName } = require('./utils/arguments');

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

    console.timeEnd('Total time');
  });
};

init();

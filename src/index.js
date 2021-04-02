#! /usr/bin/env node

const { exec, spawn } = require('child_process');
const path = require('path');
const chalk = require('chalk');
const logUpdate = require('log-update');

const { promises: fs } = require('fs');
const fileFs = require('fs');

// UTILS
const sleep = require('./utils/sleep');
const createFolder = require('./utils/folderCreator');

// Initializer
const updateCRAPackageJson = require('./initialization/updateCRAPackageJson');
const updateIndex = require('./initialization/updateIndex');
const copyTemplate = require('./initialization/copyTemplate');
const deleteFiles = require('./initialization/deleteFiles');
const moveFiles = require('./initialization/moveFiles');

const packageJsonData = require('./constants/packageJson');
const fileCreator = require('./utils/fileCreator');
const FILE_NAMES = require('./constants/fileNames');
const spawnChild = require('./utils/spawnChild');
const templateProcessor = require('./templateProcessor');

const frames = ['-', '\\', '|', '/'];
let i = 0;

const spinner = () => {
  const frame = frames[(i = ++i % frames.length)];
  logUpdate(chalk.yellow(`Working... ${frame}`));
};

const init = async () => {
  const args = process.argv.slice(2);
  const folderName = args[0];

  await createFolder(folderName);

  console.log(chalk.blue('Starting CRA...'));

  //   const cra = await spawn("npx", ["create-react-app", "new", "-y"], {
  //     stdio: "inherit",
  //     cwd: folderName,
  //   });

  //   cra.on("exit", async () => {
  //     console.log(chalk.green("Fetching clean architecture template..."));

  //     //
  //   });

  await updateCRAPackageJson(folderName).then((response) => {
    console.log(response);
  });

  await updateIndex(folderName).then((response) => {
    console.log(response);
  });

  await copyTemplate(folderName).then((response) => {
    console.log(response);
  });

  await deleteFiles(folderName).then((response) => {
    console.log(response);
  });

  await moveFiles(folderName).then((response) => {
    console.log(response);
  });
  /**
   * Creating package.json for starting template done
   * do not need this anymore
   */
  //   fileCreator({
  //     path: `./${folderName}/${FILE_NAMES.JSON_FILE}`,
  //     data: packageJsonData,
  //   });

  const afterCra = () => {
    updateCRAPackageJson();
    updateIndex();
    copyTemplate();

    deleteFiles();

    sleep(100);

    moveFiles();
    sleep(100);
    console.log(chalk.green('===Installing packages==='));
    templateProcessor({ args });
  };

  //   afterCra();

  // Copy folders done

  // try {
  //   fileFs.rmSync(`${process.cwd()}/${folderName}/new/src/`, {
  //     // force: true,
  //     recursive: true,
  //   });
  // } catch {}

  // console.log('++++++', packageJson);

  // console.log('---', `${process.cwd()}/${folderName}/`);
  // fs.copyFile(
  //   path.join(__dirname, '../template/constants/index.js'),
  //   `${process.cwd()}/${folderName}/index.js`,
  // );

  // const cra = await spawn('npx', ['create-react-app', 'new', '-y'], {
  //   stdio: 'inherit',
  //   cwd: folderName,
  // });
  // cra.on('exit', async function () {
  //   console.log(chalk.green('Fetching clean architecture template...'));
  //   await spawnChild({
  //     command: 'npm',
  //     args: ['i', 'react-auto-clean-template@latest', '--yes', '--force'],
  //     paths: `./${folderName}`,
  //   }).then(
  //     async () => {
  //       console.log(chalk.yellowBright('Project initialized'));
  //       await templateProcessor({ args });
  //     },
  //     (err) => {
  //       console.error(chalk.red('async error 111:\n' + err));
  //     },
  //   );
  // });
};

init();

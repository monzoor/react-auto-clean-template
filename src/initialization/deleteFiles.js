const chalk = require('chalk');
const fs = require('fs');

const errorHandler = require('../utils/errorHandler');

const deleteFiles = async (folderName) => {
  const deleteList = [
    'new/src/App.js',
    'new/src/App.css',
    'new/src/index.css',
    'new/src/logo.svg',
    'new/src/App.test.js',
    // 'new/node_modules',
    // 'new/.git',
  ];
  try {
    deleteList.map(async (item) => {
      await fs.rmSync(`${process.cwd()}/${folderName}/${item}`, {
        force: true,
        recursive: true,
      });
    });
    return chalk.green('Files deleted');
  } catch {
    errorHandler(err);
  }
};

module.exports = deleteFiles;

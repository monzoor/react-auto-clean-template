const chalk = require('chalk');
const fs = require('fs');

const errorHandler = require('../utils/errorHandler');
const { folderName } = require('../utils/arguments');

const deleteFiles = async (deleteList: Array) => {
  try {
    deleteList.map(async (item) => {
      await fs.rmSync(`${process.cwd()}/${folderName}/${item}`, {
        force: true,
        recursive: true,
      });
    });
    return `Process: ${chalk.green('Cleaning files\n')}`;
  } catch {
    errorHandler(err);
  }
};

module.exports = deleteFiles;

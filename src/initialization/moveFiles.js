const chalk = require('chalk');
const fs = require('fs-extra');

const errorHandler = require('../utils/errorHandler');
const { folderName } = require('../utils/arguments');

const moveFiles = async () => {
  try {
    await fs.copy(
      `${process.cwd()}/${folderName}/new`,
      `${process.cwd()}/${folderName}/`,
    );
    return `Process: ${chalk.green('Moving files\n')}`;
  } catch (err) {
    errorHandler(err);
  }
};

module.exports = moveFiles;

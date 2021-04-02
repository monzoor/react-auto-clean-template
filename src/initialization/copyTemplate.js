const path = require('path');
const chalk = require('chalk');

const copyDir = require('../utils/copyFileFolder');
const errorHandler = require('../utils/errorHandler');

const copyTemplate = async (folderName) => {
  try {
    await copyDir(
      path.join(__dirname, '../../template'),
      `${process.cwd()}/${folderName}/new/src`,
    );
    return chalk.green('Template file moved');
  } catch (err) {
    errorHandler(err);
  }
};

module.exports = copyTemplate;

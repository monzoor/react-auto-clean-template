const path = require('path');
const chalk = require('chalk');

const copyDir = require('../utils/copyFileFolder');
const errorHandler = require('../utils/errorHandler');
const { folderName } = require('../utils/arguments');

const copyTemplate = async (source, destination) => {
  try {
    await copyDir(
      path.join(__dirname, source),
      `${process.cwd()}/${folderName}/${destination}`,
    );
    return `Process: ${chalk.green('Moving files\n')}`;
  } catch (err) {
    errorHandler(err);
  }
};

module.exports = copyTemplate;

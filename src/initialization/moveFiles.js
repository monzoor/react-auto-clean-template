const chalk = require('chalk');
const fs = require('fs-extra');

const errorHandler = require('../utils/errorHandler');

const moveFiles = async (folderName) => {
  try {
    await fs.copy(
      `${process.cwd()}/${folderName}/new`,
      `${process.cwd()}/${folderName}/`,
    );
    return chalk.green('Files moved');
  } catch (err) {
    errorHandler(err);
  }

  //   sleep(200);
  //   console.log('----2---');
  //   exec(`rm -rf ${process.cwd()}/${folderName}/new`);
  //   await copyDir(
  //     path.join(__dirname, '../rootConfigs'),
  //     `${process.cwd()}/${folderName}/`,
  //   );
};

module.exports = moveFiles;

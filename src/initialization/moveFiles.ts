import chalk from 'chalk';

import errorHandler from '../utils/errorHandler';
import { folderName } from '../utils/arguments';

const fs = require('fs-extra');

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

export default moveFiles;

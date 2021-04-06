import chalk from 'chalk';
import fs from 'fs';

import errorHandler from '../utils/errorHandler';
import { folderName } from '../utils/arguments';

const deleteFiles = async (deleteList: Array<string>) => {
  try {
    deleteList.map(async (item: string) => {
      await fs.rmSync(`${process.cwd()}/${folderName}/${item}`, {
        force: true,
        recursive: true,
      });
    });
    return `Process: ${chalk.green('Cleaning files\n')}`;
  } catch (err) {
    errorHandler(err);
  }
};

export default deleteFiles;

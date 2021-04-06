import path from 'path';
import chalk from 'chalk';

import copyDir from '../utils/copyFileFolder';
import errorHandler from '../utils/errorHandler';
import { folderName } from '../utils/arguments';

const copyTemplate = async (source: string, destination: string) => {
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
export default copyTemplate;

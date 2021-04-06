import chalk from 'chalk';

import errorHandler from '../utils/errorHandler';
import { folderName } from '../utils/arguments';
import { PACKAGE_JSON_CONFIG } from '../configs/config';

const fs = require('fs');

const updateCRAPackageJson = async () => {
  let packageJson = {};
  const newJsonLocation = `${process.cwd()}/${folderName}/package.json`;

  try {
    const jsonData = await fs.readFileSync(newJsonLocation);

    packageJson = JSON.parse(jsonData);

    packageJson = {
      ...packageJson,
      ...PACKAGE_JSON_CONFIG,
    };
    const jsonString = JSON.stringify(packageJson, null, 2);
    await fs.writeFileSync(newJsonLocation, jsonString);

    return `Process: ${chalk.green('Updating packages\n')}`;
  } catch (err) {
    errorHandler(err);
  }
};

export default updateCRAPackageJson;

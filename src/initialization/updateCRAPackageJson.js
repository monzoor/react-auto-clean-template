const chalk = require('chalk');
const fs = require('fs');

const errorHandler = require('../utils/errorHandler');
const { PACKAGE_JSON_CONFIG } = require('../configs/config');
const { folderName } = require('../utils/arguments');

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

module.exports = updateCRAPackageJson;

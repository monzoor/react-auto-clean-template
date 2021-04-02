const chalk = require('chalk');
const fs = require('fs');

const errorHandler = require('../utils/errorHandler');
const { PACKAGE_JSON_CONFIG } = require('../configs/config');

const updateCRAPackageJson = async (folderName) => {
  let packageJson = {};
  const newJsonLocation = `${process.cwd()}/${folderName}/new/package.json`;

  try {
    const jsonData = await fs.readFileSync(newJsonLocation);

    packageJson = JSON.parse(jsonData);

    packageJson = {
      ...packageJson,
      ...PACKAGE_JSON_CONFIG,
    };
    const jsonString = JSON.stringify(packageJson, null, 2);
    await fs.writeFileSync(newJsonLocation, jsonString);

    return chalk.green('Updated package.json');
  } catch (err) {
    errorHandler(err);
  }
};

module.exports = updateCRAPackageJson;

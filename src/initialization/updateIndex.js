const chalk = require('chalk');
const fs = require('fs');

const errorHandler = require('../utils/errorHandler');

const updateIndex = async (folderName) => {
  const newIndex = `${process.cwd()}/${folderName}/new/src/index.js`;

  try {
    let appJs = await fs.readFileSync(newIndex).toString();

    appJs = appJs.replace("import './index.css';\n", '');
    appJs = appJs.replace(
      "import App from './App';\n",
      "import App from './Core';\n",
    );
    await fs.writeFileSync(newIndex, appJs);
    return chalk.green('Index file has been changed');
  } catch (err) {
    errorHandler(err);
  }
};

module.exports = updateIndex;

import chalk from 'chalk';

import errorHandler from '../utils/errorHandler';
import { folderName } from '../utils/arguments';

const fs = require('fs');

const updateIndex = async () => {
  const newIndex = `${process.cwd()}/${folderName}/src/index.js`;

  try {
    let appJs = await fs.readFileSync(newIndex).toString();

    appJs = appJs.replace("import './index.css';\n", '');
    appJs = appJs.replace(
      "import App from './App';\n",
      "import App from './Core';\n",
    );
    await fs.writeFileSync(newIndex, appJs);
    return `Process: ${chalk.green('Changing sources\n')}`;
  } catch (err) {
    errorHandler(err);
  }
};

export default updateIndex;

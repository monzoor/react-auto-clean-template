const chalk = require('chalk');
const path = require('path');
const { promises: fs } = require('fs');

const errorHandler = require('../utils/errorHandler');

const copyDir = async (src, dest) => {
  try {
    await fs.mkdir(dest, { recursive: true });
    let entries = await fs.readdir(src, { withFileTypes: true });

    for (let entry of entries) {
      let srcPath = path.join(src, entry.name);
      let destPath = path.join(dest, entry.name);

      if (entry.isDirectory()) {
        copyDir(srcPath, destPath);
      } else {
        try {
          await fs.copyFile(srcPath, destPath);
        } catch (err) {
          errorHandler(err);
        }
      }
    }
  } catch (err) {
    errorHandler(err);
  }
};

module.exports = copyDir;

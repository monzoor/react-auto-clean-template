import path from 'path';
import errorHandler from '../utils/errorHandler';

const { promises: fs } = require('fs');

const copyDir = async (src: string, dest: string) => {
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

export default copyDir;

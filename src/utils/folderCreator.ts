#! /usr/bin/env node
import chalk from 'chalk';
import { exec } from 'child_process';
import { folderName } from '../utils/arguments';

const createFolder = async () => {
  if (!folderName) {
    console.log(`${chalk.red('No folder name provided')}`);
    process.exit(1);
  }
  exec(`mkdir ${folderName}`);
};

export default createFolder;

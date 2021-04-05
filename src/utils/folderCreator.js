#! /usr/bin/env node
const chalk = require('chalk');
const { exec } = require('child_process');
const { folderName } = require('../utils/arguments');

const createFolder = async () => {
  if (!folderName) {
    console.log(`${chalk.red('No folder name provided')}`);
    process.exit(1);
  }
  exec(`mkdir ${folderName}`);
};

module.exports = createFolder;

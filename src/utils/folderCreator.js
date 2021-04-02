#! /usr/bin/env node
const chalk = require('chalk');
const { exec } = require('child_process');

const createFolder = async (folderName) => {
  if (!folderName) {
    console.log(`${chalk.red('No folder name provided')}`);
    process.exit(1);
  }
  exec(`mkdir ${folderName}`);
};

module.exports = createFolder;

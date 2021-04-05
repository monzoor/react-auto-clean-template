#! /usr/bin/env node

const FILE_NAMES = {
  JSON_FILE: 'package.json',
  DELETE_LIST: [
    'new/src/App.js',
    'new/src/App.css',
    'new/src/index.css',
    'new/src/logo.svg',
    'new/src/App.test.js',
    'new/node_modules',
    'new/.git',
  ],
  COPY_LOCATIONS: [
    {
      src: '../../template',
      dest: 'src',
    },
    {
      src: '../../rootConfigs',
      dest: '',
    },
  ],
  CLEAN_UP: ['/new'],
  PACKAGE_BASH: '../../src/scripts/packages.sh',
};

module.exports = FILE_NAMES;

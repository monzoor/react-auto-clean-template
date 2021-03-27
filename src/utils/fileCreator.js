#! /usr/bin/env node

const fs = require('fs');

const fileCreator = ({ path, data }) => {
  const jsonData = JSON.stringify(data, null, 2);
  fs.writeFile(path, jsonData, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};

module.exports = fileCreator;

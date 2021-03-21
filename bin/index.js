#! /usr/bin/env node

var cp = require("child_process");
var path = require("path");

const args = [];
cp.spawn("bash", [path.join(__dirname, "react.sh")].concat(args), {
  stdio: "inherit",
});

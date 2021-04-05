"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.args = exports.folderName = void 0;
const args = process.argv.slice(2);
exports.args = args;
const folderName = args[0];
exports.folderName = folderName;

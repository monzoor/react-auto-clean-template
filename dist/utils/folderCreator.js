#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const child_process_1 = require("child_process");
const arguments_1 = require("../utils/arguments");
const createFolder = async () => {
    if (!arguments_1.folderName) {
        console.log(`${chalk_1.default.red('No folder name provided')}`);
        process.exit(1);
    }
    child_process_1.exec(`mkdir ${arguments_1.folderName}`);
};
exports.default = createFolder;

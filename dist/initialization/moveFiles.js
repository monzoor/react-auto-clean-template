"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
const arguments_1 = require("../utils/arguments");
const fs = require('fs-extra');
const moveFiles = async () => {
    try {
        await fs.copy(`${process.cwd()}/${arguments_1.folderName}/new`, `${process.cwd()}/${arguments_1.folderName}/`);
        return `Process: ${chalk_1.default.green('Moving files\n')}`;
    }
    catch (err) {
        errorHandler_1.default(err);
    }
};
exports.default = moveFiles;

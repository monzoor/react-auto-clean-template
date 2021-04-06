"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const fs_1 = __importDefault(require("fs"));
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
const arguments_1 = require("../utils/arguments");
const deleteFiles = async (deleteList) => {
    try {
        deleteList.map(async (item) => {
            await fs_1.default.rmSync(`${process.cwd()}/${arguments_1.folderName}/${item}`, {
                force: true,
                recursive: true,
            });
        });
        return `Process: ${chalk_1.default.green('Cleaning files\n')}`;
    }
    catch (err) {
        errorHandler_1.default(err);
    }
};
exports.default = deleteFiles;

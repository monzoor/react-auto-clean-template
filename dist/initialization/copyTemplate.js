"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const chalk_1 = __importDefault(require("chalk"));
const copyFileFolder_1 = __importDefault(require("../utils/copyFileFolder"));
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
const arguments_1 = require("../utils/arguments");
const copyTemplate = async (source, destination) => {
    try {
        await copyFileFolder_1.default(path_1.default.join(__dirname, source), `${process.cwd()}/${arguments_1.folderName}/${destination}`);
        return `Process: ${chalk_1.default.green('Moving files\n')}`;
    }
    catch (err) {
        errorHandler_1.default(err);
    }
};
exports.default = copyTemplate;

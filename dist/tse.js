"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
// UTILS
const sleep_1 = __importDefault(require("./utils/sleep"));
const folderCreator_1 = __importDefault(require("./utils/folderCreator"));
// CONSTANTS
const fileNames_1 = __importDefault(require("./constants/fileNames"));
// Initializer
const deleteFiles_1 = __importDefault(require("./initialization/deleteFiles"));
console.time('Total time');
const init = async () => {
    await folderCreator_1.default();
    console.log(chalk_1.default.blue('Starting CRA...'));
    await sleep_1.default(1000);
    await deleteFiles_1.default(fileNames_1.default.DELETE_LIST).then((response) => {
        console.log(response);
    });
};
init();

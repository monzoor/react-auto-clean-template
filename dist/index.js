#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const chalk_1 = __importDefault(require("chalk"));
// UTILS
const sleep_1 = __importDefault(require("./utils/sleep"));
const folderCreator_1 = __importDefault(require("./utils/folderCreator"));
const arguments_1 = require("./utils/arguments");
// CONSTANTS
const fileNames_1 = __importDefault(require("./constants/fileNames"));
// Initializer
const deleteFiles_1 = __importDefault(require("./initialization/deleteFiles"));
const moveFiles_1 = __importDefault(require("./initialization/moveFiles"));
const updateCRAPackageJson_1 = __importDefault(require("./initialization/updateCRAPackageJson"));
const updateIndex_1 = __importDefault(require("./initialization/updateIndex"));
const copyTemplate_1 = __importDefault(require("./initialization/copyTemplate"));
const templateProcessor_1 = __importDefault(require("./initialization/templateProcessor"));
console.time('Total time');
const init = async () => {
    await folderCreator_1.default();
    console.log(chalk_1.default.blue('Starting CRA...'));
    await sleep_1.default(1000);
    const cra = await child_process_1.spawn('npx', ['create-react-app', 'new', '-y'], {
        stdio: 'inherit',
        cwd: arguments_1.folderName,
    });
    cra.on('exit', async () => {
        console.log(chalk_1.default.green('CRA Successful'));
        console.log(chalk_1.default.blue('Fetching clean architecture template...'));
        await deleteFiles_1.default(fileNames_1.default.DELETE_LIST).then((response) => {
            console.log(response);
        });
        await moveFiles_1.default().then((response) => {
            console.log(response);
        });
        await updateCRAPackageJson_1.default().then((response) => {
            console.log(response);
        });
        await updateIndex_1.default().then((response) => {
            console.log(response);
        });
        fileNames_1.default.COPY_LOCATIONS.forEach(async (location) => {
            await copyTemplate_1.default(location.src, location.dest).then((response) => {
                console.log(response);
            });
        });
        await deleteFiles_1.default(fileNames_1.default.CLEAN_UP).then(async (response) => {
            console.log(response);
            await templateProcessor_1.default();
        });
    });
};
init();

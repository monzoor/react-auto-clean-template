"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const chalk_1 = __importDefault(require("chalk"));
const folderCreator_1 = __importDefault(require("./utils/folderCreator"));
const sleep_1 = __importDefault(require("./utils/sleep"));
const arguments_1 = require("./utils/arguments");
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
    });
};
init();

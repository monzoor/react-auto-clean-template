"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const chalk_1 = __importDefault(require("chalk"));
const log_update_1 = __importDefault(require("log-update"));
const child_process_1 = require("child_process");
const spawnChild = async ({ args = [], command = '', paths = '', bashFile = '', }) => {
    let data = '';
    let error = '';
    const newArguments = command === 'bash' ? [path_1.default.join(__dirname, bashFile)].concat(args) : args;
    let child = child_process_1.spawn(command, newArguments, {
        cwd: paths,
    });
    child.stdout.on('data', (data) => {
        log_update_1.default.clear();
        console.log(`${chalk_1.default.green(`Process:`)} ${data}`);
    });
    child.stderr.on('data', (data) => {
        console.error(`${data}`);
    });
    const exitCode = await new Promise((resolve, reject) => {
        child.on('close', resolve);
    });
    if (exitCode) {
        throw new Error(chalk_1.default.red(`subprocess error exit ${exitCode}, ${error}`));
    }
    return data;
};
exports.default = spawnChild;

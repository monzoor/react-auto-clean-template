"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const log_update_1 = __importDefault(require("log-update"));
const fileNames_1 = __importDefault(require("../constants/fileNames"));
const arguments_1 = require("../utils/arguments");
const spinner_1 = __importDefault(require("../utils/spinner"));
const spawnChild_1 = __importDefault(require("../utils/spawnChild"));
const templateProcessor = async () => {
    console.log(`Process: ${chalk_1.default.yellow('Please wait! It`s gonna take time\n')}`);
    let startSpinner = setInterval(spinner_1.default, 80);
    await spawnChild_1.default({
        command: 'bash',
        args: arguments_1.args,
        bashFile: fileNames_1.default.PACKAGE_BASH,
        paths: arguments_1.args[0],
    }).then(() => {
        clearInterval(startSpinner);
        log_update_1.default.clear();
        console.log(chalk_1.default.keyword('orange')('Finalizing...'));
        console.log(chalk_1.default.green('Your template is ready.\nHappy working!!!'));
    }, (err) => {
        console.error(chalk_1.default.red('async error :\n' + err));
    });
};
exports.default = templateProcessor;

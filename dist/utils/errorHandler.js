"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const errorHandler = (err) => {
    if (typeof err === 'object') {
        if (err.message) {
            console.log(chalk_1.default.red('\nMessage: ') + err.message);
        }
        if (err.stack) {
            console.log('\nStacktrace:');
            console.log('====================');
            console.log(err.stack);
        }
    }
    else {
        console.log('dumpError :: argument is not an object');
        console.log(chalk_1.default.yellow('Aborting...'));
        process.exit();
    }
    console.log(chalk_1.default.yellow('Aborting...'));
    process.exit();
};
exports.default = errorHandler;

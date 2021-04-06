"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const log_update_1 = __importDefault(require("log-update"));
const frames = ['-', '\\', '|', '/'];
let i = 0;
const spinner = () => {
    const frame = frames[(i = ++i % frames.length)];
    log_update_1.default(chalk_1.default.yellow(`Working... ${frame}`));
};
exports.default = spinner;

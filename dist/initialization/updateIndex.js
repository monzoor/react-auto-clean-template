"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
const arguments_1 = require("../utils/arguments");
const fs = require('fs');
const updateIndex = async () => {
    const newIndex = `${process.cwd()}/${arguments_1.folderName}/src/index.js`;
    try {
        let appJs = await fs.readFileSync(newIndex).toString();
        appJs = appJs.replace("import './index.css';\n", '');
        appJs = appJs.replace("import App from './App';\n", "import App from './Core';\n");
        await fs.writeFileSync(newIndex, appJs);
        return `Process: ${chalk_1.default.green('Changing sources\n')}`;
    }
    catch (err) {
        errorHandler_1.default(err);
    }
};
exports.default = updateIndex;

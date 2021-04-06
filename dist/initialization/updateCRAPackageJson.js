"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
const arguments_1 = require("../utils/arguments");
const config_1 = require("../configs/config");
const fs = require('fs');
const updateCRAPackageJson = async () => {
    let packageJson = {};
    const newJsonLocation = `${process.cwd()}/${arguments_1.folderName}/package.json`;
    try {
        const jsonData = await fs.readFileSync(newJsonLocation);
        packageJson = JSON.parse(jsonData);
        packageJson = {
            ...packageJson,
            ...config_1.PACKAGE_JSON_CONFIG,
        };
        const jsonString = JSON.stringify(packageJson, null, 2);
        await fs.writeFileSync(newJsonLocation, jsonString);
        return `Process: ${chalk_1.default.green('Updating packages\n')}`;
    }
    catch (err) {
        errorHandler_1.default(err);
    }
};
exports.default = updateCRAPackageJson;

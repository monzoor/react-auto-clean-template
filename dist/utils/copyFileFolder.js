"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
const { promises: fs } = require('fs');
const copyDir = async (src, dest) => {
    try {
        await fs.mkdir(dest, { recursive: true });
        let entries = await fs.readdir(src, { withFileTypes: true });
        for (let entry of entries) {
            let srcPath = path_1.default.join(src, entry.name);
            let destPath = path_1.default.join(dest, entry.name);
            if (entry.isDirectory()) {
                copyDir(srcPath, destPath);
            }
            else {
                try {
                    await fs.copyFile(srcPath, destPath);
                }
                catch (err) {
                    errorHandler_1.default(err);
                }
            }
        }
    }
    catch (err) {
        errorHandler_1.default(err);
    }
};
exports.default = copyDir;

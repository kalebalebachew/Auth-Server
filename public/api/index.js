"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const { VercelRequest, VercelResponse } = require('@vercel/node');
const app_1 = __importDefault(require("../app"));
exports.default = (req, res) => {
    return (0, app_1.default)(req, res);
};

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import path from 'path';
const app = (0, express_1.default)();
const port = 3000;
// app.use(express.static(path.join(__dirname, '../public'))); 
app.get('/', (req, res) => {
    res.send('My auth server lol');
});
app.listen(port, () => {
    console.log(`Auth server running on ${port}`);
});
exports.default = app;

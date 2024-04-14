"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const expressLoader_1 = __importDefault(require("./src/loaders/expressLoader"));
const index_1 = __importDefault(require("./src/api/index"));
const app = (0, express_1.default)();
(0, expressLoader_1.default)();
app.use('/api', index_1.default);
exports.default = app;

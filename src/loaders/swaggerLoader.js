"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const swaggerSpec = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Prices docs API',
            version: '1.0.0',
        },
        servers: [
            {
                url: `${process.env.BASE_URL}`
            }
        ]
    },
    apis: [
        `${path_1.default.join(__dirname, '../api/users/*.ts')}`,
        `${path_1.default.join(__dirname, '../api/products/*.ts')}`,
        `${path_1.default.join(__dirname, '../api/business/*.ts')}`
    ]
};
exports.default = () => {
    const app = (0, express_1.default)();
    app.use('/docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup((0, swagger_jsdoc_1.default)(swaggerSpec)));
    return app;
};

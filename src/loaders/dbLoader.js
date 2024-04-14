"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const usersModel_1 = __importDefault(require("../models/usersModel"));
const businessModel_1 = __importDefault(require("../models/businessModel"));
const branchModel_1 = __importDefault(require("../models/branchModel"));
const productsModel_1 = __importDefault(require("../models/productsModel"));
const purchasesModel_1 = __importDefault(require("../models/purchasesModel"));
require('dotenv').config();
//const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
if (!DB_HOST || !DB_PORT || !DB_USER || !DB_PASSWORD || !DB_NAME) {
    throw new Error('Faltan variables de entorno necesarias para la conexión a la base de datos.');
}
const sequelize = new sequelize_1.Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: parseInt(DB_PORT),
    dialect: 'postgres',
    logging: false,
});
// Inicializa los modelos
(0, usersModel_1.default)(sequelize);
(0, businessModel_1.default)(sequelize);
(0, branchModel_1.default)(sequelize);
(0, productsModel_1.default)(sequelize);
(0, purchasesModel_1.default)(sequelize);
const { User, Purchase, Product, Business, Branch } = sequelize.models;
exports.default = { User, Product, Purchase, Business, Branch, conn: sequelize };

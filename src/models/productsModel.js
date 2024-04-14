"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const businessModel_1 = __importDefault(require("./businessModel"));
const purchasesModel_1 = __importDefault(require("./purchasesModel"));
const branchModel_1 = __importDefault(require("./branchModel"));
exports.default = (sequelize) => {
    const Product = sequelize.define('Product', {
        id: {
            type: sequelize_1.DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: sequelize_1.DataTypes.UUIDV4,
        },
        name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: sequelize_1.DataTypes.FLOAT,
            allowNull: false,
        },
        offer_price: {
            type: sequelize_1.DataTypes.FLOAT,
        },
        IsInOffer: {
            type: sequelize_1.DataTypes.BOOLEAN,
        },
        measure: {
            type: sequelize_1.DataTypes.STRING,
        },
        value: {
            type: sequelize_1.DataTypes.STRING,
        },
        description: {
            type: sequelize_1.DataTypes.TEXT,
        },
    });
    //Relations
    Product.belongsToMany((0, businessModel_1.default)(sequelize), {
        foreignKey: 'productID',
        through: 'BusinessProduct'
    });
    Product.belongsToMany((0, purchasesModel_1.default)(sequelize), {
        foreignKey: 'productID',
        through: 'PurchaseProduct',
    });
    Product.belongsToMany((0, branchModel_1.default)(sequelize), {
        foreignKey: 'productID',
        through: 'BranchProduct'
    });
    return Product;
};

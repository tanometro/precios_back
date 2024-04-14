"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const businessModel_1 = __importDefault(require("./businessModel"));
const productsModel_1 = __importDefault(require("./productsModel"));
exports.default = (sequelize) => {
    const Branch = sequelize.define('Branch', {
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
        adress: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        business_id: {
            type: sequelize_1.DataTypes.UUIDV4,
            allowNull: false,
            references: {
                model: (0, businessModel_1.default)(sequelize),
                key: 'id'
            }
        }
    });
    //Relations
    Branch.belongsTo((0, businessModel_1.default)(sequelize), {
        foreignKey: 'branchID',
    });
    Branch.hasMany((0, productsModel_1.default)(sequelize), {
        foreignKey: 'productID',
    });
    return Branch;
};

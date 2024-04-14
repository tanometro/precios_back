"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const businessModel_1 = __importDefault(require("./businessModel"));
const purchasesModel_1 = __importDefault(require("./purchasesModel"));
exports.default = (sequelize) => {
    const User = sequelize.define('User', {
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
        last_name: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: sequelize_1.DataTypes.STRING,
        },
        province: {
            type: sequelize_1.DataTypes.STRING,
        },
        country: {
            type: sequelize_1.DataTypes.STRING,
        },
        role: {
            type: sequelize_1.DataTypes.INTEGER,
        },
        IsActive: {
            type: sequelize_1.DataTypes.BOOLEAN
        }
    });
    //Relations
    User.hasMany((0, purchasesModel_1.default)(sequelize), {
        foreignKey: 'userID',
        onDelete: 'CASCADE',
    });
    User.hasMany((0, businessModel_1.default)(sequelize), {
        foreignKey: 'userID',
        onDelete: 'CASCADE'
    });
    return User;
};

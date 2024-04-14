"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const usersModel_1 = __importDefault(require("./usersModel"));
const productsModel_1 = __importDefault(require("./productsModel"));
const branchModel_1 = __importDefault(require("./branchModel"));
exports.default = (sequelize) => {
    const Business = sequelize.define('Business', {
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
        address: {
            type: sequelize_1.DataTypes.STRING,
            allowNull: false
        },
    });
    //Relations
    Business.belongsTo((0, usersModel_1.default)(sequelize), {
        foreignKey: 'userID',
    });
    Business.hasMany((0, productsModel_1.default)(sequelize), {
        foreignKey: 'businessID',
    });
    Business.hasMany((0, branchModel_1.default)(sequelize), {
        foreignKey: 'branchID',
        onDelete: 'CASCADE',
    });
    return Business;
};

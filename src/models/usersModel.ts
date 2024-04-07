import { DataTypes, Sequelize } from "sequelize";
import businessModel from "./businessModel";
import purchasesModel from "./purchasesModel";

export default (sequelize: Sequelize) => {
    const User = sequelize.define('User', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
        },
        province: {
            type: DataTypes.STRING,
        },
        country: {
            type: DataTypes.STRING,
        },
        role: {
            type: DataTypes.INTEGER,
        },
        IsActive: {
            type: DataTypes.BOOLEAN
        }
    })

    //Relations
    User.hasMany(purchasesModel(sequelize), {
        foreignKey: 'purchaseID',
        onDelete: 'CASCADE',
    });
    // User.hasMany(businessModel(sequelize));

    return User;
}
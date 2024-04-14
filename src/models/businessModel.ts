import { DataTypes, Sequelize } from "sequelize";
import usersModel from "./usersModel";
import productsModel from "./productsModel";
import branchModel from "./branchModel";

export default (sequelize: Sequelize) => {
    const Business = sequelize.define('Business', {
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
        address: {
            type: DataTypes.STRING,
            allowNull: false
        },
    });

    //Relations
    Business.belongsTo(usersModel(sequelize), {
        foreignKey: 'userID',
    });
    Business.hasMany(productsModel(sequelize), {
        foreignKey: 'businessID',
    });
    Business.hasMany(branchModel(sequelize), {
        foreignKey: 'branchID',
        onDelete: 'CASCADE',
    })

    return Business;
}
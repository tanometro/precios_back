import { DataTypes, Sequelize } from "sequelize";
import usersModel from "./usersModel";
import productsModel from "./productsModel";

export default (sequelize: Sequelize) => {
    const Purchase = sequelize.define('Purchase', {
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
    })

    //Relations 
    Purchase.belongsTo(usersModel(sequelize), {
        foreignKey: 'purchaseID',
    });
    Purchase.hasMany(productsModel(sequelize), {
        foreignKey: 'purchaseID'
    });
    return Purchase;
}
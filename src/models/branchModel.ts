import { DataTypes, Sequelize } from "sequelize";
import businessModel from "./businessModel";
import productsModel from "./productsModel";

export default (sequelize: Sequelize) => {
    const Branch = sequelize.define('Branch', {
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
        adress: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        business_id: {
            type: DataTypes.UUIDV4,
            allowNull: false,
            references: {
                model: businessModel(sequelize),
                key: 'id'
            }
        }
    });
    
    //Relations
    Branch.belongsTo(businessModel(sequelize), {
        foreignKey: 'businessID',
        onDelete: 'CASCADE',
    });
    Branch.hasMany(productsModel(sequelize),{
        foreignKey: 'productID',
    });

    return Branch;
}
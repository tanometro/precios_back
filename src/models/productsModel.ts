import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
    const Product = sequelize.define('Product', {
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
        price: {
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        offer_price: {
            type: DataTypes.FLOAT,
        },
        IsInOffer: {
            type: DataTypes.BOOLEAN,
        },
        measure: {
            type: DataTypes.STRING,
        },
        value: {
            type: DataTypes.STRING,
        },
        description: {
            type: DataTypes.TEXT,
        },
    })
    return Product;
}
import { DataTypes, Sequelize } from "sequelize";

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
    
    return Purchase;
}
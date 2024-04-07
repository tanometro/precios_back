import { Sequelize } from "sequelize";

require('dotenv').config();

const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;
  
if (!DB_HOST || !DB_PORT || !DB_USER || !DB_PASSWORD || !DB_NAME) {
    throw new Error('Faltan variables de entorno necesarias para la conexión a la base de datos.');
}
  
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: parseInt(DB_PORT), 
    dialect: 'postgres', 
    logging: false,
});

export default sequelize;
import { Sequelize } from "sequelize";
import UserModel from '../models/usersModel';
import BusinessModel from '../models/businessModel';
import BranchModel from '../models/branchModel';
import ProductModel from '../models/productsModel';
import PurchaseModel from '../models/purchasesModel';

require('dotenv').config();

//const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const {DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME} = process.env;

if (!DB_HOST || !DB_PORT || !DB_USER || !DB_PASSWORD || !DB_NAME) {
    throw new Error('Faltan variables de entorno necesarias para la conexión a la base de datos.');
}

const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
    host: DB_HOST,
    port: parseInt(DB_PORT),
    dialect: 'postgres',
    logging: false,
});

// Inicializa los modelos
UserModel(sequelize);
BusinessModel(sequelize);
BranchModel(sequelize);
ProductModel(sequelize);
PurchaseModel(sequelize);

const { User, Purchase, Product, Business, Branch } = sequelize.models;

export default { User, Product, Purchase, Business, Branch, conn: sequelize };
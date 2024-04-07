import swaggerUI from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import path from 'path';
import express from 'express';

const swaggerSpec = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Prices docs API',
      version: '1.0.0',  
    },
    servers: [
      {
        url: `${process.env.BASE_URL}`
      }
    ]
  },
  apis: [
    `${path.join(__dirname, '../api/users/*.ts')}`,
    `${path.join(__dirname, '../api/products/*.ts')}`,
    `${path.join(__dirname, '../api/business/*.ts')}`
  ]
};

export default () => {
  const app = express();
  app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJsDoc(swaggerSpec)));
  return app;
};
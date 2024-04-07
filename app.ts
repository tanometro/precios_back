import express from 'express';
import expressLoader from './src/loaders/expressLoader';
import api from './src/api/index';

const app = express();
expressLoader(app);

app.use('/api', api);

export default app;

import express from 'express';
import businessRoutes from './business/business.routes';
import usersRoutes from './users/users.routes';

const app = express();

app.use('/business', businessRoutes);
app.use('/users', usersRoutes);

export default app;
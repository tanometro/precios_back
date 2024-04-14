import express from 'express';
import morgan from 'morgan';
import cors from 'cors';

const expressLoader = () => {
    const app = express();

    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    app.use(morgan('dev'));
    app.use(cors());

    return app;
};

export default expressLoader;
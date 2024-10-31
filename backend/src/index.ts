import express, { Express, Request, Response } from 'express';
import config from './utils/config';
import usersRouter from './routers/users-router';

const app: Express = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/user', usersRouter);

app.listen(config.PORT, () => (
    console.log(`server listening on port ${config.PORT}`)
));

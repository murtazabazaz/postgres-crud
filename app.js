import express from 'express';

const app = express();

import todoRouter from './todo/todoRouter.js';

app.use(express.json());

app.use('/todos', todoRouter);

export default app;
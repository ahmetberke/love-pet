import authRouter from "./v1/auth.js";

import express from 'express';
let v1Router = express.Router();
v1Router.use('/auth', authRouter);

export default v1Router;

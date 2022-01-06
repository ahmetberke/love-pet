// create db if not sync
import createDb from "./db/create-db.js";
await createDb();

import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import v1Router from "./routes/v1Router.js";

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(path.resolve(), 'public')));

// set api router
app.use('/api', v1Router);

// set error handler
const jsonErrorHandler = async (err, req, res, next) => {
    res.status(500).json({ error: err });
}
app.use(jsonErrorHandler)

export default app;

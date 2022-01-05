// create db if not sync
import createDb from "./db/create-db.js";
await createDb();

import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import versionRoutes from 'express-routes-versioning';
import v1Router from "./routes/v1Router.js";

let app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(path.resolve(), 'public')));

// extract version
app.use(function(req, res, next)
{
    req.version = req.headers['accept-version'];
    console.log(req.version);
    next();
});

// select routes according to version
app.use('/api', v1Router);

// error handler
const jsonErrorHandler = async (err, req, res, next) => {
    res.status(500).json({ error: err });
}
app.use(jsonErrorHandler)

export default app;

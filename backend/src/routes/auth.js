import authService from "../services/auth-service.js";
import express from 'express';
let router = express.Router();

router.post('/register/', async (req, res, next) => {
    let [statusCode, token, msg] = authService.register(req.body, req.query.type);
    if(statusCode == 200){
        return res.status(statusCode).send(token);
    }
    else{
        return res.status(statusCode).send(msg);
    }
});

router.post('/login', async (req, res, next) => {
    let [statusCode, token, msg] = authService.login(req.body, req.query.type);
    if(statusCode == 200){
        return res.status(statusCode).send(token);
    }
    else{
        return res.status(statusCode).send(msg);
    }
});

router.get('/check/username', async (req, res, next) => {
    let [statusCode, token, msg] = authService.hasUsername(req.body.username, req.query.type);
    if(statusCode == 200){
        return res.status(statusCode).send(token);
    }
    else{
        return res.status(statusCode).send(msg);
    }
});

export default router;

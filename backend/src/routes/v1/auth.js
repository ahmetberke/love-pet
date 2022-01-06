import authService from "../../services/auth-service.js";
import express from 'express';
let authRouter = express.Router();

authRouter.post('/register', async (req, res, next) => {
    try{
        let [statusCode, token, msg] = await authService.register(req.body, req.query.type);
        return res.status(statusCode).json({token:token, msg:msg});
    }
    catch(e){
        next(e);
    }
});

authRouter.post('/login', async (req, res, next) => {
    try{
        let [statusCode, token, msg] = await authService.login(req.body, req.query.type);
        return res.status(statusCode).json({token:token, msg:msg});
    }
    catch(e){
        next(e);
    }
});

authRouter.get('/validateUsername', async (req, res, next) => {
    try{
        let [valid, msg] = await authService.hasValidUsername(req.body.username, req.query.type);
        return res.status(200).json({valid:valid, msg:msg});
    }
    catch(e){
        next(e);
    }
});

export default authRouter;

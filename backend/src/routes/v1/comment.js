import commentService from "../../services/comment-service.js";
import {verifyToken} from "../../middleware/auth.js";
import express from 'express';
let commentRouter = express.Router();
commentRouter.use(verifyToken);

commentRouter.post('/', async (req, res, next) => {
    try{
        let comment = await commentService.createComment(req.body);
        return res.status(200).json(comment.toJSON());
    }
    catch(e){
        next(e);
    }
});

commentRouter.get('/', async (req, res, next) => {
    try{
        let comments = await commentService.findComments();
        return res.status(200).json(JSON.stringify(comments));
    }
    catch(e){
        next(e);
    }
});

commentRouter.get('/:commentId', async (req, res, next) => {
    try{
        let comment = await commentService.findComment(req.params.commentId);
        if(comment !== null){
            return res.status(200).json(comment.toJSON());
        }
        else{
            return res.sendStatus(404);
        }
    }
    catch(e){
        next(e);
    }
});

commentRouter.delete('/:commentId', async (req, res, next) => {
    try{
        await commentService.deleteComment(req.params.commentId);
        return res.sendStatus(200);
    }
    catch(e){
        next(e);
    }
});

commentRouter.put('/:commentId', async (req, res, next) => {
    try{
        let [_, comments] = await commentService.updateComment(req.params.commentId, req.body);
        return res.status(200).json(JSON.stringify(comments));
    }
    catch(e){
        next(e);
    }
});


export default commentRouter;

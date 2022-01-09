import breedTypeService from "../../services/breed-type-service.js";
import {verifyToken} from "../../middleware/auth.js";
import express from 'express';
let breedTypeRouter = express.Router();
breedTypeRouter.use(verifyToken);

breedTypeRouter.post('/', async (req, res, next) => {
    try{
        let breedType = await breedTypeService.createBreedType(req.body);
        return res.status(200).json(breedType.toJSON());
    }
    catch(e){
        next(e);
    }
});

breedTypeRouter.get('/', async (req, res, next) => {
    try{
        let breedTypes = await breedTypeService.findBreedTypes();
        return res.status(200).json(JSON.stringify(breedTypes));
    }
    catch(e){
        next(e);
    }
});

breedTypeRouter.get('/:breedTypeId', async (req, res, next) => {
    try{
        let breedType = await breedTypeService.findBreedType(req.params.breedTypeId);
        if(breedType !== null){
            return res.status(200).json(breedType.toJSON());
        }
        else{
            return res.sendStatus(404);
        }
    }
    catch(e){
        next(e);
    }
});

breedTypeRouter.delete('/:breedTypeId', async (req, res, next) => {
    try{
        await breedTypeService.deleteBreedType(req.params.breedTypeId);
        return res.sendStatus(200);
    }
    catch(e){
        next(e);
    }
});

breedTypeRouter.put('/:breedTypeId', async (req, res, next) => {
    try{
        let [_, breedTypes] = await breedTypeService.updateBreedType(req.params.breedTypeId, req.body);
        return res.status(200).json(JSON.stringify(breedTypes));
    }
    catch(e){
        next(e);
    }
});


export default breedTypeRouter;

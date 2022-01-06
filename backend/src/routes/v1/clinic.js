import clinicService from "../../services/clinic-service.js";
import {verifyToken} from "../../middleware/auth.js";
import express from 'express';
let clinicRouter = express.Router();
clinicRouter.use(verifyToken);

clinicRouter.post('/', async (req, res, next) => {
    try{
        let clinic = await clinicService.createClinic(req.body);
        return res.status(200).json(clinic.toJSON());
    }
    catch(e){
        next(e);
    }
});

clinicRouter.get('/', async (req, res, next) => {
    try{
        let clinics = await clinicService.findClinics();
        return res.status(200).json(JSON.stringify(clinics));
    }
    catch(e){
        next(e);
    }
});

clinicRouter.get('/:clinicId', async (req, res, next) => {
    try{
        let clinic = await clinicService.findClinic(req.params.clinicId);
        if(clinic !== null){
            return res.status(200).json(clinic.toJSON());
        }
        else{
            return res.sendStatus(404);
        }
    }
    catch(e){
        next(e);
    }
});

clinicRouter.delete('/:clinicId', async (req, res, next) => {
    try{
        await clinicService.deleteClinic(req.params.clinicId);
        return res.sendStatus(200);
    }
    catch(e){
        next(e);
    }
});

clinicRouter.put('/:clinicId', async (req, res, next) => {
    try{
        let [_, clinics] = await clinicService.updateClinic(req.params.clinicId, req.body);
        return res.status(200).json(JSON.stringify(clinics));
    }
    catch(e){
        next(e);
    }
});


export default clinicRouter;

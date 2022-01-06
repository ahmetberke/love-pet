import customerService from "../../services/customer-service.js";
import {verifyToken} from "../../middleware/auth.js";
import express from 'express';
let customerRouter = express.Router();
customerRouter.use(verifyToken);

customerRouter.post('/', async (req, res, next) => {
    try{
        let customer = await customerService.createCustomer(req.body);
        return res.status(200).json(customer.toJSON());
    }
    catch(e){
        next(e);
    }
});

customerRouter.get('/', async (req, res, next) => {
    try{
        let customers = await customerService.findCustomers();
        return res.status(200).json(JSON.stringify(customers));
    }
    catch(e){
        next(e);
    }
});

customerRouter.get('/:customerId', async (req, res, next) => {
    try{
        let customer = await customerService.findCustomer(req.params.customerId);
        if(customer !== null){
            return res.status(200).json(customer.toJSON());
        }
        else{
            return res.sendStatus(404);
        }
    }
    catch(e){
        next(e);
    }
});

customerRouter.delete('/:customerId', async (req, res, next) => {
    try{
        await customerService.deleteCustomer(req.params.customerId);
        return res.sendStatus(200);
    }
    catch(e){
        next(e);
    }
});

customerRouter.put('/:customerId', async (req, res, next) => {
    try{
        let [_, customers] = await customerService.updateCustomer(req.params.customerId, req.body);
        return res.status(200).json(JSON.stringify(customers));
    }
    catch(e){
        next(e);
    }
});


export default customerRouter;

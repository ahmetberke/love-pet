import authRouter from "./v1/auth.js";
import countryRouter from "./v1/country.js";
import cityRouter from "./v1/city.js";
import provinceRouter from "./v1/province.js";
import breedRouter from "./v1/breed.js";
import clinicRouter from "./v1/clinic.js";
import commentRouter from "./v1/comment.js";
import customerRouter from "./v1/customer.js";
import orderRouter from "./v1/order.js";
import petRouter from "./v1/pet.js";
import productCategoryRouter from "./v1/product-category.js";
import productRouter from "./v1/product.js";
import treatmentRouter from "./v1/treatment.js";
import treatmentTypeRouter from "./v1/treatment-type.js";

import express from 'express';
let v1Router = express.Router();

v1Router.use('/auth', authRouter);
v1Router.use('/countries', countryRouter);
v1Router.use('/cities', cityRouter);
v1Router.use('/provinces', provinceRouter);
v1Router.use('/breeds', breedRouter);
v1Router.use('/clinics', clinicRouter);
v1Router.use('/comments', commentRouter);
v1Router.use('/customers', customerRouter);
v1Router.use('/orders', orderRouter);
v1Router.use('/pets', petRouter);
v1Router.use('/productCategories', productCategoryRouter);
v1Router.use('/products', productRouter);
v1Router.use('/treatments', treatmentRouter);
v1Router.use('/treatmentTypes', treatmentTypeRouter);

export default v1Router;

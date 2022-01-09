import sequelize from "./db-con.js";
import createModelsAndAssociations from "../models/associations.js";
import initDbData from "./init-data.js";

async function createDb(){
    createModelsAndAssociations();
    await sequelize.sync({ force: true });
    await initDbData();
}

export default createDb;

import sequelize from './db-con.js';
import createModelsAndAssociations from '../models/associations.js';

async function createDb() {
  createModelsAndAssociations();
  await sequelize.sync({force: true});
}

export default createDb;

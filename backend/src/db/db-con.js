import {Sequelize} from 'sequelize';
import config from '../middleware/config.js';
import winstonLogger from '../middleware/winston-logger';

const connectionString = 'postgres://' + config.db_username + ':' +
    config.db_password + '@localhost:5432/love-path';
winstonLogger.info(connectionString);

const sequelize = new Sequelize(connectionString, {
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  define: {
    freezeTableName: true,
    timestamps: false,
  },
  logging: (config.node_env === 'test') ? false : true,
});

export default sequelize;

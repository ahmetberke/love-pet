import { Sequelize } from 'sequelize';
import config from "../middleware/config.js";

const connectionString = 'postgres://' + config.db_username + ':' + config.db_password + '@localhost:5432/love-path';
console.log(connectionString)
const sequelize = new Sequelize(connectionString, {
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    define: {
        freezeTableName: true,
        timestamps: false
    }
})

export default sequelize;

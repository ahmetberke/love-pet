import {DataTypes, Model} from 'sequelize';
import sequelize from '../db/db-con.js';

class Breed extends Model {
}

Breed.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
}, {
  sequelize,
  modelName: 'Breed',
});

export default Breed;

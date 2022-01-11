import {DataTypes, Model} from 'sequelize';
import sequelize from '../db/db-con.js';
import hash from '../middleware/sha256-hasher.js';

class User extends Model {
}

User.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    set(value) {
      this.setDataValue('password', hash(this.username + value));
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mail: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  rating: {
    type: DataTypes.FLOAT,
  },
  token: {
    type: DataTypes.VIRTUAL,
  },
}, {
  sequelize,
  modelName: 'User',
});

export default User;

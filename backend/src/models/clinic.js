import { Model, DataTypes } from 'sequelize';
import sequelize from "../db/db-con.js";
import hash from "../middleware/sha256-hasher.js";

class Clinic extends Model {}

Clinic.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        set(value) {
            // Storing passwords in plaintext in the database is terrible.
            // Hashing the value with an appropriate cryptographic hash function is better.
            this.setDataValue('password', hash(this.username + value));
        }
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false
    },
    mail: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: true
        }
    },
    rating: {
        type: DataTypes.FLOAT,
    },
    token: {
        type: DataTypes.VIRTUAL
    }
}, {
    sequelize,
    modelName: 'Clinic'
});

export default Clinic;

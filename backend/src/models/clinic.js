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
        },
        /*validate: {
            isValidPassword(value){
                let error = false;
                let message = '';
                if (value.length < 7) {
                    message += "Your password needs a minimum of seven characters.";
                    error = true;
                }
                if (value.length > 14) {
                    message += "Your password needs a maximum of fourteen characters.";
                    error = true;
                }
                if (value.search(/[a-z]/) == -1) {
                    message += "Your password needs at least one lower case letter.";
                    error = true;
                }
                if (value.search(/[A-Z]/) == -1) {
                    message += "Your password needs at least one upper case letter.";
                    error = true;
                }
                if (value.search (/[0-9]/) == -1) {
                    message += "Your password needs a number.";
                    error = true;
                }

                if (error) {
                    throw new Error(message);
                }
            }
        }*/
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

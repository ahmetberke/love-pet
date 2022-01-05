import Clinic from "../models/clinic.js";

const clinicRepo = {
    findClinicByUsername: async (username) => {
        return await Clinic.findAll({
            where: {
                username: username
            }
        });
    },

    findClinicByUsernamePassword: async (username, password) => {
        return await Clinic.findAll({
            where: {
                username: username,
                password: password
            }
        });
    },

    findClinic: async (clinicId) => {
        return await Clinic.findByPk({
            where: {
                id: clinicId
            }
        });
    },

    createClinic: async (clinic) => {
        return await Clinic.create(clinic);
    },

    deleteClinic: async (clinic) => {
        return await clinic.destroy();
    },

    updateClinic: async (clinic) => {
        return await clinic.save();
    }
};

export default clinicRepo;

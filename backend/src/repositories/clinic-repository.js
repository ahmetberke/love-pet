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

    findClinics: async () => {
        return await Clinic.findAll();
    },

    createClinic: async (clinic) => {
        return await Clinic.create(clinic);
    },

    deleteClinic: async (clinicId) => {
        return await Clinic.destroy({
            where: {
                id: clinicId
            }
        });
    },

    updateClinic: async (clinicId, clinic) => {
        return await Clinic.update(clinic, {
            where: {
                id: clinicId
            },
            returning: true
        });
    }
};

export default clinicRepo;

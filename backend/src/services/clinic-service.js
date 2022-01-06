import clinicRepo from "../repositories/clinic-repository.js";

const clinicService = {
    findClinicByUsername: async (username) => {
        return await clinicRepo.findClinicByUsername(username);
    },

    findClinicByUsernamePassword: async (username, password) => {
        return await clinicRepo.findClinicByUsernamePassword(username, password);
    },

    findClinics: async () => {
        return await clinicRepo.findClinics();
    },

    findClinic: async (clinicId) => {
        return await clinicRepo.findClinic(clinicId);
    },

    createClinic: async (clinic) => {
        return await clinicRepo.createClinic(clinic);
    },

    deleteClinic: async (clinicId) => {
        return await clinicRepo.deleteClinic(clinicId);
    },

    updateClinic: async (clinicId, clinic) => {
        return await clinicRepo.updateClinic(clinicId, clinic);
    }
};

export default clinicService;

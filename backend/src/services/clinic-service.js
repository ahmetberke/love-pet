import clinicRepo from "../repositories/clinic-repository.js";

const clinicService = {
    findClinicByUsername: async (username) => {
        return await clinicRepo.findClinicByUsername(username);
    },

    findClinic: async (clinicId) => {
        return await clinicRepo.findClinic(clinicId);
    },

    createClinic: async (clinic) => {
        return await clinicRepo.createClinic(clinic);
    },

    deleteClinic: async (clinic) => {
        return await clinicRepo.deleteClinic(clinic);
    },

    updateClinic: async (clinic) => {
        return await clinicRepo.updateClinic(clinic);
    }
};

export default clinicService;

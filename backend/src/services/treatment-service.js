import treatmentRepo from "../repositories/treatment-repository.js";

const treatmentService = {
    findTreatment: async (treatmentId) => {
        return await treatmentRepo.findTreatment(treatmentId);
    },

    createTreatment: async (treatment) => {
        return await treatmentRepo.createTreatment(treatment);
    },

    deleteTreatment: async (treatment) => {
        return await treatmentRepo.deleteTreatment(treatment);
    },

    updateTreatment: async (treatment) => {
        return await treatmentRepo.updateTreatment(treatment);
    }
};

export default treatmentService;

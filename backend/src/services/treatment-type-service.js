import treatmentTypeRepo from "../repositories/treatmentType-repository.js";

const treatmentTypeService = {
    findTreatmentType: async (treatmentTypeId) => {
        return await treatmentTypeRepo.findTreatmentType(treatmentTypeId);
    },

    createTreatmentType: async (treatmentType) => {
        return await treatmentTypeRepo.createTreatmentType(treatmentType);
    },

    deleteTreatmentType: async (treatmentType) => {
        return await treatmentTypeRepo.deleteTreatmentType(treatmentType);
    },

    updateTreatmentType: async (treatmentType) => {
        return await treatmentTypeRepo.updateTreatmentType(treatmentType);
    }
};

export default treatmentTypeService;

import TreatmentType from "../models/treatmentType.js";

const treatmentTypeRepo = {
    findTreatmentType: async (treatmentTypeId) => {
        return await TreatmentType.findByPk({
            where: {
                id: treatmentTypeId
            }
        });
    },

    createTreatmentType: async (treatmentType) => {
        return await TreatmentType.create(treatmentType);
    },

    deleteTreatmentType: async (treatmentType) => {
        return await treatmentType.destroy();
    },

    updateTreatmentType: async (treatmentType) => {
        return await treatmentType.save();
    }
};

export default treatmentTypeRepo;

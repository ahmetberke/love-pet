import Treatment from "../models/treatment.js";

const treatmentRepo = {
    findTreatment: async (treatmentId) => {
        return await Treatment.findByPk({
            where: {
                id: treatmentId
            }
        });
    },

    createTreatment: async (treatment) => {
        return await Treatment.create(treatment);
    },

    deleteTreatment: async (treatment) => {
        return await treatment.destroy();
    },

    updateTreatment: async (treatment) => {
        return await treatment.save();
    }
};

export default treatmentRepo;

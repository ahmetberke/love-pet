import Pet from "../models/pet.js";

const petRepo = {
    findPet: async (petId) => {
        return await Pet.findByPk({
            where: {
                id: petId
            }
        });
    },

    createPet: async (pet) => {
        return await Pet.create(pet);
    },

    deletePet: async (pet) => {
        return await pet.destroy();
    },

    updatePet: async (pet) => {
        return await pet.save();
    }
};

export default petRepo;

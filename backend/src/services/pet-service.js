import petRepo from "../repositories/pet-repository.js";

const petService = {
    findPet: async (petId) => {
        return await petRepo.findPet(petId);
    },

    createPet: async (pet) => {
        return await petRepo.createPet(pet);
    },

    deletePet: async (pet) => {
        return await petRepo.deletePet(pet);
    },

    updatePet: async (pet) => {
        return await petRepo.updatePet(pet);
    }
};

export default petService;

import breedRepo from "../repositories/breed-repository.js";

const breedService = {
    findBreed: async (breedId) => {
        return await breedRepo.findBreed(breedId);
    },

    createBreed: async (breed) => {
        return await breedRepo.createBreed(breed);
    },

    deleteBreed: async (breed) => {
        return await breedRepo.deleteBreed(breed);
    },

    updateBreed: async (breed) => {
        return await breedRepo.updateBreed(breed);
    }
};

export default breedService;

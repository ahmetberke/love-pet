import Breed from "../models/breed.js";

const breedRepo = {
    findBreed: async (breedId) => {
        return await Breed.findByPk({
            where: {
                id: breedId
            }
        });
    },

    createBreed: async (breed) => {
        return await Breed.create(breed);
    },

    deleteBreed: async (breed) => {
        return await breed.destroy();
    },

    updateBreed: async (breed) => {
        return await breed.save();
    }
};

export default breedRepo;

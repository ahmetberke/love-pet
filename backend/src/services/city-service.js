import cityRepo from "../repositories/city-repository.js";

const cityService = {
    findCity: async (cityId) => {
        return await cityRepo.findCity(cityId);
    },

    createCity: async (city) => {
        return await cityRepo.createCity(city);
    },

    deleteCity: async (city) => {
        return await cityRepo.deleteCity(city);
    },

    updateCity: async (city) => {
        return await cityRepo.updateCity(city);
    }
};

export default cityService;

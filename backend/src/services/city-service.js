import cityRepo from "../repositories/city-repository.js";

const cityService = {
    findCity: async (cityId) => {
        return await cityRepo.findCity(cityId);
    },

    findCities: async () => {
        return await cityRepo.findCities();
    },

    createCity: async (city) => {
        return await cityRepo.createCity(city);
    },

    deleteCity: async (cityId) => {
        return await cityRepo.deleteCity(cityId);
    },

    updateCity: async (cityId, city) => {
        return await cityRepo.updateCity(cityId, city);
    }
};

export default cityService;

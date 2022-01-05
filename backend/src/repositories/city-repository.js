import City from "../models/city.js";

const cityRepo = {
    findCity: async (cityId) => {
        return await City.findByPk({
            where: {
                id: cityId
            }
        });
    },

    createCity: async (city) => {
        return await City.create(city);
    },

    deleteCity: async (city) => {
        return await city.destroy();
    },

    updateCity: async (city) => {
        return await city.save();
    }
};

export default cityRepo;

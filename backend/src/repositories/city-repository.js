import City from "../models/city.js";

const cityRepo = {
    findCity: async (cityId) => {
        return await City.findByPk(cityId);
    },

    findCities: async () => {
        return await City.findAll();
    },

    createCity: async (city) => {
        return await City.create(city);
    },

    deleteCity: async (cityId) => {
        return await City.destroy({
            where: {
                id: cityId
            }
        });
    },

    updateCity: async (cityId, city) => {
        return await City.update(city, {
            where: {
                id: cityId
            },
            returning: true
        });
    }
};

export default cityRepo;

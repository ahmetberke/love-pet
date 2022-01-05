import Country from "../models/country.js";

const countryRepo = {
    findCountry: async (countryId) => {
        return await Country.findByPk({
            where: {
                id: countryId
            }
        });
    },

    createCountry: async (country) => {
        return await Country.create(country);
    },

    deleteCountry: async (country) => {
        return await country.destroy();
    },

    updateCountry: async (country) => {
        return await country.save();
    }
};

export default countryRepo;

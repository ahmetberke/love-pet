import Country from "../models/country.js";

const countryRepo = {
    findCountry: async (countryId) => {
        return await Country.findByPk(countryId);
    },

    findCountries: async () => {
        return await Country.findAll();
    },

    createCountry: async (country) => {
        return await Country.create(country);
    },

    deleteCountry: async (countryId) => {
        return await Country.destroy({
            where: {
                id: countryId
            }
        });
    },

    updateCountry: async (countryId, country) => {
        return await Country.update(country, {
            where: {
                id: countryId
            },
            returning: true
        });
    }
};

export default countryRepo;

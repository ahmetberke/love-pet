import countryRepo from "../repositories/country-repository.js";

const countryService = {
    findCountry: async (countryId) => {
        return await countryRepo.findCountry(countryId);
    },

    createCountry: async (country) => {
        return await countryRepo.createCountry(country);
    },

    deleteCountry: async (country) => {
        return await countryRepo.deleteCountry(country);
    },

    updateCountry: async (country) => {
        return await countryRepo.updateCountry(country);
    }
};

export default countryService;

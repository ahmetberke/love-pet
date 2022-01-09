import axios from "axios";

const baseURL = "http://localhost:3001/api";

const regionService = {
    getCountries: async () => {
        let response =  await axios.get(`${baseURL}/countries`);
        return response.data;
    },

    getCitiesForCountry: async (countryId) => {
        let response =  await axios.get(`${baseURL}/cities?countryId=${countryId}`);
        return response.data;
    },

    getProvincesForCity: async (cityId) => {
        let response =  await axios.get(`${baseURL}/provinces?cityId=${cityId}`);
        return response.data;
    },
};

export default regionService;

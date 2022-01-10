import axios from "axios";

const baseURL = "http://localhost:3001/api";

const regionService = {
    getRegions: async () => {
        let response =  await axios.get(`${baseURL}/countries?$expand`);
        return response.data;
    }
};

export default regionService;

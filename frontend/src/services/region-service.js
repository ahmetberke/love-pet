import axios from 'axios';

const baseURL = 'https://localhost:443/api';

const regionService = {
  getRegions: async () => {
    const response = await axios.get(`${baseURL}/countries?$expand`);
    return response.data;
  },
};

export default regionService;

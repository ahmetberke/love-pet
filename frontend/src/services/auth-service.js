import axios from 'axios';

const baseURL = 'http://localhost:3001/api/auth';

const authService = {
  login: async (loginCredentials) => {
    const response = await axios.post(`${baseURL}/login`, loginCredentials);
    return response.data;
  },

  signup: async (signupCredentials) => {
    const response = await axios.post(`${baseURL}/signup`, signupCredentials);
    return response.data;
  },

  validateUsername: async (username) => {
    const response = await axios.get(
        `${baseURL}/validateUsername?username=${username}`);
    return response.data;
  },
};

export default authService;

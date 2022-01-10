import axios from "axios";

const baseURL = "http://localhost:3001/api/auth";

const authService = {
    login: async (loginCredentials) => {
        let response = await axios.post(`${baseURL}/login`, loginCredentials);
        return response.data;
    },

    signup: async (signupCredentials) => {
        let response = await axios.post(`${baseURL}/signup`, signupCredentials);
        return response.data;
    },

    validateUsername: async (username) => {
        let response =  await axios.get(`${baseURL}/validateUsername?username=${username}`);
        return response.data;
    }
};

export default authService;

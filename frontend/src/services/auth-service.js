import axios from "axios";

const baseURL = "http://localhost:3001/api/auth";

const authService = {
    login: async (loginCredentials) => {
        let response = axios.post(`${baseURL}/login`, loginCredentials);
        if(response.data.msg === null){
            return response.data.token;
        }
        else{
            throw new Error(response.data.msg);
        }
    },

    signup: async (signupCredentials) => {
        let response = await axios.post(`${baseURL}/signup`, signupCredentials);
        if(response.data.msg === null){
            return response.data.token;
        }
        else{
            throw new Error(response.data.msg);
        }
    },

    validateUsername: async (username) => {
        let response =  await axios.get(`${baseURL}/validateUsername?username=${username}`);
        return response.data;
    }
};

export default authService;

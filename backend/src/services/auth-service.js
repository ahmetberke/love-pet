import customerService from "./customer-service.js";
import clinicService from "./clinic-service.js";
import {signToken, validatePassword, validateUsername} from "../middleware/auth.js";

const authService = {
    register: async (userPayload, userType) => {
        try{
            let [isValidPassword, passwordValidationMsg] = validatePassword(userPayload.password);
            if(!isValidPassword){
                return (400, null, passwordValidationMsg);
            }
            let [isValidUsername, usernameValidationMsg] = validateUsername(userPayload.username);
            if(!isValidUsername){
                return (400, null, usernameValidationMsg);
            }

            let user = null;
            if(userType === 'customer'){
                user = await customerService.createCustomer(userPayload);
            }
            else if(userType === 'clinic'){
                user = await clinicService.createClinic(userPayload);
            }
            else{
                return (400, null, "Invalid query paramater!");
            }
            const token = signToken({userid: user.id});
            return (200, token, null);
        }
        catch{
            return (500, null, "Error in registering user!");
        }
    },

    login: async (userPayload, userType) => {
        try{
            let user = null;
            if(userType === 'customer'){
                user = await customerService.findCustomerByUsername(userPayload.username);
            }
            else if(userType === 'clinic'){
                user = await clinicService.findClinicByUsername(userPayload.username);
            }
            else{
                return (400, null, "Invalid query paramater!");
            }

            if(user === null){
                return (400, null, "Invalid username!");
            }
            const token = signToken({userid: user.id});
            return (200, token, null);
        }
        catch{
            return (500, null, "Error in logging user!");
        }
    },

    hasUsername: async (username, userType) => {
        try{
            let user = null;
            if(userType === 'customer'){
                user = await customerService.findCustomerByUsername(username);
            }
            else if(userType === 'clinic'){
                user = await clinicService.findClinicByUsername(username);
            }

            if(user === null){
                return username.length >= 7 && username.length <= 14;
            }
            else{
                return false;
            }
        }
        catch{
            console.log("Error in findUsername in auth service");
            return false;
        }
    }
};

export default authService;

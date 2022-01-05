import customerService from "./customer-service.js";
import clinicService from "./clinic-service.js";
import hash from "../middleware/sha256-hasher.js";
import {signToken, validatePassword, validateUsername} from "../middleware/auth.js";

const authService = {
    register: async (userPayload, userType) => {
        let [isValidPassword, passwordValidationMsg] = validatePassword(userPayload.password);
        if(!isValidPassword){
            return [400, null, passwordValidationMsg];
        }
        let [isValidUsername, usernameValidationMsg] = validateUsername(userPayload.username);
        if(!isValidUsername){
            return [400, null, usernameValidationMsg];
        }

        let user = null;
        if(userType === 'customer'){
            user = await customerService.createCustomer(userPayload);
        }
        else if(userType === 'clinic'){
            user = await clinicService.createClinic(userPayload);
        }
        else{
            return [400, null, "Invalid query paramater!"];
        }

        const token = signToken({userid: user.id});
        return [200, token, null];
    },

    login: async (userPayload, userType) => {
        let user;
        if(userType === 'customer'){
            user = await customerService.findCustomerByUsernamePassword(userPayload.username, hash(userPayload.username + userPayload.password));
        }
        else if(userType === 'clinic'){
            user = await clinicService.findClinicByUsernamePassword(userPayload.username, hash(userPayload.username + userPayload.password));
        }
        else{
            return [400, null, "Invalid query paramater!"];
        }

        if(user.length === 0){
            return [400, null, "Wrong username or password!"];
        }
        const token = signToken({userid: user.id});
        return [200, token, null];
    },

    hasValidUsername: async (username, userType) => {
        let user;
        if(userType === 'customer'){
            user = await customerService.findCustomerByUsername(username);
        }
        else if(userType === 'clinic'){
            user = await clinicService.findClinicByUsername(username);
        }

        if(user.length == 0){
            return validateUsername(username);
        }
        else{
            return [false, "Duplicate username!"];
        }
    }
};

export default authService;

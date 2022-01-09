import userService from "./user-service.js";
import hash from "../middleware/sha256-hasher.js";
import {signToken, validatePassword, validateUsername} from "../middleware/auth.js";

const authService = {
    signup: async (userPayload) => {
        let [isValidPassword, passwordValidationMsg] = validatePassword(userPayload.password);
        if(!isValidPassword){
            return [400, null, passwordValidationMsg];
        }
        let [isValidUsername, usernameValidationMsg] = validateUsername(userPayload.username);
        if(!isValidUsername){
            return [400, null, usernameValidationMsg];
        }

        let user = await userService.createUser(userPayload);
        const token = signToken({userid: user.id});
        return [200, token, null];
    },

    login: async (userPayload) => {
        let user = await userService.findUserByUsernamePassword(userPayload.username, hash(userPayload.username + userPayload.password));
        if(user.length === 0){
            return [400, null, "Wrong username or password!"];
        }

        const token = signToken({userid: user.id});
        return [200, token, null];
    },

    hasValidUsername: async (username) => {
        let user = await userService.findUserByUsername(username);

        if(user.length == 0){
            return validateUsername(username);
        }
        else{
            return [false, "Duplicate username!"];
        }
    }
};

export default authService;

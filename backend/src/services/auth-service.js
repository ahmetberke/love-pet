import userService from './user-service.js';
import hash from '../middleware/sha256-hasher.js';
import {
  signToken,
  validatePassword,
  validateUsername,
} from '../middleware/auth.js';

const authService = {
  signup: async (userPayload) => {
    const [isValidPassword, passwordValidationMsg] = validatePassword(
        userPayload.password);
    if (!isValidPassword) {
      return [400, null, passwordValidationMsg];
    }
    const [isValidUsername, usernameValidationMsg] = validateUsername(
        userPayload.username);
    if (!isValidUsername) {
      return [400, null, usernameValidationMsg];
    }

    const user = await userService.createUser(userPayload);
    const token = signToken({userId: user.id, userTypeId: user.userTypeId});
    return [200, token, null];
  },

  login: async (userPayload) => {
    const user = await userService.findUserByUsernamePassword(
        userPayload.username,
        hash(userPayload.username + userPayload.password));
    if (user.length === 0) {
      return [400, null, 'Wrong username or password!'];
    }

    const token = signToken({userId: user.id, userTypeId: user.userTypeId});
    return [200, token, null];
  },

  hasValidUsername: async (username) => {
    const user = await userService.findUserByUsername(username);

    if (user.length == 0) {
      return validateUsername(username);
    } else {
      return [false, 'Duplicate username!'];
    }
  },
};

export default authService;

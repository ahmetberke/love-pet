import User from "../models/user.js";

const userRepo = {
    findUserByUsername: async (username) => {
        return await User.findAll({
            where: {
                username: username
            }
        });
    },

    findUserByUsernamePassword: async (username, password) => {
        return await User.findAll({
            where: {
                username: username,
                password: password
            }
        });
    },

    findUser: async (userId) => {
        return await User.findByPk({
            where: {
                id: userId
            }
        });
    },

    findUsers: async () => {
        return await User.findAll();
    },

    createUser: async (user) => {
        return await User.create(user);
    },

    deleteUser: async (userId) => {
        return await User.destroy({
            where: {
                id: userId
            }
        });
    },

    updateUser: async (userId, user) => {
        return await User.update(user, {
            where: {
                id: userId
            },
            returning: true
        });
    }
};

export default userRepo;

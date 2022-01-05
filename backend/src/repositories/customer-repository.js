import Customer from "../models/customer.js";

const customerRepo = {
    findCustomerByUsername: async (username) => {
        return await Customer.findOne({
            where: {
                username: username
            }
        });
    },

    findCustomerByUsernamePassword: async (username, password) => {
        return await Customer.findOne({
            where: {
                username: username,
                password: password
            }
        });
    },

    findCustomer: async (customerId) => {
        return await Customer.findByPk({
            where: {
                id: customerId
            }
        });
    },

    createCustomer: async (customer) => {
        return await Customer.create(customer);
    },

    deleteCustomer: async (customer) => {
        return await customer.destroy();
    },

    updateCustomer: async (customer) => {
        return await customer.save();
    }
};

export default customerRepo;

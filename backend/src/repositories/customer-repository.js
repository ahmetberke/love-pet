import Customer from "../models/customer.js";

const customerRepo = {
    findCustomerByUsername: async (username) => {
        return await Customer.findAll({
            where: {
                username: username
            }
        });
    },

    findCustomerByUsernamePassword: async (username, password) => {
        return await Customer.findAll({
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

    findCustomers: async () => {
        return await Customer.findAll();
    },

    createCustomer: async (customer) => {
        return await Customer.create(customer);
    },

    deleteCustomer: async (customerId) => {
        return await Customer.destroy({
            where: {
                id: customerId
            }
        });
    },

    updateCustomer: async (customerId, customer) => {
        return await Customer.update(customer, {
            where: {
                id: customerId
            },
            returning: true
        });
    }
};

export default customerRepo;

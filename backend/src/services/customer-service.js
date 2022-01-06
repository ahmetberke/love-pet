import customerRepo from "../repositories/customer-repository.js";

const customerService = {
    findCustomerByUsername: async (username) => {
        return await customerRepo.findCustomerByUsername(username);
    },

    findCustomerByUsernamePassword: async (username, password) => {
        return await customerRepo.findCustomerByUsernamePassword(username, password);
    },

    findCustomers: async () => {
        return await customerRepo.findCustomers();
    },

    findCustomer: async (customerId) => {
        return await customerRepo.findCustomer(customerId);
    },

    createCustomer: async (customer) => {
        return await customerRepo.createCustomer(customer);
    },

    deleteCustomer: async (customerId) => {
        return await customerRepo.deleteCustomer(customerId);
    },

    updateCustomer: async (customerId, customer) => {
        return await customerRepo.updateCustomer(customerId, customer);
    }
};

export default customerService;

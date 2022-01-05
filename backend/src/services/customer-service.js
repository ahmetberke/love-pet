import customerRepo from "../repositories/customer-repository.js";

const customerService = {
    findCustomerByUsername: async (username) => {
        return await customerRepo.findCustomerByUsername(username);
    },

    findCustomer: async (customerId) => {
        return await customerRepo.findCustomer(customerId);
    },

    createCustomer: async (customer) => {
        return await customerRepo.createCustomer(customer);
    },

    deleteCustomer: async (customer) => {
        return await customerRepo.deleteCustomer(customer);
    },

    updateCustomer: async (customer) => {
        return await customerRepo.updateCustomer(customer);
    }
};

export default customerService;

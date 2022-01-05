import orderRepo from "../repositories/order-repository.js";

const orderService = {
    findOrder: async (orderId) => {
        return await orderRepo.findOrder(orderId);
    },

    createOrder: async (order) => {
        return await orderRepo.createOrder(order);
    },

    deleteOrder: async (order) => {
        return await orderRepo.deleteOrder(order);
    },

    updateOrder: async (order) => {
        return await orderRepo.updateOrder(order);
    }
};

export default orderService;

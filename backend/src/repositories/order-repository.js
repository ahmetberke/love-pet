import Order from "../models/order.js";

const orderRepo = {
    findOrder: async (orderId) => {
        return await Order.findByPk({
            where: {
                id: orderId
            }
        });
    },

    createOrder: async (order) => {
        return await Order.create(order);
    },

    deleteOrder: async (order) => {
        return await order.destroy();
    },

    updateOrder: async (order) => {
        return await order.save();
    }
};

export default orderRepo;

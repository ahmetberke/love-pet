import Product from "../models/product.js";

const productRepo = {
    findProduct: async (productId) => {
        return await Product.findByPk({
            where: {
                id: productId
            }
        });
    },

    createProduct: async (product) => {
        return await Product.create(product);
    },

    deleteProduct: async (product) => {
        return await product.destroy();
    },

    updateProduct: async (product) => {
        return await product.save();
    }
};

export default productRepo;

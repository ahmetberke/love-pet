import productRepo from "../repositories/product-repository.js";

const productService = {
    findProduct: async (productId) => {
        return await productRepo.findProduct(productId);
    },

    createProduct: async (product) => {
        return await productRepo.createProduct(product);
    },

    deleteProduct: async (product) => {
        return await productRepo.deleteProduct(product);
    },

    updateProduct: async (product) => {
        return await productRepo.updateProduct(product);
    }
};

export default productService;

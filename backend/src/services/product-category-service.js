import productCategoryRepo from "../repositories/productCategory-repository.js";

const productCategoryService = {
    findProductCategory: async (productCategoryId) => {
        return await productCategoryRepo.findProductCategory(productCategoryId);
    },

    createProductCategory: async (productCategory) => {
        return await productCategoryRepo.createProductCategory(productCategory);
    },

    deleteProductCategory: async (productCategory) => {
        return await productCategoryRepo.deleteProductCategory(productCategory);
    },

    updateProductCategory: async (productCategory) => {
        return await productCategoryRepo.updateProductCategory(productCategory);
    }
};

export default productCategoryService;

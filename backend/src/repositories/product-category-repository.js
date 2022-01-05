import ProductCategory from "../models/productCategory.js";

const productCategoryRepo = {
    findProductCategory: async (productCategoryId) => {
        return await ProductCategory.findByPk({
            where: {
                id: productCategoryId
            }
        });
    },

    createProductCategory: async (productCategory) => {
        return await ProductCategory.create(productCategory);
    },

    deleteProductCategory: async (productCategory) => {
        return await productCategory.destroy();
    },

    updateProductCategory: async (productCategory) => {
        return await productCategory.save();
    }
};

export default productCategoryRepo;

import Province from "../models/province.js";

const provinceRepo = {
    findProvince: async (provinceId) => {
        return await Province.findByPk({
            where: {
                id: provinceId
            }
        });
    },

    createProvince: async (province) => {
        return await Province.create(province);
    },

    deleteProvince: async (province) => {
        return await province.destroy();
    },

    updateProvince: async (province) => {
        return await province.save();
    }
};

export default provinceRepo;

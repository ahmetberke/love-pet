import provinceRepo from "../repositories/province-repository.js";

const provinceService = {
    findProvince: async (provinceId) => {
        return await provinceRepo.findProvince(provinceId);
    },

    createProvince: async (province) => {
        return await provinceRepo.createProvince(province);
    },

    deleteProvince: async (province) => {
        return await provinceRepo.deleteProvince(province);
    },

    updateProvince: async (province) => {
        return await provinceRepo.updateProvince(province);
    }
};

export default provinceService;

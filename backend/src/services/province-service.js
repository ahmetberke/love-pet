import provinceRepo from "../repositories/province-repository.js";

const provinceService = {
    findProvince: async (provinceId) => {
        return await provinceRepo.findProvince(provinceId);
    },

    findProvinces: async () => {
        return await provinceRepo.findProvinces();
    },

    createProvince: async (province) => {
        return await provinceRepo.createProvince(province);
    },

    deleteProvince: async (provinceId) => {
        return await provinceRepo.deleteProvince(provinceId);
    },

    updateProvince: async (provinceId, province) => {
        return await provinceRepo.updateProvince(provinceId, province);
    }
};

export default provinceService;

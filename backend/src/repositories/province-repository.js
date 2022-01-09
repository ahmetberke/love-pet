import Province from "../models/province.js";
import City from "../models/city.js";

const provinceRepo = {
    findProvince: async (provinceId) => {
        return await Province.findByPk(provinceId);
    },

    findProvinces: async (query) => {
        if(query){
            return await Province.findAll({
                where: query
            });
        }
        else{
            return await Province.findAll();
        }
    },

    findProvincesByCity: async (cityId) => {
        return await Province.findAll({
            where: {
                cityId: cityId
            }
        });
    },

    createProvince: async (province) => {
        return await Province.create(province);
    },

    deleteProvince: async (provinceId) => {
        return await Province.destroy({
            where: {
                id: provinceId
            }
        });
    },

    updateProvince: async (provinceId, province) => {
        return await Province.update(province, {
            where: {
                id: provinceId
            },
            returning: true
        });
    }
};

export default provinceRepo;

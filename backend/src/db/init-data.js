import Country from "../models/country.js";
import City from "../models/city.js";
import Province from "../models/province.js";
import UserType from "../models/userType.js";

async function initDbData(){
    await Country.bulkCreate([{name: 'Turkey'}, {name: 'Germany'}, {name: 'France'}]);
    await City.bulkCreate([{name: 'Istanbul', countryId: 1}, {name: 'Ankara', countryId: 1}, {name: 'Munich', countryId: 2}, {name: 'Berlin', countryId: 2}, {name: 'Paris', countryId: 3}, {name: 'Marseille', countryId: 3}]);
    await Province.bulkCreate([{name: 'Kagithane', cityId: 1}, {name: 'Besiktas', cityId: 1}, {name: 'Ulus', cityId: 2}, {name: 'Kizilay', cityId: 2}, {name: 'mun1', cityId: 3}, {name: 'mun2', cityId: 3}, {name: 'Ber1', cityId: 4}, {name: 'Ber2', cityId: 4}, {name: 'Par1', cityId: 5}, {name: 'Par2', cityId: 5}, {name: 'Marseille1', cityId: 6}, {name: 'Marseille2', cityId: 6}]);
    await UserType.bulkCreate([{name: 'clinic'}, {name: 'customer'}]);
}

export default initDbData;

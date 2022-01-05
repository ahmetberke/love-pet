import Clinic from "./clinic.js";
import Customer from "./customer.js";
import Pet from "./pet.js";
import City from "./city.js";
import Country from "./country.js";
import Province from "./province.js";
import Comment from "./comment.js";
import TreatmentType from "./treatment-type.js";
import Treatment from "./treatment.js";
import Order from "./order.js";
import Product from "./product.js";
import OrderProduct from "./order-product.js";
import Breed from "./breed.js";
import ProductCategory from "./product-category.js";

function createModelsAndAssociations(){
    Country.hasMany(City);
    City.belongsTo(Country);

    Comment.hasMany(Comment);
    Comment.belongsTo(Comment);

    Customer.hasMany(Comment);
    Comment.belongsTo(Customer);

    Clinic.hasMany(Order);
    Order.belongsTo(Clinic);

    Customer.hasMany(Order);
    Order.belongsTo(Customer);

    Order.belongsToMany(Product, { through: 'OrderProduct' });
    Product.belongsToMany(Order, { through: 'OrderProduct' });

    Customer.hasMany(Pet);
    Pet.belongsTo(Customer);

    Breed.hasMany(Pet);
    Pet.belongsTo(Breed);

    ProductCategory.hasMany(Product);
    Product.belongsTo(ProductCategory);

    City.hasMany(Province);
    Province.belongsTo(City);

    TreatmentType.hasMany(Treatment);
    Treatment.belongsTo(TreatmentType);

    Clinic.hasMany(Treatment);
    Treatment.belongsTo(Clinic);

    Pet.hasMany(Treatment);
    Treatment.belongsTo(Pet);

    Treatment.hasMany(Comment);
    Comment.belongsTo(Treatment);

    Country.hasMany(Clinic);
    Clinic.belongsTo(Country);

    Country.hasMany(Customer);
    Customer.belongsTo(Country);
}

export default createModelsAndAssociations;

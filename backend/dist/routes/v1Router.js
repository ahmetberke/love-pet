"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _auth = _interopRequireDefault(require("./v1/auth.js"));

var _country = _interopRequireDefault(require("./v1/country.js"));

var _city = _interopRequireDefault(require("./v1/city.js"));

var _province = _interopRequireDefault(require("./v1/province.js"));

var _breed = _interopRequireDefault(require("./v1/breed.js"));

var _user = _interopRequireDefault(require("./v1/user.js"));

var _comment = _interopRequireDefault(require("./v1/comment.js"));

var _order = _interopRequireDefault(require("./v1/order.js"));

var _pet = _interopRequireDefault(require("./v1/pet.js"));

var _productCategory = _interopRequireDefault(require("./v1/product-category.js"));

var _product = _interopRequireDefault(require("./v1/product.js"));

var _treatment = _interopRequireDefault(require("./v1/treatment.js"));

var _treatmentType = _interopRequireDefault(require("./v1/treatment-type.js"));

var _userType = _interopRequireDefault(require("./v1/user-type.js"));

var _breedType = _interopRequireDefault(require("./v1/breed-type.js"));

var _express = _interopRequireDefault(require("express"));

var v1Router = _express["default"].Router();

v1Router.use('/auth', _auth["default"]);
v1Router.use('/countries', _country["default"]);
v1Router.use('/cities', _city["default"]);
v1Router.use('/provinces', _province["default"]);
v1Router.use('/breeds', _breed["default"]);
v1Router.use('/users', _user["default"]);
v1Router.use('/comments', _comment["default"]);
v1Router.use('/orders', _order["default"]);
v1Router.use('/pets', _pet["default"]);
v1Router.use('/productCategories', _productCategory["default"]);
v1Router.use('/products', _product["default"]);
v1Router.use('/treatments', _treatment["default"]);
v1Router.use('/treatmentTypes', _treatmentType["default"]);
v1Router.use('/userTypes', _userType["default"]);
v1Router.use('/breedTypes', _breedType["default"]);
var _default = v1Router;
exports["default"] = _default;
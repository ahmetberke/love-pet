"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _user = _interopRequireDefault(require("./user.js"));

var _pet = _interopRequireDefault(require("./pet.js"));

var _city = _interopRequireDefault(require("./city.js"));

var _country = _interopRequireDefault(require("./country.js"));

var _province = _interopRequireDefault(require("./province.js"));

var _comment = _interopRequireDefault(require("./comment.js"));

var _treatmentType = _interopRequireDefault(require("./treatment-type.js"));

var _treatment = _interopRequireDefault(require("./treatment.js"));

var _order = _interopRequireDefault(require("./order.js"));

var _product = _interopRequireDefault(require("./product.js"));

var _breed = _interopRequireDefault(require("./breed.js"));

var _productCategory = _interopRequireDefault(require("./product-category.js"));

var _userType = _interopRequireDefault(require("./userType.js"));

var _breedType = _interopRequireDefault(require("./breed-type.js"));

require("./order-product.js");

require("./forget-password.js");

function createModelsAndAssociations() {
  _country["default"].hasMany(_city["default"], {
    foreignKey: 'countryId'
  });

  _city["default"].belongsTo(_country["default"], {
    foreignKey: 'countryId'
  });

  _comment["default"].hasMany(_comment["default"], {
    foreignKey: 'parentCommentId'
  });

  _comment["default"].belongsTo(_comment["default"], {
    foreignKey: 'parentCommentId'
  });

  _user["default"].hasMany(_comment["default"], {
    foreignKey: 'userId'
  });

  _comment["default"].belongsTo(_user["default"], {
    foreignKey: 'userId'
  });

  _user["default"].hasMany(_order["default"], {
    foreignKey: 'userId'
  });

  _order["default"].belongsTo(_user["default"], {
    foreignKey: 'userId'
  });

  _user["default"].hasMany(_order["default"], {
    foreignKey: 'userId'
  });

  _order["default"].belongsTo(_user["default"], {
    foreignKey: 'userId'
  });

  _order["default"].belongsToMany(_product["default"], {
    through: 'OrderProduct'
  });

  _product["default"].belongsToMany(_order["default"], {
    through: 'OrderProduct'
  });

  _user["default"].hasMany(_pet["default"], {
    foreignKey: 'userId'
  });

  _pet["default"].belongsTo(_user["default"], {
    foreignKey: 'userId'
  });

  _breed["default"].hasMany(_pet["default"], {
    foreignKey: 'breedId'
  });

  _pet["default"].belongsTo(_breed["default"], {
    foreignKey: 'breedId'
  });

  _productCategory["default"].hasMany(_product["default"], {
    foreignKey: 'productCategoryId'
  });

  _product["default"].belongsTo(_productCategory["default"], {
    foreignKey: 'productCategoryId'
  });

  _city["default"].hasMany(_province["default"], {
    foreignKey: 'cityId'
  });

  _province["default"].belongsTo(_city["default"], {
    foreignKey: 'cityId'
  });

  _treatmentType["default"].hasMany(_treatment["default"], {
    foreignKey: 'treatmentTypeId'
  });

  _treatment["default"].belongsTo(_treatmentType["default"], {
    foreignKey: 'treatmentTypeId'
  });

  _user["default"].hasMany(_treatment["default"], {
    foreignKey: 'userId'
  });

  _treatment["default"].belongsTo(_user["default"], {
    foreignKey: 'userId'
  });

  _pet["default"].hasMany(_treatment["default"], {
    foreignKey: 'petId'
  });

  _treatment["default"].belongsTo(_pet["default"], {
    foreignKey: 'petId'
  });

  _treatment["default"].hasMany(_comment["default"], {
    foreignKey: 'treatmentId'
  });

  _comment["default"].belongsTo(_treatment["default"], {
    foreignKey: 'treatmentId'
  });

  _province["default"].hasMany(_user["default"], {
    foreignKey: 'provinceId'
  });

  _user["default"].belongsTo(_province["default"], {
    foreignKey: 'provinceId'
  });

  _userType["default"].hasMany(_user["default"], {
    foreignKey: 'userTypeId'
  });

  _user["default"].belongsTo(_userType["default"], {
    foreignKey: 'userTypeId'
  });

  _breedType["default"].hasMany(_breed["default"], {
    foreignKey: 'breedId'
  });

  _breed["default"].belongsTo(_breedType["default"], {
    foreignKey: 'breedId'
  });
}

var _default = createModelsAndAssociations;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _sequelize = require("sequelize");

var _dbCon = _interopRequireDefault(require("../db/db-con.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var ForgetPassword = /*#__PURE__*/function (_Model) {
  (0, _inherits2["default"])(ForgetPassword, _Model);

  var _super = _createSuper(ForgetPassword);

  function ForgetPassword() {
    (0, _classCallCheck2["default"])(this, ForgetPassword);
    return _super.apply(this, arguments);
  }

  return (0, _createClass2["default"])(ForgetPassword);
}(_sequelize.Model);

ForgetPassword.init({
  id: {
    type: _sequelize.DataTypes.STRING,
    primaryKey: true
  }
}, {
  sequelize: _dbCon["default"],
  modelName: 'ForgetPassword',
  timestamps: true,
  updatedAt: false
});
var _default = ForgetPassword;
exports["default"] = _default;
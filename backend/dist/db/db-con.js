"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _config = _interopRequireDefault(require("../middleware/config.js"));

var connectionString = 'postgres://' + _config["default"].db_username + ':' + _config["default"].db_password + '@localhost:5432/love-path';
console.log(connectionString);
var sequelize = new _sequelize.Sequelize(connectionString, {
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
  define: {
    freezeTableName: true,
    timestamps: false
  }
});
var _default = sequelize;
exports["default"] = _default;
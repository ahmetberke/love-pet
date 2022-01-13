"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _path = _interopRequireDefault(require("path"));

var _dotenv = _interopRequireDefault(require("dotenv"));

_dotenv["default"].config({
  path: _path["default"].join(_path["default"].resolve(), '.env')
});

var config = {
  db_username: process.env.DB_USERNAME,
  db_password: process.env.DB_PASSWORD,
  token_key: process.env.TOKEN_KEY,
  mail_username: process.env.MAIL_USERNAME,
  mail_password: process.env.MAIL_PASSWORD
};
var _default = config;
exports["default"] = _default;
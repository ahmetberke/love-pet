"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _crypto = require("crypto");

function generateUUID(message) {
  return (0, _crypto.randomBytes)(16).toString('hex');
}

var _default = generateUUID;
exports["default"] = _default;
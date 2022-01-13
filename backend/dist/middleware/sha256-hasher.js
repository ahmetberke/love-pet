"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _crypto = require("crypto");

function hash(message) {
  return (0, _crypto.createHash)('sha256').update(message).digest('hex');
}

var _default = hash;
exports["default"] = _default;
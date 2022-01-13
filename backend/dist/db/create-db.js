"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _dbCon = _interopRequireDefault(require("./db-con.js"));

var _associations = _interopRequireDefault(require("../models/associations.js"));

var _initData = _interopRequireDefault(require("./init-data.js"));

function createDb() {
  return _createDb.apply(this, arguments);
}

function _createDb() {
  _createDb = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            (0, _associations["default"])();
            _context.next = 3;
            return _dbCon["default"].sync({
              force: true
            });

          case 3:
            _context.next = 5;
            return (0, _initData["default"])();

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _createDb.apply(this, arguments);
}

var _default = createDb;
exports["default"] = _default;
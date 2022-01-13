"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _province = _interopRequireDefault(require("../models/province.js"));

var provinceRepo = {
  findProvince: function () {
    var _findProvince = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(provinceId) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _province["default"].findByPk(provinceId);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function findProvince(_x) {
      return _findProvince.apply(this, arguments);
    }

    return findProvince;
  }(),
  findProvinces: function () {
    var _findProvinces = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(query) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!query) {
                _context2.next = 6;
                break;
              }

              _context2.next = 3;
              return _province["default"].findAll({
                where: query
              });

            case 3:
              return _context2.abrupt("return", _context2.sent);

            case 6:
              _context2.next = 8;
              return _province["default"].findAll();

            case 8:
              return _context2.abrupt("return", _context2.sent);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function findProvinces(_x2) {
      return _findProvinces.apply(this, arguments);
    }

    return findProvinces;
  }(),
  createProvince: function () {
    var _createProvince = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(province) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _province["default"].create(province);

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function createProvince(_x3) {
      return _createProvince.apply(this, arguments);
    }

    return createProvince;
  }(),
  deleteProvince: function () {
    var _deleteProvince = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(provinceId) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _province["default"].destroy({
                where: {
                  id: provinceId
                }
              });

            case 2:
              return _context4.abrupt("return", _context4.sent);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function deleteProvince(_x4) {
      return _deleteProvince.apply(this, arguments);
    }

    return deleteProvince;
  }(),
  updateProvince: function () {
    var _updateProvince = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(provinceId, province) {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _province["default"].update(province, {
                where: {
                  id: provinceId
                },
                returning: true
              });

            case 2:
              return _context5.abrupt("return", _context5.sent);

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function updateProvince(_x5, _x6) {
      return _updateProvince.apply(this, arguments);
    }

    return updateProvince;
  }()
};
var _default = provinceRepo;
exports["default"] = _default;
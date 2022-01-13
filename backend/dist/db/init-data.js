"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _country = _interopRequireDefault(require("../models/country.js"));

var _city = _interopRequireDefault(require("../models/city.js"));

var _province = _interopRequireDefault(require("../models/province.js"));

var _userType = _interopRequireDefault(require("../models/userType.js"));

function initDbData() {
  return _initDbData.apply(this, arguments);
}

function _initDbData() {
  _initDbData = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _country["default"].bulkCreate([{
              name: 'Turkey'
            }, {
              name: 'Germany'
            }, {
              name: 'France'
            }]);

          case 2:
            _context.next = 4;
            return _city["default"].bulkCreate([{
              name: 'Istanbul',
              countryId: 1
            }, {
              name: 'Ankara',
              countryId: 1
            }, {
              name: 'Munich',
              countryId: 2
            }, {
              name: 'Berlin',
              countryId: 2
            }, {
              name: 'Paris',
              countryId: 3
            }, {
              name: 'Marseille',
              countryId: 3
            }]);

          case 4:
            _context.next = 6;
            return _province["default"].bulkCreate([{
              name: 'Kagithane',
              cityId: 1
            }, {
              name: 'Besiktas',
              cityId: 1
            }, {
              name: 'Ulus',
              cityId: 2
            }, {
              name: 'Kizilay',
              cityId: 2
            }, {
              name: 'mun1',
              cityId: 3
            }, {
              name: 'mun2',
              cityId: 3
            }, {
              name: 'Ber1',
              cityId: 4
            }, {
              name: 'Ber2',
              cityId: 4
            }, {
              name: 'Par1',
              cityId: 5
            }, {
              name: 'Par2',
              cityId: 5
            }, {
              name: 'Marseille1',
              cityId: 6
            }, {
              name: 'Marseille2',
              cityId: 6
            }]);

          case 6:
            _context.next = 8;
            return _userType["default"].bulkCreate([{
              name: 'clinic'
            }, {
              name: 'customer'
            }]);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _initDbData.apply(this, arguments);
}

var _default = initDbData;
exports["default"] = _default;
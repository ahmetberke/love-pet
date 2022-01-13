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

var _odataSequelize = _interopRequireDefault(require("odata-sequelize"));

var _dbCon = _interopRequireDefault(require("../db/db-con.js"));

var countryRepo = {
  findCountry: function () {
    var _findCountry = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(countryId) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _country["default"].findByPk(countryId);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function findCountry(_x) {
      return _findCountry.apply(this, arguments);
    }

    return findCountry;
  }(),
  findCountries: function () {
    var _findCountries = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(query) {
      var seqQuery;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!query) {
                _context2.next = 8;
                break;
              }

              seqQuery = (0, _odataSequelize["default"])(query, _dbCon["default"]);

              if (query.indexOf('$expand') >= 0) {
                seqQuery['include'] = {
                  model: _city["default"],
                  include: {
                    model: _province["default"]
                  }
                };
              }

              _context2.next = 5;
              return _country["default"].findAll(seqQuery);

            case 5:
              return _context2.abrupt("return", _context2.sent);

            case 8:
              _context2.next = 10;
              return _country["default"].findAll();

            case 10:
              return _context2.abrupt("return", _context2.sent);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function findCountries(_x2) {
      return _findCountries.apply(this, arguments);
    }

    return findCountries;
  }(),
  createCountry: function () {
    var _createCountry = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(country) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _country["default"].create(country);

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function createCountry(_x3) {
      return _createCountry.apply(this, arguments);
    }

    return createCountry;
  }(),
  deleteCountry: function () {
    var _deleteCountry = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(countryId) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _country["default"].destroy({
                where: {
                  id: countryId
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

    function deleteCountry(_x4) {
      return _deleteCountry.apply(this, arguments);
    }

    return deleteCountry;
  }(),
  updateCountry: function () {
    var _updateCountry = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(countryId, country) {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _country["default"].update(country, {
                where: {
                  id: countryId
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

    function updateCountry(_x5, _x6) {
      return _updateCountry.apply(this, arguments);
    }

    return updateCountry;
  }()
};
var _default = countryRepo;
exports["default"] = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _city = _interopRequireDefault(require("../models/city.js"));

var _odataSequelize = _interopRequireDefault(require("odata-sequelize"));

var _dbCon = _interopRequireDefault(require("../db/db-con.js"));

var cityRepo = {
  findCity: function () {
    var _findCity = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(cityId) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _city["default"].findByPk(cityId);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function findCity(_x) {
      return _findCity.apply(this, arguments);
    }

    return findCity;
  }(),
  findCities: function () {
    var _findCities = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(query) {
      var seqQuery;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!query) {
                _context2.next = 7;
                break;
              }

              seqQuery = (0, _odataSequelize["default"])(query, _dbCon["default"]);
              _context2.next = 4;
              return _city["default"].findAll(seqQuery);

            case 4:
              return _context2.abrupt("return", _context2.sent);

            case 7:
              _context2.next = 9;
              return _city["default"].findAll();

            case 9:
              return _context2.abrupt("return", _context2.sent);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function findCities(_x2) {
      return _findCities.apply(this, arguments);
    }

    return findCities;
  }(),
  createCity: function () {
    var _createCity = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(city) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _city["default"].create(city);

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function createCity(_x3) {
      return _createCity.apply(this, arguments);
    }

    return createCity;
  }(),
  deleteCity: function () {
    var _deleteCity = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(cityId) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _city["default"].destroy({
                where: {
                  id: cityId
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

    function deleteCity(_x4) {
      return _deleteCity.apply(this, arguments);
    }

    return deleteCity;
  }(),
  updateCity: function () {
    var _updateCity = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(cityId, city) {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _city["default"].update(city, {
                where: {
                  id: cityId
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

    function updateCity(_x5, _x6) {
      return _updateCity.apply(this, arguments);
    }

    return updateCity;
  }()
};
var _default = cityRepo;
exports["default"] = _default;
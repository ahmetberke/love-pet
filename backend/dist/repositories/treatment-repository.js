"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _treatment = _interopRequireDefault(require("../models/treatment.js"));

var treatmentRepo = {
  findTreatment: function () {
    var _findTreatment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(treatmentId) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _treatment["default"].findByPk(treatmentId);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function findTreatment(_x) {
      return _findTreatment.apply(this, arguments);
    }

    return findTreatment;
  }(),
  findTreatments: function () {
    var _findTreatments = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _treatment["default"].findAll();

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function findTreatments() {
      return _findTreatments.apply(this, arguments);
    }

    return findTreatments;
  }(),
  createTreatment: function () {
    var _createTreatment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(treatment) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _treatment["default"].create(treatment);

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function createTreatment(_x2) {
      return _createTreatment.apply(this, arguments);
    }

    return createTreatment;
  }(),
  deleteTreatment: function () {
    var _deleteTreatment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(treatmentId) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _treatment["default"].destroy({
                where: {
                  id: treatmentId
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

    function deleteTreatment(_x3) {
      return _deleteTreatment.apply(this, arguments);
    }

    return deleteTreatment;
  }(),
  updateTreatment: function () {
    var _updateTreatment = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(treatmentId, treatment) {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _treatment["default"].update(treatment, {
                where: {
                  id: treatmentId
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

    function updateTreatment(_x4, _x5) {
      return _updateTreatment.apply(this, arguments);
    }

    return updateTreatment;
  }()
};
var _default = treatmentRepo;
exports["default"] = _default;
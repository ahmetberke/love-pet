"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _treatmentType = _interopRequireDefault(require("../models/treatment-type.js"));

var treatmentTypeRepo = {
  findTreatmentType: function () {
    var _findTreatmentType = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(treatmentTypeId) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _treatmentType["default"].findByPk(treatmentTypeId);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function findTreatmentType(_x) {
      return _findTreatmentType.apply(this, arguments);
    }

    return findTreatmentType;
  }(),
  findTreatmentTypes: function () {
    var _findTreatmentTypes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _treatmentType["default"].findAll();

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function findTreatmentTypes() {
      return _findTreatmentTypes.apply(this, arguments);
    }

    return findTreatmentTypes;
  }(),
  createTreatmentType: function () {
    var _createTreatmentType = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(treatmentType) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _treatmentType["default"].create(treatmentType);

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function createTreatmentType(_x2) {
      return _createTreatmentType.apply(this, arguments);
    }

    return createTreatmentType;
  }(),
  deleteTreatmentType: function () {
    var _deleteTreatmentType = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(treatmentTypeId) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _treatmentType["default"].destroy({
                where: {
                  id: treatmentTypeId
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

    function deleteTreatmentType(_x3) {
      return _deleteTreatmentType.apply(this, arguments);
    }

    return deleteTreatmentType;
  }(),
  updateTreatmentType: function () {
    var _updateTreatmentType = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(treatmentTypeId, treatmentType) {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _treatmentType["default"].update(treatmentType, {
                where: {
                  id: treatmentTypeId
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

    function updateTreatmentType(_x4, _x5) {
      return _updateTreatmentType.apply(this, arguments);
    }

    return updateTreatmentType;
  }()
};
var _default = treatmentTypeRepo;
exports["default"] = _default;
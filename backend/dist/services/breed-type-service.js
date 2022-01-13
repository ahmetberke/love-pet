"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _breedTypeRepository = _interopRequireDefault(require("../repositories/breed-type-repository.js"));

var breedTypeService = {
  findBreedType: function () {
    var _findBreedType = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(breedTypeId) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _breedTypeRepository["default"].findBreedType(breedTypeId);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function findBreedType(_x) {
      return _findBreedType.apply(this, arguments);
    }

    return findBreedType;
  }(),
  findBreedTypes: function () {
    var _findBreedTypes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _breedTypeRepository["default"].findBreedTypes();

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function findBreedTypes() {
      return _findBreedTypes.apply(this, arguments);
    }

    return findBreedTypes;
  }(),
  createBreedType: function () {
    var _createBreedType = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(breedType) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _breedTypeRepository["default"].createBreedType(breedType);

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function createBreedType(_x2) {
      return _createBreedType.apply(this, arguments);
    }

    return createBreedType;
  }(),
  deleteBreedType: function () {
    var _deleteBreedType = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(breedTypeId) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _breedTypeRepository["default"].deleteBreedType(breedTypeId);

            case 2:
              return _context4.abrupt("return", _context4.sent);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function deleteBreedType(_x3) {
      return _deleteBreedType.apply(this, arguments);
    }

    return deleteBreedType;
  }(),
  updateBreedType: function () {
    var _updateBreedType = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(breedTypeId, breedType) {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _breedTypeRepository["default"].updateBreedType(breedTypeId, breedType);

            case 2:
              return _context5.abrupt("return", _context5.sent);

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function updateBreedType(_x4, _x5) {
      return _updateBreedType.apply(this, arguments);
    }

    return updateBreedType;
  }()
};
var _default = breedTypeService;
exports["default"] = _default;
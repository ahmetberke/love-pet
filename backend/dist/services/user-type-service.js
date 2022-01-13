"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _userTypeRepository = _interopRequireDefault(require("../repositories/user-type-repository.js"));

var userTypeService = {
  findUserType: function () {
    var _findUserType = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userTypeId) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _userTypeRepository["default"].findUserType(userTypeId);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function findUserType(_x) {
      return _findUserType.apply(this, arguments);
    }

    return findUserType;
  }(),
  findUserTypes: function () {
    var _findUserTypes = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _userTypeRepository["default"].findUserTypes();

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function findUserTypes() {
      return _findUserTypes.apply(this, arguments);
    }

    return findUserTypes;
  }(),
  createUserType: function () {
    var _createUserType = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(userType) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _userTypeRepository["default"].createUserType(userType);

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function createUserType(_x2) {
      return _createUserType.apply(this, arguments);
    }

    return createUserType;
  }(),
  deleteUserType: function () {
    var _deleteUserType = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(userTypeId) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _userTypeRepository["default"].deleteUserType(userTypeId);

            case 2:
              return _context4.abrupt("return", _context4.sent);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function deleteUserType(_x3) {
      return _deleteUserType.apply(this, arguments);
    }

    return deleteUserType;
  }(),
  updateUserType: function () {
    var _updateUserType = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(userTypeId, userType) {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _userTypeRepository["default"].updateUserType(userTypeId, userType);

            case 2:
              return _context5.abrupt("return", _context5.sent);

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function updateUserType(_x4, _x5) {
      return _updateUserType.apply(this, arguments);
    }

    return updateUserType;
  }()
};
var _default = userTypeService;
exports["default"] = _default;
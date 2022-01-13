"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _forgetPasswordRepository = _interopRequireDefault(require("../repositories/forget-password-repository.js"));

var ForgetPasswordService = {
  findForgetPassword: function () {
    var _findForgetPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(forgetPasswordId) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _forgetPasswordRepository["default"].findForgetPassword(forgetPasswordId);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function findForgetPassword(_x) {
      return _findForgetPassword.apply(this, arguments);
    }

    return findForgetPassword;
  }(),
  createForgetPassword: function () {
    var _createForgetPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(forgetPassword) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _forgetPasswordRepository["default"].createForgetPassword(forgetPassword);

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function createForgetPassword(_x2) {
      return _createForgetPassword.apply(this, arguments);
    }

    return createForgetPassword;
  }(),
  deleteForgetPassword: function () {
    var _deleteForgetPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(forgetPasswordId) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _forgetPasswordRepository["default"].deleteForgetPassword(forgetPasswordId);

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function deleteForgetPassword(_x3) {
      return _deleteForgetPassword.apply(this, arguments);
    }

    return deleteForgetPassword;
  }()
};
var _default = ForgetPasswordService;
exports["default"] = _default;
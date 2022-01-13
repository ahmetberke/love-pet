"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _user = _interopRequireDefault(require("../models/user.js"));

var _sequelize = require("sequelize");

var userRepo = {
  findUserByUsername: function () {
    var _findUserByUsername = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(username) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _user["default"].findOne({
                where: {
                  username: username
                }
              });

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function findUserByUsername(_x) {
      return _findUserByUsername.apply(this, arguments);
    }

    return findUserByUsername;
  }(),
  findUserByUsernameOrMail: function () {
    var _findUserByUsernameOrMail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(usernameOrMail) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _user["default"].findOne({
                where: (0, _defineProperty2["default"])({}, _sequelize.Op.or, {
                  username: usernameOrMail,
                  mail: usernameOrMail
                })
              });

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function findUserByUsernameOrMail(_x2) {
      return _findUserByUsernameOrMail.apply(this, arguments);
    }

    return findUserByUsernameOrMail;
  }(),
  findUser: function () {
    var _findUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(userId) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _user["default"].findByPk(userId);

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function findUser(_x3) {
      return _findUser.apply(this, arguments);
    }

    return findUser;
  }(),
  findUsers: function () {
    var _findUsers = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _user["default"].findAll();

            case 2:
              return _context4.abrupt("return", _context4.sent);

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4);
    }));

    function findUsers() {
      return _findUsers.apply(this, arguments);
    }

    return findUsers;
  }(),
  createUser: function () {
    var _createUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(user) {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _user["default"].create(user);

            case 2:
              return _context5.abrupt("return", _context5.sent);

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5);
    }));

    function createUser(_x4) {
      return _createUser.apply(this, arguments);
    }

    return createUser;
  }(),
  deleteUser: function () {
    var _deleteUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(userId) {
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _user["default"].destroy({
                where: {
                  id: userId
                }
              });

            case 2:
              return _context6.abrupt("return", _context6.sent);

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function deleteUser(_x5) {
      return _deleteUser.apply(this, arguments);
    }

    return deleteUser;
  }(),
  updateUser: function () {
    var _updateUser = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7(userId, user) {
      return _regenerator["default"].wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return _user["default"].update(user, {
                where: {
                  id: userId
                },
                returning: true
              });

            case 2:
              return _context7.abrupt("return", _context7.sent);

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7);
    }));

    function updateUser(_x6, _x7) {
      return _updateUser.apply(this, arguments);
    }

    return updateUser;
  }()
};
var _default = userRepo;
exports["default"] = _default;
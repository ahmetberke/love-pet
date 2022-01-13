"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _userService = _interopRequireDefault(require("./user-service.js"));

var _forgetPasswordService = _interopRequireDefault(require("./forget-password-service.js"));

var _sha256Hasher = _interopRequireDefault(require("../middleware/sha256-hasher.js"));

var _uuidGenerator = _interopRequireDefault(require("../middleware/uuid-generator.js"));

var _auth = require("../middleware/auth.js");

var _mailService = _interopRequireDefault(require("./mail-service.js"));

var _dbCon = _interopRequireDefault(require("../db/db-con.js"));

var authService = {
  signup: function () {
    var _signup = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(userPayload) {
      var _validatePassword, _validatePassword2, isValidPassword, passwordValidationMsg, _validateUsername, _validateUsername2, isValidUsername, usernameValidationMsg, user, token;

      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _validatePassword = (0, _auth.validatePassword)(userPayload.password), _validatePassword2 = (0, _slicedToArray2["default"])(_validatePassword, 2), isValidPassword = _validatePassword2[0], passwordValidationMsg = _validatePassword2[1];

              if (isValidPassword) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return", [400, null, passwordValidationMsg]);

            case 3:
              _validateUsername = (0, _auth.validateUsername)(userPayload.username), _validateUsername2 = (0, _slicedToArray2["default"])(_validateUsername, 2), isValidUsername = _validateUsername2[0], usernameValidationMsg = _validateUsername2[1];

              if (isValidUsername) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return", [400, null, usernameValidationMsg]);

            case 6:
              _context.next = 8;
              return _userService["default"].createUser(userPayload);

            case 8:
              user = _context.sent;
              token = (0, _auth.signToken)({
                userId: user.id,
                userTypeId: user.userTypeId
              });
              return _context.abrupt("return", [200, token, null]);

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function signup(_x) {
      return _signup.apply(this, arguments);
    }

    return signup;
  }(),
  login: function () {
    var _login = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(userPayload) {
      var user, token;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _userService["default"].findUserByUsernameOrMail(userPayload.usernameOrMail);

            case 2:
              user = _context2.sent;

              if (!(user === null)) {
                _context2.next = 5;
                break;
              }

              return _context2.abrupt("return", [400, null, 'Wrong username or mail!']);

            case 5:
              if (!((0, _sha256Hasher["default"])(user.mail + userPayload.password) !== user.password)) {
                _context2.next = 7;
                break;
              }

              return _context2.abrupt("return", [400, null, 'Wrong password!']);

            case 7:
              token = (0, _auth.signToken)({
                userId: user.id,
                userTypeId: user.userTypeId
              }, userPayload.rememberme);
              return _context2.abrupt("return", [200, token, null]);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function login(_x2) {
      return _login.apply(this, arguments);
    }

    return login;
  }(),
  forgetPassword: function () {
    var _forgetPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(userPayload) {
      var user, uuid;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _userService["default"].findUserByUsernameOrMail(userPayload.usernameOrMail);

            case 2:
              user = _context3.sent;

              if (!(user === null)) {
                _context3.next = 5;
                break;
              }

              return _context3.abrupt("return", [400, 'Email or username not found!']);

            case 5:
              uuid = (0, _uuidGenerator["default"])();
              _context3.next = 8;
              return _forgetPasswordService["default"].createForgetPassword({
                id: (0, _sha256Hasher["default"])(user.id.toString() + uuid)
              });

            case 8:
              _context3.next = 10;
              return _mailService["default"].sendMail('Password Renewal', "Click on the link to renew password. \n        <a>http://localhost:3000/#/renewPassword?id=".concat(user.id, "&uuid=").concat(uuid, "</a>"), user.mail);

            case 10:
              return _context3.abrupt("return", [200, 'Check your email!']);

            case 11:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function forgetPassword(_x3) {
      return _forgetPassword.apply(this, arguments);
    }

    return forgetPassword;
  }(),
  renewPassword: function () {
    var _renewPassword = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(userPayload) {
      var user, forgetPassword, now, createdAtTs, createdAt;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _userService["default"].findUser(userPayload.userid);

            case 2:
              user = _context5.sent;

              if (!(user === null)) {
                _context5.next = 5;
                break;
              }

              return _context5.abrupt("return", [400, 'Wrong link!']);

            case 5:
              _context5.next = 7;
              return _forgetPasswordService["default"].findForgetPassword((0, _sha256Hasher["default"])(userPayload.userid.toString() + userPayload.uuid));

            case 7:
              forgetPassword = _context5.sent;

              if (!(forgetPassword === null)) {
                _context5.next = 10;
                break;
              }

              return _context5.abrupt("return", [400, 'Wrong link!']);

            case 10:
              // should be renewed in 1 hours after created
              now = Math.round(Date.now() / 1000);
              createdAtTs = new Date(forgetPassword.createdAt).getTime();
              createdAt = Math.round(createdAtTs / 1000);

              if (!(now - createdAt > 60 * 60)) {
                _context5.next = 15;
                break;
              }

              return _context5.abrupt("return", [400, 'Link is expired!']);

            case 15:
              _context5.prev = 15;
              _context5.next = 18;
              return _dbCon["default"].transaction( /*#__PURE__*/function () {
                var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(t) {
                  return _regenerator["default"].wrap(function _callee4$(_context4) {
                    while (1) {
                      switch (_context4.prev = _context4.next) {
                        case 0:
                          _context4.next = 2;
                          return _userService["default"].updateUser(userPayload.userid, {
                            password: (0, _sha256Hasher["default"])(user.mail + userPayload.password)
                          });

                        case 2:
                          _context4.next = 4;
                          return _forgetPasswordService["default"].deleteForgetPassword(forgetPassword.id);

                        case 4:
                        case "end":
                          return _context4.stop();
                      }
                    }
                  }, _callee4);
                }));

                return function (_x5) {
                  return _ref.apply(this, arguments);
                };
              }());

            case 18:
              return _context5.abrupt("return", [200, 'Password changed!']);

            case 21:
              _context5.prev = 21;
              _context5.t0 = _context5["catch"](15);
              return _context5.abrupt("return", [500, '']);

            case 24:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[15, 21]]);
    }));

    function renewPassword(_x4) {
      return _renewPassword.apply(this, arguments);
    }

    return renewPassword;
  }(),
  hasValidUsername: function () {
    var _hasValidUsername = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(username) {
      var user;
      return _regenerator["default"].wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return _userService["default"].findUserByUsername(username);

            case 2:
              user = _context6.sent;

              if (!(user === null)) {
                _context6.next = 7;
                break;
              }

              return _context6.abrupt("return", (0, _auth.validateUsername)(username));

            case 7:
              return _context6.abrupt("return", [false, 'Duplicate username!']);

            case 8:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6);
    }));

    function hasValidUsername(_x6) {
      return _hasValidUsername.apply(this, arguments);
    }

    return hasValidUsername;
  }()
};
var _default = authService;
exports["default"] = _default;
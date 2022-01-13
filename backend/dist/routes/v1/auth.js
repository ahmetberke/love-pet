"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _authService = _interopRequireDefault(require("../../services/auth-service.js"));

var _express = _interopRequireDefault(require("express"));

var authRouter = _express["default"].Router();

authRouter.post('/signup', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var _yield$authService$si, _yield$authService$si2, statusCode, token, msg;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _authService["default"].signup(req.body);

          case 3:
            _yield$authService$si = _context.sent;
            _yield$authService$si2 = (0, _slicedToArray2["default"])(_yield$authService$si, 3);
            statusCode = _yield$authService$si2[0];
            token = _yield$authService$si2[1];
            msg = _yield$authService$si2[2];
            return _context.abrupt("return", res.status(statusCode).json({
              token: token,
              msg: msg
            }));

          case 11:
            _context.prev = 11;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 14:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 11]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
authRouter.post('/login', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var _yield$authService$lo, _yield$authService$lo2, statusCode, token, msg;

    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _authService["default"].login(req.body);

          case 3:
            _yield$authService$lo = _context2.sent;
            _yield$authService$lo2 = (0, _slicedToArray2["default"])(_yield$authService$lo, 3);
            statusCode = _yield$authService$lo2[0];
            token = _yield$authService$lo2[1];
            msg = _yield$authService$lo2[2];
            return _context2.abrupt("return", res.status(statusCode).json({
              token: token,
              msg: msg
            }));

          case 11:
            _context2.prev = 11;
            _context2.t0 = _context2["catch"](0);
            next(_context2.t0);

          case 14:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 11]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());
authRouter.post('/forgetPassword', /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var _yield$authService$fo, _yield$authService$fo2, statusCode, msg;

    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _authService["default"].forgetPassword(req.body);

          case 3:
            _yield$authService$fo = _context3.sent;
            _yield$authService$fo2 = (0, _slicedToArray2["default"])(_yield$authService$fo, 2);
            statusCode = _yield$authService$fo2[0];
            msg = _yield$authService$fo2[1];
            return _context3.abrupt("return", res.status(statusCode).json({
              msg: msg
            }));

          case 10:
            _context3.prev = 10;
            _context3.t0 = _context3["catch"](0);
            next(_context3.t0);

          case 13:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 10]]);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}());
authRouter.post('/renewPassword', /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    var _yield$authService$re, _yield$authService$re2, statusCode, msg;

    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _authService["default"].renewPassword(req.body);

          case 3:
            _yield$authService$re = _context4.sent;
            _yield$authService$re2 = (0, _slicedToArray2["default"])(_yield$authService$re, 2);
            statusCode = _yield$authService$re2[0];
            msg = _yield$authService$re2[1];
            return _context4.abrupt("return", res.status(statusCode).json({
              msg: msg
            }));

          case 10:
            _context4.prev = 10;
            _context4.t0 = _context4["catch"](0);
            next(_context4.t0);

          case 13:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 10]]);
  }));

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}());
authRouter.get('/validateUsername', /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var _yield$authService$ha, _yield$authService$ha2, valid, msg;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _authService["default"].hasValidUsername(req.query.username);

          case 3:
            _yield$authService$ha = _context5.sent;
            _yield$authService$ha2 = (0, _slicedToArray2["default"])(_yield$authService$ha, 2);
            valid = _yield$authService$ha2[0];
            msg = _yield$authService$ha2[1];
            return _context5.abrupt("return", res.status(200).json({
              valid: valid,
              msg: msg
            }));

          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](0);
            next(_context5.t0);

          case 13:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 10]]);
  }));

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = authRouter;
exports["default"] = _default;
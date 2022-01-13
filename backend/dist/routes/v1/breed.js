"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _breedService = _interopRequireDefault(require("../../services/breed-service.js"));

var _auth = require("../../middleware/auth.js");

var _express = _interopRequireDefault(require("express"));

var breedRouter = _express["default"].Router();

breedRouter.use(_auth.verifyToken);
breedRouter.post('/', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var breed;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _breedService["default"].createBreed(req.body);

          case 3:
            breed = _context.sent;
            return _context.abrupt("return", res.status(200).json(breed.toJSON()));

          case 7:
            _context.prev = 7;
            _context.t0 = _context["catch"](0);
            next(_context.t0);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 7]]);
  }));

  return function (_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}());
breedRouter.get('/', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var breeds;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _breedService["default"].findBreeds();

          case 3:
            breeds = _context2.sent;
            return _context2.abrupt("return", res.status(200).json(JSON.stringify(breeds)));

          case 7:
            _context2.prev = 7;
            _context2.t0 = _context2["catch"](0);
            next(_context2.t0);

          case 10:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[0, 7]]);
  }));

  return function (_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}());
breedRouter.get('/:breedId', /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var breed;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _breedService["default"].findBreed(req.params.breedId);

          case 3:
            breed = _context3.sent;

            if (!(breed !== null)) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.status(200).json(breed.toJSON()));

          case 8:
            return _context3.abrupt("return", res.sendStatus(404));

          case 9:
            _context3.next = 14;
            break;

          case 11:
            _context3.prev = 11;
            _context3.t0 = _context3["catch"](0);
            next(_context3.t0);

          case 14:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 11]]);
  }));

  return function (_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}());
breedRouter["delete"]('/:breedId', /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _breedService["default"].deleteBreed(req.params.breedId);

          case 3:
            return _context4.abrupt("return", res.sendStatus(200));

          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            next(_context4.t0);

          case 9:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[0, 6]]);
  }));

  return function (_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}());
breedRouter.put('/:breedId', /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var _yield$breedService$u, _yield$breedService$u2, breeds;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _breedService["default"].updateBreed(req.params.breedId, req.body);

          case 3:
            _yield$breedService$u = _context5.sent;
            _yield$breedService$u2 = (0, _slicedToArray2["default"])(_yield$breedService$u, 2);
            breeds = _yield$breedService$u2[1];
            return _context5.abrupt("return", res.status(200).json(JSON.stringify(breeds)));

          case 9:
            _context5.prev = 9;
            _context5.t0 = _context5["catch"](0);
            next(_context5.t0);

          case 12:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 9]]);
  }));

  return function (_x13, _x14, _x15) {
    return _ref5.apply(this, arguments);
  };
}());
var _default = breedRouter;
exports["default"] = _default;
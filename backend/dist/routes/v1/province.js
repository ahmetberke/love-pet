"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _provinceService = _interopRequireDefault(require("../../services/province-service.js"));

var _express = _interopRequireDefault(require("express"));

var _querystring = _interopRequireDefault(require("../../middleware/querystring.js"));

var provinceRouter = _express["default"].Router();

provinceRouter.post('/', /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var province;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _provinceService["default"].createProvince(req.body);

          case 3:
            province = _context.sent;
            return _context.abrupt("return", res.status(200).json(province));

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
provinceRouter.get('/', /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res, next) {
    var provinces;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.prev = 0;
            _context2.next = 3;
            return _provinceService["default"].findProvinces((0, _querystring["default"])(req));

          case 3:
            provinces = _context2.sent;
            return _context2.abrupt("return", res.status(200).json(provinces));

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
provinceRouter.get('/:provinceId', /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res, next) {
    var province;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _provinceService["default"].findProvince(req.params.provinceId);

          case 3:
            province = _context3.sent;

            if (!(province !== null)) {
              _context3.next = 8;
              break;
            }

            return _context3.abrupt("return", res.status(200).json(province));

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
provinceRouter["delete"]('/:provinceId', /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res, next) {
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _provinceService["default"].deleteProvince(req.params.provinceId);

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
provinceRouter.put('/:provinceId', /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res, next) {
    var _yield$provinceServic, _yield$provinceServic2, provinces;

    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _provinceService["default"].updateProvince(req.params.provinceId, req.body);

          case 3:
            _yield$provinceServic = _context5.sent;
            _yield$provinceServic2 = (0, _slicedToArray2["default"])(_yield$provinceServic, 2);
            provinces = _yield$provinceServic2[1];
            return _context5.abrupt("return", res.status(200).json(provinces));

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
var _default = provinceRouter;
exports["default"] = _default;
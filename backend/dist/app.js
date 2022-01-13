"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _createDb = _interopRequireDefault(require("./db/create-db"));

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _cookieParser = _interopRequireDefault(require("cookie-parser"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _v1Router = _interopRequireDefault(require("./routes/v1Router.js"));

function getApp() {
  return _getApp.apply(this, arguments);
}

function _getApp() {
  _getApp = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
    var app, jsonErrorHandler;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return (0, _createDb["default"])();

          case 2:
            app = (0, _express["default"])();
            app.use((0, _cors["default"])());
            app.use((0, _morgan["default"])('dev'));
            app.use(_express["default"].json());
            app.use(_express["default"].urlencoded({
              extended: false
            }));
            app.use((0, _cookieParser["default"])());
            app.use(_express["default"]["static"](_path["default"].join(_path["default"].resolve(), 'public')));
            app.use('/api', _v1Router["default"]); // set error handler

            jsonErrorHandler = /*#__PURE__*/function () {
              var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(err, req, res, next) {
                return _regenerator["default"].wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        console.log(err);
                        res.status(500).json({
                          error: err
                        });

                      case 2:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee);
              }));

              return function jsonErrorHandler(_x, _x2, _x3, _x4) {
                return _ref.apply(this, arguments);
              };
            }();

            app.use(jsonErrorHandler);
            return _context2.abrupt("return", app);

          case 13:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _getApp.apply(this, arguments);
}

;
var _default = getApp;
exports["default"] = _default;
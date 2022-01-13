"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _productCategory = _interopRequireDefault(require("../models/product-category.js"));

var productCategoryRepo = {
  findProductCategory: function () {
    var _findProductCategory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(productCategoryId) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _productCategory["default"].findByPk(productCategoryId);

            case 2:
              return _context.abrupt("return", _context.sent);

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function findProductCategory(_x) {
      return _findProductCategory.apply(this, arguments);
    }

    return findProductCategory;
  }(),
  findProductCategories: function () {
    var _findProductCategories = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _productCategory["default"].findAll();

            case 2:
              return _context2.abrupt("return", _context2.sent);

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function findProductCategories() {
      return _findProductCategories.apply(this, arguments);
    }

    return findProductCategories;
  }(),
  createProductCategory: function () {
    var _createProductCategory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(productCategory) {
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _productCategory["default"].create(productCategory);

            case 2:
              return _context3.abrupt("return", _context3.sent);

            case 3:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function createProductCategory(_x2) {
      return _createProductCategory.apply(this, arguments);
    }

    return createProductCategory;
  }(),
  deleteProductCategory: function () {
    var _deleteProductCategory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(productCategoryId) {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _productCategory["default"].destroy({
                where: {
                  id: productCategoryId
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

    function deleteProductCategory(_x3) {
      return _deleteProductCategory.apply(this, arguments);
    }

    return deleteProductCategory;
  }(),
  updateProductCategory: function () {
    var _updateProductCategory = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(productCategoryId, productCategory) {
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return _productCategory["default"].update(productCategory, {
                where: {
                  id: productCategoryId
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

    function updateProductCategory(_x4, _x5) {
      return _updateProductCategory.apply(this, arguments);
    }

    return updateProductCategory;
  }()
};
var _default = productCategoryRepo;
exports["default"] = _default;
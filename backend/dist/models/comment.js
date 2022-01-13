"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _sequelize = require("sequelize");

var _dbCon = _interopRequireDefault(require("../db/db-con.js"));

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

var Comment = /*#__PURE__*/function (_Model) {
  (0, _inherits2["default"])(Comment, _Model);

  var _super = _createSuper(Comment);

  function Comment() {
    (0, _classCallCheck2["default"])(this, Comment);
    return _super.apply(this, arguments);
  }

  return (0, _createClass2["default"])(Comment);
}(_sequelize.Model);

Comment.init({
  id: {
    type: _sequelize.DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  sendDate: {
    type: _sequelize.DataTypes.DATEONLY,
    allowNull: false,
    validate: {
      isDate: true
    }
  },
  star: {
    type: _sequelize.DataTypes.SMALLINT
  },
  text: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: false,
    validate: {
      len: [0, 250]
    }
  }
}, {
  sequelize: _dbCon["default"],
  modelName: 'Comment'
});
var _default = Comment;
exports["default"] = _default;
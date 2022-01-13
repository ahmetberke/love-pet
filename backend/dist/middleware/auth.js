"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signToken = signToken;
exports.verifyToken = exports.validateUsername = exports.validatePassword = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("./config.js"));

function signToken(payload) {
  var rememberme = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var expirationDuration = rememberme ? '30d' : '3h';

  var token = _jsonwebtoken["default"].sign(payload, _config["default"].token_key, {
    expiresIn: expirationDuration
  });

  return token;
}

var verifyToken = function verifyToken(req, res, next) {
  try {
    var token = req.headers['authorization'];

    if (!token) {
      return res.status(403).send('A token is required for authentication');
    }

    var decoded = _jsonwebtoken["default"].verify(token, _config["default"].token_key);

    req.user = decoded;
  } catch (err) {
    return res.status(401).send('Invalid Token');
  }

  next();
};

exports.verifyToken = verifyToken;

var validatePassword = function validatePassword(value) {
  var message = '';

  if (value.length < 7) {
    message += 'Your password needs a minimum of seven characters.';
  }

  if (value.length > 14) {
    message += 'Your password needs a maximum of fourteen characters.';
  }

  if (value.search(/[a-z]/) == -1) {
    message += 'Your password needs at least one lower case letter.';
  }

  if (value.search(/[A-Z]/) == -1) {
    message += 'Your password needs at least one upper case letter.';
  }

  if (value.search(/[0-9]/) == -1) {
    message += 'Your password needs a number.';
  }

  if (value.search(/^[a-zA-Z0-9_]{7,14}$/) == -1) {
    message += 'Your password should only consist alphanumeric ' + 'characters of length between 7 and 14!';
  }

  return [message === '', message];
};

exports.validatePassword = validatePassword;

var validateUsername = function validateUsername(value) {
  var message = '';

  if (value.search(/^[a-zA-Z0-9-_]{7,14}$/) == -1) {
    message = 'Your password should only consist alphanumeric ' + 'characters of length between 7 and 14!';
  }

  return [message === '', message];
};

exports.validateUsername = validateUsername;
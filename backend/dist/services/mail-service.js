"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _config = _interopRequireDefault(require("../middleware/config.js"));

var transporter = _nodemailer["default"].createTransport({
  service: 'gmail',
  auth: {
    user: _config["default"].mail_username,
    pass: _config["default"].mail_password
  }
});

function buildMailData(subject, content, to) {
  return {
    from: _config["default"].mail_username,
    to: to,
    subject: subject,
    text: content,
    html: content
  };
}

function sendMail(_x, _x2, _x3) {
  return _sendMail.apply(this, arguments);
}

function _sendMail() {
  _sendMail = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(subject, content, to) {
    var mailData;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            mailData = buildMailData(subject, content, to);
            _context.next = 3;
            return transporter.sendMail(mailData, function (error, info) {
              if (error) {
                throw error;
              }

              return info;
            });

          case 3:
            return _context.abrupt("return", _context.sent);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _sendMail.apply(this, arguments);
}

var mailService = {
  sendMail: sendMail
};
var _default = mailService;
exports["default"] = _default;
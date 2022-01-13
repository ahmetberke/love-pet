"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getQueryString;

function getQueryString(req) {
  var queryIndex = req.originalUrl.indexOf('?');
  var queryString = queryIndex >= 0 ? req.originalUrl.slice(queryIndex + 1) : '';
  console.log(queryString);
  console.log(decodeURIComponent(queryString));
  return decodeURIComponent(queryString);
}
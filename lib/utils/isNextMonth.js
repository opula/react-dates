"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isNextMonth;

var _momentWithLocales = _interopRequireDefault(require("moment/min/moment-with-locales.min"));

var _isSameMonth = _interopRequireDefault(require("./isSameMonth"));

function isNextMonth(a, b) {
  if (!_momentWithLocales["default"].isMoment(a) || !_momentWithLocales["default"].isMoment(b)) return false;
  return (0, _isSameMonth["default"])(a.clone().add(1, 'month'), b);
}
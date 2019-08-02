"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isInclusivelyBeforeDay;

var _momentWithLocales = _interopRequireDefault(require("moment/min/moment-with-locales.min"));

var _isAfterDay = _interopRequireDefault(require("./isAfterDay"));

function isInclusivelyBeforeDay(a, b) {
  if (!_momentWithLocales["default"].isMoment(a) || !_momentWithLocales["default"].isMoment(b)) return false;
  return !(0, _isAfterDay["default"])(a, b);
}
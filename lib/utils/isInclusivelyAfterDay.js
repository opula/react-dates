"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isInclusivelyAfterDay;

var _momentWithLocales = _interopRequireDefault(require("moment/min/moment-with-locales.min"));

var _isBeforeDay = _interopRequireDefault(require("./isBeforeDay"));

function isInclusivelyAfterDay(a, b) {
  if (!_momentWithLocales["default"].isMoment(a) || !_momentWithLocales["default"].isMoment(b)) return false;
  return !(0, _isBeforeDay["default"])(a, b);
}
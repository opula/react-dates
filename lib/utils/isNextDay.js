"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isNextDay;

var _momentWithLocales = _interopRequireDefault(require("moment/min/moment-with-locales.min"));

var _isSameDay = _interopRequireDefault(require("./isSameDay"));

function isNextDay(a, b) {
  if (!_momentWithLocales["default"].isMoment(a) || !_momentWithLocales["default"].isMoment(b)) return false;
  var nextDay = (0, _momentWithLocales["default"])(a).add(1, 'day');
  return (0, _isSameDay["default"])(nextDay, b);
}
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isSameMonth;

var _momentWithLocales = _interopRequireDefault(require("moment/min/moment-with-locales.min"));

function isSameMonth(a, b) {
  if (!_momentWithLocales["default"].isMoment(a) || !_momentWithLocales["default"].isMoment(b)) return false; // Compare least significant, most likely to change units first
  // Moment's isSame clones moment inputs and is a tad slow

  return a.month() === b.month() && a.year() === b.year();
}
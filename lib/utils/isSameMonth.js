"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = isSameMonth;

var _moment = _interopRequireDefault(require("moment"));

require("moment/locale/fr");

require("moment/locale/it");

require("moment/locale/es");

require("moment/locale/pl");

require("moment/locale/ru");

require("moment/locale/pt");

require("moment/locale/nl");

function isSameMonth(a, b) {
  if (!_moment["default"].isMoment(a) || !_moment["default"].isMoment(b)) return false; // Compare least significant, most likely to change units first
  // Moment's isSame clones moment inputs and is a tad slow

  return a.month() === b.month() && a.year() === b.year();
}
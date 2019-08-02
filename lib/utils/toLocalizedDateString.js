"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = toLocalizedDateString;

var _momentWithLocales = _interopRequireDefault(require("moment/min/moment-with-locales.min"));

var _toMomentObject = _interopRequireDefault(require("./toMomentObject"));

var _constants = require("../constants");

function toLocalizedDateString(date, currentFormat) {
  var dateObj = _momentWithLocales["default"].isMoment(date) ? date : (0, _toMomentObject["default"])(date, currentFormat);
  if (!dateObj) return null;
  return dateObj.format(_constants.DISPLAY_FORMAT);
}
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = toLocalizedDateString;

var _moment = _interopRequireDefault(require("moment"));

require("moment/locale/fr");

require("moment/locale/it");

require("moment/locale/es");

require("moment/locale/pl");

require("moment/locale/ru");

require("moment/locale/pt");

require("moment/locale/nl");

var _toMomentObject = _interopRequireDefault(require("./toMomentObject"));

var _constants = require("../constants");

function toLocalizedDateString(date, currentFormat) {
  var dateObj = _moment["default"].isMoment(date) ? date : (0, _toMomentObject["default"])(date, currentFormat);
  if (!dateObj) return null;
  return dateObj.format(_constants.DISPLAY_FORMAT);
}
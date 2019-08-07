"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = toMomentObject;

var _moment = _interopRequireDefault(require("moment"));

require("moment/locale/fr");

require("moment/locale/it");

require("moment/locale/es");

require("moment/locale/pl");

require("moment/locale/ru");

require("moment/locale/pt");

require("moment/locale/nl");

var _constants = require("../constants");

function toMomentObject(dateString, customFormat) {
  var dateFormats = customFormat ? [customFormat, _constants.DISPLAY_FORMAT, _constants.ISO_FORMAT] : [_constants.DISPLAY_FORMAT, _constants.ISO_FORMAT];
  var date = (0, _moment["default"])(dateString, dateFormats, true);
  return date.isValid() ? date.hour(12) : null;
}
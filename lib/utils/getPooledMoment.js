"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getPooledMoment;

var _moment = _interopRequireDefault(require("moment"));

require("moment/locale/fr");

require("moment/locale/it");

require("moment/locale/es");

require("moment/locale/pl");

require("moment/locale/ru");

require("moment/locale/pt");

require("moment/locale/nl");

var momentPool = new Map();

function getPooledMoment(dayString) {
  if (!momentPool.has(dayString)) {
    momentPool.set(dayString, (0, _moment["default"])(dayString));
  }

  return momentPool.get(dayString);
}
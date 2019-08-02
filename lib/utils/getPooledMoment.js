"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = getPooledMoment;

var _momentWithLocales = _interopRequireDefault(require("moment/min/moment-with-locales.min"));

var momentPool = new Map();

function getPooledMoment(dayString) {
  if (!momentPool.has(dayString)) {
    momentPool.set(dayString, (0, _momentWithLocales["default"])(dayString));
  }

  return momentPool.get(dayString);
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _system = require("@mui/system");

/**
 * Mobile (extra small phone): screen < 768px / container (width 100%)
 * Tablet (medium devices): 768px <= screen < 992px / container (max-width: 720px)
 * Tablet (large devices): 992px <= screen < 1200px / container (max-width: 960px)
 * Desktops (extra large): screen >= 1200px / container (max-width: 1140px)
 */
const breakpoints = (0, _system.createBreakpoints)({
  values: {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200
  }
});
var _default = breakpoints;
exports.default = _default;
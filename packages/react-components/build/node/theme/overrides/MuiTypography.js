"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _typography = require("../typography");

const MuiTypography = {
  defaultProps: {
    variantMapping: (0, _extends2.default)({}, _typography.variantMappingTypography)
  },
  styleOverrides: {
    root: {
      fontFamily: _typography.font,
      // need checking remove
      // letterSpacing: 0,
      '& > p': {
        margin: 0,
        padding: 0
      }
    }
  }
};
var _default = MuiTypography;
exports.default = _default;
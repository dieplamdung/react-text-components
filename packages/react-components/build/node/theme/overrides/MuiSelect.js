"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _colors = _interopRequireDefault(require("../colors"));

var _constants = require("../../utils/viewport/constants");

var _breakpoints = _interopRequireDefault(require("../breakpoints"));

const MuiSelect = {
  styleOverrides: {
    root: {
      width: '100%'
    },
    select: {
      color: _colors.default.primary.bandaiNamcoBlack,
      padding: '18.5px 32px 18.5px 32px',
      '&.Mui-disabled': {
        color: _colors.default.neutral.neutral5
      },
      [_breakpoints.default.down(_constants.MOBILE_LIMIT)]: {
        fontSize: '14px'
      }
    }
  },
  variants: []
};
var _default = MuiSelect;
exports.default = _default;
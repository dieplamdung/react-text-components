"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _colors = _interopRequireDefault(require("../colors"));

var _constants = require("../../utils/viewport/constants");

var _breakpoints = _interopRequireDefault(require("../breakpoints"));

const MuiList = {
  styleOverrides: {
    root: {
      width: '100%',
      // maxHeight: '224px',
      backgroundColor: 'rgba(237, 237, 237, 0.8)',
      '& li': {
        color: _colors.default.primary.dark,
        fontSize: '16px',
        '&:hover': {
          background: 'rgba(221, 221, 221, 0.8)'
        },
        '&.Mui-selected': {
          background: 'rgba(221, 221, 221, 0.8)'
        },
        [_breakpoints.default.down(_constants.MOBILE_LIMIT)]: {
          fontSize: '14px',
          paddingTop: '3px',
          paddingBottom: '3px'
        }
      }
    }
  },
  variants: []
};
var _default = MuiList;
exports.default = _default;
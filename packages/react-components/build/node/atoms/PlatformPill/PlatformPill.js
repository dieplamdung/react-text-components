"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = PlatformPill;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _useMediaQuery = _interopRequireDefault(require("@mui/material/useMediaQuery"));

var _isStringEmpty = require("../../utils/isStringEmpty");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

// Types
function PlatformPill(props) {
  const {
    platform
  } = props;
  const isMobile = (0, _useMediaQuery.default)(themes => themes.breakpoints.down('lg'));

  if ((0, _isStringEmpty.isStringEmptyOrBlank)(platform)) {
    // if platform is an empty string or whitespace, return null
    return null;
  }

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Chip, {
    label: platform,
    variant: "outlined",
    sx: {
      minWidth: isMobile ? '0' : '40px',
      height: '100%',
      padding: '3px 0',
      color: isMobile ? _colors.default.neutral.neutral2 : _colors.default.primary.bandaiNamcoWhite,
      borderColor: isMobile ? _colors.default.neutral.neutral5 : _colors.default.accent.accentWhite[2],
      borderRadius: '5px',
      span: {
        paddingLeft: '6px',
        paddingRight: '6px',
        fontSize: '10px',
        lineHeight: isMobile ? '12px' : '14px',
        fontWeight: 700
      }
    }
  });
}
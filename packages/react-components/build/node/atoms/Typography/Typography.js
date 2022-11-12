"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("@mui/material/Typography"));

var _jsxRuntime = require("react/jsx-runtime");

/**
 * Primary UI component for user interaction
 */
const Typography = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, (0, _extends2.default)({}, props, {
    ref: ref
  }));
});

var _default = Typography;
exports.default = _default;
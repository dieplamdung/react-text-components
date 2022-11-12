"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withMobileCheck = withMobileCheck;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _styles = require("@mui/styles");

var _material = require("@mui/material");

var _viewport = require("../utils/viewport");

var _jsxRuntime = require("react/jsx-runtime");

function withMobileCheck(WrappedComponent) {
  const ComponentWithMobileCheck = props => {
    const theme = (0, _styles.useTheme)();
    const isMobileDown = (0, _material.useMediaQuery)((0, _viewport.MobileDown)(theme));
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(WrappedComponent, (0, _extends2.default)({}, props, {
      isMobile: isMobileDown
    }));
  };

  return ComponentWithMobileCheck;
}
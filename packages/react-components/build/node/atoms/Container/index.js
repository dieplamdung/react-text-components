"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _constants = require("../../utils/viewport/constants");

var _jsxRuntime = require("react/jsx-runtime");

// Import viewport specification

/**
 * Wrapper for the component to set max-width and others common style
 */
const Container = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    children,
    sx
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Container, (0, _extends2.default)({
    ref: ref
  }, props, {
    sx: (0, _extends2.default)({
      maxWidth: {
        xl: _constants.DESKTOP_MAX_WIDTH,
        lg: _constants.SMALL_DESKTOP_MAX_WIDTH,
        md: _constants.TABLET_MAX_WIDTH,
        xs: _constants.MOBILE_MAX_WIDTH
      },
      padding: '0 16px'
    }, sx || {}),
    children: children
  }));
});

var _default = Container;
exports.default = _default;
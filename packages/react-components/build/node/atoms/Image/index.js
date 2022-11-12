"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Image;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _jsxRuntime = require("react/jsx-runtime");

function Image(props) {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, (0, _extends2.default)({
    component: "img"
  }, props, {
    sx: (0, _extends2.default)({
      verticalAlign: 'middle',
      maxWidth: '100%',
      maxHeight: '100%'
    }, (props == null ? void 0 : props.sx) || {})
  }));
}
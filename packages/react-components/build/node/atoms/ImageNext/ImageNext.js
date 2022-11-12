"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _jsxRuntime = require("react/jsx-runtime");

const ImageNext = props => {
  const {
    component
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    children: component
  });
};

var _default = ImageNext;
exports.default = _default;
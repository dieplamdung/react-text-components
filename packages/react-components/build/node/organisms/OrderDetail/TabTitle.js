"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _jsxRuntime = require("react/jsx-runtime");

function TabTitle(props) {
  const {
    title,
    isMin = false
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      width: "100%",
      paddingBottom: "16px",
      position: "relative",
      "&:before": {
        content: "' '",
        position: "absolute",
        width: "100%",
        bottom: "0px",
        left: "0px",
        borderBottom: "1px solid #DDDDDD",
        opacity: "0.5"
      }
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: isMin ? "h5" : 'h2',
      sx: {
        fontWeight: "700"
      },
      children: title
    })
  });
}

var _default = TabTitle;
exports.default = _default;
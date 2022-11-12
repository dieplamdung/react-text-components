"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = BulletPoint;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Icon = require("../Icon");

var _Typography = _interopRequireDefault(require("../Typography"));

var _HtmlRenderer = _interopRequireDefault(require("../HtmlRenderer"));

var _jsxRuntime = require("react/jsx-runtime");

// Types
function BulletPoint(props) {
  const {
    label = ''
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      display: 'inline-block'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        gap: '12px'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconChecked, {
        sx: {
          width: "16px",
          height: "16px",
          marginTop: {
            xs: "2px",
            md: "4px"
          }
        },
        htmlColor: _colors.default.primary.bandaiNamcoBlack
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: 'p6',
        color: _colors.default.neutral.neutral2,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
          component: "div",
          value: label
        })
      })]
    })
  });
}
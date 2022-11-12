"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

// Modules
// Styles
const NavigationBarDropDown = props => {
  const {
    data,
    languagesDefault = ""
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      position: 'relative',
      '&:after': {
        content: "''",
        height: '14px',
        position: 'absolute',
        bottom: '100%',
        left: '0px',
        right: '0px'
      }
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      component: 'ul',
      sx: {
        padding: '0px',
        margin: '0px',
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: 'rgb(237 237 237 / 80%)'
      },
      children: !!data && data.map(item => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        component: 'li',
        sx: {
          listStyle: 'none',
          transition: 'all .4s',
          padding: '11px 16px',
          backgroundColor: languagesDefault === item.label ? 'rgb(221 221 221 / 80%)' : "",
          '&:hover': {
            backgroundColor: 'rgb(221 221 221 / 80%)'
          },
          '& a': {
            color: `${_colors.default.primary.dark} !important`,
            textDecoration: 'none'
          },
          pointerEvents: languagesDefault === item.label ? 'none' : 'auto'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
          href: item.href,
          sx: {
            textDecoration: 'none',
            color: `${_colors.default.primary.dark} !important`
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p6",
            children: item.label
          })
        })
      }, item.label))
    })
  });
};

var _default = NavigationBarDropDown;
exports.default = _default;
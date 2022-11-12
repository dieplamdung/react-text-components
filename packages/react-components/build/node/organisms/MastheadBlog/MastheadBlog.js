"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

// React and components
const MastheadBlog = props => {
  const {
    mainImageNext = '',
    mainImage = '',
    alt = ''
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        minWidth: "110px",
        borderRadius: '10px',
        overflow: "hidden",
        height: '364px',
        position: 'relative',
        '& img': {
          objectFit: 'cover',
          display: 'block',
          width: '100%',
          height: '100%'
        },
        "& span": {
          width: '100% !important',
          height: '100% !important'
        }
      },
      children: mainImageNext || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: mainImage,
        alt: alt != null ? alt : ''
      })
    })
  });
};

var _default = MastheadBlog;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _jsxRuntime = require("react/jsx-runtime");

const Tags = ({
  color,
  title = '',
  disabled = false,
  showBackground = true,
  hoverPermission = true
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      borderRadius: '5px',
      display: 'inline-block',
      pointerEvents: disabled ? 'none' : 'auto',
      // cursor: 'pointer',
      textAlign: 'center',
      '& p': {
        padding: '4px 8px 6px',
        transition: 'all .4s',
        zIndex: 1,
        position: 'relative',
        borderRadius: '5px',
        border: showBackground ? "1px solid transparent" : `1px solid ${color}`
      },
      '& .bgTag': {
        transition: 'all .4s'
      }
    },
    children: title && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        position: 'relative',
        '&:hover': hoverPermission ? {
          '& p': {
            color: '#fff'
          },
          '& .bgTag': {
            opacity: showBackground ? 1 : "20%"
          }
        } : {}
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "l1",
        color: disabled ? _colors.default.primary.bandaiNamcoWhite : color,
        children: typeof title === "string" ? title == null ? void 0 : title.toUpperCase() : title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        className: "bgTag",
        sx: {
          backgroundColor: disabled ? _colors.default.neutral.neutral5 : color,
          opacity: disabled ? 1 : `${showBackground ? '10%' : "0"}`,
          position: 'absolute',
          top: '0px',
          bottom: '0px',
          left: '0px',
          right: '0px',
          borderRadius: '5px'
        }
      })]
    })
  });
};

var _default = Tags;
exports.default = _default;
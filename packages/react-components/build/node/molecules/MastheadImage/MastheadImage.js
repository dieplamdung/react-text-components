"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

// Styles
const MastheadImage = ({
  mainImage,
  description
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        height: {
          xs: '192px',
          md: '363px'
        },
        backgroundImage: `url(${mainImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center left 50%',
        backgroundRepeat: 'no-repeat'
      }
    }), description && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          marginTop: {
            xs: '56px',
            md: '116px'
          },
          maxWidth: '736px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "h4",
          sx: {
            color: _colors.default.primary.bandaiNamcoBlack
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
            component: "p",
            value: description
          })
        })
      })
    })]
  });
};

var _default = MastheadImage;
exports.default = _default;
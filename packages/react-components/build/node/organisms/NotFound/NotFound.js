"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

// import modules
const NotFound = props => {
  const {
    title,
    description,
    iconNotFound
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        display: 'flex',
        justifyContent: 'center',
        "& img": {
          width: {
            xs: "107px",
            md: "160px"
          }
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: iconNotFound,
        alt: title
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "h4",
      color: _colors.default.primary.bandaiNamcoBlack,
      sx: {
        marginTop: '30px',
        textAlign: 'center'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
        component: "div",
        value: title
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "p6",
      color: _colors.default.neutral.neutral2,
      sx: {
        textAlign: 'center',
        marginTop: '8px'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
        component: "div",
        value: description
      })
    })]
  });
};

var _default = NotFound;
exports.default = _default;
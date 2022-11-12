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

var _svg;

function TabStatus(props) {
  const {
    title,
    description
  } = props;

  const IconCheck = _svg || (_svg = /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
      width: "26",
      height: "26",
      rx: "13",
      fill: "#00B0B8"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M18 9.83594L11.0737 16.8668L7.40039 13.2144",
      stroke: "white",
      strokeWidth: "1.67924",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  }));

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      margin: {
        xs: "32px 0px 36px 0px",
        md: "61px 0px 68px 0px"
      },
      padding: {
        xs: "14px 20px",
        md: "14px 18px"
      },
      borderRadius: "10px",
      background: "rgba(0, 176, 184, 0.05)",
      display: "flex",
      alignItems: {
        xs: "center",
        md: "flex-start"
      }
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        marginRight: "12px",
        lineHeight: "0px",
        "& svg": {
          marginTop: {
            xs: "0px",
            md: "2px"
          },
          width: {
            xs: "20px",
            md: "26px"
          },
          height: {
            xs: "20px",
            md: "26px"
          }
        }
      },
      children: IconCheck
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: "flex",
        flexDirection: "column"
      },
      children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p3",
        color: _colors.default.primary.bandaiNamcoBlack,
        sx: {
          lineHeight: {
            xs: "24px",
            md: "22px"
          }
        },
        children: title
      }), description && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p6",
        color: _colors.default.neutral.neutral2,
        sx: {
          lineHeight: {
            xs: "20px",
            md: "22px"
          }
        },
        children: description
      })]
    })]
  });
}

var _default = TabStatus;
exports.default = _default;
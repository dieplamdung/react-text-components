"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireDefault(require("react"));

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

// import modules
// define function
const Quote = ({
  content,
  author
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      display: "flex",
      flexDirection: "column",
      padding: {
        xs: "4px 16px 4px 20px",
        md: "14px 36px 14px 36px"
      },
      background: _colors.default.neutral.white,
      position: "relative",
      "&::before": {
        content: "''",
        position: "absolute",
        top: "0px",
        left: "0px",
        height: "100%",
        width: {
          xs: "4px",
          md: "8px"
        },
        background: _colors.default.secondary.bandaiNamcoGreen
      }
    },
    children: [!!content && (typeof content === "string" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "p3",
      color: _colors.default.neutral.neutral2,
      sx: {
        lineHeight: {
          xs: "22px",
          md: "24px"
        },
        letterSpacing: "-0.2px"
      },
      children: content
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        "& div": {
          margin: "0px",
          padding: "0px"
        },
        "& p": {
          fontWeight: 600,
          color: _colors.default.neutral.neutral2,
          fontSize: {
            xs: "16px",
            md: "18px"
          },
          lineHeight: {
            xs: "22px",
            md: "24px"
          },
          letterSpacing: "-0.2px",
          margin: "0px",
          padding: "0px"
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
        component: "p",
        value: content
      })
    })), !!author && (typeof author === "string" ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "p8",
      color: _colors.default.neutral.neutral2,
      sx: {
        marginTop: {
          xs: "24px",
          md: "28px"
        },
        lineHeight: {
          xs: "18px",
          md: "19px"
        }
      },
      children: author
    }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        marginTop: {
          xs: "24px",
          md: "28px"
        },
        "& div": {
          margin: "0px",
          padding: "0px"
        },
        "& p": {
          fontWeight: 400,
          color: _colors.default.neutral.neutral2,
          fontSize: {
            xs: "12px",
            md: "14px"
          },
          lineHeight: {
            xs: "18px",
            md: "19px"
          },
          letterSpacing: "-0.2px",
          margin: "0px",
          padding: "0px"
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
        component: "p",
        value: author
      })
    }))]
  });
};

var _default = Quote;
exports.default = _default;
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

var _svg;

function NeedHelp(props) {
  const {
    title,
    description
  } = props;

  const Icon = _svg || (_svg = /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23Z",
      fill: "#E60000",
      stroke: "#E60000",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M9.08984 9.00057C9.32495 8.33224 9.789 7.76868 10.3998 7.4097C11.0106 7.05073 11.7287 6.91951 12.427 7.03928C13.1253 7.15906 13.7587 7.52209 14.2149 8.0641C14.6712 8.6061 14.9209 9.29209 14.9198 10.0006C14.9198 12.0006 11.9198 13.0006 11.9198 13.0006",
      stroke: "white",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      d: "M12 17H12.01",
      stroke: "white",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  }));

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: "flex",
      width: "100%",
      padding: {
        xs: "32px 0px",
        md: "48px 0px"
      }
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        marginRight: "20px",
        marginTop: {
          xs: "4px",
          md: "10px"
        }
      },
      children: Icon
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        width: "100%"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        color: _colors.default.primary.bandaiNamcoBlack,
        sx: {
          fontSize: {
            xs: "22px",
            md: "32px"
          },
          lineHeight: {
            xs: "28px",
            md: "40px"
          },
          fontWeight: "700",
          marginBottom: "8px"
        },
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        color: _colors.default.neutral.neutral2,
        sx: {
          fontSize: "14px",
          lineHeight: "20px",
          letterSpacing: "-0.2px",
          "& a": {
            color: _colors.default.primary.bandaiNamcoBlack,
            position: "relative",
            textDecoration: "none",
            whiteSpace: "nowrap",
            "&:before": {
              content: "' '",
              position: "absolute",
              width: "100%",
              left: "0px",
              bottom: "0px",
              borderBottom: `1px solid ${_colors.default.primary.bandaiNamcoBlack}`
            }
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
          component: "p",
          value: description || ""
        })
      })]
    })]
  });
}

var _default = /*#__PURE__*/_react.default.memo(NeedHelp);

exports.default = _default;
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

function OrderShipping(props) {
  const {
    title,
    titleShipping,
    description,
    value
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      padding: {
        xs: "32px 0px",
        md: "48px 0px"
      },
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
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      color: _colors.default.primary.bandaiNamcoBlack,
      sx: {
        fontSize: {
          xs: "20px",
          md: "26px"
        },
        lineHeight: {
          xs: "26px",
          md: "32px"
        },
        fontWeight: "700",
        marginBottom: {
          xs: "24px",
          md: "28px"
        }
      },
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: "flex",
          flexDirection: "column",
          width: "100%"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          color: _colors.default.primary.bandaiNamcoBlack,
          sx: {
            fontSize: "16px",
            lineHeight: "22px",
            fontWeight: "700",
            marginBottom: "1px",
            letterSpacing: "-0.2px"
          },
          children: titleShipping
        }), !!description && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          color: _colors.default.neutral.neutral2,
          sx: {
            fontSize: "14px",
            lineHeight: "19px",
            fontWeight: "400",
            letterSpacing: "-0.2px",
            "& div": {
              wordBreak: "break-word"
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
            component: "p",
            value: description != null ? description : ""
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        sx: {
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "22px",
          whiteSpace: "nowrap"
        },
        children: value
      })]
    })]
  });
}

var _default = /*#__PURE__*/_react.default.memo(OrderShipping);

exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = OrderSummary;

var _system = require("@mui/system");

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function OrderSummary(props) {
  const {
    titleOrder,
    valueOrder,
    titleDate,
    valueDate
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_system.Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      padding: {
        xs: "28px 0px",
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
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_system.Box, {
      sx: {
        display: "flex",
        marginBottom: "8px"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p5",
        color: _colors.default.primary.bandaiNamcoBlack,
        children: titleOrder
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
        variant: "p5",
        color: _colors.default.neutral.neutral2,
        sx: {
          fontWeight: "400"
        },
        children: ["\xA0 ", valueOrder]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_system.Box, {
      sx: {
        display: "flex"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p5",
        color: _colors.default.primary.bandaiNamcoBlack,
        children: titleDate
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
        variant: "p5",
        color: _colors.default.neutral.neutral2,
        sx: {
          fontWeight: "400"
        },
        children: ["\xA0 ", valueDate]
      })]
    })]
  });
}
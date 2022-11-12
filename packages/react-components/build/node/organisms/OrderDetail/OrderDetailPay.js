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

function OrderDetailPay(props) {
  const {
    listOrderPay
  } = props;
  const lengthList = listOrderPay == null ? void 0 : listOrderPay.length;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
    children: !!(listOrderPay != null && listOrderPay.length) && listOrderPay.map((order, index) => {
      return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: {
            xs: "12px",
            md: "16px"
          },
          "&:last-child": {
            marginBottom: "0px"
          }
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            display: "flex",
            flexDirection: "column",
            paddingRight: "8px",
            maxWidth: {
              xs: "150px",
              md: "400px"
            }
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            color: _colors.default.primary.bandaiNamcoBlack,
            sx: {
              fontSize: index + 1 === lengthList ? "20px" : "16px",
              fontWeight: "700",
              lineHeight: index + 1 === lengthList ? "26px" : "22px",
              letterSpacing: "-0.2px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              display: "block",
              textOverflow: "ellipsis"
            },
            children: order == null ? void 0 : order.title
          }), !!(order != null && order.note) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            color: _colors.default.neutral.neutral2,
            sx: {
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "19px",
              marginTop: "1px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              display: "block",
              textOverflow: "ellipsis"
            },
            children: order == null ? void 0 : order.note
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          color: index + 1 === lengthList ? _colors.default.primary.bandaiNamcoBlack : _colors.default.neutral.neutral2,
          sx: {
            fontSize: index + 1 === lengthList ? "18px" : "16px",
            fontWeight: index + 1 === lengthList ? "700" : "400",
            lineHeight: index + 1 === lengthList ? "24px" : "22px",
            letterSpacing: "-0.2px",
            whiteSpace: "nowrap"
          },
          children: order == null ? void 0 : order.value
        })]
      }, index);
    })
  });
}

var _default = OrderDetailPay;
exports.default = _default;
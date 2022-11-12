"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _material = require("@mui/material");

var _jsxRuntime = require("react/jsx-runtime");

// import modules
// Types
// define function
const OrderItem = props => {
  const {
    nextImage,
    hrefImg,
    alt,
    status,
    buttonProps,
    titleButton,
    itemDetail,
    nextLink,
    href
  } = props;
  const isMobileBigger = (0, _material.useMediaQuery)('(max-width:322px)', {
    noSsr: true
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      padding: isMobileBigger ? "14px" : "26px",
      border: "1px solid #DDDDDD",
      borderRadius: "20px",
      display: "flex",
      width: "100%"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        minWidth: {
          xs: "78px",
          md: "172px"
        },
        width: {
          xs: "78px",
          md: "172px"
        },
        height: {
          xs: "78px",
          md: "172px"
        },
        borderRadius: {
          xs: "10px",
          md: "20px"
        },
        overflow: "hidden",
        marginRight: "20px",
        "& span": {
          width: "100% !important",
          height: "100% !important"
        },
        "& img": {
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }
      },
      children: nextImage || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: hrefImg,
        alt: alt || ""
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        flex: "1",
        display: "flex",
        flexDirection: "column"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          background: (status == null ? void 0 : status.color) || "#0169B2",
          width: isMobileBigger ? "min-content" : "fit-content",
          display: "flex",
          alignItems: "center",
          color: "#fff",
          fontWeight: "700",
          fontSize: "10px",
          lineHeight: "14px",
          textTransform: "uppercase",
          padding: "4px 8px 6px 8px",
          borderRadius: "5px",
          marginBottom: "6px"
        },
        children: status == null ? void 0 : status.label
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p3",
        sx: {
          marginBottom: "6px",
          wordBreak: "break-word"
        },
        children: itemDetail == null ? void 0 : itemDetail.title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p8",
        sx: {
          wordBreak: "break-word",
          color: "#737373"
        },
        children: itemDetail == null ? void 0 : itemDetail.oderId
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p8",
        sx: {
          color: "#737373",
          wordBreak: "break-word"
        },
        children: itemDetail == null ? void 0 : itemDetail.date
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        sx: {
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row"
          },
          justifyContent: "space-between",
          alignItems: {
            xs: "flex-start",
            lg: "center"
          },
          marginTop: "6px"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
          sx: {
            display: "flex",
            flexDirection: isMobileBigger ? "column" : "row",
            alignItems: isMobileBigger ? "flex-start" : "center",
            marginBottom: {
              xs: "12px",
              lg: "0px"
            },
            gap: "4px",
            flexWrap: "wrap"
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h6",
            sx: {
              maxWidth: {
                xs: "150px",
                md: "200px"
              },
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis"
            },
            children: itemDetail == null ? void 0 : itemDetail.price
          }), (itemDetail == null ? void 0 : itemDetail.price) !== "0" && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p6",
            sx: {
              fontSize: "14px",
              lineHeight: "20px",
              color: "#737373" // marginLeft: isMobileBigger ? "0px" : "4px",
              // marginTop: isMobileBigger ? "4px" : "0px",

            },
            children: `(${itemDetail == null ? void 0 : itemDetail.amount} ${itemDetail == null ? void 0 : itemDetail.labelAmount})`
          })]
        }), typeof nextLink === 'function' ? nextLink == null ? void 0 : nextLink(href, /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, buttonProps, {
          children: titleButton
        }))) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, buttonProps, {
          children: titleButton
        }))]
      })]
    })]
  });
};

var _default = /*#__PURE__*/_react.default.memo(OrderItem);

exports.default = _default;
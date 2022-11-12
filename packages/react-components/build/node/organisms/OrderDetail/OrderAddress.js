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

function OrderAddress(props) {
  const {
    title,
    titleShipping,
    contentShipping,
    titleBilling,
    contentBilling
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
        maxWidth: "540px",
        justifyContent: "space-between",
        flexDirection: {
          xs: "column",
          md: "row"
        }
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: {
            xs: "100%",
            md: "258px"
          }
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          color: _colors.default.primary.bandaiNamcoBlack,
          sx: {
            fontSize: {
              xs: "16px",
              md: "18px"
            },
            lineHeight: {
              xs: "22px",
              md: "24px"
            },
            fontWeight: "700",
            marginBottom: "8px",
            letterSpacing: "-0.2px"
          },
          children: titleShipping
        }), !!contentShipping && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          color: _colors.default.neutral.neutral2,
          sx: {
            fontSize: {
              xs: "16px",
              md: "14px"
            },
            lineHeight: {
              xs: "22px",
              md: "20px"
            },
            fontWeight: "400",
            letterSpacing: "-0.2px",
            "& div": {
              wordBreak: "break-word"
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
            component: "p",
            value: contentShipping != null ? contentShipping : ""
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: {
            xs: "100%",
            md: "258px"
          },
          marginTop: {
            xs: "24px",
            md: "0px"
          }
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          color: _colors.default.primary.bandaiNamcoBlack,
          sx: {
            fontSize: {
              xs: "16px",
              md: "18px"
            },
            lineHeight: {
              xs: "22px",
              md: "24px"
            },
            fontWeight: "700",
            marginBottom: "8px",
            letterSpacing: "-0.2px"
          },
          children: titleBilling
        }), !!contentBilling && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          color: _colors.default.neutral.neutral2,
          sx: {
            fontSize: {
              xs: "16px",
              md: "14px"
            },
            lineHeight: {
              xs: "22px",
              md: "20px"
            },
            fontWeight: "400",
            letterSpacing: "-0.2px",
            "& div": {
              wordBreak: "break-word"
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
            component: "p",
            value: contentBilling != null ? contentBilling : ""
          })
        })]
      })]
    })]
  });
}

var _default = /*#__PURE__*/_react.default.memo(OrderAddress);

exports.default = _default;
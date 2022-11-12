"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

const WeReceivedMsgContainer = ({
  iconContent,
  title,
  description,
  labelBtnLeft = "See what’s new",
  hrefBtnLeft,
  labelBtnRight = "Shop games",
  hrefBtnRight
}) => {
  const IconImage = "https://images.ctfassets.net/hnoi7ctzfs57/4dLqNFjt0Wd1djAajkMEi9/acfe8390c12b9cbe3aec8fefe0c3eedf/Group_124113.svg";
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: {
        xs: "center",
        md: "flex-start"
      },
      flexDirection: {
        xs: "column",
        md: "row"
      }
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        marginBottom: {
          xs: "32px",
          md: "0px"
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          maxWidth: {
            xs: "92px",
            md: "124px"
          },
          maxHeight: '110px',
          marginRight: {
            xs: "0px",
            md: "52px"
          },
          "& img": {
            maxWidth: "100%",
            width: "100%",
            height: {
              xs: '100%',
              md: '110px'
            }
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: iconContent || IconImage,
          alt: "icon received Msg"
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        maxWidth: {
          xs: "100%",
          md: "379px"
        }
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h2",
        color: "#121212",
        sx: {
          textAlign: {
            xs: "center",
            md: "left"
          },
          fontSize: {
            xs: "32px",
            md: "46px"
          },
          lineHeight: {
            xs: "40px",
            md: "54px"
          },
          letterSpacing: {
            xs: "-0.8px",
            md: "-1px"
          }
        },
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p4",
        color: _colors.default.neutral.neutral2,
        sx: {
          textAlign: {
            xs: "center",
            md: "left"
          },
          marginTop: {
            xs: "8px",
            md: "16px"
          },
          fontSize: "16px",
          lineHeight: "22px",
          letterSpacing: "-0.2px"
        },
        children: description
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row"
          },
          justifyContent: {
            xs: "center",
            md: "flex-start"
          },
          alignItems: "center",
          marginTop: {
            xs: "48px",
            md: "44px"
          }
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
          externalLink: hrefBtnLeft || "",
          variant: "primaryDark",
          sx: {
            width: "165px",
            height: "46px !important",
            marginRight: {
              xs: "0px",
              md: "16px"
            },
            marginBottom: {
              xs: "16px",
              md: "0px"
            }
          },
          children: labelBtnLeft
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
          externalLink: hrefBtnRight || "",
          variant: "secondary",
          sx: {
            width: "165px",
            height: "46px !important"
          },
          children: labelBtnRight
        })]
      })]
    })]
  });
};

var _default = WeReceivedMsgContainer;
exports.default = _default;
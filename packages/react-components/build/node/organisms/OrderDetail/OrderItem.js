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

function OrderItem(props) {
  const isMobileBigger = (0, _material.useMediaQuery)('(max-width:322px)', {
    noSsr: true
  });
  const {
    nextImage,
    hrefImg,
    alt = "",
    titleGame,
    listPlatform,
    gift,
    qty,
    amount,
    priceOld,
    price
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: "flex",
      width: "100%",
      maxWidth: "530px",
      marginBottom: {
        xs: "28px",
        md: "48px"
      },
      "&:last-child": {
        marginBottom: "0px"
      }
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        minWidth: {
          xs: "90px",
          md: "165px"
        },
        width: {
          xs: "90px",
          md: "165px"
        },
        height: {
          xs: "90px",
          md: "165px"
        },
        borderRadius: {
          xs: "10px",
          md: "20px"
        },
        marginRight: "20px",
        overflow: "hidden",
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
        src: hrefImg != null ? hrefImg : "",
        alt: alt
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        width: "100%",
        display: "flex",
        flexDirection: "column",
        padding: {
          xs: "0px",
          md: "18px 0px"
        }
      },
      children: [titleGame && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p2",
        color: _colors.default.primary.bandaiNamcoBlack,
        sx: {
          fontWeight: "600",
          marginBottom: "8px",
          wordBreak: "break-word"
        },
        children: titleGame
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          width: "100%",
          display: "flex",
          flexDirection: "column"
        },
        children: [!!(listPlatform != null && listPlatform.length) && listPlatform.map((item, index) => {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p7",
            color: _colors.default.neutral.neutral2,
            sx: {
              fontWeight: "700",
              marginBottom: "4px",
              lineHeight: {
                xs: "18px",
                md: "19px"
              },
              wordBreak: "break-word",
              "&:last-child": {
                marginBottom: "0px"
              }
            },
            children: item
          }, index);
        }), !!gift && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p7",
          color: _colors.default.neutral.neutral2,
          sx: {
            fontWeight: "700",
            marginBottom: "4px",
            lineHeight: {
              xs: "18px",
              md: "19px"
            },
            wordBreak: "break-word",
            "&:last-child": {
              marginBottom: "0px"
            }
          },
          children: gift
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: "flex",
          justifyContent: "space-between",
          flexDirection: isMobileBigger && priceOld ? "column" : "row",
          marginTop: isMobileBigger && priceOld ? "20px" : "28px"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
          variant: "p5",
          sx: {
            fontWeight: "700",
            whiteSpace: "nowrap"
          },
          children: [qty, "\u2003\u2002", amount]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            display: "flex",
            alignItems: "center",
            marginTop: isMobileBigger && priceOld ? "8px" : "0px"
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p5",
            color: _colors.default.neutral.neutral4,
            sx: {
              fontWeight: "400",
              textDecoration: "line-through"
            },
            children: priceOld
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p5",
            sx: {
              fontWeight: "700",
              marginLeft: "4px"
            },
            children: price
          })]
        })]
      })]
    })]
  });
}

var _default = /*#__PURE__*/_react.default.memo(OrderItem);

exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../../theme/colors"));

var _Tabs = _interopRequireDefault(require("./Tabs"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ProductItem(props) {
  var _span;

  const {
    tabList,
    nextLink,
    href,
    hrefImg = "",
    isDLC = false,
    titleDLC,
    listIcon = [],
    language,
    titleGame,
    titleFrom,
    price,
    priceOld,
    isShowBottom = false
  } = props;

  const returnTitle = () => {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        position: "relative",
        textDecoration: "none"
      },
      children: [isDLC && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        sx: {
          position: "absolute",
          top: "0px",
          left: "0px",
          fontSize: "10px",
          lineHeight: {
            xs: "12px",
            md: "14px"
          },
          padding: "4px 8px 6px 8px",
          borderRadius: "5px",
          fontWeight: "700",
          color: "#fff",
          background: _colors.default.primary.bandaiNamcoBlack,
          textTransform: "uppercase",
          letterSpacing: "0.2px"
        },
        children: titleDLC
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
        variant: "p1",
        sx: {
          wordBreak: "break-word",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          "-webkit-line-clamp": "2",

          /* number of lines to show */
          lineClamp: "2",
          WebkitBoxOrient: 'vertical',
          "& span": {
            fontSize: "10px",
            lineHeight: "14px",
            padding: "4px 8px 6px 8px",
            borderRadius: "5px",
            fontWeight: "700",
            color: "#fff",
            background: _colors.default.primary.bandaiNamcoBlack,
            opacity: "0",
            marginRight: {
              xs: "4px",
              md: "8px"
            }
          }
        },
        children: [isDLC && (_span || (_span = /*#__PURE__*/(0, _jsxRuntime.jsx)("span", {
          children: titleDLC
        }))), titleGame]
      })]
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      paddingBottom: isShowBottom ? {} : {
        md: "114px",
        xs: "78px"
      }
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tabs.default, {
      tabList: tabList
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        width: "100%",
        paddingBottom: "100%",
        position: "relative",
        overflow: "hidden",
        marginBottom: {
          xs: "20px",
          md: "30px"
        },
        borderRadius: {
          xs: "10px",
          md: "20px"
        },
        "& a": {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%"
        },
        "& span": {
          width: "100% !important",
          height: "100% !important"
        },
        "& img": {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "all 0.3s",
          "&:hover": {
            transform: "scale(1.2)"
          }
        }
      },
      children: typeof nextLink === 'function' ? nextLink == null ? void 0 : nextLink(href, /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: hrefImg,
        alt: ""
      })) : /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: hrefImg,
        alt: ""
      })
    }), typeof nextLink === 'function' ? nextLink == null ? void 0 : nextLink(href, returnTitle()) : returnTitle(), !!(listIcon != null && listIcon.length) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        paddingTop: "18px",
        display: "flex",
        gap: "14px",
        flexWrap: "wrap",
        alignItems: "center"
      },
      children: listIcon == null ? void 0 : listIcon.map((item, index) => {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.default.Fragment, {
          children: /*#__PURE__*/_react.default.createElement(item)
        }, index);
      })
    }), !!language && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "l2",
      color: _colors.default.neutral.neutral2,
      sx: {
        marginTop: "16px",
        textTransform: "uppercase"
      },
      children: language
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        paddingTop: {
          xs: "20px",
          md: "16px"
        }
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        color: _colors.default.neutral.neutral2,
        sx: {
          fontSize: "10px",
          lineHeight: "12px",
          letterSpacing: "0.2px",
          fontWeight: "600",
          marginRight: "8px",
          marginTop: {
            xs: "6px",
            md: "8px"
          }
        },
        children: titleFrom
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row"
          },
          flexWrap: "wrap"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "h6",
          color: _colors.default.primary.bandaiNamcoBlack,
          sx: {
            letterSpacing: "-0.6px",
            marginRight: {
              xs: "0px",
              md: "12px"
            }
          },
          children: price
        }), !!priceOld && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          color: _colors.default.neutral.neutral2,
          sx: {
            fontSize: "10px",
            lineHeight: "14px",
            letterSpacing: "0.2px",
            fontWeight: "600",
            textDecoration: "line-through",
            marginTop: {
              xs: "2px",
              md: "8px"
            }
          },
          children: priceOld
        })]
      })]
    })]
  });
}

var _default = /*#__PURE__*/(0, _react.memo)(ProductItem);

exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = FreeGift;

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../../theme/colors"));

var _ModalGift = _interopRequireDefault(require("./ModalGift"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function FreeGift(props) {
  const {
    title,
    description,
    imgGift,
    titleGift,
    titleTab,
    isOfGift,
    isShowGift // isDisable

  } = props;
  const [open, setOpen] = (0, _react.useState)(false);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      marginTop: "44px",
      padding: {
        xs: "16px",
        md: "24px"
      },
      display: isShowGift ? "flex" : "none",
      flexDirection: "column",
      borderRadius: "8px",
      background: isOfGift ? " #F1F1F1" : "#E6F0F7" // opacity: isDisable ? "0.4" : "1",
      // pointerEvents: isDisable ? "none" : "auto",

    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "p5",
      sx: {
        paddingBottom: "8px"
      },
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "p8",
      color: "#7E7E7E",
      children: description
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        width: "100%",
        display: "flex",
        paddingTop: "16px"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          width: "68px",
          height: "68px",
          borderRadius: "8px",
          overflow: "hidden",
          "& img": {
            width: "100%",
            height: "100%",
            borderRadius: "8px"
          },
          cursor: "pointer"
        },
        onClick: () => setOpen(true),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: imgGift,
          alt: "free gift"
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "16px"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p5",
          sx: {
            lineHeight: {
              xs: "20px",
              md: "22px"
            }
          },
          children: titleGift
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            width: "fit-content",
            padding: "4px 8px",
            marginTop: "8px",
            background: _colors.default.neutral.neutral2,
            borderRadius: "5px",
            textTransform: "uppercase",
            color: "#fff",
            fontSize: "10px",
            lineHeight: "14px",
            letterSpacing: "0.2px",
            fontWeight: "700"
          },
          children: titleTab
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ModalGift.default, {
      open: open,
      onClose: () => setOpen(false),
      imgGift: imgGift
    })]
  });
}
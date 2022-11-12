"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _Icon = require("../../atoms/Icon");

var _viewport = require("../../utils/viewport");

var _jsxRuntime = require("react/jsx-runtime");

const Logo = ({
  href,
  onClose
}) => {
  const theme = (0, _material.useTheme)();
  const isMobileDown = (0, _material.useMediaQuery)((0, _viewport.MobileDown)(theme));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      width: {
        xs: "100%",
        md: "auto"
      },
      display: "flex",
      justifyContent: "space-between",
      alignItems: {
        xs: "center",
        md: "start"
      }
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
      href: href,
      sx: {
        textDecoration: "none",
        color: "#000000",
        lineHeight: "0px"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconBandaiNamco, {
        sx: {
          width: "127.96px",
          height: "29px"
        }
      })
    }), isMobileDown && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconClose, {
      htmlColor: "#C1C1C1",
      sx: {
        cursor: "pointer"
      },
      onClick: () => onClose == null ? void 0 : onClose()
    })]
  });
};

var _default = Logo;
exports.default = _default;
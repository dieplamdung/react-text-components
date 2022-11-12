"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _AddressAccount = _interopRequireDefault(require("../../molecules/AddressAccount"));

var _DetailAccount = _interopRequireDefault(require("../../molecules/DetailAccount"));

var _jsxRuntime = require("react/jsx-runtime");

function ContentAccount(props) {
  const {
    contentAccount,
    contentAddresses
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      width: "100%"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        width: "100%"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DetailAccount.default, (0, _extends2.default)({}, contentAccount))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        width: "100%"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_AddressAccount.default, (0, _extends2.default)({}, contentAddresses))
    })]
  });
}

var _default = ContentAccount;
exports.default = _default;
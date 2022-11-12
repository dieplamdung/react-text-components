"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _OrderItemList = _interopRequireDefault(require("../../molecules/OrderItemList"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ContentOrderList(props) {
  const {
    listOrder,
    propsButton,
    titleOrderEmpty,
    descriptionOrderEmpty,
    titleBtn
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      width: "100%"
    },
    children: [!(listOrder != null && listOrder.length) && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h5",
        color: _colors.default.primary.bandaiNamcoBlack,
        sx: {
          marginBottom: "8px"
        },
        children: titleOrderEmpty || "You have no orders yet"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p6",
        sx: {
          marginBottom: "24px"
        },
        children: descriptionOrderEmpty || "Start shopping for games and more!"
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, propsButton, {
        children: titleBtn || "Shop now"
      }))]
    }), !!(listOrder != null && listOrder.length) && listOrder.map((order, index) => {
      return /*#__PURE__*/(0, _react.createElement)(_OrderItemList.default, (0, _extends2.default)({}, order, {
        key: index
      }));
    })]
  });
}

var _default = ContentOrderList;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _OrderItem = _interopRequireDefault(require("./OrderItem"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function OrderItemList(props) {
  const {
    listOrder,
    titleGift,
    listGift
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      padding: {
        xs: "28px 0px",
        md: "48px 0px"
      },
      width: "100%",
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
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        width: "100%"
      },
      children: !!(listOrder != null && listOrder.length) && listOrder.map((order, index) => {
        return /*#__PURE__*/(0, _react.createElement)(_OrderItem.default, (0, _extends2.default)({}, order, {
          key: index
        }));
      })
    }), !!(listGift != null && listGift.length) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      color: _colors.default.neutral.neutral2,
      variant: "p3",
      sx: {
        fontWeight: "700",
        fontSize: "18px",
        lineHeight: "24px",
        marginTop: {
          xs: "36px",
          md: "40px"
        },
        marginBottom: "24px"
      },
      children: titleGift
    }), !!(listGift != null && listGift.length) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        width: "100%"
      },
      children: listGift.map((order, index) => {
        return /*#__PURE__*/(0, _react.createElement)(_OrderItem.default, (0, _extends2.default)({}, order, {
          key: index
        }));
      })
    })]
  });
}

var _default = OrderItemList;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _TabTitle = _interopRequireDefault(require("./TabTitle"));

var _TabStatus = _interopRequireDefault(require("./TabStatus"));

var _OrderSummary = _interopRequireDefault(require("./OrderSummary"));

var _OrderItemList = _interopRequireDefault(require("./OrderItemList"));

var _OrderDetailPay = _interopRequireDefault(require("./OrderDetailPay"));

var _OrderAddress = _interopRequireDefault(require("./OrderAddress"));

var _OrderShipping = _interopRequireDefault(require("./OrderShipping"));

var _OrderPayment = _interopRequireDefault(require("./OrderPayment"));

var _NeedHelp = _interopRequireDefault(require("./NeedHelp"));

var _jsxRuntime = require("react/jsx-runtime");

// Types
const OrderDetail = props => {
  const {
    titleTabMain,
    tabStatus,
    titleTabContent,
    orderSummary,
    listOrderItem = [],
    titleGift,
    listGift,
    listOrderPay,
    orderAddress,
    orderShipping,
    orderPayment,
    help
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      background: "#F9F9F9",
      width: "100%",
      minHeight: "100vh",
      paddingTop: {
        xs: "40px",
        md: "80px"
      }
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          background: "#fff",
          borderRadius: {
            xs: "10px",
            md: "20px"
          },
          padding: {
            xs: "36px 24px",
            md: "50px 66px",
            lg: "80px 96px"
          },
          width: "100%",
          display: "flex",
          flexDirection: "column"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TabTitle.default, {
          title: titleTabMain
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabStatus.default, (0, _extends2.default)({}, tabStatus)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_TabTitle.default, {
          title: titleTabContent,
          isMin: true
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_OrderSummary.default, (0, _extends2.default)({}, orderSummary)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_OrderItemList.default, {
          listOrder: listOrderItem,
          titleGift: titleGift,
          listGift: listGift
        }), !!(listOrderPay != null && listOrderPay.length) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_OrderDetailPay.default, {
          listOrderPay: listOrderPay
        }), (orderAddress == null ? void 0 : orderAddress.title) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_OrderAddress.default, (0, _extends2.default)({}, orderAddress)), (orderShipping == null ? void 0 : orderShipping.title) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_OrderShipping.default, (0, _extends2.default)({}, orderShipping)), (orderPayment == null ? void 0 : orderPayment.title) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_OrderPayment.default, (0, _extends2.default)({}, orderPayment)), (help == null ? void 0 : help.title) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_NeedHelp.default, (0, _extends2.default)({}, help))]
      })
    })
  });
};

var _default = /*#__PURE__*/_react.default.memo(OrderDetail);

exports.default = _default;
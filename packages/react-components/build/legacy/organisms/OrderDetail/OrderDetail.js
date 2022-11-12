import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { Box } from '@mui/material'; // Types

import Container from "../../atoms/Container";
import TabTitle from "./TabTitle";
import TabStatus from "./TabStatus";
import OrderSummary from "./OrderSummary";
import OrderItemList from "./OrderItemList";
import OrderDetailPay from "./OrderDetailPay";
import OrderAddress from "./OrderAddress";
import OrderShipping from "./OrderShipping";
import OrderPayment from "./OrderPayment";
import NeedHelp from "./NeedHelp";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var OrderDetail = function OrderDetail(props) {
  var titleTabMain = props.titleTabMain,
      tabStatus = props.tabStatus,
      titleTabContent = props.titleTabContent,
      orderSummary = props.orderSummary,
      _props$listOrderItem = props.listOrderItem,
      listOrderItem = _props$listOrderItem === void 0 ? [] : _props$listOrderItem,
      titleGift = props.titleGift,
      listGift = props.listGift,
      listOrderPay = props.listOrderPay,
      orderAddress = props.orderAddress,
      orderShipping = props.orderShipping,
      orderPayment = props.orderPayment,
      help = props.help;
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      background: "#F9F9F9",
      width: "100%",
      minHeight: "100vh",
      paddingTop: {
        xs: "40px",
        md: "80px"
      }
    },
    children: /*#__PURE__*/_jsx(Container, {
      children: /*#__PURE__*/_jsxs(Box, {
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
        children: [/*#__PURE__*/_jsx(TabTitle, {
          title: titleTabMain
        }), /*#__PURE__*/_jsx(TabStatus, _extends({}, tabStatus)), /*#__PURE__*/_jsx(TabTitle, {
          title: titleTabContent,
          isMin: true
        }), /*#__PURE__*/_jsx(OrderSummary, _extends({}, orderSummary)), /*#__PURE__*/_jsx(OrderItemList, {
          listOrder: listOrderItem,
          titleGift: titleGift,
          listGift: listGift
        }), !!(listOrderPay != null && listOrderPay.length) && /*#__PURE__*/_jsx(OrderDetailPay, {
          listOrderPay: listOrderPay
        }), (orderAddress == null ? void 0 : orderAddress.title) && /*#__PURE__*/_jsx(OrderAddress, _extends({}, orderAddress)), (orderShipping == null ? void 0 : orderShipping.title) && /*#__PURE__*/_jsx(OrderShipping, _extends({}, orderShipping)), (orderPayment == null ? void 0 : orderPayment.title) && /*#__PURE__*/_jsx(OrderPayment, _extends({}, orderPayment)), (help == null ? void 0 : help.title) && /*#__PURE__*/_jsx(NeedHelp, _extends({}, help))]
      })
    })
  });
};

export default /*#__PURE__*/React.memo(OrderDetail);
import _extends from "@babel/runtime/helpers/esm/extends";
import { Box } from '@mui/material';
import React from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import OrderItem from "./OrderItem";
import { createElement as _createElement } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function OrderItemList(props) {
  var listOrder = props.listOrder,
      titleGift = props.titleGift,
      listGift = props.listGift;
  return /*#__PURE__*/_jsxs(Box, {
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
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        width: "100%"
      },
      children: !!(listOrder != null && listOrder.length) && listOrder.map(function (order, index) {
        return /*#__PURE__*/_createElement(OrderItem, _extends({}, order, {
          key: index
        }));
      })
    }), !!(listGift != null && listGift.length) && /*#__PURE__*/_jsx(Typography, {
      color: colors.neutral.neutral2,
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
    }), !!(listGift != null && listGift.length) && /*#__PURE__*/_jsx(Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        width: "100%"
      },
      children: listGift.map(function (order, index) {
        return /*#__PURE__*/_createElement(OrderItem, _extends({}, order, {
          key: index
        }));
      })
    })]
  });
}

export default OrderItemList;
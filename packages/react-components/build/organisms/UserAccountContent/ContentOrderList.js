import _extends from "@babel/runtime/helpers/esm/extends";
import { Box } from '@mui/material';
import React from 'react';
import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";
import OrderItemList from "../../molecules/OrderItemList";
import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
import { createElement as _createElement } from "react";

function ContentOrderList(props) {
  const {
    listOrder,
    propsButton,
    titleOrderEmpty,
    descriptionOrderEmpty,
    titleBtn
  } = props;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      width: "100%"
    },
    children: [!(listOrder != null && listOrder.length) && /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      },
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "h5",
        color: colors.primary.bandaiNamcoBlack,
        sx: {
          marginBottom: "8px"
        },
        children: titleOrderEmpty || "You have no orders yet"
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "p6",
        sx: {
          marginBottom: "24px"
        },
        children: descriptionOrderEmpty || "Start shopping for games and more!"
      }), /*#__PURE__*/_jsx(Button, _extends({}, propsButton, {
        children: titleBtn || "Shop now"
      }))]
    }), !!(listOrder != null && listOrder.length) && listOrder.map((order, index) => {
      return /*#__PURE__*/_createElement(OrderItemList, _extends({}, order, {
        key: index
      }));
    })]
  });
}

export default ContentOrderList;
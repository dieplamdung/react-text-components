import { Box } from '@mui/material';
import React from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function OrderDetailPay(props) {
  var listOrderPay = props.listOrderPay;
  var lengthList = listOrderPay == null ? void 0 : listOrderPay.length;
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      padding: {
        xs: "32px 0px",
        md: "48px 0px"
      },
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
    children: !!(listOrderPay != null && listOrderPay.length) && listOrderPay.map(function (order, index) {
      return /*#__PURE__*/_jsxs(Box, {
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: {
            xs: "12px",
            md: "16px"
          },
          "&:last-child": {
            marginBottom: "0px"
          }
        },
        children: [/*#__PURE__*/_jsxs(Box, {
          sx: {
            display: "flex",
            flexDirection: "column",
            paddingRight: "8px",
            maxWidth: {
              xs: "150px",
              md: "400px"
            }
          },
          children: [/*#__PURE__*/_jsx(Typography, {
            color: colors.primary.bandaiNamcoBlack,
            sx: {
              fontSize: index + 1 === lengthList ? "20px" : "16px",
              fontWeight: "700",
              lineHeight: index + 1 === lengthList ? "26px" : "22px",
              letterSpacing: "-0.2px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              display: "block",
              textOverflow: "ellipsis"
            },
            children: order == null ? void 0 : order.title
          }), !!(order != null && order.note) && /*#__PURE__*/_jsx(Typography, {
            color: colors.neutral.neutral2,
            sx: {
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "19px",
              marginTop: "1px",
              whiteSpace: "nowrap",
              overflow: "hidden",
              display: "block",
              textOverflow: "ellipsis"
            },
            children: order == null ? void 0 : order.note
          })]
        }), /*#__PURE__*/_jsx(Typography, {
          color: index + 1 === lengthList ? colors.primary.bandaiNamcoBlack : colors.neutral.neutral2,
          sx: {
            fontSize: index + 1 === lengthList ? "18px" : "16px",
            fontWeight: index + 1 === lengthList ? "700" : "400",
            lineHeight: index + 1 === lengthList ? "24px" : "22px",
            letterSpacing: "-0.2px",
            whiteSpace: "nowrap"
          },
          children: order == null ? void 0 : order.value
        })]
      }, index);
    })
  });
}

export default OrderDetailPay;
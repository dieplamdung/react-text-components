import { Box } from '@mui/system';
import React from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function OrderSummary(props) {
  var titleOrder = props.titleOrder,
      valueOrder = props.valueOrder,
      titleDate = props.titleDate,
      valueDate = props.valueDate;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      padding: {
        xs: "28px 0px",
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
    children: [/*#__PURE__*/_jsxs(Box, {
      sx: {
        display: "flex",
        marginBottom: "8px"
      },
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "p5",
        color: colors.primary.bandaiNamcoBlack,
        children: titleOrder
      }), /*#__PURE__*/_jsxs(Typography, {
        variant: "p5",
        color: colors.neutral.neutral2,
        sx: {
          fontWeight: "400"
        },
        children: ["\xA0 ", valueOrder]
      })]
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: "flex"
      },
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "p5",
        color: colors.primary.bandaiNamcoBlack,
        children: titleDate
      }), /*#__PURE__*/_jsxs(Typography, {
        variant: "p5",
        color: colors.neutral.neutral2,
        sx: {
          fontWeight: "400"
        },
        children: ["\xA0 ", valueDate]
      })]
    })]
  });
}
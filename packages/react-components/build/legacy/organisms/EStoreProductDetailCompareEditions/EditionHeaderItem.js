import { Box } from '@mui/system';
import React from 'react';
import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function EditionHeaderItem(props) {
  var titleEdition = props.titleEdition,
      valuePrice = props.valuePrice,
      id = props.id,
      onClickBuy = props.onClickBuy,
      labelButton = props.labelButton;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: {
        xs: "110px",
        lg: "120px",
        xl: "140px"
      },
      minWidth: {
        xs: "110px",
        lg: "120px",
        xl: "140px"
      },
      maxWidth: {
        xs: "110px",
        lg: "120px",
        xl: "140px"
      },
      overflow: "hidden",
      padding: {
        xs: "8px 14px",
        lg: "14px 24px"
      },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    children: [/*#__PURE__*/_jsx(Typography, {
      variant: "p1",
      color: colors.primary.bandaiNamcoBlack,
      children: titleEdition
    }), /*#__PURE__*/_jsx(Typography, {
      variant: "p6",
      color: colors.neutral.neutral2,
      sx: {
        lineHeight: {
          xs: "20px",
          md: "22px"
        }
      },
      children: valuePrice
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        paddingTop: "14px"
      },
      children: /*#__PURE__*/_jsx(Button, {
        variant: "secondaryBlack",
        onClick: function onClick() {
          onClickBuy == null ? void 0 : onClickBuy(id);
        },
        children: labelButton
      })
    })]
  });
}
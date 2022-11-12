import _extends from "@babel/runtime/helpers/esm/extends";
// import modules
import Box from '@mui/material/Box';
import React from 'react';
import Button from "../Button/Button";
import colors from "../../theme/colors";
import { formatCurrency } from "../../utils";
import Typography from "../Typography"; // Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// define function
const ButtonPrice = props => {
  const {
    buttonProps,
    priceProps,
    isButtonSecond = false
  } = props;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      display: {
        xs: 'flex',
        md: priceProps?.variant === 'horizontal' ? 'flex' : 'block'
      },
      alignItems: 'center'
    },
    className: "style-ButtonPrice",
    children: [/*#__PURE__*/_jsx(Button, _extends({}, buttonProps, {
      sx: {
        backgroundColor: isButtonSecond ? colors.primary.bandaiNamcoWhite : colors.primary.bandaiNamcoRed,
        color: isButtonSecond ? colors.primary.bandaiNamcoBlack : colors.primary.bandaiNamcoWhite,
        padding: {
          xs: '8px 48px 12px',
          md: '10px 46.5px 14px'
        },
        '&:hover': {
          backgroundColor: isButtonSecond ? colors.primary.bandaiNamcoWhite : colors.accent.accentRed[1],
          color: isButtonSecond ? colors.accent.accentRed[1] : colors.primary.bandaiNamcoWhite
        }
      },
      children: buttonProps.label
    })), /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: {
          xs: 'block',
          md: 'flex'
        },
        flexDirection: priceProps?.variant === 'horizontal' ? 'column' : 'row',
        marginTop: {
          xs: '0px',
          md: priceProps?.variant === 'horizontal' ? '0' : '12px'
        },
        marginLeft: {
          xs: '12px',
          md: priceProps?.variant === 'horizontal' ? '12px' : '0'
        }
      },
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "l1",
        color: colors.neutral.neutral2,
        sx: {
          fontSize: {
            xs: '12px',
            md: '14px'
          },
          lineHeight: '19px',
          fontWeight: 400,
          marginRight: '4px'
        },
        children: priceProps?.label
      }), /*#__PURE__*/_jsxs(Typography, {
        variant: "p7",
        color: colors.primary.bandaiNamcoBlack,
        children: [priceProps?.currency, !priceProps.noFormat ? formatCurrency(Number(priceProps?.amount) || 0, 2) : priceProps?.amount]
      })]
    })]
  });
};

export default ButtonPrice;
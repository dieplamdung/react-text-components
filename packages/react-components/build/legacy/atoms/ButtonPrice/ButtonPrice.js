import _extends from '@babel/runtime/helpers/esm/extends';
// import modules
import Box from '@mui/material/Box';
import React from 'react';
import Button from '../Button/Button';
import colors from '../../theme/colors';
import { formatCurrency } from '../../utils';
import Typography from '../Typography'; // Types

import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';

// define function
var ButtonPrice = function ButtonPrice(props) {
  var buttonProps = props.buttonProps,
    priceProps = props.priceProps,
    _props$isButtonSecond = props.isButtonSecond,
    isButtonSecond = _props$isButtonSecond === void 0 ? false : _props$isButtonSecond;
  return /*#__PURE__*/ _jsxs(Box, {
    sx: {
      display: {
        xs: 'flex',
        md: (priceProps == null ? void 0 : priceProps.variant) === 'horizontal' ? 'flex' : 'block',
      },
      alignItems: 'center',
    },
    className: 'style-ButtonPrice',
    children: [
      /*#__PURE__*/ _jsx(
        Button,
        _extends({}, buttonProps, {
          sx: {
            backgroundColor: isButtonSecond
              ? colors.primary.reactNamcoWhite
              : colors.primary.reactNamcoRed,
            color: isButtonSecond ? colors.primary.reactNamcoBlack : colors.primary.reactNamcoWhite,
            padding: {
              xs: '8px 48px 12px',
              md: '10px 46.5px 14px',
            },
            '&:hover': {
              backgroundColor: isButtonSecond
                ? colors.primary.reactNamcoWhite
                : colors.accent.accentRed[1],
              color: isButtonSecond ? colors.accent.accentRed[1] : colors.primary.reactNamcoWhite,
            },
          },
          children: buttonProps.label,
        }),
      ),
      /*#__PURE__*/ _jsxs(Box, {
        sx: {
          display: {
            xs: 'block',
            md: 'flex',
          },
          flexDirection:
            (priceProps == null ? void 0 : priceProps.variant) === 'horizontal' ? 'column' : 'row',
          marginTop: {
            xs: '0px',
            md: (priceProps == null ? void 0 : priceProps.variant) === 'horizontal' ? '0' : '12px',
          },
          marginLeft: {
            xs: '12px',
            md: (priceProps == null ? void 0 : priceProps.variant) === 'horizontal' ? '12px' : '0',
          },
        },
        children: [
          /*#__PURE__*/ _jsx(Typography, {
            variant: 'l1',
            color: colors.neutral.neutral2,
            sx: {
              fontSize: {
                xs: '12px',
                md: '14px',
              },
              lineHeight: '19px',
              fontWeight: 400,
              marginRight: '4px',
            },
            children: priceProps == null ? void 0 : priceProps.label,
          }),
          /*#__PURE__*/ _jsxs(Typography, {
            variant: 'p7',
            color: colors.primary.reactNamcoBlack,
            children: [
              priceProps == null ? void 0 : priceProps.currency,
              !priceProps.noFormat
                ? formatCurrency(Number(priceProps == null ? void 0 : priceProps.amount) || 0, 2)
                : priceProps == null
                ? void 0
                : priceProps.amount,
            ],
          }),
        ],
      }),
    ],
  });
};

export default ButtonPrice;

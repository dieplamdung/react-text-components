import _extends from "@babel/runtime/helpers/esm/extends";
// import Modules
import Box from '@mui/material/Box';
import React from 'react';
import BulletPoint from "../../atoms/BulletPoint";
import Typography from "../../atoms/Typography";
import ButtonPrice from "../../atoms/ButtonPrice";
import Tags from "../../atoms/Tags"; // import Styles

import colors from "../../theme/colors"; // import Types

import { createElement as _createElement } from "react";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const PricingCard = props => {
  var _bulletPointProps$ite;

  const {
    bulletPointProps,
    title = '',
    buttonProps,
    priceProps,
    tagsProps
  } = props;
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      width: {
        xs: '311px',
        md: '452px'
      },
      height: '100%'
    },
    children: /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        minWidth: {
          xs: '311px',
          md: '452px'
        },
        padding: {
          xs: '40px 36px',
          md: '60px 72px'
        },
        border: `1px solid ${colors.neutral.neutral5}`,
        backgroundColor: colors.primary.bandaiNamcoWhite,
        borderRadius: '20px',
        height: '100%'
      },
      children: [/*#__PURE__*/_jsx(Box, {
        sx: {
          display: 'flex',
          flexDirection: 'row',
          gap: '4px'
        },
        children: tagsProps == null ? void 0 : tagsProps.map((tag, idex) => /*#__PURE__*/_createElement(Tags, _extends({}, tag, {
          key: idex
        })))
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "h5",
        sx: {
          marginBottom: {
            xs: '8px',
            md: '16px'
          },
          marginTop: '12px'
        },
        children: title
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          display: 'flex',
          flexDirection: 'column',
          rowGap: '8px',
          marginTop: '8px',
          marginBottom: '36px',
          '&:first-of-type': {
            marginTop: '0px'
          }
        },
        children: bulletPointProps == null ? void 0 : (_bulletPointProps$ite = bulletPointProps.items) == null ? void 0 : _bulletPointProps$ite.map(item => /*#__PURE__*/_jsx(BulletPoint, {
          label: item.label
        }))
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          marginTop: "auto",
          '& button': {
            padding: {
              xs: '8px 48px 12px',
              lg: '10px 46.5px 14px'
            }
          }
        },
        children: /*#__PURE__*/_jsx(ButtonPrice, {
          buttonProps: buttonProps,
          priceProps: priceProps,
          isButtonSecond: true
        })
      })]
    })
  });
};

export default PricingCard;
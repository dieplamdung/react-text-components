import _extends from "@babel/runtime/helpers/esm/extends";
// Modules
import Box from '@mui/material/Box';
import React from 'react';
import Typography from "../../atoms/Typography";
import Tags from "../../atoms/Tags";
import Button from "../../atoms/Button";
import { formatCurrency } from "../../utils"; // Styles

import colors from "../../theme/colors"; // Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const BuyGameContainer = props => {
  const {
    mainImage = '',
    title = '',
    tags,
    buttonPriceProps
  } = props;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: {
        xs: "column",
        md: "row"
      },
      alignItems: {
        xs: "unset",
        md: "center"
      }
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        width: {
          xs: "100%",
          md: "452px"
        },
        height: {
          xs: '175px',
          md: '254px'
        },
        '& img': {
          objectFit: 'cover',
          borderRadius: '20px',
          display: 'block',
          width: '100%',
          height: '100%'
        }
      },
      children: mainImage && /*#__PURE__*/_jsx("img", {
        src: mainImage,
        alt: title ?? ''
      })
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        padding: {
          xs: "24px 0 0 0",
          md: "0  0 0 56px"
        }
      },
      children: [/*#__PURE__*/_jsx(Box, {
        sx: {
          display: 'flex',
          gap: '5px',
          '& .bgTag': {
            backgroundColor: 'transparent',
            border: `1px solid ${colors.neutral.neutral2}`
          },
          '& > div > div': {
            '&:hover': {
              backgroundColor: 'transparent',
              '& p': {
                color: colors.neutral.neutral2
              }
            },
            '& p': {
              color: colors.neutral.neutral2
            }
          }
        },
        children: tags.map(tag => /*#__PURE__*/_jsx(Tags, _extends({}, tag)))
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          marginTop: '8px'
        },
        children: /*#__PURE__*/_jsx(Typography, {
          color: colors.primary.bandaiNamcoBlack,
          variant: "h5",
          sx: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": "2",

            /* number of lines to show */
            lineClamp: "2",
            "-webkit-box-orient": "vertical"
          },
          children: title
        })
      }), /*#__PURE__*/_jsxs(Box, {
        sx: {
          marginTop: '16px'
        },
        children: [/*#__PURE__*/_jsxs(Box, {
          sx: {
            marginBottom: '16px'
          },
          children: [/*#__PURE__*/_jsx(Typography, {
            variant: "p6",
            color: colors.neutral.neutral2,
            children: buttonPriceProps?.priceProps?.label
          }), /*#__PURE__*/_jsxs(Typography, {
            variant: "p3",
            color: colors.neutral.neutral2,
            children: [buttonPriceProps?.priceProps?.currency, formatCurrency(buttonPriceProps?.priceProps?.amount || 0, 2)]
          })]
        }), /*#__PURE__*/_jsxs(Box, {
          sx: {
            display: 'flex',
            gap: '12px',
            '& button': {
              width: {
                xs: '50%',
                md: 'unset'
              }
            }
          },
          children: [/*#__PURE__*/_jsx(Button, _extends({}, buttonPriceProps.buttonBuy, {
            sx: {
              backgroundColor: colors.primary.bandaiNamcoRed,
              color: colors.primary.bandaiNamcoWhite
            }
          })), /*#__PURE__*/_jsx(Button, _extends({}, buttonPriceProps.buttonLearnMore, {
            sx: {
              color: {
                xs: colors.primary.bandaiNamcoBlack,
                md: colors.neutral.neutral2
              }
            }
          }))]
        })]
      })]
    })]
  });
};

export default BuyGameContainer;
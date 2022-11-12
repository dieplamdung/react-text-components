import _extends from "@babel/runtime/helpers/esm/extends";
// import Modules
import React from 'react';
import { Box } from '@mui/material';
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button"; // import Styles

import colors from "../../theme/colors"; // import Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var SummaryCard = function SummaryCard(props) {
  var title = props.title,
      _props$total = props.total,
      total = _props$total === void 0 ? 0 : _props$total,
      _props$discount = props.discount,
      discount = _props$discount === void 0 ? 0 : _props$discount,
      _props$quantity = props.quantity,
      quantity = _props$quantity === void 0 ? 0 : _props$quantity,
      totalText = props.totalText,
      shippingText = props.shippingText,
      button = props.button;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      minWidth: {
        xs: '100%',
        md: '357px'
      }
    },
    children: [/*#__PURE__*/_jsx(Typography, {
      variant: "h4",
      sx: {
        marginBottom: {
          xs: '8px',
          md: '52px'
        }
      },
      children: title
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between'
      },
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "p6",
        color: colors.primary.bandaiNamcoBlack,
        children: "".concat(quantity, " items")
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "p6",
        children: "S$".concat(total.toFixed(2))
      })]
    }), discount > 0 && /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between'
      },
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "p6",
        color: colors.primary.bandaiNamcoBlack,
        children: "discount"
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "p6",
        children: "S$".concat(discount.toFixed(2))
      })]
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        width: '100%',
        height: '1px',
        background: '#c1c1c1',
        opacity: '0.5',
        margin: {
          xs: '16px 0px',
          md: '28px 0px'
        }
      }
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between'
      },
      children: [/*#__PURE__*/_jsxs(Box, {
        children: [/*#__PURE__*/_jsx(Typography, {
          variant: "h6",
          children: totalText
        }), /*#__PURE__*/_jsx(Typography, {
          width: "70%",
          variant: "p8",
          children: shippingText
        })]
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "h6",
        children: "S$".concat((total - discount).toFixed(2))
      })]
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        display: {
          xs: 'none',
          md: 'block'
        },
        marginTop: {
          md: '52px'
        }
      },
      children: /*#__PURE__*/_jsx(Button, _extends({
        fullWidth: true
      }, button))
    })]
  });
};

export default SummaryCard;
import _extends from "@babel/runtime/helpers/esm/extends";
// import modules
import Box from '@mui/material/Box';
import React from 'react';
import Typography from "../../atoms/Typography"; // Types

import colors from "../../theme/colors";
import OrderItem from "../OrderItem/OrderItem"; // define function

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var OrderItemList = function OrderItemList(props) {
  var title = props.title,
      listOder = props.listOder;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      display: "flex",
      flexDirection: {
        xs: "column",
        md: "row"
      },
      width: "100%",
      marginBottom: {
        xs: "48px",
        md: "132px"
      },
      "&:last-child": {
        marginBottom: "0px"
      }
    },
    children: [title && /*#__PURE__*/_jsx(Typography, {
      color: colors.primary.bandaiNamcoBlack,
      variant: "p1",
      sx: {
        marginRight: {
          xs: "0px",
          md: "50px",
          xl: "146px"
        },
        marginBottom: {
          xs: "24px",
          md: "0px"
        },
        minWidth: "150px"
      },
      children: title
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        flex: 1,
        display: "flex",
        flexDirection: "column"
      },
      children: !!(listOder != null && listOder.length) && listOder.map(function (item, index) {
        return /*#__PURE__*/_jsx(Box, {
          sx: {
            marginBottom: "20px",
            "&:last-child": {
              marginBottom: "0px"
            }
          },
          children: /*#__PURE__*/_jsx(OrderItem, _extends({}, item))
        }, index);
      })
    })]
  });
};

export default /*#__PURE__*/React.memo(OrderItemList);
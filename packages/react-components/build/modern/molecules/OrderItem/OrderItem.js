import _extends from "@babel/runtime/helpers/esm/extends";
// import modules
import Box from '@mui/material/Box';
import React from 'react';
import Typography from "../../atoms/Typography"; // Types

import Button from "../../atoms/Button";
import { useMediaQuery } from '@mui/material';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// define function
const OrderItem = props => {
  const {
    nextImage,
    hrefImg,
    alt,
    status,
    buttonProps,
    titleButton,
    itemDetail,
    nextLink,
    href
  } = props;
  const isMobileBigger = useMediaQuery('(max-width:322px)', {
    noSsr: true
  });
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      padding: isMobileBigger ? "14px" : "26px",
      border: "1px solid #DDDDDD",
      borderRadius: "20px",
      display: "flex",
      width: "100%"
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        minWidth: {
          xs: "78px",
          md: "172px"
        },
        width: {
          xs: "78px",
          md: "172px"
        },
        height: {
          xs: "78px",
          md: "172px"
        },
        borderRadius: {
          xs: "10px",
          md: "20px"
        },
        overflow: "hidden",
        marginRight: "20px",
        "& span": {
          width: "100% !important",
          height: "100% !important"
        },
        "& img": {
          width: "100%",
          height: "100%",
          objectFit: "cover"
        }
      },
      children: nextImage || /*#__PURE__*/_jsx("img", {
        src: hrefImg,
        alt: alt || ""
      })
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        flex: "1",
        display: "flex",
        flexDirection: "column"
      },
      children: [/*#__PURE__*/_jsx(Box, {
        sx: {
          background: status?.color || "#0169B2",
          width: isMobileBigger ? "min-content" : "fit-content",
          display: "flex",
          alignItems: "center",
          color: "#fff",
          fontWeight: "700",
          fontSize: "10px",
          lineHeight: "14px",
          textTransform: "uppercase",
          padding: "4px 8px 6px 8px",
          borderRadius: "5px",
          marginBottom: "6px"
        },
        children: status?.label
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "p3",
        sx: {
          marginBottom: "6px",
          wordBreak: "break-word"
        },
        children: itemDetail?.title
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "p8",
        sx: {
          wordBreak: "break-word",
          color: "#737373"
        },
        children: itemDetail?.oderId
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "p8",
        sx: {
          color: "#737373",
          wordBreak: "break-word"
        },
        children: itemDetail?.date
      }), /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: "row"
          },
          justifyContent: "space-between",
          alignItems: {
            xs: "flex-start",
            lg: "center"
          },
          marginTop: "6px"
        },
        children: [/*#__PURE__*/_jsxs(Box, {
          sx: {
            display: "flex",
            flexDirection: isMobileBigger ? "column" : "row",
            alignItems: isMobileBigger ? "flex-start" : "center",
            marginBottom: {
              xs: "12px",
              lg: "0px"
            },
            gap: "4px",
            flexWrap: "wrap"
          },
          children: [/*#__PURE__*/_jsx(Typography, {
            variant: "h6",
            sx: {
              maxWidth: {
                xs: "150px",
                md: "200px"
              },
              overflow: "hidden",
              whiteSpace: "nowrap",
              textOverflow: "ellipsis"
            },
            children: itemDetail?.price
          }), itemDetail?.price !== "0" && /*#__PURE__*/_jsx(Typography, {
            variant: "p6",
            sx: {
              fontSize: "14px",
              lineHeight: "20px",
              color: "#737373" // marginLeft: isMobileBigger ? "0px" : "4px",
              // marginTop: isMobileBigger ? "4px" : "0px",

            },
            children: `(${itemDetail?.amount} ${itemDetail?.labelAmount})`
          })]
        }), typeof nextLink === 'function' ? nextLink?.(href, /*#__PURE__*/_jsx(Button, _extends({}, buttonProps, {
          children: titleButton
        }))) : /*#__PURE__*/_jsx(Button, _extends({}, buttonProps, {
          children: titleButton
        }))]
      })]
    })]
  });
};

export default /*#__PURE__*/React.memo(OrderItem);
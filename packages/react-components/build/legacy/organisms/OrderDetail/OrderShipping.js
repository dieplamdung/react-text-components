import { Box } from '@mui/material';
import React from 'react';
import HtmlRenderer from "../../atoms/HtmlRenderer";
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function OrderShipping(props) {
  var title = props.title,
      titleShipping = props.titleShipping,
      description = props.description,
      value = props.value;
  return /*#__PURE__*/_jsxs(Box, {
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
    children: [/*#__PURE__*/_jsx(Typography, {
      color: colors.primary.bandaiNamcoBlack,
      sx: {
        fontSize: {
          xs: "20px",
          md: "26px"
        },
        lineHeight: {
          xs: "26px",
          md: "32px"
        },
        fontWeight: "700",
        marginBottom: {
          xs: "24px",
          md: "28px"
        }
      },
      children: title
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between"
      },
      children: [/*#__PURE__*/_jsxs(Box, {
        sx: {
          display: "flex",
          flexDirection: "column",
          width: "100%"
        },
        children: [/*#__PURE__*/_jsx(Typography, {
          color: colors.primary.bandaiNamcoBlack,
          sx: {
            fontSize: "16px",
            lineHeight: "22px",
            fontWeight: "700",
            marginBottom: "1px",
            letterSpacing: "-0.2px"
          },
          children: titleShipping
        }), !!description && /*#__PURE__*/_jsx(Typography, {
          color: colors.neutral.neutral2,
          sx: {
            fontSize: "14px",
            lineHeight: "19px",
            fontWeight: "400",
            letterSpacing: "-0.2px",
            "& div": {
              wordBreak: "break-word"
            }
          },
          children: /*#__PURE__*/_jsx(HtmlRenderer, {
            component: "p",
            value: description != null ? description : ""
          })
        })]
      }), /*#__PURE__*/_jsx(Typography, {
        sx: {
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "22px",
          whiteSpace: "nowrap"
        },
        children: value
      })]
    })]
  });
}

export default /*#__PURE__*/React.memo(OrderShipping);
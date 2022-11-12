// import modules
import Box from '@mui/material/Box';
import React from 'react';
import HtmlRenderer from "../../atoms/HtmlRenderer";
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors"; // Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// define function
const Quote = ({
  content,
  author
}) => {
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      padding: {
        xs: "4px 16px 4px 20px",
        md: "14px 36px 14px 36px"
      },
      background: colors.neutral.white,
      position: "relative",
      "&::before": {
        content: "''",
        position: "absolute",
        top: "0px",
        left: "0px",
        height: "100%",
        width: {
          xs: "4px",
          md: "8px"
        },
        background: colors.secondary.bandaiNamcoGreen
      }
    },
    children: [!!content && (typeof content === "string" ? /*#__PURE__*/_jsx(Typography, {
      variant: "p3",
      color: colors.neutral.neutral2,
      sx: {
        lineHeight: {
          xs: "22px",
          md: "24px"
        },
        letterSpacing: "-0.2px"
      },
      children: content
    }) : /*#__PURE__*/_jsx(Box, {
      sx: {
        "& div": {
          margin: "0px",
          padding: "0px"
        },
        "& p": {
          fontWeight: 600,
          color: colors.neutral.neutral2,
          fontSize: {
            xs: "16px",
            md: "18px"
          },
          lineHeight: {
            xs: "22px",
            md: "24px"
          },
          letterSpacing: "-0.2px",
          margin: "0px",
          padding: "0px"
        }
      },
      children: /*#__PURE__*/_jsx(HtmlRenderer, {
        component: "p",
        value: content
      })
    })), !!author && (typeof author === "string" ? /*#__PURE__*/_jsx(Typography, {
      variant: "p8",
      color: colors.neutral.neutral2,
      sx: {
        marginTop: {
          xs: "24px",
          md: "28px"
        },
        lineHeight: {
          xs: "18px",
          md: "19px"
        }
      },
      children: author
    }) : /*#__PURE__*/_jsx(Box, {
      sx: {
        marginTop: {
          xs: "24px",
          md: "28px"
        },
        "& div": {
          margin: "0px",
          padding: "0px"
        },
        "& p": {
          fontWeight: 400,
          color: colors.neutral.neutral2,
          fontSize: {
            xs: "12px",
            md: "14px"
          },
          lineHeight: {
            xs: "18px",
            md: "19px"
          },
          letterSpacing: "-0.2px",
          margin: "0px",
          padding: "0px"
        }
      },
      children: /*#__PURE__*/_jsx(HtmlRenderer, {
        component: "p",
        value: author
      })
    }))]
  });
};

export default Quote;
var _svg;

// import modules
import Box from '@mui/material/Box';
import React from 'react';
import Typography from "../../atoms/Typography"; // import colors

import colors from "../../theme/colors";
import Link from '@mui/material/Link';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var PoliciesAndNotes = function PoliciesAndNotes(_ref) {
  var title = _ref.title,
      label = _ref.label,
      labelHref = _ref.labelHref,
      href = _ref.href,
      description = _ref.description;

  var IconSvg = _svg || (_svg = /*#__PURE__*/_jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/_jsx("path", {
      d: "M8 16C3.5816 16 0 12.4184 0 8C0 3.5816 3.5816 0 8 0C12.4184 0 16 3.5816 16 8C16 12.4184 12.4184 16 8 16ZM8 14.4C9.69739 14.4 11.3253 13.7257 12.5255 12.5255C13.7257 11.3253 14.4 9.69739 14.4 8C14.4 6.30261 13.7257 4.67475 12.5255 3.47452C11.3253 2.27428 9.69739 1.6 8 1.6C6.30261 1.6 4.67475 2.27428 3.47452 3.47452C2.27428 4.67475 1.6 6.30261 1.6 8C1.6 9.69739 2.27428 11.3253 3.47452 12.5255C4.67475 13.7257 6.30261 14.4 8 14.4ZM7.2 4H8.8V5.6H7.2V4ZM7.2 7.2H8.8V12H7.2V7.2Z",
      fill: "#737373"
    })
  }));

  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "space-between",
      flexDirection: {
        xs: "column",
        sm: "column",
        md: "column",
        lg: "row"
      },
      padding: {
        xs: "0px 16px",
        md: "0px"
      }
    },
    children: [/*#__PURE__*/_jsx(Typography, {
      variant: "h4",
      sx: {
        minWidth: {
          xs: "100%",
          md: "355px"
        },
        letterSpacing: "-1px",
        marginRight: {
          md: "0px",
          lg: "118px"
        }
      },
      children: title
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        color: colors.neutral.neutral2,
        marginTop: {
          xs: "24px",
          md: "32px",
          lg: "0px"
        }
      },
      children: [/*#__PURE__*/_jsx(Box, {
        children: /*#__PURE__*/_jsxs(Typography, {
          variant: "p6",
          sx: {
            display: "flex",
            justifyContent: "start",
            alignItems: "center",
            lineHeight: "22px",
            '& span': {
              marginLeft: "6px",
              whiteSpace: 'nowrap',
              "& a": {
                marginLeft: "6px",
                textDecoration: "none",
                position: "relative",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  left: "0px",
                  right: "0px",
                  bottom: "0px",
                  width: "100%",
                  height: "1px",
                  background: colors.neutral.neutral2
                }
              }
            }
          },
          children: [IconSvg, /*#__PURE__*/_jsxs("span", {
            children: [label, /*#__PURE__*/_jsx(Link, {
              href: href,
              color: colors.neutral.neutral2,
              children: labelHref
            })]
          })]
        })
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "p6",
        sx: {
          lineHeight: {
            xs: "20px",
            md: "22px"
          },
          marginTop: "20px",
          letterSpacing: {
            xs: "0px",
            md: "-0.2px"
          }
        },
        children: description
      })]
    })]
  });
};

export default PoliciesAndNotes;
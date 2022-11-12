var _svg;

import { Box } from '@mui/material';
import React from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function TabStatus(props) {
  var title = props.title,
      description = props.description;

  var IconCheck = _svg || (_svg = /*#__PURE__*/_jsxs("svg", {
    width: "26",
    height: "26",
    viewBox: "0 0 26 26",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsx("rect", {
      width: "26",
      height: "26",
      rx: "13",
      fill: "#00B0B8"
    }), /*#__PURE__*/_jsx("path", {
      d: "M18 9.83594L11.0737 16.8668L7.40039 13.2144",
      stroke: "white",
      strokeWidth: "1.67924",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    })]
  }));

  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      margin: {
        xs: "32px 0px 36px 0px",
        md: "61px 0px 68px 0px"
      },
      padding: {
        xs: "14px 20px",
        md: "14px 18px"
      },
      borderRadius: "10px",
      background: "rgba(0, 176, 184, 0.05)",
      display: "flex",
      alignItems: {
        xs: "center",
        md: "flex-start"
      }
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        marginRight: "12px",
        lineHeight: "0px",
        "& svg": {
          marginTop: {
            xs: "0px",
            md: "2px"
          },
          width: {
            xs: "20px",
            md: "26px"
          },
          height: {
            xs: "20px",
            md: "26px"
          }
        }
      },
      children: IconCheck
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: "flex",
        flexDirection: "column"
      },
      children: [title && /*#__PURE__*/_jsx(Typography, {
        variant: "p3",
        color: colors.primary.bandaiNamcoBlack,
        sx: {
          lineHeight: {
            xs: "24px",
            md: "22px"
          }
        },
        children: title
      }), description && /*#__PURE__*/_jsx(Typography, {
        variant: "p6",
        color: colors.neutral.neutral2,
        sx: {
          lineHeight: {
            xs: "20px",
            md: "22px"
          }
        },
        children: description
      })]
    })]
  });
}

export default TabStatus;
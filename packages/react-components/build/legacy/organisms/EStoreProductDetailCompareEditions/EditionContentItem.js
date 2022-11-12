var _svg, _svg2;

import { useMediaQuery, useTheme } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import Typography from "../../atoms/Typography";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function EditionContentItem(props) {
  var theme = useTheme();
  var isMobile = useMediaQuery(theme.breakpoints.down('md'));
  var listShowEdition = props.listShowEdition,
      description = props.description,
      titleContent = props.titleContent;

  var Item = _svg || (_svg = /*#__PURE__*/_jsx("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/_jsx("path", {
      d: "M23.6299 12.005C23.6299 5.63 18.3799 0.380005 12.0049 0.380005C5.58301 0.380005 0.379883 5.63 0.379883 12.005C0.379883 18.4269 5.58301 23.63 12.0049 23.63C18.3799 23.63 23.6299 18.4269 23.6299 12.005ZM10.6455 18.1925C10.3643 18.4738 9.84863 18.4738 9.56738 18.1925L4.69238 13.3175C4.41113 13.0363 4.41113 12.5206 4.69238 12.2394L5.77051 11.2081C6.05176 10.88 6.52051 10.88 6.80176 11.2081L10.1299 14.4894L17.1611 7.45813C17.4424 7.13 17.9111 7.13 18.1924 7.45813L19.2705 8.48938C19.5518 8.77063 19.5518 9.28625 19.2705 9.5675L10.6455 18.1925Z",
      fill: "#00B0B8"
    })
  }));

  var ItemMobile = _svg2 || (_svg2 = /*#__PURE__*/_jsx("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/_jsx("path", {
      d: "M15.7529 8.00342C15.7529 3.75342 12.2529 0.253418 8.00293 0.253418C3.72168 0.253418 0.25293 3.75342 0.25293 8.00342C0.25293 12.2847 3.72168 15.7534 8.00293 15.7534C12.2529 15.7534 15.7529 12.2847 15.7529 8.00342ZM7.09668 12.1284C6.90918 12.3159 6.56543 12.3159 6.37793 12.1284L3.12793 8.87842C2.94043 8.69092 2.94043 8.34717 3.12793 8.15967L3.84668 7.47217C4.03418 7.25342 4.34668 7.25342 4.53418 7.47217L6.75293 9.65967L11.4404 4.97217C11.6279 4.75342 11.9404 4.75342 12.1279 4.97217L12.8467 5.65967C13.0342 5.84717 13.0342 6.19092 12.8467 6.37842L7.09668 12.1284Z",
      fill: "#00B0B8"
    })
  }));

  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: "100%",
      display: "flex",
      gap: "16px"
    },
    children: [/*#__PURE__*/_jsxs(Box, {
      sx: {
        flex: 1,
        display: "flex",
        flexWrap: "wrap",
        minWidth: {
          xs: "140px",
          md: "250px"
        },
        padding: {
          xs: "12px 18px",
          md: "20px 24px"
        }
      },
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "p3",
        sx: {
          lineHeight: {
            xs: "22px",
            md: "24px"
          }
        },
        children: titleContent
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "p3",
        color: "#9F9F9F",
        children: description
      })]
    }), !!(listShowEdition != null && listShowEdition.length) && listShowEdition.map(function (item, index) {
      return /*#__PURE__*/_jsxs(Box, {
        sx: {
          width: {
            xs: "110px",
            lg: "120px",
            xl: "140px"
          },
          minWidth: {
            xs: "110px",
            lg: "120px",
            xl: "140px"
          },
          maxWidth: {
            xs: "110px",
            lg: "120px",
            xl: "140px"
          },
          overflow: "hidden",
          padding: {
            xs: "15px 14px",
            md: "20px 24px"
          },
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        },
        children: [!!item && !isMobile && Item, !!item && isMobile && ItemMobile]
      }, index);
    })]
  });
}
// import modules
import { Box } from '@mui/material';
import React from 'react';
import HtmlRenderer from "../../atoms/HtmlRenderer";
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors"; // import styles
// import types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var NotFound = function NotFound(props) {
  var title = props.title,
      description = props.description,
      iconNotFound = props.iconNotFound;
  return /*#__PURE__*/_jsxs(Box, {
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        display: 'flex',
        justifyContent: 'center',
        "& img": {
          width: {
            xs: "107px",
            md: "160px"
          }
        }
      },
      children: /*#__PURE__*/_jsx("img", {
        src: iconNotFound,
        alt: title
      })
    }), /*#__PURE__*/_jsx(Typography, {
      variant: "h4",
      color: colors.primary.bandaiNamcoBlack,
      sx: {
        marginTop: '30px',
        textAlign: 'center'
      },
      children: /*#__PURE__*/_jsx(HtmlRenderer, {
        component: "div",
        value: title
      })
    }), /*#__PURE__*/_jsx(Typography, {
      variant: "p6",
      color: colors.neutral.neutral2,
      sx: {
        textAlign: 'center',
        marginTop: '8px'
      },
      children: /*#__PURE__*/_jsx(HtmlRenderer, {
        component: "div",
        value: description
      })
    })]
  });
};

export default NotFound;
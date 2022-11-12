import { Box } from '@mui/material';
import React from 'react';
import Typography from "../../atoms/Typography";
import HtmlRenderer from "../../atoms/HtmlRenderer";
import Container from "../../atoms/Container"; // Styles

import colors from "../../theme/colors"; // Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const MastheadImage = ({
  mainImage,
  description
}) => {
  return /*#__PURE__*/_jsxs(Box, {
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        height: {
          xs: '192px',
          md: '363px'
        },
        backgroundImage: `url(${mainImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center left 50%',
        backgroundRepeat: 'no-repeat'
      }
    }), description && /*#__PURE__*/_jsx(Container, {
      children: /*#__PURE__*/_jsx(Box, {
        sx: {
          marginTop: {
            xs: '56px',
            md: '116px'
          },
          maxWidth: '736px',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center'
        },
        children: /*#__PURE__*/_jsx(Typography, {
          variant: "h4",
          sx: {
            color: colors.primary.bandaiNamcoBlack
          },
          children: /*#__PURE__*/_jsx(HtmlRenderer, {
            component: "p",
            value: description
          })
        })
      })
    })]
  });
};

export default MastheadImage;
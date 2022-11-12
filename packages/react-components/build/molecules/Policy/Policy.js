// Modules
import Box from '@mui/material/Box';
import React from 'react';
import Typography from "../../atoms/Typography"; // Styles

import colors from "../../theme/colors"; // Types

import HtmlRenderer from "../../atoms/HtmlRenderer";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const Policy = props => {
  const {
    title,
    content
  } = props;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      maxWidth: '740px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    children: [title && /*#__PURE__*/_jsx(Typography, {
      color: colors.primary.bandaiNamcoBlack,
      variant: "h1",
      children: title
    }), content && /*#__PURE__*/_jsx(Typography, {
      color: colors.neutral.neutral2,
      variant: "p4",
      sx: {
        fontSize: '16px',
        lineHeight: '22px',
        marginTop: '32px',
        '& li': {
          margin: '8px 0'
        },
        '& b': {
          color: colors.primary.bandaiNamcoBlack
        },
        '& br': {
          display: 'block',
          content: "''",
          margin: '2px 0'
        },
        '& h2': {
          marginTop: '46px',
          color: colors.primary.bandaiNamcoBlack
        }
      },
      children: /*#__PURE__*/_jsx(HtmlRenderer, {
        component: "div",
        value: content
      })
    })]
  });
};

export default Policy;
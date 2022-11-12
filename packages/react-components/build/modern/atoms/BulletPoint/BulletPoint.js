import React from 'react';
import { Box } from '@mui/material';
import colors from "../../theme/colors";
import { IconChecked } from "../Icon"; // Types

import Typography from "../Typography";
import HtmlRenderer from "../HtmlRenderer";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function BulletPoint(props) {
  const {
    label = ''
  } = props;
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      display: 'inline-block'
    },
    children: /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: 'flex',
        gap: '12px'
      },
      children: [/*#__PURE__*/_jsx(IconChecked, {
        sx: {
          width: "16px",
          height: "16px",
          marginTop: {
            xs: "2px",
            md: "4px"
          }
        },
        htmlColor: colors.primary.bandaiNamcoBlack
      }), /*#__PURE__*/_jsx(Typography, {
        variant: 'p6',
        color: colors.neutral.neutral2,
        children: /*#__PURE__*/_jsx(HtmlRenderer, {
          component: "div",
          value: label
        })
      })]
    })
  });
}
import React from 'react';
import { Box } from '@mui/material';
import colors from "../../theme/colors";
import Typography from "../Typography";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const Tags = ({
  color,
  title = '',
  disabled = false,
  showBackground = true,
  hoverPermission = true
}) => {
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      borderRadius: '5px',
      display: 'inline-block',
      pointerEvents: disabled ? 'none' : 'auto',
      // cursor: 'pointer',
      textAlign: 'center',
      '& p': {
        padding: '4px 8px 6px',
        transition: 'all .4s',
        zIndex: 1,
        position: 'relative',
        borderRadius: '5px',
        border: showBackground ? "1px solid transparent" : `1px solid ${color}`
      },
      '& .bgTag': {
        transition: 'all .4s'
      }
    },
    children: title && /*#__PURE__*/_jsxs(Box, {
      sx: {
        position: 'relative',
        '&:hover': hoverPermission ? {
          '& p': {
            color: '#fff'
          },
          '& .bgTag': {
            opacity: showBackground ? 1 : "20%"
          }
        } : {}
      },
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "l1",
        color: disabled ? colors.primary.bandaiNamcoWhite : color,
        children: typeof title === "string" ? title == null ? void 0 : title.toUpperCase() : title
      }), /*#__PURE__*/_jsx(Box, {
        className: "bgTag",
        sx: {
          backgroundColor: disabled ? colors.neutral.neutral5 : color,
          opacity: disabled ? 1 : `${showBackground ? '10%' : "0"}`,
          position: 'absolute',
          top: '0px',
          bottom: '0px',
          left: '0px',
          right: '0px',
          borderRadius: '5px'
        }
      })]
    })
  });
};

export default Tags;
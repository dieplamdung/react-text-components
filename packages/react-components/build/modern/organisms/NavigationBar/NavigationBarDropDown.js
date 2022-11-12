// Modules
import { Box, Link } from '@mui/material';
import React from 'react';
import Typography from "../../atoms/Typography"; // Styles

import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";

const NavigationBarDropDown = props => {
  const {
    data,
    languagesDefault = ""
  } = props;
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      position: 'relative',
      '&:after': {
        content: "''",
        height: '14px',
        position: 'absolute',
        bottom: '100%',
        left: '0px',
        right: '0px'
      }
    },
    children: /*#__PURE__*/_jsx(Box, {
      component: 'ul',
      sx: {
        padding: '0px',
        margin: '0px',
        borderRadius: '12px',
        overflow: 'hidden',
        backgroundColor: 'rgb(237 237 237 / 80%)'
      },
      children: !!data && data.map(item => /*#__PURE__*/_jsx(Box, {
        component: 'li',
        sx: {
          listStyle: 'none',
          transition: 'all .4s',
          padding: '11px 16px',
          backgroundColor: languagesDefault === item.label ? 'rgb(221 221 221 / 80%)' : "",
          '&:hover': {
            backgroundColor: 'rgb(221 221 221 / 80%)'
          },
          '& a': {
            color: `${colors.primary.dark} !important`,
            textDecoration: 'none'
          },
          pointerEvents: languagesDefault === item.label ? 'none' : 'auto'
        },
        children: /*#__PURE__*/_jsx(Link, {
          href: item.href,
          sx: {
            textDecoration: 'none',
            color: `${colors.primary.dark} !important`
          },
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "p6",
            children: item.label
          })
        })
      }, item.label))
    })
  });
};

export default NavigationBarDropDown;
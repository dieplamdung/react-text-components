// import Modules
import React from 'react';
import { Box, AccordionSummary, AccordionDetails } from '@mui/material';
import MuiAccordion from '@mui/material/Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "../Typography"; // import Styles

import colors from "../../theme/colors"; // import Types

import HtmlRenderer from "../HtmlRenderer";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function Accordion(props) {
  const {
    color = colors.primary.bandaiNamcoBlack,
    label = '',
    content
  } = props;
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      display: 'inline-block',
      marginBottom: "8px",
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      color: colors.neutral.neutral5,
      paddingBottom: '24px',
      width: '100%'
    },
    children: /*#__PURE__*/_jsxs(MuiAccordion, {
      sx: {
        boxShadow: 'none',
        minHeight: 'unset',
        backgroundColor: 'transparent',
        '& .MuiAccordionSummary-root': {
          minHeight: 'unset',
          margin: '0px',
          padding: '0px'
        },
        '& .MuiAccordionSummary-content': {
          margin: '0px'
        },
        '& .Mui-expanded': {
          minHeight: 'unset !important',
          '& .MuiAccordionSummary-content': {
            minHeight: 'unset',
            margin: '0px'
          }
        }
      },
      children: [/*#__PURE__*/_jsx(AccordionSummary, {
        expandIcon: /*#__PURE__*/_jsx(ExpandMoreIcon, {
          sx: {
            fill: colors.primary.bandaiNamcoRed
          }
        }),
        "aria-controls": "panel1a-content",
        id: "panel1a-header",
        children: /*#__PURE__*/_jsx(Typography, {
          variant: "p1",
          color: color != null ? color : colors.primary.dark,
          sx: {
            userSelect: 'none'
          },
          children: label
        })
      }), /*#__PURE__*/_jsx(AccordionDetails, {
        sx: {
          display: 'flex',
          flexDirection: 'column',
          padding: '0',
          margin: "16px 0px 0px 0px",
          userSelect: 'none',
          "&::last-child": {
            background: "red"
          },
          '& a': {
            color: colors.secondary.bandaiNamcoBlue
          }
        },
        children: /*#__PURE__*/_jsx(HtmlRenderer, {
          component: "div",
          value: /*#__PURE__*/_jsx(Typography, {
            variant: "p6",
            color: colors.neutral.neutral2,
            children: content
          })
        })
      })]
    })
  });
}
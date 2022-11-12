import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _ExpandMoreIcon;

import React, { useEffect, useState } from 'react';
import { Box, Accordion, AccordionSummary, AccordionDetails, useTheme, useMediaQuery } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "../Typography"; // Types

import colors from "../../theme/colors";
import { SmallMobileDown } from "../../utils/viewport";
import HtmlRenderer from "../HtmlRenderer"; // import BulletPoint from '../BulletPoint';

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function ExpandableBulletPoints(props) {
  var _label$, _label$2, _label$3;

  var _props$color = props.color,
      color = _props$color === void 0 ? colors.primary.bandaiNamcoBlack : _props$color,
      _props$label = props.label,
      label = _props$label === void 0 ? '' : _props$label,
      bulletPointProps = props.bulletPointProps;
  var theme = useTheme();
  var isMobileMin = useMediaQuery(SmallMobileDown(theme));

  var _useState = useState(isMobileMin),
      _useState2 = _slicedToArray(_useState, 2),
      isShowContent = _useState2[0],
      setIsShowContent = _useState2[1];

  useEffect(function () {
    setIsShowContent(isMobileMin);
  }, [isMobileMin]);

  var handleCheckCollapse = function handleCheckCollapse() {
    if (isMobileMin) {
      setIsShowContent(!isShowContent);
    }
  };

  return /*#__PURE__*/_jsx(Box, {
    sx: {
      display: 'inline-block' // marginBottom: "8px"

    },
    children: /*#__PURE__*/_jsxs(Accordion, {
      expanded: !!label && (label == null ? void 0 : (_label$ = label[0]) == null ? void 0 : _label$.type) === "h4" ? !isShowContent : true,
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
            margin: '0px',
            "& p": {
              padding: "0px",
              margin: "0px"
            }
          }
        },
        "& *": {
          cursor: !!label && (label == null ? void 0 : (_label$2 = label[0]) == null ? void 0 : _label$2.type) === "h4" ? "pointer" : "auto"
        }
      },
      className: "111111111111111",
      children: [/*#__PURE__*/_jsx(AccordionSummary, {
        expandIcon: isMobileMin && !!label && (label == null ? void 0 : (_label$3 = label[0]) == null ? void 0 : _label$3.type) === "h4" ? _ExpandMoreIcon || (_ExpandMoreIcon = /*#__PURE__*/_jsx(ExpandMoreIcon, {})) : null,
        "aria-controls": "panel1a-content",
        id: "panel1a-header",
        onClick: handleCheckCollapse,
        children: label && /*#__PURE__*/_jsx(Box, {
          sx: {
            color: color,
            marginBottom: "16px",
            "& h4": {
              margin: "0px !important",
              padding: "0px !important",
              fontWeight: "600",
              fontSize: {
                xs: "16px",
                md: "18px"
              },
              lineHeight: {
                xs: "22px",
                md: "24px"
              },
              letterSpacing: "-0.2px"
            }
          },
          children: label
        })
      }), /*#__PURE__*/_jsx(AccordionDetails, {
        sx: {
          display: 'flex',
          flexDirection: 'column',
          padding: '0' // margin: "16px 0px 0px 0px",
          // "&::last-child": {
          //   background: "red"
          // }

        },
        children: /*#__PURE__*/_jsx(Typography, {
          variant: 'p6',
          color: colors.neutral.neutral2,
          sx: {
            "& p": {
              width: "100%",
              padding: "0px",
              margin: "0px",
              maxWidth: "100% !important"
            },
            "& div": {
              width: "100%",
              padding: "0px",
              margin: "0px",
              maxWidth: "100% !important"
            },
            "& ul": {
              "& li": {
                width: "100%",
                padding: "0px",
                margin: "0px",
                maxWidth: "100%"
              }
            }
          },
          children: /*#__PURE__*/_jsx(HtmlRenderer, {
            component: "p",
            value: bulletPointProps
          })
        })
      })]
    })
  });
}
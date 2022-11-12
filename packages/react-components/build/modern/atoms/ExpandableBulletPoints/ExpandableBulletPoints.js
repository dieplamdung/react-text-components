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
  const {
    color = colors.primary.bandaiNamcoBlack,
    label = '',
    bulletPointProps
  } = props;
  const theme = useTheme();
  const isMobileMin = useMediaQuery(SmallMobileDown(theme));
  const [isShowContent, setIsShowContent] = useState(isMobileMin);
  useEffect(() => {
    setIsShowContent(isMobileMin);
  }, [isMobileMin]);

  const handleCheckCollapse = () => {
    if (isMobileMin) {
      setIsShowContent(!isShowContent);
    }
  };

  return /*#__PURE__*/_jsx(Box, {
    sx: {
      display: 'inline-block' // marginBottom: "8px"

    },
    children: /*#__PURE__*/_jsxs(Accordion, {
      expanded: !!label && label?.[0]?.type === "h4" ? !isShowContent : true,
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
          cursor: !!label && label?.[0]?.type === "h4" ? "pointer" : "auto"
        }
      },
      className: "111111111111111",
      children: [/*#__PURE__*/_jsx(AccordionSummary, {
        expandIcon: isMobileMin && !!label && label?.[0]?.type === "h4" ? _ExpandMoreIcon || (_ExpandMoreIcon = /*#__PURE__*/_jsx(ExpandMoreIcon, {})) : null,
        "aria-controls": "panel1a-content",
        id: "panel1a-header",
        onClick: handleCheckCollapse,
        children: label && /*#__PURE__*/_jsx(Box, {
          sx: {
            color,
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
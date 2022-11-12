import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import Container from "../../atoms/Container";
import GameShortDescription from "./GameShortDescription";
import BonusItems from "./BonusItems";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const EStoreProductDetailAboutGame = ({
  titleCompareEdition,
  gameShortDescription,
  contentBonus
}) => {
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      paddingBottom: {
        xs: "72px",
        md: "112px"
      }
    },
    className: "content-compare-edition",
    children: [/*#__PURE__*/_jsx(Container, {
      children: /*#__PURE__*/_jsx(Box, {
        sx: {
          padding: {
            xs: "0px 16px",
            md: "0px"
          },
          marginBottom: {
            xs: "24px",
            md: "34px"
          }
        },
        children: /*#__PURE__*/_jsx(Box, {
          sx: {
            width: "100%",
            position: "relative",
            "&::before": {
              position: "absolute",
              content: "' '",
              width: "100%",
              left: "0px",
              top: "0px",
              borderBottom: "1px solid #C1C1C1",
              opacity: "0.5"
            }
          }
        })
      })
    }), /*#__PURE__*/_jsxs(Accordion, {
      sx: {
        boxShadow: 'none',
        minHeight: 'unset',
        margin: "0px !important",
        backgroundColor: 'transparent',
        "&:before": {
          display: "none"
        },
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
      defaultExpanded: false,
      children: [/*#__PURE__*/_jsx(Container, {
        children: /*#__PURE__*/_jsx(Box, {
          sx: {
            padding: {
              xs: "0px 16px",
              md: "0px"
            }
          },
          children: /*#__PURE__*/_jsx(AccordionSummary, {
            expandIcon: /*#__PURE__*/_jsx(ExpandMoreIcon, {
              sx: {
                fill: colors.primary.bandaiNamcoBlack
              }
            }),
            "aria-controls": "panel1a-content",
            id: "panel1a-header",
            children: /*#__PURE__*/_jsx(Typography, {
              variant: "h5",
              children: titleCompareEdition
            })
          })
        })
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          display: "flex",
          paddingTop: {
            xs: "40px",
            md: "74px"
          }
        },
        children: /*#__PURE__*/_jsx(AccordionDetails, {
          sx: {
            padding: "0px",
            width: "100%"
          },
          children: /*#__PURE__*/_jsxs(Box, {
            sx: {
              width: "100%",
              display: "flex",
              flexDirection: "column"
            },
            children: [/*#__PURE__*/_jsx(GameShortDescription, _extends({}, gameShortDescription)), /*#__PURE__*/_jsx(BonusItems, _extends({}, contentBonus))]
          })
        })
      })]
    })]
  });
};

export default EStoreProductDetailAboutGame;
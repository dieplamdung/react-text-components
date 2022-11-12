var _svg;

import { Box } from '@mui/material';
import React from 'react';
import Container from "../../atoms/Container";
import HtmlRenderer from "../../atoms/HtmlRenderer";
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function BonusItems(props) {
  const {
    listImg = [],
    titleBonusItems,
    listBonusItems
  } = props;
  return /*#__PURE__*/_jsxs(Container, {
    sx: {
      paddingTop: {
        xs: "40px",
        lg: "76px"
      },
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        display: "flex",
        flexFlow: "wrap",
        gap: "20px",
        flexDirection: {
          xs: "column",
          lg: "row"
        },
        maxWidth: "100%"
      },
      children: !!(listImg != null && listImg.length) && listImg.map((item, index) => {
        return /*#__PURE__*/_jsx(Box, {
          sx: {
            flex: 1,
            height: "0px",
            maxWidth: {
              xs: "100%",
              lg: "50%"
            },
            minWidth: "40%",
            paddingBottom: {
              xs: "56%",
              lg: "27.5%"
            },
            position: "relative",
            borderRadius: {
              xs: "10px",
              md: "20px"
            },
            display: "flex",
            overflow: "hidden"
          },
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              position: "absolute",
              top: "0px",
              left: "0px",
              width: "100%",
              height: "100%",
              "& img": {
                width: "100%",
                height: "100%",
                objectFit: "cover",
                transition: "all 0.3s",
                "&:hover": {
                  transform: "scale(1.2)"
                }
              }
            },
            children: (item == null ? void 0 : item.nextImg) || /*#__PURE__*/_jsx("img", {
              src: (item == null ? void 0 : item.hefImg) || "",
              alt: ""
            })
          })
        }, index);
      })
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        padding: {
          xs: "40px 16px",
          lg: "78px 0px"
        },
        display: "flex",
        flexDirection: {
          xs: "column",
          lg: "row"
        }
      },
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "h4",
        sx: {
          minWidth: {
            xs: "100%",
            lg: "347px"
          },
          marginLeft: {
            xs: "0px",
            lg: "95px"
          },
          marginRight: {
            xs: "0px",
            lg: "38px"
          }
        },
        children: titleBonusItems
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          paddingTop: {
            xs: "32px",
            lg: "0px"
          },
          display: "flex",
          flexDirection: "column"
        },
        children: !!(listBonusItems != null && listBonusItems.length) && listBonusItems.map((item, index) => {
          return /*#__PURE__*/_jsxs(Box, {
            sx: {
              display: "flex",
              marginBottom: "8px"
            },
            children: [/*#__PURE__*/_jsx(Box, {
              sx: {
                minWidth: "16px",
                display: "flex",
                alignItems: "center"
              },
              children: _svg || (_svg = /*#__PURE__*/_jsx("svg", {
                width: "16",
                height: "16",
                viewBox: "0 0 16 16",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                children: /*#__PURE__*/_jsx("path", {
                  d: "M2 8L6 12L14 4",
                  stroke: "#1E1E1E",
                  strokeWidth: "2",
                  strokeMiterlimit: "10",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                })
              }))
            }), /*#__PURE__*/_jsx(Typography, {
              variant: "p6",
              color: colors.neutral.neutral2,
              sx: {
                maxWidth: {
                  xs: "100%",
                  lg: "350px"
                },
                paddingLeft: "12px",
                whiteSpace: "nowrap",
                overflow: "hidden",
                display: "block",
                textOverflow: "ellipsis",
                "& div": {
                  maxWidth: "100%",
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  display: "block",
                  textOverflow: "ellipsis"
                }
              },
              children: /*#__PURE__*/_jsx(HtmlRenderer, {
                component: "div",
                value: item
              })
            })]
          }, index);
        })
      })]
    })]
  });
}
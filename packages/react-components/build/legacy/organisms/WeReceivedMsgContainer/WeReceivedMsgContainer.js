import React from 'react';
import { Box } from '@mui/material';
import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors"; // Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var WeReceivedMsgContainer = function WeReceivedMsgContainer(_ref) {
  var iconContent = _ref.iconContent,
      title = _ref.title,
      description = _ref.description,
      _ref$labelBtnLeft = _ref.labelBtnLeft,
      labelBtnLeft = _ref$labelBtnLeft === void 0 ? "See what’s new" : _ref$labelBtnLeft,
      hrefBtnLeft = _ref.hrefBtnLeft,
      _ref$labelBtnRight = _ref.labelBtnRight,
      labelBtnRight = _ref$labelBtnRight === void 0 ? "Shop games" : _ref$labelBtnRight,
      hrefBtnRight = _ref.hrefBtnRight;
  var IconImage = "https://images.ctfassets.net/hnoi7ctzfs57/4dLqNFjt0Wd1djAajkMEi9/acfe8390c12b9cbe3aec8fefe0c3eedf/Group_124113.svg";
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: {
        xs: "center",
        md: "flex-start"
      },
      flexDirection: {
        xs: "column",
        md: "row"
      }
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        marginBottom: {
          xs: "32px",
          md: "0px"
        }
      },
      children: /*#__PURE__*/_jsx(Box, {
        sx: {
          maxWidth: {
            xs: "92px",
            md: "124px"
          },
          maxHeight: '110px',
          marginRight: {
            xs: "0px",
            md: "52px"
          },
          "& img": {
            maxWidth: "100%",
            width: "100%",
            height: {
              xs: '100%',
              md: '110px'
            }
          }
        },
        children: /*#__PURE__*/_jsx("img", {
          src: iconContent || IconImage,
          alt: "icon received Msg"
        })
      })
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        maxWidth: {
          xs: "100%",
          md: "379px"
        }
      },
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "h2",
        color: "#121212",
        sx: {
          textAlign: {
            xs: "center",
            md: "left"
          },
          fontSize: {
            xs: "32px",
            md: "46px"
          },
          lineHeight: {
            xs: "40px",
            md: "54px"
          },
          letterSpacing: {
            xs: "-0.8px",
            md: "-1px"
          }
        },
        children: title
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "p4",
        color: colors.neutral.neutral2,
        sx: {
          textAlign: {
            xs: "center",
            md: "left"
          },
          marginTop: {
            xs: "8px",
            md: "16px"
          },
          fontSize: "16px",
          lineHeight: "22px",
          letterSpacing: "-0.2px"
        },
        children: description
      }), /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row"
          },
          justifyContent: {
            xs: "center",
            md: "flex-start"
          },
          alignItems: "center",
          marginTop: {
            xs: "48px",
            md: "44px"
          }
        },
        children: [/*#__PURE__*/_jsx(Button, {
          externalLink: hrefBtnLeft || "",
          variant: "primaryDark",
          sx: {
            width: "165px",
            height: "46px !important",
            marginRight: {
              xs: "0px",
              md: "16px"
            },
            marginBottom: {
              xs: "16px",
              md: "0px"
            }
          },
          children: labelBtnLeft
        }), /*#__PURE__*/_jsx(Button, {
          externalLink: hrefBtnRight || "",
          variant: "secondary",
          sx: {
            width: "165px",
            height: "46px !important"
          },
          children: labelBtnRight
        })]
      })]
    })]
  });
};

export default WeReceivedMsgContainer;
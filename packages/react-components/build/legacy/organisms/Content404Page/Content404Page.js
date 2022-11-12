// Modules
import { Box } from '@mui/material';
import React from 'react';
import Typography from "../../atoms/Typography";
import Button from "../../atoms/Button"; // Styles

import colors from "../../theme/colors";
import Container from "../../atoms/Container"; // Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var Content404Page = function Content404Page(props) {
  var _props$titleCode = props.titleCode,
      titleCode = _props$titleCode === void 0 ? "404" : _props$titleCode,
      _props$mainImage = props.mainImage,
      mainImage = _props$mainImage === void 0 ? "" : _props$mainImage,
      _props$mainImageNext = props.mainImageNext,
      mainImageNext = _props$mainImageNext === void 0 ? "" : _props$mainImageNext,
      _props$titleTop = props.titleTop,
      titleTop = _props$titleTop === void 0 ? "" : _props$titleTop,
      _props$titleBottom = props.titleBottom,
      titleBottom = _props$titleBottom === void 0 ? "" : _props$titleBottom,
      _props$description = props.description,
      description = _props$description === void 0 ? "" : _props$description,
      _props$listPropsBtn = props.listPropsBtn,
      listPropsBtn = _props$listPropsBtn === void 0 ? [] : _props$listPropsBtn;
  return /*#__PURE__*/_jsx(Container, {
    children: /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: {
          xs: '40px 0px',
          md: "60px 0px"
        },
        "& img": {
          width: {
            xs: "49px",
            md: "70px"
          },
          height: {
            xs: "67px",
            md: "97px"
          }
        }
      },
      children: [mainImageNext || /*#__PURE__*/_jsx("img", {
        src: mainImage,
        alt: "icon"
      }), titleCode && /*#__PURE__*/_jsx(Typography, {
        variant: "h4",
        color: colors.primary.bandaiNamcoBlack,
        sx: {
          marginTop: {
            xs: "16px",
            md: "30px"
          }
        },
        children: titleCode
      }), /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: 'row'
          }
        },
        children: [titleTop && /*#__PURE__*/_jsx(Typography, {
          variant: "h4",
          color: colors.primary.bandaiNamcoBlack,
          sx: {
            textAlign: "center"
          },
          children: titleTop
        }), titleBottom && /*#__PURE__*/_jsx(Typography, {
          variant: "h4",
          color: colors.primary.bandaiNamcoBlack,
          sx: {
            textAlign: "center"
          },
          children: titleBottom
        })]
      }), description && /*#__PURE__*/_jsx(Typography, {
        variant: "p6",
        color: colors.neutral.neutral2,
        sx: {
          textAlign: "center",
          marginTop: {
            xs: "16px",
            md: "8px"
          }
        },
        children: description
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: 'center',
          flexDirection: {
            xs: "column",
            lg: "row"
          },
          marginTop: "40px",
          "& a": {
            width: {
              xs: "100%",
              md: "50%",
              lg: "160px"
            },
            margin: {
              xs: "0px 0px 8px 0px",
              lg: "0px 4px"
            }
          }
        },
        children: !!listPropsBtn.length && listPropsBtn.map(function (item, index) {
          return /*#__PURE__*/_jsx(Button, {
            variant: "secondary",
            externalLink: item.href,
            children: item.title
          }, index);
        })
      })]
    })
  });
};

export default Content404Page;
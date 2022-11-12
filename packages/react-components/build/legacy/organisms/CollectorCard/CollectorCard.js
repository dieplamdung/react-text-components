import _extends from "@babel/runtime/helpers/esm/extends";
// import modules
import Box from '@mui/material/Box';
import React from 'react'; // import Link from '@mui/material/Link'

import ExpandableBulletPoints from "../../atoms/ExpandableBulletPoints";
import ButtonPrice from "../../atoms/ButtonPrice";
import colors from "../../theme/colors";
import Typography from "../../atoms/Typography";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var CollectorCard = function CollectorCard(props) {
  var _props$mainImageNext = props.mainImageNext,
      mainImageNext = _props$mainImageNext === void 0 ? '' : _props$mainImageNext,
      _props$mainImage = props.mainImage,
      mainImage = _props$mainImage === void 0 ? '' : _props$mainImage,
      _props$title = props.title,
      title = _props$title === void 0 ? '' : _props$title,
      buttonProps = props.buttonProps,
      priceProps = props.priceProps,
      expandableBulletPointsProps = props.expandableBulletPointsProps,
      isButtonSecond = props.isButtonSecond;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      border: "1px solid ".concat(colors.neutral.neutral5),
      backgroundColor: {
        xs: 'transparent',
        md: colors.primary.bandaiNamcoWhite
      },
      borderRadius: '20px'
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        display: "flex",
        width: "100%",
        paddingBottom: "56%",
        borderRadius: '20px 20px 0px 0px',
        height: "200px",
        position: "relative",
        "& a": {
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0px",
          left: "0px",
          overflow: "hidden"
        },
        "& span": {
          width: "100% !important",
          height: "100% !important",
          position: "absolute !important",
          top: "0px",
          left: "0px",
          overflow: "hidden"
        },
        '& img': {
          objectFit: 'fill',
          borderRadius: "10px 10px 0px 0px",
          display: 'block',
          width: '100%',
          height: 'auto'
        }
      },
      children: mainImageNext || /*#__PURE__*/_jsx("img", {
        src: mainImage,
        alt: title != null ? title : ''
      })
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        padding: {
          xs: '36px 16px',
          lg: '40px 50px'
        },
        borderRadius: '0px 0px 10px 10px'
      },
      children: /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: 'flex',
          flexDirection: {
            xs: "column",
            xl: "row"
          }
        },
        children: [/*#__PURE__*/_jsx(Typography, {
          variant: "h5",
          children: title
        }), /*#__PURE__*/_jsxs(Box, {
          sx: {
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            marginTop: {
              xs: "8px",
              md: "32px",
              xl: "0px"
            },
            paddingLeft: title ? {
              xs: "0px",
              xl: "68px"
            } : "0px",
            flexDirection: {
              xs: "column",
              md: "row"
            }
          },
          children: [/*#__PURE__*/_jsx(Box, {
            sx: {
              display: 'flex',
              flexDirection: 'column',
              rowGap: '8px',
              margin: "0px"
            },
            children: /*#__PURE__*/_jsx(ExpandableBulletPoints, _extends({}, expandableBulletPointsProps))
          }), /*#__PURE__*/_jsx(Box, {
            sx: {
              minWidth: '120px',
              "& .style-ButtonPrice": {
                display: "flex",
                flexDirection: {
                  xs: "row",
                  md: "column"
                },
                width: "100%",
                "& button": {
                  width: "120px"
                },
                "& a": {
                  width: "120px"
                }
              },
              '& .MuiButton-root': {
                padding: '16px 28px'
              },
              marginTop: {
                xs: "30px",
                md: "0px"
              }
            },
            children: /*#__PURE__*/_jsx(ButtonPrice, {
              buttonProps: buttonProps,
              priceProps: priceProps,
              isButtonSecond: isButtonSecond
            })
          })]
        })]
      })
    })]
  });
};

export default CollectorCard;
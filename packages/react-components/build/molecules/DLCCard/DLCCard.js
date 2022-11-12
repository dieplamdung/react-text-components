import _extends from "@babel/runtime/helpers/esm/extends";
// import modules
import Box from '@mui/material/Box';
import React from 'react';
import Link from '@mui/material/Link';
import ButtonPrice from "../../atoms/ButtonPrice";
import colors from "../../theme/colors";
import Typography from "../../atoms/Typography";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// define function
const DLCCard = props => {
  const {
    mainImageNext = '',
    mainImage = '',
    title = '',
    linkHref = '/',
    buttonProps,
    priceProps,
    description,
    isButtonSecond,
    onClickBuy
  } = props;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      backgroundColor: 'transparent',
      borderRadius: '20px',
      maxWidth: {
        xs: '100%',
        md: '357px'
      }
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        maxWidth: '100%',
        flex: {
          xs: '0 0 201px',
          md: '309px 368px 117px'
        },
        height: {
          xs: "174px",
          md: "200px"
        },
        borderRadius: '10px',
        overflow: "hidden",
        "&:hover": {
          '& img': {
            transform: "scale(1.2)"
          }
        },
        '& img': {
          objectFit: 'cover',
          display: 'block',
          width: '100%',
          height: "100%",
          transition: "all 0.3s"
        }
      },
      children: /*#__PURE__*/_jsx(Link, {
        href: linkHref,
        children: !mainImageNext ? /*#__PURE__*/_jsx("img", {
          src: mainImage,
          alt: title != null ? title : ''
        }) : mainImageNext
      })
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        marginTop: '20px',
        marginBottom: '36px'
      },
      children: [/*#__PURE__*/_jsx(Link, {
        href: linkHref,
        sx: {
          textDecoration: "none",
          color: colors.primary.bandaiNamcoBlack
        },
        children: /*#__PURE__*/_jsx(Typography, {
          variant: "h6",
          sx: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": "2",

            /* number of lines to show */
            lineClamp: "2",
            "-webkit-box-orient": "vertical"
          },
          children: title
        })
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "p8",
        marginTop: '8px',
        color: colors.neutral.neutral2,
        sx: {
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          "-webkit-line-clamp": "2",

          /* number of lines to show */
          lineClamp: "2",
          "-webkit-box-orient": "vertical"
        },
        children: description
      })]
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        minWidth: '117px',
        '& .MuiButton-root': {
          padding: '10px 46px'
        },
        "& > div": {
          display: 'flex' // "& button": {
          //   backgroundColor: colors.primary.bandaiNamcoRed,
          //   color: colors.primary.bandaiNamcoWhite,
          // }

        },
        "& > div > div": {
          display: 'flex',
          flexDirection: 'column',
          marginLeft: '12px',
          marginTop: '0px'
        }
      },
      children: /*#__PURE__*/_jsx(ButtonPrice, {
        buttonProps: _extends({}, buttonProps, {
          onClick: () => {
            onClickBuy == null ? void 0 : onClickBuy();
          }
        }),
        priceProps: priceProps,
        isButtonSecond: isButtonSecond
      })
    })]
  });
};

export default /*#__PURE__*/React.memo(DLCCard);
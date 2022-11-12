// import Modules
import Box from '@mui/material/Box';
import React from 'react';
import Button from "../../atoms/Button";
import Typography from "../../atoms/Typography";
import Image from "../../atoms/Image";
import HtmlRenderer from "../../atoms/HtmlRenderer"; // import View port

import { TabletDown } from "../../utils/viewport"; // import Styles

import colors from "../../theme/colors";
import { useMediaQuery, useTheme } from '@mui/material';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const SupportInfo = props => {
  const {
    title,
    button,
    mainImageUrlMobile,
    mainImageUrl
  } = props;
  const theme = useTheme();
  const isMobileDown = useMediaQuery(TabletDown(theme));
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      backgroundColor: colors.otherColor.ablabaster,
      borderRadius: '20px',
      display: 'flex',
      flexDirection: {
        xs: 'column',
        lg: 'row'
      },
      justifyContent: 'space-between',
      minHeight: '206px',
      width: '100%'
    },
    children: [/*#__PURE__*/_jsxs(Box, {
      sx: {
        padding: {
          xs: '48px 24px 0px',
          lg: '48px 24px 48px 80px'
        },
        textAlign: {
          xs: 'center',
          lg: 'left'
        }
      },
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: isMobileDown ? 'h1' : 'h5',
        color: colors.primary.bandaiNamcoBlack,
        children: /*#__PURE__*/_jsx(HtmlRenderer, {
          component: "div",
          value: title
        })
      }), /*#__PURE__*/_jsx(Button, {
        externalLink: button?.externalLink,
        target: button?.target,
        variant: button?.variant ?? 'primaryDark',
        sx: {
          marginTop: {
            xs: '16px',
            md: '24px'
          }
        },
        children: button?.label
      })]
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        minWidth: {
          lg: '320px'
        },
        position: 'relative',
        paddingTop: {
          xs: '22px',
          lg: '0px'
        },
        '& img': {
          objectFit: 'fill',
          width: '100%',
          height: '100%'
        }
      },
      children: /*#__PURE__*/_jsx(Image, {
        src: isMobileDown ? mainImageUrlMobile : mainImageUrl,
        sx: {
          borderTopRightRadius: {
            xl: '20px',
            lg: '20px',
            xs: '0px'
          },
          position: {
            xs: 'relative'
          },
          borderBottomRightRadius: '20px',
          borderBottomLeftRadius: {
            xl: '0px',
            lg: '0px',
            xs: '20px'
          }
        }
      })
    })]
  });
};

export default SupportInfo;
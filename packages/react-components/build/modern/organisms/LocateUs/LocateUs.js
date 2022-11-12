import _extends from "@babel/runtime/helpers/esm/extends";
// import Modules
import { Box, Link, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import Typography from "../../atoms/Typography"; // import Styles

import Container from "../../atoms/Container";
import colors from "../../theme/colors";
// import Types
import { MobileDown } from "../../utils/viewport";
import LocaleMapDesktop from "./LocaleMapDesktop";
import LocaleMapMobile from "./LocaleMapMobile";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const LocateUs = props => {
  const {
    title,
    description,
    connect,
    localeMap,
    mainImageNextProps,
    listTabs
  } = props;
  const theme = useTheme();
  const isMobileDown = useMediaQuery(MobileDown(theme));
  return /*#__PURE__*/_jsxs(Box, {
    children: [/*#__PURE__*/_jsxs(Container, {
      children: [title && /*#__PURE__*/_jsx(Typography, {
        variant: "h3",
        sx: {
          color: colors.primary.bandaiNamcoBlack
        },
        children: title
      }), description && /*#__PURE__*/_jsx(Box, {
        sx: {
          marginTop: '8px'
        },
        children: /*#__PURE__*/_jsxs(Typography, {
          variant: "p6",
          sx: {
            color: colors.neutral.neutral2
          },
          children: [description, ` `, connect.title && /*#__PURE__*/_jsx(Link, {
            href: connect.href,
            sx: {
              color: colors.neutral.neutral2,
              textDecoration: 'none',
              position: 'relative',
              '&:after': {
                content: "''",
                height: '1px',
                width: '100%',
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0px',
                backgroundColor: colors.neutral.neutral2
              }
            },
            children: connect.title
          })]
        })
      })]
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        marginTop: '54px'
      },
      children: !isMobileDown ? /*#__PURE__*/_jsx(LocaleMapDesktop, _extends({
        listTabs: [],
        mainImageNextProps: mainImageNextProps
      }, localeMap)) : /*#__PURE__*/_jsx(LocaleMapMobile, _extends({
        mainImageNextProps: mainImageNextProps
      }, localeMap, {
        listTabs: listTabs
      }))
    })]
  });
};

export default LocateUs;
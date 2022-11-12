import _extends from "@babel/runtime/helpers/esm/extends";
// Modules
import { Box, Link, useMediaQuery } from '@mui/material';
import React from 'react';
import Typography from "../../atoms/Typography";
import FeaturedNewsCard from "../../molecules/FeaturedNewsCard";
import PopularNewsCard from "../../molecules/PopularNewsCard"; // Styles

import colors from "../../theme/colors";
import { useTheme } from '@mui/styles';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var ExploreNewsContent = function ExploreNewsContent(props) {
  var listThumbnail = props.listThumbnail,
      title = props.title,
      viewMore = props.viewMore;
  var theme = useTheme();
  var isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      padding: {
        xs: '72px 0',
        lg: '156px 0'
      }
    },
    children: [/*#__PURE__*/_jsxs(Box, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '0',
        paddingRight: '16px',
        maxWidth: {
          xs: 'calc(100vw - 16px)',
          md: '720px',
          lg: '960px',
          xl: '1140px'
        }
      },
      children: [title && /*#__PURE__*/_jsx(Typography, {
        variant: "h4",
        color: colors.primary.bandaiNamcoBlack,
        children: title
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          display: 'flex',
          alignItems: 'center'
        },
        children: (viewMore == null ? void 0 : viewMore.title) && /*#__PURE__*/_jsx(Link, {
          href: viewMore == null ? void 0 : viewMore.href,
          target: viewMore == null ? void 0 : viewMore.target,
          sx: {
            borderBottom: "1px solid ".concat(colors.neutral.neutral2),
            transition: 'all .4s',
            color: colors.neutral.neutral2,
            textDecoration: 'none',
            lineHeight: '21px',
            display: 'inline-block',
            '&:hover': {
              '& p': {
                color: colors.primary.bandaiNamcoBlack
              },
              borderBottom: "1px solid ".concat(colors.primary.bandaiNamcoBlack)
            }
          },
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "p5",
            color: colors.neutral.neutral2,
            sx: {
              transition: 'all .4s'
            },
            children: viewMore == null ? void 0 : viewMore.title
          })
        })
      })]
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        marginTop: '40px',
        display: 'flex',
        flexDirection: {
          xs: 'column',
          lg: 'row'
        },
        gap: '22px'
      },
      children: listThumbnail == null ? void 0 : listThumbnail.map(function (item, index) {
        return index <= 3 && /*#__PURE__*/_jsx(Box, {
          sx: {
            width: {
              xs: '100%',
              lg: '357px'
            }
          },
          children: !isMobile ? /*#__PURE__*/_jsx(FeaturedNewsCard, _extends({}, item, {
            titleVariant: 'p1'
          })) : /*#__PURE__*/_jsx(PopularNewsCard, _extends({}, item, {
            tags: item.tags
          }))
        }, index);
      })
    })]
  });
};

export default ExploreNewsContent;
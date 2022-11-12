var _Grid;

import { Box, Grid, Link } from '@mui/material';
import React from 'react'; // Types

import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const SearchResultStore = props => {
  const {
    propsStore
  } = props;
  return /*#__PURE__*/_jsxs(Box, {
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
      children: [propsStore.title && /*#__PURE__*/_jsx(Typography, {
        variant: "h2",
        color: colors.primary.bandaiNamcoBlack,
        children: propsStore.title
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          display: 'flex',
          alignItems: 'center'
        },
        children: /*#__PURE__*/_jsx(Box, {
          children: propsStore.viewMore?.title && /*#__PURE__*/_jsx(Link, {
            href: propsStore.viewMore?.href,
            target: propsStore.viewMore?.target,
            sx: {
              borderBottom: `1px solid ${colors.neutral.neutral2}`,
              transition: 'all .4s',
              color: colors.neutral.neutral2,
              textDecoration: 'none',
              lineHeight: '21px',
              display: 'inline-block',
              '&:hover': {
                '& p': {
                  color: colors.primary.bandaiNamcoBlack
                },
                borderBottom: `1px solid ${colors.primary.bandaiNamcoBlack}`
              }
            },
            children: /*#__PURE__*/_jsx(Typography, {
              variant: "p5",
              color: colors.neutral.neutral2,
              sx: {
                transition: 'all .4s'
              },
              children: propsStore.viewMore?.title
            })
          })
        })
      })]
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        marginTop: {
          xs: '35px',
          md: '67px'
        }
      },
      children: _Grid || (_Grid = /*#__PURE__*/_jsx(Grid, {
        container: true,
        rowSpacing: "36px",
        columnSpacing: "24px",
        children: "d\xE2d"
      }))
    })]
  });
};

export default SearchResultStore;
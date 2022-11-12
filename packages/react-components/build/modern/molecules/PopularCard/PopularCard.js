import _extends from "@babel/runtime/helpers/esm/extends";
// Modules
import Box from '@mui/material/Box';
import React from 'react';
import Link from '@mui/material/Link';
import Typography from "../../atoms/Typography";
import Tags from "../../atoms/Tags"; // Styles

import colors from "../../theme/colors"; // Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const PopularCard = props => {
  const {
    mainImage = '',
    title = '',
    tags,
    locale = '',
    mainImageNext,
    linkHref = '/'
  } = props;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      borderRadius: '20px',
      width: '100%'
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        width: '100%',
        paddingBottom: '100%',
        position: 'relative',
        backgroundColor: '#eee',
        borderRadius: '20px',
        overflow: 'hidden',
        transform: 'rotate(0)',
        '& img': {
          objectFit: 'cover',
          borderRadius: '20px',
          display: 'block',
          width: '100%',
          height: '100%',
          transform: "scale(1)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.2)"
          }
        }
      },
      children: /*#__PURE__*/_jsx(Link, {
        href: linkHref,
        sx: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: '100%',
          borderRadius: '20px',
          overflow: 'hidden',
          "& span": {
            width: "100% !important",
            height: "100% !important"
          }
        },
        children: !mainImageNext ? /*#__PURE__*/_jsx("img", {
          src: mainImage,
          alt: title ?? ''
        }) : mainImageNext
      })
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        paddingTop: '28px',
        width: '100%'
      },
      children: [/*#__PURE__*/_jsx(Box, {
        children: /*#__PURE__*/_jsx(Link, {
          href: linkHref,
          sx: {
            textDecoration: "none"
          },
          children: /*#__PURE__*/_jsx(Typography, {
            color: colors.primary.bandaiNamcoBlack,
            variant: "p3",
            sx: {
              WebkitLineClamp: {
                xs: 2
              },
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              lineHeight: {
                md: "24px",
                xs: "22px"
              },
              display: '-webkit-box'
            },
            children: title
          })
        })
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          display: 'flex',
          gap: '12px',
          flexWrap: "wrap",
          marginTop: {
            md: '20px',
            xs: '18.67px'
          },
          '& .bgTag': {
            backgroundColor: 'transparent',
            border: `1px solid ${colors.neutral.neutral2}`
          },
          '& > div > div': {
            '&:hover': {
              backgroundColor: 'transparent',
              '& p': {
                color: colors.neutral.neutral2
              }
            },
            '& p': {
              color: colors.neutral.neutral2
            }
          }
        },
        children: tags.map((tag, index) => typeof tag?.title === 'string' ? /*#__PURE__*/_jsx(Tags, _extends({}, tag), index) : tag.title)
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          marginTop: '16px'
        },
        children: /*#__PURE__*/_jsx(Typography, {
          color: colors.neutral.neutral2,
          variant: "l2",
          children: locale
        })
      })]
    })]
  });
};

export default /*#__PURE__*/React.memo(PopularCard);
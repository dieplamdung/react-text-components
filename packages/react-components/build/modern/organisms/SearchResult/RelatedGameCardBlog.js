import _extends from "@babel/runtime/helpers/esm/extends";
// Modules
import Box from '@mui/material/Box';
import React from 'react';
import Typography from "../../atoms/Typography";
import Tags from "../../atoms/Tags";
import HtmlRenderer from "../../atoms/HtmlRenderer"; // Styles

import colors from "../../theme/colors"; // Types

import { Link } from '@mui/material';
import { convertCustomTagForFilter } from "../../utils";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const RelatedGameCardBlog = props => {
  const {
    mainImageNext,
    mainImage = '',
    title = '',
    tags,
    date = '',
    href = "/",
    hrefTag = "/",
    isBlog = false,
    description,
    isIcon = false
  } = props;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      flex: "1",
      maxWidth: {
        xs: '100%',
        md: '209.3px',
        lg: "357px"
      },
      minWidth: {
        xs: '288px',
        md: 'auto'
      },
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        maxWidth: {
          xs: '100%',
          md: '357px'
        },
        minWidth: "110px",
        height: "auto",
        paddingBottom: '70%',
        borderRadius: '10px',
        overflow: "hidden",
        maxHeight: '307px',
        position: 'relative',
        transform: 'rotate(0)',
        '& img': {
          position: "absolute",
          objectFit: 'cover',
          borderRadius: '10px',
          display: 'block',
          width: '100%',
          height: '100%',
          transform: "scale(1)",
          transition: "all 0.5s",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          "&:hover": {
            transform: "scale(1.2)"
          }
        }
      },
      children: /*#__PURE__*/_jsx(Link, {
        href: href,
        sx: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          "& span": {
            width: '100% !important',
            height: '100% !important'
          }
        },
        children: mainImageNext || /*#__PURE__*/_jsx("img", {
          src: mainImage,
          alt: title ?? ''
        })
      })
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        marginTop: '24px'
      },
      children: [!!tags?.length && !isIcon && /*#__PURE__*/_jsx(Box, {
        sx: {
          display: 'flex',
          gap: '5px',
          flexWrap: "wrap",
          marginBottom: '8px'
        },
        children: tags.map((tag, index) => /*#__PURE__*/_jsx(Link, {
          href: `${hrefTag}?tag=${convertCustomTagForFilter(tag?.title || "", isBlog)}`,
          sx: {
            textDecoration: "none"
          },
          children: /*#__PURE__*/_jsx(Tags, _extends({}, tag))
        }, index))
      }), /*#__PURE__*/_jsx(Box, {
        children: /*#__PURE__*/_jsx(Link, {
          href: href,
          sx: {
            textDecoration: "none",
            lineHeight: "0px"
          },
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "p1",
            sx: {
              color: colors.primary.bandaiNamcoBlack,
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              overflow: 'hidden'
            },
            children: /*#__PURE__*/_jsx(HtmlRenderer, {
              component: "div",
              value: title
            })
          })
        })
      }), description && /*#__PURE__*/_jsx(Typography, {
        variant: "p8",
        sx: {
          color: colors.primary.bandaiNamcoBlack,
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: {
            xs: 4,
            md: 3
          },
          overflow: 'hidden',
          marginTop: '16px'
        },
        children: /*#__PURE__*/_jsx(HtmlRenderer, {
          component: "div",
          value: description
        })
      }), date && /*#__PURE__*/_jsx(Box, {
        sx: {
          marginTop: {
            xs: '18px',
            md: '26px'
          }
        },
        children: /*#__PURE__*/_jsx(Typography, {
          className: "date",
          variant: "l2",
          color: colors.neutral.neutral2,
          children: date.toUpperCase()
        })
      })]
    })]
  });
};

export default /*#__PURE__*/React.memo(RelatedGameCardBlog);
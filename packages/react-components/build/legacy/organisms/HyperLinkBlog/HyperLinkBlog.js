import React from 'react';
import { Box, Link } from '@mui/material';
import colors from "../../theme/colors";
import Typography from "../../atoms/Typography";
import HtmlRenderer from "../../atoms/HtmlRenderer";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function HyperLinkBlog(props) {
  var title = props.title,
      description = props.description,
      mainImageNext = props.mainImageNext,
      mainImage = props.mainImage,
      target = props.target,
      link = props.link;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      padding: '8px',
      border: "1px solid ".concat(colors.neutral.neutral5),
      maxWidth: {
        md: '452px',
        xs: '311px'
      },
      width: '100%',
      borderRadius: '10px'
    },
    children: [/*#__PURE__*/_jsx(Link, {
      target: target != null ? target : '_blank',
      href: link != null ? link : '/',
      children: /*#__PURE__*/_jsx(Box, {
        sx: {
          width: {
            xs: '83px',
            md: '98px'
          },
          height: {
            xs: '83px',
            md: '98px'
          },
          borderRadius: '10px',
          overflow: 'hidden',
          transform: 'rotate(0)',
          '& img': {
            position: 'absolute',
            objectFit: 'cover',
            borderRadius: '10px',
            display: 'block',
            width: '100%',
            height: '100%',
            transform: "scale(1)",
            transition: "all 0.5s",
            "&:hover": {
              transform: "scale(1.2)"
            }
          }
        },
        children: !!mainImageNext || /*#__PURE__*/_jsx("img", {
          src: mainImage,
          alt: title != null ? title : ''
        })
      })
    }), /*#__PURE__*/_jsx(Link, {
      target: target != null ? target : '_blank',
      href: link != null ? link : '/',
      sx: {
        textDecoration: 'none',
        marginLeft: '16px'
      },
      children: /*#__PURE__*/_jsxs(Box, {
        children: [title && /*#__PURE__*/_jsx(Box, {
          sx: {
            '& p': {
              WebkitLineClamp: 1,
              height: '20px',
              wordBreak: "break-word",
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              color: colors.primary.bandaiNamcoBlack,
              fontSize: {
                xs: '14px',
                md: '16px'
              }
            }
          },
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "p6",
            color: colors.primary.bandaiNamcoBlack,
            sx: {
              WebkitLineClamp: 1,
              height: '20px',
              wordBreak: "break-word",
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical'
            },
            children: /*#__PURE__*/_jsx(HtmlRenderer, {
              component: "div",
              value: title
            })
          })
        }), description && /*#__PURE__*/_jsx(Box, {
          sx: {
            '& p': {
              fontSize: '12px',
              color: colors.neutral.neutral4
            }
          },
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "p9",
            color: colors.neutral.neutral4,
            sx: {
              WebkitLineClamp: 1,
              height: '14px',
              wordBreak: "break-word",
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              marginTop: '3px'
            },
            children: /*#__PURE__*/_jsx(HtmlRenderer, {
              component: "div",
              value: description
            })
          })
        }), link && /*#__PURE__*/_jsx(Link, {
          target: target != null ? target : '_blank',
          href: link,
          sx: {
            textDecoration: 'none',
            color: colors.primary.bandaiNamcoRed,
            display: 'inline-block',
            marginTop: '4px'
          },
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "p9",
            color: colors.primary.bandaiNamcoRed,
            sx: {
              WebkitLineClamp: 1,
              height: '14px',
              wordBreak: "break-word",
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              marginTop: '4px'
            },
            children: /*#__PURE__*/_jsx(HtmlRenderer, {
              component: "div",
              value: link
            })
          })
        })]
      })
    })]
  });
}

export default HyperLinkBlog;
import _extends from "@babel/runtime/helpers/esm/extends";
// import Modules
import React from 'react';
import { Box } from '@mui/material';
import Link from '@mui/material/Link';
import Typography from "../../atoms/Typography";
import Tags from "../../atoms/Tags";
import { IconPlayVideo } from "../../atoms/Icon"; // import Styles

import colors from "../../theme/colors"; // import Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const MediaGalleryCard = props => {
  const {
    img,
    nextImage,
    alt,
    tags,
    play = false,
    description,
    href,
    aspectRatio,
    color,
    icon,
    iconText,
    hideContent
  } = props;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      aspectRatio: aspectRatio || '16/9'
    },
    children: [/*#__PURE__*/_jsx(Box, {
      className: "card",
      sx: {
        position: 'relative',
        aspectRatio: aspectRatio || '16/9',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: {
          xs: '10px',
          lg: '20px'
        },
        '& a': {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          '& img': {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: {
              xs: '100%',
              md: "100%"
            },
            aspectRatio: aspectRatio || '16/9',
            borderRadius: {
              xs: '10px',
              lg: '20px'
            },
            objectFit: "cover"
          }
        }
      },
      children: /*#__PURE__*/_jsxs(Link, {
        href: href,
        sx: {
          textDecoration: "none",
          display: 'inherit',
          '& span': {
            width: '100% !important',
            height: '100% !important'
          }
        },
        children: [nextImage ?? /*#__PURE__*/_jsx("img", {
          src: img,
          alt: alt || ""
        }), play && /*#__PURE__*/_jsx(IconPlayVideo, {
          sx: {
            backdropFilter: 'blur(2px)',
            borderRadius: '50%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: {
              xs: '44px',
              lg: '57px'
            },
            height: {
              xs: '44px',
              lg: '57px'
            }
          }
        })]
      })
    }), !hideContent && /*#__PURE__*/_jsx(Box, {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      },
      children: /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: 'flex',
          gap: '6px',
          justifyContent: 'space-between',
          marginTop: '22px',
          alignItems: 'center'
        },
        children: [/*#__PURE__*/_jsx(Typography, {
          variant: "p6",
          sx: {
            color: color || colors.primary.bandaiNamcoBlack,
            whiteSpace: 'wrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box',
            maxWidth: {
              xs: '30ch',
              md: '45ch',
              lg: '100ch'
            },
            WebkitLineClamp: {
              xs: 1,
              md: 1
            }
          },
          children: description
        }), tags && /*#__PURE__*/_jsx(Tags, _extends({}, tags, {
          // hoverPermission purpose to disable hover on tag
          hoverPermission: false
        })), icon && /*#__PURE__*/_jsxs(Box, {
          sx: {
            display: 'inline-flex',
            alignItems: {
              xs: 'flex-end',
              md: 'center'
            },
            gap: '6px',
            '& svg': {
              fontSize: "unset"
            },
            '& path': {
              fill: 'white'
            },
            '& p': {
              borderBottomStyle: 'solid',
              borderBottomWidth: '1px',
              display: 'inline-block'
            }
          },
          children: [icon, iconText && /*#__PURE__*/_jsx(Link, {
            href: iconText?.href,
            children: /*#__PURE__*/_jsx(Typography, {
              variant: "p7",
              sx: {
                color: colors.primary.bandaiNamcoWhite
              },
              children: iconText?.label
            })
          })]
        })]
      })
    })]
  });
};

export default /*#__PURE__*/React.memo(MediaGalleryCard);
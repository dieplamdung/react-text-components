import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { Box } from '@mui/material';
import Link from '@mui/material/Link';
import Typography from "../../atoms/Typography";
import Tags from "../../atoms/Tags";
import { IconPlayVideo } from "../../atoms/Icon"; // Styles

import colors from "../../theme/colors"; // Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var GalleryCard = function GalleryCard(props) {
  var img = props.img,
      nextImage = props.nextImage,
      alt = props.alt,
      tags = props.tags,
      _props$play = props.play,
      play = _props$play === void 0 ? false : _props$play,
      description = props.description,
      href = props.href,
      _props$aspectRatio = props.aspectRatio,
      aspectRatio = _props$aspectRatio === void 0 ? '100%' : _props$aspectRatio,
      color = props.color,
      icon = props.icon;
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      height: '100%'
    },
    children: /*#__PURE__*/_jsx(Box, {
      className: "card",
      sx: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: {
          xs: '10px',
          md: '20px'
        },
        '& a': {
          width: "100%",
          '& img': {
            width: {
              xs: '100%',
              md: "100%"
            },
            aspectRatio: aspectRatio,
            borderRadius: {
              xs: '10px',
              md: '20px'
            },
            objectFit: "cover"
          }
        }
      },
      children: /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: 'flex',
          flexDirection: 'column'
        },
        children: [/*#__PURE__*/_jsxs(Link, {
          href: href,
          sx: {
            textDecoration: "none",
            position: 'relative',
            display: 'inherit'
          },
          children: [nextImage != null ? nextImage : /*#__PURE__*/_jsx("img", {
            src: img || "",
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
        }), description && /*#__PURE__*/_jsxs(Box, {
          sx: {
            display: 'flex',
            gap: '6px',
            justifyContent: 'space-between',
            marginTop: '22px'
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
              WebkitLineClamp: {
                xs: 3,
                lg: 1
              }
            },
            children: description
          }), tags && /*#__PURE__*/_jsx(Tags, _extends({}, tags, {
            // hoverPermission purpose to disable hover on tag
            hoverPermission: false
          })), icon && icon]
        })]
      })
    })
  });
};

export default GalleryCard;
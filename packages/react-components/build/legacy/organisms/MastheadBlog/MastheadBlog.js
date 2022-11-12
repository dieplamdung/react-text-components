// React and components
import { Box } from '@mui/material';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";

var MastheadBlog = function MastheadBlog(props) {
  var _props$mainImageNext = props.mainImageNext,
      mainImageNext = _props$mainImageNext === void 0 ? '' : _props$mainImageNext,
      _props$mainImage = props.mainImage,
      mainImage = _props$mainImage === void 0 ? '' : _props$mainImage,
      _props$alt = props.alt,
      alt = _props$alt === void 0 ? '' : _props$alt;
  return /*#__PURE__*/_jsx(Box, {
    children: /*#__PURE__*/_jsx(Box, {
      sx: {
        minWidth: "110px",
        borderRadius: '10px',
        overflow: "hidden",
        height: '364px',
        position: 'relative',
        '& img': {
          objectFit: 'cover',
          display: 'block',
          width: '100%',
          height: '100%'
        },
        "& span": {
          width: '100% !important',
          height: '100% !important'
        }
      },
      children: mainImageNext || /*#__PURE__*/_jsx("img", {
        src: mainImage,
        alt: alt != null ? alt : ''
      })
    })
  });
};

export default MastheadBlog;
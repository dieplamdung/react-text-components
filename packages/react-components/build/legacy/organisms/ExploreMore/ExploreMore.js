import _extends from "@babel/runtime/helpers/esm/extends";
// import Modules
import React from 'react';
import { Box, Link } from '@mui/material';
import Typography from "../../atoms/Typography";
import ThumbnailNewsCardExplore from "./ThumbnailNewsCardExplore"; // import Styles

import colors from "../../theme/colors"; // import Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var ExploreMore = function ExploreMore(props) {
  var _props$listThumbnail = props.listThumbnail,
      listThumbnail = _props$listThumbnail === void 0 ? [] : _props$listThumbnail,
      title = props.title,
      viewMore = props.viewMore,
      _props$classSection = props.classSection,
      classSection = _props$classSection === void 0 ? 'thumbnail-card-carousel' : _props$classSection,
      _props$isBlog = props.isBlog,
      isBlog = _props$isBlog === void 0 ? false : _props$isBlog;

  var ViewMore = function ViewMore() {
    return /*#__PURE__*/_jsx(Box, {
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
    });
  };

  return /*#__PURE__*/_jsxs(Box, {
    className: classSection,
    sx: {
      '& a': {
        outline: 'none'
      }
    },
    children: [/*#__PURE__*/_jsxs(Box, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      children: [title && /*#__PURE__*/_jsx(Typography, {
        variant: "h4",
        color: colors.primary.bandaiNamcoBlack,
        children: title
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          display: {
            xs: "none",
            md: 'flex'
          },
          alignItems: 'center'
        },
        children: ViewMore()
      })]
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        marginTop: '44px',
        display: 'flex',
        flexWrap: {
          xs: 'wrap',
          md: 'nowrap'
        },
        gap: '22px'
      },
      children: !!(listThumbnail != null && listThumbnail.length) && listThumbnail.map(function (item, idx) {
        return /*#__PURE__*/_jsx(React.Fragment, {
          children: /*#__PURE__*/_jsx(ThumbnailNewsCardExplore, _extends({}, item, {
            isBlog: isBlog
          }))
        }, idx);
      })
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        display: {
          xs: 'flex',
          md: "none"
        },
        alignItems: 'center',
        marginTop: "40px"
      },
      children: ViewMore()
    })]
  });
};

export default ExploreMore;
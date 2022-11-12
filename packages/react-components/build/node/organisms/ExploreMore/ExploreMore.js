"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _ThumbnailNewsCardExplore = _interopRequireDefault(require("./ThumbnailNewsCardExplore"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

// import Modules
// import Styles
const ExploreMore = props => {
  const {
    listThumbnail = [],
    title,
    viewMore,
    classSection = 'thumbnail-card-carousel',
    isBlog = false
  } = props;

  const ViewMore = () => {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      children: (viewMore == null ? void 0 : viewMore.title) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
        href: viewMore == null ? void 0 : viewMore.href,
        target: viewMore == null ? void 0 : viewMore.target,
        sx: {
          borderBottom: `1px solid ${_colors.default.neutral.neutral2}`,
          transition: 'all .4s',
          color: _colors.default.neutral.neutral2,
          textDecoration: 'none',
          lineHeight: '21px',
          display: 'inline-block',
          '&:hover': {
            '& p': {
              color: _colors.default.primary.bandaiNamcoBlack
            },
            borderBottom: `1px solid ${_colors.default.primary.bandaiNamcoBlack}`
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p5",
          color: _colors.default.neutral.neutral2,
          sx: {
            transition: 'all .4s'
          },
          children: viewMore == null ? void 0 : viewMore.title
        })
      })
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    className: classSection,
    sx: {
      '& a': {
        outline: 'none'
      }
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      },
      children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h4",
        color: _colors.default.primary.bandaiNamcoBlack,
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: {
            xs: "none",
            md: 'flex'
          },
          alignItems: 'center'
        },
        children: ViewMore()
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        marginTop: '44px',
        display: 'flex',
        flexWrap: {
          xs: 'wrap',
          md: 'nowrap'
        },
        gap: '22px'
      },
      children: !!(listThumbnail != null && listThumbnail.length) && listThumbnail.map((item, idx) => {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.default.Fragment, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ThumbnailNewsCardExplore.default, (0, _extends2.default)({}, item, {
            isBlog: isBlog
          }))
        }, idx);
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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

var _default = ExploreMore;
exports.default = _default;
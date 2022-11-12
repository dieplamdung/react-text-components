"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _FeaturedNewsCard = _interopRequireDefault(require("../../molecules/FeaturedNewsCard"));

var _PopularNewsCard = _interopRequireDefault(require("../../molecules/PopularNewsCard"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _styles = require("@mui/styles");

var _jsxRuntime = require("react/jsx-runtime");

// Modules
// Styles
const ExploreNewsContent = props => {
  const {
    listThumbnail,
    title,
    viewMore
  } = props;
  const theme = (0, _styles.useTheme)();
  const isMobile = (0, _material.useMediaQuery)(theme.breakpoints.down('lg'));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      padding: {
        xs: '72px 0',
        lg: '156px 0'
      }
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
      children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h4",
        color: _colors.default.primary.bandaiNamcoBlack,
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: 'flex',
          alignItems: 'center'
        },
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
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        marginTop: '40px',
        display: 'flex',
        flexDirection: {
          xs: 'column',
          lg: 'row'
        },
        gap: '22px'
      },
      children: listThumbnail == null ? void 0 : listThumbnail.map((item, index) => index <= 3 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          width: {
            xs: '100%',
            lg: '357px'
          }
        },
        children: !isMobile ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_FeaturedNewsCard.default, (0, _extends2.default)({}, item, {
          titleVariant: 'p1'
        })) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_PopularNewsCard.default, (0, _extends2.default)({}, item, {
          tags: item.tags
        }))
      }, index))
    })]
  });
};

var _default = ExploreNewsContent;
exports.default = _default;
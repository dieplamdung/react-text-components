"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

var _Grid;

const SearchResultStore = props => {
  var _propsStore$viewMore, _propsStore$viewMore2, _propsStore$viewMore3, _propsStore$viewMore4;

  const {
    propsStore
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
      children: [propsStore.title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h2",
        color: _colors.default.primary.bandaiNamcoBlack,
        children: propsStore.title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: 'flex',
          alignItems: 'center'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          children: ((_propsStore$viewMore = propsStore.viewMore) == null ? void 0 : _propsStore$viewMore.title) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
            href: (_propsStore$viewMore2 = propsStore.viewMore) == null ? void 0 : _propsStore$viewMore2.href,
            target: (_propsStore$viewMore3 = propsStore.viewMore) == null ? void 0 : _propsStore$viewMore3.target,
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
              children: (_propsStore$viewMore4 = propsStore.viewMore) == null ? void 0 : _propsStore$viewMore4.title
            })
          })
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        marginTop: {
          xs: '35px',
          md: '67px'
        }
      },
      children: _Grid || (_Grid = /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
        container: true,
        rowSpacing: "36px",
        columnSpacing: "24px",
        children: "d\xE2d"
      }))
    })]
  });
};

var _default = SearchResultStore;
exports.default = _default;
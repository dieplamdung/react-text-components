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

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _viewport = require("../../utils/viewport");

var _LocaleMapDesktop = _interopRequireDefault(require("./LocaleMapDesktop"));

var _LocaleMapMobile = _interopRequireDefault(require("./LocaleMapMobile"));

var _jsxRuntime = require("react/jsx-runtime");

// import Modules
// import Styles
// import Types
const LocateUs = props => {
  const {
    title,
    description,
    connect,
    localeMap,
    mainImageNextProps,
    listTabs
  } = props;
  const theme = (0, _material.useTheme)();
  const isMobileDown = (0, _material.useMediaQuery)((0, _viewport.MobileDown)(theme));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container.default, {
      children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h3",
        sx: {
          color: _colors.default.primary.bandaiNamcoBlack
        },
        children: title
      }), description && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          marginTop: '8px'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
          variant: "p6",
          sx: {
            color: _colors.default.neutral.neutral2
          },
          children: [description, ` `, connect.title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
            href: connect.href,
            sx: {
              color: _colors.default.neutral.neutral2,
              textDecoration: 'none',
              position: 'relative',
              '&:after': {
                content: "''",
                height: '1px',
                width: '100%',
                position: 'absolute',
                bottom: '0',
                left: '0',
                right: '0px',
                backgroundColor: _colors.default.neutral.neutral2
              }
            },
            children: connect.title
          })]
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        marginTop: '54px'
      },
      children: !isMobileDown ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_LocaleMapDesktop.default, (0, _extends2.default)({
        listTabs: [],
        mainImageNextProps: mainImageNextProps
      }, localeMap)) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_LocaleMapMobile.default, (0, _extends2.default)({
        mainImageNextProps: mainImageNextProps
      }, localeMap, {
        listTabs: listTabs
      }))
    })]
  });
};

var _default = LocateUs;
exports.default = _default;
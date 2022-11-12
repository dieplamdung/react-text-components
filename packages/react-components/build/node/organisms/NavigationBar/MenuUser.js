"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = require("../../atoms/Icon");

var _material = require("@mui/material");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _jsxRuntime = require("react/jsx-runtime");

function MenuUser(props) {
  const {
    handleOpenMenuUserInfo,
    avatarUrl,
    name
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center',
      cursor: 'pointer'
    },
    onClick: () => handleOpenMenuUserInfo(),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        alignItems: 'center'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          '& img': {
            width: '55px',
            height: '55px',
            borderRadius: '100%',
            overflow: 'hidden',
            objectFit: 'cover'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: avatarUrl != null ? avatarUrl : '',
          alt: ""
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h5",
        sx: {
          color: _colors.default.primary.dark,
          fontSize: '20px',
          lineHeight: '26px',
          marginLeft: '16px'
        },
        children: name
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        '& svg': {
          height: '10px',
          position: 'absolute',
          right: '0px',
          top: 0,
          bottom: 0,
          margin: 'auto'
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconNextSlide, {
        htmlColor: "transparent",
        sx: {
          height: '10px'
        }
      })
    })]
  });
}

var _default = MenuUser;
exports.default = _default;
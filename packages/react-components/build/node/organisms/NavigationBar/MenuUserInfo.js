"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _Icon = require("../../atoms/Icon");

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

var _IconClose;

// React.forwardRef((props: ContainerProps, ref: any) 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MenuUserInfo = /*#__PURE__*/_react.default.forwardRef((props, ref) => {
  const {
    handleCloseMenuUserInfo,
    handleCloseAllMenu,
    account,
    details,
    orders,
    address,
    logout,
    isRelative = false,
    isShow = false
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      backgroundColor: _colors.default.primary.bandaiNamcoWhite,
      position: "fixed",
      top: "0px",
      bottom: "0px",
      width: '92.2%',
      marginRight: "32px",
      minHeight: '100vh',
      paddingLeft: '32px',
      paddingRight: '32px',
      overflow: 'auto',
      zIndex: '9999',
      transition: '.4s ease-in-out',
      left: isShow ? "0px" : `calc(-100vw)`
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: '32px 0 49px 0',
        alignItems: 'center'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconPrevSlide, {
        htmlColor: "transparent",
        sx: {
          width: '15px'
        },
        onClick: () => handleCloseMenuUserInfo()
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        onClick: () => handleCloseAllMenu(),
        children: _IconClose || (_IconClose = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconClose, {}))
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h1",
        sx: {
          color: _colors.default.primary.bandaiNamcoBlack,
          fontSize: '32px',
          lineHeight: ' 38px'
        },
        children: account
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h3",
        sx: {
          color: _colors.default.primary.bandaiNamcoBlack,
          fontSize: '24px',
          marginTop: '34px',
          lineHeight: ' 30px'
        },
        children: details != null ? details : 'Details'
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h3",
        sx: {
          color: _colors.default.primary.bandaiNamcoBlack,
          fontSize: '24px',
          marginTop: '34px',
          lineHeight: ' 30px'
        },
        children: orders != null ? orders : 'Orders'
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h3",
        sx: {
          color: _colors.default.primary.bandaiNamcoBlack,
          fontSize: '24px',
          marginTop: '34px',
          lineHeight: ' 30px'
        },
        children: address != null ? address : 'Address'
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        position: 'absolute',
        bottom: '29px',
        width: 'calc(100% - 64px)',
        marginTop: isRelative ? '200px' : '0',
        left: '32px',
        right: '32px',
        borderTop: `1px solid ${_colors.default.neutral.neutral5}`,
        paddingTop: '24px'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p5",
          sx: {
            color: _colors.default.primary.bandaiNamcoBlack,
            cursor: 'pointer'
          },
          children: logout != null ? logout : 'Logout'
        })
      })
    })]
  });
});

var _default = MenuUserInfo;
exports.default = _default;
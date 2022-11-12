"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../Button/Button"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _utils = require("../../utils");

var _Typography = _interopRequireDefault(require("../Typography"));

var _jsxRuntime = require("react/jsx-runtime");

// import modules
// define function
const ButtonPrice = props => {
  const {
    buttonProps,
    priceProps,
    isButtonSecond = false
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      display: {
        xs: 'flex',
        md: (priceProps == null ? void 0 : priceProps.variant) === 'horizontal' ? 'flex' : 'block'
      },
      alignItems: 'center'
    },
    className: "style-ButtonPrice",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, buttonProps, {
      sx: {
        backgroundColor: isButtonSecond ? _colors.default.primary.bandaiNamcoWhite : _colors.default.primary.bandaiNamcoRed,
        color: isButtonSecond ? _colors.default.primary.bandaiNamcoBlack : _colors.default.primary.bandaiNamcoWhite,
        padding: {
          xs: '8px 48px 12px',
          md: '10px 46.5px 14px'
        },
        '&:hover': {
          backgroundColor: isButtonSecond ? _colors.default.primary.bandaiNamcoWhite : _colors.default.accent.accentRed[1],
          color: isButtonSecond ? _colors.default.accent.accentRed[1] : _colors.default.primary.bandaiNamcoWhite
        }
      },
      children: buttonProps.label
    })), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        display: {
          xs: 'block',
          md: 'flex'
        },
        flexDirection: (priceProps == null ? void 0 : priceProps.variant) === 'horizontal' ? 'column' : 'row',
        marginTop: {
          xs: '0px',
          md: (priceProps == null ? void 0 : priceProps.variant) === 'horizontal' ? '0' : '12px'
        },
        marginLeft: {
          xs: '12px',
          md: (priceProps == null ? void 0 : priceProps.variant) === 'horizontal' ? '12px' : '0'
        }
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "l1",
        color: _colors.default.neutral.neutral2,
        sx: {
          fontSize: {
            xs: '12px',
            md: '14px'
          },
          lineHeight: '19px',
          fontWeight: 400,
          marginRight: '4px'
        },
        children: priceProps == null ? void 0 : priceProps.label
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
        variant: "p7",
        color: _colors.default.primary.bandaiNamcoBlack,
        children: [priceProps == null ? void 0 : priceProps.currency, !priceProps.noFormat ? (0, _utils.formatCurrency)(Number(priceProps == null ? void 0 : priceProps.amount) || 0, 2) : priceProps == null ? void 0 : priceProps.amount]
      })]
    })]
  });
};

var _default = ButtonPrice;
exports.default = _default;
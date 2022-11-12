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

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

// import Modules
// import Styles
const SummaryCard = props => {
  const {
    title,
    total = 0,
    discount = 0,
    quantity = 0,
    totalText,
    shippingText,
    button
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      minWidth: {
        xs: '100%',
        md: '357px'
      }
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "h4",
      sx: {
        marginBottom: {
          xs: '8px',
          md: '52px'
        }
      },
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p6",
        color: _colors.default.primary.bandaiNamcoBlack,
        children: `${quantity} items`
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p6",
        children: `S$${total.toFixed(2)}`
      })]
    }), discount > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p6",
        color: _colors.default.primary.bandaiNamcoBlack,
        children: `discount`
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p6",
        children: `S$${discount.toFixed(2)}`
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        width: '100%',
        height: '1px',
        background: '#c1c1c1',
        opacity: '0.5',
        margin: {
          xs: '16px 0px',
          md: '28px 0px'
        }
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "h6",
          children: totalText
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          width: "70%",
          variant: "p8",
          children: shippingText
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h6",
        children: `S$${(total - discount).toFixed(2)}`
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        display: {
          xs: 'none',
          md: 'block'
        },
        marginTop: {
          md: '52px'
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({
        fullWidth: true
      }, button))
    })]
  });
};

var _default = SummaryCard;
exports.default = _default;
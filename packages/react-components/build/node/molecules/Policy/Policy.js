"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _jsxRuntime = require("react/jsx-runtime");

// Modules
// Styles
// Types
const Policy = props => {
  const {
    title,
    content
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      maxWidth: '740px',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      color: _colors.default.primary.bandaiNamcoBlack,
      variant: "h1",
      children: title
    }), content && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      color: _colors.default.neutral.neutral2,
      variant: "p4",
      sx: {
        fontSize: '16px',
        lineHeight: '22px',
        marginTop: '32px',
        '& li': {
          margin: '8px 0'
        },
        '& b': {
          color: _colors.default.primary.bandaiNamcoBlack
        },
        '& br': {
          display: 'block',
          content: "''",
          margin: '2px 0'
        },
        '& h2': {
          marginTop: '46px',
          color: _colors.default.primary.bandaiNamcoBlack
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
        component: "div",
        value: content
      })
    })]
  });
};

var _default = Policy;
exports.default = _default;
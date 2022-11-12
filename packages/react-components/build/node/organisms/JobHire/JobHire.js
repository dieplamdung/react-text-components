"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

// import Modules
// import Styles
// import Types
const JobHire = props => {
  const {
    title,
    mainImageNextProps,
    mainImage,
    description,
    buttonProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: 'h3',
      color: _colors.default.primary.dark,
      sx: {
        maxWidth: '740px',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
        component: "div",
        value: title
      })
    }), mainImage && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        marginTop: {
          xs: '24px',
          md: '31px'
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          maxWidth: '926px',
          paddingBottom: '56.15%',
          borderRadius: '10px',
          overflow: "hidden",
          position: 'relative',
          transform: 'rotate(0)',
          marginLeft: 'auto',
          marginRight: 'auto',
          '& img': {
            position: "absolute",
            objectFit: 'cover',
            borderRadius: '20px 20px 0 0',
            display: 'block',
            width: '100%',
            height: '100%',
            transform: "scale(1)",
            transition: "all 0.5s",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            "&:hover": {
              transform: "scale(1.2)"
            }
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100%',
            height: '100%',
            "& span": {
              width: '100% !important',
              height: '100% !important'
            }
          },
          children: (mainImageNextProps == null ? void 0 : mainImageNextProps(mainImage, title)) || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: mainImage,
            alt: title || ""
          })
        })
      })
    }), description && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        maxWidth: '740px',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: {
          xs: '31px',
          md: '60px'
        },
        marginBottom: '40px'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: 'p2',
        color: _colors.default.neutral.neutral2,
        sx: {
          fontSize: {
            xs: '16px',
            md: '18px'
          },
          lineHeight: {
            xs: '22px',
            md: '26px'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
          component: "div",
          value: description
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        maxWidth: '740px',
        marginLeft: 'auto',
        marginRight: 'auto'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, buttonProps))
    })]
  });
};

var _default = JobHire;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Image = _interopRequireDefault(require("../../atoms/Image"));

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _viewport = require("../../utils/viewport");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _material = require("@mui/material");

var _jsxRuntime = require("react/jsx-runtime");

// import Modules
// import View port
// import Styles
const SupportInfo = props => {
  var _button$variant;

  const {
    title,
    button,
    mainImageUrlMobile,
    mainImageUrl
  } = props;
  const theme = (0, _material.useTheme)();
  const isMobileDown = (0, _material.useMediaQuery)((0, _viewport.TabletDown)(theme));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      backgroundColor: _colors.default.otherColor.ablabaster,
      borderRadius: '20px',
      display: 'flex',
      flexDirection: {
        xs: 'column',
        lg: 'row'
      },
      justifyContent: 'space-between',
      minHeight: '206px',
      width: '100%'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        padding: {
          xs: '48px 24px 0px',
          lg: '48px 24px 48px 80px'
        },
        textAlign: {
          xs: 'center',
          lg: 'left'
        }
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: isMobileDown ? 'h1' : 'h5',
        color: _colors.default.primary.bandaiNamcoBlack,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
          component: "div",
          value: title
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        externalLink: button == null ? void 0 : button.externalLink,
        target: button == null ? void 0 : button.target,
        variant: (_button$variant = button == null ? void 0 : button.variant) != null ? _button$variant : 'primaryDark',
        sx: {
          marginTop: {
            xs: '16px',
            md: '24px'
          }
        },
        children: button == null ? void 0 : button.label
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        minWidth: {
          lg: '320px'
        },
        position: 'relative',
        paddingTop: {
          xs: '22px',
          lg: '0px'
        },
        '& img': {
          objectFit: 'fill',
          width: '100%',
          height: '100%'
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Image.default, {
        src: isMobileDown ? mainImageUrlMobile : mainImageUrl,
        sx: {
          borderTopRightRadius: {
            xl: '20px',
            lg: '20px',
            xs: '0px'
          },
          position: {
            xs: 'relative'
          },
          borderBottomRightRadius: '20px',
          borderBottomLeftRadius: {
            xl: '0px',
            lg: '0px',
            xs: '20px'
          }
        }
      })
    })]
  });
};

var _default = SupportInfo;
exports.default = _default;
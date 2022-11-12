"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Tags = _interopRequireDefault(require("../../atoms/Tags"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _utils = require("../../utils");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

// Modules
// Styles
const BuyGameContainer = props => {
  var _buttonPriceProps$pri, _buttonPriceProps$pri2, _buttonPriceProps$pri3;

  const {
    mainImage = '',
    title = '',
    tags,
    buttonPriceProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: {
        xs: "column",
        md: "row"
      },
      alignItems: {
        xs: "unset",
        md: "center"
      }
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        width: {
          xs: "100%",
          md: "452px"
        },
        height: {
          xs: '175px',
          md: '254px'
        },
        '& img': {
          objectFit: 'cover',
          borderRadius: '20px',
          display: 'block',
          width: '100%',
          height: '100%'
        }
      },
      children: mainImage && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: mainImage,
        alt: title != null ? title : ''
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        padding: {
          xs: "24px 0 0 0",
          md: "0  0 0 56px"
        }
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          display: 'flex',
          gap: '5px',
          '& .bgTag': {
            backgroundColor: 'transparent',
            border: `1px solid ${_colors.default.neutral.neutral2}`
          },
          '& > div > div': {
            '&:hover': {
              backgroundColor: 'transparent',
              '& p': {
                color: _colors.default.neutral.neutral2
              }
            },
            '& p': {
              color: _colors.default.neutral.neutral2
            }
          }
        },
        children: tags.map(tag => /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tags.default, (0, _extends2.default)({}, tag)))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          marginTop: '8px'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          color: _colors.default.primary.bandaiNamcoBlack,
          variant: "h5",
          sx: {
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": "2",

            /* number of lines to show */
            lineClamp: "2",
            "-webkit-box-orient": "vertical"
          },
          children: title
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        sx: {
          marginTop: '16px'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
          sx: {
            marginBottom: '16px'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p6",
            color: _colors.default.neutral.neutral2,
            children: buttonPriceProps == null ? void 0 : (_buttonPriceProps$pri = buttonPriceProps.priceProps) == null ? void 0 : _buttonPriceProps$pri.label
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
            variant: "p3",
            color: _colors.default.neutral.neutral2,
            children: [buttonPriceProps == null ? void 0 : (_buttonPriceProps$pri2 = buttonPriceProps.priceProps) == null ? void 0 : _buttonPriceProps$pri2.currency, (0, _utils.formatCurrency)((buttonPriceProps == null ? void 0 : (_buttonPriceProps$pri3 = buttonPriceProps.priceProps) == null ? void 0 : _buttonPriceProps$pri3.amount) || 0, 2)]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
          sx: {
            display: 'flex',
            gap: '12px',
            '& button': {
              width: {
                xs: '50%',
                md: 'unset'
              }
            }
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, buttonPriceProps.buttonBuy, {
            sx: {
              backgroundColor: _colors.default.primary.bandaiNamcoRed,
              color: _colors.default.primary.bandaiNamcoWhite
            }
          })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, buttonPriceProps.buttonLearnMore, {
            sx: {
              color: {
                xs: _colors.default.primary.bandaiNamcoBlack,
                md: _colors.default.neutral.neutral2
              }
            }
          }))]
        })]
      })]
    })]
  });
};

var _default = BuyGameContainer;
exports.default = _default;
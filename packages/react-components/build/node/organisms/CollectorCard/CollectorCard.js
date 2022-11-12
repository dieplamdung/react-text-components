"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireDefault(require("react"));

var _ExpandableBulletPoints = _interopRequireDefault(require("../../atoms/ExpandableBulletPoints"));

var _ButtonPrice = _interopRequireDefault(require("../../atoms/ButtonPrice"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _jsxRuntime = require("react/jsx-runtime");

// import modules
// import Link from '@mui/material/Link'
const CollectorCard = props => {
  const {
    mainImageNext = '',
    mainImage = '',
    title = '',
    // linkHref = '/', 
    buttonProps,
    priceProps,
    expandableBulletPointsProps,
    isButtonSecond
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      border: `1px solid ${_colors.default.neutral.neutral5}`,
      backgroundColor: {
        xs: 'transparent',
        md: _colors.default.primary.bandaiNamcoWhite
      },
      borderRadius: '20px'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        display: "flex",
        width: "100%",
        paddingBottom: "56%",
        borderRadius: '20px 20px 0px 0px',
        height: "200px",
        position: "relative",
        "& a": {
          width: "100%",
          height: "100%",
          position: "absolute",
          top: "0px",
          left: "0px",
          overflow: "hidden"
        },
        "& span": {
          width: "100% !important",
          height: "100% !important",
          position: "absolute !important",
          top: "0px",
          left: "0px",
          overflow: "hidden"
        },
        '& img': {
          objectFit: 'fill',
          borderRadius: "10px 10px 0px 0px",
          display: 'block',
          width: '100%',
          height: 'auto'
        }
      },
      children: mainImageNext || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: mainImage,
        alt: title != null ? title : ''
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        padding: {
          xs: '36px 16px',
          lg: '40px 50px'
        },
        borderRadius: '0px 0px 10px 10px'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        sx: {
          display: 'flex',
          flexDirection: {
            xs: "column",
            xl: "row"
          }
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "h5",
          children: title
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
          sx: {
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            marginTop: {
              xs: "8px",
              md: "32px",
              xl: "0px"
            },
            paddingLeft: title ? {
              xs: "0px",
              xl: "68px"
            } : "0px",
            flexDirection: {
              xs: "column",
              md: "row"
            }
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            sx: {
              display: 'flex',
              flexDirection: 'column',
              rowGap: '8px',
              margin: "0px"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExpandableBulletPoints.default, (0, _extends2.default)({}, expandableBulletPointsProps))
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            sx: {
              minWidth: '120px',
              "& .style-ButtonPrice": {
                display: "flex",
                flexDirection: {
                  xs: "row",
                  md: "column"
                },
                width: "100%",
                "& button": {
                  width: "120px"
                },
                "& a": {
                  width: "120px"
                }
              },
              '& .MuiButton-root': {
                padding: '16px 28px'
              },
              marginTop: {
                xs: "30px",
                md: "0px"
              }
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonPrice.default, {
              buttonProps: buttonProps,
              priceProps: priceProps,
              isButtonSecond: isButtonSecond
            })
          })]
        })]
      })
    })]
  });
};

var _default = CollectorCard;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _jsxRuntime = require("react/jsx-runtime");

// Modules
// Styles
const Content404Page = props => {
  const {
    titleCode = "404",
    mainImage = "",
    mainImageNext = "",
    titleTop = "",
    titleBottom = "",
    description = "",
    listPropsBtn = []
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: "flex",
        width: "100%",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: {
          xs: '40px 0px',
          md: "60px 0px"
        },
        "& img": {
          width: {
            xs: "49px",
            md: "70px"
          },
          height: {
            xs: "67px",
            md: "97px"
          }
        }
      },
      children: [mainImageNext || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: mainImage,
        alt: "icon"
      }), titleCode && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h4",
        color: _colors.default.primary.bandaiNamcoBlack,
        sx: {
          marginTop: {
            xs: "16px",
            md: "30px"
          }
        },
        children: titleCode
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: "flex",
          flexDirection: {
            xs: "column",
            lg: 'row'
          }
        },
        children: [titleTop && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "h4",
          color: _colors.default.primary.bandaiNamcoBlack,
          sx: {
            textAlign: "center"
          },
          children: titleTop
        }), titleBottom && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "h4",
          color: _colors.default.primary.bandaiNamcoBlack,
          sx: {
            textAlign: "center"
          },
          children: titleBottom
        })]
      }), description && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p6",
        color: _colors.default.neutral.neutral2,
        sx: {
          textAlign: "center",
          marginTop: {
            xs: "16px",
            md: "8px"
          }
        },
        children: description
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: 'center',
          flexDirection: {
            xs: "column",
            lg: "row"
          },
          marginTop: "40px",
          "& a": {
            width: {
              xs: "100%",
              md: "50%",
              lg: "160px"
            },
            margin: {
              xs: "0px 0px 8px 0px",
              lg: "0px 4px"
            }
          }
        },
        children: !!listPropsBtn.length && listPropsBtn.map((item, index) => {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
            variant: "secondary",
            externalLink: item.href,
            children: item.title
          }, index);
        })
      })]
    })
  });
};

var _default = Content404Page;
exports.default = _default;
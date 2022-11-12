"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _ExpandMore = _interopRequireDefault(require("@mui/icons-material/ExpandMore"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _GameDetailInformation = _interopRequireDefault(require("./GameDetailInformation"));

var _jsxRuntime = require("react/jsx-runtime");

const EStoreProductDetailGameSpecs = ({
  titleCompareEdition,
  gameDetailInformation
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      paddingBottom: {
        xs: "24px",
        md: "34px"
      }
    },
    className: "content-compare-edition",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          padding: {
            xs: "0px 16px",
            md: "0px"
          },
          marginBottom: {
            xs: "24px",
            md: "34px"
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            width: "100%",
            position: "relative",
            "&::before": {
              position: "absolute",
              content: "' '",
              width: "100%",
              left: "0px",
              top: "0px",
              borderBottom: "1px solid #C1C1C1",
              opacity: "0.5"
            }
          }
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Accordion, {
      sx: {
        boxShadow: 'none',
        minHeight: 'unset',
        margin: "0px !important",
        backgroundColor: 'transparent',
        "&:before": {
          display: "none"
        },
        '& .MuiAccordionSummary-root': {
          minHeight: 'unset',
          margin: '0px',
          padding: '0px'
        },
        '& .MuiAccordionSummary-content': {
          margin: '0px'
        },
        '& .Mui-expanded': {
          minHeight: 'unset !important',
          '& .MuiAccordionSummary-content': {
            minHeight: 'unset',
            margin: '0px'
          }
        }
      },
      defaultExpanded: false,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            padding: {
              xs: "0px 16px",
              md: "0px"
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.AccordionSummary, {
            expandIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExpandMore.default, {
              sx: {
                fill: _colors.default.primary.bandaiNamcoBlack
              }
            }),
            "aria-controls": "panel1a-content",
            id: "panel1a-header",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
              variant: "h5",
              children: titleCompareEdition
            })
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: "flex",
          paddingTop: {
            xs: "40px",
            md: "74px"
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.AccordionDetails, {
          sx: {
            padding: "0px",
            width: "100%"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              width: "100%",
              display: "flex",
              flexDirection: "column"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_GameDetailInformation.default, (0, _extends2.default)({}, gameDetailInformation))
          })
        })
      })]
    })]
  });
};

var _default = EStoreProductDetailGameSpecs;
exports.default = _default;
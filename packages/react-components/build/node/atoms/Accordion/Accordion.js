"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Accordion;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _Accordion = _interopRequireDefault(require("@mui/material/Accordion"));

var _ExpandMore = _interopRequireDefault(require("@mui/icons-material/ExpandMore"));

var _Typography = _interopRequireDefault(require("../Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _HtmlRenderer = _interopRequireDefault(require("../HtmlRenderer"));

var _jsxRuntime = require("react/jsx-runtime");

// import Modules
// import Styles
function Accordion(props) {
  const {
    color = _colors.default.primary.bandaiNamcoBlack,
    label = '',
    content
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      display: 'inline-block',
      marginBottom: "8px",
      borderBottomStyle: 'solid',
      borderBottomWidth: '1px',
      color: _colors.default.neutral.neutral5,
      paddingBottom: '24px',
      width: '100%'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Accordion.default, {
      sx: {
        boxShadow: 'none',
        minHeight: 'unset',
        backgroundColor: 'transparent',
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
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.AccordionSummary, {
        expandIcon: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExpandMore.default, {
          sx: {
            fill: _colors.default.primary.bandaiNamcoRed
          }
        }),
        "aria-controls": "panel1a-content",
        id: "panel1a-header",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p1",
          color: color != null ? color : _colors.default.primary.dark,
          sx: {
            userSelect: 'none'
          },
          children: label
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.AccordionDetails, {
        sx: {
          display: 'flex',
          flexDirection: 'column',
          padding: '0',
          margin: "16px 0px 0px 0px",
          userSelect: 'none',
          "&::last-child": {
            background: "red"
          },
          '& a': {
            color: _colors.default.secondary.bandaiNamcoBlue
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
          component: "div",
          value: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p6",
            color: _colors.default.neutral.neutral2,
            children: content
          })
        })
      })]
    })
  });
}
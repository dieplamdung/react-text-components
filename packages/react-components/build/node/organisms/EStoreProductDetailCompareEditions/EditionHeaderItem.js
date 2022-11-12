"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = EditionHeaderItem;

var _system = require("@mui/system");

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function EditionHeaderItem(props) {
  const {
    titleEdition,
    valuePrice,
    id,
    onClickBuy,
    labelButton
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_system.Box, {
    sx: {
      width: {
        xs: "110px",
        lg: "120px",
        xl: "140px"
      },
      minWidth: {
        xs: "110px",
        lg: "120px",
        xl: "140px"
      },
      maxWidth: {
        xs: "110px",
        lg: "120px",
        xl: "140px"
      },
      overflow: "hidden",
      padding: {
        xs: "8px 14px",
        lg: "14px 24px"
      },
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "p1",
      color: _colors.default.primary.bandaiNamcoBlack,
      children: titleEdition
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "p6",
      color: _colors.default.neutral.neutral2,
      sx: {
        lineHeight: {
          xs: "20px",
          md: "22px"
        }
      },
      children: valuePrice
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_system.Box, {
      sx: {
        paddingTop: "14px"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        variant: "secondaryBlack",
        onClick: () => {
          onClickBuy == null ? void 0 : onClickBuy(id);
        },
        children: labelButton
      })
    })]
  });
}
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("../../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function Tab(props) {
  const {
    tabList = [],
    titleSelect,
    onSelectTab
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      display: "flex"
    },
    children: (tabList == null ? void 0 : tabList.length) && tabList.map((tab, index) => {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p3",
        color: titleSelect === (tab == null ? void 0 : tab.value) ? _colors.default.primary.bandaiNamcoRed : _colors.default.neutral.neutral4,
        sx: {
          width: "fit-content",
          lineHeight: {
            md: "24px",
            xs: "22px"
          },
          marginRight: {
            xs: "28px",
            md: "48px"
          },
          position: "relative",
          cursor: "pointer",
          "&:before": {
            position: "absolute",
            display: "flex",
            content: "' '",
            width: titleSelect === (tab == null ? void 0 : tab.value) ? "100%" : "0%",
            bottom: "0px",
            left: "0px",
            borderRadius: "20px",
            borderBottom: "2px solid",
            borderBottomColor: _colors.default.primary.bandaiNamcoRed,
            transition: "all 0.3s"
          },
          "&:hover": {
            color: _colors.default.primary.bandaiNamcoRed,
            "&:before": {
              width: "100%"
            }
          }
        },
        onClick: () => onSelectTab(tab.value),
        children: tab == null ? void 0 : tab.title
      }, index);
    })
  });
}

var _default = Tab;
exports.default = _default;
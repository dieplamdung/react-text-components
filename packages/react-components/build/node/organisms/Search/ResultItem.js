"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _viewport = require("../../utils/viewport");

var _jsxRuntime = require("react/jsx-runtime");

var _Box;

const ResultItem = ({
  title,
  listResult = [],
  isRecent = false,
  onClearRecent = () => {},
  hrefSeeAll = "",
  valueSearch = ""
}) => {
  const theme = (0, _material.useTheme)();
  const isTabletDown = (0, _material.useMediaQuery)((0, _viewport.TabletDown)(theme));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      flex: 1
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: "flex",
        justifyContent: "space-between"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p7",
        color: _colors.default.neutral.neutral4,
        sx: {
          marginBottom: "8px"
        },
        children: title
      }), isRecent && isTabletDown && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p5",
        color: _colors.default.neutral.neutral2,
        sx: {
          position: "relative",
          cursor: "pointer",
          width: "fit-content",
          "&::before": {
            content: '" "',
            position: "absolute",
            left: "0px",
            bottom: "0px",
            width: "100%",
            borderBottom: `2px solid ${_colors.default.neutral.neutral2}`
          }
        },
        onClick: onClearRecent,
        children: "Clear all"
      })]
    }), !!listResult.length && listResult.map((item, index) => {
      if (index < 5) {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            marginBottom: "16px"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
            href: item.href,
            sx: {
              textDecoration: "none",
              "&:hover": {
                "& p": {
                  "&::after": {
                    width: "100%"
                  }
                }
              }
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
              variant: "p5",
              color: "#151515",
              sx: {
                width: "fit-content",
                position: "relative",
                "&::after": {
                  content: "' '",
                  position: "absolute",
                  left: "0px",
                  bottom: "0px",
                  width: "0%",
                  transition: "all 0.3s",
                  borderBottom: `1px solid ${_colors.default.neutral.neutral4}`
                }
              },
              children: item.title
            })
          })
        }, index);
      }

      return null;
    }), !isRecent && listResult.length > 5 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
      href: `${hrefSeeAll}/search?value=${valueSearch}`,
      sx: {
        textDecoration: "none"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p5",
        color: _colors.default.neutral.neutral2,
        sx: {
          position: "relative",
          cursor: "pointer",
          width: "fit-content",
          marginBottom: {
            xs: "16px",
            ld: "0px"
          },
          "&::before": {
            content: '" "',
            position: "absolute",
            left: "0px",
            bottom: "0px",
            width: "100%",
            borderBottom: `2px solid ${_colors.default.neutral.neutral2}`
          }
        },
        onClick: onClearRecent,
        children: "See all results"
      })
    }), _Box || (_Box = /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {}))]
  });
};

var _default = ResultItem;
exports.default = _default;
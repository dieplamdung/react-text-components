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

var _index = require("./index");

var _jsxRuntime = require("react/jsx-runtime");

// eslint-disable-next-line import/no-cycle
function Type(props) {
  const {
    title,
    typeList,
    onSelectType,
    itemSelectType,
    isDisable = false,
    padding = 0
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      opacity: isDisable ? "0.4" : "1",
      pointerEvents: isDisable ? "none" : "auto"
    },
    children: [(0, _index.WrapperContainer)( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      color: _colors.default.neutral.neutral2,
      variant: "p6",
      children: title
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        width: "100%",
        display: "flex",
        flexWrap: "wrap",
        gap: "12px",
        paddingTop: "14px",
        paddingLeft: {
          xs: `${padding + 16}px`,
          md: `${padding}px`,
          lg: "0px"
        }
      },
      children: !!(typeList != null && typeList.length) && typeList.map((item, index) => {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            padding: "12.5px 32px",
            border: "1px solid",
            borderRadius: "40px",
            borderColor: (itemSelectType == null ? void 0 : itemSelectType.id) === (item == null ? void 0 : item.id) ? _colors.default.secondary.bandaiNamcoBlue : _colors.default.neutral.neutral5,
            cursor: "pointer",
            transition: "all 0.3s",
            "&:hover": {
              borderColor: _colors.default.secondary.bandaiNamcoBlue,
              "& p": {
                color: _colors.default.secondary.bandaiNamcoBlue
              }
            }
          },
          onClick: () => onSelectType == null ? void 0 : onSelectType(item),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p7",
            sx: {
              lineHeight: {
                xs: "18px",
                lg: "19px"
              },
              fontWeight: "600",
              color: (itemSelectType == null ? void 0 : itemSelectType.id) === (item == null ? void 0 : item.id) ? _colors.default.secondary.bandaiNamcoBlue : _colors.default.primary.bandaiNamcoBlack
            },
            children: item == null ? void 0 : item.titleType
          })
        }, index);
      })
    })]
  });
}

var _default = Type;
exports.default = _default;
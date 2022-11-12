"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _Icon = require("../../atoms/Icon");

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

var _IconVisa, _IconVisa2;

function OrderPayment(props) {
  const {
    title,
    titlePayment,
    value,
    titleIcon
  } = props;

  const renderIcon = () => {
    switch (titleIcon) {
      case "visa":
        return _IconVisa || (_IconVisa = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconVisa, {}));

      default:
        return _IconVisa2 || (_IconVisa2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconVisa, {}));
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      padding: {
        xs: "32px 0px",
        md: "48px 0px"
      },
      position: "relative",
      "&:before": {
        content: "' '",
        position: "absolute",
        width: "100%",
        bottom: "0px",
        left: "0px",
        borderBottom: "1px solid #DDDDDD",
        opacity: "0.5"
      }
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      color: _colors.default.primary.bandaiNamcoBlack,
      sx: {
        fontSize: {
          xs: "20px",
          md: "26px"
        },
        lineHeight: {
          xs: "26px",
          md: "32px"
        },
        fontWeight: "700",
        marginBottom: {
          xs: "24px",
          md: "28px"
        }
      },
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: "flex",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: "flex",
          flexDirection: "column",
          width: "100%"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          color: _colors.default.primary.bandaiNamcoBlack,
          sx: {
            fontSize: {
              xs: "16px",
              md: "18px"
            },
            lineHeight: {
              xs: "22px",
              md: "24px"
            },
            fontWeight: "700",
            letterSpacing: "-0.2px"
          },
          children: titlePayment
        })
      }), renderIcon(), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        sx: {
          fontSize: "16px",
          fontWeight: "400",
          lineHeight: "22px",
          whiteSpace: "nowrap",
          marginLeft: "4px"
        },
        children: value
      })]
    })]
  });
}

var _default = /*#__PURE__*/_react.default.memo(OrderPayment);

exports.default = _default;
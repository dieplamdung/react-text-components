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

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _OrderItem = _interopRequireDefault(require("../OrderItem/OrderItem"));

var _jsxRuntime = require("react/jsx-runtime");

// import modules
// Types
// define function
const OrderItemList = props => {
  const {
    title,
    listOder
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      display: "flex",
      flexDirection: {
        xs: "column",
        md: "row"
      },
      width: "100%",
      marginBottom: {
        xs: "48px",
        md: "132px"
      },
      "&:last-child": {
        marginBottom: "0px"
      }
    },
    children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      color: _colors.default.primary.bandaiNamcoBlack,
      variant: "p1",
      sx: {
        marginRight: {
          xs: "0px",
          md: "50px",
          xl: "146px"
        },
        marginBottom: {
          xs: "24px",
          md: "0px"
        },
        minWidth: "150px"
      },
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        flex: 1,
        display: "flex",
        flexDirection: "column"
      },
      children: !!(listOder != null && listOder.length) && listOder.map((item, index) => {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          sx: {
            marginBottom: "20px",
            "&:last-child": {
              marginBottom: "0px"
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_OrderItem.default, (0, _extends2.default)({}, item))
        }, index);
      })
    })]
  });
};

var _default = /*#__PURE__*/_react.default.memo(OrderItemList);

exports.default = _default;
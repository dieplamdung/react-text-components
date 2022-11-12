"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireDefault(require("react"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _jsxRuntime = require("react/jsx-runtime");

// import modules
// define function
const UserLogo = props => {
  const {
    // nextLogo,
    // hrefImg,
    userName // alt

  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
    sx: {
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      padding: {
        xs: "40px 0px 48px 12px",
        md: "50px 0px 62px 44px",
        lg: "100px 0px 112px 94px"
      }
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "h1",
      color: _colors.default.primary.bandaiNamcoBlack // sx={{
      //   marginLeft: {
      //     xs: "16px",
      //     md: "32px"
      //   }
      // }}
      ,
      children: userName || ""
    })
  });
};

var _default = /*#__PURE__*/_react.default.memo(UserLogo);

exports.default = _default;
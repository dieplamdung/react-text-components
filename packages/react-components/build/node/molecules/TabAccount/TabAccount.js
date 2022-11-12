"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import modules
// define function
const TabAccount = props => {
  const {
    titleList,
    titleSelect = "",
    onChangeTab = () => {}
  } = props;
  const [titleL, setTitleL] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    setTitleL(titleList);
  }, [titleList]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
    sx: {
      display: "flex",
      width: "100%",
      position: "relative",
      "&::before": {
        content: "''",
        position: "absolute",
        left: "0px",
        width: "100%",
        bottom: "0px",
        borderBottom: "1px solid",
        borderBottomColor: "#DDDDDD",
        opacity: "0.5"
      }
    },
    children: !!titleL.length && titleL.map((item, index) => {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          marginRight: {
            xs: "40px",
            md: "80px"
          },
          cursor: "pointer",
          width: "fit-content",
          paddingBottom: {
            xs: "8px",
            md: "12px"
          },
          position: "relative",
          "&::before": {
            display: titleSelect === item.value ? "flex" : "none",
            content: "''",
            position: "absolute",
            left: "0px",
            width: "100%",
            bottom: "0px",
            borderBottom: "3px solid",
            borderBottomColor: "red"
          },
          "&:last-child": {
            marginRight: "0px"
          }
        },
        onClick: () => onChangeTab(item.value),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "h5",
          sx: {
            letterSpacing: "-0.4px",
            color: _colors.default.primary.bandaiNamcoBlack,
            opacity: titleSelect === item.value ? "1" : "0.5",
            transition: "all 0.2s"
          },
          children: item == null ? void 0 : item.title
        })
      }, index);
    })
  });
};

var _default = /*#__PURE__*/_react.default.memo(TabAccount);

exports.default = _default;
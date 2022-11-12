"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DateWithLocal = ({
  locale,
  toDate,
  fromDate,
  textDateRange
}) => {
  var _fromDate$month, _fromDate$month2;

  const [isLocalES, setIsLocalES] = (0, _react.useState)(true);
  (0, _react.useEffect)(() => {
    const newLocal = locale == null ? void 0 : locale.toLowerCase();

    if (newLocal === 'hk-tc' || newLocal === 'hk-sc' || newLocal === 'tw-tc' || newLocal === 'tw-sc' || locale === 'ko-kr') {
      setIsLocalES(false);
    } else {
      setIsLocalES(true);
    }
  }, [locale]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    children: (fromDate == null ? void 0 : fromDate.month) && (fromDate == null ? void 0 : fromDate.day) && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.default.Fragment, {
      children: [fromDate && toDate && isLocalES && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "l2",
        color: _colors.default.otherColor.silver,
        sx: {
          marginTop: '-4px',
          whiteSpace: 'nowrap',
          marginLeft: {
            xs: "12px",
            md: "22px"
          }
        },
        children: textDateRange.toUpperCase()
      }), !isLocalES && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: 'h6',
        color: _colors.default.otherColor.silver,
        sx: {
          marginTop: '-7px',
          whiteSpace: "nowrap",
          marginLeft: {
            xs: "12px",
            md: "22px"
          }
        },
        children: fromDate == null ? void 0 : (_fromDate$month = fromDate.month) == null ? void 0 : _fromDate$month.toUpperCase()
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: isLocalES ? 'h2' : "h6",
        color: _colors.default.otherColor.silver,
        sx: {
          marginTop: `${isLocalES ? '-7px' : "-5px"}`,
          marginLeft: {
            xs: "12px",
            md: "22px"
          },
          minWidth: "40px",
          whiteSpace: "nowrap"
        },
        children: fromDate == null ? void 0 : fromDate.day
      }), isLocalES && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: 'p5',
        color: _colors.default.otherColor.silver,
        sx: {
          marginTop: '-5px',
          whiteSpace: "nowrap",
          marginLeft: {
            xs: "12px",
            md: "22px"
          }
        },
        children: fromDate == null ? void 0 : (_fromDate$month2 = fromDate.month) == null ? void 0 : _fromDate$month2.toUpperCase()
      }), fromDate && toDate && !isLocalES && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p5",
        color: _colors.default.otherColor.silver,
        sx: {
          marginTop: '2px',
          whiteSpace: "nowrap",
          marginLeft: {
            xs: "12px",
            md: "22px"
          }
        },
        children: textDateRange.toUpperCase()
      })]
    })
  });
};

var _default = DateWithLocal;
exports.default = _default;
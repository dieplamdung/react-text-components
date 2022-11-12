"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireWildcard(require("react"));

var _BulletPoint = _interopRequireDefault(require("../../atoms/BulletPoint"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _ButtonPrice = _interopRequireDefault(require("../../atoms/ButtonPrice"));

var _Tags = _interopRequireDefault(require("../../atoms/Tags"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import Modules
// import Styles
const PricingCard = props => {
  var _bulletPointProps$ite;

  const {
    bulletPointProps,
    title = '',
    buttonProps,
    priceProps,
    tagsProps
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
    sx: {
      width: {
        xs: '311px',
        md: '452px'
      },
      height: '100%'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        display: "flex",
        flexDirection: "column",
        minWidth: {
          xs: '311px',
          md: '452px'
        },
        padding: {
          xs: '40px 36px',
          md: '60px 72px'
        },
        border: `1px solid ${_colors.default.neutral.neutral5}`,
        backgroundColor: _colors.default.primary.bandaiNamcoWhite,
        borderRadius: '20px',
        height: '100%'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          display: 'flex',
          flexDirection: 'row',
          gap: '4px'
        },
        children: tagsProps == null ? void 0 : tagsProps.map((tag, idex) => /*#__PURE__*/(0, _react.createElement)(_Tags.default, (0, _extends2.default)({}, tag, {
          key: idex
        })))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h5",
        sx: {
          marginBottom: {
            xs: '8px',
            md: '16px'
          },
          marginTop: '12px'
        },
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          display: 'flex',
          flexDirection: 'column',
          rowGap: '8px',
          marginTop: '8px',
          marginBottom: '36px',
          '&:first-of-type': {
            marginTop: '0px'
          }
        },
        children: bulletPointProps == null ? void 0 : (_bulletPointProps$ite = bulletPointProps.items) == null ? void 0 : _bulletPointProps$ite.map(item => /*#__PURE__*/(0, _jsxRuntime.jsx)(_BulletPoint.default, {
          label: item.label
        }))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          marginTop: "auto",
          '& button': {
            padding: {
              xs: '8px 48px 12px',
              lg: '10px 46.5px 14px'
            }
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ButtonPrice.default, {
          buttonProps: buttonProps,
          priceProps: priceProps,
          isButtonSecond: true
        })
      })]
    })
  });
};

var _default = PricingCard;
exports.default = _default;
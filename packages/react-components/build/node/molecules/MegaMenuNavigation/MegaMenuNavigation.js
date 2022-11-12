"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireWildcard(require("react"));

var _Icon = require("../../atoms/Icon");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import modules
// define function
const MegaMenuNavigation = ({
  urlLogo,
  isShowLogo = true,
  onClose,
  onBack
}) => {
  const [showLogo, setShowLogo] = (0, _react.useState)(isShowLogo);
  (0, _react.useEffect)(() => {
    setShowLogo(isShowLogo);
  }, [isShowLogo]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      width: "100%",
      height: "78px",
      background: _colors.default.primary.bandaiNamcoWhite,
      padding: "0px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    children: [showLogo ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
      href: urlLogo || "",
      color: _colors.default.primary.bandaiNamcoBlack,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconBandaiNamco, {
        sx: {
          width: {
            xs: '110px',
            md: '130px'
          },
          height: {
            xs: '25px',
            md: '32px'
          }
        }
      })
    }) : /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        "& svg": {
          '&:hover': {
            '& path': {
              stroke: _colors.default.primary.bandaiNamcoBlack
            }
          }
        }
      },
      children: [" ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconPrevSlide, {
        htmlColor: "transparent",
        onClick: () => onBack == null ? void 0 : onBack()
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconClose, {
      sx: {
        cursor: "pointer"
      },
      onClick: () => onClose == null ? void 0 : onClose()
    })]
  });
};

var _default = MegaMenuNavigation;
exports.default = _default;
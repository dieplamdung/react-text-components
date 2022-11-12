"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = SocialShare;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _Icon = require("../../atoms/Icon");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _styles = require("@mui/styles");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Modules
// Styles
// Types
function SocialShare(props) {
  const {
    label,
    fbShare,
    instaShare,
    twShare,
    hrefShare,
    positionShowCopy = 'center',
    weiboShare,
    kakaoShare,
    titleCopiedToClipboard = "Copied to clipboard"
  } = props;
  const [showAlert, setShowAlert] = (0, _react.useState)(false);
  const refTimeout = (0, _react.useRef)();
  const theme = (0, _styles.useTheme)();
  const isMobile = (0, _material.useMediaQuery)(theme.breakpoints.down('lg'));
  const SIZE = {
    width: {
      xs: "15.22px",
      md: "22.83px"
    },
    height: {
      xs: "15.22px",
      md: "22.83px"
    }
  };
  const HOVER = {
    cursor: 'pointer',
    "&:hover": {
      "& svg": {
        "& path": {
          fill: _colors.default.neutral.neutral1
        }
      }
    }
  };
  /**
   * use to copy current link into clipboard
   */

  async function copyToClip() {
    if (typeof window !== 'undefined') {
      var _window, _window$location;

      const location = (_window = window) == null ? void 0 : (_window$location = _window.location) == null ? void 0 : _window$location.href;
      await navigator.clipboard.writeText(location);

      if (!showAlert) {
        setShowAlert(true);
      }

      if (refTimeout.current) {
        window.clearTimeout(refTimeout.current);
      }

      refTimeout.current = setTimeout(() => {
        refTimeout.current = undefined;
        setShowAlert(false);
      }, 1000);
    }
  }

  const handleReturnPosition = () => {
    if (positionShowCopy === "right" && isMobile) {
      return 0;
    }

    if (positionShowCopy === "left" && isMobile) {
      return -108;
    }

    return -54;
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column'
    },
    children: [label && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "p7",
      color: _colors.default.neutral.neutral4,
      sx: {
        marginBottom: "16px"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
        component: "p",
        value: label
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        lineHeight: "0px",
        "& a": {
          marginRight: {
            xs: positionShowCopy === "left" ? "0px" : "24px",
            md: positionShowCopy === "left" ? "0px" : "32px"
          }
        }
      },
      children: [fbShare &&
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      (0, _jsxRuntime.jsx)(_material.Link, {
        sx: HOVER // eslint-disable-next-line no-useless-concat
        ,
        onClick: () => window.open(fbShare, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,' + "width=585,height=511"),
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconFb, {
          sx: (0, _extends2.default)({}, SIZE)
        })
      }), instaShare && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
        target: "_blank",
        rel: "noreferrer",
        href: instaShare,
        sx: HOVER,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconInstagram, {
          sx: (0, _extends2.default)({}, SIZE)
        })
      }), twShare && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
        target: "_blank",
        rel: "noreferrer",
        href: twShare,
        sx: HOVER,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconTwitter, {
          sx: (0, _extends2.default)({}, SIZE)
        })
      }), weiboShare && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
        target: "_blank",
        rel: "noreferrer",
        href: weiboShare,
        sx: HOVER,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconWeibo, {
          sx: (0, _extends2.default)({}, SIZE)
        })
      }), kakaoShare && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
        target: "_blank",
        rel: "noreferrer",
        href: kakaoShare,
        sx: HOVER,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconKakaoTalk, {
          sx: (0, _extends2.default)({}, SIZE)
        })
      }), hrefShare && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        onClick: copyToClip,
        sx: (0, _extends2.default)({
          position: "relative"
        }, HOVER),
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconLink, {
          sx: (0, _extends2.default)({}, SIZE)
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p8",
          sx: {
            position: "absolute",
            top: "-36px",
            right: `${handleReturnPosition()}px`,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            background: _colors.default.neutral.neutral2,
            padding: "6px 12px",
            borderRadius: "8px",
            boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
            color: _colors.default.primary.bandaiNamcoWhite,
            transform: showAlert ? "scale(1)" : "scale(0)",
            opacity: showAlert ? "1" : "0",
            transition: "all 0.3s"
          },
          children: titleCopiedToClipboard
        })]
      })]
    })]
  });
}
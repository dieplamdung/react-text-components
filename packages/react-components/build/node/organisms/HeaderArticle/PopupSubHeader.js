"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Icon = require("../../atoms/Icon");

var _Tags = _interopRequireDefault(require("../../atoms/Tags"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _SocialShare = _interopRequireDefault(require("../../molecules/SocialShare"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _disableScrollBody = require("../../utils/disableScrollBody");

var _jsxRuntime = require("react/jsx-runtime");

var _IconClose;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const PopupSubHeader = ({
  tags,
  title,
  socialShareProps,
  isOpen = false,
  onClose
}) => {
  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      (0, _disableScrollBody.disableScrollBody)(isOpen);
    }
  }, [isOpen]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Modal, {
    open: isOpen,
    disableAutoFocus: true,
    onClose: onClose,
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      pointerEvents: "auto"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        width: "90%",
        minHeight: "358px",
        outline: 'none',
        background: _colors.default.primary.bandaiNamcoWhite,
        padding: "28px 28px 72px 28px",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column"
      },
      onClick: e => {
        e.stopPropagation();
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "24px"
        },
        onClick: () => onClose == null ? void 0 : onClose(),
        children: _IconClose || (_IconClose = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconClose, {}))
      }), !!(tags != null && tags.length) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          marginBottom: "16px"
        },
        children: tags.map((tag, idx) => {
          var _tag$title, _tag$color;

          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              display: 'inline-block',
              marginRight: '4px'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tags.default, {
              title: typeof (tag == null ? void 0 : tag.title) === 'string' ? tag == null ? void 0 : (_tag$title = tag.title) == null ? void 0 : _tag$title.toUpperCase() : tag == null ? void 0 : tag.title,
              color: (_tag$color = tag == null ? void 0 : tag.color) != null ? _tag$color : ''
            })
          }, idx);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h4",
        sx: {
          marginBottom: "16px"
        },
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_SocialShare.default, (0, _extends2.default)({}, socialShareProps))]
    })
  });
};

var _default = PopupSubHeader;
exports.default = _default;
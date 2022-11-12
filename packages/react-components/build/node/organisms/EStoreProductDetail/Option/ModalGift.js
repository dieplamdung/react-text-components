"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ModalGift;

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Icon = require("../../../atoms/Icon");

var _disableScrollBody = require("../../../utils/disableScrollBody");

var _jsxRuntime = require("react/jsx-runtime");

var _IconClose;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ModalGift(props) {
  const {
    open,
    onClose,
    imgGift
  } = props;
  const refContent = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    setTimeout(() => {
      if (typeof window !== "undefined") {
        const wrapper = refContent.current;

        if (wrapper) {
          const width = wrapper.clientWidth;
          wrapper.style.height = `${width}px`;
        }

        window.addEventListener("resize", () => {
          const wrapperItem = refContent.current;

          if (wrapperItem) {
            const width = wrapperItem.clientWidth;
            wrapperItem.style.height = `${width}px`;
          }
        });
      }

      return () => {
        window.removeEventListener("resize", () => {});
      };
    }, 1000);
  }, []);
  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      (0, _disableScrollBody.disableScrollBody)(open);
    }
  }, [open]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Modal, {
    open: open,
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      pointerEvents: "auto"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        width: "100%",
        height: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      onClick: onClose,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: {
            xs: "90%",
            md: "60%",
            xl: "49%"
          },
          padding: "32px",
          maxWidth: "642px",
          maxHeight: "642px",
          background: "#fff",
          borderRadius: "10px",
          position: "relative",
          "& img": {
            width: "100%",
            height: "calc(100% - 32px)",
            objectFit: "cover"
          }
        },
        ref: refContent,
        onClick: e => {
          e.stopPropagation();
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            position: "absolute",
            top: "16px",
            right: "16px",
            cursor: "pointer"
          },
          onClick: onClose,
          children: _IconClose || (_IconClose = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconClose, {}))
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: imgGift,
          alt: ""
        })]
      })
    })
  });
}
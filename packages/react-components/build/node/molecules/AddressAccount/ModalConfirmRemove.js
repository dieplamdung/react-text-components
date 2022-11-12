"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _system = require("@mui/system");

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _Icon = require("../../atoms/Icon");

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _disableScrollBody = require("../../utils/disableScrollBody");

var _jsxRuntime = require("react/jsx-runtime");

var _IconClose, _IconLoading;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ModalConfirmRemove(props) {
  const {
    open,
    onClose,
    onConfirm,
    titleRemove = "Are you sure you want to remove this address?",
    titleBtnRemove = "Remove",
    titleBtnCancel = "Cancel"
  } = props;
  const [error, serError] = (0, _react.useState)("");
  const [loading, setLoading] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    serError("");

    if (typeof window !== "undefined") {
      (0, _disableScrollBody.disableScrollBody)(open);
    }
  }, [open]);

  const handleConfirmDelete = () => {
    setLoading(true);
    onConfirm(v => {
      setLoading(false);

      if (v != null && v.success) {
        serError("");
        onClose();
      }

      ;

      if (v != null && v.message) {
        serError((v == null ? void 0 : v.message) || "");
      }
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_system.Box, {
    sx: {
      pointerEvents: "auto"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Modal, {
      open: open,
      onClose: () => loading ? {} : onClose(),
      sx: {
        pointerEvents: "auto",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_system.Box, {
        sx: {
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          background: "#fff",
          borderRadius: "20px",
          width: {
            xs: "311px",
            md: "402px"
          },
          minHeight: "200px",
          padding: {
            xs: "64px 28px 36px 28px",
            md: "56px 52px 60px 52px"
          },
          "&:focus": {
            outline: "none"
          },
          position: "relative",
          "& button": {
            width: "100%",
            marginTop: "12px"
          }
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_system.Box, {
          sx: {
            position: "absolute",
            top: "26px",
            right: {
              xs: "28px",
              md: "52px"
            },
            cursor: loading ? "auto" : "pointer"
          },
          onClick: () => loading ? {} : onClose(),
          children: _IconClose || (_IconClose = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconClose, {}))
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "h6",
          sx: {
            textAlign: "center",
            maxWidth: {
              xs: "255px",
              md: "298px"
            },
            marginBottom: {
              xs: "32px",
              md: "40px"
            }
          },
          children: titleRemove
        }), !!error && !loading && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          sx: {
            fontSize: "0.75rem",
            fontWeight: "400",
            color: _colors.default.primary.bandaiNamcoRed,
            textAlign: "center"
          },
          children: error
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Button.default, {
          variant: "secondaryBlack",
          onClick: () => loading ? {} : handleConfirmDelete(),
          children: ["  ", loading ? _IconLoading || (_IconLoading = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconLoading, {
            htmlColor: "#fff"
          })) : titleBtnRemove]
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Button.default, {
          variant: "secondary",
          onClick: () => loading ? {} : onClose(),
          children: [" ", titleBtnCancel]
        })]
      })
    })
  });
}

var _default = ModalConfirmRemove;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _Modal = _interopRequireDefault(require("@mui/material/Modal"));

var _react = _interopRequireWildcard(require("react"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Icon = require("../../atoms/Icon");

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _disableScrollBody = require("../../utils/disableScrollBody");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// define function
const Popup = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    children,
    maxWidth,
    theme,
    sxPopup,
    isOpen = false,
    isClosed = () => {},
    isHideIcon = false,
    disableClickBackdrop = false
  } = props;
  const [open, setOpen] = (0, _react.useState)(isOpen);

  const handleClose = () => {
    setOpen(false);
    isClosed(true);
  };

  (0, _react.useImperativeHandle)(ref, () => ({
    handleOpen() {
      setOpen(true);
    }

  }));
  (0, _react.useEffect)(() => {
    setOpen(isOpen);

    if (typeof window !== "undefined") {
      (0, _disableScrollBody.disableScrollBody)(isOpen);
    }
  }, [isOpen]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Modal.default, {
    open: open,
    onClose: (_, reason) => {
      if (disableClickBackdrop) {
        if (reason !== "backdropClick") {
          handleClose();
        }
      } else {
        handleClose();
      }
    },
    disableAutoFocus: true,
    disableEnforceFocus: true,
    sx: {
      pointerEvents: "auto"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: (0, _extends2.default)({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        outline: 'none',
        maxWidth: {
          md: maxWidth || '547px',
          xs: maxWidth || '311px'
        },
        width: '100%',
        padding: '16px',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }, sxPopup),
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        id: "box-modal-sa",
        sx: {
          position: 'relative',
          backgroundColor: theme === 'dark' ? _colors.default.otherColor.chathamsBlue : _colors.default.neutral.white,
          padding: {
            xs: '28px 28px 72px',
            md: '34px 34px 100px'
          },
          borderRadius: '16px',
          maxHeight: '90%',
          overflow: 'auto',
          width: '100%',
          '& .MuiTypography-root': {
            paddingLeft: '0px',
            paddingRight: '0px'
          }
        },
        color: _colors.default.secondaryGray.shade600,
        children: [" ", !isHideIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            sx: {
              textAlign: 'end',
              paddingBottom: {
                xs: '26px',
                md: '64px'
              }
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconClose, {
              htmlColor: _colors.default.otherColor.silver,
              id: "icon-close",
              onClick: handleClose,
              sx: {
                cursor: 'pointer',
                width: '16px',
                height: '16px'
              }
            })
          })
        }), children]
      })
    })
  });
});
var _default = Popup;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _Modal = _interopRequireDefault(require("@mui/material/Modal"));

var _react = _interopRequireWildcard(require("react"));

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _Icon = require("../../atoms/Icon");

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _disableScrollBody = require("../../utils/disableScrollBody");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// define function
const CEOMessage = ({
  isOpen,
  onClose,
  name,
  position,
  contentMsg
}) => {
  const renderIconClose = (0, _react.useMemo)(() => {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconClose, {
      htmlColor: _colors.default.otherColor.silver,
      id: "icon-close",
      sx: {
        position: 'absolute',
        top: {
          xs: "30px",
          md: "'34px'"
        },
        right: {
          xs: "30px",
          md: "'34px'"
        },
        cursor: 'pointer'
      },
      onClick: () => onClose == null ? void 0 : onClose(false)
    });
  }, [onClose]);
  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      (0, _disableScrollBody.disableScrollBody)(isOpen);
    }
  }, [isOpen]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Modal.default, {
    open: isOpen,
    onClose: () => onClose == null ? void 0 : onClose(),
    disableAutoFocus: true,
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: {
        xs: "0px 32px",
        md: "0px 60px"
      },
      pointerEvents: "auto"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        maxWidth: {
          md: "1116px",
          xs: "100%"
        },
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        id: "box-modal-sa",
        sx: {
          position: 'relative',
          backgroundColor: _colors.default.neutral.white,
          borderRadius: '20px',
          minHeight: "324px",
          margin: "64px 0px",
          maxHeight: "80vh",
          maxWidth: {
            xs: "311px",
            md: "100%"
          },
          width: '100%',
          display: "flex",
          flexDirection: "column",
          padding: {
            xs: "40px 32px 0px 32px",
            md: "64px 50px 0px 50px",
            lg: "64px 91px 0px 91px"
          },
          overflow: 'auto',
          '& .MuiTypography-root': {
            paddingLeft: '0px',
            paddingRight: '0px'
          }
        },
        color: _colors.default.secondaryGray.shade600,
        children: [renderIconClose, /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
          children: [(contentMsg == null ? void 0 : contentMsg.title) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h4",
            sx: {
              color: _colors.default.primary.bandaiNamcoBlack
            },
            children: contentMsg == null ? void 0 : contentMsg.title
          }), (name || position) && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
            sx: {
              marginTop: '12px'
            },
            children: [name && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
              variant: "p5",
              sx: {
                color: _colors.default.neutral.neutral2
              },
              children: name
            }), position && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
              variant: "p8",
              sx: {
                color: _colors.default.neutral.neutral2,
                marginTop: '4px'
              },
              children: position
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          sx: {
            marginTop: '32px',
            maxHeight: {
              xs: '380px',
              md: '500px'
            },
            overflow: 'auto',
            paddingBottom: {
              xs: "28px",
              md: "52px"
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p2",
            sx: {
              color: _colors.default.neutral.neutral2,
              '& img': {
                borderRadius: '20px',
                objectFit: 'cover',
                width: '100%'
              },
              fontSize: {
                xs: '14px',
                md: '18px'
              },
              lineHeight: {
                xs: '20px',
                md: '26px'
              }
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
              component: "p",
              value: contentMsg == null ? void 0 : contentMsg.content
            })
          })
        })]
      })
    })
  });
};

var _default = CEOMessage;
exports.default = _default;
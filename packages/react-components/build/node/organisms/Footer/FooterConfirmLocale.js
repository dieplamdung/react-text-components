"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _Modal = _interopRequireDefault(require("@mui/material/Modal"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _Icon = require("../../atoms/Icon");

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _disableScrollBody = require("../../utils/disableScrollBody");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import Modules
// import Styles
const FooterModalConfirm = ({
  isOpen = true,
  buttonProps,
  defaultValueLocale = '',
  valueRedirect = '',
  handleCloseModalConfirm = () => {},
  handleRedirectLanguage = () => {},
  handleCloseModalConfirmRedirect = () => {},
  titleFirst,
  titleAfter,
  descriptionFirst,
  descriptionAfter,
  locale
}) => {
  const [openModal, setOpenModal] = (0, _react.useState)(isOpen != null ? isOpen : true);
  const [localeSelected, setLocaleSelected] = (0, _react.useState)('Japan');
  const [localeStay, setLocaleStay] = (0, _react.useState)('Japan');
  (0, _react.useEffect)(() => {
    setOpenModal(isOpen);
    let timeOut = 0;

    if (typeof window !== "undefined") {
      timeOut = setTimeout(() => {
        (0, _disableScrollBody.disableScrollBody)(isOpen);
      }, 1500);
    }

    return () => {
      window.clearTimeout(timeOut);
    };
  }, [isOpen]);
  (0, _react.useEffect)(() => {
    setLocaleStay(defaultValueLocale);
  }, [defaultValueLocale]);
  (0, _react.useEffect)(() => {
    setLocaleSelected(valueRedirect);
  }, [valueRedirect]);

  const handleClosePopup = () => {
    setOpenModal(false);
    handleCloseModalConfirm();
  };

  const handleClosePopupRedirect = () => {
    setOpenModal(false);
    handleCloseModalConfirmRedirect();
  };

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
      onClick: () => handleClosePopup == null ? void 0 : handleClosePopup()
    }); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Modal.default, {
    open: openModal,
    onClose: () => handleClosePopup(),
    disableAutoFocus: true,
    sx: {
      pointerEvents: "auto",
      outline: 'none'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        maxWidth: {
          md: "520px",
          xs: "100%"
        },
        outline: 'none',
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
          minHeight: {
            xs: "324px",
            md: "365px"
          },
          maxHeight: '90%',
          maxWidth: {
            xs: "311px",
            md: "100%"
          },
          width: '100%',
          display: "flex",
          flexDirection: "column",
          padding: {
            xs: "68px 28px",
            md: "108px 52px 100px 52px"
          },
          overflow: 'auto',
          '& .MuiTypography-root': {
            paddingLeft: '0px',
            paddingRight: '0px'
          }
        },
        color: _colors.default.secondaryGray.shade600,
        children: [renderIconClose, /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "h4",
          color: _colors.default.primary.bandaiNamcoBlack,
          sx: {
            textAlign: 'center'
          },
          children: (locale == null ? void 0 : locale.toLocaleLowerCase()) === 'ko-kr' ? `${localeSelected} ${titleFirst}${titleAfter}` : `${titleFirst} ${localeSelected} ${titleAfter}`
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p8",
          color: _colors.default.neutral.neutral2,
          sx: {
            marginTop: '8px',
            textAlign: 'center'
          },
          children: `${descriptionFirst} ${localeSelected}${descriptionAfter}${locale !== 'hk-tc' && locale !== 'hk-sc' && locale !== 'tw-tc' && locale !== 'tw-sc' && locale !== 'ko-kr' ? '.' : ''}`
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          sx: {
            marginTop: '40px'
          },
          children: buttonProps == null ? void 0 : buttonProps.map((button, idx) => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
            sx: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            },
            children: [idx === 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, button, {
              label: (locale == null ? void 0 : locale.toLocaleLowerCase()) === 'ko-kr' ? ` ${valueRedirect}${button == null ? void 0 : button.label}` : `${button == null ? void 0 : button.label} ${valueRedirect}`,
              onClick: () => {
                handleRedirectLanguage == null ? void 0 : handleRedirectLanguage(valueRedirect);
                handleClosePopupRedirect();
              },
              sx: {
                minWidth: "255px",
                background: _colors.default.primary.bandaiNamcoBlack,
                color: _colors.default.primary.bandaiNamcoWhite,
                "&:hover": {
                  background: "#000000b3"
                }
              }
            })), idx === 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, button, {
              onClick: () => handleClosePopup(),
              label: (locale == null ? void 0 : locale.toLocaleLowerCase()) === 'ko-kr' ? `${localeStay}${button == null ? void 0 : button.label}` : `${button == null ? void 0 : button.label} ${localeStay}`,
              sx: {
                minWidth: "255px",
                marginTop: '12px'
              }
            }))]
          }, idx))
        })]
      })
    })
  });
};

var _default = FooterModalConfirm;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _disableScrollBody = require("../../utils/disableScrollBody");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _ScrollingDLCContainer = _interopRequireDefault(require("./ScrollingDLCContainer"));

var _Platform = _interopRequireDefault(require("../EStoreProductDetail/Option/Platform"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const EStoreProductDetailDownloadable = ({
  listItemDLC,
  platformList,
  titleButtonBuyNowDigital,
  titleModalSelectPlatform,
  onClickBuy
}) => {
  const theme = (0, _material.useTheme)();
  const isMobile = (0, _material.useMediaQuery)(theme.breakpoints.down('md'));
  const [showModalPlatform, setShowModalPlatform] = (0, _react.useState)(false);
  const [platformSelect, setPlatformSelect] = (0, _react.useState)({
    titleIcon: "",
    value: "ps4",
    id: ""
  });
  const [idItemBuy, setIdItemBuy] = (0, _react.useState)("");
  (0, _react.useEffect)(() => {
    (0, _disableScrollBody.disableScrollBody)(showModalPlatform);
  }, [showModalPlatform]);

  const handleReturnTitle = () => {
    switch (platformSelect == null ? void 0 : platformSelect.value) {
      case "ps4":
      case "ps5":
        return (titleButtonBuyNowDigital == null ? void 0 : titleButtonBuyNowDigital.ps) || "";

      case "stream":
        return (titleButtonBuyNowDigital == null ? void 0 : titleButtonBuyNowDigital.stream) || "";

      case "xbox":
        return (titleButtonBuyNowDigital == null ? void 0 : titleButtonBuyNowDigital.xbox) || "";

      case "nintendo":
        return (titleButtonBuyNowDigital == null ? void 0 : titleButtonBuyNowDigital.nintendo) || "";

      default:
        return "";
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      padding: {
        xs: "72px 0px",
        lg: "80px 0px"
      },
      background: "#F9F9F9"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        padding: {
          xs: "0px 16px",
          md: "0px"
        },
        "& button": {
          background: 'transparent'
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ScrollingDLCContainer.default, (0, _extends2.default)({}, listItemDLC, {
        onClickBuyItem: id => {
          setIdItemBuy(id);
          setShowModalPlatform(true);
          setPlatformSelect({
            titleIcon: "",
            value: "ps4",
            id: ""
          });
        }
      }))
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: "flex",
        position: "fixed",
        height: "100vh",
        width: "100%",
        top: "0px",
        right: "0px",
        overflow: "hidden",
        zIndex: showModalPlatform ? 1000 : "-1",
        pointerEvents: "auto"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: ' rgba(0,0,0,0.5)',
          opacity: showModalPlatform ? '1' : '0',
          transition: 'all 0.3s  z-index 0.01s ',
          zIndex: showModalPlatform ? '1002' : '-1'
        },
        onClick: () => {
          setShowModalPlatform(false);
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          minHeight: {
            xs: showModalPlatform ? "30vh" : "0px",
            md: "100vh"
          },
          width: {
            xs: "100%",
            md: "495px"
          },
          background: "#fff",
          overflow: "hidden",
          right: {
            xs: "0px",
            md: showModalPlatform ? "0px" : "-495px"
          },
          bottom: {
            xs: showModalPlatform ? "0px" : "-100vh",
            md: "0px"
          },
          borderRadius: {
            xs: "16px 16px 0px 0px",
            md: "0px"
          },
          zIndex: "1003",
          opacity: showModalPlatform ? "1" : "0",
          transition: "all 0.3s, opacity 0s"
        },
        children: [isMobile && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "16px 0px 24px"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              width: "48px"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                width: "100%",
                height: "4px",
                background: _colors.default.neutral.neutral5,
                borderRadius: "15px"
              }
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            width: "100%",
            display: "flex",
            flexDirection: "column",
            padding: "0px 32px 44px",
            marginTop: "4px"
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h2",
            color: _colors.default.primary.bandaiNamcoBlack,
            children: titleModalSelectPlatform
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              padding: "48px 0px",
              display: "flex",
              width: "100%",
              flexFlow: "wrap",
              gap: "16px"
            },
            children: !!(platformList != null && platformList.length) && platformList.map((item, index) => {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Platform.default, {
                isSelect: (item == null ? void 0 : item.id) === (platformSelect == null ? void 0 : platformSelect.id),
                titleIcon: item == null ? void 0 : item.titleIcon,
                onClick: () => {
                  setPlatformSelect(item);
                }
              }, index);
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
            variant: "primaryDark",
            onClick: () => {
              onClickBuy == null ? void 0 : onClickBuy({
                idItem: idItemBuy,
                idPlatform: platformSelect == null ? void 0 : platformSelect.id
              });
              setShowModalPlatform(false);
            },
            children: handleReturnTitle()
          })]
        })]
      })]
    })]
  });
};

var _default = EStoreProductDetailDownloadable;
exports.default = _default;
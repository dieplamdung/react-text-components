"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _index = _interopRequireDefault(require("./Option/index"));

var _index2 = _interopRequireDefault(require("./Thumbnail/index"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Types
const EStoreProductDetail = ({
  listThumbnail,
  options,
  onSelectPlatform,
  onSelectType,
  onSelectEdition,
  onSelectQty,
  buttonPropsAddCart,
  buttonPropsBuyNow,
  buttonPropsBuyNowDigital,
  titleButtonBuyNowDigital
}) => {
  const theme = (0, _material.useTheme)();
  const isTablet = (0, _material.useMediaQuery)(theme.breakpoints.down('lg'));
  const isMobile = (0, _material.useMediaQuery)(theme.breakpoints.down('md'));
  const [itemSelectPlatform, setItemSelectPlatform] = (0, _react.useState)({
    titleIcon: "",
    id: ""
  });
  const [itemSelectType, setItemSelectType] = (0, _react.useState)({
    titleIcon: "",
    id: ""
  });
  const [itemSelectEdition, setItemSelectEdition] = (0, _react.useState)({
    titleEdition: "",
    valuePrice: "",
    id: ""
  });
  const [qty, setQty] = (0, _react.useState)(1);
  const [isSelectTypeDigital, setIsSelectTypeDigital] = (0, _react.useState)(false);
  const refWrapper = (0, _react.useRef)();
  const [padding, setPadding] = (0, _react.useState)(0);
  const refTimeOut = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const wrapper = refWrapper.current;

      if (wrapper) {
        const {
          left
        } = wrapper.getBoundingClientRect(); // eslint-disable-next-line no-nested-ternary

        const pd = isMobile ? 16 : isTablet ? 24 : 16;
        setPadding(left + pd);
      }

      ;

      if (isTablet) {
        window.addEventListener("resize", () => {
          if (refTimeOut.current) {
            window.clearTimeout(refTimeOut.current);
          }

          refTimeOut.current = setTimeout(() => {
            if (wrapper) {
              const {
                left
              } = wrapper.getBoundingClientRect(); // eslint-disable-next-line no-nested-ternary

              const pd = isMobile ? 16 : isTablet ? 24 : 16;
              setPadding(left + pd);
            }

            ;
          }, 150);
        });
      } else {
        window.removeEventListener("resize", () => {});
      }
    }

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [isTablet, isMobile]);
  (0, _react.useEffect)(() => {
    var _options$itemPlatform, _options$itemSelectEd, _options$itemTypeSele;

    if (options != null && (_options$itemPlatform = options.itemPlatformSelect) != null && _options$itemPlatform.id) {
      setItemSelectPlatform(options == null ? void 0 : options.itemPlatformSelect);
    }

    if (options != null && (_options$itemSelectEd = options.itemSelectEdition) != null && _options$itemSelectEd.id) {
      setItemSelectEdition(options == null ? void 0 : options.itemSelectEdition);
    }

    if (options != null && (_options$itemTypeSele = options.itemTypeSelect) != null && _options$itemTypeSele.id) {
      setItemSelectType(options == null ? void 0 : options.itemTypeSelect);
    }

    setIsSelectTypeDigital((options == null ? void 0 : options.isSelectTypeDigital) || false);
    setQty((options == null ? void 0 : options.quantity) || 1);
  }, [options]);

  const handleSelectPlatform = platform => {
    setItemSelectPlatform(platform);
    onSelectPlatform == null ? void 0 : onSelectPlatform(platform == null ? void 0 : platform.id);
  };

  const handleSelectType = type => {
    setItemSelectType(type);
    onSelectType == null ? void 0 : onSelectType(type == null ? void 0 : type.id);

    if ((type == null ? void 0 : type.value) === "digital") {
      setIsSelectTypeDigital(true);
    } else {
      setIsSelectTypeDigital(false);
    }
  };

  const handleSelectEdition = edition => {
    onSelectEdition == null ? void 0 : onSelectEdition(edition == null ? void 0 : edition.id);
    setItemSelectEdition(edition);
  };

  const handleSelectQty = v => {
    setQty(v);
    onSelectQty == null ? void 0 : onSelectQty(v);
  };

  const handleReturnTitle = () => {
    switch (itemSelectPlatform == null ? void 0 : itemSelectPlatform.value) {
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
      paddingBottom: "112px"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        position: "relative"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
        sx: {
          paddingTop: "82px"
        },
        ref: refWrapper,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            width: "100%",
            display: "flex",
            flexDirection: {
              xs: "column",
              lg: "row"
            }
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_index2.default, {
            listItem: listThumbnail,
            padding: padding
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              display: {
                xs: "none",
                lg: "flex"
              }
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.default, (0, _extends2.default)({}, options, {
              itemPlatformSelect: itemSelectPlatform,
              itemTypeSelect: itemSelectType,
              itemSelectEdition: itemSelectEdition,
              quantity: qty,
              onSelectPlatform: handleSelectPlatform,
              onSelectType: handleSelectType,
              onSelectEdition: handleSelectEdition,
              onSelectQty: handleSelectQty,
              buttonPropsAddCart: buttonPropsAddCart,
              buttonPropsBuyNow: buttonPropsBuyNow,
              isSelectTypeDigital: isSelectTypeDigital,
              buttonPropsBuyNowDigital: (0, _extends2.default)({}, buttonPropsBuyNowDigital, {
                label: handleReturnTitle()
              })
            }))
          })]
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        display: {
          xs: "flex",
          lg: "none"
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_index.default, (0, _extends2.default)({}, options, {
        padding: padding,
        itemPlatformSelect: itemSelectPlatform,
        itemTypeSelect: itemSelectType,
        itemSelectEdition: itemSelectEdition,
        quantity: qty,
        onSelectPlatform: handleSelectPlatform,
        onSelectType: handleSelectType,
        onSelectEdition: handleSelectEdition,
        onSelectQty: handleSelectQty,
        buttonPropsAddCart: buttonPropsAddCart,
        buttonPropsBuyNow: buttonPropsBuyNow,
        isSelectTypeDigital: isSelectTypeDigital,
        buttonPropsBuyNowDigital: (0, _extends2.default)({}, buttonPropsBuyNowDigital, {
          label: handleReturnTitle()
        })
      }))
    })]
  });
};

var _default = EStoreProductDetail;
exports.default = _default;
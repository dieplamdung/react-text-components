"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WrapperContainer = void 0;
exports.default = Option;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../../atoms/Button"));

var _Container = _interopRequireDefault(require("../../../atoms/Container"));

var _Typography = _interopRequireDefault(require("../../../atoms/Typography"));

var _DropdownQuantity = _interopRequireDefault(require("../../../molecules/DropdownQuantity"));

var _colors = _interopRequireDefault(require("../../../theme/colors"));

var _Tabs = _interopRequireDefault(require("../../EStoreProduct/ProductItem/Tabs"));

var _Edition = _interopRequireDefault(require("./Edition"));

var _FreeGift = _interopRequireDefault(require("./FreeGift"));

var _Platform = _interopRequireDefault(require("./Platform"));

var _Type = _interopRequireDefault(require("./Type"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// eslint-disable-next-line import/no-cycle
// eslint-disable-next-line import/no-cycle
const WrapperContainer = child => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
    sx: {
      display: "flex",
      flexDirection: "column",
      padding: {
        xs: "0px 32px",
        md: "0px 24px",
        lg: "0px !important"
      }
    },
    children: child
  });
};

exports.WrapperContainer = WrapperContainer;

function Option(props) {
  var _platform$platformLis;

  const {
    tabList,
    title,
    platform,
    itemPlatformSelect,
    itemTypeSelect,
    itemSelectEdition,
    typeOption,
    typeEdition,
    onSelectPlatform,
    onSelectType,
    onSelectEdition,
    buttonPropsAddCart,
    buttonPropsBuyNow,
    maxQuantity,
    quantity,
    onSelectQty,
    labelQty,
    price,
    buttonPropsBuyNowDigital,
    isSelectTypeDigital,
    padding = 0,
    freeGift
  } = props;
  const refWrapper = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const wrapper = refWrapper.current;

      if (wrapper) {
        window.addEventListener("resize", () => {
          wrapper == null ? void 0 : wrapper.scrollTo({
            left: 0,
            behavior: "smooth"
          });
        });
      }
    }

    ;
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      flex: 1,
      display: "flex",
      flexDirection: "column",
      marginLeft: {
        xs: "0px",
        lg: "56px"
      },
      marginTop: {
        xs: "40px",
        lg: "0px"
      },
      width: "100%"
    },
    children: [WrapperContainer( /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.default.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          width: "100%",
          marginBottom: "4px"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tabs.default, {
          tabList: tabList || []
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h4",
        sx: {
          WebkitLineClamp: 2,
          display: '-webkit-box',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitBoxOrient: 'vertical'
        },
        children: title
      })]
    })), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        paddingTop: {
          xs: "48px",
          lg: "64"
        }
      },
      children: [WrapperContainer( /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        color: _colors.default.neutral.neutral2,
        variant: "p6",
        sx: {
          marginBottom: "14px"
        },
        children: platform == null ? void 0 : platform.title
      })), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: "flex",
          flexWrap: {
            xs: "nowrap",
            lg: "wrap"
          },
          gap: "14px",
          overflow: "auto",
          overflowX: {
            xs: "scroll",
            ld: "auto"
          },
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          overscrollBehaviorX: "contain",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        },
        ref: refWrapper,
        children: [!!(platform != null && (_platform$platformLis = platform.platformList) != null && _platform$platformLis.length) && (platform == null ? void 0 : platform.platformList.map((item, index) => {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              display: "inline-block",
              scrollSnapAlign: "start"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                transform: {
                  xs: `translateX(${padding + 16}px)`,
                  md: `translateX(${padding}px)`
                }
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Platform.default, {
                isSelect: (itemPlatformSelect == null ? void 0 : itemPlatformSelect.id) === (item == null ? void 0 : item.id),
                titleIcon: item == null ? void 0 : item.titleIcon,
                onClick: () => onSelectPlatform == null ? void 0 : onSelectPlatform(item)
              })
            })
          }, index);
        })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: "inline-block",
            scrollSnapAlign: "start"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              transform: {
                xs: `translateX(${padding + 16}px)`,
                md: `translateX(${padding}px)`
              }
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                display: "inline-block",
                width: `${padding}px`,
                height: "100%",
                background: "red"
              }
            })
          })
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        paddingTop: "44px"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Type.default, (0, _extends2.default)({}, typeOption, {
        padding: padding,
        isDisable: !(itemPlatformSelect != null && itemPlatformSelect.id),
        itemSelectType: itemTypeSelect,
        onSelectType: onSelectType
      }))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        paddingTop: "44px"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Edition.default, (0, _extends2.default)({}, typeEdition, {
        padding: padding,
        isDisable: !(itemPlatformSelect != null && itemPlatformSelect.id),
        itemSelectEdition: itemSelectEdition,
        onSelectEdition: onSelectEdition
      }))
    }), WrapperContainer( /*#__PURE__*/(0, _jsxRuntime.jsx)(_FreeGift.default, (0, _extends2.default)({}, freeGift))), WrapperContainer( /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.default.Fragment, {
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingTop: "44px"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            opacity: !(itemPlatformSelect != null && itemPlatformSelect.id) ? "0.4" : "1",
            pointerEvents: !(itemPlatformSelect != null && itemPlatformSelect.id) ? "none" : "auto"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_DropdownQuantity.default, {
            maxQuantity: maxQuantity || 5,
            currentQuantity: quantity != null ? quantity : 1,
            label: labelQty,
            onSetQuantity: qty => onSelectQty == null ? void 0 : onSelectQty(qty)
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "h6",
          color: _colors.default.primary.bandaiNamcoBlack,
          children: price
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          width: "100%",
          display: "flex",
          flexDirection: "column",
          paddingTop: "44px"
        },
        children: !isSelectTypeDigital ? /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            "& button": {
              width: {
                xs: "calc(50% - 8px)",
                lg: "calc(50% - 12px)"
              }
            }
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, buttonPropsAddCart, {
            disabled: !(itemPlatformSelect != null && itemPlatformSelect.id)
          })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, buttonPropsBuyNow, {
            variant: !(itemPlatformSelect != null && itemPlatformSelect.id) ? "primary" : buttonPropsBuyNow == null ? void 0 : buttonPropsBuyNow.variant,
            disabled: !(itemPlatformSelect != null && itemPlatformSelect.id)
          }))]
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, buttonPropsBuyNowDigital))
      })]
    }))]
  });
}
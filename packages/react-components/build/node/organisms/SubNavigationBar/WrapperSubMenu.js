"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _Icon = require("../../atoms/Icon");

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _viewport = require("../../utils/viewport");

var _jsxRuntime = require("react/jsx-runtime");

var _IconArrowDown;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const WrapperSubMenu = ({
  listNavigation,
  onSelectItem,
  onBuy,
  itemSelect,
  background = "#fff",
  externalLink,
  titleBtn
}) => {
  const theme = (0, _material.useTheme)();
  const isDesktopDown = (0, _material.useMediaQuery)((0, _viewport.Desktop)(theme));
  const [isShowSubLink, setIsShowSubLink] = (0, _react.useState)(false);
  const [isNextScroll, setIsNextScroll] = (0, _react.useState)(true);
  const [maxWidth, setIsMaxWidth] = (0, _react.useState)(1000);
  const refSubMenu = (0, _react.useRef)();
  const refWrapperListSubMenu = (0, _react.useRef)();
  const refTimeOut = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      refTimeOut.current = setTimeout(() => {
        var _refWrapperListSubMen;

        const listSub = refWrapperListSubMenu == null ? void 0 : (_refWrapperListSubMen = refWrapperListSubMenu.current) == null ? void 0 : _refWrapperListSubMen.querySelectorAll(".item-sub-navigation");

        if (listSub != null && listSub.length) {
          let mWidth = 0;
          listSub.forEach(element => {
            const offsetWidth = (element == null ? void 0 : element.offsetWidth) + 28;
            mWidth += offsetWidth;
          });
          setIsMaxWidth(mWidth > 830 ? 1001 : mWidth + 12);
        }
      }, 500);
    }

    return () => {
      window.clearTimeout(refTimeOut.current);
    };
  }, [listNavigation]);
  (0, _react.useEffect)(() => {
    const SubMenu = refSubMenu.current;

    if (SubMenu && typeof window !== "undefined") {
      window.addEventListener("click", ev => {
        if (!SubMenu.contains(ev.target) && ev) {
          setIsShowSubLink(false);
        }
      });

      if (isShowSubLink) {
        window.addEventListener("scroll", () => {
          setIsShowSubLink(false);
        });
      }
    }

    return () => {
      window.removeEventListener("click", () => {});
      window.removeEventListener("scroll", () => {});
    };
  }, [isShowSubLink]);

  const handleScroll = type => {
    const wrapper = refWrapperListSubMenu == null ? void 0 : refWrapperListSubMenu.current;

    if (wrapper) {
      if (type === "pre") {
        wrapper.scrollTo({
          left: 0,
          behavior: "smooth"
        });
        setIsNextScroll(true);
      } else {
        wrapper.scrollTo({
          left: 20000,
          behavior: "smooth"
        });
        setIsNextScroll(false);
      }
    }
  };

  const handleScrollByIndexItem = index => {
    var _wrapper$childNodes;

    const wrapper = refWrapperListSubMenu == null ? void 0 : refWrapperListSubMenu.current;
    const item = wrapper == null ? void 0 : (_wrapper$childNodes = wrapper.childNodes) == null ? void 0 : _wrapper$childNodes[index];

    if (item) {
      const {
        offsetLeft
      } = item;

      if (offsetLeft > 600) {
        wrapper.scrollTo({
          left: 20000,
          behavior: "smooth"
        });
        setIsNextScroll(false);
      }

      if (offsetLeft < 600) {
        wrapper.scrollTo({
          left: 0,
          behavior: "smooth"
        });
        setIsNextScroll(true);
      }
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      maxWidth: titleBtn ? "1024px" : "916px",
      minWidth: isDesktopDown ? "auto" : "282px",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      border: "1px solid",
      borderColor: _colors.default.neutral.neutral5,
      borderRadius: "60px",
      background,
      padding: {
        xs: "0px 22px",
        xl: "0px 32px"
      },
      position: "relative",
      "&:hover": {
        "& .wrapper-menu": {
          width: `${maxWidth}px`,
          "& .menu-sub": {
            opacity: "0",
            zIndex: "-1"
          },
          "& .list-menu-sub": {
            opacity: "1"
          },
          "& .icon-arrow": {
            opacity: "1"
          }
        }
      }
    },
    children: [isDesktopDown && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        height: "100%",
        width: "153px",
        // width: "1000px",
        maxWidth: "1000px",
        display: "inline-flex",
        margin: "0px",
        marginLeft: "-12px",
        overflow: "hidden",
        position: "relative",
        transition: "all 0.8s"
      },
      className: "wrapper-menu",
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0px 14px",
          opacity: "1",
          transition: "all 0.3s",
          justifyContent: titleBtn ? 'flex-start' : 'center'
        },
        className: "menu-sub",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          color: _colors.default.primary.bandaiNamcoBlack,
          variant: "p3",
          sx: {
            fontSize: {
              xs: "14px",
              md: "16px"
            },
            lineHeight: {
              xs: "20px",
              md: "22px"
            },
            letterSpacing: "-0.2px",
            whiteSpace: "nowrap"
          },
          children: itemSelect.label
        })
      }), maxWidth > 1000 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          height: "100%",
          display: "flex",
          alignItems: "center",
          opacity: "0",
          transition: "all 0.3s",
          '&:hover': {
            '& path': {
              stroke: isNextScroll ? _colors.default.otherColor.quickSilver : _colors.default.primary.bandaiNamcoRed
            }
          },
          '& svg': {
            pointerEvents: isNextScroll ? 'none' : "all",
            '& path': {
              stroke: isNextScroll ? _colors.default.otherColor.quickSilver : _colors.default.primary.bandaiNamcoBlack
            }
          }
        },
        className: "icon-arrow",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconPrevSlide, {
          htmlColor: "transparent",
          onClick: () => {
            handleScroll("pre");
            setIsNextScroll(true);
          }
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: "flex",
          flex: 1,
          flexWrap: "nowrap",
          height: "100%",
          alignItems: "center",
          overflowX: "auto",
          opacity: "0",
          margin: "0px 12px",
          // opacity: "1",
          transition: "all 0.3s",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        },
        className: "list-menu-sub",
        ref: refWrapperListSubMenu,
        children: listNavigation.map((item, index) => {
          return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              display: "flex",
              justifyItems: "flex-start",
              alignItems: "center",
              height: "100%",
              margin: "0px 14px",
              position: "relative",
              cursor: "pointer",
              "&:hover": {
                "& p": {
                  color: _colors.default.primary.bandaiNamcoRed
                },
                "& div": {
                  width: "100%"
                }
              },
              "&:first-child": titleBtn ? {
                marginLeft: "0px"
              } : {}
            },
            onClick: () => {
              onSelectItem == null ? void 0 : onSelectItem(item);
              handleScrollByIndexItem(index);
            },
            className: "item-sub-navigation",
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
              color: item.value === itemSelect.value ? _colors.default.primary.bandaiNamcoRed : _colors.default.primary.bandaiNamcoBlack,
              variant: "p3",
              sx: {
                fontSize: {
                  xs: "14px",
                  md: "16px"
                },
                lineHeight: {
                  xs: "20px",
                  md: "22px"
                },
                letterSpacing: "-0.2px",
                whiteSpace: "nowrap"
              },
              children: item.label
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                position: "absolute",
                left: 0,
                bottom: "24px",
                height: "2px",
                width: item.value === itemSelect.value ? "100%" : "0%",
                background: "red",
                borderRadius: "20px",
                transition: "all 0.3s"
              }
            })]
          }, item.value);
        })
      }), maxWidth > 1000 && titleBtn && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          height: "100%",
          display: "flex",
          alignItems: "center",
          marginRight: "20px",
          opacity: "0",
          transition: "all 0.3s",
          '&:hover': {
            '& path': {
              stroke: !isNextScroll ? _colors.default.otherColor.quickSilver : _colors.default.primary.bandaiNamcoRed
            }
          },
          '& svg': {
            pointerEvents: !isNextScroll ? 'none' : "all",
            '& path': {
              stroke: !isNextScroll ? _colors.default.otherColor.quickSilver : _colors.default.primary.bandaiNamcoBlack
            }
          }
        },
        className: "icon-arrow",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconNextSlide, {
          htmlColor: "transparent",
          onClick: () => {
            setIsNextScroll(false);
            handleScroll("nex");
          }
        })
      })]
    }), !isDesktopDown && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        flex: 1,
        height: "100%",
        display: "flex",
        gap: '12px',
        alignItems: "center",
        justifyContent: "space-between",
        marginRight: "16px",
        cursor: "pointer",
        "& svg": {
          transform: isShowSubLink ? "rotate(-180deg)" : "rotate(0deg)",
          transition: "all 0.3s"
        }
      },
      onClick: e => {
        e.stopPropagation();
        setIsShowSubLink(!isShowSubLink);
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p3",
        sx: {
          fontSize: {
            xs: "14px",
            md: "16px"
          },
          lineHeight: {
            xs: "20px",
            md: "22px"
          },
          letterSpacing: "-0.2px"
        },
        children: itemSelect.label
      }), _IconArrowDown || (_IconArrowDown = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconArrowDown, {
        htmlColor: "#000000"
      }))]
    }), !isDesktopDown && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        position: "absolute",
        visibility: isShowSubLink ? "visible" : "hidden",
        top: isShowSubLink ? "74px" : "100px",
        left: "0",
        right: "0",
        width: "90%",
        margin: "0 auto",
        background: "rgba(237, 237, 237, 0.8)",
        "WebkitBackdropFilter": "blur(6px)",
        backdropFilter: " blur(6px)",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        zIndex: isShowSubLink ? 3 : -1,
        opacity: isShowSubLink ? "1" : "0",
        transition: "all 0.5s"
      },
      ref: refSubMenu,
      children: listNavigation.map(item => {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            height: "42px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 16px",
            "&:hover": {
              background: _colors.default.neutral.neutral5
            }
          },
          onClick: e => {
            e.stopPropagation();
            setIsShowSubLink(false);
            onSelectItem(item);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p3",
            sx: {
              fontWeight: "400",
              fontSize: {
                xs: "14px",
                md: "16px"
              },
              lineHeight: {
                xs: "20px",
                md: "22px"
              }
            },
            children: item.label
          })
        }, item.value);
      })
    }), titleBtn && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
      variant: "primaryDark",
      externalLink: externalLink,
      sx: {
        minWidth: "120px",
        height: {
          xs: "46px"
        }
      },
      onClick: () => onBuy == null ? void 0 : onBuy(itemSelect.value),
      children: titleBtn
    })]
  });
};

var _default = /*#__PURE__*/(0, _react.memo)(WrapperSubMenu);

exports.default = _default;
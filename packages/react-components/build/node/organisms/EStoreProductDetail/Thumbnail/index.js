"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _ThumbnailImage = _interopRequireDefault(require("./ThumbnailImage"));

var _jsxRuntime = require("react/jsx-runtime");

var _svg;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Thumbnail(props) {
  const theme = (0, _material.useTheme)();
  const isMobile = (0, _material.useMediaQuery)(theme.breakpoints.down('lg'));
  const {
    listItem = [],
    padding = 0
  } = props;
  const Icon = (0, _react.useMemo)(() => {
    return _svg || (_svg = /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
      width: "6",
      height: "11",
      viewBox: "0 0 6 11",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0.378906 5.62724L4.31105 0.885161C4.58381 0.573434 5.05763 0.541845 5.36936 0.814607C5.68109 1.08737 5.71268 1.56119 5.43991 1.87292L2.37206 5.62724L5.43128 9.38062C5.70404 9.69235 5.67245 10.1662 5.36072 10.4389C5.04899 10.7117 4.57517 10.6801 4.30241 10.3684L0.378906 5.62724Z",
        fill: "#1E1E1E"
      })
    }));
  }, []);
  const [disablePre, setDisablePre] = (0, _react.useState)(true);
  const [disableNex, setDisableNex] = (0, _react.useState)(false);
  const [itemSelect, setItemSelect] = (0, _react.useState)({});
  const refWrapper = (0, _react.useRef)();
  const refWrapperMobile = (0, _react.useRef)();
  const refTimeOut = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    if (listItem != null && listItem.length) {
      setItemSelect(listItem[0]);
    }
  }, [listItem]);

  const handleScroll = () => {
    if (refTimeOut.current) {
      window.clearTimeout(refTimeOut.current);
    }

    refTimeOut.current = setTimeout(() => {
      refTimeOut.current = undefined;

      if (typeof window !== "undefined") {
        const wrapper = refWrapper.current;

        if (wrapper) {
          if (wrapper.scrollLeft === 0) {
            setDisablePre(true);
          } else {
            setDisablePre(false);
          }

          ;

          if (wrapper.scrollWidth - wrapper.clientWidth <= wrapper.scrollLeft + 1) {
            setDisableNex(true);
          } else {
            setDisableNex(false);
          }

          ;
        }

        ;
      }
    }, 50);
  };

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        handleScroll();
      });
    }

    ;
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  const handlePreItem = () => {
    if (typeof window !== "undefined") {
      const wrapper = refWrapper.current;

      if (wrapper) {
        wrapper.scrollTo({
          left: wrapper.scrollLeft - 135,
          behavior: "smooth"
        });
      }
    }
  };

  const handleNextItem = () => {
    if (typeof window !== "undefined") {
      const wrapper = refWrapper.current;

      if (wrapper) {
        wrapper.scrollTo({
          left: wrapper.scrollLeft + 135,
          behavior: "smooth"
        });
      }
    }
  };

  const renderIframeVideo = (0, _react.useMemo)(() => {
    switch (itemSelect == null ? void 0 : itemSelect.typeVideo) {
      case "vimeo":
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("iframe", {
          title: (itemSelect == null ? void 0 : itemSelect.title) || "",
          loading: "lazy",
          src: `https://player.vimeo.com/video/${itemSelect == null ? void 0 : itemSelect.idVideo}?h=3a3669479e&color=ffffff&title=0&byline=0&portrait=0`,
          frameBorder: "0",
          allow: "autoplay; fullscreen; picture-in-picture",
          allowFullScreen: true
        });

      case "bilibili":
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("iframe", {
          allowFullScreen: true,
          loading: "lazy",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          src: `//player.bilibili.com/player.html?aid=${itemSelect == null ? void 0 : itemSelect.idVideo}&bvid=${itemSelect == null ? void 0 : itemSelect.idVideo}&cid=839966468&page=1`,
          scrolling: "no",
          frameBorder: "no",
          title: (itemSelect == null ? void 0 : itemSelect.title) || ""
        });

      default:
        return /*#__PURE__*/(0, _jsxRuntime.jsx)("iframe", {
          id: "ytplayer",
          loading: "lazy",
          width: "100%",
          height: "100%",
          src: `https://www.youtube.com/embed/${itemSelect == null ? void 0 : itemSelect.idVideo}?autoplay=1&enablejsapi=1&start=1`,
          title: itemSelect == null ? void 0 : itemSelect.title,
          frameBorder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true
        });
    }
  }, [itemSelect]);
  (0, _react.useEffect)(() => {
    let timeout = null;

    if (typeof window !== "undefined") {
      const wrapper = refWrapper.current;
      const wrapperMobile = refWrapperMobile.current;

      if (wrapper) {
        window.addEventListener("resize", () => {
          timeout = setTimeout(() => {
            wrapper == null ? void 0 : wrapper.scrollTo({
              left: 0,
              behavior: "smooth"
            });
          }, 500);
        });
      }

      if (wrapperMobile) {
        window.addEventListener("resize", () => {
          timeout = setTimeout(() => {
            wrapperMobile == null ? void 0 : wrapperMobile.scrollTo({
              left: 0,
              behavior: "smooth"
            });
          }, 500);
        });
      }
    }

    ;
    return () => {
      window.removeEventListener("resize", () => {});
      window.clearTimeout(timeout);
    };
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      width: {
        xs: "100%",
        lg: "54.5%"
      },
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        width: "100%",
        paddingBottom: "56.3%",
        position: "relative",
        borderRadius: {
          xs: "10px",
          md: "20px"
        },
        overflow: "hidden",
        "& img": {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "all 0.3s"
        },
        "& iframe": {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          borderRadius: {
            xs: "10px",
            md: "20px"
          }
        }
      },
      children: (itemSelect == null ? void 0 : itemSelect.typeImg) === "video" ? renderIframeVideo : /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
        src: (itemSelect == null ? void 0 : itemSelect.hrefImg) || "",
        alt: ""
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        width: "100%",
        marginTop: "25px",
        overflow: "hidden",
        height: "86px",
        position: "relative",
        opacity: {
          xs: "0",
          lg: "1"
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100%",
          overflow: "auto"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: {
              xs: "none",
              lg: "flex"
            },
            alignItems: "center",
            justifyContent: "center",
            width: "62px",
            minWidth: "62px",
            height: "62px",
            borderRadius: "60px",
            margin: "0px 8px",
            background: "#F6F6F6",
            cursor: disablePre ? "auto" : "pointer",
            "&": {
              "path": {
                fill: disablePre ? "#737373" : "#1E1E1E"
              }
            },
            "&:hover": {
              "&": {
                "path": {
                  fill: disablePre ? "#737373" : "red"
                }
              }
            }
          },
          onClick: () => disablePre ? {} : handlePreItem(),
          children: Icon
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: "flex",
            width: {
              xs: "auto",
              lg: "100%"
            },
            height: "100%",
            overflow: "auto",
            scrollbarWidth: "none",
            overflowX: "scroll",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            overscrollBehaviorX: "contain",
            "&::-webkit-scrollbar": {
              display: "none"
            }
          },
          ref: refWrapper,
          onScroll: () => isMobile ? {} : handleScroll(),
          children: !!(listItem != null && listItem.length) && listItem.map((item, index) => {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                scrollSnapAlign: "start"
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ThumbnailImage.default, {
                isSelect: (item == null ? void 0 : item.id) === (itemSelect == null ? void 0 : itemSelect.id),
                typeImg: item == null ? void 0 : item.typeImg,
                isFirstChild: index === 0,
                hrefImg: item == null ? void 0 : item.hrefImg,
                onClick: () => setItemSelect(item)
              })
            }, index);
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: {
              xs: "none",
              lg: "flex"
            },
            alignItems: "center",
            justifyContent: "center",
            width: "62px",
            minWidth: "62px",
            height: "62px",
            margin: "0px 8px",
            borderRadius: "60px",
            background: "#F6F6F6",
            transform: "rotate(180deg)",
            cursor: disableNex ? "auto" : "pointer",
            "&": {
              "path": {
                fill: disableNex ? "#737373" : "#1E1E1E"
              }
            },
            "&:hover": {
              "&": {
                "path": {
                  fill: disableNex ? "#737373" : "red"
                }
              }
            }
          },
          onClick: () => disableNex ? {} : handleNextItem(),
          children: Icon
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        position: "absolute",
        width: "100%",
        height: "86px",
        left: "0",
        bottom: "0px",
        display: {
          xs: "flex",
          lg: "none"
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: "flex",
          width: {
            xs: "auto",
            lg: "100%"
          },
          height: "100%",
          overflow: "auto",
          scrollbarWidth: "none",
          overflowX: "scroll",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          overscrollBehaviorX: "contain",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        },
        ref: refWrapperMobile,
        children: [!!(listItem != null && listItem.length) && listItem.map((item, index) => {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              display: "inline-block",
              scrollSnapAlign: "start",
              width: "fit-content"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                transform: {
                  xs: `translateX(${padding}px)`,
                  lg: `translateX(${0}px)`
                },
                width: "100%"
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ThumbnailImage.default, {
                isSelect: (item == null ? void 0 : item.id) === (itemSelect == null ? void 0 : itemSelect.id),
                typeImg: item == null ? void 0 : item.typeImg,
                isFirstChild: index === 0,
                hrefImg: item == null ? void 0 : item.hrefImg,
                onClick: () => setItemSelect(item)
              })
            })
          }, index);
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: {
              xs: "inline-block",
              lg: "none"
            },
            scrollSnapAlign: "start"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              transform: {
                xs: `translateX(${padding + 4}px)`,
                md: `translateX(${padding - 12}px)`
              }
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                display: "inline-block",
                width: {
                  xs: `${padding - 4}px`,
                  md: `${padding + 12}px`
                },
                height: "100%",
                background: "red"
              }
            })
          })
        })]
      })
    })]
  });
}

;

var _default = /*#__PURE__*/(0, _react.memo)(Thumbnail);

exports.default = _default;
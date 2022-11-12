"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _PopularCard = _interopRequireDefault(require("../../molecules/PopularCard"));

var _Icon = require("../../atoms/Icon");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _viewport = require("../../utils/viewport");

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import modules
// import styles
// import type
const ScrollingFeaturedGenreGameContainer = props => {
  const {
    title,
    listPopularCard,
    // viewMore,
    description,
    ticker,
    classSection = 'scrolling-featured-genre-game-container',
    stepScroll = 1
  } = props;
  const theme = (0, _material.useTheme)();
  const isTabletDown = (0, _material.useMediaQuery)((0, _viewport.TabletDown)(theme));
  const isMobileDown = (0, _material.useMediaQuery)((0, _viewport.MobileDown)(theme));
  const refIsMobile = (0, _react.useRef)(isMobileDown);
  const isMobileMin = (0, _material.useMediaQuery)((0, _viewport.SmallMobileDown)(theme));
  const refIsMobileMin = (0, _react.useRef)(isMobileMin); // const refNumberNext = useRef<number>(0);

  const [disableArrowRight, setDisableArrowRight] = (0, _react.useState)(false);
  const [disableArrowLeft, setDisableArrowLeft] = (0, _react.useState)(true);
  const [paddingScrollContent, setPaddingScrollContent] = (0, _react.useState)(0);
  const refWrapper = (0, _react.useRef)();
  const refWrapperContent = (0, _react.useRef)();
  const refWrapperScroll = (0, _react.useRef)();
  const refItemContent = (0, _react.useRef)();
  const refWidthItem = (0, _react.useRef)();
  const refContainer = (0, _react.useRef)();
  const refFullWidthContent = (0, _react.useRef)(0);
  const refLastChild = (0, _react.useRef)();
  const refTimeout = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    refIsMobileMin.current = isMobileMin;
  }, [isMobileMin]); // handle event resize set translateX item content scroll 

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      var _refContainer$current, _refItemContent$curre;

      refIsMobile.current = isMobileDown; // set padding-left content scroll  = left container. 

      setPaddingScrollContent(((_refContainer$current = refContainer.current) == null ? void 0 : _refContainer$current.offsetLeft) + (refIsMobileMin.current ? 16 : 24));
      refWidthItem.current = ((_refItemContent$curre = refItemContent.current) == null ? void 0 : _refItemContent$curre.offsetWidth) + 24; // listen to events window resize for change padding left  content scroll.

      window.addEventListener("resize", () => {
        var _refItemContent$curre2, _refItemContent$curre3;

        // set padding left when window resize
        if (refWrapperContent.current) {
          var _refContainer$current2;

          refWrapperContent.current.style.paddingLeft = `${((_refContainer$current2 = refContainer.current) == null ? void 0 : _refContainer$current2.offsetLeft) + (refIsMobileMin.current ? 16 : 24)}px`;
        } // set width item


        refWidthItem.current = ((_refItemContent$curre2 = refItemContent.current) == null ? void 0 : _refItemContent$curre2.offsetWidth) + 24; // get full width content scroll

        refFullWidthContent.current = ((_refItemContent$curre3 = refItemContent.current) == null ? void 0 : _refItemContent$curre3.offsetWidth) + 24 + (refWidthItem.current * listPopularCard.length || 1);
        refIsMobile.current = isMobileDown;
        const itemLastChild = refLastChild.current.getBoundingClientRect();
        const positionWidth = itemLastChild.x;

        if (positionWidth <= refWrapper.current.clientWidth) {
          setDisableArrowRight(true);
        } else {
          setDisableArrowRight(false);
        }
      });
    }

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [listPopularCard, isMobileDown, isTabletDown]); // handel event scroll refWrapperContent disable btn left or right

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const content = refWrapperScroll.current;

      if (content) {
        content.addEventListener("scroll", () => {
          const itemLastChild = refLastChild.current.getBoundingClientRect();
          const positionWidth = itemLastChild.x;

          if (!refIsMobile.current) {
            if (refTimeout.current) {
              window.clearTimeout(refTimeout.current);
            }

            refTimeout.current = setTimeout(() => {
              refTimeout.current = undefined;

              if (content.scrollLeft === 0) {
                setDisableArrowLeft(true);
              }

              if (disableArrowLeft && content.scrollLeft > 0) {
                setDisableArrowLeft(false);
              }

              if (positionWidth <= refWrapperContent.current.clientWidth) {
                setDisableArrowRight(true);
              }

              if (positionWidth > refContainer.current.clientWidth && disableArrowRight) {
                setDisableArrowRight(false);
              }
            }, 100);
          }
        });
      }
    }
  }, [disableArrowRight, disableArrowLeft]); // reset scroll

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      var _refWrapperScroll$cur, _refWrapperContent$cu;

      (_refWrapperScroll$cur = refWrapperScroll.current) == null ? void 0 : _refWrapperScroll$cur.scrollBy({
        left: 0,
        behavior: "smooth"
      });
      (_refWrapperContent$cu = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu.scrollBy({
        left: 0,
        behavior: "smooth"
      });
      const content = refWrapper.current;

      if (content) {
        const itemLastChild = refLastChild.current.getBoundingClientRect();
        const positionWidth = itemLastChild.x;

        if (positionWidth <= refWrapper.current.clientWidth) {
          setDisableArrowRight(true);
        } else {
          setDisableArrowRight(false);
        }
      }
    }
  }, [paddingScrollContent]); // handle next item

  const next = () => {
    var _refWrapperScroll$cur2;

    const clientWidth = refItemContent.current.clientWidth * stepScroll;
    (_refWrapperScroll$cur2 = refWrapperScroll.current) == null ? void 0 : _refWrapperScroll$cur2.scrollBy({
      left: clientWidth,
      behavior: "smooth"
    });
  }; // handle prev item


  const previous = () => {
    var _refWrapperScroll$cur3;

    const clientWidth = refItemContent.current.clientWidth * stepScroll;
    (_refWrapperScroll$cur3 = refWrapperScroll.current) == null ? void 0 : _refWrapperScroll$cur3.scrollBy({
      left: -clientWidth,
      behavior: "smooth"
    });
  };

  const ArrowSlide = ({
    children,
    sx,
    disabled,
    funcClick
  }) => {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      onClick: () => funcClick(),
      sx: (0, _extends2.default)({
        width: '62px',
        height: '62px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: disabled ? _colors.default.otherColor.alabaster : _colors.default.neutral.neutral7,
        borderRadius: '100%',
        pointerEvents: disabled ? 'none' : 'auto',
        cursor: !disabled ? 'pointer' : 'none'
      }, sx, {
        '&:hover': {
          '& path': {
            stroke: _colors.default.primary.bandaiNamcoRed
          }
        },
        '& svg': {
          height: '10px',
          pointerEvents: 'none',
          '& path': {
            stroke: disabled ? _colors.default.otherColor.quickSilver : _colors.default.primary.bandaiNamcoBlack
          }
        }
      }),
      children: children
    });
  }; // handel event scroll to set scrollBy item correct
  // const handleScroll = () => {
  //   if (refTimeout.current) {
  //     window.clearTimeout(refTimeout.current)
  //   }
  //   refTimeout.current = setTimeout(() => {
  //     refTimeout.current = undefined;
  //     const scrollLeft = refWrapperContent.current.scrollLeft;
  //     const clientWidth = refItemContent.current.clientWidth;
  //     if (Math.floor(scrollLeft) % clientWidth !== 0) {
  //       const length = listPopularCard.length || 0;
  //       for (let i = 0; i < length; i += 1) {
  //         const step = clientWidth * i;
  //         if (step > Math.floor(scrollLeft)) {
  //           refWrapperContent.current?.scrollBy({ left: step - scrollLeft, behavior: "smooth" });
  //           break;
  //         }
  //       }
  //     }
  //   }, 300);
  // }


  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      overflowX: "hidden"
    },
    ref: refWrapper,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      ref: refContainer,
      sx: {
        height: "0px",
        opacity: "0"
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      className: classSection,
      sx: {
        position: 'relative',
        display: 'flex',
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: isMobileDown ? "0px" : `${paddingScrollContent}px`,
        overflowX: isMobileDown ? "scroll" : "hidden",
        paddingTop: {
          xs: '70px',
          md: '80px'
        },
        paddingBottom: {
          xs: '30px',
          md: '80px'
        },
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
        overscrollBehaviorX: "contain",
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      },
      ref: refWrapperContent,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: "inline-block",
          scrollSnapAlign: "start",
          height: "100%"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            maxWidth: {
              md: '225px',
              xs: "183px"
            },
            transform: `translateX(${isMobileDown ? paddingScrollContent : 0}px)`
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              width: '100%',
              alignItems: 'center',
              marginTop: {
                xs: '-62px',
                md: '-75px'
              },
              marginLeft: {
                xs: '35px',
                md: '100px'
              },
              '& img': {
                objectFit: 'cover',
                borderRadius: '20px',
                display: 'block'
              }
            },
            children: ticker && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              src: ticker,
              alt: title != null ? title : ''
            })
          }), title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h4",
            color: _colors.default.primary.bandaiNamcoBlack,
            children: title
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p8",
            sx: {
              color: _colors.default.neutral.neutral2,
              marginTop: {
                xs: '8px',
                md: '10px'
              },
              marginBottom: '22px'
            },
            children: description
          }), !isTabletDown && listPopularCard.length > 2 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              display: 'flex',
              alignItems: 'center',
              marginTop: "40px"
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                marginRight: "16px"
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ArrowSlide, {
                disabled: disableArrowLeft,
                funcClick: previous,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconPrevSlide, {
                  htmlColor: "transparent",
                  sx: {
                    height: '10px'
                  }
                })
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ArrowSlide, {
              disabled: disableArrowRight,
              funcClick: next,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconNextSlide, {
                htmlColor: "transparent",
                sx: {
                  height: '10px'
                }
              })
            })]
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          flex: 1,
          position: "relative",
          overflow: isMobileDown ? "visible" : "hidden",
          marginLeft: {
            lg: "156px",
            md: "80px",
            xs: "38px"
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            width: "100%",
            height: "100%",
            overflowX: isMobileDown ? "visible" : "scroll",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            overscrollBehaviorX: "contain",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none"
            }
          },
          ref: refWrapperScroll // onScroll={handleScroll}
          ,
          children: [listPopularCard.map((itemProps, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              display: "inline-block",
              scrollSnapAlign: "start",
              height: "100%"
            },
            ref: refItemContent,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                display: "flex",
                marginLeft: "0px",
                height: "100%",
                width: {
                  md: "285px",
                  xs: "223px"
                },
                paddingRight: '22px',
                transform: `translateX(${isMobileDown ? paddingScrollContent : 0}px)`
              },
              className: "childContent",
              ref: refItemContent,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PopularCard.default, (0, _extends2.default)({}, itemProps), index)
            })
          }, index)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              display: "inline-block",
              zIndex: "10"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                display: "flex",
                marginLeft: `${isMobileDown ? paddingScrollContent - 20 : -32}px`,
                paddingRight: '0px',
                // width: "0px",
                // height: "0px",
                // opacity: "0",
                width: "10px",
                height: "10px",
                opacity: "0"
              },
              ref: refLastChild
            })
          })]
        })
      })]
    })]
  });
};

var _default = ScrollingFeaturedGenreGameContainer;
exports.default = _default;
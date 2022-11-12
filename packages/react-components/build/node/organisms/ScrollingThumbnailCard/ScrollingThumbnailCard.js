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

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _viewport = require("../../utils/viewport");

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _Icon = require("../../atoms/Icon");

var _ThumbnailNewsCard = _interopRequireDefault(require("./ThumbnailNewsCard"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import modules
// import types
const ScrollingThumbnailCard = props => {
  const {
    listThumbnail,
    title,
    viewMore,
    classSection = 'thumbnail-card-carousel',
    stepScroll = 1,
    locale = 'en-us',
    isReverse = false
  } = props;
  const [disableArrowRight, setDisableArrowRight] = (0, _react.useState)(false);
  const [disableArrowLeft, setDisableArrowLeft] = (0, _react.useState)(true);
  const [paddingScrollContent, setPaddingScrollContent] = (0, _react.useState)(0);
  const theme = (0, _material.useTheme)();
  const isMobileDown = (0, _material.useMediaQuery)((0, _viewport.MobileDown)(theme));
  const refIsMobile = (0, _react.useRef)(isMobileDown);
  const isMobileMin = (0, _material.useMediaQuery)((0, _viewport.SmallMobileDown)(theme));
  const refIsMobileMin = (0, _react.useRef)(isMobileMin);
  const isTabletDown = (0, _material.useMediaQuery)((0, _viewport.SmallDesktopDown)(theme));
  const refWrapper = (0, _react.useRef)();
  const refContainer = (0, _react.useRef)();
  const refWrapperContent = (0, _react.useRef)();
  const refItemContent = (0, _react.useRef)();
  const refLastChild = (0, _react.useRef)();
  const refTimeout = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    refIsMobileMin.current = isMobileMin;
  }, [isMobileMin]); // handle event resize set translateX item content scroll 

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      var _refContainer$current;

      refIsMobile.current = isMobileDown; // set padding-left content scroll  = left container.

      setPaddingScrollContent(((_refContainer$current = refContainer.current) == null ? void 0 : _refContainer$current.offsetLeft) + (refIsMobileMin.current ? 16 : 24)); // listen to events window resize for change padding left  content scroll.

      window.addEventListener("resize", () => {
        var _refContainer$current3;

        // set padding left when window resize
        if (refWrapperContent.current) {
          const listChild = refWrapperContent.current.querySelectorAll(".childContent");

          if (listChild.length) {
            listChild.forEach(child => {
              var _refContainer$current2;

              child.style.transform = `translateX(${((_refContainer$current2 = refContainer.current) == null ? void 0 : _refContainer$current2.offsetLeft) + (refIsMobileMin.current ? 16 : 24)}px)`;
            });
          }

          const itemLastChild = refLastChild.current.getBoundingClientRect();
          const positionWidth = itemLastChild.x;

          if (positionWidth <= refWrapperContent.current.clientWidth) {
            setDisableArrowRight(true);
          } else {
            setDisableArrowRight(false);
          }
        }

        refLastChild.current.style.marginLeft = `${((_refContainer$current3 = refContainer.current) == null ? void 0 : _refContainer$current3.offsetLeft) + (refIsMobileMin.current ? 16 : 24)}px`;
      });
    }

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [listThumbnail, isMobileDown]); // handel event scroll refWrapperContent disable btn left or right

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const content = refWrapperContent.current;

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

              if (positionWidth <= content.clientWidth) {
                setDisableArrowRight(true);
              }

              if (positionWidth > content.clientWidth && disableArrowRight) {
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
      var _refWrapperContent$cu;

      (_refWrapperContent$cu = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu.scrollBy({
        left: 0,
        behavior: "smooth"
      });
      const content = refWrapperContent.current;

      if (content) {
        const itemLastChild = refLastChild.current.getBoundingClientRect();
        const positionWidth = itemLastChild.x;

        if (positionWidth <= content.clientWidth) {
          setDisableArrowRight(true);
        } else {
          setDisableArrowRight(false);
        }
      }
    }
  }, [paddingScrollContent]); // handle next item

  const next = () => {
    var _refWrapperContent$cu2;

    const clientWidth = refItemContent.current.clientWidth * stepScroll;
    (_refWrapperContent$cu2 = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu2.scrollBy({
      left: clientWidth,
      behavior: "smooth"
    });
  }; // handle prev item


  const previous = () => {
    var _refWrapperContent$cu3;

    const clientWidth = refItemContent.current.clientWidth * stepScroll;
    (_refWrapperContent$cu3 = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu3.scrollBy({
      left: -clientWidth,
      behavior: "smooth"
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
  //       const length = listThumbnail.length || 0;
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
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    className: classSection,
    sx: {
      '& a': {
        outline: 'none'
      }
    },
    ref: refWrapper,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      ref: refContainer,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '0'
        },
        children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "h4",
          color: _colors.default.primary.bandaiNamcoBlack,
          children: title
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            display: 'flex',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            children: (viewMore == null ? void 0 : viewMore.title) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
              href: viewMore == null ? void 0 : viewMore.href,
              target: viewMore == null ? void 0 : viewMore.target,
              sx: {
                borderBottom: `1px solid ${_colors.default.neutral.neutral2}`,
                transition: 'all .4s',
                color: _colors.default.neutral.neutral2,
                textDecoration: 'none',
                lineHeight: '21px',
                display: 'inline-block',
                '&:hover': {
                  '& p': {
                    color: _colors.default.primary.bandaiNamcoBlack
                  },
                  borderBottom: `1px solid ${_colors.default.primary.bandaiNamcoBlack}`
                }
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "p5",
                color: _colors.default.neutral.neutral2,
                sx: {
                  transition: 'all .4s'
                },
                children: viewMore == null ? void 0 : viewMore.title
              })
            })
          }), !isMobileDown && (isTabletDown ? listThumbnail.length > 2 : listThumbnail.length > 3) && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              display: 'flex',
              alignItems: 'center',
              marginLeft: '48px'
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
              funcClick: () => {
                next();
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconNextSlide, {
                htmlColor: "transparent",
                sx: {
                  height: '10px'
                }
              })
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        width: "100%",
        marginTop: {
          xs: "24px",
          lg: "40px"
        },
        position: "relative",
        overflowX: "hidden"
      },
      className: "wrapper-content-component",
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          width: "100%",
          height: "100%",
          overflowX: "scroll",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          overscrollBehaviorX: "contain",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        },
        ref: refWrapperContent // onScroll={handleScroll}
        ,
        children: [!!(listThumbnail != null && listThumbnail.length) && listThumbnail.map((item, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: "inline-block",
            scrollSnapAlign: "start"
          },
          ref: refItemContent,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              display: "flex",
              marginLeft: "0px",
              paddingRight: '22px',
              transform: `translateX(${paddingScrollContent}px)`
            },
            className: "childContent",
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ThumbnailNewsCard.default, (0, _extends2.default)({}, item, {
              locale: locale,
              isReverse: isReverse
            }))
          })
        }, index)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: "flex"
          },
          className: "1111",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              display: "flex",
              marginLeft: `${paddingScrollContent - 32}px`,
              paddingRight: '0px',
              width: "10px",
              height: "10px",
              opacity: "0"
            },
            ref: refLastChild
          })
        })]
      })
    })]
  });
};

var _default = /*#__PURE__*/_react.default.memo(ScrollingThumbnailCard);

exports.default = _default;
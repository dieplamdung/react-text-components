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

var _Icon = require("../../atoms/Icon");

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _VideoPopupSlider = _interopRequireDefault(require("../VideoPopupSlider"));

var _disableScrollBody = require("../../utils/disableScrollBody");

var _viewport = require("../../utils/viewport");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _FeaturedNewsCard = _interopRequireDefault(require("./FeaturedNewsCard"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import modules
// import styles
// import types
const ScrollingFeaturedCard = props => {
  const {
    listFeaturedNewsCard,
    title,
    stepScroll = 1
  } = props;
  const [openPopup, setOpenPopup] = (0, _react.useState)(false);
  const [disableArrowRight, setDisableArrowRight] = (0, _react.useState)(false);
  const [disableArrowLeft, setDisableArrowLeft] = (0, _react.useState)(true);
  const [dataForPopup, setDataForPopup] = (0, _react.useState)([]);
  const [paddingScrollContent, setPaddingScrollContent] = (0, _react.useState)(0);
  const theme = (0, _material.useTheme)();
  const isTabletDown = (0, _material.useMediaQuery)((0, _viewport.TabletDown)(theme));
  const refIsMobile = (0, _react.useRef)(isTabletDown);
  const isMobileMin = (0, _material.useMediaQuery)((0, _viewport.SmallMobileDown)(theme));
  const refIsMobileMin = (0, _react.useRef)(isMobileMin);
  const refWrapper = (0, _react.useRef)();
  const refContainer = (0, _react.useRef)();
  const refItemContent = (0, _react.useRef)();
  const refWrapperContent = (0, _react.useRef)();
  const refLastChild = (0, _react.useRef)();
  const refTimeout = (0, _react.useRef)();
  /**
   * Use to disable scroll body
   */

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      (0, _disableScrollBody.disableScrollBody)(openPopup);
    }
  }, [openPopup]);
  (0, _react.useEffect)(() => {
    refIsMobileMin.current = isMobileMin;
  }, [isMobileMin]);
  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      var _refContainer$current;

      refIsMobile.current = isMobileMin; // set padding-left content scroll  = left container.

      setPaddingScrollContent(((_refContainer$current = refContainer.current) == null ? void 0 : _refContainer$current.offsetLeft) + (refIsMobileMin.current ? 16 : 24)); // listen to events window resize for change padding left  content scroll.

      window.addEventListener("resize", () => {
        // set padding left when window resize
        if (refWrapperContent.current) {
          const listChild = refWrapperContent.current.querySelectorAll(".childContent");

          if (listChild.length) {
            listChild.forEach(child => {
              if (child) {
                var _refContainer$current2;

                child.style.transform = `translateX(${((_refContainer$current2 = refContainer.current) == null ? void 0 : _refContainer$current2.offsetLeft) + (refIsMobileMin.current ? 16 : 24)}px)`;
              }
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

        if (refLastChild.current) {
          var _refContainer$current3;

          refLastChild.current.style.marginLeft = `${((_refContainer$current3 = refContainer.current) == null ? void 0 : _refContainer$current3.offsetLeft) + (refIsMobileMin.current ? 16 : 24)}px`;
        }
      });
    }

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [listFeaturedNewsCard, isTabletDown, isMobileMin]); // handel event scroll refWrapperContent disable btn left or right

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
  }, [paddingScrollContent]);

  const next = () => {
    var _refWrapperContent$cu2;

    const clientWidth = refItemContent.current.clientWidth * stepScroll;
    (_refWrapperContent$cu2 = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu2.scrollBy({
      left: clientWidth,
      behavior: "smooth"
    });
  };

  const previous = () => {
    var _refWrapperContent$cu3;

    const clientWidth = refItemContent.current.clientWidth * stepScroll;
    (_refWrapperContent$cu3 = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu3.scrollBy({
      left: -clientWidth,
      behavior: "smooth"
    });
  };

  const handleClickedButton = card => {
    var _card$trailers;

    setOpenPopup(true); // disableScrollBody(true)

    if (card != null && (_card$trailers = card.trailers) != null && _card$trailers.length) {
      setDataForPopup(card == null ? void 0 : card.trailers);
    }
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
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    className: "featured-card-carousel",
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
          paddingLeft: '0',
          paddingRight: '16px',
          maxWidth: {
            xs: 'calc(100vw - 16px)',
            md: '720px',
            lg: '960px',
            xl: '1140px'
          }
        },
        children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "h4",
          color: _colors.default.primary.bandaiNamcoBlack,
          children: title
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: 'flex',
            alignItems: 'center'
          },
          children: !isTabletDown && (listFeaturedNewsCard == null ? void 0 : listFeaturedNewsCard.length) > 1 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
          })
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        marginTop: {
          xs: '24px',
          lg: "40px"
        },
        minHeight: {
          xs: "360px",
          lg: "460px"
        },
        width: "100%",
        position: "relative",
        overflowX: "hidden"
      },
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
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        } // onScroll={handleScroll}
        ,
        ref: refWrapperContent,
        children: [listFeaturedNewsCard.map((card, index) => {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              display: "inline-block",
              scrollSnapAlign: "start"
            },
            ref: refItemContent,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                display: "flex",
                marginLeft: "0px",
                paddingRight: {
                  xs: "20px",
                  lg: "32px",
                  xl: "100px"
                },
                transform: `translateX(${paddingScrollContent}px)`
              },
              className: "childContent",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FeaturedNewsCard.default, (0, _extends2.default)({}, card, {
                variant: !isTabletDown ? 'horizontal' : 'vertical',
                onScrolling: true,
                setOpenTrailerPopup: () => handleClickedButton(card)
              }))
            })
          }, index);
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: 'flex',
            width: "0px",
            height: "0px",
            opacity: "0"
          },
          ref: refLastChild
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Modal, {
      open: !!(dataForPopup != null && dataForPopup.length) && openPopup,
      sx: {
        pointerEvents: 'auto'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_VideoPopupSlider.default, {
        handleOpenPopup: result => {
          setOpenPopup(result);
        },
        trailerItems: dataForPopup,
        initialItem: 0
      })
    })]
  });
};

var _default = ScrollingFeaturedCard;
exports.default = _default;
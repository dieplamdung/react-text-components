import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// import modules
import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Typography from "../../atoms/Typography";
import PopularCard from "../../molecules/PopularCard";
import { IconNextSlide, IconPrevSlide } from "../../atoms/Icon"; // import styles

import colors from "../../theme/colors";
// import type
import { MobileDown, SmallMobileDown, TabletDown } from "../../utils/viewport";
import Container from "../../atoms/Container";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var ScrollingFeaturedGenreGameContainer = function ScrollingFeaturedGenreGameContainer(props) {
  var title = props.title,
      listPopularCard = props.listPopularCard,
      description = props.description,
      ticker = props.ticker,
      _props$classSection = props.classSection,
      classSection = _props$classSection === void 0 ? 'scrolling-featured-genre-game-container' : _props$classSection,
      _props$stepScroll = props.stepScroll,
      stepScroll = _props$stepScroll === void 0 ? 1 : _props$stepScroll;
  var theme = useTheme();
  var isTabletDown = useMediaQuery(TabletDown(theme));
  var isMobileDown = useMediaQuery(MobileDown(theme));
  var refIsMobile = useRef(isMobileDown);
  var isMobileMin = useMediaQuery(SmallMobileDown(theme));
  var refIsMobileMin = useRef(isMobileMin); // const refNumberNext = useRef<number>(0);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      disableArrowRight = _useState2[0],
      setDisableArrowRight = _useState2[1];

  var _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      disableArrowLeft = _useState4[0],
      setDisableArrowLeft = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      paddingScrollContent = _useState6[0],
      setPaddingScrollContent = _useState6[1];

  var refWrapper = useRef();
  var refWrapperContent = useRef();
  var refWrapperScroll = useRef();
  var refItemContent = useRef();
  var refWidthItem = useRef();
  var refContainer = useRef();
  var refFullWidthContent = useRef(0);
  var refLastChild = useRef();
  var refTimeout = useRef();
  useEffect(function () {
    refIsMobileMin.current = isMobileMin;
  }, [isMobileMin]); // handle event resize set translateX item content scroll 

  useEffect(function () {
    if (typeof window !== "undefined") {
      var _refContainer$current, _refItemContent$curre;

      refIsMobile.current = isMobileDown; // set padding-left content scroll  = left container. 

      setPaddingScrollContent(((_refContainer$current = refContainer.current) == null ? void 0 : _refContainer$current.offsetLeft) + (refIsMobileMin.current ? 16 : 24));
      refWidthItem.current = ((_refItemContent$curre = refItemContent.current) == null ? void 0 : _refItemContent$curre.offsetWidth) + 24; // listen to events window resize for change padding left  content scroll.

      window.addEventListener("resize", function () {
        var _refItemContent$curre2, _refItemContent$curre3;

        // set padding left when window resize
        if (refWrapperContent.current) {
          var _refContainer$current2;

          refWrapperContent.current.style.paddingLeft = "".concat(((_refContainer$current2 = refContainer.current) == null ? void 0 : _refContainer$current2.offsetLeft) + (refIsMobileMin.current ? 16 : 24), "px");
        } // set width item


        refWidthItem.current = ((_refItemContent$curre2 = refItemContent.current) == null ? void 0 : _refItemContent$curre2.offsetWidth) + 24; // get full width content scroll

        refFullWidthContent.current = ((_refItemContent$curre3 = refItemContent.current) == null ? void 0 : _refItemContent$curre3.offsetWidth) + 24 + (refWidthItem.current * listPopularCard.length || 1);
        refIsMobile.current = isMobileDown;
        var itemLastChild = refLastChild.current.getBoundingClientRect();
        var positionWidth = itemLastChild.x;

        if (positionWidth <= refWrapper.current.clientWidth) {
          setDisableArrowRight(true);
        } else {
          setDisableArrowRight(false);
        }
      });
    }

    return function () {
      window.removeEventListener("resize", function () {});
    };
  }, [listPopularCard, isMobileDown, isTabletDown]); // handel event scroll refWrapperContent disable btn left or right

  useEffect(function () {
    if (typeof window !== "undefined") {
      var content = refWrapperScroll.current;

      if (content) {
        content.addEventListener("scroll", function () {
          var itemLastChild = refLastChild.current.getBoundingClientRect();
          var positionWidth = itemLastChild.x;

          if (!refIsMobile.current) {
            if (refTimeout.current) {
              window.clearTimeout(refTimeout.current);
            }

            refTimeout.current = setTimeout(function () {
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

  useEffect(function () {
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
      var content = refWrapper.current;

      if (content) {
        var itemLastChild = refLastChild.current.getBoundingClientRect();
        var positionWidth = itemLastChild.x;

        if (positionWidth <= refWrapper.current.clientWidth) {
          setDisableArrowRight(true);
        } else {
          setDisableArrowRight(false);
        }
      }
    }
  }, [paddingScrollContent]); // handle next item

  var next = function next() {
    var _refWrapperScroll$cur2;

    var clientWidth = refItemContent.current.clientWidth * stepScroll;
    (_refWrapperScroll$cur2 = refWrapperScroll.current) == null ? void 0 : _refWrapperScroll$cur2.scrollBy({
      left: clientWidth,
      behavior: "smooth"
    });
  }; // handle prev item


  var previous = function previous() {
    var _refWrapperScroll$cur3;

    var clientWidth = refItemContent.current.clientWidth * stepScroll;
    (_refWrapperScroll$cur3 = refWrapperScroll.current) == null ? void 0 : _refWrapperScroll$cur3.scrollBy({
      left: -clientWidth,
      behavior: "smooth"
    });
  };

  var ArrowSlide = function ArrowSlide(_ref) {
    var children = _ref.children,
        sx = _ref.sx,
        disabled = _ref.disabled,
        funcClick = _ref.funcClick;
    return /*#__PURE__*/_jsx(Box, {
      onClick: function onClick() {
        return funcClick();
      },
      sx: _extends({
        width: '62px',
        height: '62px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: disabled ? colors.otherColor.alabaster : colors.neutral.neutral7,
        borderRadius: '100%',
        pointerEvents: disabled ? 'none' : 'auto',
        cursor: !disabled ? 'pointer' : 'none'
      }, sx, {
        '&:hover': {
          '& path': {
            stroke: colors.primary.bandaiNamcoRed
          }
        },
        '& svg': {
          height: '10px',
          pointerEvents: 'none',
          '& path': {
            stroke: disabled ? colors.otherColor.quickSilver : colors.primary.bandaiNamcoBlack
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


  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      overflowX: "hidden"
    },
    ref: refWrapper,
    children: [/*#__PURE__*/_jsx(Container, {
      ref: refContainer,
      sx: {
        height: "0px",
        opacity: "0"
      }
    }), /*#__PURE__*/_jsxs(Box, {
      className: classSection,
      sx: {
        position: 'relative',
        display: 'flex',
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: isMobileDown ? "0px" : "".concat(paddingScrollContent, "px"),
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
      children: [/*#__PURE__*/_jsx(Box, {
        sx: {
          display: "inline-block",
          scrollSnapAlign: "start",
          height: "100%"
        },
        children: /*#__PURE__*/_jsxs(Box, {
          sx: {
            maxWidth: {
              md: '225px',
              xs: "183px"
            },
            transform: "translateX(".concat(isMobileDown ? paddingScrollContent : 0, "px)")
          },
          children: [/*#__PURE__*/_jsx(Box, {
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
            children: ticker && /*#__PURE__*/_jsx("img", {
              src: ticker,
              alt: title != null ? title : ''
            })
          }), title && /*#__PURE__*/_jsx(Typography, {
            variant: "h4",
            color: colors.primary.bandaiNamcoBlack,
            children: title
          }), /*#__PURE__*/_jsx(Typography, {
            variant: "p8",
            sx: {
              color: colors.neutral.neutral2,
              marginTop: {
                xs: '8px',
                md: '10px'
              },
              marginBottom: '22px'
            },
            children: description
          }), !isTabletDown && listPopularCard.length > 2 && /*#__PURE__*/_jsxs(Box, {
            sx: {
              display: 'flex',
              alignItems: 'center',
              marginTop: "40px"
            },
            children: [/*#__PURE__*/_jsx(Box, {
              sx: {
                marginRight: "16px"
              },
              children: /*#__PURE__*/_jsx(ArrowSlide, {
                disabled: disableArrowLeft,
                funcClick: previous,
                children: /*#__PURE__*/_jsx(IconPrevSlide, {
                  htmlColor: "transparent",
                  sx: {
                    height: '10px'
                  }
                })
              })
            }), /*#__PURE__*/_jsx(ArrowSlide, {
              disabled: disableArrowRight,
              funcClick: next,
              children: /*#__PURE__*/_jsx(IconNextSlide, {
                htmlColor: "transparent",
                sx: {
                  height: '10px'
                }
              })
            })]
          })]
        })
      }), /*#__PURE__*/_jsx(Box, {
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
        children: /*#__PURE__*/_jsxs(Box, {
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
          children: [listPopularCard.map(function (itemProps, index) {
            return /*#__PURE__*/_jsx(Box, {
              sx: {
                display: "inline-block",
                scrollSnapAlign: "start",
                height: "100%"
              },
              ref: refItemContent,
              children: /*#__PURE__*/_jsx(Box, {
                sx: {
                  display: "flex",
                  marginLeft: "0px",
                  height: "100%",
                  width: {
                    md: "285px",
                    xs: "223px"
                  },
                  paddingRight: '22px',
                  transform: "translateX(".concat(isMobileDown ? paddingScrollContent : 0, "px)")
                },
                className: "childContent",
                ref: refItemContent,
                children: /*#__PURE__*/_jsx(PopularCard, _extends({}, itemProps), index)
              })
            }, index);
          }), /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "inline-block",
              zIndex: "10"
            },
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                display: "flex",
                marginLeft: "".concat(isMobileDown ? paddingScrollContent - 20 : -32, "px"),
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

export default ScrollingFeaturedGenreGameContainer;
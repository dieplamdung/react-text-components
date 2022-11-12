import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// import modules
import { Box, Link, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors"; // import types

import { MobileDown, SmallMobileDown, SmallDesktopDown } from "../../utils/viewport";
import Container from "../../atoms/Container";
import { IconNextSlide, IconPrevSlide } from "../../atoms/Icon";
import ThumbnailNewsCard from "./ThumbnailNewsCard";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var ScrollingThumbnailCard = function ScrollingThumbnailCard(props) {
  var listThumbnail = props.listThumbnail,
      title = props.title,
      viewMore = props.viewMore,
      _props$classSection = props.classSection,
      classSection = _props$classSection === void 0 ? 'thumbnail-card-carousel' : _props$classSection,
      _props$stepScroll = props.stepScroll,
      stepScroll = _props$stepScroll === void 0 ? 1 : _props$stepScroll,
      _props$locale = props.locale,
      locale = _props$locale === void 0 ? 'en-us' : _props$locale,
      _props$isReverse = props.isReverse,
      isReverse = _props$isReverse === void 0 ? false : _props$isReverse;

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

  var theme = useTheme();
  var isMobileDown = useMediaQuery(MobileDown(theme));
  var refIsMobile = useRef(isMobileDown);
  var isMobileMin = useMediaQuery(SmallMobileDown(theme));
  var refIsMobileMin = useRef(isMobileMin);
  var isTabletDown = useMediaQuery(SmallDesktopDown(theme));
  var refWrapper = useRef();
  var refContainer = useRef();
  var refWrapperContent = useRef();
  var refItemContent = useRef();
  var refLastChild = useRef();
  var refTimeout = useRef();
  useEffect(function () {
    refIsMobileMin.current = isMobileMin;
  }, [isMobileMin]); // handle event resize set translateX item content scroll 

  useEffect(function () {
    if (typeof window !== "undefined") {
      var _refContainer$current;

      refIsMobile.current = isMobileDown; // set padding-left content scroll  = left container.

      setPaddingScrollContent(((_refContainer$current = refContainer.current) == null ? void 0 : _refContainer$current.offsetLeft) + (refIsMobileMin.current ? 16 : 24)); // listen to events window resize for change padding left  content scroll.

      window.addEventListener("resize", function () {
        var _refContainer$current3;

        // set padding left when window resize
        if (refWrapperContent.current) {
          var listChild = refWrapperContent.current.querySelectorAll(".childContent");

          if (listChild.length) {
            listChild.forEach(function (child) {
              var _refContainer$current2;

              child.style.transform = "translateX(".concat(((_refContainer$current2 = refContainer.current) == null ? void 0 : _refContainer$current2.offsetLeft) + (refIsMobileMin.current ? 16 : 24), "px)");
            });
          }

          var itemLastChild = refLastChild.current.getBoundingClientRect();
          var positionWidth = itemLastChild.x;

          if (positionWidth <= refWrapperContent.current.clientWidth) {
            setDisableArrowRight(true);
          } else {
            setDisableArrowRight(false);
          }
        }

        refLastChild.current.style.marginLeft = "".concat(((_refContainer$current3 = refContainer.current) == null ? void 0 : _refContainer$current3.offsetLeft) + (refIsMobileMin.current ? 16 : 24), "px");
      });
    }

    return function () {
      window.removeEventListener("resize", function () {});
    };
  }, [listThumbnail, isMobileDown]); // handel event scroll refWrapperContent disable btn left or right

  useEffect(function () {
    if (typeof window !== "undefined") {
      var content = refWrapperContent.current;

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

  useEffect(function () {
    if (typeof window !== "undefined") {
      var _refWrapperContent$cu;

      (_refWrapperContent$cu = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu.scrollBy({
        left: 0,
        behavior: "smooth"
      });
      var content = refWrapperContent.current;

      if (content) {
        var itemLastChild = refLastChild.current.getBoundingClientRect();
        var positionWidth = itemLastChild.x;

        if (positionWidth <= content.clientWidth) {
          setDisableArrowRight(true);
        } else {
          setDisableArrowRight(false);
        }
      }
    }
  }, [paddingScrollContent]); // handle next item

  var next = function next() {
    var _refWrapperContent$cu2;

    var clientWidth = refItemContent.current.clientWidth * stepScroll;
    (_refWrapperContent$cu2 = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu2.scrollBy({
      left: clientWidth,
      behavior: "smooth"
    });
  }; // handle prev item


  var previous = function previous() {
    var _refWrapperContent$cu3;

    var clientWidth = refItemContent.current.clientWidth * stepScroll;
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
  };

  return /*#__PURE__*/_jsxs(Box, {
    className: classSection,
    sx: {
      '& a': {
        outline: 'none'
      }
    },
    ref: refWrapper,
    children: [/*#__PURE__*/_jsx(Container, {
      ref: refContainer,
      children: /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '0'
        },
        children: [title && /*#__PURE__*/_jsx(Typography, {
          variant: "h4",
          color: colors.primary.bandaiNamcoBlack,
          children: title
        }), /*#__PURE__*/_jsxs(Box, {
          sx: {
            display: 'flex',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/_jsx(Box, {
            children: (viewMore == null ? void 0 : viewMore.title) && /*#__PURE__*/_jsx(Link, {
              href: viewMore == null ? void 0 : viewMore.href,
              target: viewMore == null ? void 0 : viewMore.target,
              sx: {
                borderBottom: "1px solid ".concat(colors.neutral.neutral2),
                transition: 'all .4s',
                color: colors.neutral.neutral2,
                textDecoration: 'none',
                lineHeight: '21px',
                display: 'inline-block',
                '&:hover': {
                  '& p': {
                    color: colors.primary.bandaiNamcoBlack
                  },
                  borderBottom: "1px solid ".concat(colors.primary.bandaiNamcoBlack)
                }
              },
              children: /*#__PURE__*/_jsx(Typography, {
                variant: "p5",
                color: colors.neutral.neutral2,
                sx: {
                  transition: 'all .4s'
                },
                children: viewMore == null ? void 0 : viewMore.title
              })
            })
          }), !isMobileDown && (isTabletDown ? listThumbnail.length > 2 : listThumbnail.length > 3) && /*#__PURE__*/_jsxs(Box, {
            sx: {
              display: 'flex',
              alignItems: 'center',
              marginLeft: '48px'
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
              funcClick: function funcClick() {
                next();
              },
              children: /*#__PURE__*/_jsx(IconNextSlide, {
                htmlColor: "transparent",
                sx: {
                  height: '10px'
                }
              })
            })]
          })]
        })]
      })
    }), /*#__PURE__*/_jsx(Box, {
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
      children: /*#__PURE__*/_jsxs(Box, {
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
        children: [!!(listThumbnail != null && listThumbnail.length) && listThumbnail.map(function (item, index) {
          return /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "inline-block",
              scrollSnapAlign: "start"
            },
            ref: refItemContent,
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                display: "flex",
                marginLeft: "0px",
                paddingRight: '22px',
                transform: "translateX(".concat(paddingScrollContent, "px)")
              },
              className: "childContent",
              children: /*#__PURE__*/_jsx(ThumbnailNewsCard, _extends({}, item, {
                locale: locale,
                isReverse: isReverse
              }))
            })
          }, index);
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            display: "flex"
          },
          className: "1111",
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "flex",
              marginLeft: "".concat(paddingScrollContent - 32, "px"),
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

export default /*#__PURE__*/React.memo(ScrollingThumbnailCard);
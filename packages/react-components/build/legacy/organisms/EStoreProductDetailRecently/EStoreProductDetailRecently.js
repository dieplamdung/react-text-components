import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// Modules
import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Typography from "../../atoms/Typography";
import { IconNextSlide, IconPrevSlide } from "../../atoms/Icon"; // Styles

import colors from "../../theme/colors";
import { MobileDown, SmallMobileDown, TabletDown } from "../../utils/viewport";
// Types
import Container from "../../atoms/Container";
import ProductItem from "../EStoreProduct/ProductItem";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var ScrollingDLCContainer = function ScrollingDLCContainer(props) {
  var productList = props.productList,
      title = props.title,
      _props$stepScroll = props.stepScroll,
      stepScroll = _props$stepScroll === void 0 ? 1 : _props$stepScroll;

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
  var isTabletDown = useMediaQuery(TabletDown(theme));
  var isMobileDown = useMediaQuery(MobileDown(theme));
  var refIsMobile = useRef(isMobileDown);
  var isMobileMin = useMediaQuery(SmallMobileDown(theme));
  var refIsMobileMin = useRef(isMobileMin);
  var refWrapper = useRef();
  var refContainer = useRef();
  var refItemContent = useRef();
  var refWrapperContent = useRef();
  var refLastChild = useRef();
  var refTimeout = useRef(); // handel event scroll refWrapperContent disable btn left or right

  var handleScroll = function handleScroll() {
    if (typeof window !== "undefined") {
      var content = refWrapperContent.current;

      if (content && !refIsMobileMin.current) {
        content.addEventListener("scroll", function () {
          if (!isTabletDown) {
            var _refLastChild$current;

            var itemLastChild = (_refLastChild$current = refLastChild.current) == null ? void 0 : _refLastChild$current.getBoundingClientRect();
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
          }
        });
      }
    }
  }; // handle setPaddingScrollContent


  useEffect(function () {
    if (typeof window !== "undefined") {
      var _refContainer$current;

      refIsMobile.current = isMobileDown; // set padding-left content scroll  = left container.

      setPaddingScrollContent(((_refContainer$current = refContainer.current) == null ? void 0 : _refContainer$current.offsetLeft) + (refIsMobileMin.current ? 16 : 24));
      var time = null;
      window.addEventListener("resize", function () {
        if (time) {
          window.clearTimeout(time);
        }

        time = setTimeout(function () {
          var _refContainer$current2;

          time = null;
          setPaddingScrollContent(((_refContainer$current2 = refContainer.current) == null ? void 0 : _refContainer$current2.offsetLeft) + (refIsMobileMin.current ? 16 : 24));
        }, 150);
      });
    }

    return function () {
      window.removeEventListener("resize", function () {});
    };
  }, [productList, isMobileDown, isTabletDown]); // handle next item

  var next = function next() {
    var _refWrapperContent$cu;

    var clientWidth = refItemContent.current.clientWidth * stepScroll;
    (_refWrapperContent$cu = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu.scrollBy({
      left: clientWidth,
      behavior: "smooth"
    });
  }; // handle prev item


  var previous = function previous() {
    var _refWrapperContent$cu2;

    var clientWidth = refItemContent.current.clientWidth * stepScroll;
    (_refWrapperContent$cu2 = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu2.scrollBy({
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
  };

  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      padding: {
        xs: "72px 0px",
        md: "80px 0px"
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
          paddingLeft: '0',
          paddingRight: '16px',
          maxWidth: {
            xs: 'calc(100vw - 16px)',
            md: '720px',
            lg: '960px',
            xl: '1140px'
          },
          padding: {
            xs: "0px 16px",
            md: "0px"
          }
        },
        children: [title && /*#__PURE__*/_jsx(Typography, {
          variant: "h4",
          sx: {
            color: colors.primary.bandaiNamcoBlack,
            width: 'auto',
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": "2",

            /* number of lines to show */
            lineClamp: "2",
            "-webkit-box-orient": "vertical"
          },
          children: title
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            display: "flex",
            alignItems: "center"
          },
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              display: 'flex',
              alignItems: 'center'
            },
            children: !isTabletDown && (productList == null ? void 0 : productList.length) > 2 && /*#__PURE__*/_jsxs(Box, {
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
            })
          })
        })]
      })
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        width: "100%",
        marginTop: {
          xs: "24px",
          md: '40px'
        },
        position: "relative",
        overflowX: "hidden"
      },
      children: /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: "flex",
          gap: "24px",
          flexDirection: "row",
          flexWrap: "nowrap",
          width: "100%",
          overflow: "scroll",
          transition: "all 0.3s",
          scrollSnapType: "x mandatory",
          "-webkit-scroll-snap-type": "x mandatory",
          webkitOverflowScrolling: "touch",
          overscrollBehaviorX: "contain",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        },
        onScroll: handleScroll,
        ref: refWrapperContent,
        children: [!!(productList != null && productList.length) && productList.map(function (item, index) {
          return /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "inline-block",
              scrollSnapAlign: "start"
            },
            ref: refItemContent,
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                display: "flex",
                width: {
                  xs: '201px',
                  md: '262px'
                },
                transform: {
                  xs: "translateX(".concat(paddingScrollContent + 10, "px)"),
                  md: "translateX(".concat(paddingScrollContent, "px)")
                }
              },
              className: "childContent",
              ref: refItemContent,
              children: /*#__PURE__*/_jsx(ProductItem, _extends({}, item, {
                isShowBottom: true
              }))
            })
          }, index);
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            display: {
              xs: "none",
              lg: "inline-block"
            }
          },
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "flex",
              marginLeft: "".concat(paddingScrollContent - 34, "px"),
              paddingRight: '0px',
              width: "1px",
              height: "11px",
              opacity: "0"
            },
            ref: refLastChild
          })
        })]
      })
    })]
  });
};

export default ScrollingDLCContainer;
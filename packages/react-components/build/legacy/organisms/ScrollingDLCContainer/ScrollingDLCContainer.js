import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// Modules
import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Typography from "../../atoms/Typography";
import DLCCard from "../../molecules/DLCCard";
import { IconNextSlide, IconPrevSlide } from "../../atoms/Icon"; // Styles

import colors from "../../theme/colors";
import { MobileDown, SmallMobileDown, TabletDown } from "../../utils/viewport";
// Types
import Container from "../../atoms/Container";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var ScrollingDLCContainer = function ScrollingDLCContainer(props) {
  var id = props.id,
      listThumbnail = props.listThumbnail,
      title = props.title,
      _props$classSection = props.classSection,
      classSection = _props$classSection === void 0 ? 'thumbnail-card-carousel' : _props$classSection,
      _props$stepScroll = props.stepScroll,
      stepScroll = _props$stepScroll === void 0 ? 1 : _props$stepScroll,
      _props$alertShow = props.alertShow,
      alertShow = _props$alertShow === void 0 ? ["Show more", "Show less"] : _props$alertShow;

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

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      showMore = _useState8[0],
      setShowMore = _useState8[1];

  var _useState9 = useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      totalHeightItem = _useState10[0],
      setTotalHeightItem = _useState10[1];

  var _useState11 = useState(0),
      _useState12 = _slicedToArray(_useState11, 2),
      height3Item = _useState12[0],
      setHeight3Item = _useState12[1];

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
  var refTimeout = useRef(); // const refIsShow = useRef<any>();

  useEffect(function () {
    refIsMobileMin.current = isMobileMin;
    setShowMore(false);

    if (isMobileMin && typeof window !== "undefined" && (listThumbnail == null ? void 0 : listThumbnail.length) > 3) {
      var content = refWrapperContent.current;

      if (content) {
        var listChild = refWrapperContent.current.querySelectorAll(".childContent");

        if (listChild.length) {
          var heightTotal = 0;
          var heightMinItem = 0;
          listChild.forEach(function (child, index) {
            if (index < 3) {
              heightMinItem += child.clientHeight + 104;
            }

            heightTotal += child.clientHeight + 104;
          });
          setTotalHeightItem(heightTotal - 104);
          setHeight3Item(heightMinItem - 104);
        }
      }
    }
  }, [isMobileMin, listThumbnail]); // handle event resize set translateX item content scroll 

  useEffect(function () {
    if (typeof window !== "undefined") {
      var _refContainer$current;

      refIsMobile.current = isMobileDown; // set padding-left content scroll  = left container.

      setPaddingScrollContent(((_refContainer$current = refContainer.current) == null ? void 0 : _refContainer$current.offsetLeft) + (refIsMobileMin.current ? 16 : 24)); // listen to events window resize for change padding left  content scroll.

      window.addEventListener("resize", function () {
        var _refContainer$current3;

        // set padding left when window resize
        if (refWrapperContent.current && !refIsMobileMin.current) {
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

      if (content && !refIsMobileMin.current) {
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

      if (content && !refIsMobileMin.current) {
        var itemLastChild = refLastChild.current.getBoundingClientRect();
        var positionWidth = itemLastChild.x;

        if (positionWidth <= content.clientWidth) {
          setDisableArrowRight(true);
        } else {
          setDisableArrowRight(false);
        }
      }
    }
  }, [paddingScrollContent]); // dispatchEvent event send id to sub navigation

  useEffect(function () {
    if (typeof window !== "undefined") {
      var container = refWrapper.current; // const height = window.innerHeight;

      window.addEventListener("scroll", function () {
        if (container) {
          var _container$getBoundin = container.getBoundingClientRect(),
              bottom = _container$getBoundin.bottom,
              top = _container$getBoundin.top;

          var newBottom = Math.floor(bottom);
          var newTop = Math.floor(top);

          if (newTop < 120 && newBottom > 100) {
            var _window;

            // refIsShow.current = true;
            (_window = window) == null ? void 0 : _window.dispatchEvent(new Event("".concat(id)));
          } // if ((newBottom < 0 && refIsShow.current) || (newTop > height && refIsShow.current)) {
          //   refIsShow.current = false;
          //   window.removeEventListener(`${id}`, () => { })
          // }

        }
      });
    }

    return function () {
      window.removeEventListener("".concat(id), function () {});
      window.removeEventListener("scroll", function () {});
    };
  }, [id]); // handle next item

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
    id: id,
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
            display: 'flex',
            alignItems: 'center'
          },
          children: !isTabletDown && (listThumbnail == null ? void 0 : listThumbnail.length) > 2 && /*#__PURE__*/_jsxs(Box, {
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
        })]
      })
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        width: "100%",
        marginTop: {
          xs: "24px",
          md: '40px'
        },
        position: "relative",
        overflowX: "hidden"
      },
      children: [/*#__PURE__*/_jsxs(Box, {
        sx: {
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row"
          },
          flexWrap: "nowrap",
          width: "100%",
          height: {
            xs: (listThumbnail == null ? void 0 : listThumbnail.length) > 3 ? "".concat(showMore ? totalHeightItem : height3Item, "px") : "100%",
            md: "100%"
          },
          overflow: {
            xs: (listThumbnail == null ? void 0 : listThumbnail.length) > 3 ? "".concat(showMore ? "auto" : "hidden") : "auto",
            md: "scroll"
          },
          transition: "all 0.3s",
          scrollSnapType: "x mandatory",
          "-webkit-scroll-snap-type": "x mandatory",
          webkitOverflowScrolling: "touch",
          overscrollBehaviorX: "contain",
          // scrollBehavior: "smooth",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        } // onScroll={handleScroll}
        ,
        ref: refWrapperContent,
        children: [listThumbnail && listThumbnail.length > 0 && listThumbnail.map(function (item, index) {
          return /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "inline-block",
              scrollSnapAlign: {
                xs: 'none',
                md: "start"
              },
              marginBottom: {
                xs: index === listThumbnail.length - 1 ? "0px" : "104px",
                md: "0px"
              }
            },
            ref: refItemContent,
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                display: "flex",
                minWidth: {
                  xs: '311px',
                  md: '371px'
                },
                marginLeft: "0px",
                paddingRight: {
                  xs: "16px",
                  md: '24px'
                },
                paddingLeft: {
                  xs: "16px",
                  md: '0px'
                },
                transform: {
                  xs: "0px",
                  md: "translateX(".concat(paddingScrollContent, "px)")
                }
              },
              className: "childContent",
              ref: refItemContent,
              children: /*#__PURE__*/_jsx(DLCCard, _extends({}, item, {
                isButtonSecond: true
              }))
            })
          }, index);
        }), !isMobileMin && /*#__PURE__*/_jsx(Box, {
          sx: {
            display: "inline-block"
          },
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "flex",
              marginLeft: "".concat(paddingScrollContent - 34, "px"),
              paddingRight: '0px',
              width: "10px",
              height: "10px",
              opacity: "0"
            },
            ref: refLastChild
          })
        })]
      }), isMobileMin && (listThumbnail == null ? void 0 : listThumbnail.length) > 3 && /*#__PURE__*/_jsx(Box, {
        sx: {
          display: "flex",
          justifyContent: "center",
          marginTop: "48px"
        },
        children: /*#__PURE__*/_jsx(Typography, {
          color: colors.primary.bandaiNamcoRed,
          variant: "p5",
          sx: {
            position: 'relative',
            "&:after": {
              content: "' '",
              position: "absolute",
              left: "0px",
              bottom: "0px",
              width: "100%",
              borderBottom: "1px solid",
              borderBottomColor: colors.primary.bandaiNamcoRed
            }
          },
          onClick: function onClick() {
            return setShowMore(!showMore);
          },
          children: showMore ? alertShow[1] : alertShow[0]
        })
      })]
    })]
  });
};

export default ScrollingDLCContainer;
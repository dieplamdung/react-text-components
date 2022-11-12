import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// React and components
import { Box, Link, useMediaQuery, useTheme } from '@mui/material';
import React, { useRef, useState, useEffect } from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors"; // Types

import { MobileDown, SmallMobileDown, TabletDown } from "../../utils/viewport";
import { IconNextSlide, IconPrevSlide } from "../../atoms/Icon";
import PopularCard from "../../molecules/PopularCard";
import Container from "../../atoms/Container";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var ScrollingThumbnailCard = function ScrollingThumbnailCard(props) {
  var listThumbnail = props.listThumbnail,
      title = props.title,
      viewMore = props.viewMore,
      _props$classSection = props.classSection,
      classSection = _props$classSection === void 0 ? 'two-genre-games-carousel' : _props$classSection,
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

  var theme = useTheme();
  var isTabletDown = useMediaQuery(TabletDown(theme));
  var isMobileDown = useMediaQuery(MobileDown(theme));
  var refIsMobile = useRef();
  var isMobileMin = useMediaQuery(SmallMobileDown(theme));
  var refIsMobileMin = useRef(isMobileMin);

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      paddingScrollContent = _useState6[0],
      setPaddingScrollContent = _useState6[1];

  var refWrapper = useRef();
  var refContainer = useRef();
  var refWrapperContent = useRef();
  var refItemContent = useRef();
  var refWidthItem = useRef();
  var refFullWidthContent = useRef();
  var positionItem = useRef([]);
  var refLastChild = useRef();
  var refTimeout = useRef();
  useEffect(function () {
    refIsMobileMin.current = isMobileMin;
  }, [isMobileMin]);
  useEffect(function () {
    if (typeof window !== "undefined") {
      var _refItemContent$curre;

      refIsMobile.current = isMobileDown; // set padding-left content scroll  = left container. 

      setPaddingScrollContent(refContainer.current.offsetLeft + (refIsMobileMin.current ? 16 : 22));
      refWidthItem.current = ((_refItemContent$curre = refItemContent.current) == null ? void 0 : _refItemContent$curre.offsetWidth) + 22; // listen to events window resize for change padding left  content scroll.

      window.addEventListener("resize", function () {
        var _refItemContent$curre2, _refItemContent$curre3;

        // set padding left when window resize
        if (refWrapperContent.current) {
          var _refContainer$current2;

          var listChild = refWrapperContent.current.querySelectorAll(".childContent");

          if (listChild.length) {
            listChild.forEach(function (child) {
              var _refContainer$current;

              child.style.transform = "translateX(".concat(((_refContainer$current = refContainer.current) == null ? void 0 : _refContainer$current.offsetLeft) + (refIsMobileMin.current ? 16 : 24), "px)");
            });
          }

          var itemLastChild = refLastChild.current.getBoundingClientRect();
          var positionWidth = itemLastChild.x;

          if (positionWidth <= refWrapperContent.current.clientWidth) {
            setDisableArrowRight(true);
          } else {
            setDisableArrowRight(false);
          }

          refLastChild.current.style.marginLeft = "".concat(((_refContainer$current2 = refContainer.current) == null ? void 0 : _refContainer$current2.offsetLeft) + (refIsMobileMin.current ? 16 : 24), "px");
        } // set width item


        refWidthItem.current = ((_refItemContent$curre2 = refItemContent.current) == null ? void 0 : _refItemContent$curre2.offsetWidth) + 22; // get full width content scroll

        refFullWidthContent.current = ((_refItemContent$curre3 = refItemContent.current) == null ? void 0 : _refItemContent$curre3.offsetWidth) + 22 + (refWidthItem.current * listThumbnail.length || 1);
        refIsMobile.current = isMobileDown;
      });
    }

    return function () {
      window.removeEventListener("resize", function () {});
    };
  }, [listThumbnail, isMobileDown, isMobileMin]);
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
  }, [disableArrowRight, disableArrowLeft]);
  useEffect(function () {
    if (typeof window !== "undefined") {
      var _refWrapper$current;

      var childList = refWrapper == null ? void 0 : (_refWrapper$current = refWrapper.current) == null ? void 0 : _refWrapper$current.querySelectorAll(".childContent");

      if (childList != null && childList.length) {
        childList.forEach(function (item) {
          var _item$getBoundingClie = item.getBoundingClientRect(),
              left = _item$getBoundingClie.left;

          positionItem.current = [].concat(_toConsumableArray(positionItem.current), [left]);
        });
      }
    }
  }, []); // reset scroll

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
  }; // const handleScroll = () => {
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
          paddingLeft: '0',
          maxWidth: {
            xs: 'calc(100vw - 16px)',
            md: '720px',
            lg: '960px',
            xl: '1140px'
          }
        },
        children: [title && /*#__PURE__*/_jsx(Typography, {
          variant: "h4",
          color: colors.primary.bandaiNamcoBlack,
          children: title
        }), /*#__PURE__*/_jsxs(Box, {
          sx: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: "14px"
          },
          children: [/*#__PURE__*/_jsx(Box, {
            sx: {
              display: {
                xs: "none",
                md: "flex"
              }
            },
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
                whiteSpace: "nowrap",
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
          }), !isTabletDown && listThumbnail.length > 1 && /*#__PURE__*/_jsxs(Box, {
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
              funcClick: next,
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
        children: [!!(listThumbnail != null && listThumbnail.length) && (listThumbnail == null ? void 0 : listThumbnail.map(function (item, index) {
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
                width: {
                  xs: "223px",
                  md: "284px"
                },
                transform: "translateX(".concat(paddingScrollContent, "px)")
              },
              ref: refItemContent,
              className: "childContent",
              children: /*#__PURE__*/_jsx(PopularCard, _extends({}, item))
            })
          }, index);
        })), /*#__PURE__*/_jsx(Box, {
          sx: {
            display: "inline-block"
          },
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "flex",
              marginLeft: "".concat(paddingScrollContent - 32, "px"),
              paddingRight: '0px',
              // width: "0px",
              // height: "0px",
              opacity: "0",
              width: "10px",
              height: "10px"
            },
            ref: refLastChild
          })
        })]
      })
    }), /*#__PURE__*/_jsx(Container, {
      sx: {
        display: {
          xs: "flex",
          md: "none"
        },
        marginTop: "24px"
      },
      children: /*#__PURE__*/_jsx(Box, {
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
            whiteSpace: "nowrap",
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
      })
    })]
  });
};

export default ScrollingThumbnailCard;
import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// Modules
import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { MobileDown, SmallMobileDown } from "../../utils/viewport"; // Types

import Container from "../../atoms/Container";
import RelatedGameCardBlog from "../SearchResult/RelatedGameCardBlog";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var SearchResultBlog = function SearchResultBlog(props) {
  var _props$listThumbnail = props.listThumbnail,
      listThumbnail = _props$listThumbnail === void 0 ? [] : _props$listThumbnail,
      title = props.title,
      _props$classSection = props.classSection,
      classSection = _props$classSection === void 0 ? 'thumbnail-card-carousel' : _props$classSection,
      _props$isBlog = props.isBlog,
      isBlog = _props$isBlog === void 0 ? false : _props$isBlog,
      viewMore = props.viewMore,
      numberShow = props.numberShow,
      clickViewMore = props.clickViewMore;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      dataItem = _useState2[0],
      setDataItem = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      paddingScrollContent = _useState4[0],
      setPaddingScrollContent = _useState4[1];

  var theme = useTheme();
  var isMobileDown = useMediaQuery(MobileDown(theme));
  var refIsMobile = useRef(isMobileDown);
  var isMobileMin = useMediaQuery(SmallMobileDown(theme));
  var refIsMobileMin = useRef(isMobileMin);
  var refWrapper = useRef();
  var refContainer = useRef();
  var refItemContent = useRef();
  var refWrapperContent = useRef();
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
        }

        refLastChild.current.style.marginLeft = "".concat(((_refContainer$current3 = refContainer.current) == null ? void 0 : _refContainer$current3.offsetLeft) + (refIsMobileMin.current ? 16 : 24), "px");
      });
    }

    return function () {
      window.removeEventListener("resize", function () {});
    };
  }, [listThumbnail, isMobileDown]); // handel event scroll to set scrollBy item correct

  var handleScroll = function handleScroll() {
    if (refTimeout.current) {
      window.clearTimeout(refTimeout.current);
    }

    refTimeout.current = setTimeout(function () {
      refTimeout.current = undefined;
      var scrollLeft = refWrapperContent.current.scrollLeft;
      var clientWidth = refItemContent.current.clientWidth;

      if (Math.floor(scrollLeft) % clientWidth !== 0) {
        var length = listThumbnail.length || 0;

        for (var i = 0; i < length; i += 1) {
          var step = clientWidth * i;

          if (step > Math.floor(scrollLeft)) {
            var _refWrapperContent$cu;

            (_refWrapperContent$cu = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu.scrollBy({
              left: step - scrollLeft,
              behavior: "smooth"
            });
            break;
          }
        }
      }
    }, 300);
  };

  useEffect(function () {
    if (numberShow) {
      var dataClone = _toConsumableArray(listThumbnail);

      var data = dataClone.splice(0, numberShow);
      setDataItem(data);
    } else {
      setDataItem(listThumbnail);
    }
  }, [numberShow, listThumbnail]);
  return /*#__PURE__*/_jsxs(Box, {
    className: classSection,
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
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
          paddingRight: '16px',
          maxWidth: {
            xs: 'calc(100vw - 16px)',
            md: '720px',
            lg: '960px',
            xl: '1140px'
          },
          marginBottom: title ? '44px' : '0px'
        },
        children: [title && /*#__PURE__*/_jsxs(Typography, {
          variant: "h2",
          color: colors.primary.bandaiNamcoBlack,
          sx: {
            display: 'flex',
            alignItems: 'center'
          },
          children: [title, " ", /*#__PURE__*/_jsx(Typography, {
            variant: "p5",
            sx: {
              minWidth: '28px',
              height: '28px',
              borderRadius: listThumbnail.length > 99 ? '8px !important' : '100%',
              backgroundColor: colors.neutral.neutral6,
              overflow: 'hidden',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '6px !important',
              paddingLeft: listThumbnail.length > 99 ? '6px !important' : '0px !important',
              paddingRight: listThumbnail.length > 99 ? '6px !important' : '0px !important'
            },
            children: listThumbnail.length
          })]
        }), !!(listThumbnail != null && listThumbnail.length) && (listThumbnail == null ? void 0 : listThumbnail.length) > 3 && /*#__PURE__*/_jsx(Box, {
          sx: {
            display: 'flex',
            alignItems: 'center'
          },
          children: /*#__PURE__*/_jsx(Box, {
            children: (viewMore == null ? void 0 : viewMore.title) && /*#__PURE__*/_jsx(Box, {
              onClick: function onClick() {
                return clickViewMore == null ? void 0 : clickViewMore();
              },
              sx: {
                display: 'inline-block'
              },
              children: /*#__PURE__*/_jsx(Box, {
                component: 'span' // href={viewMore?.href}
                // target={viewMore?.target}
                ,
                sx: {
                  cursor: 'pointer',
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
            })
          })
        })]
      })
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        width: "100%",
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
          scrollSnapType: "x proximity",
          WebkitOverflowScrolling: "touch",
          overscrollBehaviorX: "contain",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        },
        onScroll: handleScroll,
        ref: refWrapperContent,
        children: [!!(dataItem != null && dataItem.length) && dataItem.map(function (item, index) {
          return /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "inline-block",
              scrollSnapAlign: "start"
            },
            ref: refItemContent,
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                minWidth: {
                  xs: "288px",
                  md: "357px"
                },
                display: "flex",
                marginLeft: "0px",
                marginRight: {
                  xs: "20px",
                  md: '22px'
                },
                transform: "translateX(".concat(paddingScrollContent, "px)")
              },
              className: "childContent",
              ref: refItemContent,
              children: /*#__PURE__*/_jsx(RelatedGameCardBlog, _extends({}, item, {
                tagBg: true,
                isBlog: isBlog
              }))
            })
          }, index);
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            display: "inline-block"
          },
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "flex",
              marginLeft: "".concat(paddingScrollContent, "px"),
              paddingRight: '0px',
              width: "0px",
              height: "0px",
              opacity: "0"
            },
            ref: refLastChild
          })
        })]
      })
    })]
  });
};

export default SearchResultBlog;
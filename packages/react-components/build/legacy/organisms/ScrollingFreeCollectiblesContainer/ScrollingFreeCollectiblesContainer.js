import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _IconDownload;

// import Modules
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Box, Modal, useMediaQuery, useTheme } from '@mui/material';
import Typography from "../../atoms/Typography";
import { IconDownload, IconNextSlide, IconPrevSlide } from "../../atoms/Icon";
import Container from "../../atoms/Container";
// import Styles
import colors from "../../theme/colors";
import { MobileDown, SmallMobileDown, TabletDown } from "../../utils/viewport";
// import Types
import loadable from '@loadable/component';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var DigitalDownloadCard = loadable(function () {
  return import("../../molecules/DigitalDownloadCard");
});
var ImagePopupSlider = loadable(function () {
  return import("../ImagePopupSlider");
});

var ScrollingRelatedGamesContainer = function ScrollingRelatedGamesContainer(props) {
  var listThumbnail = props.listThumbnail,
      title = props.title,
      _props$classSection = props.classSection,
      classSection = _props$classSection === void 0 ? 'thumbnail-card-carousel' : _props$classSection,
      description = props.description,
      _props$stepScroll = props.stepScroll,
      stepScroll = _props$stepScroll === void 0 ? 1 : _props$stepScroll,
      _props$isShowPopup = props.isShowPopup,
      isShowPopup = _props$isShowPopup === void 0 ? false : _props$isShowPopup,
      id = props.id;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      disableArrowRight = _useState2[0],
      setDisableArrowRight = _useState2[1];

  var _useState3 = useState(true),
      _useState4 = _slicedToArray(_useState3, 2),
      disableArrowLeft = _useState4[0],
      setDisableArrowLeft = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      openPopup = _useState6[0],
      setOpenPopup = _useState6[1];

  var _useState7 = useState(),
      _useState8 = _slicedToArray(_useState7, 2),
      itemSlider = _useState8[0],
      setItemSlider = _useState8[1];

  var _useState9 = useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      paddingScrollContent = _useState10[0],
      setPaddingScrollContent = _useState10[1];

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
  var refScrollRight = useRef(false);
  var refLastChild = useRef();
  var refTimeout = useRef();
  var DOWNLOAD_TEXT = "Download";
  /**
   * Use to format data for ImagePopupSlider
   */

  var screenshotItems = useMemo(function () {
    return listThumbnail == null ? void 0 : listThumbnail.map(function (item) {
      var _item$mainImage, _item$title, _item$description;

      return {
        mainImage: (_item$mainImage = item == null ? void 0 : item.mainImage) != null ? _item$mainImage : '',
        alt: item == null ? void 0 : item.title,
        title: (_item$title = item == null ? void 0 : item.title) != null ? _item$title : '',
        description: (_item$description = item == null ? void 0 : item.description) != null ? _item$description : '',
        icon: _IconDownload || (_IconDownload = /*#__PURE__*/_jsx(IconDownload, {})),
        iconText: {
          href: item == null ? void 0 : item.mainImage,
          label: DOWNLOAD_TEXT
        }
      };
    });
  }, [listThumbnail]) || [];
  useEffect(function () {
    refIsMobileMin.current = isMobileMin;
  }, [isMobileMin]); // handle event resize set translateX item content scroll

  useEffect(function () {
    if (typeof window !== "undefined") {
      var _refContainer$current;

      refIsMobile.current = isMobileDown; // set padding-left content scroll  = left container.

      setPaddingScrollContent(((_refContainer$current = refContainer.current) == null ? void 0 : _refContainer$current.offsetLeft) + (refIsMobileMin.current ? 16 : 24)); // listen to events window resize for change padding left  content scroll.

      window.addEventListener("resize", function () {
        // set padding left when window resize
        if (refWrapperContent.current) {
          var listChild = refWrapperContent.current.querySelectorAll(".childContent");

          if (listChild.length) {
            listChild.forEach(function (child) {
              if (child) {
                var _refContainer$current2;

                child.style.transform = "translateX(".concat(((_refContainer$current2 = refContainer.current) == null ? void 0 : _refContainer$current2.offsetLeft) + (refIsMobileMin.current ? 16 : 22), "px)");
              }
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

        if (refLastChild.current) {
          var _refContainer$current3;

          refLastChild.current.style.marginLeft = "".concat(((_refContainer$current3 = refContainer.current) == null ? void 0 : _refContainer$current3.offsetLeft) + (refIsMobileMin.current ? 16 : 22), "px");
        }
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
  }, [id]);

  var next = function next() {
    var _refWrapperContent$cu2;

    var clientWidth = refItemContent.current.clientWidth * stepScroll;
    (_refWrapperContent$cu2 = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu2.scrollBy({
      left: clientWidth,
      behavior: "smooth"
    });
  };

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
  };

  var handleClickItem = function handleClickItem(index) {
    if (isShowPopup) {
      setOpenPopup(!openPopup);
      setItemSlider(index);
    }
  };

  return /*#__PURE__*/_jsxs(Box, {
    className: classSection,
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column"
    },
    ref: refWrapper,
    id: id,
    children: [/*#__PURE__*/_jsxs(Container, {
      sx: {
        display: "flex",
        justifyContent: "space-between"
      },
      ref: refContainer,
      children: [/*#__PURE__*/_jsxs(Box, {
        children: [title && /*#__PURE__*/_jsx(Typography, {
          variant: "h4",
          color: colors.primary.bandaiNamcoBlack,
          children: title
        }), description && /*#__PURE__*/_jsx(Typography, {
          variant: "p2",
          sx: {
            color: colors.neutral.neutral2,
            marginTop: "8px"
          },
          children: description
        })]
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          display: {
            xs: 'none',
            md: 'flex'
          },
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
              refScrollRight.current = true;
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
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        width: "100%",
        marginTop: '44px',
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
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        },
        ref: refWrapperContent,
        children: [listThumbnail && listThumbnail.length > 0 && listThumbnail.map(function (item, index) {
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
                height: "100%",
                minWidth: {
                  md: "371px",
                  xs: "355px"
                },
                maxWidth: {
                  md: "371px",
                  xs: "355px"
                },
                transform: "translateX(".concat(paddingScrollContent, "px)")
              },
              className: "childContent",
              ref: refItemContent,
              onClick: function onClick() {
                return handleClickItem(index);
              },
              children: /*#__PURE__*/_jsx(DigitalDownloadCard, _extends({}, item))
            })
          }, index);
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            display: "inline-block"
          },
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "flex",
              marginLeft: "".concat(paddingScrollContent - 24, "px"),
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
    }), /*#__PURE__*/_jsx(Modal, {
      open: openPopup,
      children: /*#__PURE__*/_jsx(ImagePopupSlider, {
        handleOpenPopup: function handleOpenPopup() {
          return setOpenPopup(false);
        },
        screenshotItems: screenshotItems,
        initialItem: itemSlider != null ? itemSlider : 0
      })
    })]
  });
};

export default ScrollingRelatedGamesContainer;
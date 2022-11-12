import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// import Modules
import React, { useState, useMemo, useEffect, useRef } from 'react';
import { Box, Modal, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/styles';
import Slider from "react-slick";
import Typography from "../../atoms/Typography";
import { IconNextCircle } from "../../atoms/Icon";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // import Styles

import colors from "../../theme/colors";
import loadable from '@loadable/component';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
// import VideoPopupSlider from '~/organisms/VideoPopupSlider';
var VideoPopupSlider = loadable(function () {
  return import("../VideoPopupSlider");
});
var MediaGalleryCard = loadable(function () {
  return import("../../molecules/MediaGalleryCard");
});
gsap.registerPlugin(ScrollTrigger);

var ScrollingMediaGalleryContainer = function ScrollingMediaGalleryContainer(props) {
  var _listTrailerItems$cur, _listTrailerItems$cur2;

  var listThumbnail = props.listThumbnail,
      title = props.title,
      id = props.id;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      currentItem = _useState2[0],
      setCurrentItem = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      openPopup = _useState4[0],
      setOpenPopup = _useState4[1];

  var theme = useTheme();
  var isMobile = useMediaQuery(theme.breakpoints.down('md'));
  var isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  var isMobileSmallest = useMediaQuery('(max-width:321px)', {
    noSsr: true
  });
  var refContainer = useRef();

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      overlayVideoNav = _useState6[0],
      setOverlayVideoNav = _useState6[1];

  var refImgAnimation = useRef();
  var refWrapperImgAnimation = useRef();
  var refContentSlider = useRef();
  /** 
   * Use to filter items with videoUrl
   */

  var listTrailerItems = useMemo(function () {
    return listThumbnail == null ? void 0 : listThumbnail.filter(function (item) {
      return item == null ? void 0 : item.videoUrl;
    });
  }, [listThumbnail]);
  /**
   * Use to format data for pop-ups
   */

  var remapTrailerItems = useMemo(function () {
    return listTrailerItems == null ? void 0 : listTrailerItems.map(function (item) {
      var _item$videoUrl, _ref, _item$img, _item$alt, _item$nextImage, _item$tags$title, _item$tags, _item$href;

      return {
        trailerUrl: (_item$videoUrl = item == null ? void 0 : item.videoUrl) != null ? _item$videoUrl : '',
        trailerTitle: (_ref = item == null ? void 0 : item.description) != null ? _ref : '',
        trailerImg: (_item$img = item == null ? void 0 : item.img) != null ? _item$img : '',
        trailerImgAlt: (_item$alt = item == null ? void 0 : item.alt) != null ? _item$alt : '',
        trailerDescription: '',
        hrefShare: '/',
        nextImage: (_item$nextImage = item == null ? void 0 : item.nextImage) != null ? _item$nextImage : '',
        videoType: (_item$tags$title = item == null ? void 0 : (_item$tags = item.tags) == null ? void 0 : _item$tags.title) != null ? _item$tags$title : "",
        imgSecond: (_item$href = item == null ? void 0 : item.href) != null ? _item$href : ""
      };
    });
  }, [listTrailerItems]); // To debounce accidental launch of overlay when dragging/swiping slider

  var dragging = false; // dispatchEvent event send id to sub navigation

  useEffect(function () {
    if (typeof window !== "undefined") {
      var container = refContainer.current;
      window.addEventListener("scroll", function () {
        if (container) {
          var _container$getBoundin = container.getBoundingClientRect(),
              bottom = _container$getBoundin.bottom,
              top = _container$getBoundin.top;

          var newBottom = Math.floor(bottom);
          var newTop = Math.floor(top);

          if (newTop < 120 && newBottom > 100) {
            var _window;

            (_window = window) == null ? void 0 : _window.dispatchEvent(new Event("".concat(id)));
          }
        }
      });
    }

    return function () {
      window.removeEventListener("".concat(id), function () {});
      window.removeEventListener("scroll", function () {});
    };
  }, [id]);
  var mainSettings = {
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: !!isMobile,
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: false,
    centerMode: true,
    beforeChange: function beforeChange() {
      dragging = true;
    },
    afterChange: function afterChange(e) {
      dragging = false;
      setCurrentItem(e);
    },
    responsive: [{
      breakpoint: 376,
      settings: {
        centerPadding: "0px"
      }
    }, {
      breakpoint: 321,
      settings: {
        variableWidth: false,
        centerPadding: "16px"
      }
    }]
  };
  useEffect(function () {
    if (typeof window !== "undefined") {
      var returnWidthImg = function returnWidthImg() {
        if (isMobileSmallest) {
          return 274;
        }

        if (isMobile) {
          return 312;
        }

        if (isTablet) {
          return 600;
        }

        return 930;
      };

      var imgAnimation = refImgAnimation.current;

      if (imgAnimation) {
        window.addEventListener("scroll", function () {
          var _imgAnimation$getBoun = imgAnimation.getBoundingClientRect(),
              width = _imgAnimation$getBoun.width;

          if (refWrapperImgAnimation.current && refContentSlider.current) {
            if (Math.floor(width) <= returnWidthImg()) {
              refWrapperImgAnimation.current.style.zIndex = "-1";
              refWrapperImgAnimation.current.style.opacity = "0";
              refContentSlider.current.style.opacity = "1";
            } else {
              refWrapperImgAnimation.current.style.zIndex = "1";
              refWrapperImgAnimation.current.style.opacity = "1";
              refContentSlider.current.style.opacity = "0.8";
            }
          }
        });
      }
    }

    return function () {
      window.removeEventListener("scroll", function () {});
    };
  }, [isTablet, isMobile, isMobileSmallest]);
  useEffect(function () {
    if (typeof window !== "undefined") {
      // const parallax = gsap.timeline();
      ScrollTrigger.matchMedia({
        "(min-width:1023px)": function A() {
          gsap.to(refImgAnimation.current, {
            css: {
              width: "".concat(930, "px"),
              height: "".concat(930 / 100 * 56.25, "px"),
              marginBottom: "48px",
              marginRight: "22px",
              borderRadius: "20px",
              overflow: "hidden"
            },
            scrollTrigger: {
              trigger: ".wrapper-content-media-gallery",
              start: "top top",
              end: "bottom 40%",
              scrub: 2 // markers: true,

            }
          });
        },
        "(min-width:700px) and (max-width:1022px)": function A() {
          gsap.to(refImgAnimation.current, {
            css: {
              width: "".concat(600, "px"),
              height: "".concat(600 / 100 * 56.25, "px"),
              marginBottom: "46px",
              marginRight: "22px",
              borderRadius: "20px",
              overflow: "hidden"
            },
            scrollTrigger: {
              trigger: ".wrapper-content-media-gallery",
              start: "top top",
              end: "bottom 40%",
              scrub: 2 // markers: true,

            }
          });
        },
        "(min-width:322px) and (max-width:699px)": function A() {
          gsap.to(refImgAnimation.current, {
            css: {
              width: "".concat(312, "px"),
              height: "".concat(312 / 100 * 56.25, "px"),
              marginBottom: "90px",
              borderRadius: "10px",
              overflow: "hidden",
              marginRight: "24px"
            },
            scrollTrigger: {
              trigger: ".wrapper-content-media-gallery",
              start: "top top",
              end: "bottom 50%",
              scrub: 2 // markers: true,

            }
          });
        },
        "(min-width:300px) and (max-width:321px)": function A() {
          gsap.to(refImgAnimation.current, {
            css: {
              width: "".concat(274, "px"),
              height: "".concat(274 / 100 * 56.25, "px"),
              marginBottom: "90px",
              borderRadius: "10px",
              overflow: "hidden",
              marginRight: "14px"
            },
            scrollTrigger: {
              trigger: ".wrapper-content-media-gallery",
              start: "top top",
              end: "bottom 60%",
              scrub: 2 // markers: true,

            }
          });
        }
      });
    }
  }, []);
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      overflow: 'hidden',
      width: "100%",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      position: "relative"
    },
    id: id,
    ref: refContainer,
    children: [!!(listTrailerItems != null && listTrailerItems.length) && /*#__PURE__*/_jsx(Box, {
      sx: {
        position: "absolute",
        zIndex: "-1",
        top: "0px",
        height: {
          xs: "calc(100vh - ".concat(274 / 100 * 56.25, "px)"),
          md: "calc(100vh - ".concat(600 / 100 * 56.25, "px)"),
          lg: "calc(100vh - ".concat(930 / 100 * 56.25, "px)")
        },
        width: "100%"
      },
      className: "wrapper-content-media-gallery"
    }), !!(listTrailerItems != null && listTrailerItems.length) && /*#__PURE__*/_jsx(Box, {
      sx: {
        position: "absolute",
        top: "0px",
        left: "0px",
        height: "100%",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: 'flex-end',
        zIndex: "1",
        // transition: "all 0.2s",
        opacity: "1"
      },
      ref: refWrapperImgAnimation,
      children: /*#__PURE__*/_jsx(Box, {
        sx: {
          width: "100%",
          height: "100%",
          marginRight: '0px',
          minWidth: {
            xs: '274px',
            md: '600px',
            lg: '930px'
          },
          minHeight: {
            xs: "".concat(274 / 100 * 56.25, "px"),
            md: "".concat(600 / 100 * 56.25, "px"),
            lg: "".concat(930 / 100 * 56.25, "px")
          },
          "& a": {
            width: "100%",
            height: "100%"
          },
          "& span": {
            width: "100% !important",
            height: "100% !important"
          },
          "& img": {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }
        },
        ref: refImgAnimation,
        children: (listTrailerItems == null ? void 0 : (_listTrailerItems$cur = listTrailerItems[currentItem]) == null ? void 0 : _listTrailerItems$cur.nextImage) || /*#__PURE__*/_jsx("img", {
          src: listTrailerItems == null ? void 0 : (_listTrailerItems$cur2 = listTrailerItems[currentItem]) == null ? void 0 : _listTrailerItems$cur2.img,
          alt: ""
        })
      })
    }), title && /*#__PURE__*/_jsx(Typography, {
      variant: "h4",
      color: colors.primary.bandaiNamcoBlack,
      sx: {
        textAlign: 'center',
        marginTop: "auto",
        marginBottom: {
          xs: '36px',
          md: '54px'
        }
      },
      children: title
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        // opacity: "0.2",
        transition: "all 0.2s",
        position: 'relative',
        '& .slick-list': {
          '& .slick-track': {
            display: 'flex',
            justifyContent: !!listTrailerItems && (listTrailerItems == null ? void 0 : listTrailerItems.length) <= 1 ? 'center' : 'flex-start',
            '& .slick-slide': {
              '& > div': {
                marginRight: {
                  xs: '22px',
                  md: '24px'
                }
              }
            }
          }
        },
        '& .slick-dots': {
          height: '14px',
          position: 'relative',
          marginTop: '30px',
          bottom: 0,
          display: 'flex !important',
          justifyContent: 'center',
          '& li': {
            margin: '0 8px',
            '&.slick-active button': {
              '&:before': {
                color: '#E60000'
              }
            },
            '& button:before': {
              color: ' #DDDDDD',
              fontFamily: 'slick',
              fontSize: '10px',
              lineHeight: '20px'
            }
          }
        }
      },
      ref: refContentSlider,
      children: [/*#__PURE__*/_jsx(Slider, _extends({}, mainSettings, {
        ref: function ref(slider) {
          return setOverlayVideoNav(slider);
        },
        children: listTrailerItems == null ? void 0 : listTrailerItems.map(function (item, index) {
          return /*#__PURE__*/_jsx(Box, {
            sx: {
              cursor: 'pointer',
              minWidth: {
                xs: '274px',
                md: '600px',
                lg: '930px'
              }
            },
            onClick: function onClick(e) {
              if (dragging) {
                e.preventDefault();
                return;
              }

              setOpenPopup(function (open) {
                return !open;
              });
              setCurrentItem(index);
            },
            children: /*#__PURE__*/_jsx(MediaGalleryCard, _extends({}, item))
          }, index);
        })
      })), !openPopup && !isMobile && !!(listTrailerItems != null && listTrailerItems.length) && /*#__PURE__*/_jsxs(Box, {
        children: [/*#__PURE__*/_jsx(IconNextCircle, {
          onClick: function onClick() {
            overlayVideoNav == null ? void 0 : overlayVideoNav.slickPrev();
          },
          sx: {
            display: {
              xs: 'none',
              md: 'inline-block'
            },
            cursor: 'pointer',
            opacity: currentItem === 0 ? 0 : 1,
            position: 'absolute',
            zIndex: 1099,
            // Given same z-index as overlay items to stack above video slider
            transform: 'translateY(-50%) rotate(180deg)',
            transition: 'opacity 300ms ease-out',
            left: '82px',
            top: '50%',
            width: {
              xs: '32px',
              lg: '62px'
            },
            height: {
              xs: '32px',
              lg: '62px'
            },
            '&:hover': {
              '& path': {
                fill: colors.primary.bandaiNamcoRed
              }
            }
          }
        }), /*#__PURE__*/_jsx(IconNextCircle, {
          onClick: function onClick() {
            overlayVideoNav == null ? void 0 : overlayVideoNav.slickNext();
          },
          sx: {
            display: {
              xs: 'none',
              md: 'inline-block'
            },
            cursor: 'pointer',
            opacity: currentItem === (listTrailerItems && (listTrailerItems == null ? void 0 : listTrailerItems.length) - 1) ? 0 : 1,
            position: 'absolute',
            zIndex: 1099,
            // Given same z-index as overlay items to stack above slider
            transition: 'opacity 300ms ease-out',
            right: '82px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: {
              xs: '32px',
              lg: '62px'
            },
            height: {
              xs: '32px',
              lg: '62px'
            },
            '&:hover': {
              '& path': {
                fill: colors.primary.bandaiNamcoRed
              }
            }
          }
        })]
      })]
    }), /*#__PURE__*/_jsx(Modal, {
      open: openPopup,
      children: /*#__PURE__*/_jsx(VideoPopupSlider, {
        handleOpenPopup: function handleOpenPopup() {
          return setOpenPopup(false);
        },
        trailerItems: remapTrailerItems,
        initialItem: currentItem != null ? currentItem : 0
      })
    })]
  });
};

export default ScrollingMediaGalleryContainer;
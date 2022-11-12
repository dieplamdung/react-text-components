import _extends from "@babel/runtime/helpers/esm/extends";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// import Modules
import loadable from '@loadable/component';
import { Box, debounce, useMediaQuery } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Slider from 'react-slick';
import { IconClose, IconNextCircle } from "../../atoms/Icon";
import Typography from "../../atoms/Typography"; // import Styles

import colors from "../../theme/colors"; // import Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var PlayVideo = loadable(function () {
  return import("../../molecules/PlayVideo");
});
var MediaGalleryCard = loadable(function () {
  return import("../../molecules/MediaGalleryCard");
});

var VideoPopupSlider = function VideoPopupSlider(props) {
  var _props$trailerItems = props.trailerItems,
      trailerItems = _props$trailerItems === void 0 ? null : _props$trailerItems,
      handleOpenPopup = props.handleOpenPopup,
      _props$initialItem = props.initialItem,
      initialItem = _props$initialItem === void 0 ? 0 : _props$initialItem;
  var imageThumbnailRef = /*#__PURE__*/React.createRef();
  var isMobile = useMediaQuery(function (themes) {
    return themes.breakpoints.down('lg');
  }); // State use to check selected item

  var _useState = useState(initialItem),
      _useState2 = _slicedToArray(_useState, 2),
      selectedTrailer = _useState2[0],
      setSelectedTrailer = _useState2[1]; // State use to detect dragging item


  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      dragging = _useState4[0],
      setDragging = _useState4[1]; // Overlay slider states & refs


  var _useState5 = useState(initialItem),
      _useState6 = _slicedToArray(_useState5, 2),
      overlayVideoNav = _useState6[0],
      setOverlayVideoNav = _useState6[1]; // State use to set initial infinity


  var _useState7 = useState(true),
      _useState8 = _slicedToArray(_useState7, 2),
      infinities = _useState8[0],
      setInfinities = _useState8[1];

  var _useState9 = useState(initialItem),
      _useState10 = _slicedToArray(_useState9, 2),
      overlayMenuNav = _useState10[0],
      setOverlayMenuNav = _useState10[1];

  var _useState11 = useState(initialItem),
      _useState12 = _slicedToArray(_useState11, 2),
      indexBeforeChange = _useState12[0],
      setIndexBeforeChange = _useState12[1];

  var refContent = useRef();
  var thisVideo = useRef([]);
  /**
   * Use to prevent going back to previous page
   */

  useEffect(function () {
    if ((typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined) {
      window.history.pushState("null", "null", window.location.href);

      window.onpopstate = function () {
        window.history.go(1);
      };
    }

    return function () {
      window.onpopstate = function () {};

      window.history.back();
    };
  }, []);
  /**
   * Use to remove items containing slick-cloned class when slider has infinity equal true
   */

  useEffect(function () {
    var _refContent$current;

    var items = refContent == null ? void 0 : (_refContent$current = refContent.current) == null ? void 0 : _refContent$current.querySelectorAll(".slick-cloned");

    if (items) {
      items.forEach(function (node) {
        var _node$querySelector, _node$querySelector$c;

        node == null ? void 0 : (_node$querySelector = node.querySelector) == null ? void 0 : (_node$querySelector$c = _node$querySelector.call(node, '#youtube-iframe-cloned')) == null ? void 0 : _node$querySelector$c.remove();
      });
    }
  }, []);
  /**
   * Use to handle on wheel mouse event
   */

  var onWheelSlider = debounce(function (e, ref) {
    if (!ref) {
      return;
    }

    if (e.deltaX > 0) {
      ref.slickNext();
    } else if (e.deltaX < 0) {
      ref.slickPrev();
    }
  }, 1);
  var overlayMenuSliderSettings = {
    className: 'slider overlay-menu',
    dots: false,
    arrows: false,
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: false,
    swipe: true,
    speed: isMobile ? 100 : 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    cssEase: 'linear',
    initialSlide: initialItem,
    variableWidth: true,
    beforeChange: function beforeChange() {
      setDragging(true);
    },
    afterChange: function afterChange() {
      setDragging(false);
    }
  };
  var overlaySliderSettings = {
    className: 'slider overlay-image',
    dots: false,
    arrows: false,
    infinite: infinities,
    draggable: true,
    variableWidth: true,
    swipe: true,
    speed: isMobile ? 100 : 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    cssEase: 'linear',
    initialSlide: initialItem,
    swipeToSlide: true,
    beforeChange: function beforeChange(index) {
      setDragging(true);
      setIndexBeforeChange(index);
    },
    afterChange: function afterChange(index) {
      setInfinities(false);
      setDragging(false);
      setSelectedTrailer(index);
    }
  };
  return /*#__PURE__*/_jsx(Box, {
    ref: imageThumbnailRef,
    sx: {
      position: 'fixed',
      display: 'flex',
      alignItems: 'center',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      opacity: 1,
      zIndex: 1000,
      '& .slider.overlay-video': {
        '& .slick-slide:not(.slick-active)': {
          opacity: 0.5
        }
      },
      '& .slider.overlay-menu': {
        '& .slick-list': {
          padding: '0 20% 0 0 !important'
        }
      }
    },
    children: /*#__PURE__*/_jsxs(Box, {
      sx: {
        position: 'relative',
        width: '100%',
        height: '100%'
      },
      children: [/*#__PURE__*/_jsx(Box, {
        sx: {
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 999,
          // Background overlay, 999 is lowest value of all overlay items
          backgroundColor: colors.primary.bandaiNamcoBlack
        }
      }), /*#__PURE__*/_jsxs(Box, {
        sx: {
          position: 'relative',
          width: '100%',
          height: '100%',
          zIndex: 1099 // Overlay items, set to 1099 to be above background overlay (set to 999)

        },
        children: [/*#__PURE__*/_jsx(Box, {
          className: "close-icon-slider",
          sx: {
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            position: 'absolute',
            zIndex: 1100
          },
          children: /*#__PURE__*/_jsx(IconClose, {
            sx: {
              marginTop: {
                xs: '20px',
                md: '30px'
              },
              marginRight: {
                xs: '20px',
                md: '30px'
              },
              marginBottom: '30px',
              cursor: 'pointer'
            },
            width: "24px",
            height: "24px",
            htmlColor: colors.neutral.neutral4,
            onClick: function onClick() {
              handleOpenPopup(false);
            }
          })
        }), /*#__PURE__*/_jsx(Box, {
          className: "main-slider-wrapper",
          sx: {
            position: 'relative',
            height: '50px',
            top: {
              xs: '35%',
              md: '50%'
            }
          },
          children: /*#__PURE__*/_jsx(Box, {
            className: "main-overlay-slider",
            ref: refContent,
            sx: {
              transform: 'translateY(-50%)',
              position: 'relative',
              '& .slick-slider': {
                zIndex: 1000
              },
              '& .slick-list': {
                overflow: 'visible',
                '& .slick-track': {
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: trailerItems !== null && (trailerItems == null ? void 0 : trailerItems.length) === 1 ? 'center' : 'flex-start',
                  '& .slick-slide': {
                    padding: {
                      xs: '0 4px',
                      md: '0 12px'
                    }
                  }
                }
              }
            },
            children: /*#__PURE__*/_jsxs(Box, {
              onWheel: function onWheel(e) {
                return onWheelSlider(e, overlayVideoNav);
              },
              children: [/*#__PURE__*/_jsx(IconNextCircle, {
                onClick: function onClick() {
                  overlayVideoNav == null ? void 0 : overlayVideoNav.slickPrev();
                },
                sx: {
                  display: 'inline-block',
                  cursor: 'pointer',
                  opacity: selectedTrailer === 0 ? 0 : 1,
                  position: 'absolute',
                  zIndex: 1099,
                  // Given same z-index as overlay items to stack above video slider
                  transform: 'rotate(180deg)',
                  transition: 'opacity 300ms ease-out',
                  left: '32px',
                  top: {
                    xs: '120%',
                    sm: '110%',
                    lg: '40%'
                  },
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
                  display: 'inline-block',
                  cursor: 'pointer',
                  opacity: selectedTrailer + 1 === (trailerItems == null ? void 0 : trailerItems.length) ? 0 : 1,
                  position: 'absolute',
                  zIndex: 1099,
                  // Given same z-index as overlay items to stack above slider
                  transition: 'opacity 300ms ease-out',
                  right: '32px',
                  top: {
                    xs: '120%',
                    sm: '110%',
                    lg: '40%'
                  },
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
              }), /*#__PURE__*/_jsx(Slider, _extends({}, overlaySliderSettings, {
                asNavFor: overlayMenuNav,
                ref: function ref(slider) {
                  setOverlayVideoNav(slider);
                },
                children: trailerItems == null ? void 0 : trailerItems.map(function (trailerInfo, i) {
                  return /*#__PURE__*/_jsx(Box, {
                    id: "youtube-iframe-cloned",
                    sx: {
                      minWidth: {
                        xs: '274px',
                        md: '65vw',
                        xl: '800px'
                      },
                      maxWidth: '926px'
                    },
                    children: /*#__PURE__*/_jsx(PlayVideo // eslint-disable-next-line no-return-assign
                    , {
                      ref: function ref(el) {
                        return thisVideo.current[i] = el;
                      },
                      index: i,
                      className: "ytplayer_".concat(i),
                      idVideo: trailerInfo == null ? void 0 : trailerInfo.trailerUrl,
                      nextImage: trailerInfo == null ? void 0 : trailerInfo.nextImage,
                      imgUrl: trailerInfo == null ? void 0 : trailerInfo.trailerImg,
                      title: trailerInfo == null ? void 0 : trailerInfo.trailerTitle,
                      disable: selectedTrailer !== i,
                      dragging: dragging,
                      selectedTrailer: selectedTrailer,
                      typeVideo: trailerInfo == null ? void 0 : trailerInfo.videoType,
                      imageSecond: (trailerInfo == null ? void 0 : trailerInfo.imgSecond) || (trailerInfo == null ? void 0 : trailerInfo.trailerImg) || "",
                      indexBeforeChange: indexBeforeChange // handleItemOnClick={handleItemOnClick}

                    })
                  }, i);
                })
              }))]
            })
          })
        })]
      }), /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: 'block',
          position: 'absolute',
          zIndex: 2000,
          height: 'auto',
          width: '100%',
          paddingTop: isMobile ? '28px' : '30px',
          paddingBottom: isMobile ? '22px' : '24px',
          paddingLeft: isMobile ? '32px' : '82px',
          borderRadius: '20px 20px 0 0',
          transition: 'all 300ms',
          transform: {
            xs: 'translateY(-100%)',
            md: 'translateY(-30%)'
          },
          backgroundColor: colors.primary.bandaiNamcoWhite,
          '&:hover': {
            transform: 'translateY(-100%)'
          },
          '& .slick-slider': {
            '& .slick-list': {
              marginLeft: '-10px',
              marginTop: '10px'
            }
          }
        },
        children: [/*#__PURE__*/_jsxs(Typography, {
          variant: "p3",
          sx: {
            fontWeight: 600
          },
          children: [selectedTrailer + 1, " of ", trailerItems == null ? void 0 : trailerItems.length]
        }), /*#__PURE__*/_jsx(Box, {
          onWheel: function onWheel(e) {
            return onWheelSlider(e, overlayMenuNav);
          },
          sx: {
            '& .slick-slide': {
              marginRight: {
                xs: '20px',
                md: '22px'
              }
            }
          },
          children: /*#__PURE__*/_jsx(Slider, _extends({}, overlayMenuSliderSettings, {
            asNavFor: overlayVideoNav,
            ref: function ref(slider) {
              setOverlayMenuNav(slider);
            },
            children: trailerItems == null ? void 0 : trailerItems.map(function (trailerInfo, i) {
              return /*#__PURE__*/_jsx(Box, {
                sx: {
                  '& .card': {
                    width: {
                      xs: '190px',
                      lg: '263px'
                    }
                  }
                },
                onClick: function onClick(e) {
                  if (dragging) {
                    e.preventDefault();
                  }
                },
                children: /*#__PURE__*/_jsx(MediaGalleryCard, {
                  nextImage: trailerInfo == null ? void 0 : trailerInfo.nextImage,
                  img: trailerInfo == null ? void 0 : trailerInfo.trailerImg,
                  play: true,
                  alt: trailerInfo == null ? void 0 : trailerInfo.trailerImgAlt,
                  typeVideo: trailerInfo == null ? void 0 : trailerInfo.videoType
                })
              }, i);
            })
          }))
        })]
      })]
    })
  });
};

export default VideoPopupSlider;
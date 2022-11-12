import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// import Modules
import { Box, debounce, useMediaQuery } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';
import Slider from 'react-slick';
import Typography from "../../atoms/Typography";
import { IconClose, IconNextCircle } from "../../atoms/Icon";
import MediaGalleryCard from "../../molecules/MediaGalleryCard"; // import Styles

import colors from "../../theme/colors"; // import Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var ImagePopupSlider = function ImagePopupSlider(props) {
  var _props$screenshotItem = props.screenshotItems,
      screenshotItems = _props$screenshotItem === void 0 ? null : _props$screenshotItem,
      handleOpenPopup = props.handleOpenPopup,
      _props$initialItem = props.initialItem,
      initialItem = _props$initialItem === void 0 ? 0 : _props$initialItem;
  var imageThumbnailRef = /*#__PURE__*/React.createRef();
  var isMobile = useMediaQuery(function (themes) {
    return themes.breakpoints.down('lg');
  });

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      infinities = _useState2[0],
      setInfinities = _useState2[1]; // State use to check selected item


  var _useState3 = useState(initialItem),
      _useState4 = _slicedToArray(_useState3, 2),
      selectedTrailer = _useState4[0],
      setSelectedTrailer = _useState4[1]; // State use to check clicked item


  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      clicked = _useState6[0],
      setClicked = _useState6[1]; // Overlay slider states & refs


  var _useState7 = useState(),
      _useState8 = _slicedToArray(_useState7, 2),
      overlayVideoNav = _useState8[0],
      setOverlayVideoNav = _useState8[1];

  var _useState9 = useState(),
      _useState10 = _slicedToArray(_useState9, 2),
      overlayMenuNav = _useState10[0],
      setOverlayMenuNav = _useState10[1];

  var refContent = useRef();
  var dragging = false;
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
  /**
  * Use to remove items containing slick-cloned class when slider has infinity equal true
  */

  useEffect(function () {
    var _refContent$current;

    var items = refContent == null ? void 0 : (_refContent$current = refContent.current) == null ? void 0 : _refContent$current.querySelectorAll(".slick-cloned");

    if (items) {
      items.forEach(function (node) {
        var _node$querySelector, _node$querySelector$c;

        node == null ? void 0 : (_node$querySelector = node.querySelector) == null ? void 0 : (_node$querySelector$c = _node$querySelector.call(node, '#image-cloned')) == null ? void 0 : _node$querySelector$c.remove();
      });
    }
  }, []);
  var overlayMenuSliderSettings = {
    className: 'slider overlay-menu',
    dots: false,
    arrows: false,
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: false,
    swipe: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: false,
    variableWidth: true,
    beforeChange: function beforeChange() {
      dragging = true;
    },
    afterChange: function afterChange(index) {
      dragging = false;
      setSelectedTrailer(index);
    }
  };
  var overlaySliderSettings = {
    className: 'slider overlay-image',
    dots: false,
    arrows: false,
    infinite: infinities,
    variableWidth: true,
    swipe: !clicked,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    initialSlide: initialItem,
    swipeToSlide: true,
    beforeChange: function beforeChange() {
      dragging = true;
    },
    afterChange: function afterChange() {
      setInfinities(false);
      dragging = false;
    }
  };
  return /*#__PURE__*/_jsx(Box, {
    ref: imageThumbnailRef,
    onClick: function onClick() {
      if (clicked) {
        setClicked(false);
      }
    },
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
            position: 'absolute'
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
              if (clicked) {
                setClicked(false);
                return;
              }

              handleOpenPopup(false);
            }
          })
        }), /*#__PURE__*/_jsx(Box, {
          className: "wrapper-slider",
          sx: {
            position: 'relative',
            height: '100%',
            top: {
              xs: clicked ? '50%' : '35%',
              md: '50%'
            },
            transition: 'all .5s'
          },
          children: /*#__PURE__*/_jsxs(Box, {
            className: "main-overlay-slider",
            ref: refContent,
            sx: {
              transform: 'translateY(-50%)',
              position: 'relative',
              '& .slick-list': {
                overflow: 'visible',
                '& .slick-track': {
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: screenshotItems !== null && (screenshotItems == null ? void 0 : screenshotItems.length) === 1 ? 'center' : 'flex-start',
                  '& .slick-slide': {
                    padding: {
                      xs: '0 4px',
                      md: '0px 12px'
                    }
                  }
                }
              }
            },
            children: [/*#__PURE__*/_jsx(Box, {
              onWheel: function onWheel(e) {
                return onWheelSlider(e, overlayVideoNav);
              },
              children: /*#__PURE__*/_jsx(Slider, _extends({}, overlaySliderSettings, {
                asNavFor: overlayMenuNav,
                ref: function ref(slider) {
                  return setOverlayVideoNav(slider);
                },
                children: screenshotItems == null ? void 0 : screenshotItems.map(function (screenshotInfo, i) {
                  var _screenshotInfo$mainI;

                  return /*#__PURE__*/_jsx(Box, {
                    id: "image-cloned",
                    sx: {
                      opacity: clicked && selectedTrailer !== i ? 0 : 1,
                      maxWidth: '80vw',
                      minWidth: {
                        xs: '360px',
                        md: '65vw',
                        xl: '800px'
                      },
                      width: '100%',
                      transform: {
                        xs: 'scale(1)',
                        md: clicked && selectedTrailer === i ? 'scale(1.3)' : 'scale(1)'
                      },
                      zIndex: !clicked && selectedTrailer === i ? '1' : '-1',
                      transition: clicked && selectedTrailer === i ? 'all .5s' : 'all .3s',
                      '& .card': {
                        '& img': {
                          objectFit: 'cover',
                          objectPosition: 'top'
                        },
                        aspectRatio: '16/9',
                        '& p, svg': {
                          display: clicked ? 'none' : 'block'
                        }
                      }
                    },
                    onClick: function onClick(e) {
                      if (dragging) {
                        e.preventDefault();
                        return;
                      }

                      setClicked(!clicked);
                    },
                    children: /*#__PURE__*/_jsx(MediaGalleryCard, {
                      nextImage: screenshotInfo == null ? void 0 : screenshotInfo.mainImageNext,
                      color: colors.primary.bandaiNamcoWhite,
                      hideContent: clicked,
                      description: screenshotInfo == null ? void 0 : screenshotInfo.title,
                      img: (_screenshotInfo$mainI = screenshotInfo == null ? void 0 : screenshotInfo.mainImage) != null ? _screenshotInfo$mainI : '',
                      icon: screenshotInfo == null ? void 0 : screenshotInfo.icon,
                      iconText: screenshotInfo == null ? void 0 : screenshotInfo.iconText
                    })
                  }, i);
                })
              }))
            }), /*#__PURE__*/_jsx(IconNextCircle, {
              onClick: function onClick() {
                overlayVideoNav == null ? void 0 : overlayVideoNav.slickPrev();
              },
              sx: {
                display: clicked ? 'none' : 'inline-block',
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
                display: clicked ? 'none' : 'inline-block',
                cursor: 'pointer',
                opacity: selectedTrailer + 1 === (screenshotItems == null ? void 0 : screenshotItems.length) ? 0 : 1,
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
            })]
          })
        })]
      }), /*#__PURE__*/_jsxs(Box, {
        sx: {
          position: 'absolute',
          zIndex: 2000,
          height: 'auto',
          width: '100%',
          paddingTop: isMobile ? '28px' : '30px',
          paddingBottom: isMobile ? '22px' : '24px',
          paddingLeft: isMobile ? '32px' : '82px',
          borderRadius: '20px 20px 0 0',
          transform: {
            xs: clicked ? 'translateY(0%)' : 'translateY(-100%)',
            md: clicked ? 'translateY(0%)' : 'translateY(-30%)'
          },
          transition: '.3s ease-in-out',
          backgroundColor: colors.primary.bandaiNamcoWhite,
          '&:hover': {
            transform: 'translateY(-100%)'
          },
          '& .slick-slider': {
            '& .slick-list': {
              marginLeft: '-10px',
              marginTop: '10px'
            },
            '& .slick-slide': {
              marginRight: {
                xs: '8px',
                lg: '24px'
              }
            }
          }
        },
        children: [/*#__PURE__*/_jsxs(Typography, {
          variant: "p3",
          sx: {
            fontWeight: 600
          },
          children: [selectedTrailer + 1, " of ", screenshotItems == null ? void 0 : screenshotItems.length]
        }), /*#__PURE__*/_jsx(Box, {
          onWheel: function onWheel(e) {
            return onWheelSlider(e, overlayMenuNav);
          },
          children: /*#__PURE__*/_jsx(Slider, _extends({}, overlayMenuSliderSettings, {
            asNavFor: overlayVideoNav,
            ref: function ref(slider) {
              return setOverlayMenuNav(slider);
            },
            children: screenshotItems == null ? void 0 : screenshotItems.map(function (screenshotInfo, i) {
              var _screenshotInfo$mainI2;

              return /*#__PURE__*/_jsx(Box, {
                sx: {
                  '& .card': {
                    '& img': {
                      objectFit: 'cover',
                      objectPosition: 'top'
                    },
                    width: {
                      xs: '190px',
                      lg: '263px'
                    },
                    '& a': {
                      zIndex: !clicked && selectedTrailer === i ? '1' : '-1',
                      transition: clicked && selectedTrailer === i ? 'all .4s' : 'all .2s'
                    },
                    '& p, svg': {
                      display: clicked ? 'none' : 'block'
                    }
                  },
                  '&:hover': {
                    cursor: 'pointer'
                  }
                },
                onClick: function onClick(e) {
                  if (dragging) {
                    e.preventDefault();
                    return;
                  }

                  setSelectedTrailer(i);
                },
                children: /*#__PURE__*/_jsx(MediaGalleryCard, {
                  nextImage: screenshotInfo == null ? void 0 : screenshotInfo.mainImageNext,
                  img: (_screenshotInfo$mainI2 = screenshotInfo == null ? void 0 : screenshotInfo.mainImage) != null ? _screenshotInfo$mainI2 : ''
                })
              }, i);
            })
          }))
        })]
      })]
    })
  });
};

export default ImagePopupSlider;
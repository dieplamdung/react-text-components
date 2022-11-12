import _extends from "@babel/runtime/helpers/esm/extends";
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

const ImagePopupSlider = props => {
  const {
    screenshotItems = null,
    handleOpenPopup,
    initialItem = 0
  } = props;
  const imageThumbnailRef = /*#__PURE__*/React.createRef();
  const isMobile = useMediaQuery(themes => themes.breakpoints.down('lg'));
  const [infinities, setInfinities] = useState(true); // State use to check selected item

  const [selectedTrailer, setSelectedTrailer] = useState(initialItem); // State use to check clicked item

  const [clicked, setClicked] = useState(false); // Overlay slider states & refs

  const [overlayVideoNav, setOverlayVideoNav] = useState();
  const [overlayMenuNav, setOverlayMenuNav] = useState();
  const refContent = useRef();
  let dragging = false;
  /**
   * Use to handle on wheel mouse event
   */

  const onWheelSlider = debounce((e, ref) => {
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

  useEffect(() => {
    var _refContent$current;

    const items = refContent == null ? void 0 : (_refContent$current = refContent.current) == null ? void 0 : _refContent$current.querySelectorAll(`.slick-cloned`);

    if (items) {
      items.forEach(node => {
        var _node$querySelector, _node$querySelector$c;

        node == null ? void 0 : (_node$querySelector = node.querySelector) == null ? void 0 : (_node$querySelector$c = _node$querySelector.call(node, '#image-cloned')) == null ? void 0 : _node$querySelector$c.remove();
      });
    }
  }, []);
  const overlayMenuSliderSettings = {
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
    beforeChange: () => {
      dragging = true;
    },
    afterChange: index => {
      dragging = false;
      setSelectedTrailer(index);
    }
  };
  const overlaySliderSettings = {
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
    beforeChange: () => {
      dragging = true;
    },
    afterChange: () => {
      setInfinities(false);
      dragging = false;
    }
  };
  return /*#__PURE__*/_jsx(Box, {
    ref: imageThumbnailRef,
    onClick: () => {
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
            onClick: () => {
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
              onWheel: e => onWheelSlider(e, overlayVideoNav),
              children: /*#__PURE__*/_jsx(Slider, _extends({}, overlaySliderSettings, {
                asNavFor: overlayMenuNav,
                ref: slider => setOverlayVideoNav(slider),
                children: screenshotItems == null ? void 0 : screenshotItems.map((screenshotInfo, i) => {
                  var _screenshotInfo$mainI;

                  return /*#__PURE__*/_jsx(Box, {
                    id: `image-cloned`,
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
                    onClick: e => {
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
              onClick: () => {
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
              onClick: () => {
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
          onWheel: e => onWheelSlider(e, overlayMenuNav),
          children: /*#__PURE__*/_jsx(Slider, _extends({}, overlayMenuSliderSettings, {
            asNavFor: overlayVideoNav,
            ref: slider => setOverlayMenuNav(slider),
            children: screenshotItems == null ? void 0 : screenshotItems.map((screenshotInfo, i) => {
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
                onClick: e => {
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
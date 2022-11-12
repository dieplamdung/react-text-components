import _extends from "@babel/runtime/helpers/esm/extends";
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
const PlayVideo = loadable(() => import("../../molecules/PlayVideo"));
const MediaGalleryCard = loadable(() => import("../../molecules/MediaGalleryCard"));

const VideoPopupSlider = props => {
  const {
    trailerItems = null,
    handleOpenPopup,
    initialItem = 0
  } = props;
  const imageThumbnailRef = /*#__PURE__*/React.createRef();
  const isMobile = useMediaQuery(themes => themes.breakpoints.down('lg')); // State use to check selected item

  const [selectedTrailer, setSelectedTrailer] = useState(initialItem); // State use to detect dragging item

  const [dragging, setDragging] = useState(false); // Overlay slider states & refs

  const [overlayVideoNav, setOverlayVideoNav] = useState(initialItem); // State use to set initial infinity

  const [infinities, setInfinities] = useState(true);
  const [overlayMenuNav, setOverlayMenuNav] = useState(initialItem);
  const [indexBeforeChange, setIndexBeforeChange] = useState(initialItem);
  const refContent = useRef();
  const thisVideo = useRef([]);
  /**
   * Use to prevent going back to previous page
   */

  useEffect(() => {
    if (typeof window !== undefined) {
      window.history.pushState("null", "null", window.location.href);

      window.onpopstate = () => {
        window.history.go(1);
      };
    }

    return () => {
      window.onpopstate = () => {};

      window.history.back();
    };
  }, []);
  /**
   * Use to remove items containing slick-cloned class when slider has infinity equal true
   */

  useEffect(() => {
    const items = refContent?.current?.querySelectorAll(`.slick-cloned`);

    if (items) {
      items.forEach(node => {
        node?.querySelector?.('#youtube-iframe-cloned')?.remove();
      });
    }
  }, []);
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
  const overlayMenuSliderSettings = {
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
    beforeChange: () => {
      setDragging(true);
    },
    afterChange: () => {
      setDragging(false);
    }
  };
  const overlaySliderSettings = {
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
    beforeChange: index => {
      setDragging(true);
      setIndexBeforeChange(index);
    },
    afterChange: index => {
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
            onClick: () => {
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
                  justifyContent: trailerItems !== null && trailerItems?.length === 1 ? 'center' : 'flex-start',
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
              onWheel: e => onWheelSlider(e, overlayVideoNav),
              children: [/*#__PURE__*/_jsx(IconNextCircle, {
                onClick: () => {
                  overlayVideoNav?.slickPrev();
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
                onClick: () => {
                  overlayVideoNav?.slickNext();
                },
                sx: {
                  display: 'inline-block',
                  cursor: 'pointer',
                  opacity: selectedTrailer + 1 === trailerItems?.length ? 0 : 1,
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
                ref: slider => {
                  setOverlayVideoNav(slider);
                },
                children: trailerItems?.map((trailerInfo, i) => {
                  return /*#__PURE__*/_jsx(Box, {
                    id: `youtube-iframe-cloned`,
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
                      ref: el => thisVideo.current[i] = el,
                      index: i,
                      className: `ytplayer_${i}`,
                      idVideo: trailerInfo?.trailerUrl,
                      nextImage: trailerInfo?.nextImage,
                      imgUrl: trailerInfo?.trailerImg,
                      title: trailerInfo?.trailerTitle,
                      disable: selectedTrailer !== i,
                      dragging: dragging,
                      selectedTrailer: selectedTrailer,
                      typeVideo: trailerInfo?.videoType,
                      imageSecond: trailerInfo?.imgSecond || trailerInfo?.trailerImg || "",
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
          children: [selectedTrailer + 1, " of ", trailerItems?.length]
        }), /*#__PURE__*/_jsx(Box, {
          onWheel: e => onWheelSlider(e, overlayMenuNav),
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
            ref: slider => {
              setOverlayMenuNav(slider);
            },
            children: trailerItems?.map((trailerInfo, i) => {
              return /*#__PURE__*/_jsx(Box, {
                sx: {
                  '& .card': {
                    width: {
                      xs: '190px',
                      lg: '263px'
                    }
                  }
                },
                onClick: e => {
                  if (dragging) {
                    e.preventDefault();
                  }
                },
                children: /*#__PURE__*/_jsx(MediaGalleryCard, {
                  nextImage: trailerInfo?.nextImage,
                  img: trailerInfo?.trailerImg,
                  play: true,
                  alt: trailerInfo?.trailerImgAlt,
                  typeVideo: trailerInfo?.videoType
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
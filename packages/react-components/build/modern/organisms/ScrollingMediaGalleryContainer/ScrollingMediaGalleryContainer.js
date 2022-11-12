import _extends from "@babel/runtime/helpers/esm/extends";
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
const VideoPopupSlider = loadable(() => import("../VideoPopupSlider"));
const MediaGalleryCard = loadable(() => import("../../molecules/MediaGalleryCard"));
gsap.registerPlugin(ScrollTrigger);

const ScrollingMediaGalleryContainer = props => {
  const {
    listThumbnail,
    title,
    id
  } = props;
  const [currentItem, setCurrentItem] = useState(0);
  const [openPopup, setOpenPopup] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobileSmallest = useMediaQuery('(max-width:321px)', {
    noSsr: true
  });
  const refContainer = useRef();
  const [overlayVideoNav, setOverlayVideoNav] = useState();
  const refImgAnimation = useRef();
  const refWrapperImgAnimation = useRef();
  const refContentSlider = useRef();
  /** 
   * Use to filter items with videoUrl
   */

  const listTrailerItems = useMemo(() => {
    return listThumbnail?.filter(item => item?.videoUrl);
  }, [listThumbnail]);
  /**
   * Use to format data for pop-ups
   */

  const remapTrailerItems = useMemo(() => {
    return listTrailerItems?.map(item => {
      return {
        trailerUrl: item?.videoUrl ?? '',
        trailerTitle: item?.description ?? '',
        trailerImg: item?.img ?? '',
        trailerImgAlt: item?.alt ?? '',
        trailerDescription: '',
        hrefShare: '/',
        nextImage: item?.nextImage ?? '',
        videoType: item?.tags?.title ?? "",
        imgSecond: item?.href ?? ""
      };
    });
  }, [listTrailerItems]); // To debounce accidental launch of overlay when dragging/swiping slider

  let dragging = false; // dispatchEvent event send id to sub navigation

  useEffect(() => {
    if (typeof window !== "undefined") {
      const container = refContainer.current;
      window.addEventListener("scroll", () => {
        if (container) {
          const {
            bottom,
            top
          } = container.getBoundingClientRect();
          const newBottom = Math.floor(bottom);
          const newTop = Math.floor(top);

          if (newTop < 120 && newBottom > 100) {
            window?.dispatchEvent(new Event(`${id}`));
          }
        }
      });
    }

    return () => {
      window.removeEventListener(`${id}`, () => {});
      window.removeEventListener(`scroll`, () => {});
    };
  }, [id]);
  const mainSettings = {
    variableWidth: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: !!isMobile,
    swipeToSlide: true,
    focusOnSelect: true,
    infinite: false,
    centerMode: true,
    beforeChange: () => {
      dragging = true;
    },
    afterChange: e => {
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
  useEffect(() => {
    if (typeof window !== "undefined") {
      const returnWidthImg = () => {
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

      const imgAnimation = refImgAnimation.current;

      if (imgAnimation) {
        window.addEventListener("scroll", () => {
          const {
            width
          } = imgAnimation.getBoundingClientRect();

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

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [isTablet, isMobile, isMobileSmallest]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      // const parallax = gsap.timeline();
      ScrollTrigger.matchMedia({
        "(min-width:1023px)": function A() {
          gsap.to(refImgAnimation.current, {
            css: {
              width: `${930}px`,
              height: `${930 / 100 * 56.25}px`,
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
              width: `${600}px`,
              height: `${600 / 100 * 56.25}px`,
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
              width: `${312}px`,
              height: `${312 / 100 * 56.25}px`,
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
              width: `${274}px`,
              height: `${274 / 100 * 56.25}px`,
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
    children: [!!listTrailerItems?.length && /*#__PURE__*/_jsx(Box, {
      sx: {
        position: "absolute",
        zIndex: "-1",
        top: "0px",
        height: {
          xs: `calc(100vh - ${274 / 100 * 56.25}px)`,
          md: `calc(100vh - ${600 / 100 * 56.25}px)`,
          lg: `calc(100vh - ${930 / 100 * 56.25}px)`
        },
        width: "100%"
      },
      className: "wrapper-content-media-gallery"
    }), !!listTrailerItems?.length && /*#__PURE__*/_jsx(Box, {
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
            xs: `${274 / 100 * 56.25}px`,
            md: `${600 / 100 * 56.25}px`,
            lg: `${930 / 100 * 56.25}px`
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
        children: listTrailerItems?.[currentItem]?.nextImage || /*#__PURE__*/_jsx("img", {
          src: listTrailerItems?.[currentItem]?.img,
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
            justifyContent: !!listTrailerItems && listTrailerItems?.length <= 1 ? 'center' : 'flex-start',
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
        ref: slider => setOverlayVideoNav(slider),
        children: listTrailerItems?.map((item, index) => /*#__PURE__*/_jsx(Box, {
          sx: {
            cursor: 'pointer',
            minWidth: {
              xs: '274px',
              md: '600px',
              lg: '930px'
            }
          },
          onClick: e => {
            if (dragging) {
              e.preventDefault();
              return;
            }

            setOpenPopup(open => !open);
            setCurrentItem(index);
          },
          children: /*#__PURE__*/_jsx(MediaGalleryCard, _extends({}, item))
        }, index))
      })), !openPopup && !isMobile && !!listTrailerItems?.length && /*#__PURE__*/_jsxs(Box, {
        children: [/*#__PURE__*/_jsx(IconNextCircle, {
          onClick: () => {
            overlayVideoNav?.slickPrev();
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
          onClick: () => {
            overlayVideoNav?.slickNext();
          },
          sx: {
            display: {
              xs: 'none',
              md: 'inline-block'
            },
            cursor: 'pointer',
            opacity: currentItem === (listTrailerItems && listTrailerItems?.length - 1) ? 0 : 1,
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
        handleOpenPopup: () => setOpenPopup(false),
        trailerItems: remapTrailerItems,
        initialItem: currentItem ?? 0
      })
    })]
  });
};

export default ScrollingMediaGalleryContainer;
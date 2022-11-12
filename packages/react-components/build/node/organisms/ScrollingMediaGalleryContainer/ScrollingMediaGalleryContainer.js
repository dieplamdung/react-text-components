"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Icon = require("../../atoms/Icon");

var _gsap = _interopRequireDefault(require("gsap"));

var _ScrollTrigger = require("gsap/ScrollTrigger");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _component = _interopRequireDefault(require("@loadable/component"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import VideoPopupSlider from '~/organisms/VideoPopupSlider';
const VideoPopupSlider = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../VideoPopupSlider"))));
const MediaGalleryCard = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../../molecules/MediaGalleryCard"))));

_gsap.default.registerPlugin(_ScrollTrigger.ScrollTrigger);

const ScrollingMediaGalleryContainer = props => {
  var _listTrailerItems$cur, _listTrailerItems$cur2;

  const {
    listThumbnail,
    title,
    id
  } = props;
  const [currentItem, setCurrentItem] = (0, _react.useState)(0);
  const [openPopup, setOpenPopup] = (0, _react.useState)(false);
  const theme = (0, _styles.useTheme)();
  const isMobile = (0, _material.useMediaQuery)(theme.breakpoints.down('md'));
  const isTablet = (0, _material.useMediaQuery)(theme.breakpoints.down('lg'));
  const isMobileSmallest = (0, _material.useMediaQuery)('(max-width:321px)', {
    noSsr: true
  });
  const refContainer = (0, _react.useRef)();
  const [overlayVideoNav, setOverlayVideoNav] = (0, _react.useState)();
  const refImgAnimation = (0, _react.useRef)();
  const refWrapperImgAnimation = (0, _react.useRef)();
  const refContentSlider = (0, _react.useRef)();
  /** 
   * Use to filter items with videoUrl
   */

  const listTrailerItems = (0, _react.useMemo)(() => {
    return listThumbnail == null ? void 0 : listThumbnail.filter(item => item == null ? void 0 : item.videoUrl);
  }, [listThumbnail]);
  /**
   * Use to format data for pop-ups
   */

  const remapTrailerItems = (0, _react.useMemo)(() => {
    return listTrailerItems == null ? void 0 : listTrailerItems.map(item => {
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

  let dragging = false; // dispatchEvent event send id to sub navigation

  (0, _react.useEffect)(() => {
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
            var _window;

            (_window = window) == null ? void 0 : _window.dispatchEvent(new Event(`${id}`));
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
  (0, _react.useEffect)(() => {
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
  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      // const parallax = gsap.timeline();
      _ScrollTrigger.ScrollTrigger.matchMedia({
        "(min-width:1023px)": function A() {
          _gsap.default.to(refImgAnimation.current, {
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
          _gsap.default.to(refImgAnimation.current, {
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
          _gsap.default.to(refImgAnimation.current, {
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
          _gsap.default.to(refImgAnimation.current, {
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
    children: [!!(listTrailerItems != null && listTrailerItems.length) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
    }), !!(listTrailerItems != null && listTrailerItems.length) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
        children: (listTrailerItems == null ? void 0 : (_listTrailerItems$cur = listTrailerItems[currentItem]) == null ? void 0 : _listTrailerItems$cur.nextImage) || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: listTrailerItems == null ? void 0 : (_listTrailerItems$cur2 = listTrailerItems[currentItem]) == null ? void 0 : _listTrailerItems$cur2.img,
          alt: ""
        })
      })
    }), title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "h4",
      color: _colors.default.primary.bandaiNamcoBlack,
      sx: {
        textAlign: 'center',
        marginTop: "auto",
        marginBottom: {
          xs: '36px',
          md: '54px'
        }
      },
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSlick.default, (0, _extends2.default)({}, mainSettings, {
        ref: slider => setOverlayVideoNav(slider),
        children: listTrailerItems == null ? void 0 : listTrailerItems.map((item, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(MediaGalleryCard, (0, _extends2.default)({}, item))
        }, index))
      })), !openPopup && !isMobile && !!(listTrailerItems != null && listTrailerItems.length) && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconNextCircle, {
          onClick: () => {
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
                fill: _colors.default.primary.bandaiNamcoRed
              }
            }
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconNextCircle, {
          onClick: () => {
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
                fill: _colors.default.primary.bandaiNamcoRed
              }
            }
          }
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Modal, {
      open: openPopup,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(VideoPopupSlider, {
        handleOpenPopup: () => setOpenPopup(false),
        trailerItems: remapTrailerItems,
        initialItem: currentItem != null ? currentItem : 0
      })
    })]
  });
};

var _default = ScrollingMediaGalleryContainer;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _component = _interopRequireDefault(require("@loadable/component"));

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _Icon = require("../../atoms/Icon");

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const PlayVideo = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../../molecules/PlayVideo"))));
const MediaGalleryCard = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../../molecules/MediaGalleryCard"))));

const VideoPopupSlider = props => {
  const {
    trailerItems = null,
    handleOpenPopup,
    initialItem = 0
  } = props;

  const imageThumbnailRef = /*#__PURE__*/_react.default.createRef();

  const isMobile = (0, _material.useMediaQuery)(themes => themes.breakpoints.down('lg')); // State use to check selected item

  const [selectedTrailer, setSelectedTrailer] = (0, _react.useState)(initialItem); // State use to detect dragging item

  const [dragging, setDragging] = (0, _react.useState)(false); // Overlay slider states & refs

  const [overlayVideoNav, setOverlayVideoNav] = (0, _react.useState)(initialItem); // State use to set initial infinity

  const [infinities, setInfinities] = (0, _react.useState)(true);
  const [overlayMenuNav, setOverlayMenuNav] = (0, _react.useState)(initialItem);
  const [indexBeforeChange, setIndexBeforeChange] = (0, _react.useState)(initialItem);
  const refContent = (0, _react.useRef)();
  const thisVideo = (0, _react.useRef)([]);
  /**
   * Use to prevent going back to previous page
   */

  (0, _react.useEffect)(() => {
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

  (0, _react.useEffect)(() => {
    var _refContent$current;

    const items = refContent == null ? void 0 : (_refContent$current = refContent.current) == null ? void 0 : _refContent$current.querySelectorAll(`.slick-cloned`);

    if (items) {
      items.forEach(node => {
        var _node$querySelector, _node$querySelector$c;

        node == null ? void 0 : (_node$querySelector = node.querySelector) == null ? void 0 : (_node$querySelector$c = _node$querySelector.call(node, '#youtube-iframe-cloned')) == null ? void 0 : _node$querySelector$c.remove();
      });
    }
  }, []);
  /**
   * Use to handle on wheel mouse event
   */

  const onWheelSlider = (0, _material.debounce)((e, ref) => {
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        position: 'relative',
        width: '100%',
        height: '100%'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 999,
          // Background overlay, 999 is lowest value of all overlay items
          backgroundColor: _colors.default.primary.bandaiNamcoBlack
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          position: 'relative',
          width: '100%',
          height: '100%',
          zIndex: 1099 // Overlay items, set to 1099 to be above background overlay (set to 999)

        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          className: "close-icon-slider",
          sx: {
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            position: 'absolute',
            zIndex: 1100
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconClose, {
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
            htmlColor: _colors.default.neutral.neutral4,
            onClick: () => {
              handleOpenPopup(false);
            }
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          className: "main-slider-wrapper",
          sx: {
            position: 'relative',
            height: '50px',
            top: {
              xs: '35%',
              md: '50%'
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
              onWheel: e => onWheelSlider(e, overlayVideoNav),
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconNextCircle, {
                onClick: () => {
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
                      fill: _colors.default.primary.bandaiNamcoRed
                    }
                  }
                }
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconNextCircle, {
                onClick: () => {
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
                      fill: _colors.default.primary.bandaiNamcoRed
                    }
                  }
                }
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSlick.default, (0, _extends2.default)({}, overlaySliderSettings, {
                asNavFor: overlayMenuNav,
                ref: slider => {
                  setOverlayVideoNav(slider);
                },
                children: trailerItems == null ? void 0 : trailerItems.map((trailerInfo, i) => {
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                    id: `youtube-iframe-cloned`,
                    sx: {
                      minWidth: {
                        xs: '274px',
                        md: '65vw',
                        xl: '800px'
                      },
                      maxWidth: '926px'
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(PlayVideo // eslint-disable-next-line no-return-assign
                    , {
                      ref: el => thisVideo.current[i] = el,
                      index: i,
                      className: `ytplayer_${i}`,
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
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
          backgroundColor: _colors.default.primary.bandaiNamcoWhite,
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
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
          variant: "p3",
          sx: {
            fontWeight: 600
          },
          children: [selectedTrailer + 1, " of ", trailerItems == null ? void 0 : trailerItems.length]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          onWheel: e => onWheelSlider(e, overlayMenuNav),
          sx: {
            '& .slick-slide': {
              marginRight: {
                xs: '20px',
                md: '22px'
              }
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSlick.default, (0, _extends2.default)({}, overlayMenuSliderSettings, {
            asNavFor: overlayVideoNav,
            ref: slider => {
              setOverlayMenuNav(slider);
            },
            children: trailerItems == null ? void 0 : trailerItems.map((trailerInfo, i) => {
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(MediaGalleryCard, {
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

var _default = VideoPopupSlider;
exports.default = _default;
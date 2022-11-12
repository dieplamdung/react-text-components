"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Icon = require("../../atoms/Icon");

var _MediaGalleryCard = _interopRequireDefault(require("../../molecules/MediaGalleryCard"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import Modules
// import Styles
const ImagePopupSlider = props => {
  const {
    screenshotItems = null,
    handleOpenPopup,
    initialItem = 0
  } = props;

  const imageThumbnailRef = /*#__PURE__*/_react.default.createRef();

  const isMobile = (0, _material.useMediaQuery)(themes => themes.breakpoints.down('lg'));
  const [infinities, setInfinities] = (0, _react.useState)(true); // State use to check selected item

  const [selectedTrailer, setSelectedTrailer] = (0, _react.useState)(initialItem); // State use to check clicked item

  const [clicked, setClicked] = (0, _react.useState)(false); // Overlay slider states & refs

  const [overlayVideoNav, setOverlayVideoNav] = (0, _react.useState)();
  const [overlayMenuNav, setOverlayMenuNav] = (0, _react.useState)();
  const refContent = (0, _react.useRef)();
  let dragging = false;
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
  /**
  * Use to remove items containing slick-cloned class when slider has infinity equal true
  */

  (0, _react.useEffect)(() => {
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
            position: 'absolute'
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
              if (clicked) {
                setClicked(false);
                return;
              }

              handleOpenPopup(false);
            }
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              onWheel: e => onWheelSlider(e, overlayVideoNav),
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSlick.default, (0, _extends2.default)({}, overlaySliderSettings, {
                asNavFor: overlayMenuNav,
                ref: slider => setOverlayVideoNav(slider),
                children: screenshotItems == null ? void 0 : screenshotItems.map((screenshotInfo, i) => {
                  var _screenshotInfo$mainI;

                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MediaGalleryCard.default, {
                      nextImage: screenshotInfo == null ? void 0 : screenshotInfo.mainImageNext,
                      color: _colors.default.primary.bandaiNamcoWhite,
                      hideContent: clicked,
                      description: screenshotInfo == null ? void 0 : screenshotInfo.title,
                      img: (_screenshotInfo$mainI = screenshotInfo == null ? void 0 : screenshotInfo.mainImage) != null ? _screenshotInfo$mainI : '',
                      icon: screenshotInfo == null ? void 0 : screenshotInfo.icon,
                      iconText: screenshotInfo == null ? void 0 : screenshotInfo.iconText
                    })
                  }, i);
                })
              }))
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconNextCircle, {
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
                    fill: _colors.default.primary.bandaiNamcoRed
                  }
                }
              }
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconNextCircle, {
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
                    fill: _colors.default.primary.bandaiNamcoRed
                  }
                }
              }
            })]
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
          backgroundColor: _colors.default.primary.bandaiNamcoWhite,
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
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
          variant: "p3",
          sx: {
            fontWeight: 600
          },
          children: [selectedTrailer + 1, " of ", screenshotItems == null ? void 0 : screenshotItems.length]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          onWheel: e => onWheelSlider(e, overlayMenuNav),
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSlick.default, (0, _extends2.default)({}, overlayMenuSliderSettings, {
            asNavFor: overlayVideoNav,
            ref: slider => setOverlayMenuNav(slider),
            children: screenshotItems == null ? void 0 : screenshotItems.map((screenshotInfo, i) => {
              var _screenshotInfo$mainI2;

              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MediaGalleryCard.default, {
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

var _default = ImagePopupSlider;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _react2 = require("swiper/react");

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _Pills = _interopRequireDefault(require("../../atoms/Pills"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _viewport = require("../../utils/viewport");

var _ExploreCard = _interopRequireDefault(require("./ExploreCard"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Imports
const ExploreNewUniverse = ({
  title,
  image,
  listFilter = [],
  listBrand = []
}) => {
  var _listCardFeature$list, _listCardFeature$list2, _listCardFeature$list3, _listCardFeature$list4, _listCardFeature$list6;

  const theme = (0, _material.useTheme)();
  const isMobile = (0, _material.useMediaQuery)((0, _viewport.TabletDown)(theme));
  const [listCardFeature, setListCardFeature] = (0, _react.useState)({});
  const [listPillFilter, setListPillFilter] = (0, _react.useState)([]);
  const [pillFilter, setPillFilter] = (0, _react.useState)("");
  const refWrapperScroll = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    setListCardFeature(listBrand[0]);
  }, [listBrand]);
  (0, _react.useEffect)(() => {
    if (listFilter.length) {
      var _listFilter$;

      listFilter[0].active = true;
      setPillFilter((listFilter == null ? void 0 : (_listFilter$ = listFilter[0]) == null ? void 0 : _listFilter$.label) || "");
      setListPillFilter(listFilter);
    }
  }, [listFilter]);

  const handelFilter = index => {
    if (listPillFilter[index].label === pillFilter) {
      setListPillFilter([...listPillFilter]);
      return;
    }

    setPillFilter(listPillFilter[index].label);
    const newFilter = listPillFilter.map((filter, idx) => {
      if (idx === index) {
        return filter;
      }

      return (0, _extends2.default)({}, filter, {
        active: false
      });
    });
    newFilter[index].active = true;
    setListPillFilter(newFilter);
    setListCardFeature(listBrand[index]);
  };

  (0, _react.useEffect)(() => {
    if (refWrapperScroll.current) {
      var _refWrapperScroll$cur;

      const scrollLeft = refWrapperScroll.current.scrollLeft;
      (_refWrapperScroll$cur = refWrapperScroll.current) == null ? void 0 : _refWrapperScroll$cur.scrollBy({
        left: -scrollLeft,
        behavior: "smooth"
      });
    }

    ;
  }, [listCardFeature]);
  const VideoMemo = (0, _react.useCallback)(() => {
    var _listCardFeature$imag, _listCardFeature$vide;

    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        width: '100%',
        height: '100%'
      },
      children: listCardFeature != null && listCardFeature.videoDirectly ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("video", {
          autoPlay: true,
          muted: true,
          loop: true,
          poster: (_listCardFeature$imag = listCardFeature.image) != null ? _listCardFeature$imag : '',
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("source", {
            src: (_listCardFeature$vide = listCardFeature == null ? void 0 : listCardFeature.videoId) != null ? _listCardFeature$vide : '',
            type: "video/mp4"
          })
        })
      }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("iframe", {
        id: "ytplayer",
        frameBorder: "0",
        loading: "lazy",
        allowFullScreen: true,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        title: title || "",
        width: "100%",
        height: "100%",
        src: `https://www.youtube.com/embed/${(listCardFeature == null ? void 0 : listCardFeature.videoId) || "jWSefHXCJY4"}?autoplay=1&amp;loop=1&amp;playlist=${(listCardFeature == null ? void 0 : listCardFeature.videoId) || "jWSefHXCJY4"}&amp;mute=1&amp;hd=1&amp;controls=0&amp;rel=0&amp;fs=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fbandainamcoent.asia&amp;widgetid=1`
      })
    }) // eslint-disable-next-line react-hooks/exhaustive-deps
    ;
  }, [listCardFeature == null ? void 0 : listCardFeature.videoId, listCardFeature == null ? void 0 : listCardFeature.videoDirectly]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column"
    },
    children: [!!title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h2",
        color: _colors.default.primary.bandaiNamcoBlack,
        sx: {
          marginBottom: {
            xs: "34px",
            md: "62px"
          }
        },
        children: title
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        width: "100%",
        paddingBottom: {
          xs: "106.7%",
          md: "70%",
          lg: "45.55%"
        },
        position: "relative"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
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
        children: !isMobile ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            position: "absolute",
            top: "0px",
            left: "0px",
            bottom: "0px",
            right: "0px",
            width: "100%",
            height: "100%",
            overflow: "hidden",
            "& iframe, video": {
              objectFit: 'cover',
              width: {
                xs: "130%",
                xl: '100vw'
              },
              height: {
                xs: "120%",
                xl: '56.25vw'
              },
              minWidth: {
                xs: "auto",
                xl: '177.77vh'
              },
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              pointerEvents: 'none'
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(VideoMemo, {})
        }) : (listCardFeature == null ? void 0 : listCardFeature.nextImage) || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: (listCardFeature == null ? void 0 : listCardFeature.image) || image,
          alt: "alt"
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        width: "100%",
        position: "relative",
        zIndex: "2",
        marginTop: {
          xs: "-106px",
          md: "-114px"
        },
        background: "none"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
        sx: {
          height: "100%",
          width: "100%"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            background: _colors.default.primary.bandaiNamcoWhite,
            width: "100%",
            height: "100%",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
            padding: {
              xs: "36px  0px 0px 0px ",
              lg: "40px 0px 0px 0px"
            },
            display: "flex",
            flexDirection: "column",
            overflowX: "hidden"
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              display: "block",
              "& .swiper": {
                width: "100%",
                height: "100%"
              },
              "& .swiper-container": {
                width: "100%",
                height: "100%",
                overflow: "hidden !!important",
                transition: "all 0.5s"
              },
              "& .swiper-slide": {
                width: "auto !important",
                "& p": {
                  height: {
                    xs: "21px",
                    md: "20px"
                  }
                }
              }
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react2.Swiper, {
              slidesPerView: "auto",
              spaceBetween: 12,
              freeMode: true,
              observer: true,
              resizeObserver: true,
              observeSlideChildren: true,
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                  sx: {
                    width: {
                      xs: "16px",
                      lg: "36px"
                    },
                    height: "100%"
                  }
                })
              }), listPillFilter == null ? void 0 : listPillFilter.map((pill, index) => {
                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pills.default, (0, _extends2.default)({}, pill, {
                    active: pill.active,
                    triggerClick: () => handelFilter(index)
                  }))
                }, index);
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                  sx: {
                    width: {
                      xs: "16px",
                      lg: "36px"
                    },
                    height: "100%"
                  }
                })
              })]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              width: "100%",
              overflowY: "hidden"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
              sx: {
                marginTop: {
                  xs: "24px",
                  md: "28px"
                },
                padding: {
                  xs: "0px 28px 0px 0xp",
                  lg: "0px 48px 0px 18px"
                },
                width: "100%",
                display: "flex",
                flexWrap: "nowrap",
                overflowX: "scroll",
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                overscrollBehaviorX: "contain",
                scrollBehavior: "smooth",
                scrollbarWidth: "none",
                "&::-webkit-scrollbar": {
                  display: "none"
                }
              },
              ref: refWrapperScroll,
              children: [(listCardFeature == null ? void 0 : (_listCardFeature$list = listCardFeature.listCard) == null ? void 0 : _listCardFeature$list.length) > 0 && (listCardFeature == null ? void 0 : (_listCardFeature$list2 = listCardFeature.listCard) == null ? void 0 : _listCardFeature$list2.map((card, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                sx: {
                  display: "inline-flex",
                  scrollSnapAlign: "start",
                  width: {
                    xs: "230px",
                    lg: "25%"
                  },
                  minWidth: {
                    xs: "230px",
                    lg: "25%"
                  }
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                  sx: {
                    width: '100%'
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                    sx: {
                      width: "100%",
                      paddingLeft: "30px"
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ExploreCard.default, (0, _extends2.default)({}, card))
                  })
                })
              }, index))), (listCardFeature == null ? void 0 : (_listCardFeature$list3 = listCardFeature.listCard) == null ? void 0 : _listCardFeature$list3.length) > 0 && (listCardFeature == null ? void 0 : (_listCardFeature$list4 = listCardFeature.listCard) == null ? void 0 : _listCardFeature$list4.map((card, index) => {
                var _listCardFeature$list5;

                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                  sx: {
                    display: {
                      xs: 'block',
                      lg: 'none'
                    },
                    flex: (listCardFeature == null ? void 0 : (_listCardFeature$list5 = listCardFeature.listCard) == null ? void 0 : _listCardFeature$list5.length) - 1 === index ? '0 0 24px' : '0 0 0'
                  }
                }, index);
              })), (listCardFeature == null ? void 0 : (_listCardFeature$list6 = listCardFeature.listCard) == null ? void 0 : _listCardFeature$list6.length) <= 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                  variant: "p8",
                  color: _colors.default.primary.bandaiNamcoBlack,
                  children: "Empty feature game"
                })
              })]
            })
          })]
        })
      })
    })]
  });
};

var _default = /*#__PURE__*/(0, _react.memo)(ExploreNewUniverse);

exports.default = _default;
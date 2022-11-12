import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// Imports
import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { memo, useCallback, useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../atoms/Container";
import Pills from "../../atoms/Pills";
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { TabletDown } from "../../utils/viewport";
import ExploreCard from "./ExploreCard";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var ExploreNewUniverse = function ExploreNewUniverse(_ref) {
  var _listCardFeature$list, _listCardFeature$list2, _listCardFeature$list3, _listCardFeature$list4, _listCardFeature$list6;

  var title = _ref.title,
      image = _ref.image,
      _ref$listFilter = _ref.listFilter,
      listFilter = _ref$listFilter === void 0 ? [] : _ref$listFilter,
      _ref$listBrand = _ref.listBrand,
      listBrand = _ref$listBrand === void 0 ? [] : _ref$listBrand;
  var theme = useTheme();
  var isMobile = useMediaQuery(TabletDown(theme));

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      listCardFeature = _useState2[0],
      setListCardFeature = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      listPillFilter = _useState4[0],
      setListPillFilter = _useState4[1];

  var _useState5 = useState(""),
      _useState6 = _slicedToArray(_useState5, 2),
      pillFilter = _useState6[0],
      setPillFilter = _useState6[1];

  var refWrapperScroll = useRef();
  useEffect(function () {
    setListCardFeature(listBrand[0]);
  }, [listBrand]);
  useEffect(function () {
    if (listFilter.length) {
      var _listFilter$;

      listFilter[0].active = true;
      setPillFilter((listFilter == null ? void 0 : (_listFilter$ = listFilter[0]) == null ? void 0 : _listFilter$.label) || "");
      setListPillFilter(listFilter);
    }
  }, [listFilter]);

  var handelFilter = function handelFilter(index) {
    if (listPillFilter[index].label === pillFilter) {
      setListPillFilter(_toConsumableArray(listPillFilter));
      return;
    }

    setPillFilter(listPillFilter[index].label);
    var newFilter = listPillFilter.map(function (filter, idx) {
      if (idx === index) {
        return filter;
      }

      return _extends({}, filter, {
        active: false
      });
    });
    newFilter[index].active = true;
    setListPillFilter(newFilter);
    setListCardFeature(listBrand[index]);
  };

  useEffect(function () {
    if (refWrapperScroll.current) {
      var _refWrapperScroll$cur;

      var scrollLeft = refWrapperScroll.current.scrollLeft;
      (_refWrapperScroll$cur = refWrapperScroll.current) == null ? void 0 : _refWrapperScroll$cur.scrollBy({
        left: -scrollLeft,
        behavior: "smooth"
      });
    }

    ;
  }, [listCardFeature]);
  var VideoMemo = useCallback(function () {
    var _listCardFeature$imag, _listCardFeature$vide;

    return /*#__PURE__*/_jsx(Box, {
      sx: {
        width: '100%',
        height: '100%'
      },
      children: listCardFeature != null && listCardFeature.videoDirectly ? /*#__PURE__*/_jsx(Box, {
        children: /*#__PURE__*/_jsx("video", {
          autoPlay: true,
          muted: true,
          loop: true,
          poster: (_listCardFeature$imag = listCardFeature.image) != null ? _listCardFeature$imag : '',
          children: /*#__PURE__*/_jsx("source", {
            src: (_listCardFeature$vide = listCardFeature == null ? void 0 : listCardFeature.videoId) != null ? _listCardFeature$vide : '',
            type: "video/mp4"
          })
        })
      }) : /*#__PURE__*/_jsx("iframe", {
        id: "ytplayer",
        frameBorder: "0",
        loading: "lazy",
        allowFullScreen: true,
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        title: title || "",
        width: "100%",
        height: "100%",
        src: "https://www.youtube.com/embed/".concat((listCardFeature == null ? void 0 : listCardFeature.videoId) || "jWSefHXCJY4", "?autoplay=1&amp;loop=1&amp;playlist=").concat((listCardFeature == null ? void 0 : listCardFeature.videoId) || "jWSefHXCJY4", "&amp;mute=1&amp;hd=1&amp;controls=0&amp;rel=0&amp;fs=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fbandainamcoent.asia&amp;widgetid=1")
      })
    }) // eslint-disable-next-line react-hooks/exhaustive-deps
    ;
  }, [listCardFeature == null ? void 0 : listCardFeature.videoId, listCardFeature == null ? void 0 : listCardFeature.videoDirectly]);
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column"
    },
    children: [!!title && /*#__PURE__*/_jsx(Container, {
      children: /*#__PURE__*/_jsx(Typography, {
        variant: "h2",
        color: colors.primary.bandaiNamcoBlack,
        sx: {
          marginBottom: {
            xs: "34px",
            md: "62px"
          }
        },
        children: title
      })
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        width: "100%",
        paddingBottom: {
          xs: "106.7%",
          md: "70%",
          lg: "45.55%"
        },
        position: "relative"
      },
      children: /*#__PURE__*/_jsx(Box, {
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
        children: !isMobile ? /*#__PURE__*/_jsx(Box, {
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
          children: /*#__PURE__*/_jsx(VideoMemo, {})
        }) : (listCardFeature == null ? void 0 : listCardFeature.nextImage) || /*#__PURE__*/_jsx("img", {
          src: (listCardFeature == null ? void 0 : listCardFeature.image) || image,
          alt: "alt"
        })
      })
    }), /*#__PURE__*/_jsx(Box, {
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
      children: /*#__PURE__*/_jsx(Container, {
        sx: {
          height: "100%",
          width: "100%"
        },
        children: /*#__PURE__*/_jsxs(Box, {
          sx: {
            background: colors.primary.bandaiNamcoWhite,
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
          children: [/*#__PURE__*/_jsx(Box, {
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
            children: /*#__PURE__*/_jsxs(Swiper, {
              slidesPerView: "auto",
              spaceBetween: 12,
              freeMode: true,
              observer: true,
              resizeObserver: true,
              observeSlideChildren: true,
              children: [/*#__PURE__*/_jsx(SwiperSlide, {
                children: /*#__PURE__*/_jsx(Box, {
                  sx: {
                    width: {
                      xs: "16px",
                      lg: "36px"
                    },
                    height: "100%"
                  }
                })
              }), listPillFilter == null ? void 0 : listPillFilter.map(function (pill, index) {
                return /*#__PURE__*/_jsx(SwiperSlide, {
                  children: /*#__PURE__*/_jsx(Pills, _extends({}, pill, {
                    active: pill.active,
                    triggerClick: function triggerClick() {
                      return handelFilter(index);
                    }
                  }))
                }, index);
              }), /*#__PURE__*/_jsx(SwiperSlide, {
                children: /*#__PURE__*/_jsx(Box, {
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
          }), /*#__PURE__*/_jsx(Box, {
            sx: {
              width: "100%",
              overflowY: "hidden"
            },
            children: /*#__PURE__*/_jsxs(Box, {
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
              children: [(listCardFeature == null ? void 0 : (_listCardFeature$list = listCardFeature.listCard) == null ? void 0 : _listCardFeature$list.length) > 0 && (listCardFeature == null ? void 0 : (_listCardFeature$list2 = listCardFeature.listCard) == null ? void 0 : _listCardFeature$list2.map(function (card, index) {
                return /*#__PURE__*/_jsx(Box, {
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
                  children: /*#__PURE__*/_jsx(Box, {
                    sx: {
                      width: '100%'
                    },
                    children: /*#__PURE__*/_jsx(Box, {
                      sx: {
                        width: "100%",
                        paddingLeft: "30px"
                      },
                      children: /*#__PURE__*/_jsx(ExploreCard, _extends({}, card))
                    })
                  })
                }, index);
              })), (listCardFeature == null ? void 0 : (_listCardFeature$list3 = listCardFeature.listCard) == null ? void 0 : _listCardFeature$list3.length) > 0 && (listCardFeature == null ? void 0 : (_listCardFeature$list4 = listCardFeature.listCard) == null ? void 0 : _listCardFeature$list4.map(function (card, index) {
                var _listCardFeature$list5;

                return /*#__PURE__*/_jsx(Box, {
                  sx: {
                    display: {
                      xs: 'block',
                      lg: 'none'
                    },
                    flex: (listCardFeature == null ? void 0 : (_listCardFeature$list5 = listCardFeature.listCard) == null ? void 0 : _listCardFeature$list5.length) - 1 === index ? '0 0 24px' : '0 0 0'
                  }
                }, index);
              })), (listCardFeature == null ? void 0 : (_listCardFeature$list6 = listCardFeature.listCard) == null ? void 0 : _listCardFeature$list6.length) <= 0 && /*#__PURE__*/_jsx(Box, {
                children: /*#__PURE__*/_jsx(Typography, {
                  variant: "p8",
                  color: colors.primary.bandaiNamcoBlack,
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

export default /*#__PURE__*/memo(ExploreNewUniverse);
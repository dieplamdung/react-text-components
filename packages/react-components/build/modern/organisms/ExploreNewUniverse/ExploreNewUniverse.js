import _extends from "@babel/runtime/helpers/esm/extends";
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

const ExploreNewUniverse = ({
  title,
  image,
  listFilter = [],
  listBrand = []
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(TabletDown(theme));
  const [listCardFeature, setListCardFeature] = useState({});
  const [listPillFilter, setListPillFilter] = useState([]);
  const [pillFilter, setPillFilter] = useState("");
  const refWrapperScroll = useRef();
  useEffect(() => {
    setListCardFeature(listBrand[0]);
  }, [listBrand]);
  useEffect(() => {
    if (listFilter.length) {
      listFilter[0].active = true;
      setPillFilter(listFilter?.[0]?.label || "");
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

      return _extends({}, filter, {
        active: false
      });
    });
    newFilter[index].active = true;
    setListPillFilter(newFilter);
    setListCardFeature(listBrand[index]);
  };

  useEffect(() => {
    if (refWrapperScroll.current) {
      const scrollLeft = refWrapperScroll.current.scrollLeft;
      refWrapperScroll.current?.scrollBy({
        left: -scrollLeft,
        behavior: "smooth"
      });
    }

    ;
  }, [listCardFeature]);
  const VideoMemo = useCallback(() => /*#__PURE__*/_jsx(Box, {
    sx: {
      width: '100%',
      height: '100%'
    },
    children: listCardFeature?.videoDirectly ? /*#__PURE__*/_jsx(Box, {
      children: /*#__PURE__*/_jsx("video", {
        autoPlay: true,
        muted: true,
        loop: true,
        poster: listCardFeature.image ?? '',
        children: /*#__PURE__*/_jsx("source", {
          src: listCardFeature?.videoId ?? '',
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
      src: `https://www.youtube.com/embed/${listCardFeature?.videoId || "jWSefHXCJY4"}?autoplay=1&amp;loop=1&amp;playlist=${listCardFeature?.videoId || "jWSefHXCJY4"}&amp;mute=1&amp;hd=1&amp;controls=0&amp;rel=0&amp;fs=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fbandainamcoent.asia&amp;widgetid=1`
    })
  }) // eslint-disable-next-line react-hooks/exhaustive-deps
  , [listCardFeature?.videoId, listCardFeature?.videoDirectly]);
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
        }) : listCardFeature?.nextImage || /*#__PURE__*/_jsx("img", {
          src: listCardFeature?.image || image,
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
              }), listPillFilter?.map((pill, index) => {
                return /*#__PURE__*/_jsx(SwiperSlide, {
                  children: /*#__PURE__*/_jsx(Pills, _extends({}, pill, {
                    active: pill.active,
                    triggerClick: () => handelFilter(index)
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
              children: [listCardFeature?.listCard?.length > 0 && listCardFeature?.listCard?.map((card, index) => /*#__PURE__*/_jsx(Box, {
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
              }, index)), listCardFeature?.listCard?.length > 0 && listCardFeature?.listCard?.map((card, index) => /*#__PURE__*/_jsx(Box, {
                sx: {
                  display: {
                    xs: 'block',
                    lg: 'none'
                  },
                  flex: listCardFeature?.listCard?.length - 1 === index ? '0 0 24px' : '0 0 0'
                }
              }, index)), listCardFeature?.listCard?.length <= 0 && /*#__PURE__*/_jsx(Box, {
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
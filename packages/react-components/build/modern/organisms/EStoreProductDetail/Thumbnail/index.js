var _svg;

import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import ThumbnailImage from "./ThumbnailImage";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function Thumbnail(props) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const {
    listItem = [],
    padding = 0
  } = props;
  const Icon = useMemo(() => {
    return _svg || (_svg = /*#__PURE__*/_jsx("svg", {
      width: "6",
      height: "11",
      viewBox: "0 0 6 11",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: /*#__PURE__*/_jsx("path", {
        fillRule: "evenodd",
        clipRule: "evenodd",
        d: "M0.378906 5.62724L4.31105 0.885161C4.58381 0.573434 5.05763 0.541845 5.36936 0.814607C5.68109 1.08737 5.71268 1.56119 5.43991 1.87292L2.37206 5.62724L5.43128 9.38062C5.70404 9.69235 5.67245 10.1662 5.36072 10.4389C5.04899 10.7117 4.57517 10.6801 4.30241 10.3684L0.378906 5.62724Z",
        fill: "#1E1E1E"
      })
    }));
  }, []);
  const [disablePre, setDisablePre] = useState(true);
  const [disableNex, setDisableNex] = useState(false);
  const [itemSelect, setItemSelect] = useState({});
  const refWrapper = useRef();
  const refWrapperMobile = useRef();
  const refTimeOut = useRef();
  useEffect(() => {
    if (listItem?.length) {
      setItemSelect(listItem[0]);
    }
  }, [listItem]);

  const handleScroll = () => {
    if (refTimeOut.current) {
      window.clearTimeout(refTimeOut.current);
    }

    refTimeOut.current = setTimeout(() => {
      refTimeOut.current = undefined;

      if (typeof window !== "undefined") {
        const wrapper = refWrapper.current;

        if (wrapper) {
          if (wrapper.scrollLeft === 0) {
            setDisablePre(true);
          } else {
            setDisablePre(false);
          }

          ;

          if (wrapper.scrollWidth - wrapper.clientWidth <= wrapper.scrollLeft + 1) {
            setDisableNex(true);
          } else {
            setDisableNex(false);
          }

          ;
        }

        ;
      }
    }, 50);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", () => {
        handleScroll();
      });
    }

    ;
    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, []);

  const handlePreItem = () => {
    if (typeof window !== "undefined") {
      const wrapper = refWrapper.current;

      if (wrapper) {
        wrapper.scrollTo({
          left: wrapper.scrollLeft - 135,
          behavior: "smooth"
        });
      }
    }
  };

  const handleNextItem = () => {
    if (typeof window !== "undefined") {
      const wrapper = refWrapper.current;

      if (wrapper) {
        wrapper.scrollTo({
          left: wrapper.scrollLeft + 135,
          behavior: "smooth"
        });
      }
    }
  };

  const renderIframeVideo = useMemo(() => {
    switch (itemSelect?.typeVideo) {
      case "vimeo":
        return /*#__PURE__*/_jsx("iframe", {
          title: itemSelect?.title || "",
          loading: "lazy",
          src: `https://player.vimeo.com/video/${itemSelect?.idVideo}?h=3a3669479e&color=ffffff&title=0&byline=0&portrait=0`,
          frameBorder: "0",
          allow: "autoplay; fullscreen; picture-in-picture",
          allowFullScreen: true
        });

      case "bilibili":
        return /*#__PURE__*/_jsx("iframe", {
          allowFullScreen: true,
          loading: "lazy",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          src: `//player.bilibili.com/player.html?aid=${itemSelect?.idVideo}&bvid=${itemSelect?.idVideo}&cid=839966468&page=1`,
          scrolling: "no",
          frameBorder: "no",
          title: itemSelect?.title || ""
        });

      default:
        return /*#__PURE__*/_jsx("iframe", {
          id: "ytplayer",
          loading: "lazy",
          width: "100%",
          height: "100%",
          src: `https://www.youtube.com/embed/${itemSelect?.idVideo}?autoplay=1&enablejsapi=1&start=1`,
          title: itemSelect?.title,
          frameBorder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true
        });
    }
  }, [itemSelect]);
  useEffect(() => {
    let timeout = null;

    if (typeof window !== "undefined") {
      const wrapper = refWrapper.current;
      const wrapperMobile = refWrapperMobile.current;

      if (wrapper) {
        window.addEventListener("resize", () => {
          timeout = setTimeout(() => {
            wrapper?.scrollTo({
              left: 0,
              behavior: "smooth"
            });
          }, 500);
        });
      }

      if (wrapperMobile) {
        window.addEventListener("resize", () => {
          timeout = setTimeout(() => {
            wrapperMobile?.scrollTo({
              left: 0,
              behavior: "smooth"
            });
          }, 500);
        });
      }
    }

    ;
    return () => {
      window.removeEventListener("resize", () => {});
      window.clearTimeout(timeout);
    };
  }, []);
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: {
        xs: "100%",
        lg: "54.5%"
      },
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        width: "100%",
        paddingBottom: "56.3%",
        position: "relative",
        borderRadius: {
          xs: "10px",
          md: "20px"
        },
        overflow: "hidden",
        "& img": {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "all 0.3s"
        },
        "& iframe": {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          borderRadius: {
            xs: "10px",
            md: "20px"
          }
        }
      },
      children: itemSelect?.typeImg === "video" ? renderIframeVideo : /*#__PURE__*/_jsx("img", {
        src: itemSelect?.hrefImg || "",
        alt: ""
      })
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        width: "100%",
        marginTop: "25px",
        overflow: "hidden",
        height: "86px",
        position: "relative",
        opacity: {
          xs: "0",
          lg: "1"
        }
      },
      children: /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: "flex",
          alignItems: "center",
          width: "100%",
          height: "100%",
          overflow: "auto"
        },
        children: [/*#__PURE__*/_jsx(Box, {
          sx: {
            display: {
              xs: "none",
              lg: "flex"
            },
            alignItems: "center",
            justifyContent: "center",
            width: "62px",
            minWidth: "62px",
            height: "62px",
            borderRadius: "60px",
            margin: "0px 8px",
            background: "#F6F6F6",
            cursor: disablePre ? "auto" : "pointer",
            "&": {
              "path": {
                fill: disablePre ? "#737373" : "#1E1E1E"
              }
            },
            "&:hover": {
              "&": {
                "path": {
                  fill: disablePre ? "#737373" : "red"
                }
              }
            }
          },
          onClick: () => disablePre ? {} : handlePreItem(),
          children: Icon
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            display: "flex",
            width: {
              xs: "auto",
              lg: "100%"
            },
            height: "100%",
            overflow: "auto",
            scrollbarWidth: "none",
            overflowX: "scroll",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            overscrollBehaviorX: "contain",
            "&::-webkit-scrollbar": {
              display: "none"
            }
          },
          ref: refWrapper,
          onScroll: () => isMobile ? {} : handleScroll(),
          children: !!listItem?.length && listItem.map((item, index) => {
            return /*#__PURE__*/_jsx(Box, {
              sx: {
                scrollSnapAlign: "start"
              },
              children: /*#__PURE__*/_jsx(ThumbnailImage, {
                isSelect: item?.id === itemSelect?.id,
                typeImg: item?.typeImg,
                isFirstChild: index === 0,
                hrefImg: item?.hrefImg,
                onClick: () => setItemSelect(item)
              })
            }, index);
          })
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            display: {
              xs: "none",
              lg: "flex"
            },
            alignItems: "center",
            justifyContent: "center",
            width: "62px",
            minWidth: "62px",
            height: "62px",
            margin: "0px 8px",
            borderRadius: "60px",
            background: "#F6F6F6",
            transform: "rotate(180deg)",
            cursor: disableNex ? "auto" : "pointer",
            "&": {
              "path": {
                fill: disableNex ? "#737373" : "#1E1E1E"
              }
            },
            "&:hover": {
              "&": {
                "path": {
                  fill: disableNex ? "#737373" : "red"
                }
              }
            }
          },
          onClick: () => disableNex ? {} : handleNextItem(),
          children: Icon
        })]
      })
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        position: "absolute",
        width: "100%",
        height: "86px",
        left: "0",
        bottom: "0px",
        display: {
          xs: "flex",
          lg: "none"
        }
      },
      children: /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: "flex",
          width: {
            xs: "auto",
            lg: "100%"
          },
          height: "100%",
          overflow: "auto",
          scrollbarWidth: "none",
          overflowX: "scroll",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          overscrollBehaviorX: "contain",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        },
        ref: refWrapperMobile,
        children: [!!listItem?.length && listItem.map((item, index) => {
          return /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "inline-block",
              scrollSnapAlign: "start",
              width: "fit-content"
            },
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                transform: {
                  xs: `translateX(${padding}px)`,
                  lg: `translateX(${0}px)`
                },
                width: "100%"
              },
              children: /*#__PURE__*/_jsx(ThumbnailImage, {
                isSelect: item?.id === itemSelect?.id,
                typeImg: item?.typeImg,
                isFirstChild: index === 0,
                hrefImg: item?.hrefImg,
                onClick: () => setItemSelect(item)
              })
            })
          }, index);
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            display: {
              xs: "inline-block",
              lg: "none"
            },
            scrollSnapAlign: "start"
          },
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              transform: {
                xs: `translateX(${padding + 4}px)`,
                md: `translateX(${padding - 12}px)`
              }
            },
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                display: "inline-block",
                width: {
                  xs: `${padding - 4}px`,
                  md: `${padding + 12}px`
                },
                height: "100%",
                background: "red"
              }
            })
          })
        })]
      })
    })]
  });
}

;
export default /*#__PURE__*/memo(Thumbnail);
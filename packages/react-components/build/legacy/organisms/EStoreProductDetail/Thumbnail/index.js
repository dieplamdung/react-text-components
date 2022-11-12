import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _svg;

import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { memo, useEffect, useMemo, useRef, useState } from 'react';
import ThumbnailImage from "./ThumbnailImage";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function Thumbnail(props) {
  var theme = useTheme();
  var isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  var _props$listItem = props.listItem,
      listItem = _props$listItem === void 0 ? [] : _props$listItem,
      _props$padding = props.padding,
      padding = _props$padding === void 0 ? 0 : _props$padding;
  var Icon = useMemo(function () {
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

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      disablePre = _useState2[0],
      setDisablePre = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      disableNex = _useState4[0],
      setDisableNex = _useState4[1];

  var _useState5 = useState({}),
      _useState6 = _slicedToArray(_useState5, 2),
      itemSelect = _useState6[0],
      setItemSelect = _useState6[1];

  var refWrapper = useRef();
  var refWrapperMobile = useRef();
  var refTimeOut = useRef();
  useEffect(function () {
    if (listItem != null && listItem.length) {
      setItemSelect(listItem[0]);
    }
  }, [listItem]);

  var handleScroll = function handleScroll() {
    if (refTimeOut.current) {
      window.clearTimeout(refTimeOut.current);
    }

    refTimeOut.current = setTimeout(function () {
      refTimeOut.current = undefined;

      if (typeof window !== "undefined") {
        var wrapper = refWrapper.current;

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

  useEffect(function () {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", function () {
        handleScroll();
      });
    }

    ;
    return function () {
      window.removeEventListener("resize", function () {});
    };
  }, []);

  var handlePreItem = function handlePreItem() {
    if (typeof window !== "undefined") {
      var wrapper = refWrapper.current;

      if (wrapper) {
        wrapper.scrollTo({
          left: wrapper.scrollLeft - 135,
          behavior: "smooth"
        });
      }
    }
  };

  var handleNextItem = function handleNextItem() {
    if (typeof window !== "undefined") {
      var wrapper = refWrapper.current;

      if (wrapper) {
        wrapper.scrollTo({
          left: wrapper.scrollLeft + 135,
          behavior: "smooth"
        });
      }
    }
  };

  var renderIframeVideo = useMemo(function () {
    switch (itemSelect == null ? void 0 : itemSelect.typeVideo) {
      case "vimeo":
        return /*#__PURE__*/_jsx("iframe", {
          title: (itemSelect == null ? void 0 : itemSelect.title) || "",
          loading: "lazy",
          src: "https://player.vimeo.com/video/".concat(itemSelect == null ? void 0 : itemSelect.idVideo, "?h=3a3669479e&color=ffffff&title=0&byline=0&portrait=0"),
          frameBorder: "0",
          allow: "autoplay; fullscreen; picture-in-picture",
          allowFullScreen: true
        });

      case "bilibili":
        return /*#__PURE__*/_jsx("iframe", {
          allowFullScreen: true,
          loading: "lazy",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          src: "//player.bilibili.com/player.html?aid=".concat(itemSelect == null ? void 0 : itemSelect.idVideo, "&bvid=").concat(itemSelect == null ? void 0 : itemSelect.idVideo, "&cid=839966468&page=1"),
          scrolling: "no",
          frameBorder: "no",
          title: (itemSelect == null ? void 0 : itemSelect.title) || ""
        });

      default:
        return /*#__PURE__*/_jsx("iframe", {
          id: "ytplayer",
          loading: "lazy",
          width: "100%",
          height: "100%",
          src: "https://www.youtube.com/embed/".concat(itemSelect == null ? void 0 : itemSelect.idVideo, "?autoplay=1&enablejsapi=1&start=1"),
          title: itemSelect == null ? void 0 : itemSelect.title,
          frameBorder: "0",
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          allowFullScreen: true
        });
    }
  }, [itemSelect]);
  useEffect(function () {
    var timeout = null;

    if (typeof window !== "undefined") {
      var wrapper = refWrapper.current;
      var wrapperMobile = refWrapperMobile.current;

      if (wrapper) {
        window.addEventListener("resize", function () {
          timeout = setTimeout(function () {
            wrapper == null ? void 0 : wrapper.scrollTo({
              left: 0,
              behavior: "smooth"
            });
          }, 500);
        });
      }

      if (wrapperMobile) {
        window.addEventListener("resize", function () {
          timeout = setTimeout(function () {
            wrapperMobile == null ? void 0 : wrapperMobile.scrollTo({
              left: 0,
              behavior: "smooth"
            });
          }, 500);
        });
      }
    }

    ;
    return function () {
      window.removeEventListener("resize", function () {});
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
      children: (itemSelect == null ? void 0 : itemSelect.typeImg) === "video" ? renderIframeVideo : /*#__PURE__*/_jsx("img", {
        src: (itemSelect == null ? void 0 : itemSelect.hrefImg) || "",
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
          onClick: function onClick() {
            return disablePre ? {} : handlePreItem();
          },
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
          onScroll: function onScroll() {
            return isMobile ? {} : handleScroll();
          },
          children: !!(listItem != null && listItem.length) && listItem.map(function (item, index) {
            return /*#__PURE__*/_jsx(Box, {
              sx: {
                scrollSnapAlign: "start"
              },
              children: /*#__PURE__*/_jsx(ThumbnailImage, {
                isSelect: (item == null ? void 0 : item.id) === (itemSelect == null ? void 0 : itemSelect.id),
                typeImg: item == null ? void 0 : item.typeImg,
                isFirstChild: index === 0,
                hrefImg: item == null ? void 0 : item.hrefImg,
                onClick: function onClick() {
                  return setItemSelect(item);
                }
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
          onClick: function onClick() {
            return disableNex ? {} : handleNextItem();
          },
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
        children: [!!(listItem != null && listItem.length) && listItem.map(function (item, index) {
          return /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "inline-block",
              scrollSnapAlign: "start",
              width: "fit-content"
            },
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                transform: {
                  xs: "translateX(".concat(padding, "px)"),
                  lg: "translateX(".concat(0, "px)")
                },
                width: "100%"
              },
              children: /*#__PURE__*/_jsx(ThumbnailImage, {
                isSelect: (item == null ? void 0 : item.id) === (itemSelect == null ? void 0 : itemSelect.id),
                typeImg: item == null ? void 0 : item.typeImg,
                isFirstChild: index === 0,
                hrefImg: item == null ? void 0 : item.hrefImg,
                onClick: function onClick() {
                  return setItemSelect(item);
                }
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
                xs: "translateX(".concat(padding + 4, "px)"),
                md: "translateX(".concat(padding - 12, "px)")
              }
            },
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                display: "inline-block",
                width: {
                  xs: "".concat(padding - 4, "px"),
                  md: "".concat(padding + 12, "px")
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
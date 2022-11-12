import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Box } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Modal from '@mui/material/Modal';
import { IconClose, IconNextSlide, IconPrevSlide } from "../../atoms/Icon";
import colors from "../../theme/colors";
import Slider from "react-slick";
import Typography from "../../atoms/Typography";
import { disableScrollBody } from "../../utils/disableScrollBody";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var ViewVideoTrailer = function ViewVideoTrailer(_ref) {
  var _ref$onClose = _ref.onClose,
      onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? false : _ref$open,
      _ref$listTrailer = _ref.listTrailer,
      listTrailer = _ref$listTrailer === void 0 ? [] : _ref$listTrailer;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      indexSlider = _useState2[0],
      setIndexSlider = _useState2[1];

  var refSlider = useRef();
  var refContent = useRef();
  useEffect(function () {
    if (typeof window !== "undefined") {
      disableScrollBody(open);
    }
  }, [open]);
  var settings = {
    className: 'slider overlay-video',
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '20%',
    responsive: [{
      breakpoint: 970,
      settings: {
        centerPadding: '0'
      }
    }]
  };

  var ArrowSlide = function ArrowSlide(_ref2) {
    var children = _ref2.children,
        sx = _ref2.sx,
        disabled = _ref2.disabled,
        funcClick = _ref2.funcClick;
    return /*#__PURE__*/_jsx(Box, {
      onClick: function onClick() {
        return funcClick();
      },
      sx: _extends({
        width: '62px',
        height: '62px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: disabled ? colors.otherColor.alabaster : colors.neutral.neutral7,
        borderRadius: '100%',
        pointerEvents: disabled ? 'none' : 'auto',
        cursor: !disabled ? 'pointer' : 'none'
      }, sx, {
        '&:hover': {
          '& path': {
            stroke: colors.primary.bandaiNamcoRed
          }
        },
        '& svg': {
          height: '10px',
          pointerEvents: 'none',
          '& path': {
            stroke: disabled ? colors.otherColor.quickSilver : colors.primary.bandaiNamcoBlack
          }
        }
      }),
      children: children
    });
  };

  var handleOnchange = function handleOnchange(v) {
    if (typeof window !== "undefined") {
      var wrapIframe = refContent.current.getElementsByClassName("ytplayer_".concat(v));

      if (wrapIframe) {
        for (var i = 0; i < wrapIframe.length; i += 1) {
          wrapIframe[i].src = "https://www.youtube.com/embed/".concat(listTrailer[v].idVideo); // causes a reload so it stops playing, music, video, etc.
        }
      }
    }
  };

  return /*#__PURE__*/_jsx(Modal, {
    open: open,
    disableAutoFocus: true,
    sx: {
      pointerEvents: "auto"
    },
    children: /*#__PURE__*/_jsxs(Box, {
      sx: {
        height: "100vh",
        width: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center"
      },
      children: [/*#__PURE__*/_jsx(Box, {
        sx: {
          position: "absolute",
          right: "32px",
          top: "32px",
          width: "50px",
          height: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          cursor: "pointer",
          zIndex: "10"
        },
        onClick: onClose,
        children: /*#__PURE__*/_jsx(IconClose, {
          htmlColor: colors.primary.bandaiNamcoWhite
        })
      }), !!(listTrailer != null && listTrailer.length) && /*#__PURE__*/_jsx(Box, {
        ref: refContent,
        sx: {
          width: "100%"
        },
        children: /*#__PURE__*/_jsx(Slider, _extends({}, settings, {
          initialSlide: indexSlider,
          afterChange: function afterChange(e) {
            setIndexSlider(e);
          },
          beforeChange: function beforeChange(e) {
            handleOnchange(e);
          },
          ref: refSlider,
          children: listTrailer.map(function (item, i) {
            return /*#__PURE__*/_jsx(Box, {
              sx: {
                width: "100%",
                height: "100vh",
                display: "flex !important",
                alignItems: "center",
                justifyContent: "center"
              },
              children: /*#__PURE__*/_jsx(Box, {
                sx: {
                  width: "100%",
                  paddingBottom: "60%",
                  borderRadius: "20px",
                  display: "flex",
                  margin: {
                    xs: "0px 16px",
                    md: "0px 50px",
                    lg: "0px 30px"
                  },
                  overflow: "hidden",
                  position: "relative",
                  transform: {
                    xs: "translateY(0px)",
                    lg: indexSlider === i ? "translateY(-50px)" : "translateY(0px)"
                  },
                  transition: "all 0.3s"
                },
                children: /*#__PURE__*/_jsxs(Box, {
                  sx: {
                    position: "absolute",
                    top: "0px",
                    left: "0px",
                    width: "100%",
                    height: "100%",
                    background: "black",
                    "& iframe": {
                      width: "100%",
                      height: "100%",
                      border: "none",
                      pointerEvents: "painted"
                    }
                  },
                  children: [indexSlider !== i && /*#__PURE__*/_jsx(Box, {
                    sx: {
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      width: "100%",
                      height: "100%",
                      zIndex: "2"
                    }
                  }), /*#__PURE__*/_jsx("iframe", {
                    id: "ytplayer",
                    className: "ytplayer_".concat(i),
                    loading: "lazy",
                    width: "100%",
                    height: "100%",
                    src: "https://www.youtube.com/embed/".concat(item.idVideo),
                    title: item.title || "Trailer game",
                    frameBorder: "0",
                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                    allowFullScreen: true
                  })]
                })
              })
            }, i);
          })
        }))
      }), !!(listTrailer != null && listTrailer.length) && /*#__PURE__*/_jsxs(Box, {
        sx: {
          width: "100%",
          height: "0px",
          display: "flex",
          justifyContent: "space-between",
          padding: {
            xs: "0px 16px",
            md: "0px 30px"
          },
          position: "absolute",
          transform: "translateY(-31px)"
        },
        children: [/*#__PURE__*/_jsx(ArrowSlide, {
          disabled: false,
          funcClick: function funcClick() {
            refSlider.current.slickPrev();
          },
          children: /*#__PURE__*/_jsx(IconPrevSlide, {
            htmlColor: "transparent",
            sx: {
              height: '10px'
            }
          })
        }), /*#__PURE__*/_jsx(ArrowSlide, {
          disabled: false,
          funcClick: function funcClick() {
            refSlider.current.slickNext();
          },
          children: /*#__PURE__*/_jsx(IconNextSlide, {
            htmlColor: "transparent",
            sx: {
              height: '10px'
            }
          })
        })]
      }), !(listTrailer != null && listTrailer.length) && /*#__PURE__*/_jsx(Box, {
        sx: {
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: /*#__PURE__*/_jsx(Typography, {
          variant: "h4",
          color: colors.primary.bandaiNamcoWhite,
          children: "Empty video trailer"
        })
      })]
    })
  });
};

export default ViewVideoTrailer;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Modal = _interopRequireDefault(require("@mui/material/Modal"));

var _Icon = require("../../atoms/Icon");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _reactSlick = _interopRequireDefault(require("react-slick"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _disableScrollBody = require("../../utils/disableScrollBody");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ViewVideoTrailer = ({
  onClose = () => {},
  open = false,
  listTrailer = []
}) => {
  const [indexSlider, setIndexSlider] = (0, _react.useState)(0);
  const refSlider = (0, _react.useRef)();
  const refContent = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      (0, _disableScrollBody.disableScrollBody)(open);
    }
  }, [open]);
  const settings = {
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

  const ArrowSlide = ({
    children,
    sx,
    disabled,
    funcClick
  }) => {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      onClick: () => funcClick(),
      sx: (0, _extends2.default)({
        width: '62px',
        height: '62px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: disabled ? _colors.default.otherColor.alabaster : _colors.default.neutral.neutral7,
        borderRadius: '100%',
        pointerEvents: disabled ? 'none' : 'auto',
        cursor: !disabled ? 'pointer' : 'none'
      }, sx, {
        '&:hover': {
          '& path': {
            stroke: _colors.default.primary.bandaiNamcoRed
          }
        },
        '& svg': {
          height: '10px',
          pointerEvents: 'none',
          '& path': {
            stroke: disabled ? _colors.default.otherColor.quickSilver : _colors.default.primary.bandaiNamcoBlack
          }
        }
      }),
      children: children
    });
  };

  const handleOnchange = v => {
    if (typeof window !== "undefined") {
      const wrapIframe = refContent.current.getElementsByClassName(`ytplayer_${v}`);

      if (wrapIframe) {
        for (let i = 0; i < wrapIframe.length; i += 1) {
          wrapIframe[i].src = `https://www.youtube.com/embed/${listTrailer[v].idVideo}`; // causes a reload so it stops playing, music, video, etc.
        }
      }
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Modal.default, {
    open: open,
    disableAutoFocus: true,
    sx: {
      pointerEvents: "auto"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        height: "100vh",
        width: "100%",
        position: "relative",
        display: "flex",
        alignItems: "center"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconClose, {
          htmlColor: _colors.default.primary.bandaiNamcoWhite
        })
      }), !!(listTrailer != null && listTrailer.length) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        ref: refContent,
        sx: {
          width: "100%"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactSlick.default, (0, _extends2.default)({}, settings, {
          initialSlide: indexSlider,
          afterChange: e => {
            setIndexSlider(e);
          },
          beforeChange: e => {
            handleOnchange(e);
          },
          ref: refSlider,
          children: listTrailer.map((item, i) => {
            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                width: "100%",
                height: "100vh",
                display: "flex !important",
                alignItems: "center",
                justifyContent: "center"
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
                  children: [indexSlider !== i && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                    sx: {
                      position: "absolute",
                      top: "0px",
                      left: "0px",
                      width: "100%",
                      height: "100%",
                      zIndex: "2"
                    }
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)("iframe", {
                    id: "ytplayer",
                    className: `ytplayer_${i}`,
                    loading: "lazy",
                    width: "100%",
                    height: "100%",
                    src: `https://www.youtube.com/embed/${item.idVideo}`,
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
      }), !!(listTrailer != null && listTrailer.length) && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(ArrowSlide, {
          disabled: false,
          funcClick: () => {
            refSlider.current.slickPrev();
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconPrevSlide, {
            htmlColor: "transparent",
            sx: {
              height: '10px'
            }
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ArrowSlide, {
          disabled: false,
          funcClick: () => {
            refSlider.current.slickNext();
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconNextSlide, {
            htmlColor: "transparent",
            sx: {
              height: '10px'
            }
          })
        })]
      }), !(listTrailer != null && listTrailer.length) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "h4",
          color: _colors.default.primary.bandaiNamcoWhite,
          children: "Empty video trailer"
        })
      })]
    })
  });
};

var _default = ViewVideoTrailer;
exports.default = _default;
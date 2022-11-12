"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _Tags = _interopRequireDefault(require("../../atoms/Tags"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _disableScrollBody = require("../../utils/disableScrollBody");

var _component = _interopRequireDefault(require("@loadable/component"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const VideoPopupSlider = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../VideoPopupSlider"))));

const HomepageMasthead = ({
  listTags,
  title,
  description,
  price = {
    title: "From",
    value: ""
  },
  idVideo,
  backgroundImage,
  titleButtonWatch = "Watch trailer",
  titleButtonBuy = "Buy",
  hrefButtonBuy = undefined,
  listTrailer = [],
  locale,
  videoType = 'youtube',
  videoDirectly = false
}) => {
  var _price$value;

  const [showTrailer, setShowTrailer] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      (0, _disableScrollBody.disableScrollBody)(showTrailer);
    }
  }, [showTrailer]);
  /**
    * Use to format data for pop-ups
    */

  const remapTrailerItems = (0, _react.useMemo)(() => {
    const data = listTrailer == null ? void 0 : listTrailer.filter(item => item == null ? void 0 : item.trailerUrl);
    return data == null ? void 0 : data.map(item => {
      var _item$trailerUrl, _item$trailerTitle, _item$trailerImgAlt, _item$nextImage;

      return {
        trailerUrl: (_item$trailerUrl = item == null ? void 0 : item.trailerUrl) != null ? _item$trailerUrl : '',
        trailerTitle: (_item$trailerTitle = item == null ? void 0 : item.trailerTitle) != null ? _item$trailerTitle : '',
        trailerImg: item == null ? void 0 : item.trailerImg,
        trailerImgAlt: (_item$trailerImgAlt = item == null ? void 0 : item.trailerImgAlt) != null ? _item$trailerImgAlt : '',
        trailerDescription: '',
        hrefShare: '/',
        nextImage: (_item$nextImage = item == null ? void 0 : item.nextImage) != null ? _item$nextImage : ''
      };
    });
  }, [listTrailer]);

  const handleRenderIframe = (typeVideo, mastheadBgID) => {
    switch (typeVideo) {
      case 'youtube':
        return `https://www.youtube.com/embed/${mastheadBgID}?autoplay=1&loop=1&playlist=${mastheadBgID}&mute=1&hd=1&controls=0&rel=0&fs=0&enablejsapi=1&origin=https%3A%2F%2Fbandainamcoent.asia&widgetid=1`;

      case 'bilibili':
        return `//player.bilibili.com/player.html?aid=${mastheadBgID}&bvid=${mastheadBgID}&danmaku=0&autoplay=1`;

      case 'vimeo':
        return `https://player.vimeo.com/video/${mastheadBgID}`;

      default:
        return `https://www.youtube.com/embed/${mastheadBgID}?autoplay=1&loop=1&playlist=${mastheadBgID}&mute=1&hd=1&controls=0&rel=0&fs=0&enablejsapi=1&origin=https%3A%2F%2Fbandainamcoent.asia&widgetid=1`;
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      position: "relative",
      zIndex: 1,
      width: "100%",
      height: "100vh",
      backgroundImage: `url(${backgroundImage})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      maxHeight: {
        xs: "calc(100vh - 80px)",
        lg: "calc(100vh - 96px)"
      },
      pointerEvents: "auto"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        background: '#111111',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: '25%',
        zIndex: 2
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      sx: {
        position: "relative",
        zIndex: 3,
        height: "100%",
        width: "100%"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          width: "100%",
          height: "100%",
          paddingBottom: {
            xs: "36px",
            md: "160px"
          },
          display: "flex"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            marginTop: "auto",
            display: "flex",
            flexDirection: "column"
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h1",
            sx: {
              color: _colors.default.primary.bandaiNamcoWhite,
              marginBottom: {
                xs: "12px",
                lg: "20px"
              }
            },
            children: title
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p4",
            sx: {
              color: _colors.default.primary.bandaiNamcoWhite,
              marginBottom: {
                xs: "12px",
                lg: "32px"
              }
            },
            children: description
          }), !!(listTags != null && listTags.length) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              maxWidth: {
                xs: "100%",
                lg: "571px"
              },
              display: "flex",
              flexWrap: "wrap",
              gap: '12px',
              marginBottom: {
                xs: "12px",
                lg: "32px"
              },
              '& path': {
                fill: _colors.default.primary.bandaiNamcoWhite
              }
            },
            children: listTags.map((tag, i) => {
              return typeof (tag == null ? void 0 : tag.title) === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                sx: {
                  marginBottom: "5px"
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tags.default, (0, _extends2.default)({}, tag, {
                  showBackground: false
                }))
              }, i) : /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                component: "span",
                children: tag == null ? void 0 : tag.title
              }, i);
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              display: "flex",
              alignItems: "flex-start",
              flexDirection: {
                xs: "row",
                lg: "column"
              },
              marginBottom: {
                xs: "12px",
                lg: "32px"
              }
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
              color: _colors.default.primary.bandaiNamcoWhite,
              variant: "p8",
              sx: {
                marginRight: {
                  xs: "4px",
                  lg: "0px"
                },
                fontSize: {
                  xs: "10px",
                  lg: "14px"
                },
                lineHeight: {
                  xs: "12px",
                  lg: "19px"
                }
              },
              children: price == null ? void 0 : price.title
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
              color: _colors.default.primary.bandaiNamcoWhite,
              variant: "p7",
              sx: {
                fontSize: {
                  xs: "16px",
                  lg: "14px"
                },
                lineHeight: {
                  xs: "22px",
                  lg: "19px"
                }
              },
              children: price == null ? void 0 : (_price$value = price.value) == null ? void 0 : _price$value.replace(/' '/g, '')
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              display: "flex",
              justifyContent: "flex-start"
            },
            children: [locale !== 'hk-tc' && locale !== 'hk-sc' && locale !== 'tw-tc' && locale !== 'tw-sc' && locale !== 'ko-kr' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
              variant: "primaryDark",
              sx: {
                width: {
                  xs: "86px",
                  md: "92px"
                },
                marginRight: {
                  xs: "12px",
                  md: "16px"
                }
              },
              externalLink: hrefButtonBuy,
              children: titleButtonBuy
            }), titleButtonWatch && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Button.default, {
              variant: locale !== 'hk-tc' && locale !== 'hk-sc' && locale !== 'tw-tc' && locale !== 'tw-sc' && locale !== 'ko-kr' ? 'secondaryDark' : 'primaryDark',
              sx: {
                width: {
                  xs: "145px",
                  md: "148px"
                },
                marginRight: {
                  xs: "12px",
                  md: "16px"
                }
              },
              onClick: () => setShowTrailer(true),
              children: [" ", titleButtonWatch, " "]
            })]
          })]
        })
      })
    }), idVideo && !showTrailer && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        width: "100%",
        height: "100%",
        position: "absolute",
        top: "0px",
        left: "0px",
        zIndex: "1",
        display: {
          xs: "none",
          lg: "flex"
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
            minHeight: {
              xs: "auto",
              xl: '100vh'
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
        children: videoDirectly ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("video", {
            autoPlay: true,
            muted: true,
            loop: true,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)("source", {
              src: idVideo != null ? idVideo : '',
              type: "video/mp4"
            })
          })
        }) : /*#__PURE__*/(0, _jsxRuntime.jsx)("iframe", {
          id: "ytplayer",
          frameBorder: "0",
          loading: "lazy",
          allowFullScreen: true,
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          title: typeof title === "string" ? title : idVideo,
          width: "100%",
          height: "100%" // src={`https://www.youtube.com/embed/${idVideo}?autoplay=1&loop=1&playlist=${idVideo}&mute=1&hd=1&controls=0&rel=0&fs=0&enablejsapi=1&origin=https%3A%2F%2Fbandainamcoent.asia&widgetid=1`} 
          ,
          src: handleRenderIframe(videoType, idVideo)
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Modal, {
      open: showTrailer,
      sx: {
        pointerEvents: 'auto'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(VideoPopupSlider, {
        initialItem: 0,
        handleOpenPopup: () => {
          setShowTrailer(false);
        },
        trailerItems: remapTrailerItems
      })
    })]
  });
};

var _default = HomepageMasthead;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _Tags = _interopRequireDefault(require("../../atoms/Tags"));

var _fileSaver = require("file-saver");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _Icon = require("../../atoms/Icon");

var _material = require("@mui/material");

var _viewport = require("../../utils/viewport");

var _component = _interopRequireDefault(require("@loadable/component"));

var _jsxRuntime = require("react/jsx-runtime");

var _g, _g2, _g3, _g4, _g5, _g6, _g7, _g8, _IconCalendar;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import SubHeader from './SubHeader';
// import JSZip from "jszip";
const SubHeader = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("./SubHeader"))));
const SocialShare = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../../molecules/SocialShare"))));

const HeaderArticle = props => {
  var _ref;

  const {
    title,
    tags,
    date,
    socialShareProps,
    mainImage,
    mainImageNext,
    idVideo,
    store,
    hideMasthead = false,
    timeRange,
    downloadTitle,
    isProtect = false,
    layoutBlog = false,
    mainImageAvatarNext,
    mainImageAvatar,
    userInfo
  } = props;
  const theme = (0, _material.useTheme)();
  const isTabletDown = (0, _material.useMediaQuery)((0, _viewport.SmallDesktopDown)(theme));
  const isTabletMin = (0, _material.useMediaQuery)((0, _viewport.MobileDown)(theme));
  const refSubHeader = (0, _react.useRef)();
  const refContainer = (0, _react.useRef)();
  const refScroll = (0, _react.useRef)(0);
  const refIsTablet = (0, _react.useRef)(isTabletDown);
  const refIsMobile = (0, _react.useRef)(isTabletMin);
  (0, _react.useEffect)(() => {
    refIsTablet.current = isTabletDown;
    refIsMobile.current = isTabletMin;

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        const body = document.querySelector(".disable-scroll");

        if (!body) {
          const container = refContainer.current;
          const subHeader = refSubHeader.current;

          if (container && subHeader) {
            const {
              bottom
            } = container.getBoundingClientRect();
            const scrollTop = window.scrollY;

            if (bottom < -10) {
              if (refScroll.current < scrollTop) {
                subHeader.style.top = "0px";
                subHeader.style.opacity = "1";
              }

              if (refScroll.current > scrollTop) {
                subHeader.style.top = refIsMobile.current ? "73px" : `${refIsTablet.current ? "80px" : "96px"}`;
                subHeader.style.opacity = "1";
              }

              refScroll.current = scrollTop;
            } else {
              refScroll.current = scrollTop;
              subHeader.style.top = "-200px";
              subHeader.style.opacity = "0";
            }
          }
        }
      });
    }

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [isTabletDown, isTabletMin]);
  const hadTagDownload = (0, _react.useMemo)(() => {
    var _tags$map;

    const titleTagList = (_tags$map = tags == null ? void 0 : tags.map(item => item.title)) != null ? _tags$map : [];
    const result = (titleTagList == null ? void 0 : titleTagList.includes("DOWNLOADS")) || (titleTagList == null ? void 0 : titleTagList.includes("DOWNLOAD")) || (titleTagList == null ? void 0 : titleTagList.includes("download")) || (titleTagList == null ? void 0 : titleTagList.includes("downloads"));
    return result;
  }, [tags]);

  const IconLoadingSVG = propSvg => {
    return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.SvgIcon, (0, _extends2.default)({}, propSvg, {
      width: "40",
      height: "40",
      viewBox: "0 0 100 100",
      fill: "none",
      sx: {
        width: {
          xs: '40px'
        },
        height: {
          xs: '40px'
        }
      },
      children: [_g || (_g = /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
        transform: "rotate(0 50 50)",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "-0.875s",
            repeatCount: "indefinite"
          })
        })
      })), _g2 || (_g2 = /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
        transform: "rotate(45 50 50)",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "-0.75s",
            repeatCount: "indefinite"
          })
        })
      })), _g3 || (_g3 = /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
        transform: "rotate(90 50 50)",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "-0.625s",
            repeatCount: "indefinite"
          })
        })
      })), _g4 || (_g4 = /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
        transform: "rotate(135 50 50)",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "-0.5s",
            repeatCount: "indefinite"
          })
        })
      })), _g5 || (_g5 = /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
        transform: "rotate(180 50 50)",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "-0.375s",
            repeatCount: "indefinite"
          })
        })
      })), _g6 || (_g6 = /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
        transform: "rotate(225 50 50)",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "-0.25s",
            repeatCount: "indefinite"
          })
        })
      })), _g7 || (_g7 = /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
        transform: "rotate(270 50 50)",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "-0.125s",
            repeatCount: "indefinite"
          })
        })
      })), _g8 || (_g8 = /*#__PURE__*/(0, _jsxRuntime.jsx)("g", {
        transform: "rotate(315 50 50)",
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
          x: "44.5",
          y: "24.5",
          rx: "5.5",
          ry: "5.5",
          width: "11",
          height: "11",
          fill: "#ffffff",
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("animate", {
            attributeName: "opacity",
            values: "1;0",
            keyTimes: "0;1",
            dur: "1s",
            begin: "0s",
            repeatCount: "indefinite"
          })
        })
      }))]
    }));
  };

  const [disableBtn, setDisableBtn] = (0, _react.useState)(false);

  const fetchData = async file => fetch(file).then(res => res.blob());

  const handleDownload = async () => {
    setDisableBtn(true);

    try {
      const wrapper = document.querySelector(".body-article-container");

      if (wrapper) {
        var _listImg$length;

        const listImg = wrapper.querySelectorAll("img");
        const lengthListImg = (_listImg$length = listImg == null ? void 0 : listImg.length) != null ? _listImg$length : 0;

        if (lengthListImg) {
          const JSZip = (await Promise.resolve().then(() => _interopRequireWildcard(require('jszip')))).default;
          const zip = new JSZip();
          const img = zip.folder("images");

          for (let i = 0; i < lengthListImg; i += 1) {
            const {
              currentSrc
            } = listImg[i];
            const arrName = currentSrc.split("/");
            const lengthArrName = arrName.length - 1;
            const data = await fetchData(currentSrc);
            img == null ? void 0 : img.file(arrName[lengthArrName], data, {
              base64: true
            });
          }

          await zip.generateAsync({
            type: "blob"
          }).then(content => {
            // see FileSaver.js
            (0, _fileSaver.saveAs)(content, "dataImage.zip");
          });
        }
      }

      setDisableBtn(false);
    } catch (error) {
      setDisableBtn(false);
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      ref: refContainer,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          maxWidth: '740px',
          margin: '0 auto'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
          children: [!!tags && !!(tags != null && tags.length) && tags.map((tag, idx) => {
            var _tag$title, _tag$color;

            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
              sx: {
                display: 'inline-block',
                marginRight: '4px'
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tags.default, {
                title: typeof (tag == null ? void 0 : tag.title) === 'string' ? tag == null ? void 0 : (_tag$title = tag.title) == null ? void 0 : _tag$title.toUpperCase() : tag == null ? void 0 : tag.title,
                color: (_tag$color = tag == null ? void 0 : tag.color) != null ? _tag$color : ''
              })
            }, idx);
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            sx: {
              margin: '24px 0 32px 0',
              maxWidth: "644px"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
              component: "h1",
              variant: 'h2',
              color: _colors.default.primary.dark,
              sx: {
                wordBreak: "break-word"
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
                component: "div",
                value: title
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
            sx: {
              display: 'flex',
              justifyContent: date != null && date.value ? 'space-between' : 'flex-end',
              alignItems: layoutBlog ? 'center' : 'end'
            },
            children: [(date == null ? void 0 : date.value) && !layoutBlog && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "l2",
                color: _colors.default.otherColor.silver,
                children: (date == null ? void 0 : date.text) && ((_ref = date == null ? void 0 : date.text) != null ? _ref : '').toUpperCase()
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                  variant: "p5",
                  color: _colors.default.otherColor.silver,
                  sx: {
                    textTransform: "uppercase"
                  },
                  children: date == null ? void 0 : date.value
                })
              })]
            }), layoutBlog && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
              sx: {
                display: 'flex',
                alignItems: 'center'
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
                sx: {
                  minWidth: '55px',
                  width: '55px',
                  height: '55px',
                  borderRadius: '100%',
                  overflow: 'hidden',
                  '& img': {
                    display: 'block',
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }
                },
                children: mainImageAvatarNext || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                  src: mainImageAvatar,
                  alt: typeof title === "string" ? title : ""
                })
              }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
                sx: {
                  marginLeft: '12px',
                  marginRight: "4px",
                  '& p': {
                    margin: '0px'
                  }
                },
                children: [(userInfo == null ? void 0 : userInfo.name) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                  variant: 'p7',
                  color: _colors.default.primary.bandaiNamcoBlack,
                  sx: {
                    textTransform: 'uppercase',
                    '& div': {
                      textTransform: 'uppercase',
                      fontSize: '12px',
                      lineHeight: '18px'
                    },
                    '& p': {
                      fontSize: '12px',
                      lineHeight: '18px'
                    }
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
                    component: "p",
                    value: userInfo == null ? void 0 : userInfo.name
                  })
                }), (userInfo == null ? void 0 : userInfo.position) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
                  sx: {
                    '& p': {
                      fontSize: '12px',
                      lineHeight: '18px'
                    }
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                    variant: 'p8',
                    color: _colors.default.neutral.neutral2,
                    sx: {
                      fontSize: '12px',
                      lineHeight: '18px'
                    },
                    children: userInfo == null ? void 0 : userInfo.position
                  })
                }), (date == null ? void 0 : date.value) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
                  sx: {
                    marginTop: '8px',
                    '& p': {
                      fontWeight: '600',
                      fontSize: '10px'
                    }
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                    variant: "l2",
                    color: _colors.default.neutral.neutral2,
                    sx: {
                      fontWeight: '600',
                      fontSize: '10px'
                    },
                    children: date == null ? void 0 : date.value
                  })
                })]
              })]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(SocialShare, (0, _extends2.default)({}, socialShareProps, {
              positionShowCopy: "right",
              label: ""
            }))]
          }), !layoutBlog && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
            children: [(!!(store != null && store.url) || !!(store != null && store.title)) && !!timeRange && !isProtect && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
              sx: {
                marginTop: "32px",
                display: "flex",
                flexDirection: "column",
                "& a": {
                  width: "fit-content"
                },
                "& button": {
                  width: "fit-content"
                }
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
                sx: {
                  display: "flex",
                  alignItems: "center"
                },
                children: [_IconCalendar || (_IconCalendar = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconCalendar, {})), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                  variant: "p3",
                  sx: {
                    fontWeight: 600,
                    marginLeft: "16px",
                    lineHeight: {
                      xs: "22px",
                      md: "24px"
                    }
                  },
                  children: timeRange
                })]
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
                variant: "primaryDark",
                externalLink: (store == null ? void 0 : store.url) || "",
                sx: {
                  marginTop: "24px"
                },
                children: store == null ? void 0 : store.title
              })]
            }), !timeRange && hadTagDownload && !isProtect && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
              sx: {
                marginTop: "32px",
                "& button": {
                  width: "fit-content"
                }
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Button.default, {
                variant: "primaryDark",
                onClick: handleDownload,
                sx: {
                  '& svg': {
                    width: '22px'
                  }
                },
                disabled: disableBtn,
                children: [downloadTitle, disableBtn && /*#__PURE__*/(0, _jsxRuntime.jsx)(IconLoadingSVG, {})]
              })
            })]
          })]
        })
      })
    }), hideMasthead && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        width: "100%",
        minHeight: "260px",
        paddingBottom: "51.1%",
        position: "relative",
        marginTop: {
          xs: "72px",
          md: "64px"
        }
      },
      children: !idVideo ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          position: "absolute",
          top: "0px",
          left: "0px",
          bottom: "0px",
          right: "0px",
          width: "100%",
          height: "100%",
          maxHeight: "100vh",
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
        children: mainImageNext || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: mainImage,
          alt: typeof title === "string" ? title : ""
        })
      }) :
      /*#__PURE__*/
      // {/* video */}
      (0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          position: "absolute",
          top: "0px",
          left: "0px",
          bottom: "0px",
          right: "0px",
          width: "100%",
          height: "100%",
          maxHeight: "100vh",
          overflow: "hidden",
          "& iframe": {
            width: {
              xs: "100%",
              lg: '130%',
              xl: '100vw'
            },
            height: {
              xs: "100%",
              lg: '120%',
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
            pointerEvents: {
              xs: 'auto',
              ld: 'none'
            }
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("iframe", {
          id: "ytplayer",
          frameBorder: "0",
          loading: "lazy",
          allowFullScreen: true,
          allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
          title: typeof title === "string" ? title : idVideo,
          width: "100%",
          height: "100%",
          src: `https://www.youtube.com/embed/${idVideo}?autoplay=1&amp;loop=1&amp;playlist=${idVideo}&amp;mute=1&amp;hd=1&amp;controls=0&amp;rel=0&amp;fs=0&amp;enablejsapi=1&amp;origin=https%3A%2F%2Fbandainamcoent.asia&amp;widgetid=1`
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      ref: refSubHeader,
      sx: {
        position: "fixed",
        top: "-200px",
        left: "0px",
        width: "100%",
        height: "fix-content",
        zIndex: "10",
        transition: "top 0.3s",
        opacity: 0
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(SubHeader, {
        tags: tags,
        title: title,
        socialShareProps: socialShareProps
      })
    })]
  });
};

var _default = HeaderArticle;
exports.default = _default;
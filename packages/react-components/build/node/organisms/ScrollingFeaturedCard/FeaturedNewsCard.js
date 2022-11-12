"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Tags = _interopRequireDefault(require("../../atoms/Tags"));

var _omit = _interopRequireDefault(require("lodash/omit"));

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _material = require("@mui/material");

var _utils = require("../../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Types
// define function
function FeaturedNewsCard(props) {
  var _button$, _button$2, _button$3, _button$4, _button$5, _button$6;

  const {
    mainImageNext = '',
    mainImage = '',
    title,
    tags,
    date,
    linkHref = '/',
    description = '',
    variant = 'horizontal',
    onScrolling = false,
    button,
    sx = {},
    isLayoutBlog = false,
    language,
    hrefTag = "/",
    trailers,
    setOpenTrailerPopup = () => {}
  } = props;
  (0, _omit.default)(props, ['variant']);
  const isMobile = (0, _material.useMediaQuery)(themes => themes.breakpoints.down('lg'));
  const isMobileSmallest = (0, _material.useMediaQuery)('(max-width:321px)', {
    noSsr: true
  });
  const isMobileBigger = (0, _material.useMediaQuery)('(min-width:322px)', {
    noSsr: true
  }); // const isMobileXS = useMediaQuery((themes: any) => themes.breakpoints.up('xs'));

  const isMobileTablet = (0, _material.useMediaQuery)(themes => themes.breakpoints.up('sm')); // const isDesktop = useMediaQuery((themes: any) => themes.breakpoints.up('lg'));

  const refT = (0, _react.useRef)("");
  const refTimeOut = (0, _react.useRef)(""); // const handleDetectMaxHeight = () => {
  // maxHeight: {
  //   xs: variant === 'vertical' ? '311px' : '200px',
  //   sm: variant === 'vertical' ? '311px' : '200px',
  //   lg: variant === 'vertical' ? '306px' : '488px',
  // },
  //   if (variant === 'vertical') {
  //     if (isMobileSmallest) {
  //       return '251px'
  //     }
  //     if (isMobileBigger) {
  //       return '311px'
  //     }
  //   } else {
  //     if (isDesktop) {
  //       return '488px'
  //     } if (isMobileXS) {
  //       return ' 200px'
  //     }
  //   }
  // }
  // eslint-disable-next-line consistent-return

  const handleWidthHeight = () => {
    // width: onScrolling ? {
    //   xs: "311px",
    //   md: "511px"
    // } : "100%",
    if (onScrolling) {
      if (isMobileSmallest) {
        return '251px';
      }

      if (isMobileTablet) {
        return '511px';
      }

      if (isMobileBigger) {
        return '311px';
      }
    } else {
      return '100%';
    }
  };

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const T = refT.current;
      T.style.height = `auto`;

      if (T) {
        const {
          height
        } = T.getBoundingClientRect();
        T.style.height = `${height + (isMobile ? 3 : 5)}px`;
      }

      ;
      window.addEventListener("resize", () => {
        T.style.height = `auto`;

        if (refTimeOut.current) {
          window.clearTimeout(refTimeOut.current);
        }

        refTimeOut.current = setTimeout(() => {
          refTimeOut.current = undefined;
          const {
            height
          } = T.getBoundingClientRect();
          T.style.height = `${height + (isMobile ? 3 : 5)}px`;
        }, 100);
      });
    }

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [isMobile]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: (0, _extends2.default)({
      display: variant === 'vertical' ? 'block' : 'flex',
      alignItems: "center",
      flexDirection: {
        xs: 'column',
        lg: 'row'
      },
      width: onScrolling ? {
        md: "100%",
        lg: "810px",
        xl: "1043px"
      } : "100%",
      mixWidth: onScrolling ? {
        md: "100%",
        lg: "810px",
        xl: "1043px"
      } : "auto",
      overflow: "hidden"
    }, sx),
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        // maxHeight: handleDetectMaxHeight(),
        maxHeight: {
          xs: variant === 'vertical' ? '174px' : '200px',
          sm: variant === 'vertical' ? '306px' : '200px',
          lg: variant === 'vertical' ? '306px' : '488px'
        },
        transform: 'rotate(0)',
        minWidth: handleWidthHeight(),
        // minWidth: onScrolling ? {
        //   xs: "311px",
        //   md: "511px"
        // } : "auto",
        borderRadius: "10px",
        lineHeight: "0px",
        overflow: "hidden",
        "& a": {
          width: "100%",
          height: "100%"
        },
        "& span": {
          width: "100% !important",
          height: "100% !important"
        },
        '& img': {
          objectFit: 'cover',
          borderRadius: '10px',
          display: 'block',
          width: '100%',
          height: {
            xs: variant === 'vertical' ? '174px' : '200px',
            sm: variant === 'vertical' ? '306px' : '200px',
            lg: variant === 'vertical' ? '306px' : '488px'
          },
          transform: "scale(1)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.2)"
          }
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
        href: linkHref,
        sx: {
          borderRadius: "10px",
          overflow: 'hidden'
        },
        children: mainImageNext || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: mainImage,
          alt: title != null ? title : ''
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        minHeight: "130px",
        maxWidth: {
          xs: "311px",
          md: "511px"
        },
        marginLeft: {
          xs: '0',
          lg: variant === 'vertical' ? '0px' : '32px',
          xl: variant === 'vertical' ? '0px' : '48px'
        },
        marginTop: {
          xs: '20px',
          lg: variant === 'vertical' ? '24px' : '0px'
        }
      },
      children: [typeof tags[0].title === 'string' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "-4px",
          marginBottom: '12px'
        },
        children: tags == null ? void 0 : tags.map((tag, idx) => {
          var _tag$title, _tag$color;

          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              display: 'flex',
              width: "fit-content",
              marginRight: "4px",
              marginTop: "4px"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
              href: `${hrefTag}?tag=${(0, _utils.convertCustomTagForFilter)((tag == null ? void 0 : tag.title) || "")}`,
              sx: {
                textDecoration: "none"
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tags.default, {
                title: tag == null ? void 0 : (_tag$title = tag.title) == null ? void 0 : _tag$title.toUpperCase(),
                color: (_tag$color = tag.color) != null ? _tag$color : ''
              })
            })
          }, tag.title + idx);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          maxWidth: variant === 'vertical' ? '547px' : '474px',
          // margin: description ? '0px 0px 12px 0' : '0px',
          margin: '0px 0px 12px 0',
          '& div': {
            height: {
              xs: '52px',
              md: variant === 'vertical' ? '64px' : '169px'
            },
            display: '-webkit-box'
          },
          '& a': {
            textDecoration: 'none'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
          href: linkHref,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h6",
            color: _colors.default.primary.dark,
            ref: refT,
            sx: {
              wordBreak: "break-word",
              letterSpacing: '0px',
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: {
                xs: 2,
                md: 3
              }
            },
            children: title
          })
        })
      }), !isLayoutBlog && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          maxWidth: {
            xs: variant === 'vertical' ? '547px' : 'auto',
            md: variant === 'vertical' ? '474px' : 'auto'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p6",
          color: _colors.default.neutral.neutral2,
          sx: {
            WebkitLineClamp: {
              xs: 2
            },
            height: {
              xs: '40px',
              md: '52px'
            },
            wordBreak: "break-word",
            letterSpacing: '0px',
            display: '-webkit-box',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            '& div': {
              WebkitLineClamp: {
                xs: 2 // md: variant === 'vertical' ? 2 : 3,

              },
              height: {
                xs: '40px',
                md: '52px'
              },
              wordBreak: "break-word",
              letterSpacing: '0px',
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical'
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
            component: "div",
            value: description
          })
        })
      }), typeof tags[0].title !== 'string' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: {
            xs: '18px',
            md: '24px'
          },
          gap: '12px',
          '& .bgTag': {
            backgroundColor: 'transparent',
            border: `1px solid ${_colors.default.neutral.neutral2}`
          },
          '& > div > div': {
            '&:hover': {
              backgroundColor: 'transparent',
              '& p': {
                color: _colors.default.neutral.neutral2
              }
            },
            '& p': {
              color: _colors.default.neutral.neutral2
            }
          }
        },
        children: tags == null ? void 0 : tags.map((tag, index) => {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              lineHeight: "0px"
            },
            children: tag.title
          }, index);
        })
      }), description && isLayoutBlog && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          maxWidth: {
            xs: '547px',
            md: '474px'
          },
          marginTop: {
            xs: '12px',
            md: '28px'
          },
          marginBottom: {
            xs: '20px'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p8",
          color: _colors.default.neutral.neutral2,
          sx: {
            WebkitLineClamp: 4,
            height: {
              xs: '77px',
              md: '87px'
            },
            wordBreak: "break-word",
            letterSpacing: '0px',
            display: '-webkit-box',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
            component: "div",
            value: description
          })
        })
      }), !!date && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          marginTop: "24px",
          marginBottom: {
            xs: '48px',
            lg: '0px'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "l2",
          color: _colors.default.neutral.neutral2,
          children: date == null ? void 0 : date.toUpperCase()
        })
      }), !!language && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          marginTop: {
            xs: '16px',
            md: '24px'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "l2",
          color: _colors.default.neutral.neutral2,
          children: language
        })
      }), button && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        className: "button-card",
        sx: {
          display: 'flex',
          width: '100%',
          marginTop: {
            md: '40px',
            xs: '28px'
          },
          gap: {
            xs: '12px',
            md: '16px'
          },
          '& button': {
            width: {
              xs: '50%',
              md: 'fit-content'
            }
          }
        },
        children: [button[0] && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, button[0], {
          variant: (_button$ = button[0]) == null ? void 0 : _button$.variant,
          target: (_button$2 = button[0]) == null ? void 0 : _button$2.target,
          sx: {
            width: {
              xs: "50%",
              md: "fit-content"
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p5",
            sx: {
              wordBreak: "break-word"
            },
            children: (_button$3 = button[0]) == null ? void 0 : _button$3.label
          })
        })), button[1] && !!(trailers != null && trailers.length) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
          variant: (_button$4 = button[1]) == null ? void 0 : _button$4.variant,
          target: (_button$5 = button[1]) == null ? void 0 : _button$5.target,
          onClick: () => setOpenTrailerPopup(true),
          sx: {
            width: {
              xs: "50%",
              md: "fit-content"
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p5",
            sx: {
              wordBreak: "break-word"
            },
            children: (_button$6 = button[1]) == null ? void 0 : _button$6.label
          })
        })]
      })]
    })]
  });
}

var _default = /*#__PURE__*/_react.default.memo(FeaturedNewsCard);

exports.default = _default;
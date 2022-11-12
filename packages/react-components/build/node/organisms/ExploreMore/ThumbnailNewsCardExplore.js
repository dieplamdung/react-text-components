"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _Link = _interopRequireDefault(require("@mui/material/Link"));

var _material = require("@mui/material");

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Tags = _interopRequireDefault(require("../../atoms/Tags"));

var _viewport = require("../../utils/viewport");

var _utils = require("../../utils");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import Modules
// import Styles
const ThumbnailNewsCardExplore = props => {
  var _tag$color;

  const {
    mainImageNext = '',
    mainImage = '',
    title,
    tags = [],
    linkHref = '/',
    publicDate = '',
    hrefTag = "/",
    isBlog = false
  } = props;
  const theme = (0, _material.useTheme)();
  const isMobileDown = (0, _material.useMediaQuery)((0, _viewport.MobileDown)(theme));
  const [tag, setTag] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (tags != null && tags.length) {
      setTag(tags[0]);
    }
  }, [tags]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      flex: "1",
      maxWidth: {
        xs: '100%',
        md: '209.3px',
        lg: "357px"
      },
      minWidth: {
        xs: '300px',
        md: 'auto'
      },
      display: "flex",
      flexDirection: isMobileDown ? "row" : "column"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        maxWidth: {
          xs: '100%',
          md: '357px'
        },
        minWidth: "110px",
        height: isMobileDown ? "100px" : "auto",
        paddingBottom: isMobileDown ? "0px" : '85%',
        borderRadius: '10px',
        overflow: "hidden",
        maxHeight: '307px',
        position: 'relative',
        transform: 'rotate(0)',
        '& img': {
          position: "absolute",
          objectFit: 'cover',
          borderRadius: '10px',
          display: 'block',
          width: '100%',
          height: '100%',
          transform: "scale(1)",
          transition: "all 0.5s",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          "&:hover": {
            transform: "scale(1.2)"
          }
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
        href: linkHref,
        sx: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          "& span": {
            width: '100% !important',
            height: '100% !important'
          }
        },
        children: mainImageNext || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: mainImage,
          alt: title != null ? title : ''
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        marginTop: {
          xs: '0px',
          md: '20px'
        },
        marginLeft: {
          xs: '12px',
          md: '0px'
        }
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        children: !!(tags != null && tags.length) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          className: "tagCustom",
          sx: {
            display: 'inline-block',
            marginRight: '4px'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
            href: `${hrefTag}?tag=${(0, _utils.convertCustomTagForFilter)((tag == null ? void 0 : tag.title) || "", isBlog)}`,
            sx: {
              textDecoration: "none"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tags.default, {
              title: tag == null ? void 0 : tag.title,
              color: (_tag$color = tag == null ? void 0 : tag.color) != null ? _tag$color : ''
            })
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            sx: {
              marginTop: "8px"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
              href: linkHref,
              sx: {
                '& div': {
                  overflow: "hidden",
                  wordBreak: "break-word",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  "-webkit-line-clamp": "2",

                  /* number of lines to show */
                  lineClamp: "2",
                  "-webkit-box-orient": "vertical"
                },
                textDecoration: 'none'
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "h6",
                color: _colors.default.primary.bandaiNamcoBlack,
                sx: {
                  fontSize: {
                    xs: '16px',
                    lg: '20px'
                  },
                  lineHeight: {
                    xs: '22px',
                    lg: '26px'
                  }
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
                  component: "div",
                  value: title
                })
              })
            })
          }), publicDate && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "l2",
            color: _colors.default.neutral.neutral2,
            sx: {
              marginTop: {
                xs: "12px",
                md: '24px'
              }
            },
            children: publicDate.toUpperCase()
          })]
        })
      })]
    })]
  });
};

var _default = ThumbnailNewsCardExplore;
exports.default = _default;
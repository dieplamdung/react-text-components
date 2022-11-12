"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Link = _interopRequireDefault(require("@mui/material/Link"));

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Tags = _interopRequireDefault(require("../../atoms/Tags"));

var _utils = require("../../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import modules
// Types
// define function
const HorizontalNewsCard = props => {
  const {
    mainImage = '',
    title,
    tags = [],
    date,
    linkHref = '/',
    nextImage,
    hrefTag = ""
  } = props;
  const IMG_ERROR = "https://images.ctfassets.net/hnoi7ctzfs57/1Flq5y1eK7lSIaYUx3FmQE/5a8f5b56e795dddbdfb4c2dff2bf47ad/placeholder.webp";
  const [urlImage, setUrlImage] = (0, _react.useState)("");
  (0, _react.useEffect)(() => {
    setUrlImage(mainImage);
  }, [mainImage]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: 'flex'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        width: {
          xs: '110px',
          md: '357px'
        },
        transform: 'rotate(0)',
        flex: {
          xs: '0 0 110px',
          md: '0 0 357px'
        },
        height: {
          xs: '100px',
          md: '250px'
        },
        borderRadius: '10px',
        overflow: "hidden",
        '& img': {
          objectFit: 'cover',
          borderRadius: '10px',
          display: 'block',
          width: '100%',
          height: '100%',
          transform: "scale(1)",
          transition: "all 0.5s",
          "&:hover": {
            transform: "scale(1.2)"
          }
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
        href: linkHref,
        sx: {
          width: "100%",
          height: "100%",
          "& span": {
            width: "100% !important",
            height: "100% !important"
          }
        },
        children: typeof nextImage === 'function' ? nextImage(urlImage, 357, 250) : /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: urlImage,
          alt: title != null ? title : '',
          onError: () => setUrlImage(IMG_ERROR)
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: {
          xs: '12px',
          md: '48px'
        }
      },
      children: [!!(tags != null && tags.length) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: "flex",
          width: "100%",
          flexWrap: "wrap"
        },
        children: tags == null ? void 0 : tags.map((tag, idx) => {
          var _tag$color;

          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              marginRight: '4px'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
              href: `${hrefTag}?tag=${(0, _utils.convertCustomTagForFilter)(tag.title)}`,
              sx: {
                textDecoration: "none"
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tags.default, {
                title: tag.title,
                color: (_tag$color = tag.color) != null ? _tag$color : _colors.default.secondary.bandaiNamcoYellow
              })
            })
          }, tag.title + idx);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          maxWidth: '557px',
          marginTop: {
            xs: '8px',
            md: '16px'
          },
          '& div': {
            WebkitLineClamp: {
              xs: 2,
              md: 3
            },
            lineHeight: {
              xs: "20px",
              md: "30px"
            },
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            height: {
              xs: '40px',
              md: '91px'
            },
            display: '-webkit-box'
          },
          '& a': {
            textDecoration: 'none'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
          href: linkHref,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h6",
            color: _colors.default.primary.bandaiNamcoBlack,
            sx: {
              wordBreak: "break-word"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
              component: "div",
              value: title
            })
          })
        })
      }), !!date && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          marginTop: {
            xs: '12px',
            md: '35px'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p9",
          color: _colors.default.neutral.neutral2,
          sx: {
            fontWeight: "600"
          },
          children: date.toUpperCase()
        })
      })]
    })]
  });
};

var _default = /*#__PURE__*/_react.default.memo(HorizontalNewsCard);

exports.default = _default;
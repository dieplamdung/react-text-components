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

var _Tags = _interopRequireDefault(require("../../atoms/Tags"));

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _material = require("@mui/material");

var _utils = require("../../utils");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Modules
// Styles
// Types
const RelatedGameCard = props => {
  var _ref;

  const {
    mainImageNext,
    mainImage = '',
    title = '',
    tags,
    tagBg = false,
    description = '',
    date = '',
    href = "/",
    hrefTag = "/",
    isIcon = false,
    isBlog = false
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      backgroundColor: _colors.default.primary.bandaiNamcoWhite,
      borderRadius: '20px',
      overflow: 'hidden',
      width: "100%",
      transform: 'rotate(0)',
      maxWidth: {
        xs: '311px',
        md: '357px'
      },
      height: '100%'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        maxWidth: '100%',
        position: 'relative',
        paddingBottom: '57%',
        overflow: 'hidden',
        borderRadius: '20px 20px 0 0',
        // flex: {
        //   xs: '0 0 201px',
        //   md: '309px 368px 117px'
        // },
        "& a": {
          height: "100% !important",
          width: "100% !important",
          lineHeight: "0px"
        },
        "& span": {
          height: "100% !important",
          width: "100% !important"
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
        href: href,
        sx: {
          textDecoration: "none",
          lineHeight: "0px"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          sx: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            '& img': {
              objectFit: 'cover',
              borderRadius: '20px 20px 0 0',
              display: 'block',
              width: '100%',
              height: '100%',
              transform: "scale(1)",
              transition: "all 0.3s ease-in-out",
              maxHeight: {
                xs: '177px',
                md: '203px'
              },
              overflow: 'hidden',
              "&:hover": {
                transform: "scale(1.2)"
              }
            }
          },
          children: mainImageNext || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: mainImage,
            alt: (_ref = title) != null ? _ref : ''
          })
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        padding: {
          xs: tagBg ? '24px 28px  36px 24px' : '24px 28px 62px 28px',
          md: tagBg ? '24px 32px 36px 32px ' : '28px 32px 64px 32px'
        }
      },
      children: [!!(tags != null && tags.length) && !isIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          display: 'flex',
          gap: '5px',
          flexWrap: "wrap",
          marginBottom: '8px'
        },
        children: tags.map((tag, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
          href: `${hrefTag}?tag=${(0, _utils.convertCustomTagForFilter)((tag == null ? void 0 : tag.title) || "", isBlog)}`,
          sx: {
            textDecoration: "none"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tags.default, (0, _extends2.default)({}, tag))
        }, index))
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
          href: href,
          sx: {
            textDecoration: "none",
            lineHeight: "0px"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p1",
            sx: {
              color: _colors.default.primary.bandaiNamcoBlack,
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              overflow: 'hidden'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
              component: "div",
              value: title
            })
          })
        })
      }), description && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p8",
        sx: {
          color: _colors.default.primary.bandaiNamcoBlack,
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: {
            xs: 4,
            md: 3
          },
          overflow: 'hidden',
          marginTop: '16px'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
          component: "div",
          value: description
        })
      }), !!(tags != null && tags.length) && isIcon && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          display: 'flex',
          flexWrap: "wrap",
          marginTop: '10px',
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
              whiteSpace: "nowrap",
              color: _colors.default.neutral.neutral2
            }
          }
        },
        children: tags.map((tag, index) => typeof (tag == null ? void 0 : tag.title) === 'string' ? /*#__PURE__*/(0, _react.createElement)(_Tags.default, (0, _extends2.default)({}, tag, {
          key: index
        })) : tag.title)
      }), date && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          marginTop: {
            xs: '18px',
            md: '26px'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          className: "date",
          variant: "l2",
          color: _colors.default.neutral.neutral2,
          children: date.toUpperCase()
        })
      })]
    })]
  });
};

var _default = /*#__PURE__*/_react.default.memo(RelatedGameCard);

exports.default = _default;
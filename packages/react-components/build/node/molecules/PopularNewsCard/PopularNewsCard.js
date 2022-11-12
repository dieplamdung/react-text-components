"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireDefault(require("react"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Tags = _interopRequireDefault(require("../../atoms/Tags"));

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _material = require("@mui/material");

var _utils = require("../../utils");

var _jsxRuntime = require("react/jsx-runtime");

// import modules
// Types
// define function
const PopularNewsCard = props => {
  const {
    mainImageNext,
    mainImage = '',
    linkHref,
    title,
    tags,
    date,
    hrefTag = ""
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      display: 'flex',
      alignItems: 'center'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        flex: {
          xs: '0 0 110px',
          md: '0 0 190px'
        },
        height: {
          xs: '94px',
          md: '133px'
        },
        borderRadius: '10px',
        overflow: "hidden",
        transform: 'rotate(0)',
        "& a": {
          height: "100% !important"
        },
        "& span": {
          height: "100% !important"
        },
        '& img': {
          objectFit: 'cover',
          display: 'block',
          width: '100%',
          height: '100%',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: "scale(1.2)"
          }
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
        href: linkHref,
        children: mainImageNext || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: mainImage,
          alt: mainImage != null ? mainImage : ''
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        paddingLeft: {
          xs: '16px',
          md: '32px'
        },
        alignItems: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: {
          xs: 'flex-start',
          md: 'center'
        }
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          display: 'flex',
          gap: '4px',
          flexWrap: "wrap"
        },
        children: !!tags && !!tags.length && tags.map((tag, idx) => {
          var _tag$title, _tag$color;

          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
            href: `${hrefTag}?tag=${(0, _utils.convertCustomTagForFilter)((tag == null ? void 0 : tag.title) || "")}`,
            sx: {
              textDecoration: "none"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tags.default, {
              title: tag == null ? void 0 : (_tag$title = tag.title) == null ? void 0 : _tag$title.toUpperCase(),
              color: (_tag$color = tag.color) != null ? _tag$color : ''
            })
          }, tag.title + idx);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          maxWidth: '557px',
          marginTop: {
            xs: '8px',
            md: '12px'
          },
          marginBottom: {
            xs: '10px',
            md: '20px'
          },
          '& a': {
            textDecoration: 'none'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
          href: linkHref,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p5",
            sx: {
              color: _colors.default.primary.bandaiNamcoBlack,
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              wordBreak: "break-word",
              height: {
                xs: '40px',
                md: '52px'
              },
              '& div': {
                display: '-webkit-box',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                wordBreak: "break-word",
                height: {
                  xs: '40px',
                  md: '52px'
                }
              }
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
              component: "p",
              value: title
            })
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p9",
          color: _colors.default.neutral.neutral2,
          sx: {
            fontWeight: "600"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
            component: "p",
            value: date == null ? void 0 : date.toUpperCase()
          })
        })
      })]
    })]
  });
};

var _default = PopularNewsCard;
exports.default = _default;
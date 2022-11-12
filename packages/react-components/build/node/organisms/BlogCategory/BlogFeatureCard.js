"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _Tags = _interopRequireDefault(require("../../atoms/Tags"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

// import modules
// define function
const BlogFeatureCard = props => {
  const {
    mainImageNext = '',
    description,
    mainImage = '',
    title,
    tags,
    date,
    linkHref = '/',
    hrefTag
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: 'flex',
      flexDirection: {
        xs: 'column',
        md: 'row'
      }
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        maxWidth: '601px',
        width: '100%'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          maxWidth: {
            xs: '100%',
            md: '601px'
          },
          minWidth: "110px",
          paddingBottom: '59.99%',
          borderRadius: '10px',
          overflow: "hidden",
          position: 'relative',
          width: '100%',
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
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
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
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: {
          xs: '0px',
          md: '48px'
        },
        marginTop: {
          xs: '20px',
          md: '0px'
        }
      },
      children: [!!tags && !!tags.length && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: "flex",
          width: "100%",
          flexWrap: "wrap"
        },
        children: tags == null ? void 0 : tags.map((tag, idx) => {
          var _tag$title, _tag$color;

          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              marginRight: '4px'
            },
            children: tag.title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
              href: `${hrefTag}?tag=${(tag == null ? void 0 : tag.title) || ""}`,
              sx: {
                textDecoration: "none"
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tags.default, {
                title: tag == null ? void 0 : (_tag$title = tag.title) == null ? void 0 : _tag$title.toUpperCase(),
                color: (_tag$color = tag.color) != null ? _tag$color : _colors.default.secondary.bandaiNamcoYellow
              })
            })
          }, tag.title + idx);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          maxWidth: '557px',
          marginTop: {
            xs: '12px',
            md: '20px'
          },
          '& div': {
            WebkitLineClamp: {
              xs: 2
            },
            lineHeight: {
              md: '40px',
              xs: '26px'
            },
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box'
          },
          '& a': {
            textDecoration: 'none'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
          href: linkHref,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h5",
            color: _colors.default.primary.dark,
            sx: {
              wordBreak: "break-word",
              lineHeight: {
                md: '40px',
                xs: '26px'
              }
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
              component: "div",
              value: title
            })
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          maxWidth: '557px',
          marginTop: {
            xs: '18px',
            md: '28px'
          },
          '& div': {
            WebkitLineClamp: {
              xs: 2,
              md: 3
            },
            lineHeight: {
              xs: "20px",
              md: "26px"
            },
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical',
            display: '-webkit-box'
          },
          '& a': {
            textDecoration: 'none'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
          href: linkHref,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p6",
            color: _colors.default.neutral.neutral2,
            sx: {
              wordBreak: "break-word",
              lineHeight: {
                md: '26px',
                xs: '20px'
              }
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
              component: "div",
              value: description
            })
          })
        })
      }), !!date && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          marginTop: {
            xs: '24px'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p9",
          color: _colors.default.neutral.neutral2,
          children: date.toUpperCase()
        })
      })]
    })]
  });
};

var _default = /*#__PURE__*/_react.default.memo(BlogFeatureCard);

exports.default = _default;
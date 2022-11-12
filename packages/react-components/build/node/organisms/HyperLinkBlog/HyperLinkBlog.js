"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _jsxRuntime = require("react/jsx-runtime");

function HyperLinkBlog(props) {
  const {
    title,
    description,
    mainImageNext,
    mainImage,
    target,
    link
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: 'flex',
      alignItems: 'center',
      padding: '8px',
      border: `1px solid ${_colors.default.neutral.neutral5}`,
      maxWidth: {
        md: '452px',
        xs: '311px'
      },
      width: '100%',
      borderRadius: '10px'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
      target: target != null ? target : '_blank',
      href: link != null ? link : '/',
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          width: {
            xs: '83px',
            md: '98px'
          },
          height: {
            xs: '83px',
            md: '98px'
          },
          borderRadius: '10px',
          overflow: 'hidden',
          transform: 'rotate(0)',
          '& img': {
            position: 'absolute',
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
        children: !!mainImageNext || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: mainImage,
          alt: title != null ? title : ''
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
      target: target != null ? target : '_blank',
      href: link != null ? link : '/',
      sx: {
        textDecoration: 'none',
        marginLeft: '16px'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            '& p': {
              WebkitLineClamp: 1,
              height: '20px',
              wordBreak: "break-word",
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              color: _colors.default.primary.bandaiNamcoBlack,
              fontSize: {
                xs: '14px',
                md: '16px'
              }
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p6",
            color: _colors.default.primary.bandaiNamcoBlack,
            sx: {
              WebkitLineClamp: 1,
              height: '20px',
              wordBreak: "break-word",
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
              component: "div",
              value: title
            })
          })
        }), description && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            '& p': {
              fontSize: '12px',
              color: _colors.default.neutral.neutral4
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p9",
            color: _colors.default.neutral.neutral4,
            sx: {
              WebkitLineClamp: 1,
              height: '14px',
              wordBreak: "break-word",
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              marginTop: '3px'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
              component: "div",
              value: description
            })
          })
        }), link && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
          target: target != null ? target : '_blank',
          href: link,
          sx: {
            textDecoration: 'none',
            color: _colors.default.primary.bandaiNamcoRed,
            display: 'inline-block',
            marginTop: '4px'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p9",
            color: _colors.default.primary.bandaiNamcoRed,
            sx: {
              WebkitLineClamp: 1,
              height: '14px',
              wordBreak: "break-word",
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              marginTop: '4px'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
              component: "div",
              value: link
            })
          })
        })]
      })
    })]
  });
}

var _default = HyperLinkBlog;
exports.default = _default;
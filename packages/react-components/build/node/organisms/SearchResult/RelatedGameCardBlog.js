"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Tags = _interopRequireDefault(require("../../atoms/Tags"));

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _material = require("@mui/material");

var _utils = require("../../utils");

var _jsxRuntime = require("react/jsx-runtime");

// Modules
// Styles
// Types
const RelatedGameCardBlog = props => {
  var _ref;

  const {
    mainImageNext,
    mainImage = '',
    title = '',
    tags,
    date = '',
    href = "/",
    hrefTag = "/",
    isBlog = false,
    description,
    isIcon = false
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      flex: "1",
      maxWidth: {
        xs: '100%',
        md: '209.3px',
        lg: "357px"
      },
      minWidth: {
        xs: '288px',
        md: 'auto'
      },
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        maxWidth: {
          xs: '100%',
          md: '357px'
        },
        minWidth: "110px",
        height: "auto",
        paddingBottom: '70%',
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
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
        href: href,
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
          alt: (_ref = title) != null ? _ref : ''
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        marginTop: '24px'
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

var _default = /*#__PURE__*/_react.default.memo(RelatedGameCardBlog);

exports.default = _default;
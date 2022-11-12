"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _Link = _interopRequireDefault(require("@mui/material/Link"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Tags = _interopRequireDefault(require("../../atoms/Tags"));

var _Icon = require("../../atoms/Icon");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

// Styles
const GalleryCard = props => {
  const {
    img,
    nextImage,
    alt,
    tags,
    play = false,
    description,
    href,
    aspectRatio = '100%',
    color,
    icon
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      height: '100%'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      className: "card",
      sx: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: {
          xs: '10px',
          md: '20px'
        },
        '& a': {
          width: "100%",
          '& img': {
            width: {
              xs: '100%',
              md: "100%"
            },
            aspectRatio,
            borderRadius: {
              xs: '10px',
              md: '20px'
            },
            objectFit: "cover"
          }
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: 'flex',
          flexDirection: 'column'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Link.default, {
          href: href,
          sx: {
            textDecoration: "none",
            position: 'relative',
            display: 'inherit'
          },
          children: [nextImage != null ? nextImage : /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: img || "",
            alt: alt || ""
          }), play && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconPlayVideo, {
            sx: {
              backdropFilter: 'blur(2px)',
              borderRadius: '50%',
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: {
                xs: '44px',
                lg: '57px'
              },
              height: {
                xs: '44px',
                lg: '57px'
              }
            }
          })]
        }), description && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            display: 'flex',
            gap: '6px',
            justifyContent: 'space-between',
            marginTop: '22px'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p6",
            sx: {
              color: color || _colors.default.primary.bandaiNamcoBlack,
              whiteSpace: 'wrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              display: '-webkit-box',
              WebkitLineClamp: {
                xs: 3,
                lg: 1
              }
            },
            children: description
          }), tags && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tags.default, (0, _extends2.default)({}, tags, {
            // hoverPermission purpose to disable hover on tag
            hoverPermission: false
          })), icon && icon]
        })]
      })
    })
  });
};

var _default = GalleryCard;
exports.default = _default;
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

// import Modules
// import Styles
const MediaGalleryCard = props => {
  const {
    img,
    nextImage,
    alt,
    tags,
    play = false,
    description,
    href,
    aspectRatio,
    color,
    icon,
    iconText,
    hideContent
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column',
      height: '100%',
      width: '100%',
      aspectRatio: aspectRatio || '16/9'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      className: "card",
      sx: {
        position: 'relative',
        aspectRatio: aspectRatio || '16/9',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: {
          xs: '10px',
          lg: '20px'
        },
        '& a': {
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          '& img': {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            width: {
              xs: '100%',
              md: "100%"
            },
            aspectRatio: aspectRatio || '16/9',
            borderRadius: {
              xs: '10px',
              lg: '20px'
            },
            objectFit: "cover"
          }
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Link.default, {
        href: href,
        sx: {
          textDecoration: "none",
          display: 'inherit',
          '& span': {
            width: '100% !important',
            height: '100% !important'
          }
        },
        children: [nextImage != null ? nextImage : /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: img,
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
      })
    }), !hideContent && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: 'flex',
          gap: '6px',
          justifyContent: 'space-between',
          marginTop: '22px',
          alignItems: 'center'
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
            maxWidth: {
              xs: '30ch',
              md: '45ch',
              lg: '100ch'
            },
            WebkitLineClamp: {
              xs: 1,
              md: 1
            }
          },
          children: description
        }), tags && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tags.default, (0, _extends2.default)({}, tags, {
          // hoverPermission purpose to disable hover on tag
          hoverPermission: false
        })), icon && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            display: 'inline-flex',
            alignItems: {
              xs: 'flex-end',
              md: 'center'
            },
            gap: '6px',
            '& svg': {
              fontSize: "unset"
            },
            '& path': {
              fill: 'white'
            },
            '& p': {
              borderBottomStyle: 'solid',
              borderBottomWidth: '1px',
              display: 'inline-block'
            }
          },
          children: [icon, iconText && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
            href: iconText == null ? void 0 : iconText.href,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
              variant: "p7",
              sx: {
                color: _colors.default.primary.bandaiNamcoWhite
              },
              children: iconText == null ? void 0 : iconText.label
            })
          })]
        })]
      })
    })]
  });
};

var _default = /*#__PURE__*/_react.default.memo(MediaGalleryCard);

exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _useMediaQuery = _interopRequireDefault(require("@mui/material/useMediaQuery"));

var _jsxRuntime = require("react/jsx-runtime");

const ExploreCard = ({
  title,
  image,
  alt,
  href,
  nextImage
}) => {
  const isMobile = (0, _useMediaQuery.default)(themes => themes.breakpoints.down('lg'));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        width: "100%",
        paddingBottom: "129%",
        borderRadius: {
          xs: "15px",
          md: "17px"
        },
        position: "relative",
        overflow: "hidden",
        "& a": {
          width: "100% !important",
          height: "100% !important",
          textDecoration: "none"
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
        href: href,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            backgroundImage: isMobile ? `url(${image})` : "none",
            backgroundPosition: "center",
            backgroundSize: "cover",
            objectPosition: "center",
            backgroundRepeat: "no-repeat",
            transition: "all 0.5s",
            cursor: "pointer",
            transform: 'rotate(0)',
            borderRadius: {
              xs: "15px",
              md: "17px"
            },
            overflow: "hidden",
            "&:hover": {
              "& img": {
                transform: "scale(1.2)"
              }
            },
            "& span": {
              width: "100% !important",
              height: "100% !important"
            },
            "& img": {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "all 0.5s",
              pointerEvents: "none",
              userSelect: "none",
              borderRadius: {
                xs: "15px",
                md: "17px"
              }
            }
          },
          children: !isMobile && (nextImage || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: image,
            alt: alt || ""
          }))
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
      href: href,
      sx: {
        textDecoration: "none",
        paddingTop: "12px"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p5",
        color: _colors.default.primary.bandaiNamcoBlack,
        sx: {
          height: {
            xs: "40px",
            md: "52px"
          },
          display: '-webkit-box',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: 2,
          wordBreak: "break-word"
        },
        children: title
      })
    })]
  });
};

var _default = /*#__PURE__*/_react.default.memo(ExploreCard);

exports.default = _default;
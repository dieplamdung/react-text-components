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

var _jsxRuntime = require("react/jsx-runtime");

// import Modules
// import Styles
const CardGame = ({
  nextImage,
  title,
  image,
  href,
  isHomePage,
  index = 0
}) => {
  const handleActiveLink = e => {
    var _e$target, _e$target$firstChild;

    (_e$target = e.target) == null ? void 0 : (_e$target$firstChild = _e$target.firstChild) == null ? void 0 : _e$target$firstChild.click();
  };

  const isEven = index % 2 === 0;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      width: {
        xs: isHomePage ? "171px" : `${isEven ? "171px" : "100px"}`,
        md: isHomePage ? "358px" : `${isEven ? "358px" : "209px"}`
      },
      height: {
        xs: "100px",
        md: "209px"
      },
      borderRadius: {
        xs: "10px",
        lg: "20px"
      },
      background: "#00000033",
      position: "relative",
      overflow: "hidden",
      transform: 'rotate(0)',
      "&:hover": {
        "& img": {
          transform: "scale(1.2)"
        }
      },
      "& span": {
        height: "100% !important",
        width: "100% !important"
      },
      "& img": {
        height: "100%",
        width: "100%",
        objectFit: "cover",
        transition: "all 0.3s"
      }
    },
    children: [href && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        position: "absolute",
        top: "0px",
        left: "0px",
        width: "100%",
        height: "100%",
        zIndex: "1",
        background: 'linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0) 37.8%)',
        opacity: 0.5
      },
      onClick: handleActiveLink,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
        href: href,
        sx: {
          opacity: "0"
        }
      })
    }), nextImage || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
      src: image,
      alt: title || ""
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "p1",
      color: _colors.default.primary.bandaiNamcoWhite,
      sx: {
        position: "absolute",
        left: {
          xs: "8px",
          lg: "26px"
        },
        bottom: {
          xs: "12px",
          lg: "22px"
        },
        zIndex: 2,
        maxWidth: "80%",
        WebkitLineClamp: 1,
        display: '-webkit-box',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        WebkitBoxOrient: 'vertical',
        wordBreak: "break-word",
        fontSize: {
          xs: '12px',
          lg: '20px'
        },
        lineHeight: {
          xs: '18px',
          lg: '26px'
        }
      },
      children: title
    })]
  });
};

var _default = CardGame;
exports.default = _default;
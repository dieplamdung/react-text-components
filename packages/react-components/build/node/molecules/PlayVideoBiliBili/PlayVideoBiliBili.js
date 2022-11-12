"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _jsxRuntime = require("react/jsx-runtime");

// import Modules
const PlayVideoBiliBili = ({
  idVideo,
  title,
  className
}) => {
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
    className: className,
    sx: {
      width: "100%",
      height: "100%",
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden',
      "& iframe": {
        width: "100%",
        height: "100%"
      }
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("iframe", {
      allowFullScreen: true,
      loading: "lazy",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      src: `//player.bilibili.com/player.html?aid=${idVideo}&bvid=${idVideo}&cid=839966468&page=1`,
      scrolling: "no",
      frameBorder: "no",
      title: title || ""
    })
  });
};

var _default = /*#__PURE__*/_react.default.memo(PlayVideoBiliBili);

exports.default = _default;
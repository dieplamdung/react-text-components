// import Modules
import React from 'react';
import Box from '@mui/material/Box'; // import Types

import { jsx as _jsx } from "react/jsx-runtime";

var PlayVideoBiliBili = function PlayVideoBiliBili(_ref) {
  var idVideo = _ref.idVideo,
      title = _ref.title,
      className = _ref.className;
  return /*#__PURE__*/_jsx(Box, {
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
    children: /*#__PURE__*/_jsx("iframe", {
      allowFullScreen: true,
      loading: "lazy",
      allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
      src: "//player.bilibili.com/player.html?aid=".concat(idVideo, "&bvid=").concat(idVideo, "&cid=839966468&page=1"),
      scrolling: "no",
      frameBorder: "no",
      title: title || ""
    })
  });
};

export default /*#__PURE__*/React.memo(PlayVideoBiliBili);
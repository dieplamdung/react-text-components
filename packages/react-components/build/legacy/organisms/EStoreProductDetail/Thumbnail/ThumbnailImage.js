var _svg;

import { Box } from '@mui/material';
import React from 'react';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function ThumbnailImage(props) {
  var _props$isSelect = props.isSelect,
      isSelect = _props$isSelect === void 0 ? false : _props$isSelect,
      _props$isFirstChild = props.isFirstChild,
      isFirstChild = _props$isFirstChild === void 0 ? false : _props$isFirstChild,
      typeImg = props.typeImg,
      onClick = props.onClick,
      hrefImg = props.hrefImg;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      height: "84px ",
      width: "135px",
      minWidth: "135px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "3px",
      marginLeft: isFirstChild ? "0px" : "3px",
      border: "1px solid",
      borderColor: isSelect ? "#0169B2" : "transparent",
      borderRadius: "12px",
      position: "relative",
      cursor: "pointer",
      "& img": {
        width: "100%",
        height: "100%",
        borderRadius: "12px",
        objectFit: "cover"
      }
    },
    onClick: onClick,
    children: [/*#__PURE__*/_jsx("img", {
      src: hrefImg || "",
      alt: ""
    }), typeImg === "video" && /*#__PURE__*/_jsx(Box, {
      sx: {
        position: "absolute",
        width: "44px",
        height: "44px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "40px",
        background: "rgba(255, 255, 255, 0.22)",
        backdropFilter: "blur(2px)"
      },
      children: _svg || (_svg = /*#__PURE__*/_jsx("svg", {
        width: "8",
        height: "12",
        viewBox: "0 0 8 12",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: /*#__PURE__*/_jsx("path", {
          d: "M7.84646 6.32991L0.535927 11.9336C0.483993 11.9733 0.423658 11.9961 0.361348 11.9995C0.299038 12.003 0.237085 11.9869 0.18209 11.9531C0.127095 11.9192 0.0811157 11.8688 0.0490497 11.8073C0.0169838 11.7458 3.22248e-05 11.6754 0 11.6037V0.39632C3.22248e-05 0.324595 0.0169838 0.254223 0.0490497 0.192699C0.0811157 0.131175 0.127095 0.0808037 0.18209 0.0469494C0.237085 0.0130952 0.299038 -0.00297422 0.361348 0.000453015C0.423658 0.00388025 0.483993 0.0266759 0.535927 0.0664116L7.84646 5.67009C7.89369 5.7063 7.93242 5.75536 7.9592 5.81291C7.98599 5.87046 8 5.93473 8 6C8 6.06527 7.98599 6.12954 7.9592 6.18709C7.93242 6.24464 7.89369 6.2937 7.84646 6.32991Z",
          fill: "white"
        })
      }))
    })]
  });
}
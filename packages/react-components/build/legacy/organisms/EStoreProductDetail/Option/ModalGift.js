var _IconClose;

import { Box, Modal } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import { IconClose } from "../../../atoms/Icon";
import { disableScrollBody } from "../../../utils/disableScrollBody";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function ModalGift(props) {
  var open = props.open,
      onClose = props.onClose,
      imgGift = props.imgGift;
  var refContent = useRef();
  useEffect(function () {
    setTimeout(function () {
      if (typeof window !== "undefined") {
        var wrapper = refContent.current;

        if (wrapper) {
          var width = wrapper.clientWidth;
          wrapper.style.height = "".concat(width, "px");
        }

        window.addEventListener("resize", function () {
          var wrapperItem = refContent.current;

          if (wrapperItem) {
            var _width = wrapperItem.clientWidth;
            wrapperItem.style.height = "".concat(_width, "px");
          }
        });
      }

      return function () {
        window.removeEventListener("resize", function () {});
      };
    }, 1000);
  }, []);
  useEffect(function () {
    if (typeof window !== "undefined") {
      disableScrollBody(open);
    }
  }, [open]);
  return /*#__PURE__*/_jsx(Modal, {
    open: open,
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      pointerEvents: "auto"
    },
    children: /*#__PURE__*/_jsx(Box, {
      sx: {
        width: "100%",
        height: "100%",
        display: "flex",
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
      },
      onClick: onClose,
      children: /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          width: {
            xs: "90%",
            md: "60%",
            xl: "49%"
          },
          padding: "32px",
          maxWidth: "642px",
          maxHeight: "642px",
          background: "#fff",
          borderRadius: "10px",
          position: "relative",
          "& img": {
            width: "100%",
            height: "calc(100% - 32px)",
            objectFit: "cover"
          }
        },
        ref: refContent,
        onClick: function onClick(e) {
          e.stopPropagation();
        },
        children: [/*#__PURE__*/_jsx(Box, {
          sx: {
            position: "absolute",
            top: "16px",
            right: "16px",
            cursor: "pointer"
          },
          onClick: onClose,
          children: _IconClose || (_IconClose = /*#__PURE__*/_jsx(IconClose, {}))
        }), /*#__PURE__*/_jsx("img", {
          src: imgGift,
          alt: ""
        })]
      })
    })
  });
}
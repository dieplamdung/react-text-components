import _extends from "@babel/runtime/helpers/esm/extends";

var _IconClose;

import { Box, Modal } from '@mui/material';
import React, { useEffect } from 'react';
import { IconClose } from "../../atoms/Icon";
import Tags from "../../atoms/Tags";
import Typography from "../../atoms/Typography";
import SocialShare from "../../molecules/SocialShare";
import colors from "../../theme/colors";
import { disableScrollBody } from "../../utils/disableScrollBody";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var PopupSubHeader = function PopupSubHeader(_ref) {
  var tags = _ref.tags,
      title = _ref.title,
      socialShareProps = _ref.socialShareProps,
      _ref$isOpen = _ref.isOpen,
      isOpen = _ref$isOpen === void 0 ? false : _ref$isOpen,
      onClose = _ref.onClose;
  useEffect(function () {
    if (typeof window !== "undefined") {
      disableScrollBody(isOpen);
    }
  }, [isOpen]);
  return /*#__PURE__*/_jsx(Modal, {
    open: isOpen,
    disableAutoFocus: true,
    onClose: onClose,
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      pointerEvents: "auto"
    },
    children: /*#__PURE__*/_jsxs(Box, {
      sx: {
        width: "90%",
        minHeight: "358px",
        outline: 'none',
        background: colors.primary.bandaiNamcoWhite,
        padding: "28px 28px 72px 28px",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column"
      },
      onClick: function onClick(e) {
        e.stopPropagation();
      },
      children: [/*#__PURE__*/_jsx(Box, {
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "24px"
        },
        onClick: function onClick() {
          return onClose == null ? void 0 : onClose();
        },
        children: _IconClose || (_IconClose = /*#__PURE__*/_jsx(IconClose, {}))
      }), !!(tags != null && tags.length) && /*#__PURE__*/_jsx(Box, {
        sx: {
          marginBottom: "16px"
        },
        children: tags.map(function (tag, idx) {
          var _tag$title, _tag$color;

          return /*#__PURE__*/_jsx(Box, {
            sx: {
              display: 'inline-block',
              marginRight: '4px'
            },
            children: /*#__PURE__*/_jsx(Tags, {
              title: typeof (tag == null ? void 0 : tag.title) === 'string' ? tag == null ? void 0 : (_tag$title = tag.title) == null ? void 0 : _tag$title.toUpperCase() : tag == null ? void 0 : tag.title,
              color: (_tag$color = tag == null ? void 0 : tag.color) != null ? _tag$color : ''
            })
          }, idx);
        })
      }), /*#__PURE__*/_jsx(Typography, {
        variant: "h4",
        sx: {
          marginBottom: "16px"
        },
        children: title
      }), /*#__PURE__*/_jsx(SocialShare, _extends({}, socialShareProps))]
    })
  });
};

export default PopupSubHeader;
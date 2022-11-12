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

const PopupSubHeader = ({
  tags,
  title,
  socialShareProps,
  isOpen = false,
  onClose
}) => {
  useEffect(() => {
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
      onClick: e => {
        e.stopPropagation();
      },
      children: [/*#__PURE__*/_jsx(Box, {
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: "24px"
        },
        onClick: () => onClose?.(),
        children: _IconClose || (_IconClose = /*#__PURE__*/_jsx(IconClose, {}))
      }), !!tags?.length && /*#__PURE__*/_jsx(Box, {
        sx: {
          marginBottom: "16px"
        },
        children: tags.map((tag, idx) => /*#__PURE__*/_jsx(Box, {
          sx: {
            display: 'inline-block',
            marginRight: '4px'
          },
          children: /*#__PURE__*/_jsx(Tags, {
            title: typeof tag?.title === 'string' ? tag?.title?.toUpperCase() : tag?.title,
            color: tag?.color ?? ''
          })
        }, idx))
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
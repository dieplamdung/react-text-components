import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React, { useState, forwardRef, useImperativeHandle, useEffect } from 'react';
import colors from "../../theme/colors";
import { IconClose } from "../../atoms/Icon";
import Container from "../../atoms/Container";
import { disableScrollBody } from "../../utils/disableScrollBody";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
// define function
var Popup = /*#__PURE__*/forwardRef(function (props, ref) {
  var children = props.children,
      maxWidth = props.maxWidth,
      theme = props.theme,
      sxPopup = props.sxPopup,
      _props$isOpen = props.isOpen,
      isOpen = _props$isOpen === void 0 ? false : _props$isOpen,
      _props$isClosed = props.isClosed,
      isClosed = _props$isClosed === void 0 ? function () {} : _props$isClosed,
      _props$isHideIcon = props.isHideIcon,
      isHideIcon = _props$isHideIcon === void 0 ? false : _props$isHideIcon,
      _props$disableClickBa = props.disableClickBackdrop,
      disableClickBackdrop = _props$disableClickBa === void 0 ? false : _props$disableClickBa;

  var _useState = useState(isOpen),
      _useState2 = _slicedToArray(_useState, 2),
      open = _useState2[0],
      setOpen = _useState2[1];

  var handleClose = function handleClose() {
    setOpen(false);
    isClosed(true);
  };

  useImperativeHandle(ref, function () {
    return {
      handleOpen: function handleOpen() {
        setOpen(true);
      }
    };
  });
  useEffect(function () {
    setOpen(isOpen);

    if (typeof window !== "undefined") {
      disableScrollBody(isOpen);
    }
  }, [isOpen]);
  return /*#__PURE__*/_jsx(Modal, {
    open: open,
    onClose: function onClose(_, reason) {
      if (disableClickBackdrop) {
        if (reason !== "backdropClick") {
          handleClose();
        }
      } else {
        handleClose();
      }
    },
    disableAutoFocus: true,
    disableEnforceFocus: true,
    sx: {
      pointerEvents: "auto"
    },
    children: /*#__PURE__*/_jsx(Box, {
      sx: _extends({
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        outline: 'none',
        maxWidth: {
          md: maxWidth || '547px',
          xs: maxWidth || '311px'
        },
        width: '100%',
        padding: '16px',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }, sxPopup),
      children: /*#__PURE__*/_jsxs(Box, {
        id: "box-modal-sa",
        sx: {
          position: 'relative',
          backgroundColor: theme === 'dark' ? colors.otherColor.chathamsBlue : colors.neutral.white,
          padding: {
            xs: '28px 28px 72px',
            md: '34px 34px 100px'
          },
          borderRadius: '16px',
          maxHeight: '90%',
          overflow: 'auto',
          width: '100%',
          '& .MuiTypography-root': {
            paddingLeft: '0px',
            paddingRight: '0px'
          }
        },
        color: colors.secondaryGray.shade600,
        children: [" ", !isHideIcon && /*#__PURE__*/_jsx(Container, {
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              textAlign: 'end',
              paddingBottom: {
                xs: '26px',
                md: '64px'
              }
            },
            children: /*#__PURE__*/_jsx(IconClose, {
              htmlColor: colors.otherColor.silver,
              id: "icon-close",
              onClick: handleClose,
              sx: {
                cursor: 'pointer',
                width: '16px',
                height: '16px'
              }
            })
          })
        }), children]
      })
    })
  });
});
export default Popup;
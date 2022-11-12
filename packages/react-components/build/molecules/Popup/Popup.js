import _extends from "@babel/runtime/helpers/esm/extends";
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
const Popup = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    children,
    maxWidth,
    theme,
    sxPopup,
    isOpen = false,
    isClosed = () => {},
    isHideIcon = false,
    disableClickBackdrop = false
  } = props;
  const [open, setOpen] = useState(isOpen);

  const handleClose = () => {
    setOpen(false);
    isClosed(true);
  };

  useImperativeHandle(ref, () => ({
    handleOpen() {
      setOpen(true);
    }

  }));
  useEffect(() => {
    setOpen(isOpen);

    if (typeof window !== "undefined") {
      disableScrollBody(isOpen);
    }
  }, [isOpen]);
  return /*#__PURE__*/_jsx(Modal, {
    open: open,
    onClose: (_, reason) => {
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
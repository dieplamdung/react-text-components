import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React, { useEffect, useMemo } from 'react';
import HtmlRenderer from "../../atoms/HtmlRenderer";
import { IconClose } from "../../atoms/Icon";
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { disableScrollBody } from "../../utils/disableScrollBody";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// define function
const CEOMessage = ({
  isOpen,
  onClose,
  name,
  position,
  contentMsg
}) => {
  const renderIconClose = useMemo(() => {
    return /*#__PURE__*/_jsx(IconClose, {
      htmlColor: colors.otherColor.silver,
      id: "icon-close",
      sx: {
        position: 'absolute',
        top: {
          xs: "30px",
          md: "'34px'"
        },
        right: {
          xs: "30px",
          md: "'34px'"
        },
        cursor: 'pointer'
      },
      onClick: () => onClose?.(false)
    });
  }, [onClose]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      disableScrollBody(isOpen);
    }
  }, [isOpen]);
  return /*#__PURE__*/_jsx(Modal, {
    open: isOpen,
    onClose: () => onClose?.(),
    disableAutoFocus: true,
    sx: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: {
        xs: "0px 32px",
        md: "0px 60px"
      },
      pointerEvents: "auto"
    },
    children: /*#__PURE__*/_jsx(Box, {
      sx: {
        maxWidth: {
          md: "1116px",
          xs: "100%"
        },
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      },
      children: /*#__PURE__*/_jsxs(Box, {
        id: "box-modal-sa",
        sx: {
          position: 'relative',
          backgroundColor: colors.neutral.white,
          borderRadius: '20px',
          minHeight: "324px",
          margin: "64px 0px",
          maxHeight: "80vh",
          maxWidth: {
            xs: "311px",
            md: "100%"
          },
          width: '100%',
          display: "flex",
          flexDirection: "column",
          padding: {
            xs: "40px 32px 0px 32px",
            md: "64px 50px 0px 50px",
            lg: "64px 91px 0px 91px"
          },
          overflow: 'auto',
          '& .MuiTypography-root': {
            paddingLeft: '0px',
            paddingRight: '0px'
          }
        },
        color: colors.secondaryGray.shade600,
        children: [renderIconClose, /*#__PURE__*/_jsxs(Box, {
          children: [contentMsg?.title && /*#__PURE__*/_jsx(Typography, {
            variant: "h4",
            sx: {
              color: colors.primary.bandaiNamcoBlack
            },
            children: contentMsg?.title
          }), (name || position) && /*#__PURE__*/_jsxs(Box, {
            sx: {
              marginTop: '12px'
            },
            children: [name && /*#__PURE__*/_jsx(Typography, {
              variant: "p5",
              sx: {
                color: colors.neutral.neutral2
              },
              children: name
            }), position && /*#__PURE__*/_jsx(Typography, {
              variant: "p8",
              sx: {
                color: colors.neutral.neutral2,
                marginTop: '4px'
              },
              children: position
            })]
          })]
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            marginTop: '32px',
            maxHeight: {
              xs: '380px',
              md: '500px'
            },
            overflow: 'auto',
            paddingBottom: {
              xs: "28px",
              md: "52px"
            }
          },
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "p2",
            sx: {
              color: colors.neutral.neutral2,
              '& img': {
                borderRadius: '20px',
                objectFit: 'cover',
                width: '100%'
              },
              fontSize: {
                xs: '14px',
                md: '18px'
              },
              lineHeight: {
                xs: '20px',
                md: '26px'
              }
            },
            children: /*#__PURE__*/_jsx(HtmlRenderer, {
              component: "p",
              value: contentMsg?.content
            })
          })
        })]
      })
    })
  });
};

export default CEOMessage;
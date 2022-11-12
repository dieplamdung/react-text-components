import { Box, Link, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import { IconBandaiNamco, IconClose } from "../../atoms/Icon";
import { MobileDown } from "../../utils/viewport";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const Logo = ({
  href,
  onClose
}) => {
  const theme = useTheme();
  const isMobileDown = useMediaQuery(MobileDown(theme));
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: {
        xs: "100%",
        md: "auto"
      },
      display: "flex",
      justifyContent: "space-between",
      alignItems: {
        xs: "center",
        md: "start"
      }
    },
    children: [/*#__PURE__*/_jsx(Link, {
      href: href,
      sx: {
        textDecoration: "none",
        color: "#000000",
        lineHeight: "0px"
      },
      children: /*#__PURE__*/_jsx(IconBandaiNamco, {
        sx: {
          width: "127.96px",
          height: "29px"
        }
      })
    }), isMobileDown && /*#__PURE__*/_jsx(IconClose, {
      htmlColor: "#C1C1C1",
      sx: {
        cursor: "pointer"
      },
      onClick: () => onClose?.()
    })]
  });
};

export default Logo;
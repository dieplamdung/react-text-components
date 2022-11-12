// import modules
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { IconBandaiNamco, IconClose, IconPrevSlide } from "../../atoms/Icon";
import colors from "../../theme/colors"; // Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// define function
const MegaMenuNavigation = ({
  urlLogo,
  isShowLogo = true,
  onClose,
  onBack
}) => {
  const [showLogo, setShowLogo] = useState(isShowLogo);
  useEffect(() => {
    setShowLogo(isShowLogo);
  }, [isShowLogo]);
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: "100%",
      height: "78px",
      background: colors.primary.bandaiNamcoWhite,
      padding: "0px 32px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },
    children: [showLogo ? /*#__PURE__*/_jsx(Link, {
      href: urlLogo || "",
      color: colors.primary.bandaiNamcoBlack,
      children: /*#__PURE__*/_jsx(IconBandaiNamco, {
        sx: {
          width: {
            xs: '110px',
            md: '130px'
          },
          height: {
            xs: '25px',
            md: '32px'
          }
        }
      })
    }) : /*#__PURE__*/_jsxs(Box, {
      sx: {
        "& svg": {
          '&:hover': {
            '& path': {
              stroke: colors.primary.bandaiNamcoBlack
            }
          }
        }
      },
      children: [" ", /*#__PURE__*/_jsx(IconPrevSlide, {
        htmlColor: "transparent",
        onClick: () => onBack?.()
      })]
    }), /*#__PURE__*/_jsx(IconClose, {
      sx: {
        cursor: "pointer"
      },
      onClick: () => onClose?.()
    })]
  });
};

export default MegaMenuNavigation;
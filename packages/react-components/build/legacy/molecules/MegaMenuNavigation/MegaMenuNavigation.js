import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// import modules
import { Link } from '@mui/material';
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import { IconBandaiNamco, IconClose, IconPrevSlide } from "../../atoms/Icon";
import colors from "../../theme/colors"; // Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// define function
var MegaMenuNavigation = function MegaMenuNavigation(_ref) {
  var urlLogo = _ref.urlLogo,
      _ref$isShowLogo = _ref.isShowLogo,
      isShowLogo = _ref$isShowLogo === void 0 ? true : _ref$isShowLogo,
      onClose = _ref.onClose,
      onBack = _ref.onBack;

  var _useState = useState(isShowLogo),
      _useState2 = _slicedToArray(_useState, 2),
      showLogo = _useState2[0],
      setShowLogo = _useState2[1];

  useEffect(function () {
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
        onClick: function onClick() {
          return onBack == null ? void 0 : onBack();
        }
      })]
    }), /*#__PURE__*/_jsx(IconClose, {
      sx: {
        cursor: "pointer"
      },
      onClick: function onClick() {
        return onClose == null ? void 0 : onClose();
      }
    })]
  });
};

export default MegaMenuNavigation;
import _extends from "@babel/runtime/helpers/esm/extends";
// Modules
import React, { useRef, useState } from 'react';
import { Box, Link, useMediaQuery } from '@mui/material';
import Typography from "../../atoms/Typography";
import HtmlRenderer from "../../atoms/HtmlRenderer";
import { IconFb, IconInstagram, IconKakaoTalk, IconLink, IconTwitter, IconWeibo } from "../../atoms/Icon"; // Styles

import colors from "../../theme/colors"; // Types

import { useTheme } from '@mui/styles';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function SocialShare(props) {
  const {
    label,
    fbShare,
    instaShare,
    twShare,
    hrefShare,
    positionShowCopy = 'center',
    weiboShare,
    kakaoShare,
    titleCopiedToClipboard = "Copied to clipboard"
  } = props;
  const [showAlert, setShowAlert] = useState(false);
  const refTimeout = useRef();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const SIZE = {
    width: {
      xs: "15.22px",
      md: "22.83px"
    },
    height: {
      xs: "15.22px",
      md: "22.83px"
    }
  };
  const HOVER = {
    cursor: 'pointer',
    "&:hover": {
      "& svg": {
        "& path": {
          fill: colors.neutral.neutral1
        }
      }
    }
  };
  /**
   * use to copy current link into clipboard
   */

  async function copyToClip() {
    if (typeof window !== 'undefined') {
      var _window, _window$location;

      const location = (_window = window) == null ? void 0 : (_window$location = _window.location) == null ? void 0 : _window$location.href;
      await navigator.clipboard.writeText(location);

      if (!showAlert) {
        setShowAlert(true);
      }

      if (refTimeout.current) {
        window.clearTimeout(refTimeout.current);
      }

      refTimeout.current = setTimeout(() => {
        refTimeout.current = undefined;
        setShowAlert(false);
      }, 1000);
    }
  }

  const handleReturnPosition = () => {
    if (positionShowCopy === "right" && isMobile) {
      return 0;
    }

    if (positionShowCopy === "left" && isMobile) {
      return -108;
    }

    return -54;
  };

  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      display: 'flex',
      flexDirection: 'column'
    },
    children: [label && /*#__PURE__*/_jsx(Typography, {
      variant: "p7",
      color: colors.neutral.neutral4,
      sx: {
        marginBottom: "16px"
      },
      children: /*#__PURE__*/_jsx(HtmlRenderer, {
        component: "p",
        value: label
      })
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: 'flex',
        lineHeight: "0px",
        "& a": {
          marginRight: {
            xs: positionShowCopy === "left" ? "0px" : "24px",
            md: positionShowCopy === "left" ? "0px" : "32px"
          }
        }
      },
      children: [fbShare &&
      /*#__PURE__*/
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      _jsx(Link, {
        sx: HOVER // eslint-disable-next-line no-useless-concat
        ,
        onClick: () => window.open(fbShare, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,' + "width=585,height=511"),
        children: /*#__PURE__*/_jsx(IconFb, {
          sx: _extends({}, SIZE)
        })
      }), instaShare && /*#__PURE__*/_jsx(Link, {
        target: "_blank",
        rel: "noreferrer",
        href: instaShare,
        sx: HOVER,
        children: /*#__PURE__*/_jsx(IconInstagram, {
          sx: _extends({}, SIZE)
        })
      }), twShare && /*#__PURE__*/_jsx(Link, {
        target: "_blank",
        rel: "noreferrer",
        href: twShare,
        sx: HOVER,
        children: /*#__PURE__*/_jsx(IconTwitter, {
          sx: _extends({}, SIZE)
        })
      }), weiboShare && /*#__PURE__*/_jsx(Link, {
        target: "_blank",
        rel: "noreferrer",
        href: weiboShare,
        sx: HOVER,
        children: /*#__PURE__*/_jsx(IconWeibo, {
          sx: _extends({}, SIZE)
        })
      }), kakaoShare && /*#__PURE__*/_jsx(Link, {
        target: "_blank",
        rel: "noreferrer",
        href: kakaoShare,
        sx: HOVER,
        children: /*#__PURE__*/_jsx(IconKakaoTalk, {
          sx: _extends({}, SIZE)
        })
      }), hrefShare && /*#__PURE__*/_jsxs(Box, {
        onClick: copyToClip,
        sx: _extends({
          position: "relative"
        }, HOVER),
        children: [/*#__PURE__*/_jsx(IconLink, {
          sx: _extends({}, SIZE)
        }), /*#__PURE__*/_jsx(Typography, {
          variant: "p8",
          sx: {
            position: "absolute",
            top: "-36px",
            right: `${handleReturnPosition()}px`,
            whiteSpace: "nowrap",
            lineHeight: "18px",
            background: colors.neutral.neutral2,
            padding: "6px 12px",
            borderRadius: "8px",
            boxShadow: "0px 6px 8px rgba(0, 0, 0, 0.15)",
            color: colors.primary.bandaiNamcoWhite,
            transform: showAlert ? "scale(1)" : "scale(0)",
            opacity: showAlert ? "1" : "0",
            transition: "all 0.3s"
          },
          children: titleCopiedToClipboard
        })]
      })]
    })]
  });
}
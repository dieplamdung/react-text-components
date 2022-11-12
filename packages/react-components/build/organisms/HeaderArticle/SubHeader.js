import _extends from "@babel/runtime/helpers/esm/extends";

var _svg;

import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { useState } from 'react';
import Container from "../../atoms/Container";
import Tags from "../../atoms/Tags";
import Typography from "../../atoms/Typography";
import SocialShare from "../../molecules/SocialShare";
import colors from "../../theme/colors";
import { MobileDown } from "../../utils/viewport";
import PopupSubHeader from "./PopupSubHeader";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const SubHeader = ({
  tags,
  title,
  socialShareProps
}) => {
  const theme = useTheme();
  const isMobileDown = useMediaQuery(MobileDown(theme));

  const IconShare = _svg || (_svg = /*#__PURE__*/_jsx("svg", {
    width: "14",
    height: "16",
    viewBox: "0 0 14 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/_jsx("path", {
      d: "M11 10C10.1875 10 9.46875 10.3125 8.90625 10.8438L5.84375 8.90625C6.03125 8.34375 6.03125 7.6875 5.84375 7.125L8.90625 5.1875C9.46875 5.6875 10.1875 6 11 6C12.6562 6 14 4.65625 14 3C14 1.34375 12.6562 0 11 0C9.34375 0 8 1.34375 8 3C8 3.3125 8.03125 3.625 8.125 3.90625L5.0625 5.84375C4.5 5.3125 3.78125 5 3 5C1.34375 5 0 6.34375 0 8C0 9.65625 1.34375 11 3 11C3.78125 11 4.5 10.6875 5.0625 10.1875L8.125 12.125C8.03125 12.4062 8 12.7188 8 13C8 14.6562 9.34375 16 11 16C12.6562 16 14 14.6562 14 13C14 11.3438 12.6562 10 11 10ZM11 1.5C11.8125 1.5 12.5 2.1875 12.5 3C12.5 3.84375 11.8125 4.5 11 4.5C10.1562 4.5 9.5 3.84375 9.5 3C9.5 2.1875 10.1562 1.5 11 1.5ZM3 9.5C2.15625 9.5 1.5 8.84375 1.5 8C1.5 7.1875 2.15625 6.5 3 6.5C3.8125 6.5 4.5 7.1875 4.5 8C4.5 8.84375 3.8125 9.5 3 9.5ZM11 14.5C10.1562 14.5 9.5 13.8438 9.5 13C9.5 12.1875 10.1562 11.5 11 11.5C11.8125 11.5 12.5 12.1875 12.5 13C12.5 13.8438 11.8125 14.5 11 14.5Z",
      fill: "#9F9F9F"
    })
  }));

  const [isOpen, setIsOpen] = useState(false);
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: "100%",
      minHeight: "100px",
      background: colors.primary.bandaiNamcoWhite,
      padding: {
        xs: "16px 0px",
        md: "20px 0px 24px 0px "
      }
    },
    children: [/*#__PURE__*/_jsxs(Container, {
      sx: {
        width: "100%",
        display: "flex",
        flexDirection: "column"
      },
      children: [!!(tags != null && tags.length) && /*#__PURE__*/_jsx(Box, {
        children: tags.map((tag, idx) => {
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
      }), /*#__PURE__*/_jsxs(Box, {
        sx: {
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: '8px'
        },
        children: [/*#__PURE__*/_jsx(Typography, {
          sx: {
            paddingRight: "24px",
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 3,
            overflow: 'hidden'
          },
          variant: "p3",
          children: title
        }), !isMobileDown && /*#__PURE__*/_jsx(SocialShare, _extends({}, socialShareProps, {
          label: "",
          positionShowCopy: "right"
        })), isMobileDown && /*#__PURE__*/_jsx(Box, {
          sx: {
            display: "flex",
            alignItems: "center",
            paddingLeft: "4px",
            "& svg": {
              width: "14px",
              height: "16px"
            },
            "&:hover": {
              "& svg": {
                "& path": {
                  fill: "#4D4D4D"
                }
              }
            }
          },
          onClick: () => setIsOpen(true),
          children: IconShare
        })]
      })]
    }), /*#__PURE__*/_jsx(PopupSubHeader, {
      tags: tags,
      title: title,
      socialShareProps: socialShareProps,
      isOpen: isOpen,
      onClose: () => setIsOpen(false)
    })]
  });
};

export default SubHeader;
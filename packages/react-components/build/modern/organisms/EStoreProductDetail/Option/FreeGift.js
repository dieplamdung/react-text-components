import { Box } from '@mui/material';
import React, { useState } from 'react';
import Typography from "../../../atoms/Typography";
import colors from "../../../theme/colors";
import ModalGift from "./ModalGift";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function FreeGift(props) {
  const {
    title,
    description,
    imgGift,
    titleGift,
    titleTab,
    isOfGift,
    isShowGift // isDisable

  } = props;
  const [open, setOpen] = useState(false);
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      marginTop: "44px",
      padding: {
        xs: "16px",
        md: "24px"
      },
      display: isShowGift ? "flex" : "none",
      flexDirection: "column",
      borderRadius: "8px",
      background: isOfGift ? " #F1F1F1" : "#E6F0F7" // opacity: isDisable ? "0.4" : "1",
      // pointerEvents: isDisable ? "none" : "auto",

    },
    children: [/*#__PURE__*/_jsx(Typography, {
      variant: "p5",
      sx: {
        paddingBottom: "8px"
      },
      children: title
    }), /*#__PURE__*/_jsx(Typography, {
      variant: "p8",
      color: "#7E7E7E",
      children: description
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        width: "100%",
        display: "flex",
        paddingTop: "16px"
      },
      children: [/*#__PURE__*/_jsx(Box, {
        sx: {
          width: "68px",
          height: "68px",
          borderRadius: "8px",
          overflow: "hidden",
          "& img": {
            width: "100%",
            height: "100%",
            borderRadius: "8px"
          },
          cursor: "pointer"
        },
        onClick: () => setOpen(true),
        children: /*#__PURE__*/_jsx("img", {
          src: imgGift,
          alt: "free gift"
        })
      }), /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: "flex",
          flex: 1,
          flexDirection: "column",
          justifyContent: "center",
          paddingLeft: "16px"
        },
        children: [/*#__PURE__*/_jsx(Typography, {
          variant: "p5",
          sx: {
            lineHeight: {
              xs: "20px",
              md: "22px"
            }
          },
          children: titleGift
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            width: "fit-content",
            padding: "4px 8px",
            marginTop: "8px",
            background: colors.neutral.neutral2,
            borderRadius: "5px",
            textTransform: "uppercase",
            color: "#fff",
            fontSize: "10px",
            lineHeight: "14px",
            letterSpacing: "0.2px",
            fontWeight: "700"
          },
          children: titleTab
        })]
      })]
    }), /*#__PURE__*/_jsx(ModalGift, {
      open: open,
      onClose: () => setOpen(false),
      imgGift: imgGift
    })]
  });
}
var _Box;

import { Box, Link, useMediaQuery, useTheme } from '@mui/material';
import React from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { TabletDown } from "../../utils/viewport";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const ResultItem = ({
  title,
  listResult = [],
  isRecent = false,
  onClearRecent = () => {},
  hrefSeeAll = "",
  valueSearch = ""
}) => {
  const theme = useTheme();
  const isTabletDown = useMediaQuery(TabletDown(theme));
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      flex: 1
    },
    children: [/*#__PURE__*/_jsxs(Box, {
      sx: {
        display: "flex",
        justifyContent: "space-between"
      },
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "p7",
        color: colors.neutral.neutral4,
        sx: {
          marginBottom: "8px"
        },
        children: title
      }), isRecent && isTabletDown && /*#__PURE__*/_jsx(Typography, {
        variant: "p5",
        color: colors.neutral.neutral2,
        sx: {
          position: "relative",
          cursor: "pointer",
          width: "fit-content",
          "&::before": {
            content: '" "',
            position: "absolute",
            left: "0px",
            bottom: "0px",
            width: "100%",
            borderBottom: `2px solid ${colors.neutral.neutral2}`
          }
        },
        onClick: onClearRecent,
        children: "Clear all"
      })]
    }), !!listResult.length && listResult.map((item, index) => {
      if (index < 5) {
        return /*#__PURE__*/_jsx(Box, {
          sx: {
            marginBottom: "16px"
          },
          children: /*#__PURE__*/_jsx(Link, {
            href: item.href,
            sx: {
              textDecoration: "none",
              "&:hover": {
                "& p": {
                  "&::after": {
                    width: "100%"
                  }
                }
              }
            },
            children: /*#__PURE__*/_jsx(Typography, {
              variant: "p5",
              color: "#151515",
              sx: {
                width: "fit-content",
                position: "relative",
                "&::after": {
                  content: "' '",
                  position: "absolute",
                  left: "0px",
                  bottom: "0px",
                  width: "0%",
                  transition: "all 0.3s",
                  borderBottom: `1px solid ${colors.neutral.neutral4}`
                }
              },
              children: item.title
            })
          })
        }, index);
      }

      return null;
    }), !isRecent && listResult.length > 5 && /*#__PURE__*/_jsx(Link, {
      href: `${hrefSeeAll}/search?value=${valueSearch}`,
      sx: {
        textDecoration: "none"
      },
      children: /*#__PURE__*/_jsx(Typography, {
        variant: "p5",
        color: colors.neutral.neutral2,
        sx: {
          position: "relative",
          cursor: "pointer",
          width: "fit-content",
          marginBottom: {
            xs: "16px",
            ld: "0px"
          },
          "&::before": {
            content: '" "',
            position: "absolute",
            left: "0px",
            bottom: "0px",
            width: "100%",
            borderBottom: `2px solid ${colors.neutral.neutral2}`
          }
        },
        onClick: onClearRecent,
        children: "See all results"
      })
    }), _Box || (_Box = /*#__PURE__*/_jsx(Box, {}))]
  });
};

export default ResultItem;
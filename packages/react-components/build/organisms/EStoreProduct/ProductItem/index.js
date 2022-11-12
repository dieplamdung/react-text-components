import { Box } from '@mui/material';
import React, { memo } from 'react';
import Typography from "../../../atoms/Typography";
import colors from "../../../theme/colors";
import Tabs from "./Tabs";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function ProductItem(props) {
  var _span;

  const {
    tabList,
    nextLink,
    href,
    hrefImg = "",
    isDLC = false,
    titleDLC,
    listIcon = [],
    language,
    titleGame,
    titleFrom,
    price,
    priceOld,
    isShowBottom = false
  } = props;

  const returnTitle = () => {
    return /*#__PURE__*/_jsxs(Box, {
      sx: {
        position: "relative",
        textDecoration: "none"
      },
      children: [isDLC && /*#__PURE__*/_jsx(Typography, {
        sx: {
          position: "absolute",
          top: "0px",
          left: "0px",
          fontSize: "10px",
          lineHeight: {
            xs: "12px",
            md: "14px"
          },
          padding: "4px 8px 6px 8px",
          borderRadius: "5px",
          fontWeight: "700",
          color: "#fff",
          background: colors.primary.bandaiNamcoBlack,
          textTransform: "uppercase",
          letterSpacing: "0.2px"
        },
        children: titleDLC
      }), /*#__PURE__*/_jsxs(Typography, {
        variant: "p1",
        sx: {
          wordBreak: "break-word",
          overflow: "hidden",
          textOverflow: "ellipsis",
          display: "-webkit-box",
          "-webkit-line-clamp": "2",

          /* number of lines to show */
          lineClamp: "2",
          WebkitBoxOrient: 'vertical',
          "& span": {
            fontSize: "10px",
            lineHeight: "14px",
            padding: "4px 8px 6px 8px",
            borderRadius: "5px",
            fontWeight: "700",
            color: "#fff",
            background: colors.primary.bandaiNamcoBlack,
            opacity: "0",
            marginRight: {
              xs: "4px",
              md: "8px"
            }
          }
        },
        children: [isDLC && (_span || (_span = /*#__PURE__*/_jsx("span", {
          children: titleDLC
        }))), titleGame]
      })]
    });
  };

  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      paddingBottom: isShowBottom ? {} : {
        md: "114px",
        xs: "78px"
      }
    },
    children: [/*#__PURE__*/_jsx(Tabs, {
      tabList: tabList
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        width: "100%",
        paddingBottom: "100%",
        position: "relative",
        overflow: "hidden",
        marginBottom: {
          xs: "20px",
          md: "30px"
        },
        borderRadius: {
          xs: "10px",
          md: "20px"
        },
        "& a": {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%"
        },
        "& span": {
          width: "100% !important",
          height: "100% !important"
        },
        "& img": {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "100%",
          height: "100%",
          objectFit: "cover",
          transition: "all 0.3s",
          "&:hover": {
            transform: "scale(1.2)"
          }
        }
      },
      children: typeof nextLink === 'function' ? nextLink == null ? void 0 : nextLink(href, /*#__PURE__*/_jsx("img", {
        src: hrefImg,
        alt: ""
      })) : /*#__PURE__*/_jsx("img", {
        src: hrefImg,
        alt: ""
      })
    }), typeof nextLink === 'function' ? nextLink == null ? void 0 : nextLink(href, returnTitle()) : returnTitle(), !!(listIcon != null && listIcon.length) && /*#__PURE__*/_jsx(Box, {
      sx: {
        paddingTop: "18px",
        display: "flex",
        gap: "14px",
        flexWrap: "wrap",
        alignItems: "center"
      },
      children: listIcon == null ? void 0 : listIcon.map((item, index) => {
        return /*#__PURE__*/_jsx(React.Fragment, {
          children: /*#__PURE__*/React.createElement(item)
        }, index);
      })
    }), !!language && /*#__PURE__*/_jsx(Typography, {
      variant: "l2",
      color: colors.neutral.neutral2,
      sx: {
        marginTop: "16px",
        textTransform: "uppercase"
      },
      children: language
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        width: "100%",
        display: "flex",
        alignItems: "flex-start",
        paddingTop: {
          xs: "20px",
          md: "16px"
        }
      },
      children: [/*#__PURE__*/_jsx(Typography, {
        color: colors.neutral.neutral2,
        sx: {
          fontSize: "10px",
          lineHeight: "12px",
          letterSpacing: "0.2px",
          fontWeight: "600",
          marginRight: "8px",
          marginTop: {
            xs: "6px",
            md: "8px"
          }
        },
        children: titleFrom
      }), /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row"
          },
          flexWrap: "wrap"
        },
        children: [/*#__PURE__*/_jsx(Typography, {
          variant: "h6",
          color: colors.primary.bandaiNamcoBlack,
          sx: {
            letterSpacing: "-0.6px",
            marginRight: {
              xs: "0px",
              md: "12px"
            }
          },
          children: price
        }), !!priceOld && /*#__PURE__*/_jsx(Typography, {
          color: colors.neutral.neutral2,
          sx: {
            fontSize: "10px",
            lineHeight: "14px",
            letterSpacing: "0.2px",
            fontWeight: "600",
            textDecoration: "line-through",
            marginTop: {
              xs: "2px",
              md: "8px"
            }
          },
          children: priceOld
        })]
      })]
    })]
  });
}

export default /*#__PURE__*/memo(ProductItem);
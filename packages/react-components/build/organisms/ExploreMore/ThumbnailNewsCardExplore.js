// import Modules
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import { useMediaQuery, useTheme } from '@mui/material';
import HtmlRenderer from "../../atoms/HtmlRenderer";
import Typography from "../../atoms/Typography";
import Tags from "../../atoms/Tags";
import { MobileDown } from "../../utils/viewport";
import { convertCustomTagForFilter } from "../../utils"; // import Styles

import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const ThumbnailNewsCardExplore = props => {
  var _tag$color;

  const {
    mainImageNext = '',
    mainImage = '',
    title,
    tags = [],
    linkHref = '/',
    publicDate = '',
    hrefTag = "/",
    isBlog = false
  } = props;
  const theme = useTheme();
  const isMobileDown = useMediaQuery(MobileDown(theme));
  const [tag, setTag] = useState();
  useEffect(() => {
    if (tags != null && tags.length) {
      setTag(tags[0]);
    }
  }, [tags]);
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      flex: "1",
      maxWidth: {
        xs: '100%',
        md: '209.3px',
        lg: "357px"
      },
      minWidth: {
        xs: '300px',
        md: 'auto'
      },
      display: "flex",
      flexDirection: isMobileDown ? "row" : "column"
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        maxWidth: {
          xs: '100%',
          md: '357px'
        },
        minWidth: "110px",
        height: isMobileDown ? "100px" : "auto",
        paddingBottom: isMobileDown ? "0px" : '85%',
        borderRadius: '10px',
        overflow: "hidden",
        maxHeight: '307px',
        position: 'relative',
        transform: 'rotate(0)',
        '& img': {
          position: "absolute",
          objectFit: 'cover',
          borderRadius: '10px',
          display: 'block',
          width: '100%',
          height: '100%',
          transform: "scale(1)",
          transition: "all 0.5s",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          "&:hover": {
            transform: "scale(1.2)"
          }
        }
      },
      children: /*#__PURE__*/_jsx(Link, {
        href: linkHref,
        sx: {
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          width: '100%',
          height: '100%',
          "& span": {
            width: '100% !important',
            height: '100% !important'
          }
        },
        children: mainImageNext || /*#__PURE__*/_jsx("img", {
          src: mainImage,
          alt: title != null ? title : ''
        })
      })
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        marginTop: {
          xs: '0px',
          md: '20px'
        },
        marginLeft: {
          xs: '12px',
          md: '0px'
        }
      },
      children: [/*#__PURE__*/_jsx(Box, {
        children: !!(tags != null && tags.length) && /*#__PURE__*/_jsx(Box, {
          className: "tagCustom",
          sx: {
            display: 'inline-block',
            marginRight: '4px'
          },
          children: /*#__PURE__*/_jsx(Link, {
            href: `${hrefTag}?tag=${convertCustomTagForFilter((tag == null ? void 0 : tag.title) || "", isBlog)}`,
            sx: {
              textDecoration: "none"
            },
            children: /*#__PURE__*/_jsx(Tags, {
              title: tag == null ? void 0 : tag.title,
              color: (_tag$color = tag == null ? void 0 : tag.color) != null ? _tag$color : ''
            })
          })
        })
      }), /*#__PURE__*/_jsx(Box, {
        children: /*#__PURE__*/_jsxs(Box, {
          children: [/*#__PURE__*/_jsx(Box, {
            sx: {
              marginTop: "8px"
            },
            children: /*#__PURE__*/_jsx(Link, {
              href: linkHref,
              sx: {
                '& div': {
                  overflow: "hidden",
                  wordBreak: "break-word",
                  textOverflow: "ellipsis",
                  display: "-webkit-box",
                  "-webkit-line-clamp": "2",

                  /* number of lines to show */
                  lineClamp: "2",
                  "-webkit-box-orient": "vertical"
                },
                textDecoration: 'none'
              },
              children: /*#__PURE__*/_jsx(Typography, {
                variant: "h6",
                color: colors.primary.bandaiNamcoBlack,
                sx: {
                  fontSize: {
                    xs: '16px',
                    lg: '20px'
                  },
                  lineHeight: {
                    xs: '22px',
                    lg: '26px'
                  }
                },
                children: /*#__PURE__*/_jsx(HtmlRenderer, {
                  component: "div",
                  value: title
                })
              })
            })
          }), publicDate && /*#__PURE__*/_jsx(Typography, {
            variant: "l2",
            color: colors.neutral.neutral2,
            sx: {
              marginTop: {
                xs: "12px",
                md: '24px'
              }
            },
            children: publicDate.toUpperCase()
          })]
        })
      })]
    })]
  });
};

export default ThumbnailNewsCardExplore;
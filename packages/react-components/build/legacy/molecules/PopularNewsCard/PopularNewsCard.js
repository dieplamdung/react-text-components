// import modules
import Box from '@mui/material/Box';
import React from 'react';
import colors from "../../theme/colors";
import Typography from "../../atoms/Typography";
import Tags from "../../atoms/Tags";
import HtmlRenderer from "../../atoms/HtmlRenderer"; // Types

import { Link } from '@mui/material';
import { convertCustomTagForFilter } from "../../utils";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// define function
var PopularNewsCard = function PopularNewsCard(props) {
  var mainImageNext = props.mainImageNext,
      _props$mainImage = props.mainImage,
      mainImage = _props$mainImage === void 0 ? '' : _props$mainImage,
      linkHref = props.linkHref,
      title = props.title,
      tags = props.tags,
      date = props.date,
      _props$hrefTag = props.hrefTag,
      hrefTag = _props$hrefTag === void 0 ? "" : _props$hrefTag;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      display: 'flex',
      alignItems: 'center'
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        flex: {
          xs: '0 0 110px',
          md: '0 0 190px'
        },
        height: {
          xs: '94px',
          md: '133px'
        },
        borderRadius: '10px',
        overflow: "hidden",
        transform: 'rotate(0)',
        "& a": {
          height: "100% !important"
        },
        "& span": {
          height: "100% !important"
        },
        '& img': {
          objectFit: 'cover',
          display: 'block',
          width: '100%',
          height: '100%',
          transition: 'all 0.3s ease-in-out',
          '&:hover': {
            transform: "scale(1.2)"
          }
        }
      },
      children: /*#__PURE__*/_jsx(Link, {
        href: linkHref,
        children: mainImageNext || /*#__PURE__*/_jsx("img", {
          src: mainImage,
          alt: mainImage != null ? mainImage : ''
        })
      })
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        paddingLeft: {
          xs: '16px',
          md: '32px'
        },
        alignItems: 'left',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: {
          xs: 'flex-start',
          md: 'center'
        }
      },
      children: [/*#__PURE__*/_jsx(Box, {
        sx: {
          display: 'flex',
          gap: '4px',
          flexWrap: "wrap"
        },
        children: !!tags && !!tags.length && tags.map(function (tag, idx) {
          var _tag$title, _tag$color;

          return /*#__PURE__*/_jsx(Link, {
            href: "".concat(hrefTag, "?tag=").concat(convertCustomTagForFilter((tag == null ? void 0 : tag.title) || "")),
            sx: {
              textDecoration: "none"
            },
            children: /*#__PURE__*/_jsx(Tags, {
              title: tag == null ? void 0 : (_tag$title = tag.title) == null ? void 0 : _tag$title.toUpperCase(),
              color: (_tag$color = tag.color) != null ? _tag$color : ''
            })
          }, tag.title + idx);
        })
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          maxWidth: '557px',
          marginTop: {
            xs: '8px',
            md: '12px'
          },
          marginBottom: {
            xs: '10px',
            md: '20px'
          },
          '& a': {
            textDecoration: 'none'
          }
        },
        children: /*#__PURE__*/_jsx(Link, {
          href: linkHref,
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "p5",
            sx: {
              color: colors.primary.bandaiNamcoBlack,
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              wordBreak: "break-word",
              height: {
                xs: '40px',
                md: '52px'
              },
              '& div': {
                display: '-webkit-box',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                WebkitBoxOrient: 'vertical',
                WebkitLineClamp: 2,
                wordBreak: "break-word",
                height: {
                  xs: '40px',
                  md: '52px'
                }
              }
            },
            children: /*#__PURE__*/_jsx(HtmlRenderer, {
              component: "p",
              value: title
            })
          })
        })
      }), /*#__PURE__*/_jsx(Box, {
        children: /*#__PURE__*/_jsx(Typography, {
          variant: "p9",
          color: colors.neutral.neutral2,
          sx: {
            fontWeight: "600"
          },
          children: /*#__PURE__*/_jsx(HtmlRenderer, {
            component: "p",
            value: date == null ? void 0 : date.toUpperCase()
          })
        })
      })]
    })]
  });
};

export default PopularNewsCard;
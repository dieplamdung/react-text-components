import _extends from "@babel/runtime/helpers/esm/extends";
// Modules
import Box from '@mui/material/Box';
import React from 'react';
import Typography from "../../atoms/Typography";
import Tags from "../../atoms/Tags";
import HtmlRenderer from "../../atoms/HtmlRenderer"; // Styles

import colors from "../../theme/colors"; // Types

import { Link } from '@mui/material';
import { convertCustomTagForFilter } from "../../utils";
import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import { jsxs as _jsxs } from "react/jsx-runtime";

var RelatedGameCard = function RelatedGameCard(props) {
  var _ref;

  var mainImageNext = props.mainImageNext,
      _props$mainImage = props.mainImage,
      mainImage = _props$mainImage === void 0 ? '' : _props$mainImage,
      _props$title = props.title,
      title = _props$title === void 0 ? '' : _props$title,
      tags = props.tags,
      _props$tagBg = props.tagBg,
      tagBg = _props$tagBg === void 0 ? false : _props$tagBg,
      _props$description = props.description,
      description = _props$description === void 0 ? '' : _props$description,
      _props$date = props.date,
      date = _props$date === void 0 ? '' : _props$date,
      _props$href = props.href,
      href = _props$href === void 0 ? "/" : _props$href,
      _props$hrefTag = props.hrefTag,
      hrefTag = _props$hrefTag === void 0 ? "/" : _props$hrefTag,
      _props$isIcon = props.isIcon,
      isIcon = _props$isIcon === void 0 ? false : _props$isIcon,
      _props$isBlog = props.isBlog,
      isBlog = _props$isBlog === void 0 ? false : _props$isBlog;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      backgroundColor: colors.primary.bandaiNamcoWhite,
      borderRadius: '20px',
      overflow: 'hidden',
      width: "100%",
      transform: 'rotate(0)',
      maxWidth: {
        xs: '311px',
        md: '357px'
      },
      height: '100%'
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        maxWidth: '100%',
        position: 'relative',
        paddingBottom: '57%',
        overflow: 'hidden',
        borderRadius: '20px 20px 0 0',
        // flex: {
        //   xs: '0 0 201px',
        //   md: '309px 368px 117px'
        // },
        "& a": {
          height: "100% !important",
          width: "100% !important",
          lineHeight: "0px"
        },
        "& span": {
          height: "100% !important",
          width: "100% !important"
        }
      },
      children: /*#__PURE__*/_jsx(Link, {
        href: href,
        sx: {
          textDecoration: "none",
          lineHeight: "0px"
        },
        children: /*#__PURE__*/_jsx(Box, {
          sx: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            '& img': {
              objectFit: 'cover',
              borderRadius: '20px 20px 0 0',
              display: 'block',
              width: '100%',
              height: '100%',
              transform: "scale(1)",
              transition: "all 0.3s ease-in-out",
              maxHeight: {
                xs: '177px',
                md: '203px'
              },
              overflow: 'hidden',
              "&:hover": {
                transform: "scale(1.2)"
              }
            }
          },
          children: mainImageNext || /*#__PURE__*/_jsx("img", {
            src: mainImage,
            alt: (_ref = title) != null ? _ref : ''
          })
        })
      })
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        padding: {
          xs: tagBg ? '24px 28px  36px 24px' : '24px 28px 62px 28px',
          md: tagBg ? '24px 32px 36px 32px ' : '28px 32px 64px 32px'
        }
      },
      children: [!!(tags != null && tags.length) && !isIcon && /*#__PURE__*/_jsx(Box, {
        sx: {
          display: 'flex',
          gap: '5px',
          flexWrap: "wrap",
          marginBottom: '8px'
        },
        children: tags.map(function (tag, index) {
          return /*#__PURE__*/_jsx(Link, {
            href: "".concat(hrefTag, "?tag=").concat(convertCustomTagForFilter((tag == null ? void 0 : tag.title) || "", isBlog)),
            sx: {
              textDecoration: "none"
            },
            children: /*#__PURE__*/_jsx(Tags, _extends({}, tag))
          }, index);
        })
      }), /*#__PURE__*/_jsx(Box, {
        children: /*#__PURE__*/_jsx(Link, {
          href: href,
          sx: {
            textDecoration: "none",
            lineHeight: "0px"
          },
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "p1",
            sx: {
              color: colors.primary.bandaiNamcoBlack,
              display: '-webkit-box',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              overflow: 'hidden'
            },
            children: /*#__PURE__*/_jsx(HtmlRenderer, {
              component: "div",
              value: title
            })
          })
        })
      }), description && /*#__PURE__*/_jsx(Typography, {
        variant: "p8",
        sx: {
          color: colors.primary.bandaiNamcoBlack,
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: {
            xs: 4,
            md: 3
          },
          overflow: 'hidden',
          marginTop: '16px'
        },
        children: /*#__PURE__*/_jsx(HtmlRenderer, {
          component: "div",
          value: description
        })
      }), !!(tags != null && tags.length) && isIcon && /*#__PURE__*/_jsx(Box, {
        sx: {
          display: 'flex',
          flexWrap: "wrap",
          marginTop: '10px',
          gap: '12px',
          '& .bgTag': {
            backgroundColor: 'transparent',
            border: "1px solid ".concat(colors.neutral.neutral2)
          },
          '& > div > div': {
            '&:hover': {
              backgroundColor: 'transparent',
              '& p': {
                color: colors.neutral.neutral2
              }
            },
            '& p': {
              whiteSpace: "nowrap",
              color: colors.neutral.neutral2
            }
          }
        },
        children: tags.map(function (tag, index) {
          return typeof (tag == null ? void 0 : tag.title) === 'string' ? /*#__PURE__*/_createElement(Tags, _extends({}, tag, {
            key: index
          })) : tag.title;
        })
      }), date && /*#__PURE__*/_jsx(Box, {
        sx: {
          marginTop: {
            xs: '18px',
            md: '26px'
          }
        },
        children: /*#__PURE__*/_jsx(Typography, {
          className: "date",
          variant: "l2",
          color: colors.neutral.neutral2,
          children: date.toUpperCase()
        })
      })]
    })]
  });
};

export default /*#__PURE__*/React.memo(RelatedGameCard);
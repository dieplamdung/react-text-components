// import modules
import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import HtmlRenderer from "../../atoms/HtmlRenderer";
import colors from "../../theme/colors";
import Typography from "../../atoms/Typography";
import Tags from "../../atoms/Tags";
import { convertCustomTagForFilter } from "../../utils";
import DateWithLocal from "./DateWithLocal"; // Types
// define function

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var ThumbnailNewsCard = function ThumbnailNewsCard(props) {
  var _props$mainImageNext = props.mainImageNext,
      mainImageNext = _props$mainImageNext === void 0 ? '' : _props$mainImageNext,
      _props$mainImage = props.mainImage,
      mainImage = _props$mainImage === void 0 ? '' : _props$mainImage,
      title = props.title,
      tags = props.tags,
      fromDate = props.fromDate,
      _props$noDate = props.noDate,
      noDate = _props$noDate === void 0 ? 'STAY TUNED!' : _props$noDate,
      _props$linkHref = props.linkHref,
      linkHref = _props$linkHref === void 0 ? '/' : _props$linkHref,
      _props$textDateRange = props.textDateRange,
      textDateRange = _props$textDateRange === void 0 ? 'From' : _props$textDateRange,
      _props$hideDateLeft = props.hideDateLeft,
      hideDateLeft = _props$hideDateLeft === void 0 ? false : _props$hideDateLeft,
      _props$publicDate = props.publicDate,
      publicDate = _props$publicDate === void 0 ? '' : _props$publicDate,
      _props$toDate = props.toDate,
      toDate = _props$toDate === void 0 ? '' : _props$toDate,
      _props$locale = props.locale,
      locale = _props$locale === void 0 ? '' : _props$locale,
      _props$isReverse = props.isReverse,
      isReverse = _props$isReverse === void 0 ? false : _props$isReverse,
      _props$hrefTag = props.hrefTag,
      hrefTag = _props$hrefTag === void 0 ? "/" : _props$hrefTag,
      _props$type = props.type,
      type = _props$type === void 0 ? "game" : _props$type;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: {
        xs: '201px',
        lg: '358px'
      }
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        width: {
          xs: '201px',
          lg: "358px"
        },
        flex: {
          xs: '0 0 201px',
          lg: '0 0 358px'
        },
        height: {
          xs: "201px",
          lg: type === "game" ? "358px" : "307px"
        },
        borderRadius: '10px',
        // paddingBottom: '100%',
        position: 'relative',
        lineHeight: "0px",
        overflow: 'hidden',
        transform: 'rotate(0)',
        '& img': {
          position: 'absolute',
          objectFit: 'cover',
          borderRadius: '10px',
          display: 'block',
          width: '100%',
          height: '100%',
          transform: "scale(1)",
          transition: "all 0.5s",
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
          lineHeight: "0px",
          borderRadius: '10px',
          overflow: "hidden",
          "& span": {
            width: '100% !important',
            height: '100% !important',
            lineHeight: "0px"
          }
        },
        children: mainImageNext || /*#__PURE__*/_jsx("img", {
          src: mainImage,
          alt: title != null ? title : ''
        })
      })
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        marginTop: {
          xs: '20px',
          lg: '24px'
        }
      },
      children: /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: 'flex'
        },
        children: [!hideDateLeft && /*#__PURE__*/_jsx(Box, {
          sx: {
            paddingRight: {
              xs: '14px',
              lg: '35px'
            }
          },
          children: /*#__PURE__*/_jsxs(Box, {
            children: [(fromDate == null ? void 0 : fromDate.month) && (fromDate == null ? void 0 : fromDate.day) && /*#__PURE__*/_jsx(DateWithLocal, {
              locale: locale,
              toDate: toDate,
              fromDate: fromDate,
              textDateRange: textDateRange
            }), !(fromDate != null && fromDate.month) && !(fromDate != null && fromDate.day) && /*#__PURE__*/_jsx(Typography, {
              variant: "p3",
              color: colors.otherColor.silver,
              sx: {
                marginTop: '-4px',
                width: "min-content",
                minWidth: {
                  xs: "44px",
                  lg: "50px"
                },
                marginLeft: {
                  xs: "12px",
                  md: "22px"
                }
              },
              children: noDate
            })]
          })
        }), !isReverse && /*#__PURE__*/_jsxs(Box, {
          children: [!!tags.length && tags.map(function (tag, idx) {
            var _tag$color;

            return /*#__PURE__*/_jsx(Box, {
              sx: {
                display: 'inline-block',
                marginRight: '15px',
                marginBottom: '4px'
              },
              children: typeof (tag == null ? void 0 : tag.title) === 'string' ? /*#__PURE__*/_jsx(Link, {
                href: "".concat(hrefTag, "?tag=").concat(convertCustomTagForFilter((tag == null ? void 0 : tag.title) || "")),
                sx: {
                  textDecoration: "none"
                },
                children: /*#__PURE__*/_jsx(Tags, {
                  title: tag == null ? void 0 : tag.title,
                  color: (_tag$color = tag == null ? void 0 : tag.color) != null ? _tag$color : ''
                })
              }) : tag == null ? void 0 : tag.title
            }, idx);
          }), /*#__PURE__*/_jsx(Box, {
            sx: {
              marginTop: '4px',
              '& div': {
                WebkitLineClamp: {
                  xs: 3,
                  lg: 2
                },
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                WebkitBoxOrient: 'vertical',
                height: {
                  xs: '66px',
                  lg: '52px'
                },
                display: '-webkit-box'
              },
              '& a': {
                textDecoration: 'none'
              }
            },
            children: /*#__PURE__*/_jsx(Link, {
              href: linkHref,
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
              marginTop: '24px',
              whiteSpace: 'nowrap'
            },
            children: publicDate.toUpperCase()
          })]
        }), isReverse && /*#__PURE__*/_jsxs(Box, {
          children: [/*#__PURE__*/_jsx(Box, {
            sx: {
              marginBottom: '8px',
              '& div': {
                WebkitLineClamp: {
                  xs: 3,
                  lg: 2
                },
                overflow: 'hidden',
                textOverflow: 'ellipsis',
                WebkitBoxOrient: 'vertical',
                height: {
                  xs: '66px',
                  lg: '52px'
                },
                display: '-webkit-box'
              },
              '& a': {
                textDecoration: 'none'
              }
            },
            children: /*#__PURE__*/_jsx(Link, {
              href: linkHref,
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
              marginBottom: '24px',
              whiteSpace: 'nowrap'
            },
            children: publicDate.toUpperCase()
          }), !!tags && /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap"
            },
            children: !!(tags != null && tags.length) && tags.map(function (tag, idx) {
              var _tag$color2;

              return /*#__PURE__*/_jsx(Box, {
                sx: {
                  marginRight: '15px',
                  marginBottom: "4px"
                },
                children: typeof (tag == null ? void 0 : tag.title) === 'string' ? /*#__PURE__*/_jsxs(Link, {
                  href: "".concat(hrefTag, "?tag=").concat(convertCustomTagForFilter((tag == null ? void 0 : tag.title) || "")),
                  sx: {
                    textDecoration: "none"
                  },
                  children: [/*#__PURE__*/_jsx(Tags, {
                    title: tag == null ? void 0 : tag.title,
                    color: (_tag$color2 = tag == null ? void 0 : tag.color) != null ? _tag$color2 : ''
                  }), " "]
                }) : tag == null ? void 0 : tag.title
              }, idx);
            })
          })]
        })]
      })
    })]
  });
};

export default /*#__PURE__*/React.memo(ThumbnailNewsCard);
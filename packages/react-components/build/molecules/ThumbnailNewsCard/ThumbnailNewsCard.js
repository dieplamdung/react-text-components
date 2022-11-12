// import modules
import React from 'react';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import HtmlRenderer from "../../atoms/HtmlRenderer";
import colors from "../../theme/colors";
import Typography from "../../atoms/Typography";
import Tags from "../../atoms/Tags"; // Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// define function
const ThumbnailNewsCard = props => {
  var _fromDate$month;

  const {
    mainImageNext = '',
    mainImage = '',
    title,
    tags,
    fromDate,
    noDate = 'STAY TUNED!',
    linkHref = '/',
    textDateRange = 'From',
    hideDateLeft = false,
    publicDate = '',
    toDate = '',
    locale = '',
    isReverse = false
  } = props;
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: {
        xs: '201px',
        lg: '357px'
      }
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        width: {
          xs: '201px',
          lg: '357px'
        },
        flex: {
          xs: '0 0 201px',
          lg: '0 0 357px'
        },
        borderRadius: '10px',
        paddingBottom: '100%',
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
            children: [(fromDate == null ? void 0 : fromDate.month) && (fromDate == null ? void 0 : fromDate.day) && /*#__PURE__*/_jsxs(React.Fragment, {
              children: [fromDate && toDate && locale !== 'hk-tc' && locale !== 'hk-sc' && locale !== 'tw-tc' && locale !== 'tw-sc' && locale !== 'ko-kr' && /*#__PURE__*/_jsx(Typography, {
                variant: "l2",
                color: colors.otherColor.silver,
                sx: {
                  marginTop: '-4px',
                  whiteSpace: {
                    xs: 'wrap',
                    lg: 'nowrap'
                  }
                },
                children: textDateRange.toUpperCase()
              }), /*#__PURE__*/_jsx(Typography, {
                variant: "h2",
                color: colors.otherColor.silver,
                sx: {
                  marginTop: '-7px'
                },
                children: fromDate == null ? void 0 : fromDate.day
              }), /*#__PURE__*/_jsx(Typography, {
                variant: "p7",
                color: colors.otherColor.silver,
                sx: {
                  marginTop: '-5px',
                  whiteSpace: {
                    xs: 'wrap',
                    lg: 'nowrap'
                  }
                },
                children: fromDate == null ? void 0 : (_fromDate$month = fromDate.month) == null ? void 0 : _fromDate$month.toUpperCase()
              }), fromDate && toDate && (locale === 'hk-tc' || locale === 'hk-sc' || locale === 'tw-tc' || locale === 'tw-sc' || locale === 'ko-kr') && /*#__PURE__*/_jsx(Typography, {
                variant: "l2",
                color: colors.otherColor.silver,
                sx: {
                  marginTop: '2px',
                  whiteSpace: {
                    xs: 'wrap',
                    lg: 'nowrap'
                  }
                },
                children: textDateRange.toUpperCase()
              })]
            }), !(fromDate != null && fromDate.month) && !(fromDate != null && fromDate.day) && /*#__PURE__*/_jsx(Typography, {
              variant: "p7",
              color: colors.otherColor.silver,
              sx: {
                marginTop: '-4px',
                width: "min-content"
              },
              children: noDate
            })]
          })
        }), !isReverse && /*#__PURE__*/_jsxs(Box, {
          children: [!!tags && !!tags.length && tags.map((tag, idx) => {
            var _tag$color;

            return /*#__PURE__*/_jsx(Box, {
              sx: {
                display: 'inline-block',
                marginRight: '15px',
                marginBottom: '4px'
              },
              children: typeof (tag == null ? void 0 : tag.title) === 'string' ? /*#__PURE__*/_jsx(Tags, {
                title: tag == null ? void 0 : tag.title,
                color: (_tag$color = tag == null ? void 0 : tag.color) != null ? _tag$color : ''
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
              marginTop: '24px'
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
              marginBottom: '24px'
            },
            children: publicDate.toUpperCase()
          }), !!tags && /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap"
            },
            children: !!(tags != null && tags.length) && tags.map((tag, idx) => {
              var _tag$color2;

              return /*#__PURE__*/_jsx(Box, {
                sx: {
                  marginRight: '15px',
                  marginBottom: "4px"
                },
                children: typeof (tag == null ? void 0 : tag.title) === 'string' ? /*#__PURE__*/_jsx(Tags, {
                  title: tag == null ? void 0 : tag.title,
                  color: (_tag$color2 = tag == null ? void 0 : tag.color) != null ? _tag$color2 : ''
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
import _extends from "@babel/runtime/helpers/esm/extends";
// import modules
import Box from '@mui/material/Box';
import React from 'react';
import Link from '@mui/material/Link';
import colors from "../../theme/colors";
import Typography from "../../atoms/Typography";
import Tags from "../../atoms/Tags"; // import omit from 'lodash/omit';

import HtmlRenderer from "../../atoms/HtmlRenderer"; // Types

import Button from "../../atoms/Button";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// define function
var FeaturedNewsCardBlog = function FeaturedNewsCardBlog(props) {
  var mainImageNextProps = props.mainImageNextProps,
      _props$mainImage = props.mainImage,
      mainImage = _props$mainImage === void 0 ? '' : _props$mainImage,
      title = props.title,
      tags = props.tags,
      date = props.date,
      _props$linkHref = props.linkHref,
      linkHref = _props$linkHref === void 0 ? '/' : _props$linkHref,
      _props$description = props.description,
      description = _props$description === void 0 ? '' : _props$description,
      _props$variant = props.variant,
      variant = _props$variant === void 0 ? 'horizontal' : _props$variant,
      titleVariant = props.titleVariant,
      _props$onScrolling = props.onScrolling,
      onScrolling = _props$onScrolling === void 0 ? false : _props$onScrolling,
      button = props.button,
      _props$sx = props.sx,
      sx = _props$sx === void 0 ? {} : _props$sx,
      _props$isLayoutBlog = props.isLayoutBlog,
      isLayoutBlog = _props$isLayoutBlog === void 0 ? false : _props$isLayoutBlog,
      paddingBottom = props.paddingBottom,
      hrefTag = props.hrefTag; // omit(props, ['variant'])

  return /*#__PURE__*/_jsxs(Box, {
    sx: _extends({
      display: variant === 'vertical' ? 'block' : 'flex',
      alignItems: "center",
      flexDirection: {
        xs: 'column',
        lg: 'row'
      },
      width: onScrolling ? {
        md: "100%",
        lg: "810px",
        xl: "1043px"
      } : "100%",
      mixWidth: onScrolling ? {
        md: "100%",
        lg: "810px",
        xl: "1043px"
      } : "auto",
      overflow: "hidden"
    }, sx),
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        maxWidth: {
          xs: '100%',
          md: '547px'
        },
        paddingBottom: {
          xs: '64%',
          md: paddingBottom
        },
        borderRadius: '10px',
        overflow: "hidden",
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
        children: (mainImageNextProps == null ? void 0 : mainImageNextProps(mainImage, title)) && (mainImageNextProps == null ? void 0 : mainImageNextProps(mainImage, title))
      })
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        minHeight: "130px",
        maxWidth: {
          xs: "311px",
          md: "511px"
        },
        marginLeft: {
          xs: '0',
          lg: variant === 'vertical' ? '0px' : '48px'
        },
        marginTop: {
          xs: '20px',
          lg: variant === 'vertical' ? '24px' : '0px'
        }
      },
      children: [!!tags && !!tags.length && /*#__PURE__*/_jsx(Box, {
        sx: {
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "-4px"
        },
        children: tags.map(function (tag, idx) {
          var _tag$color;

          return /*#__PURE__*/_jsx(Box, {
            sx: {
              display: 'flex',
              width: "fit-content",
              marginRight: "4px",
              marginTop: "4px"
            },
            children: /*#__PURE__*/_jsx(Link, {
              href: "".concat(hrefTag, "?tag=").concat(tag == null ? void 0 : tag.title),
              sx: {
                textDecoration: "none"
              },
              children: /*#__PURE__*/_jsx(Tags, {
                title: tag.title,
                color: (_tag$color = tag.color) != null ? _tag$color : ''
              })
            })
          }, tag.title + idx);
        })
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          maxWidth: variant === 'vertical' ? '547px' : '474px',
          marginTop: '12px',
          marginBottom: {
            xs: variant === 'vertical' ? '0' : '12px',
            md: variant === 'vertical' ? '0' : '20px'
          },
          '& div': {
            // height: {
            //   xs: '52px',
            //   md: variant === 'vertical' ? '64px' : '169px'
            // },
            display: '-webkit-box'
          },
          '& a': {
            textDecoration: 'none'
          }
        },
        children: /*#__PURE__*/_jsx(Link, {
          href: linkHref,
          children: /*#__PURE__*/_jsx(Typography, {
            variant: titleVariant || variant === 'vertical' ? 'h6' : 'h2',
            color: colors.primary.dark,
            sx: {
              fontSize: {
                md: variant === 'vertical' ? '24px' : '46px',
                xs: variant === 'vertical' ? '18px' : '20px'
              },
              lineHeight: {
                md: variant === 'vertical' ? '30px' : '54px',
                xs: variant === 'vertical' ? '24px' : '26px'
              },
              WebkitLineClamp: {
                xs: 2,
                md: variant === 'vertical' ? 2 : 3
              },
              // height: {
              //   xs: '48px',
              //   md: '60px'
              // },
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              marginBottom: '0px'
            },
            children: /*#__PURE__*/_jsx(HtmlRenderer, {
              component: "div",
              value: title
            })
          })
        })
      }), description && !isLayoutBlog && /*#__PURE__*/_jsx(Box, {
        sx: {
          maxWidth: {
            xs: variant === 'vertical' ? '547px' : 'auto',
            md: variant === 'vertical' ? '474px' : 'auto'
          },
          marginBottom: {
            xs: '28px',
            md: variant === 'vertical' ? '24px' : '40x'
          }
        },
        children: /*#__PURE__*/_jsx(Typography, {
          variant: "p6",
          color: colors.neutral.neutral2,
          sx: {
            marginTop: {
              xs: '8px',
              md: '0px'
            },
            WebkitLineClamp: {
              xs: 2,
              md: variant === 'vertical' ? 2 : 3
            },
            // height: {
            //   xs: '40px',
            //   md: '52px'
            // },
            letterSpacing: '0px',
            display: '-webkit-box',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical'
          },
          children: /*#__PURE__*/_jsx(HtmlRenderer, {
            component: "div",
            value: description
          })
        })
      }), description && isLayoutBlog && /*#__PURE__*/_jsx(Box, {
        sx: {
          maxWidth: {
            xs: '547px',
            md: '474px'
          },
          marginTop: {
            xs: '12px',
            md: '28px'
          },
          marginBottom: {
            xs: '20px'
          }
        },
        children: /*#__PURE__*/_jsx(Typography, {
          variant: "p8",
          color: colors.neutral.neutral2,
          sx: {
            WebkitLineClamp: 4,
            // height: {
            //   xs: '77px',
            //   md: '87px'
            // },
            letterSpacing: '0px',
            display: '-webkit-box',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            WebkitBoxOrient: 'vertical'
          },
          children: /*#__PURE__*/_jsx(HtmlRenderer, {
            component: "div",
            value: description
          })
        })
      }), !!date && /*#__PURE__*/_jsx(Box, {
        children: /*#__PURE__*/_jsx(Typography, {
          variant: "l2",
          color: colors.neutral.neutral2,
          children: date.toUpperCase()
        })
      }), button && /*#__PURE__*/_jsx(Box, {
        className: "button-card",
        sx: {
          display: 'flex',
          width: '100%',
          marginTop: "auto",
          gap: {
            xs: '12px',
            md: '16px'
          },
          '& button': {
            width: {
              xs: '100%',
              md: 'auto'
            }
          }
        },
        children: button == null ? void 0 : button.map(function (item, index) {
          return item && /*#__PURE__*/_jsx(Button, {
            variant: item.variant,
            target: item.target,
            children: /*#__PURE__*/_jsx(Typography, {
              variant: "p5",
              children: item.label
            })
          }, index);
        })
      })]
    })]
  });
};

export default /*#__PURE__*/React.memo(FeaturedNewsCardBlog);
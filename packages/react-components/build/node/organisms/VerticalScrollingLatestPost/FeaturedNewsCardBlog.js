"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireDefault(require("react"));

var _Link = _interopRequireDefault(require("@mui/material/Link"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Tags = _interopRequireDefault(require("../../atoms/Tags"));

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _jsxRuntime = require("react/jsx-runtime");

// import modules
// import omit from 'lodash/omit';
// Types
// define function
const FeaturedNewsCardBlog = props => {
  const {
    mainImageNextProps,
    mainImage = '',
    title,
    tags,
    date,
    linkHref = '/',
    description = '',
    variant = 'horizontal',
    titleVariant,
    onScrolling = false,
    button,
    sx = {},
    isLayoutBlog = false,
    paddingBottom,
    hrefTag
  } = props; // omit(props, ['variant'])

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: (0, _extends2.default)({
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
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
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
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
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
      children: [!!tags && !!tags.length && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          marginTop: "-4px"
        },
        children: tags.map((tag, idx) => {
          var _tag$color;

          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            sx: {
              display: 'flex',
              width: "fit-content",
              marginRight: "4px",
              marginTop: "4px"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
              href: `${hrefTag}?tag=${tag == null ? void 0 : tag.title}`,
              sx: {
                textDecoration: "none"
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tags.default, {
                title: tag.title,
                color: (_tag$color = tag.color) != null ? _tag$color : ''
              })
            })
          }, tag.title + idx);
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
          href: linkHref,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: titleVariant || variant === 'vertical' ? 'h6' : 'h2',
            color: _colors.default.primary.dark,
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
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
              component: "div",
              value: title
            })
          })
        })
      }), description && !isLayoutBlog && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p6",
          color: _colors.default.neutral.neutral2,
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
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
            component: "div",
            value: description
          })
        })
      }), description && isLayoutBlog && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p8",
          color: _colors.default.neutral.neutral2,
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
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
            component: "div",
            value: description
          })
        })
      }), !!date && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "l2",
          color: _colors.default.neutral.neutral2,
          children: date.toUpperCase()
        })
      }), button && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
        children: button == null ? void 0 : button.map((item, index) => item && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
          variant: item.variant,
          target: item.target,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p5",
            children: item.label
          })
        }, index))
      })]
    })]
  });
};

var _default = /*#__PURE__*/_react.default.memo(FeaturedNewsCardBlog);

exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _Link = _interopRequireDefault(require("@mui/material/Link"));

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Tags = _interopRequireDefault(require("../../atoms/Tags"));

var _jsxRuntime = require("react/jsx-runtime");

// import modules
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      width: {
        xs: '201px',
        lg: '357px'
      }
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
          lineHeight: "0px",
          "& span": {
            width: '100% !important',
            height: '100% !important',
            lineHeight: "0px"
          }
        },
        children: mainImageNext || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: mainImage,
          alt: title != null ? title : ''
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        marginTop: {
          xs: '20px',
          lg: '24px'
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        sx: {
          display: 'flex'
        },
        children: [!hideDateLeft && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          sx: {
            paddingRight: {
              xs: '14px',
              lg: '35px'
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
            children: [(fromDate == null ? void 0 : fromDate.month) && (fromDate == null ? void 0 : fromDate.day) && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.default.Fragment, {
              children: [fromDate && toDate && locale !== 'hk-tc' && locale !== 'hk-sc' && locale !== 'tw-tc' && locale !== 'tw-sc' && locale !== 'ko-kr' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "l2",
                color: _colors.default.otherColor.silver,
                sx: {
                  marginTop: '-4px',
                  whiteSpace: {
                    xs: 'wrap',
                    lg: 'nowrap'
                  }
                },
                children: textDateRange.toUpperCase()
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "h2",
                color: _colors.default.otherColor.silver,
                sx: {
                  marginTop: '-7px'
                },
                children: fromDate == null ? void 0 : fromDate.day
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "p7",
                color: _colors.default.otherColor.silver,
                sx: {
                  marginTop: '-5px',
                  whiteSpace: {
                    xs: 'wrap',
                    lg: 'nowrap'
                  }
                },
                children: fromDate == null ? void 0 : (_fromDate$month = fromDate.month) == null ? void 0 : _fromDate$month.toUpperCase()
              }), fromDate && toDate && (locale === 'hk-tc' || locale === 'hk-sc' || locale === 'tw-tc' || locale === 'tw-sc' || locale === 'ko-kr') && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "l2",
                color: _colors.default.otherColor.silver,
                sx: {
                  marginTop: '2px',
                  whiteSpace: {
                    xs: 'wrap',
                    lg: 'nowrap'
                  }
                },
                children: textDateRange.toUpperCase()
              })]
            }), !(fromDate != null && fromDate.month) && !(fromDate != null && fromDate.day) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
              variant: "p7",
              color: _colors.default.otherColor.silver,
              sx: {
                marginTop: '-4px',
                width: "min-content"
              },
              children: noDate
            })]
          })
        }), !isReverse && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
          children: [!!tags && !!tags.length && tags.map((tag, idx) => {
            var _tag$color;

            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
              sx: {
                display: 'inline-block',
                marginRight: '15px',
                marginBottom: '4px'
              },
              children: typeof (tag == null ? void 0 : tag.title) === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tags.default, {
                title: tag == null ? void 0 : tag.title,
                color: (_tag$color = tag == null ? void 0 : tag.color) != null ? _tag$color : ''
              }) : tag == null ? void 0 : tag.title
            }, idx);
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
              href: linkHref,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "h6",
                color: _colors.default.primary.bandaiNamcoBlack,
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
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
                  component: "div",
                  value: title
                })
              })
            })
          }), publicDate && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "l2",
            color: _colors.default.neutral.neutral2,
            sx: {
              marginTop: '24px'
            },
            children: publicDate.toUpperCase()
          })]
        }), isReverse && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
              href: linkHref,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "h6",
                color: _colors.default.primary.bandaiNamcoBlack,
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
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
                  component: "div",
                  value: title
                })
              })
            })
          }), publicDate && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "l2",
            color: _colors.default.neutral.neutral2,
            sx: {
              marginBottom: '24px'
            },
            children: publicDate.toUpperCase()
          }), !!tags && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            sx: {
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap"
            },
            children: !!(tags != null && tags.length) && tags.map((tag, idx) => {
              var _tag$color2;

              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
                sx: {
                  marginRight: '15px',
                  marginBottom: "4px"
                },
                children: typeof (tag == null ? void 0 : tag.title) === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tags.default, {
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

var _default = /*#__PURE__*/_react.default.memo(ThumbnailNewsCard);

exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Image = _interopRequireDefault(require("../../atoms/Image"));

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _Icon = require("../../atoms/Icon");

var _viewport = require("../../utils/viewport");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _material = require("@mui/material");

var _SocialShare = _interopRequireDefault(require("../../molecules/SocialShare"));

var _jsxRuntime = require("react/jsx-runtime");

var _p, _p2, _p3, _p4;

const SupportInfo = props => {
  var _button$variant;

  const {
    title,
    button,
    mainImageUrlMobile,
    mainImageUrl,
    suggestionCard,
    footer
  } = props;
  const theme = (0, _material.useTheme)();
  const isMobileDown = (0, _material.useMediaQuery)((0, _viewport.TabletDown)(theme));
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      backgroundColor: _colors.default.otherColor.ablabaster,
      maxWidth: '600px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      margin: '0 auto'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        maxHeight: '132px',
        position: 'relative'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        sx: {
          textAlign: 'left',
          maxWidth: '70%',
          padding: {
            xs: '38px 0 38px 32px',
            lg: '32px 0 30px 32px'
          }
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconBandaiNamco, {
          sx: {
            width: '97px',
            height: '27px'
          }
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "h5",
          color: _colors.default.primary.bandaiNamcoBlack,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
            component: "div",
            value: title
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          maxWidth: {
            xs: '225px'
          },
          position: 'absolute',
          right: 0,
          '& img': {
            objectFit: 'fill',
            width: '100%',
            height: '100%'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Image.default, {
          src: isMobileDown ? mainImageUrlMobile : mainImageUrl
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        backgroundColor: _colors.default.primary.bandaiNamcoWhite,
        display: 'flex',
        flexDirection: 'column',
        padding: '48px 32px 40px',
        '& p': {
          fontWeight: '400',
          color: _colors.default.primary.bandaiNamcoBlack,
          letterSpacing: {
            md: '-0.2px'
          },
          fontSize: {
            xs: '14px',
            md: '16px'
          },
          lineHeight: {
            xs: '20px',
            md: '22px'
          }
        }
      },
      children: [_p || (_p = /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: "Hi [Customer],"
      })), _p2 || (_p2 = /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: "You\u2019re all set to log into your account with your new password."
      })), _p3 || (_p3 = /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: "You\u2019re all set to log into your account with your new password."
      })), _p4 || (_p4 = /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        children: "If you didn\u2019t make this change, contact our support team at support@bandainamcoent.asia."
      })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, {
        externalLink: button == null ? void 0 : button.externalLink,
        target: button == null ? void 0 : button.target,
        variant: (_button$variant = button == null ? void 0 : button.variant) != null ? _button$variant : 'primaryDark',
        sx: {
          width: {
            xs: '120px',
            md: '140px'
          },
          marginTop: {
            xs: '36px',
            md: '40px'
          }
        },
        children: button == null ? void 0 : button.label
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        display: 'flex',
        gap: '20px',
        margin: '0 auto',
        backgroundColor: _colors.default.neutral.neutral8,
        padding: '72px 32px',
        flexWrap: {
          xs: 'wrap',
          md: 'nowrap'
        },
        flexDirection: {
          xs: "column",
          md: "row"
        },
        alignItems: "center",
        justifyContent: "center",
        textAlign: {
          xs: 'center',
          md: 'left'
        }
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          flex: '1 1 50%',
          width: {
            xs: "100%",
            md: "261px"
          },
          height: '146px'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          sx: {
            overflow: 'hidden',
            margin: '0 auto',
            marginRight: {
              xs: 'unset',
              lg: '54px'
            },
            width: {
              xs: '311px',
              md: '261px'
            },
            '& a': {
              width: '100%'
            },
            borderRadius: '20px',
            '& img': {
              userSelect: "none",
              "-webkit-user-select": "none",
              objectFit: 'cover',
              borderRadius: '20px',
              display: 'block',
              aspectRatio: '16/9',
              width: '100%',
              height: '100%',
              transform: "scale(1)",
              transition: "all 0.3s ease-in-out",
              "&:hover": {
                transform: "scale(1.2)"
              }
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
            href: suggestionCard.linkHref,
            sx: {
              overflow: 'hidden',
              lineHeight: '0'
            },
            children: suggestionCard.nextImage || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              src: suggestionCard.mainImage,
              alt: title != null ? title : ''
            })
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        sx: {
          flex: '1 1 50%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          width: "100%",
          maxWidth: {
            xs: '100%',
            md: '457px',
            lg: '493px'
          },
          marginTop: {
            xs: '20px',
            lg: 'unset'
          }
        },
        children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "h5",
          sx: {
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
            fontWeight: '700',
            color: {
              xs: _colors.default.primary.bandaiNamcoBlack,
              md: _colors.default.primary.dark
            },
            letterSpacing: {
              xs: '-0.4px',
              md: '-0.2px'
            },
            fontSize: {
              xs: '22px',
              md: '18px'
            },
            lineHeight: {
              xs: '28px',
              md: '24px'
            }
          },
          children: suggestionCard == null ? void 0 : suggestionCard.title
        }), (suggestionCard == null ? void 0 : suggestionCard.description) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p6",
          sx: {
            margin: '6px 0 28px 0',
            color: _colors.default.neutral.neutral2,
            display: '-webkit-box',
            WebkitBoxOrient: 'vertical',
            WebkitLineClamp: 2,
            overflow: 'hidden',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '20px'
          },
          children: suggestionCard == null ? void 0 : suggestionCard.description
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, suggestionCard == null ? void 0 : suggestionCard.buttonPropsLearnMore, {
            sx: {
              width: {
                xs: '138px !important',
                md: '149px !important'
              }
            }
          }))
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        backgroundColor: _colors.default.primary.bandaiNamcoBlack,
        height: 'auto',
        width: '100%',
        padding: '56px 32px',
        '& a': {
          marginRight: '20px'
        },
        '& svg path': {
          fill: _colors.default.primary.bandaiNamcoWhite
        }
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_SocialShare.default, (0, _extends2.default)({}, footer == null ? void 0 : footer.socialShare)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          width: '100%',
          height: '1px',
          background: '#c1c1c1',
          opacity: '0.5',
          margin: '40px 0px'
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        style: {
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '20px',
          alignItems: 'center',
          color: '#9f9f9f',
          margin: 0
        },
        children: ["Shop now at", /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          style: {
            color: '#9f9f9f'
          },
          href: "https://bandainamcoent.asia/store/",
          children: "store.bandainamcoent.asia"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("p", {
        style: {
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '20px',
          alignItems: 'center',
          color: '#9f9f9f',
          marginTop: '8px',
          marginBottom: '8px'
        },
        children: ["Discover games at", /*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
          style: {
            color: '#9f9f9f'
          },
          href: "https://bandainamcoent.asia",
          children: "bandainamcoent.asia"
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
        style: {
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '14px',
          lineHeight: '20px',
          alignItems: 'center',
          color: '#9f9f9f',
          margin: 0
        },
        children: "\xA9 2022 Bandai Namco Entertainment Asia Pte. Ltd. All rights reserved."
      })]
    })]
  });
};

var _default = SupportInfo;
exports.default = _default;
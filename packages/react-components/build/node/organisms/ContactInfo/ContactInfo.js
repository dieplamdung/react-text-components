"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _Grid = _interopRequireDefault(require("@mui/material/Grid"));

var _react = _interopRequireDefault(require("react"));

var _material = require("@mui/material");

var _viewport = require("../../utils/viewport");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Image = _interopRequireDefault(require("../../atoms/Image"));

var _Icon = require("../../atoms/Icon");

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _jsxRuntime = require("react/jsx-runtime");

var _IconNextSlide;

const ContactInfo = props => {
  const {
    title,
    subtitle,
    directionLinkProps,
    emailTitle,
    emailValue,
    phoneTitle,
    phoneValue,
    mainImageUrl,
    mainImageUrlMobile,
    isKorea = false
  } = props;
  const theme = (0, _material.useTheme)();
  const isMobileDown = (0, _material.useMediaQuery)((0, _viewport.TabletDown)(theme));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        backgroundColor: _colors.default.otherColor.ablabaster,
        borderRadius: '20px'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
        container: true,
        sx: {
          '& a': {
            textDecoration: 'none'
          },
          '&:hover': {
            '& a': {
              textDecoration: 'none'
            }
          }
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Grid.default, {
          item: true,
          lg: 6,
          sx: {
            padding: {
              xl: '64px 0px 74px 95px',
              xs: '40px 24px 24px 24px'
            }
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h3",
            color: _colors.default.primary.bandaiNamcoBlack,
            sx: {
              marginBottom: '11px',
              fontSize: isKorea ? "30px" : '42px'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
              component: "div",
              value: title
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p6",
            color: _colors.default.neutral.neutral2,
            sx: {
              marginBottom: '14px'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
              component: "div",
              value: subtitle
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
            href: directionLinkProps == null ? void 0 : directionLinkProps.externalLink,
            target: (directionLinkProps == null ? void 0 : directionLinkProps.target) || '_blank',
            sx: {
              display: 'inline-block'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
              variant: "p7",
              color: _colors.default.primary.bandaiNamcoBlack,
              sx: {
                display: 'flex',
                alignItems: 'center',
                '& svg': {
                  height: '10px',
                  marginTop: '2px',
                  marginLeft: '10px'
                }
              },
              children: [directionLinkProps == null ? void 0 : directionLinkProps.label, _IconNextSlide || (_IconNextSlide = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconNextSlide, {
                htmlColor: "transparent"
              }))]
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
              variant: "p5",
              color: _colors.default.primary.bandaiNamcoBlack,
              sx: {
                marginBottom: '4px',
                marginTop: {
                  xs: '32px',
                  md: '36px'
                }
              },
              children: emailTitle
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
              href: `mailto:${emailValue}`,
              sx: {
                display: 'inline-block',
                lineHeight: "0px"
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "p8",
                color: _colors.default.neutral.neutral2,
                children: emailValue
              })
            })]
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
            sx: {
              marginTop: {
                xs: '32px',
                md: '36px'
              },
              marginBottom: '0px'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
              variant: "p5",
              color: _colors.default.primary.bandaiNamcoBlack,
              sx: {
                marginBottom: '4px'
              },
              children: phoneTitle
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
              href: `tel:${phoneValue}`,
              sx: {
                display: 'inline-block'
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "p8",
                color: _colors.default.neutral.neutral2,
                sx: {
                  marginBottom: '14px'
                },
                children: phoneValue
              })
            })]
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Grid.default, {
          item: true,
          lg: 6,
          sx: {
            position: 'relative',
            paddingTop: {
              xs: '46px',
              lg: '0px'
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Image.default, {
            src: isMobileDown ? mainImageUrlMobile : mainImageUrl,
            sx: {
              borderTopRightRadius: {
                xl: '20px',
                lg: '20px',
                xs: '0px'
              },
              position: {
                xs: 'relative'
              },
              borderBottomRightRadius: '20px',
              borderBottomLeftRadius: {
                xl: '0px',
                lg: '0px',
                xs: '20px'
              }
            }
          })
        })]
      })
    })
  });
};

var _default = ContactInfo;
exports.default = _default;
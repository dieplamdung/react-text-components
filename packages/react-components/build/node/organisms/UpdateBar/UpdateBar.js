"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireDefault(require("react"));

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _HtmlRenderer = _interopRequireDefault(require("../../atoms/HtmlRenderer"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

// import Modules
// import Styles
const UpdateBar = props => {
  var _events$slice;

  const {
    title,
    events,
    viewMore
  } = props;

  const handleScrollTo = () => {
    if (typeof window !== "undefined") {
      const itemView = document.getElementById('explore-more-features-games-detail');

      if (itemView) {
        const {
          offsetTop
        } = itemView;
        window.scrollTo({
          top: offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
    sx: {
      backgroundColor: '#F6F6F6'
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        sx: {
          display: {
            xs: 'block',
            md: 'flex'
          },
          alignItems: 'center',
          padding: {
            xs: '32px 0 32px 0',
            md: '24px 0 28px 0'
          },
          overflow: 'hidden',
          justifyContent: 'space-between'
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
          sx: {
            display: {
              xs: 'block',
              md: 'flex'
            },
            alignItems: 'center',
            gap: '24px',
            justifyContent: 'space-between'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p1",
            color: _colors.default.primary.bandaiNamcoBlack,
            sx: {
              marginRight: '54px',
              whiteSpace: 'nowrap',
              fontSize: {
                xs: '20px'
              }
            },
            children: title
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            sx: {
              display: {
                xs: 'block',
                md: 'flex'
              },
              marginTop: {
                xs: '12px',
                md: '0px'
              },
              gap: '24px'
            },
            children: events == null ? void 0 : (_events$slice = events.slice(0, 2)) == null ? void 0 : _events$slice.map(item => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
              sx: {
                display: 'flex',
                flexWrap: 'nowrap',
                flex: '1 1 50%',
                gap: '6px',
                marginTop: {
                  xs: '8px',
                  md: '0px'
                },
                marginBottom: {
                  xs: '12px',
                  md: '0px'
                },
                '&:first-of-type': {
                  marginLeft: '0px'
                }
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "p7",
                color: _colors.default.primary.bandaiNamcoBlack,
                sx: {
                  fontSize: '14px !important',
                  lineHeight: '19px !important',
                  whiteSpace: 'nowrap' // overflow: 'hidden',
                  // WebkitLineClamp: 1,
                  // textOverflow: 'none',
                  // display: '-webkit-box',
                  // WebkitBoxOrient: 'vertical',
                  // flex: '1 1 7ch',

                },
                children: item == null ? void 0 : item.date
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "p8",
                color: _colors.default.primary.bandaiNamcoBlack,
                sx: {
                  fontSize: '14px !important',
                  lineHeight: '19px !important',
                  wordBreak: "break-word",
                  letterSpacing: '0px',
                  flex: '1 1 60%',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 1,
                  overflow: 'hidden',
                  textOverflow: 'ellipsis'
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HtmlRenderer.default, {
                  component: "div",
                  value: item.title
                })
              })]
            }))
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          onClick: () => handleScrollTo(),
          sx: {
            marginLeft: {
              md: '56px'
            },
            whiteSpace: 'nowrap',
            borderBottom: `1px solid ${_colors.default.neutral.neutral2}`,
            transition: 'all .4s',
            color: _colors.default.neutral.neutral2,
            textDecoration: 'none',
            display: 'inline-block',
            cursor: 'pointer',
            userSelect: 'none',
            '&:hover': {
              '& p': {
                color: _colors.default.primary.bandaiNamcoBlack
              }
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p5",
            color: _colors.default.neutral.neutral2,
            sx: {
              lineHeight: {
                md: '22px'
              }
            },
            children: viewMore == null ? void 0 : viewMore.title
          })
        })]
      })
    })
  });
};

var _default = UpdateBar;
exports.default = _default;
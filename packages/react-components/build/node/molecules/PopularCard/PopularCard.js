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

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Tags = _interopRequireDefault(require("../../atoms/Tags"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

// Modules
// Styles
const PopularCard = props => {
  const {
    mainImage = '',
    title = '',
    tags,
    locale = '',
    mainImageNext,
    linkHref = '/'
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      borderRadius: '20px',
      width: '100%'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        width: '100%',
        paddingBottom: '100%',
        position: 'relative',
        backgroundColor: '#eee',
        borderRadius: '20px',
        overflow: 'hidden',
        transform: 'rotate(0)',
        '& img': {
          objectFit: 'cover',
          borderRadius: '20px',
          display: 'block',
          width: '100%',
          height: '100%',
          transform: "scale(1)",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            transform: "scale(1.2)"
          }
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
        href: linkHref,
        sx: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: '100%',
          borderRadius: '20px',
          overflow: 'hidden',
          "& span": {
            width: "100% !important",
            height: "100% !important"
          }
        },
        children: !mainImageNext ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: mainImage,
          alt: title != null ? title : ''
        }) : mainImageNext
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        paddingTop: '28px',
        width: '100%'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
          href: linkHref,
          sx: {
            textDecoration: "none"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            color: _colors.default.primary.bandaiNamcoBlack,
            variant: "p3",
            sx: {
              WebkitLineClamp: {
                xs: 2
              },
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitBoxOrient: 'vertical',
              lineHeight: {
                md: "24px",
                xs: "22px"
              },
              display: '-webkit-box'
            },
            children: title
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          display: 'flex',
          gap: '12px',
          flexWrap: "wrap",
          marginTop: {
            md: '20px',
            xs: '18.67px'
          },
          '& .bgTag': {
            backgroundColor: 'transparent',
            border: `1px solid ${_colors.default.neutral.neutral2}`
          },
          '& > div > div': {
            '&:hover': {
              backgroundColor: 'transparent',
              '& p': {
                color: _colors.default.neutral.neutral2
              }
            },
            '& p': {
              color: _colors.default.neutral.neutral2
            }
          }
        },
        children: tags.map((tag, index) => typeof (tag == null ? void 0 : tag.title) === 'string' ? /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tags.default, (0, _extends2.default)({}, tag), index) : tag.title)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          marginTop: '16px'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          color: _colors.default.neutral.neutral2,
          variant: "l2",
          children: locale
        })
      })]
    })]
  });
};

var _default = /*#__PURE__*/_react.default.memo(PopularCard);

exports.default = _default;
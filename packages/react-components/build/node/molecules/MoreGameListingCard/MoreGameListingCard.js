"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Tags = _interopRequireDefault(require("../../atoms/Tags"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _material = require("@mui/material");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Styles
// Types
const MoreGameListingCard = props => {
  const {
    mainImage = '',
    title = '',
    tags,
    locale = '',
    mainImageNext,
    href
  } = props;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: {
        xs: "column",
        md: "row"
      },
      alignItems: "center",
      borderRadius: '20px'
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
      href: href,
      sx: {
        textDecoration: "none",
        width: '100%'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          minWidth: {
            xs: "100%",
            md: "262px"
          },
          height: {
            xs: '200px',
            md: '169px'
          },
          borderRadius: '20px',
          overflow: "hidden",
          transform: 'rotate(0)',
          '& img': {
            objectFit: 'cover',
            borderRadius: '20px',
            display: 'block',
            width: '100%',
            height: '100%',
            transition: "all 0.3s",
            "&:hover": {
              transform: "scale(1.2)"
            }
          },
          '& span': {
            width: '100% !important',
            height: '100% !important'
          }
        },
        children: !mainImageNext ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: mainImage,
          alt: title != null ? title : ''
        }) : mainImageNext
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        padding: {
          xs: "24px 0 0 0",
          md: "0  0 0 24px"
        },
        width: '100%'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
        href: href,
        sx: {
          textDecoration: "none"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          sx: {
            marginBottom: '8px'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            color: _colors.default.primary.bandaiNamcoBlack,
            variant: "p1",
            sx: {
              maxWidth: {
                xs: "100%",
                md: "277px"
              },
              fontSize: {
                xs: "20px"
              },
              lineHeight: {
                xs: "26px"
              },
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              "-webkit-line-clamp": "2",

              /* number of lines to show */
              lineClamp: "2",
              "-webkit-box-orient": "vertical"
            },
            children: title
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          display: 'flex',
          flexWrap: "wrap",
          marginTop: '16px',
          gap: '5px',
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
              whiteSpace: "nowrap",
              color: _colors.default.neutral.neutral2
            }
          }
        },
        children: tags.map((tag, index) => typeof (tag == null ? void 0 : tag.title) === 'string' ? /*#__PURE__*/(0, _react.createElement)(_Tags.default, (0, _extends2.default)({}, tag, {
          key: index
        })) : tag.title)
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          color: _colors.default.neutral.neutral2,
          variant: "l2",
          sx: {
            marginTop: "8px"
          },
          children: locale
        })
      })]
    })]
  });
};

var _default = MoreGameListingCard;
exports.default = _default;
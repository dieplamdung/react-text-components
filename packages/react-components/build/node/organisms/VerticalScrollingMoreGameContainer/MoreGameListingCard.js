"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ConvertPlatformToIcon = void 0;

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _material = require("@mui/material");

var _Icon = require("../../atoms/Icon");

var _jsxRuntime = require("react/jsx-runtime");

var _IconNitendo, _IconPlaystation, _IconPlaystation2, _IconXbox, _IconSteam, _IconSteam2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Icon PC = icon Steam
const ConvertPlatformToIcon = title => {
  const icons = {
    Ni: _IconNitendo || (_IconNitendo = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconNitendo, {})),
    PS: _IconPlaystation || (_IconPlaystation = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconPlaystation, {})),
    Pl: _IconPlaystation2 || (_IconPlaystation2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconPlaystation, {})),
    XB: _IconXbox || (_IconXbox = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconXbox, {})),
    PC: _IconSteam || (_IconSteam = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconSteam, {})),
    St: _IconSteam2 || (_IconSteam2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconSteam, {}))
  };
  return icons[title || ''];
};

exports.ConvertPlatformToIcon = ConvertPlatformToIcon;

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
          width: {
            xs: "100%",
            md: "150px",
            lg: "262px"
          },
          minWidth: {
            xs: "100%",
            md: "150px",
            lg: "262px"
          },
          height: {
            xs: '200px',
            md: "140px",
            lg: '169px'
          },
          borderRadius: '20px',
          overflow: "hidden",
          transform: 'rotate(0)',
          '& span': {
            width: '100% !important',
            height: '100% !important'
          },
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
          }
        },
        children: mainImageNext || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: mainImage,
          alt: title != null ? title : ''
        })
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
          marginTop: "8px",
          gap: '12px',
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
        children: !!tags.length && tags.map((tag, index) => {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            children: ConvertPlatformToIcon(tag)
          }, index);
        })
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

var _default = /*#__PURE__*/(0, _react.memo)(MoreGameListingCard);

exports.default = _default;
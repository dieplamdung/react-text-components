"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireDefault(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

var _svg;

const LocaleCardInfo = props => {
  const {
    item,
    mainImageNextProps
  } = props;

  const IconNext = _svg || (_svg = /*#__PURE__*/(0, _jsxRuntime.jsx)("svg", {
    width: "5.5",
    height: "10",
    viewBox: "0 0 6 11",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M5.625 5.37377L1.69286 0.631683C1.42009 0.319955 0.946272 0.288367 0.634545 0.561129C0.322817 0.83389 0.291229 1.30771 0.563991 1.61944L3.63185 5.37377L0.572631 9.12714C0.299869 9.43887 0.331458 9.91269 0.643185 10.1855C0.954912 10.4582 1.42873 10.4266 1.7015 10.1149L5.625 5.37377Z",
      fill: "#1E1E1E"
    })
  }));

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          maxWidth: {
            xs: '100%',
            md: '269px'
          },
          paddingBottom: {
            xs: '64%',
            md: '57.6%'
          },
          boxShadow: '0px 4px 24px rgba(0, 0, 0, 0.07)',
          borderRadius: '10px',
          overflow: "hidden",
          position: 'relative',
          transform: 'rotate(0)',
          '& img': {
            position: "absolute",
            objectFit: 'cover',
            borderRadius: '20px 20px 0 0',
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
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
          children: (mainImageNextProps == null ? void 0 : mainImageNextProps(item == null ? void 0 : item.image, item == null ? void 0 : item.title)) || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: item == null ? void 0 : item.image,
            alt: (item == null ? void 0 : item.title) || ""
          })
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        width: '100%',
        backgroundColor: _colors.default.primary.bandaiNamcoWhite,
        borderRadius: '10px',
        padding: '22px 16px 26px 16px'
      },
      children: [(item == null ? void 0 : item.title) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p3",
        sx: {
          color: _colors.default.primary.bandaiNamcoBlack
        },
        children: item == null ? void 0 : item.title
      }), (item == null ? void 0 : item.address) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p6",
        sx: {
          color: _colors.default.otherColor.gray,
          marginBottom: '16px',
          marginTop: '16px'
        },
        children: item == null ? void 0 : item.address
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: 'flex',
          justifyContent: 'space-between'
        },
        children: !!(item != null && item.infoLink.length) && (item == null ? void 0 : item.infoLink.map((itemLink, idx) => {
          var _itemLink$href;

          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
            href: (_itemLink$href = itemLink == null ? void 0 : itemLink.href) != null ? _itemLink$href : '/',
            target: "_blank",
            sx: {
              textDecoration: 'none',
              display: 'inline-block'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
              variant: "p7",
              sx: {
                color: _colors.default.primary.bandaiNamcoBlack,
                fontWeight: '600',
                fontSize: '14px',
                lineHeight: '19px',
                alignItems: 'center',
                display: 'flex'
              },
              children: [itemLink.title, /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                sx: {
                  display: 'inline-block',
                  marginLeft: '9px',
                  transform: 'translateY(2px)'
                },
                children: IconNext
              })]
            })
          }, idx);
        }))
      })]
    })]
  });
};

var _default = /*#__PURE__*/_react.default.memo(LocaleCardInfo);

exports.default = _default;
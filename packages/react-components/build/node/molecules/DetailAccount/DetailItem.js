"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function DetailItem(props) {
  const {
    detail = [],
    isPassWord = false
  } = props;
  const [detailContent, setDetailContent] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    setDetailContent(detail);
  }, [detail]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column"
    },
    children: !!detailContent.length && detailContent.map((itemList, index) => {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row"
          },
          marginBottom: {
            xs: "20px",
            md: "46px"
          },
          "&:last-child": {
            marginBottom: "0px"
          }
        },
        children: !!itemList.length && itemList.map((item, idx) => {
          if (isPassWord && idx === 0) {
            return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
              sx: {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                paddingRight: {
                  xs: "0px",
                  md: "20px"
                },
                marginBottom: {
                  xs: "20px",
                  md: "0px"
                },
                "&:last-child": {
                  marginBottom: "0px"
                }
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                color: _colors.default.neutral.neutral2,
                variant: "p7",
                sx: {
                  lineHeight: "19px",
                  fontWeight: "600"
                },
                children: item == null ? void 0 : item.title
              }), !!(item != null && item.title) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                color: _colors.default.primary.bandaiNamcoBlack,
                variant: "p7",
                sx: {
                  height: "19px",
                  fontWeight: "600",
                  marginTop: "2px",
                  display: "flex",
                  alignItems: "center",
                  WebkitBoxOrient: 'vertical',
                  "& div": {
                    width: "4px",
                    height: '4px',
                    borderRadius: "2px",
                    marginRight: '2px',
                    background: _colors.default.primary.bandaiNamcoBlack
                  }
                },
                children: Array(12).fill(null).map((_, idxx) => {
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {}, idxx);
                })
              })]
            }, idx);
          }

          if (!isPassWord) {
            return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
              sx: {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                paddingRight: {
                  xs: "0px",
                  md: "20px"
                },
                marginBottom: {
                  xs: "20px",
                  md: "0px"
                },
                "&:last-child": {
                  marginBottom: "0px"
                }
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                color: _colors.default.neutral.neutral2,
                variant: "p7",
                sx: {
                  lineHeight: "19px",
                  fontWeight: "600"
                },
                children: item == null ? void 0 : item.title
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                color: _colors.default.primary.bandaiNamcoBlack,
                variant: "p7",
                sx: {
                  lineHeight: "19px",
                  fontWeight: "400",
                  marginTop: "2px",
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitLineClamp: "1"
                  /* number of lines to show */
                  ,
                  lineClamp: "1",
                  WebkitBoxOrient: 'vertical'
                },
                children: item == null ? void 0 : item.value
              })]
            }, idx);
          }

          return null;
        })
      }, index);
    })
  });
}

var _default = DetailItem;
exports.default = _default;
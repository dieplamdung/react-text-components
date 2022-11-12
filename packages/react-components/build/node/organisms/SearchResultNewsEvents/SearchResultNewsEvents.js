"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _HorizontalNewsCard = _interopRequireDefault(require("../../molecules/HorizontalNewsCard"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Types
const SearchResultGame = props => {
  const {
    title = '',
    viewMore,
    listThumbnail,
    nextImage,
    numberShow,
    clickViewMore
  } = props;
  const [dataItem, setDataItem] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    if (numberShow) {
      const dataClone = [...listThumbnail];
      const data = dataClone.splice(0, numberShow);
      setDataItem(data);
    } else {
      setDataItem(listThumbnail);
    }
  }, [numberShow, listThumbnail]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '0',
        paddingRight: '16px',
        maxWidth: {
          xs: 'calc(100vw - 16px)',
          md: '720px',
          lg: '960px',
          xl: '1140px'
        },
        marginBottom: {
          xs: title ? '35px' : '0px',
          md: title ? '67px' : '0px'
        }
      },
      children: [title && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
        variant: "h2",
        color: _colors.default.primary.bandaiNamcoBlack,
        sx: {
          display: 'flex',
          alignItems: 'center'
        },
        children: [title, " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p5",
          sx: {
            minWidth: '28px',
            height: '28px',
            borderRadius: listThumbnail.length > 99 ? '8px !important' : '100%',
            backgroundColor: _colors.default.neutral.neutral6,
            overflow: 'hidden',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '6px !important',
            paddingLeft: listThumbnail.length > 99 ? '6px !important' : '0px !important',
            paddingRight: listThumbnail.length > 99 ? '6px !important' : '0px !important'
          },
          children: listThumbnail.length
        })]
      }), !!(listThumbnail != null && listThumbnail.length) && (listThumbnail == null ? void 0 : listThumbnail.length) > 3 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: 'flex',
          alignItems: 'center'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          children: (viewMore == null ? void 0 : viewMore.title) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            onClick: () => clickViewMore == null ? void 0 : clickViewMore(),
            sx: {
              display: 'inline-block'
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box // href='#'
            // target={viewMore?.target}
            , {
              component: 'span',
              sx: {
                cursor: 'pointer',
                borderBottom: `1px solid ${_colors.default.neutral.neutral2}`,
                transition: 'all .4s',
                color: _colors.default.neutral.neutral2,
                textDecoration: 'none',
                lineHeight: '21px',
                display: 'inline-block',
                '&:hover': {
                  '& p': {
                    color: _colors.default.primary.bandaiNamcoBlack
                  },
                  borderBottom: `1px solid ${_colors.default.primary.bandaiNamcoBlack}`
                }
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "p5",
                color: _colors.default.neutral.neutral2,
                sx: {
                  transition: 'all .4s'
                },
                children: viewMore == null ? void 0 : viewMore.title
              })
            })
          })
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      children: !!dataItem.length && dataItem.map((item, idx) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          marginTop: {
            xs: '20px',
            md: '36px'
          },
          '&:first-of-type': {
            marginTop: '0px'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_HorizontalNewsCard.default, (0, _extends2.default)({
          nextImage: nextImage
        }, item))
      }, idx))
    })]
  });
};

var _default = SearchResultGame;
exports.default = _default;
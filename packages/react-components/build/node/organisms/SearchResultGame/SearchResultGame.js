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

var _MoreGameListingCard = _interopRequireDefault(require("../../molecules/MoreGameListingCard"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Types
// import { ISearchResultGame } from './types';
const SearchResultGame = props => {
  var _propsGame$viewMore, _propsGame$viewMore2;

  const {
    propsGame,
    clickViewMore
  } = props;
  const [dataItem, setDataItem] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    if (propsGame != null && propsGame.numberShow) {
      const dataClone = [...propsGame.listThumbnail];
      const data = dataClone.splice(0, propsGame == null ? void 0 : propsGame.numberShow);
      setDataItem(data);
    } else {
      setDataItem(propsGame == null ? void 0 : propsGame.listThumbnail);
    }
  }, [propsGame == null ? void 0 : propsGame.numberShow, propsGame == null ? void 0 : propsGame.listThumbnail]);
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
          xs: propsGame != null && propsGame.title ? '35px' : '0px',
          md: propsGame != null && propsGame.title ? '67px' : '0px'
        }
      },
      children: [propsGame.title && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
        variant: "h2",
        color: _colors.default.primary.bandaiNamcoBlack,
        sx: {
          display: 'flex',
          alignItems: 'center'
        },
        children: [propsGame.title, /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p5",
          sx: {
            minWidth: '28px',
            height: '28px',
            borderRadius: (propsGame == null ? void 0 : propsGame.listThumbnail.length) > 99 ? '8px !important' : '100%',
            backgroundColor: _colors.default.neutral.neutral6,
            overflow: 'hidden',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '6px !important',
            paddingLeft: (propsGame == null ? void 0 : propsGame.listThumbnail.length) > 99 ? '6px !important' : '0px !important',
            paddingRight: (propsGame == null ? void 0 : propsGame.listThumbnail.length) > 99 ? '6px !important' : '0px !important'
          },
          children: propsGame == null ? void 0 : propsGame.listThumbnail.length
        })]
      }), (propsGame == null ? void 0 : propsGame.listThumbnail.length) > 4 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: 'flex',
          alignItems: 'center'
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          children: ((_propsGame$viewMore = propsGame.viewMore) == null ? void 0 : _propsGame$viewMore.title) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              display: 'inline-block'
            },
            onClick: () => clickViewMore == null ? void 0 : clickViewMore(),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              component: 'span' // href={propsGame.viewMore?.href}
              // target={propsGame.viewMore?.target}
              ,
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
                children: (_propsGame$viewMore2 = propsGame.viewMore) == null ? void 0 : _propsGame$viewMore2.title
              })
            })
          })
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
        container: true,
        rowSpacing: "36px",
        children: !!(dataItem != null && dataItem.length) && dataItem.map((item, idx) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
          item: true,
          xs: 12,
          md: 12,
          lg: 6,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MoreGameListingCard.default, (0, _extends2.default)({}, item), idx)
        }, idx))
      })
    })]
  });
};

var _default = SearchResultGame;
exports.default = _default;
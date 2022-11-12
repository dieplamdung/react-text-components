"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireWildcard(require("react"));

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Modules
// Styles
const BlogBlockImage = props => {
  const {
    listThumbnail
  } = props;
  const [dataListSplice, setDataListSplice] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    const data = [...listThumbnail];
    const dataCache = [];

    while (data.length) {
      const dataSpliceTwo = data.splice(0, 2);
      dataCache.push(dataSpliceTwo);
      const dataSpliceThree = data.splice(0, 3);
      dataCache.push(dataSpliceThree);
      const dataSpliceOne = data.splice(0, 1);
      dataCache.push(dataSpliceOne);
      setDataListSplice(dataCache);
    }
  }, [listThumbnail]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
    children: !!dataListSplice.length && dataListSplice.map((rows, idx) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      sx: {
        display: rows.length ? 'flex' : 'none',
        justifyContent: 'space-between',
        gap: {
          xs: '0px',
          md: '24px'
        },
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '920px',
        flexWrap: {
          xs: 'wrap',
          md: 'nowrap'
        }
      },
      children: rows == null ? void 0 : rows.map((item, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          marginBottom: '24px',
          width: {
            xs: '100%',
            // eslint-disable-next-line no-nested-ternary
            md: rows.length === 1 ? '100%' : rows.length === 2 ? 'calc(50% - 11px)' : 'calc(33.3333% - 14px)'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          sx: {
            flex: "1",
            maxWidth: {
              // md: rows.length === 1 ? '928px' : rows.length === 2 ? '100%' : '100%',
              xs: '100%'
            },
            display: "flex"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            sx: {
              width: '100%',
              paddingBottom: {
                xs: '66.8%',
                // eslint-disable-next-line no-nested-ternary
                md: rows.length === 1 ? '56.1%' : rows.length === 2 ? '73%' : '72.7%'
              },
              borderRadius: '10px',
              overflow: "hidden",
              position: 'relative',
              transform: 'rotate(0)',
              "& span": {
                width: '100% !important',
                height: '100% !important'
              },
              '& img': {
                position: "absolute",
                objectFit: 'cover',
                borderRadius: '10px',
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
            children: !item.mainImageNext ? /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
              src: item.mainImage,
              alt: ''
            }) : item.mainImageNext
          })
        })
      }, `rows${index}`))
    }, idx))
  });
};

var _default = BlogBlockImage;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _reactInfiniteScrollHook = _interopRequireDefault(require("react-infinite-scroll-hook"));

var _Icon = require("../../../atoms/Icon");

var _ProductItem = _interopRequireDefault(require("../ProductItem"));

var _jsxRuntime = require("react/jsx-runtime");

var _IconLoading;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ProductList(props) {
  const {
    productList = [],
    onLoadMore,
    hadLoadMore
  } = props;
  const [hasNextPage, setHasNextPage] = (0, _react.useState)(false);
  const loading = null;
  (0, _react.useEffect)(() => {
    setHasNextPage(hadLoadMore);
  }, [hadLoadMore]);

  const handleLoadMore = () => {
    setTimeout(() => {
      onLoadMore == null ? void 0 : onLoadMore();
    }, 500);
  };

  const [infiniteRef] = (0, _reactInfiniteScrollHook.default)({
    loading,
    hasNextPage,
    onLoadMore: handleLoadMore,
    rootMargin: '0px 0px 200px 0px'
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      flex: 1,
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        flex: 1,
        display: "flex",
        flexWrap: "wrap",
        margin: "0px -11px"
      },
      children: !!(productList != null && productList.length) && (productList == null ? void 0 : productList.map((item, index) => {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            width: {
              xs: "50%",
              md: "25%"
            },
            padding: "0px 11px"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProductItem.default, (0, _extends2.default)({}, item))
        }, index);
      }))
    }), hasNextPage && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      ref: infiniteRef,
      sx: {
        marginTop: {
          xs: '0px',
          md: '110px',
          display: 'flex',
          justifyContent: 'center'
        }
      },
      children: _IconLoading || (_IconLoading = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconLoading, {}))
    })]
  });
}

var _default = /*#__PURE__*/_react.default.memo(ProductList);

exports.default = _default;
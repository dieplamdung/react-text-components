"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Icon = require("../../atoms/Icon");

var _reactInfiniteScrollHook = _interopRequireDefault(require("react-infinite-scroll-hook"));

var _MoreGameListingCard = _interopRequireDefault(require("./MoreGameListingCard"));

var _jsxRuntime = require("react/jsx-runtime");

var _IconLoading;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const VerticalScrollingMoreGameContainer = ({
  title,
  notFilter = true,
  onLoadMore,
  dataItem,
  nextPage = true,
  dataTranslation
}) => {
  const [items, setItems] = (0, _react.useState)([]);

  const [hasNextPage, setHasNextPage] = _react.default.useState(true);

  const loading = null;
  (0, _react.useEffect)(() => {
    setItems(dataItem);
  }, [dataItem]);
  (0, _react.useEffect)(() => {
    setHasNextPage(nextPage);
  }, [nextPage]); //  Handle load more

  const loadMore = () => {
    setTimeout(() => {
      onLoadMore == null ? void 0 : onLoadMore();
    }, 500);
  };

  const [infiniteRef] = (0, _reactInfiniteScrollHook.default)({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    // Some API call to fetch the next page
    // When there is an error, we stop infinite loading.
    // It can be reactivated by setting "error" state as undefined.
    // disabled: !!error,
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    rootMargin: '0px 0px 200px 0px'
  });
  (0, _react.useEffect)(() => {
    if (notFilter && !!Object.keys(dataTranslation).length) {
      loadMore();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [notFilter, dataTranslation]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      width: "100%"
    },
    children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "h4",
      sx: {
        marginBottom: {
          xs: "40px",
          md: "67px"
        }
      },
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: {
          xs: "0px",
          md: "0px"
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
        container: true,
        rowSpacing: "36px",
        sx: {
          width: '100% !important'
        },
        columnSpacing: {
          xs: '0px',
          md: '20px'
        },
        children: !!(items != null && items.length) && items.map((listingCard, index) => {
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
            item: true,
            xs: 12,
            md: 6,
            sx: {},
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_MoreGameListingCard.default, (0, _extends2.default)({}, listingCard))
          }, index);
        })
      })
    }), hasNextPage && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      ref: infiniteRef,
      sx: {
        marginTop: {
          xs: '40px',
          md: '110px',
          display: 'flex',
          justifyContent: 'center'
        }
      },
      children: _IconLoading || (_IconLoading = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconLoading, {}))
    })]
  });
};

var _default = VerticalScrollingMoreGameContainer;
exports.default = _default;
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

var _Icon = require("../../atoms/Icon");

var _reactInfiniteScrollHook = _interopRequireDefault(require("react-infinite-scroll-hook"));

var _constants = require("../../utils/constants");

var _FeaturedNewsCardBlog = _interopRequireDefault(require("./FeaturedNewsCardBlog"));

var _jsxRuntime = require("react/jsx-runtime");

var _IconLoading;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const VerticalScrollingLatestPost = props => {
  const {
    title,
    listThumbnail,
    dataQueryTags = [],
    handlerScroll,
    locale,
    mainImageNextProps,
    getNumberValue
  } = props;
  const [dataListSplice, setDataListSplice] = (0, _react.useState)([]);
  const [loading, setLoading] = (0, _react.useState)(false);
  const [items, setItems] = (0, _react.useState)(listThumbnail);
  const [hasNextPage, setHasNextPage] = (0, _react.useState)(true);
  const [error, setError] = (0, _react.useState)();
  const [numberSkip, setNumberSkip] = (0, _react.useState)(0);
  const [totalItem, setTotalItem] = (0, _react.useState)(1);
  const [getDataQueryTags, setGetDataQueryTags] = (0, _react.useState)(dataQueryTags);
  (0, _react.useEffect)(() => {
    const data = [...items];
    const dataCache = [];

    while (data.length) {
      const dataSplice = data.splice(0, 5);
      dataCache.push(dataSplice);
      setDataListSplice(dataCache);
    }

    getNumberValue == null ? void 0 : getNumberValue(items.length); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const handleSetWidthItem = idx => {
    if (idx <= 1) {
      return 'calc(50% - 11px)';
    }

    return 'calc(33.333% - 15px)';
  };

  const handleSetPaddingItem = idx => {
    if (idx <= 1) {
      return '55%';
    }

    return '66%';
  }; // Handle call api load item


  const loadItems = () => {
    return new Promise(resolve => {
      const newArray = [];

      if (items.length < totalItem) {
        setTimeout(() => {
          handlerScroll(locale, getDataQueryTags, _constants.NUMBER_ITEMS, numberSkip * _constants.NUMBER_ITEMS).then(dataItem => {
            var _dataItem$items;

            setTotalItem(dataItem.total);
            dataItem == null ? void 0 : (_dataItem$items = dataItem.items) == null ? void 0 : _dataItem$items.forEach(item => {
              newArray.push(item);
            });
            setNumberSkip(numberSkip + 1); // Increase number skip when each load
            // Handle hidden icon loading

            if (newArray.length + items.length >= dataItem.total) {
              resolve({
                hasNextPage: false,
                data: newArray
              });
            } else {
              resolve({
                hasNextPage: true,
                data: newArray
              });
            }
          });
        }, _constants.RESPONSE_TIME_IN_MS);
      } else {
        resolve({
          hasNextPage: false,
          data: newArray
        });
      }
    });
  }; //  Handle load more


  const loadMore = async () => {
    setLoading(true);

    try {
      const {
        data,
        hasNextPage: newHasNextPage
      } = await loadItems();
      setItems(current => [...current, ...data]);
      setHasNextPage(newHasNextPage);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const [infiniteRef] = (0, _reactInfiniteScrollHook.default)({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    // Some API call to fetch the next page
    // When there is an error, we stop infinite loading.
    // It can be reactivated by setting "error" state as undefined.
    disabled: !!error,
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    rootMargin: '0px 0px 200px 0px'
  });
  (0, _react.useEffect)(() => {
    setNumberSkip(0);
    setTotalItem(1);
    setItems([]);

    if (dataQueryTags.length === 0) {
      setGetDataQueryTags([]);
    } else {
      setGetDataQueryTags(dataQueryTags);
    }
  }, [dataQueryTags]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "h2",
      sx: {
        marginBottom: {
          xs: "22px",
          md: "40px"
        }
      },
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      children: !!(dataListSplice != null && dataListSplice.length) && (dataListSplice == null ? void 0 : dataListSplice.map((child, idx) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: 'flex',
          flexWrap: 'wrap',
          gap: {
            xs: '0px',
            md: '22px'
          },
          marginBottom: {
            xs: '0px',
            md: '22px'
          }
        },
        children: !!(child != null && child.length) && (child == null ? void 0 : child.map((item, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            lineHeight: '0px',
            width: {
              xs: '100%',
              md: handleSetWidthItem(index)
            },
            '&:first-of-type': {
              marginTop: {
                xs: '0px'
              }
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_FeaturedNewsCardBlog.default, (0, _extends2.default)({
            mainImageNextProps: mainImageNextProps,
            isLayoutBlog: true,
            variant: "vertical",
            button: [],
            paddingBottom: handleSetPaddingItem(index)
          }, item, {
            sx: {
              display: 'inline-block',
              paddingBottom: {
                xs: '68px',
                md: '102px'
              },
              '& div': {
                maxHeight: '306px !important'
              }
            }
          }))
        }, item.title)))
      }, `section ${idx}`)))
    }), hasNextPage && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      ref: infiniteRef,
      sx: {
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'center'
      },
      children: _IconLoading || (_IconLoading = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconLoading, {}))
    })]
  });
};

var _default = VerticalScrollingLatestPost;
exports.default = _default;
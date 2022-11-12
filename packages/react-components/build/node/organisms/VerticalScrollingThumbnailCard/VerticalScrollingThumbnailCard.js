"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireWildcard(require("react"));

var _reactInfiniteScrollHook = _interopRequireDefault(require("react-infinite-scroll-hook"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _HorizontalNewsCard = _interopRequireDefault(require("../../molecules/HorizontalNewsCard"));

var _Icon = require("../../atoms/Icon");

var _constants = require("../../utils/constants");

var _jsxRuntime = require("react/jsx-runtime");

var _IconLoading;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const VerticalSCrollingThumbnailCardAPI = props => {
  const {
    title,
    locale,
    handlerScroll,
    dataQueryTags = [],
    setDataFilterSelected,
    dataQueryGame = '',
    nextImage
  } = props;

  const [loading, setLoading] = _react.default.useState(false);

  const [items, setItems] = _react.default.useState([]);

  const [hasNextPage, setHasNextPage] = _react.default.useState(true);

  const [error, setError] = _react.default.useState();

  const [numberSkip, setNumberSkip] = _react.default.useState(0);

  const [totalItem, setTotalItem] = _react.default.useState(1);

  const [getDataQueryTags, setGetDataQueryTags] = _react.default.useState(dataQueryTags);

  const [dataQuGame, setDataQuGame] = _react.default.useState(dataQueryGame);

  // Handle call api load item
  const loadItems = () => {
    return new Promise(resolve => {
      const newArray = [];

      if (items.length < totalItem) {
        setTimeout(() => {
          handlerScroll(locale, getDataQueryTags, _constants.NUMBER_ITEMS, numberSkip * _constants.NUMBER_ITEMS, dataQuGame).then(dataItem => {
            var _dataItem$items;

            setTotalItem(dataItem.total);
            dataItem == null ? void 0 : (_dataItem$items = dataItem.items) == null ? void 0 : _dataItem$items.forEach(item => {
              newArray.push(item);
            });
            setNumberSkip(numberSkip + 1); // Increase number skip when each load
            // Handle hidden icon loading

            if (newArray.length + items.length >= dataItem.total) {
              if (typeof setDataFilterSelected === 'function') {
                setDataFilterSelected(newArray);
              }

              resolve({
                hasNextPage: false,
                data: newArray
              });
            } else {
              if (typeof setDataFilterSelected === 'function') {
                setDataFilterSelected(newArray);
              }

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
    setHasNextPage(true);
    setItems([]);

    if (!(dataQueryTags != null && dataQueryTags.length)) {
      setGetDataQueryTags([]);
    } else {
      setGetDataQueryTags(dataQueryTags);
    }

    setDataQuGame(dataQueryGame);
  }, [dataQueryTags, dataQueryGame]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "h4",
      color: _colors.default.primary.bandaiNamcoBlack,
      sx: {
        marginBottom: {
          xs: '24px',
          md: '40px'
        }
      },
      children: title
    }), items.map((item, idx) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
    }, item.title + idx)), hasNextPage && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      ref: infiniteRef,
      sx: {
        display: 'flex',
        justifyContent: 'center',
        margin: {
          xs: '80px 0px',
          md: '156px 0px'
        }
      },
      children: _IconLoading || (_IconLoading = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconLoading, {}))
    })]
  });
};

var _default = VerticalSCrollingThumbnailCardAPI;
exports.default = _default;
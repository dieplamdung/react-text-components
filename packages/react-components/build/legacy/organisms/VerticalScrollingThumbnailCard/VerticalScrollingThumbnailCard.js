import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _IconLoading;

import _regeneratorRuntime from "@babel/runtime/regenerator";
// import modules
import Box from '@mui/material/Box';
import React, { useEffect } from 'react'; // import type

import useInfiniteScroll from 'react-infinite-scroll-hook'; // import colors

import colors from "../../theme/colors";
import Typography from "../../atoms/Typography";
import HorizontalNewsCard from "../../molecules/HorizontalNewsCard";
import { IconLoading } from "../../atoms/Icon";
import { NUMBER_ITEMS, RESPONSE_TIME_IN_MS } from "../../utils/constants";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var VerticalSCrollingThumbnailCardAPI = function VerticalSCrollingThumbnailCardAPI(props) {
  var title = props.title,
      locale = props.locale,
      handlerScroll = props.handlerScroll,
      _props$dataQueryTags = props.dataQueryTags,
      dataQueryTags = _props$dataQueryTags === void 0 ? [] : _props$dataQueryTags,
      setDataFilterSelected = props.setDataFilterSelected,
      _props$dataQueryGame = props.dataQueryGame,
      dataQueryGame = _props$dataQueryGame === void 0 ? '' : _props$dataQueryGame,
      nextImage = props.nextImage;

  var _React$useState = React.useState(false),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      loading = _React$useState2[0],
      setLoading = _React$useState2[1];

  var _React$useState3 = React.useState([]),
      _React$useState4 = _slicedToArray(_React$useState3, 2),
      items = _React$useState4[0],
      setItems = _React$useState4[1];

  var _React$useState5 = React.useState(true),
      _React$useState6 = _slicedToArray(_React$useState5, 2),
      hasNextPage = _React$useState6[0],
      setHasNextPage = _React$useState6[1];

  var _React$useState7 = React.useState(),
      _React$useState8 = _slicedToArray(_React$useState7, 2),
      error = _React$useState8[0],
      setError = _React$useState8[1];

  var _React$useState9 = React.useState(0),
      _React$useState10 = _slicedToArray(_React$useState9, 2),
      numberSkip = _React$useState10[0],
      setNumberSkip = _React$useState10[1];

  var _React$useState11 = React.useState(1),
      _React$useState12 = _slicedToArray(_React$useState11, 2),
      totalItem = _React$useState12[0],
      setTotalItem = _React$useState12[1];

  var _React$useState13 = React.useState(dataQueryTags),
      _React$useState14 = _slicedToArray(_React$useState13, 2),
      getDataQueryTags = _React$useState14[0],
      setGetDataQueryTags = _React$useState14[1];

  var _React$useState15 = React.useState(dataQueryGame),
      _React$useState16 = _slicedToArray(_React$useState15, 2),
      dataQuGame = _React$useState16[0],
      setDataQuGame = _React$useState16[1];

  // Handle call api load item
  var loadItems = function loadItems() {
    return new Promise(function (resolve) {
      var newArray = [];

      if (items.length < totalItem) {
        setTimeout(function () {
          handlerScroll(locale, getDataQueryTags, NUMBER_ITEMS, numberSkip * NUMBER_ITEMS, dataQuGame).then(function (dataItem) {
            var _dataItem$items;

            setTotalItem(dataItem.total);
            dataItem == null ? void 0 : (_dataItem$items = dataItem.items) == null ? void 0 : _dataItem$items.forEach(function (item) {
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
        }, RESPONSE_TIME_IN_MS);
      } else {
        resolve({
          hasNextPage: false,
          data: newArray
        });
      }
    });
  }; //  Handle load more


  var loadMore = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var _yield$loadItems, data, newHasNextPage;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.prev = 1;
              _context.next = 4;
              return loadItems();

            case 4:
              _yield$loadItems = _context.sent;
              data = _yield$loadItems.data;
              newHasNextPage = _yield$loadItems.hasNextPage;
              setItems(function (current) {
                return [].concat(_toConsumableArray(current), _toConsumableArray(data));
              });
              setHasNextPage(newHasNextPage);
              _context.next = 14;
              break;

            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](1);
              setError(_context.t0);

            case 14:
              _context.prev = 14;
              setLoading(false);
              return _context.finish(14);

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 11, 14, 17]]);
    }));

    return function loadMore() {
      return _ref.apply(this, arguments);
    };
  }();

  var _useInfiniteScroll = useInfiniteScroll({
    loading: loading,
    hasNextPage: hasNextPage,
    onLoadMore: loadMore,
    // Some API call to fetch the next page
    // When there is an error, we stop infinite loading.
    // It can be reactivated by setting "error" state as undefined.
    disabled: !!error,
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    rootMargin: '0px 0px 200px 0px'
  }),
      _useInfiniteScroll2 = _slicedToArray(_useInfiniteScroll, 1),
      infiniteRef = _useInfiniteScroll2[0];

  useEffect(function () {
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
  return /*#__PURE__*/_jsxs(Box, {
    children: [title && /*#__PURE__*/_jsx(Typography, {
      variant: "h4",
      color: colors.primary.bandaiNamcoBlack,
      sx: {
        marginBottom: {
          xs: '24px',
          md: '40px'
        }
      },
      children: title
    }), items.map(function (item, idx) {
      return /*#__PURE__*/_jsx(Box, {
        sx: {
          marginTop: {
            xs: '20px',
            md: '36px'
          },
          '&:first-of-type': {
            marginTop: '0px'
          }
        },
        children: /*#__PURE__*/_jsx(HorizontalNewsCard, _extends({
          nextImage: nextImage
        }, item))
      }, item.title + idx);
    }), hasNextPage && /*#__PURE__*/_jsx(Box, {
      ref: infiniteRef,
      sx: {
        display: 'flex',
        justifyContent: 'center',
        margin: {
          xs: '80px 0px',
          md: '156px 0px'
        }
      },
      children: _IconLoading || (_IconLoading = /*#__PURE__*/_jsx(IconLoading, {}))
    })]
  });
};

export default VerticalSCrollingThumbnailCardAPI;
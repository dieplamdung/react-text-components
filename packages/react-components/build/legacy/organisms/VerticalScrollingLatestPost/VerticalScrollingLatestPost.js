import _extends from "@babel/runtime/helpers/esm/extends";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _IconLoading;

import _regeneratorRuntime from "@babel/runtime/regenerator";
// Modules
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Typography from "../../atoms/Typography";
import { IconLoading } from "../../atoms/Icon";
import useInfiniteScroll from 'react-infinite-scroll-hook'; // Types

import { NUMBER_ITEMS, RESPONSE_TIME_IN_MS } from "../../utils/constants";
import FeaturedNewsCardBlog from "./FeaturedNewsCardBlog";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var VerticalScrollingLatestPost = function VerticalScrollingLatestPost(props) {
  var title = props.title,
      listThumbnail = props.listThumbnail,
      _props$dataQueryTags = props.dataQueryTags,
      dataQueryTags = _props$dataQueryTags === void 0 ? [] : _props$dataQueryTags,
      handlerScroll = props.handlerScroll,
      locale = props.locale,
      mainImageNextProps = props.mainImageNextProps,
      getNumberValue = props.getNumberValue;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      dataListSplice = _useState2[0],
      setDataListSplice = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      loading = _useState4[0],
      setLoading = _useState4[1];

  var _useState5 = useState(listThumbnail),
      _useState6 = _slicedToArray(_useState5, 2),
      items = _useState6[0],
      setItems = _useState6[1];

  var _useState7 = useState(true),
      _useState8 = _slicedToArray(_useState7, 2),
      hasNextPage = _useState8[0],
      setHasNextPage = _useState8[1];

  var _useState9 = useState(),
      _useState10 = _slicedToArray(_useState9, 2),
      error = _useState10[0],
      setError = _useState10[1];

  var _useState11 = useState(0),
      _useState12 = _slicedToArray(_useState11, 2),
      numberSkip = _useState12[0],
      setNumberSkip = _useState12[1];

  var _useState13 = useState(1),
      _useState14 = _slicedToArray(_useState13, 2),
      totalItem = _useState14[0],
      setTotalItem = _useState14[1];

  var _useState15 = useState(dataQueryTags),
      _useState16 = _slicedToArray(_useState15, 2),
      getDataQueryTags = _useState16[0],
      setGetDataQueryTags = _useState16[1];

  useEffect(function () {
    var data = _toConsumableArray(items);

    var dataCache = [];

    while (data.length) {
      var dataSplice = data.splice(0, 5);
      dataCache.push(dataSplice);
      setDataListSplice(dataCache);
    }

    getNumberValue == null ? void 0 : getNumberValue(items.length); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  var handleSetWidthItem = function handleSetWidthItem(idx) {
    if (idx <= 1) {
      return 'calc(50% - 11px)';
    }

    return 'calc(33.333% - 15px)';
  };

  var handleSetPaddingItem = function handleSetPaddingItem(idx) {
    if (idx <= 1) {
      return '55%';
    }

    return '66%';
  }; // Handle call api load item


  var loadItems = function loadItems() {
    return new Promise(function (resolve) {
      var newArray = [];

      if (items.length < totalItem) {
        setTimeout(function () {
          handlerScroll(locale, getDataQueryTags, NUMBER_ITEMS, numberSkip * NUMBER_ITEMS).then(function (dataItem) {
            var _dataItem$items;

            setTotalItem(dataItem.total);
            dataItem == null ? void 0 : (_dataItem$items = dataItem.items) == null ? void 0 : _dataItem$items.forEach(function (item) {
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
    setItems([]);

    if (dataQueryTags.length === 0) {
      setGetDataQueryTags([]);
    } else {
      setGetDataQueryTags(dataQueryTags);
    }
  }, [dataQueryTags]);
  return /*#__PURE__*/_jsxs(Box, {
    children: [/*#__PURE__*/_jsx(Typography, {
      variant: "h2",
      sx: {
        marginBottom: {
          xs: "22px",
          md: "40px"
        }
      },
      children: title
    }), /*#__PURE__*/_jsx(Box, {
      children: !!(dataListSplice != null && dataListSplice.length) && (dataListSplice == null ? void 0 : dataListSplice.map(function (child, idx) {
        return /*#__PURE__*/_jsx(Box, {
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
          children: !!(child != null && child.length) && (child == null ? void 0 : child.map(function (item, index) {
            return /*#__PURE__*/_jsx(Box, {
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
              children: /*#__PURE__*/_jsx(FeaturedNewsCardBlog, _extends({
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
            }, item.title);
          }))
        }, "section ".concat(idx));
      }))
    }), hasNextPage && /*#__PURE__*/_jsx(Box, {
      ref: infiniteRef,
      sx: {
        marginTop: '50px',
        display: 'flex',
        justifyContent: 'center'
      },
      children: _IconLoading || (_IconLoading = /*#__PURE__*/_jsx(IconLoading, {}))
    })]
  });
};

export default VerticalScrollingLatestPost;
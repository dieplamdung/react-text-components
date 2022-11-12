import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import * as React from 'react';
var ARRAY_SIZE = 6;
var RESPONSE_TIME_IN_MS = 1000;
export var formatCurrency = function formatCurrency(num, precision) {
  if (Number.isNaN(num)) {
    return '';
  }

  var arrDollarCents = num.toFixed(precision).split('.');
  var formattedDollars = arrDollarCents[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

  if (precision === 0) {
    return formattedDollars;
  }

  return "".concat(formattedDollars, ".").concat(arrDollarCents[1] && (arrDollarCents[1].toString().length >= precision ? arrDollarCents[1] : arrDollarCents[1] + '0'.repeat(precision - arrDollarCents[1].length)) || '0'.repeat(precision));
};

function loadItems() {
  var startCursor = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return new Promise(function (resolve) {
    var newArray = [];
    setTimeout(function () {
      for (var i = startCursor; i < startCursor + ARRAY_SIZE; i += 1) {
        var newItem = {
          key: i,
          value: "This is item ".concat(i)
        };
        newArray = [].concat(_toConsumableArray(newArray), [newItem]);
      }

      resolve({
        hasNextPage: true,
        data: newArray
      });
    }, RESPONSE_TIME_IN_MS);
  });
}

export var useLoadItems = function useLoadItems() {
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

  function loadMore() {
    return _loadMore.apply(this, arguments);
  }

  function _loadMore() {
    _loadMore = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var _yield$loadItems, data, newHasNextPage;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setLoading(true);
              _context.prev = 1;
              _context.next = 4;
              return loadItems(items.length);

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
    return _loadMore.apply(this, arguments);
  }

  return {
    loading: loading,
    items: items,
    hasNextPage: hasNextPage,
    error: error,
    loadMore: loadMore
  };
};
var LIST_TAG = {
  "GAME UPDATE": "Game update",
  "UPDATES": "Game update",
  'EVENTS': "Event",
  "EVENT": "Event",
  "DOWNLOADS": 'Downloads',
  "DOWNLOAD": 'Downloads',
  "COMPANY": 'Company',
  'UPCOMING GAME': "Upcoming game",
  'UPCOMING': "Upcoming game",
  'NEW GAME': "New game",
  "NEW": "New game",
  'GAME NEW': "New game",
  'SALES': 'Sale',
  'SALE': 'Sale',
  "SECONDARY": 'Secondary',
  "TRAILER": 'Trailer',
  "ANNOUNCEMENT": 'Announcement',
  "TIPS AND TRICKS": 'Tips and tricks',
  "PATCH NOTES": 'Patch notes',
  "DLC": 'DLC',
  "MEMBERS ONLY": 'Members only'
};
var LIST_TAG_BLOG = {
  "EVENTS": 'Events',
  "NEWS": 'News',
  "GAMES": 'Games'
};
export var convertCustomTagForFilter = function convertCustomTagForFilter(tag, isBlog) {
  var _LIST_TAG_BLOG$newTag, _LIST_TAG$newTag;

  var newTag = typeof tag === 'string' ? tag == null ? void 0 : tag.toUpperCase() : tag;
  return isBlog ? (_LIST_TAG_BLOG$newTag = LIST_TAG_BLOG[newTag]) != null ? _LIST_TAG_BLOG$newTag : tag : (_LIST_TAG$newTag = LIST_TAG[newTag]) != null ? _LIST_TAG$newTag : tag;
};
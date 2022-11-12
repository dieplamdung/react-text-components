"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLoadItems = exports.formatCurrency = exports.convertCustomTagForFilter = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ARRAY_SIZE = 6;
const RESPONSE_TIME_IN_MS = 1000;

const formatCurrency = (num, precision) => {
  if (Number.isNaN(num)) {
    return '';
  }

  const arrDollarCents = num.toFixed(precision).split('.');
  const formattedDollars = arrDollarCents[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

  if (precision === 0) {
    return formattedDollars;
  }

  return `${formattedDollars}.${arrDollarCents[1] && (arrDollarCents[1].toString().length >= precision ? arrDollarCents[1] : arrDollarCents[1] + '0'.repeat(precision - arrDollarCents[1].length)) || '0'.repeat(precision)}`;
};

exports.formatCurrency = formatCurrency;

function loadItems(startCursor = 0) {
  return new Promise(resolve => {
    let newArray = [];
    setTimeout(() => {
      for (let i = startCursor; i < startCursor + ARRAY_SIZE; i += 1) {
        const newItem = {
          key: i,
          value: `This is item ${i}`
        };
        newArray = [...newArray, newItem];
      }

      resolve({
        hasNextPage: true,
        data: newArray
      });
    }, RESPONSE_TIME_IN_MS);
  });
}

const useLoadItems = () => {
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [hasNextPage, setHasNextPage] = React.useState(true);
  const [error, setError] = React.useState();

  async function loadMore() {
    setLoading(true);

    try {
      const {
        data,
        hasNextPage: newHasNextPage
      } = await loadItems(items.length);
      setItems(current => [...current, ...data]);
      setHasNextPage(newHasNextPage);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }

  return {
    loading,
    items,
    hasNextPage,
    error,
    loadMore
  };
};

exports.useLoadItems = useLoadItems;
const LIST_TAG = {
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
const LIST_TAG_BLOG = {
  "EVENTS": 'Events',
  "NEWS": 'News',
  "GAMES": 'Games'
};

const convertCustomTagForFilter = (tag, isBlog) => {
  var _LIST_TAG_BLOG$newTag, _LIST_TAG$newTag;

  const newTag = typeof tag === 'string' ? tag == null ? void 0 : tag.toUpperCase() : tag;
  return isBlog ? (_LIST_TAG_BLOG$newTag = LIST_TAG_BLOG[newTag]) != null ? _LIST_TAG_BLOG$newTag : tag : (_LIST_TAG$newTag = LIST_TAG[newTag]) != null ? _LIST_TAG$newTag : tag;
};

exports.convertCustomTagForFilter = convertCustomTagForFilter;
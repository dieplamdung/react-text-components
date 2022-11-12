"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _viewport = require("../../utils/viewport");

var _ResultItem = _interopRequireDefault(require("./ResultItem"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const ContentResultSearch = ({
  valueSearch,
  listResult = [],
  recentList = [],
  hrefSeeAll,
  textTopTrending,
  textRecent
}) => {
  const RECENT_LOCAL = "recent_local";
  const theme = (0, _material.useTheme)();
  const isTabletDown = (0, _material.useMediaQuery)((0, _viewport.TabletDown)(theme));
  const [listResultSearch, setListResultSearch] = (0, _react.useState)([]);
  const [recent, setRecent] = (0, _react.useState)([]);
  (0, _react.useEffect)(() => {
    if (recentList) {
      setRecent(recentList || []);
    }

    setListResultSearch(listResult);
  }, [recentList, listResult]);

  const handleClearRecent = () => {
    // localStorage.setItem(RECENT_LOCAL, JSON.stringify(recent));
    if (typeof window !== "undefined") {
      localStorage.removeItem(RECENT_LOCAL);
    }

    setRecent([]);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: {
        xs: "column",
        lg: "row"
      },
      gap: {
        xs: "24px",
        lg: "30px"
      },
      padding: "0 30px"
    },
    children: [!!listResultSearch.length && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ResultItem.default, {
      title: textTopTrending,
      listResult: listResultSearch,
      hrefSeeAll: hrefSeeAll,
      valueSearch: valueSearch
    }), !!recent.length && !valueSearch && /*#__PURE__*/(0, _jsxRuntime.jsx)(_ResultItem.default, {
      title: textRecent != null ? textRecent : '',
      listResult: recent,
      onClearRecent: handleClearRecent,
      isRecent: true
    }), !isTabletDown && !!recent.length && !valueSearch && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p5",
        color: _colors.default.neutral.neutral2,
        sx: {
          position: "relative",
          cursor: "pointer",
          width: "fit-content",
          "&::before": {
            content: '" "',
            position: "absolute",
            left: "0px",
            bottom: "0px",
            width: "100%",
            borderBottom: `2px solid ${_colors.default.neutral.neutral2}`
          }
        },
        onClick: handleClearRecent,
        children: "Clear all"
      })
    })]
  });
};

var _default = ContentResultSearch;
exports.default = _default;
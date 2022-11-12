"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _TabFilter = _interopRequireDefault(require("./TabFilter"));

var _ContentFilter = _interopRequireDefault(require("./ContentFilter"));

var _ProductList = _interopRequireDefault(require("./ProductList"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function EStoreProduct(props) {
  var _typeTabFilter$tabLis, _typeTabFilter$tabLis2;

  const {
    sortByText,
    filterByText,
    showMoreText,
    showLessText,
    sortBy,
    dataFilter,
    typeTabFilter,
    buttonPropsDone,
    buttonPropsClear,
    onFilter,
    productList,
    onLoadMore,
    hadLoadMore,
    onSelectTab
  } = props;
  const [activePill, setActivePill] = (0, _react.useState)(false);
  const [isShowFilter, setIsShowFilter] = (0, _react.useState)(false);
  const [titleSelect, setTitleSelect] = (0, _react.useState)(((_typeTabFilter$tabLis = typeTabFilter.tabList) == null ? void 0 : (_typeTabFilter$tabLis2 = _typeTabFilter$tabLis[0]) == null ? void 0 : _typeTabFilter$tabLis2.value) || "");
  const [productListContent, setProductListContent] = (0, _react.useState)([]);
  const [isCallApi, setIsCallApi] = (0, _react.useState)(false);
  const refTimeOut = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    setProductListContent(productListContent);
    return () => {
      window.clearTimeout(refTimeOut.current);
    };
  }, [productListContent]);

  const handleScrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      refTimeOut.current = setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 300);
    }
  };

  const handleFilter = (filter, sort) => {
    setIsCallApi(true);
    setProductListContent([]);
    handleScrollTop();
    onFilter == null ? void 0 : onFilter(filter, sort, () => {
      setIsCallApi(false);
    });
  };

  const handleLoadMore = () => {
    if (!isCallApi) {
      onLoadMore == null ? void 0 : onLoadMore();
    }
  };

  const handleSelectTab = v => {
    setTitleSelect(v);
    setIsCallApi(true);
    setProductListContent([]);
    handleScrollTop();
    onSelectTab(v, () => {
      setIsCallApi(false);
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      pointerEvents: isCallApi ? "none" : "auto"
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_TabFilter.default, (0, _extends2.default)({}, typeTabFilter, {
      titleSelect: titleSelect,
      onSelectTab: handleSelectTab,
      active: activePill,
      onClickPill: () => {
        setIsShowFilter(true);
      }
    })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        paddingTop: {
          xs: "32px",
          md: "64px"
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ProductList.default, {
        productList: productList,
        onLoadMore: handleLoadMore,
        hadLoadMore: hadLoadMore
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_ContentFilter.default, {
      sortByText: sortByText,
      filterByText: filterByText,
      showMoreText: showMoreText,
      showLessText: showLessText,
      sortBy: sortBy,
      dataFilter: dataFilter,
      buttonPropsDone: buttonPropsDone,
      buttonPropsClear: buttonPropsClear,
      isShowFilter: isShowFilter,
      onClose: () => {
        setIsShowFilter(false);
      },
      onFilter: handleFilter,
      onActivePill: setActivePill
    })]
  });
}

var _default = EStoreProduct;
exports.default = _default;
import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material'; // Types

import TabFilter from "./TabFilter";
import ContentFilter from "./ContentFilter";
import ProductList from "./ProductList";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function EStoreProduct(props) {
  var _typeTabFilter$tabLis, _typeTabFilter$tabLis2;

  var sortByText = props.sortByText,
      filterByText = props.filterByText,
      showMoreText = props.showMoreText,
      showLessText = props.showLessText,
      sortBy = props.sortBy,
      dataFilter = props.dataFilter,
      typeTabFilter = props.typeTabFilter,
      buttonPropsDone = props.buttonPropsDone,
      buttonPropsClear = props.buttonPropsClear,
      onFilter = props.onFilter,
      productList = props.productList,
      onLoadMore = props.onLoadMore,
      hadLoadMore = props.hadLoadMore,
      onSelectTab = props.onSelectTab;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      activePill = _useState2[0],
      setActivePill = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isShowFilter = _useState4[0],
      setIsShowFilter = _useState4[1];

  var _useState5 = useState(((_typeTabFilter$tabLis = typeTabFilter.tabList) == null ? void 0 : (_typeTabFilter$tabLis2 = _typeTabFilter$tabLis[0]) == null ? void 0 : _typeTabFilter$tabLis2.value) || ""),
      _useState6 = _slicedToArray(_useState5, 2),
      titleSelect = _useState6[0],
      setTitleSelect = _useState6[1];

  var _useState7 = useState([]),
      _useState8 = _slicedToArray(_useState7, 2),
      productListContent = _useState8[0],
      setProductListContent = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isCallApi = _useState10[0],
      setIsCallApi = _useState10[1];

  var refTimeOut = useRef();
  useEffect(function () {
    setProductListContent(productListContent);
    return function () {
      window.clearTimeout(refTimeOut.current);
    };
  }, [productListContent]);

  var handleScrollTop = function handleScrollTop() {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
      refTimeOut.current = setTimeout(function () {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }, 300);
    }
  };

  var handleFilter = function handleFilter(filter, sort) {
    setIsCallApi(true);
    setProductListContent([]);
    handleScrollTop();
    onFilter == null ? void 0 : onFilter(filter, sort, function () {
      setIsCallApi(false);
    });
  };

  var handleLoadMore = function handleLoadMore() {
    if (!isCallApi) {
      onLoadMore == null ? void 0 : onLoadMore();
    }
  };

  var handleSelectTab = function handleSelectTab(v) {
    setTitleSelect(v);
    setIsCallApi(true);
    setProductListContent([]);
    handleScrollTop();
    onSelectTab(v, function () {
      setIsCallApi(false);
    });
  };

  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      pointerEvents: isCallApi ? "none" : "auto"
    },
    children: [/*#__PURE__*/_jsx(TabFilter, _extends({}, typeTabFilter, {
      titleSelect: titleSelect,
      onSelectTab: handleSelectTab,
      active: activePill,
      onClickPill: function onClickPill() {
        setIsShowFilter(true);
      }
    })), /*#__PURE__*/_jsx(Box, {
      sx: {
        paddingTop: {
          xs: "32px",
          md: "64px"
        }
      },
      children: /*#__PURE__*/_jsx(ProductList, {
        productList: productList,
        onLoadMore: handleLoadMore,
        hadLoadMore: hadLoadMore
      })
    }), /*#__PURE__*/_jsx(ContentFilter, {
      sortByText: sortByText,
      filterByText: filterByText,
      showMoreText: showMoreText,
      showLessText: showLessText,
      sortBy: sortBy,
      dataFilter: dataFilter,
      buttonPropsDone: buttonPropsDone,
      buttonPropsClear: buttonPropsClear,
      isShowFilter: isShowFilter,
      onClose: function onClose() {
        setIsShowFilter(false);
      },
      onFilter: handleFilter,
      onActivePill: setActivePill
    })]
  });
}

export default EStoreProduct;
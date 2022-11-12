import _extends from "@babel/runtime/helpers/esm/extends";
import React, { useEffect, useRef, useState } from 'react';
import { Box } from '@mui/material'; // Types

import TabFilter from "./TabFilter";
import ContentFilter from "./ContentFilter";
import ProductList from "./ProductList";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function EStoreProduct(props) {
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
  const [activePill, setActivePill] = useState(false);
  const [isShowFilter, setIsShowFilter] = useState(false);
  const [titleSelect, setTitleSelect] = useState(typeTabFilter.tabList?.[0]?.value || "");
  const [productListContent, setProductListContent] = useState([]);
  const [isCallApi, setIsCallApi] = useState(false);
  const refTimeOut = useRef();
  useEffect(() => {
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
    onFilter?.(filter, sort, () => {
      setIsCallApi(false);
    });
  };

  const handleLoadMore = () => {
    if (!isCallApi) {
      onLoadMore?.();
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
      onClickPill: () => {
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
      onClose: () => {
        setIsShowFilter(false);
      },
      onFilter: handleFilter,
      onActivePill: setActivePill
    })]
  });
}

export default EStoreProduct;
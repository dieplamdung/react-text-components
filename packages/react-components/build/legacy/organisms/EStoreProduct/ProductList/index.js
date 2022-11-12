import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _IconLoading;

import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { IconLoading } from "../../../atoms/Icon";
import ProductItem from "../ProductItem";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function ProductList(props) {
  var _props$productList = props.productList,
      productList = _props$productList === void 0 ? [] : _props$productList,
      onLoadMore = props.onLoadMore,
      hadLoadMore = props.hadLoadMore;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasNextPage = _useState2[0],
      setHasNextPage = _useState2[1];

  var loading = null;
  useEffect(function () {
    setHasNextPage(hadLoadMore);
  }, [hadLoadMore]);

  var handleLoadMore = function handleLoadMore() {
    setTimeout(function () {
      onLoadMore == null ? void 0 : onLoadMore();
    }, 500);
  };

  var _useInfiniteScroll = useInfiniteScroll({
    loading: loading,
    hasNextPage: hasNextPage,
    onLoadMore: handleLoadMore,
    rootMargin: '0px 0px 200px 0px'
  }),
      _useInfiniteScroll2 = _slicedToArray(_useInfiniteScroll, 1),
      infiniteRef = _useInfiniteScroll2[0];

  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      flex: 1,
      display: "flex",
      flexDirection: "column"
    },
    children: [/*#__PURE__*/_jsx(Box, {
      sx: {
        flex: 1,
        display: "flex",
        flexWrap: "wrap",
        margin: "0px -11px"
      },
      children: !!(productList != null && productList.length) && (productList == null ? void 0 : productList.map(function (item, index) {
        return /*#__PURE__*/_jsx(Box, {
          sx: {
            width: {
              xs: "50%",
              md: "25%"
            },
            padding: "0px 11px"
          },
          children: /*#__PURE__*/_jsx(ProductItem, _extends({}, item))
        }, index);
      }))
    }), hasNextPage && /*#__PURE__*/_jsx(Box, {
      ref: infiniteRef,
      sx: {
        marginTop: {
          xs: '0px',
          md: '110px',
          display: 'flex',
          justifyContent: 'center'
        }
      },
      children: _IconLoading || (_IconLoading = /*#__PURE__*/_jsx(IconLoading, {}))
    })]
  });
}

export default /*#__PURE__*/React.memo(ProductList);
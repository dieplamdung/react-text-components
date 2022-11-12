import _extends from "@babel/runtime/helpers/esm/extends";

var _IconLoading;

import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useInfiniteScroll from 'react-infinite-scroll-hook';
import { IconLoading } from "../../../atoms/Icon";
import ProductItem from "../ProductItem";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function ProductList(props) {
  const {
    productList = [],
    onLoadMore,
    hadLoadMore
  } = props;
  const [hasNextPage, setHasNextPage] = useState(false);
  const loading = null;
  useEffect(() => {
    setHasNextPage(hadLoadMore);
  }, [hadLoadMore]);

  const handleLoadMore = () => {
    setTimeout(() => {
      onLoadMore == null ? void 0 : onLoadMore();
    }, 500);
  };

  const [infiniteRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: handleLoadMore,
    rootMargin: '0px 0px 200px 0px'
  });
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
      children: !!(productList != null && productList.length) && (productList == null ? void 0 : productList.map((item, index) => {
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
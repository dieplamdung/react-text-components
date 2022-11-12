import _extends from "@babel/runtime/helpers/esm/extends";

var _IconLoading;

import React, { useEffect, useState } from 'react';
import { Box, Grid } from '@mui/material';
import Typography from "../../atoms/Typography";
import { IconLoading } from "../../atoms/Icon";
import useInfiniteScroll from 'react-infinite-scroll-hook';
import MoreGameListingCard from "./MoreGameListingCard";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const VerticalScrollingMoreGameContainer = ({
  title,
  notFilter = true,
  onLoadMore,
  dataItem,
  nextPage = true,
  dataTranslation
}) => {
  const [items, setItems] = useState([]);
  const [hasNextPage, setHasNextPage] = React.useState(true);
  const loading = null;
  useEffect(() => {
    setItems(dataItem);
  }, [dataItem]);
  useEffect(() => {
    setHasNextPage(nextPage);
  }, [nextPage]); //  Handle load more

  const loadMore = () => {
    setTimeout(() => {
      onLoadMore?.();
    }, 500);
  };

  const [infiniteRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    // Some API call to fetch the next page
    // When there is an error, we stop infinite loading.
    // It can be reactivated by setting "error" state as undefined.
    // disabled: !!error,
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    rootMargin: '0px 0px 200px 0px'
  });
  useEffect(() => {
    if (notFilter && !!Object.keys(dataTranslation).length) {
      loadMore();
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [notFilter, dataTranslation]);
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      width: "100%"
    },
    children: [title && /*#__PURE__*/_jsx(Typography, {
      variant: "h4",
      sx: {
        marginBottom: {
          xs: "40px",
          md: "67px"
        }
      },
      children: title
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        padding: {
          xs: "0px",
          md: "0px"
        }
      },
      children: /*#__PURE__*/_jsx(Grid, {
        container: true,
        rowSpacing: "36px",
        sx: {
          width: '100% !important'
        },
        columnSpacing: {
          xs: '0px',
          md: '20px'
        },
        children: !!items?.length && items.map((listingCard, index) => {
          return /*#__PURE__*/_jsx(Grid, {
            item: true,
            xs: 12,
            md: 6,
            sx: {},
            children: /*#__PURE__*/_jsx(MoreGameListingCard, _extends({}, listingCard))
          }, index);
        })
      })
    }), hasNextPage && /*#__PURE__*/_jsx(Box, {
      ref: infiniteRef,
      sx: {
        marginTop: {
          xs: '40px',
          md: '110px',
          display: 'flex',
          justifyContent: 'center'
        }
      },
      children: _IconLoading || (_IconLoading = /*#__PURE__*/_jsx(IconLoading, {}))
    })]
  });
};

export default VerticalScrollingMoreGameContainer;
import _extends from "@babel/runtime/helpers/esm/extends";

var _IconLoading;

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

const VerticalScrollingLatestPost = props => {
  const {
    title,
    listThumbnail,
    dataQueryTags = [],
    handlerScroll,
    locale,
    mainImageNextProps,
    getNumberValue
  } = props;
  const [dataListSplice, setDataListSplice] = useState([]);
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState(listThumbnail);
  const [hasNextPage, setHasNextPage] = useState(true);
  const [error, setError] = useState();
  const [numberSkip, setNumberSkip] = useState(0);
  const [totalItem, setTotalItem] = useState(1);
  const [getDataQueryTags, setGetDataQueryTags] = useState(dataQueryTags);
  useEffect(() => {
    const data = [...items];
    const dataCache = [];

    while (data.length) {
      const dataSplice = data.splice(0, 5);
      dataCache.push(dataSplice);
      setDataListSplice(dataCache);
    }

    getNumberValue?.(items.length); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  const handleSetWidthItem = idx => {
    if (idx <= 1) {
      return 'calc(50% - 11px)';
    }

    return 'calc(33.333% - 15px)';
  };

  const handleSetPaddingItem = idx => {
    if (idx <= 1) {
      return '55%';
    }

    return '66%';
  }; // Handle call api load item


  const loadItems = () => {
    return new Promise(resolve => {
      const newArray = [];

      if (items.length < totalItem) {
        setTimeout(() => {
          handlerScroll(locale, getDataQueryTags, NUMBER_ITEMS, numberSkip * NUMBER_ITEMS).then(dataItem => {
            setTotalItem(dataItem.total);
            dataItem?.items?.forEach(item => {
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


  const loadMore = async () => {
    setLoading(true);

    try {
      const {
        data,
        hasNextPage: newHasNextPage
      } = await loadItems();
      setItems(current => [...current, ...data]);
      setHasNextPage(newHasNextPage);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const [infiniteRef] = useInfiniteScroll({
    loading,
    hasNextPage,
    onLoadMore: loadMore,
    // Some API call to fetch the next page
    // When there is an error, we stop infinite loading.
    // It can be reactivated by setting "error" state as undefined.
    disabled: !!error,
    // `rootMargin` is passed to `IntersectionObserver`.
    // We can use it to trigger 'onLoadMore' when the sentry comes near to become
    // visible, instead of becoming fully visible on the screen.
    rootMargin: '0px 0px 200px 0px'
  });
  useEffect(() => {
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
      children: !!dataListSplice?.length && dataListSplice?.map((child, idx) => /*#__PURE__*/_jsx(Box, {
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
        children: !!child?.length && child?.map((item, index) => /*#__PURE__*/_jsx(Box, {
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
        }, item.title))
      }, `section ${idx}`))
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
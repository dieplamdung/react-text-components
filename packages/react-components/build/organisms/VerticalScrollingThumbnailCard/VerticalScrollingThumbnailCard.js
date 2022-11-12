import _extends from "@babel/runtime/helpers/esm/extends";

var _IconLoading;

// import modules
import Box from '@mui/material/Box';
import React, { useEffect } from 'react'; // import type

import useInfiniteScroll from 'react-infinite-scroll-hook'; // import colors

import colors from "../../theme/colors";
import Typography from "../../atoms/Typography";
import HorizontalNewsCard from "../../molecules/HorizontalNewsCard";
import { IconLoading } from "../../atoms/Icon";
import { NUMBER_ITEMS, RESPONSE_TIME_IN_MS } from "../../utils/constants";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const VerticalSCrollingThumbnailCardAPI = props => {
  const {
    title,
    locale,
    handlerScroll,
    dataQueryTags = [],
    setDataFilterSelected,
    dataQueryGame = '',
    nextImage
  } = props;
  const [loading, setLoading] = React.useState(false);
  const [items, setItems] = React.useState([]);
  const [hasNextPage, setHasNextPage] = React.useState(true);
  const [error, setError] = React.useState();
  const [numberSkip, setNumberSkip] = React.useState(0);
  const [totalItem, setTotalItem] = React.useState(1);
  const [getDataQueryTags, setGetDataQueryTags] = React.useState(dataQueryTags);
  const [dataQuGame, setDataQuGame] = React.useState(dataQueryGame);

  // Handle call api load item
  const loadItems = () => {
    return new Promise(resolve => {
      const newArray = [];

      if (items.length < totalItem) {
        setTimeout(() => {
          handlerScroll(locale, getDataQueryTags, NUMBER_ITEMS, numberSkip * NUMBER_ITEMS, dataQuGame).then(dataItem => {
            var _dataItem$items;

            setTotalItem(dataItem.total);
            dataItem == null ? void 0 : (_dataItem$items = dataItem.items) == null ? void 0 : _dataItem$items.forEach(item => {
              newArray.push(item);
            });
            setNumberSkip(numberSkip + 1); // Increase number skip when each load
            // Handle hidden icon loading

            if (newArray.length + items.length >= dataItem.total) {
              if (typeof setDataFilterSelected === 'function') {
                setDataFilterSelected(newArray);
              }

              resolve({
                hasNextPage: false,
                data: newArray
              });
            } else {
              if (typeof setDataFilterSelected === 'function') {
                setDataFilterSelected(newArray);
              }

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
    setHasNextPage(true);
    setItems([]);

    if (!(dataQueryTags != null && dataQueryTags.length)) {
      setGetDataQueryTags([]);
    } else {
      setGetDataQueryTags(dataQueryTags);
    }

    setDataQuGame(dataQueryGame);
  }, [dataQueryTags, dataQueryGame]);
  return /*#__PURE__*/_jsxs(Box, {
    children: [title && /*#__PURE__*/_jsx(Typography, {
      variant: "h4",
      color: colors.primary.bandaiNamcoBlack,
      sx: {
        marginBottom: {
          xs: '24px',
          md: '40px'
        }
      },
      children: title
    }), items.map((item, idx) => /*#__PURE__*/_jsx(Box, {
      sx: {
        marginTop: {
          xs: '20px',
          md: '36px'
        },
        '&:first-of-type': {
          marginTop: '0px'
        }
      },
      children: /*#__PURE__*/_jsx(HorizontalNewsCard, _extends({
        nextImage: nextImage
      }, item))
    }, item.title + idx)), hasNextPage && /*#__PURE__*/_jsx(Box, {
      ref: infiniteRef,
      sx: {
        display: 'flex',
        justifyContent: 'center',
        margin: {
          xs: '80px 0px',
          md: '156px 0px'
        }
      },
      children: _IconLoading || (_IconLoading = /*#__PURE__*/_jsx(IconLoading, {}))
    })]
  });
};

export default VerticalSCrollingThumbnailCardAPI;
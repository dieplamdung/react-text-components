import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'; // Types

import Typography from "../../atoms/Typography";
import MoreGameListingCard from "../../molecules/MoreGameListingCard";
import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// import { ISearchResultGame } from './types';
var SearchResultGame = function SearchResultGame(props) {
  var _propsGame$viewMore, _propsGame$viewMore2;

  var propsGame = props.propsGame,
      clickViewMore = props.clickViewMore;

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      dataItem = _useState2[0],
      setDataItem = _useState2[1];

  useEffect(function () {
    if (propsGame != null && propsGame.numberShow) {
      var dataClone = _toConsumableArray(propsGame.listThumbnail);

      var data = dataClone.splice(0, propsGame == null ? void 0 : propsGame.numberShow);
      setDataItem(data);
    } else {
      setDataItem(propsGame == null ? void 0 : propsGame.listThumbnail);
    }
  }, [propsGame == null ? void 0 : propsGame.numberShow, propsGame == null ? void 0 : propsGame.listThumbnail]);
  return /*#__PURE__*/_jsxs(Box, {
    children: [/*#__PURE__*/_jsxs(Box, {
      sx: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: '0',
        paddingRight: '16px',
        maxWidth: {
          xs: 'calc(100vw - 16px)',
          md: '720px',
          lg: '960px',
          xl: '1140px'
        },
        marginBottom: {
          xs: propsGame != null && propsGame.title ? '35px' : '0px',
          md: propsGame != null && propsGame.title ? '67px' : '0px'
        }
      },
      children: [propsGame.title && /*#__PURE__*/_jsxs(Typography, {
        variant: "h2",
        color: colors.primary.bandaiNamcoBlack,
        sx: {
          display: 'flex',
          alignItems: 'center'
        },
        children: [propsGame.title, /*#__PURE__*/_jsx(Typography, {
          variant: "p5",
          sx: {
            minWidth: '28px',
            height: '28px',
            borderRadius: (propsGame == null ? void 0 : propsGame.listThumbnail.length) > 99 ? '8px !important' : '100%',
            backgroundColor: colors.neutral.neutral6,
            overflow: 'hidden',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: '6px !important',
            paddingLeft: (propsGame == null ? void 0 : propsGame.listThumbnail.length) > 99 ? '6px !important' : '0px !important',
            paddingRight: (propsGame == null ? void 0 : propsGame.listThumbnail.length) > 99 ? '6px !important' : '0px !important'
          },
          children: propsGame == null ? void 0 : propsGame.listThumbnail.length
        })]
      }), (propsGame == null ? void 0 : propsGame.listThumbnail.length) > 4 && /*#__PURE__*/_jsx(Box, {
        sx: {
          display: 'flex',
          alignItems: 'center'
        },
        children: /*#__PURE__*/_jsx(Box, {
          children: ((_propsGame$viewMore = propsGame.viewMore) == null ? void 0 : _propsGame$viewMore.title) && /*#__PURE__*/_jsx(Box, {
            sx: {
              display: 'inline-block'
            },
            onClick: function onClick() {
              return clickViewMore == null ? void 0 : clickViewMore();
            },
            children: /*#__PURE__*/_jsx(Box, {
              component: 'span' // href={propsGame.viewMore?.href}
              // target={propsGame.viewMore?.target}
              ,
              sx: {
                cursor: 'pointer',
                borderBottom: "1px solid ".concat(colors.neutral.neutral2),
                transition: 'all .4s',
                color: colors.neutral.neutral2,
                textDecoration: 'none',
                lineHeight: '21px',
                display: 'inline-block',
                '&:hover': {
                  '& p': {
                    color: colors.primary.bandaiNamcoBlack
                  },
                  borderBottom: "1px solid ".concat(colors.primary.bandaiNamcoBlack)
                }
              },
              children: /*#__PURE__*/_jsx(Typography, {
                variant: "p5",
                color: colors.neutral.neutral2,
                sx: {
                  transition: 'all .4s'
                },
                children: (_propsGame$viewMore2 = propsGame.viewMore) == null ? void 0 : _propsGame$viewMore2.title
              })
            })
          })
        })
      })]
    }), /*#__PURE__*/_jsx(Box, {
      children: /*#__PURE__*/_jsx(Grid, {
        container: true,
        rowSpacing: "36px",
        children: !!(dataItem != null && dataItem.length) && dataItem.map(function (item, idx) {
          return /*#__PURE__*/_jsx(Grid, {
            item: true,
            xs: 12,
            md: 12,
            lg: 6,
            children: /*#__PURE__*/_jsx(MoreGameListingCard, _extends({}, item), idx)
          }, idx);
        })
      })
    })]
  });
};

export default SearchResultGame;
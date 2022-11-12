import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { TabletDown } from "../../utils/viewport";
import ResultItem from "./ResultItem";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var ContentResultSearch = function ContentResultSearch(_ref) {
  var valueSearch = _ref.valueSearch,
      _ref$listResult = _ref.listResult,
      listResult = _ref$listResult === void 0 ? [] : _ref$listResult,
      _ref$recentList = _ref.recentList,
      recentList = _ref$recentList === void 0 ? [] : _ref$recentList,
      hrefSeeAll = _ref.hrefSeeAll,
      textTopTrending = _ref.textTopTrending,
      textRecent = _ref.textRecent;
  var RECENT_LOCAL = "recent_local";
  var theme = useTheme();
  var isTabletDown = useMediaQuery(TabletDown(theme));

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      listResultSearch = _useState2[0],
      setListResultSearch = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      recent = _useState4[0],
      setRecent = _useState4[1];

  useEffect(function () {
    if (recentList) {
      setRecent(recentList || []);
    }

    setListResultSearch(listResult);
  }, [recentList, listResult]);

  var handleClearRecent = function handleClearRecent() {
    // localStorage.setItem(RECENT_LOCAL, JSON.stringify(recent));
    if (typeof window !== "undefined") {
      localStorage.removeItem(RECENT_LOCAL);
    }

    setRecent([]);
  };

  return /*#__PURE__*/_jsxs(Box, {
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
    children: [!!listResultSearch.length && /*#__PURE__*/_jsx(ResultItem, {
      title: textTopTrending,
      listResult: listResultSearch,
      hrefSeeAll: hrefSeeAll,
      valueSearch: valueSearch
    }), !!recent.length && !valueSearch && /*#__PURE__*/_jsx(ResultItem, {
      title: textRecent != null ? textRecent : '',
      listResult: recent,
      onClearRecent: handleClearRecent,
      isRecent: true
    }), !isTabletDown && !!recent.length && !valueSearch && /*#__PURE__*/_jsx(Box, {
      children: /*#__PURE__*/_jsx(Typography, {
        variant: "p5",
        color: colors.neutral.neutral2,
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
            borderBottom: "2px solid ".concat(colors.neutral.neutral2)
          }
        },
        onClick: handleClearRecent,
        children: "Clear all"
      })
    })]
  });
};

export default ContentResultSearch;
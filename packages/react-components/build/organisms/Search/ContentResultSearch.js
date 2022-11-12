import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { TabletDown } from "../../utils/viewport";
import ResultItem from "./ResultItem";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const ContentResultSearch = ({
  valueSearch,
  listResult = [],
  recentList = [],
  hrefSeeAll,
  textTopTrending,
  textRecent
}) => {
  const RECENT_LOCAL = "recent_local";
  const theme = useTheme();
  const isTabletDown = useMediaQuery(TabletDown(theme));
  const [listResultSearch, setListResultSearch] = useState([]);
  const [recent, setRecent] = useState([]);
  useEffect(() => {
    if (recentList) {
      setRecent(recentList || []);
    }

    setListResultSearch(listResult);
  }, [recentList, listResult]);

  const handleClearRecent = () => {
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
            borderBottom: `2px solid ${colors.neutral.neutral2}`
          }
        },
        onClick: handleClearRecent,
        children: "Clear all"
      })
    })]
  });
};

export default ContentResultSearch;
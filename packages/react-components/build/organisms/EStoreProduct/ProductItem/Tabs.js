import { Box, useMediaQuery } from '@mui/material';
import React, { memo } from 'react';
import { jsx as _jsx } from "react/jsx-runtime";

function Tabs(props) {
  const {
    tabList = []
  } = props;
  const isMobileBigger = useMediaQuery('(max-width:322px)', {
    noSsr: true
  });
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      display: "flex",
      width: "100%",
      flexWrap: "wrap",
      gap: "8px",
      marginBottom: "8px",
      minHeight: "24px"
    },
    children: !!(tabList != null && tabList.length) && tabList.map((tab, index) => {
      return /*#__PURE__*/_jsx(Box, {
        sx: {
          background: (tab == null ? void 0 : tab.color) || "#0169B2",
          width: isMobileBigger ? "min-content" : "fit-content",
          display: "flex",
          alignItems: "center",
          color: "#fff",
          fontWeight: "700",
          fontSize: "10px",
          lineHeight: "14px",
          textTransform: "uppercase",
          padding: "4px 8px 6px 8px",
          borderRadius: "5px",
          whiteSpace: "nowrap"
        },
        children: tab == null ? void 0 : tab.title
      }, index);
    })
  });
}

export default /*#__PURE__*/memo(Tabs);
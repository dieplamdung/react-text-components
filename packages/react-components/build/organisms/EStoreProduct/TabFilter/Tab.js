import { Box } from '@mui/material';
import React from 'react';
import Typography from "../../../atoms/Typography";
import colors from "../../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";

function Tab(props) {
  const {
    tabList = [],
    titleSelect,
    onSelectTab
  } = props;
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      display: "flex"
    },
    children: (tabList == null ? void 0 : tabList.length) && tabList.map((tab, index) => {
      return /*#__PURE__*/_jsx(Typography, {
        variant: "p3",
        color: titleSelect === (tab == null ? void 0 : tab.value) ? colors.primary.bandaiNamcoRed : colors.neutral.neutral4,
        sx: {
          width: "fit-content",
          lineHeight: {
            md: "24px",
            xs: "22px"
          },
          marginRight: {
            xs: "28px",
            md: "48px"
          },
          position: "relative",
          cursor: "pointer",
          "&:before": {
            position: "absolute",
            display: "flex",
            content: "' '",
            width: titleSelect === (tab == null ? void 0 : tab.value) ? "100%" : "0%",
            bottom: "0px",
            left: "0px",
            borderRadius: "20px",
            borderBottom: "2px solid",
            borderBottomColor: colors.primary.bandaiNamcoRed,
            transition: "all 0.3s"
          },
          "&:hover": {
            color: colors.primary.bandaiNamcoRed,
            "&:before": {
              width: "100%"
            }
          }
        },
        onClick: () => onSelectTab(tab.value),
        children: tab == null ? void 0 : tab.title
      }, index);
    })
  });
}

export default Tab;
// import modules
import Box from '@mui/material/Box';
import React, { useEffect, useState } from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";

// define function
const TabAccount = props => {
  const {
    titleList,
    titleSelect = "",
    onChangeTab = () => {}
  } = props;
  const [titleL, setTitleL] = useState([]);
  useEffect(() => {
    setTitleL(titleList);
  }, [titleList]);
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      display: "flex",
      width: "100%",
      position: "relative",
      "&::before": {
        content: "''",
        position: "absolute",
        left: "0px",
        width: "100%",
        bottom: "0px",
        borderBottom: "1px solid",
        borderBottomColor: "#DDDDDD",
        opacity: "0.5"
      }
    },
    children: !!titleL.length && titleL.map((item, index) => {
      return /*#__PURE__*/_jsx(Box, {
        sx: {
          marginRight: {
            xs: "40px",
            md: "80px"
          },
          cursor: "pointer",
          width: "fit-content",
          paddingBottom: {
            xs: "8px",
            md: "12px"
          },
          position: "relative",
          "&::before": {
            display: titleSelect === item.value ? "flex" : "none",
            content: "''",
            position: "absolute",
            left: "0px",
            width: "100%",
            bottom: "0px",
            borderBottom: "3px solid",
            borderBottomColor: "red"
          },
          "&:last-child": {
            marginRight: "0px"
          }
        },
        onClick: () => onChangeTab(item.value),
        children: /*#__PURE__*/_jsx(Typography, {
          variant: "h5",
          sx: {
            letterSpacing: "-0.4px",
            color: colors.primary.bandaiNamcoBlack,
            opacity: titleSelect === item.value ? "1" : "0.5",
            transition: "all 0.2s"
          },
          children: item == null ? void 0 : item.title
        })
      }, index);
    })
  });
};

export default /*#__PURE__*/React.memo(TabAccount);
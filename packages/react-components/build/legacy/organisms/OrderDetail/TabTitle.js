import { Box } from '@mui/material';
import React from 'react';
import Typography from "../../atoms/Typography";
import { jsx as _jsx } from "react/jsx-runtime";

function TabTitle(props) {
  var title = props.title,
      _props$isMin = props.isMin,
      isMin = _props$isMin === void 0 ? false : _props$isMin;
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      width: "100%",
      paddingBottom: "16px",
      position: "relative",
      "&:before": {
        content: "' '",
        position: "absolute",
        width: "100%",
        bottom: "0px",
        left: "0px",
        borderBottom: "1px solid #DDDDDD",
        opacity: "0.5"
      }
    },
    children: /*#__PURE__*/_jsx(Typography, {
      variant: isMin ? "h5" : 'h2',
      sx: {
        fontWeight: "700"
      },
      children: title
    })
  });
}

export default TabTitle;
import React, { useState } from 'react';
import { Box } from '@mui/material';
import colors from "../../theme/colors";
import Typography from "../Typography";
import { jsx as _jsx } from "react/jsx-runtime";
export default function Tabs(props) {
  const {
    listTabs,
    data = () => {}
  } = props;
  const [active, setActive] = useState(listTabs?.[0]?.id ?? 1);

  const handleClick = id => {
    setActive(id);
    data(id);
  };

  return /*#__PURE__*/_jsx(Box, {
    sx: {
      display: 'flex',
      gap: {
        xs: '28px',
        md: '48px'
      }
    },
    children: listTabs?.map((tab, index) => /*#__PURE__*/_jsx(Box, {
      sx: {
        "&:hover": {
          "& p": {
            color: colors.primary.bandaiNamcoRed,
            "&::after": {
              width: "100%"
            }
          }
        }
      },
      children: /*#__PURE__*/_jsx(Typography, {
        variant: "p3",
        onClick: () => handleClick(tab?.id || index),
        sx: {
          color: tab.id === active ? colors.primary.bandaiNamcoRed : colors.neutral.neutral4,
          cursor: 'pointer',
          position: "relative",
          "&::after": {
            content: "' '",
            position: "absolute",
            backgroundColor: colors.primary.bandaiNamcoRed,
            left: "0px",
            bottom: "0px",
            width: tab?.id === active ? "100%" : '0px',
            height: '1px',
            transition: 'all .3s'
          }
        },
        children: tab.label
      })
    }, index))
  });
}
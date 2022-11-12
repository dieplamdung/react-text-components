import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useState } from 'react';
import { Box } from '@mui/material';
import colors from "../../theme/colors";
import Typography from "../Typography";
import { jsx as _jsx } from "react/jsx-runtime";
export default function Tabs(props) {
  var _listTabs$0$id, _listTabs$;

  var listTabs = props.listTabs,
      _props$data = props.data,
      data = _props$data === void 0 ? function () {} : _props$data;

  var _useState = useState((_listTabs$0$id = listTabs == null ? void 0 : (_listTabs$ = listTabs[0]) == null ? void 0 : _listTabs$.id) != null ? _listTabs$0$id : 1),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  var handleClick = function handleClick(id) {
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
    children: listTabs == null ? void 0 : listTabs.map(function (tab, index) {
      return /*#__PURE__*/_jsx(Box, {
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
          onClick: function onClick() {
            return handleClick((tab == null ? void 0 : tab.id) || index);
          },
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
              width: (tab == null ? void 0 : tab.id) === active ? "100%" : '0px',
              height: '1px',
              transition: 'all .3s'
            }
          },
          children: tab.label
        })
      }, index);
    })
  });
}
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// import Modules
import React, { useState } from 'react';
import { Box } from '@mui/material';
import Typography from "../Typography"; // import Styles

import colors from "../../theme/colors"; // import Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
export default function TabIcons(props) {
  var listTabs = props.listTabs,
      _props$onChangeTab = props.onChangeTab,
      onChangeTab = _props$onChangeTab === void 0 ? function () {} : _props$onChangeTab;

  var _useState = useState(-1),
      _useState2 = _slicedToArray(_useState, 2),
      currentActivated = _useState2[0],
      setCurrentActivated = _useState2[1];
  /**
   * Use to return a id (index) to parent component to display data after it's clicked
   * @param id
   * @param label
   */


  var handleClicked = function handleClicked(id) {
    setCurrentActivated(currentActivated === id ? -1 : id);
    onChangeTab(currentActivated === id ? -1 : id);
  };

  return /*#__PURE__*/_jsx(Box, {
    sx: {
      display: 'flex',
      flexGrow: 4,
      flexWrap: {
        xs: 'wrap',
        lg: 'nowrap'
      },
      justifyContent: {
        xs: 'space-between',
        lg: 'flex-start'
      },
      gap: {
        xs: '16px',
        md: '24px'
      }
    },
    children: listTabs == null ? void 0 : listTabs.map(function (tab, index) {
      return /*#__PURE__*/_jsxs(Box, {
        onClick: function onClick() {
          handleClicked(index);
        },
        sx: {
          cursor: 'pointer',
          flex: {
            xs: '1 1 calc(50% - 16px)',
            md: '1 1 calc(50% - 16px)',
            lg: '1 1 167px'
          },
          padding: {
            xs: '16px 16px',
            md: '24px 12px'
          },
          border: '1px solid',
          borderRadius: '10px',
          textAlign: 'center',
          borderColor: index === currentActivated ? colors.secondary.bandaiNamcoGreen : colors.neutral.neutral5
        },
        children: [tab.icon, /*#__PURE__*/_jsx(Typography, {
          variant: "p7",
          sx: {
            color: index === currentActivated ? colors.secondary.bandaiNamcoGreen : colors.primary.bandaiNamcoBlack,
            cursor: 'pointer',
            marginTop: '8px',
            WebkitTouchCallout: 'none',
            WebkitUserSelect: 'none',
            KhtmlUserSelect: 'none',
            MozUserSelect: 'none',
            MsUserSelect: 'none',
            userSelect: 'none'
          },
          children: tab.label
        })]
      }, index);
    })
  });
}
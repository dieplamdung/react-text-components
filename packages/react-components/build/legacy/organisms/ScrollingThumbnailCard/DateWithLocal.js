import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var DateWithLocal = function DateWithLocal(_ref) {
  var _fromDate$month, _fromDate$month2;

  var locale = _ref.locale,
      toDate = _ref.toDate,
      fromDate = _ref.fromDate,
      textDateRange = _ref.textDateRange;

  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isLocalES = _useState2[0],
      setIsLocalES = _useState2[1];

  useEffect(function () {
    var newLocal = locale == null ? void 0 : locale.toLowerCase();

    if (newLocal === 'hk-tc' || newLocal === 'hk-sc' || newLocal === 'tw-tc' || newLocal === 'tw-sc' || locale === 'ko-kr') {
      setIsLocalES(false);
    } else {
      setIsLocalES(true);
    }
  }, [locale]);
  return /*#__PURE__*/_jsx(Box, {
    children: (fromDate == null ? void 0 : fromDate.month) && (fromDate == null ? void 0 : fromDate.day) && /*#__PURE__*/_jsxs(React.Fragment, {
      children: [fromDate && toDate && isLocalES && /*#__PURE__*/_jsx(Typography, {
        variant: "l2",
        color: colors.otherColor.silver,
        sx: {
          marginTop: '-4px',
          whiteSpace: 'nowrap',
          marginLeft: {
            xs: "12px",
            md: "22px"
          }
        },
        children: textDateRange.toUpperCase()
      }), !isLocalES && /*#__PURE__*/_jsx(Typography, {
        variant: 'h6',
        color: colors.otherColor.silver,
        sx: {
          marginTop: '-7px',
          whiteSpace: "nowrap",
          marginLeft: {
            xs: "12px",
            md: "22px"
          }
        },
        children: fromDate == null ? void 0 : (_fromDate$month = fromDate.month) == null ? void 0 : _fromDate$month.toUpperCase()
      }), /*#__PURE__*/_jsx(Typography, {
        variant: isLocalES ? 'h2' : "h6",
        color: colors.otherColor.silver,
        sx: {
          marginTop: "".concat(isLocalES ? '-7px' : "-5px"),
          marginLeft: {
            xs: "12px",
            md: "22px"
          },
          minWidth: "40px",
          whiteSpace: "nowrap"
        },
        children: fromDate == null ? void 0 : fromDate.day
      }), isLocalES && /*#__PURE__*/_jsx(Typography, {
        variant: 'p5',
        color: colors.otherColor.silver,
        sx: {
          marginTop: '-5px',
          whiteSpace: "nowrap",
          marginLeft: {
            xs: "12px",
            md: "22px"
          }
        },
        children: fromDate == null ? void 0 : (_fromDate$month2 = fromDate.month) == null ? void 0 : _fromDate$month2.toUpperCase()
      }), fromDate && toDate && !isLocalES && /*#__PURE__*/_jsx(Typography, {
        variant: "p5",
        color: colors.otherColor.silver,
        sx: {
          marginTop: '2px',
          whiteSpace: "nowrap",
          marginLeft: {
            xs: "12px",
            md: "22px"
          }
        },
        children: textDateRange.toUpperCase()
      })]
    })
  });
};

export default DateWithLocal;
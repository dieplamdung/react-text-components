import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const DateWithLocal = ({
  locale,
  toDate,
  fromDate,
  textDateRange
}) => {
  const [isLocalES, setIsLocalES] = useState(true);
  useEffect(() => {
    const newLocal = locale?.toLowerCase();

    if (newLocal === 'hk-tc' || newLocal === 'hk-sc' || newLocal === 'tw-tc' || newLocal === 'tw-sc' || locale === 'ko-kr') {
      setIsLocalES(false);
    } else {
      setIsLocalES(true);
    }
  }, [locale]);
  return /*#__PURE__*/_jsx(Box, {
    children: fromDate?.month && fromDate?.day && /*#__PURE__*/_jsxs(React.Fragment, {
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
        children: fromDate?.month?.toUpperCase()
      }), /*#__PURE__*/_jsx(Typography, {
        variant: isLocalES ? 'h2' : "h6",
        color: colors.otherColor.silver,
        sx: {
          marginTop: `${isLocalES ? '-7px' : "-5px"}`,
          marginLeft: {
            xs: "12px",
            md: "22px"
          },
          minWidth: "40px",
          whiteSpace: "nowrap"
        },
        children: fromDate?.day
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
        children: fromDate?.month?.toUpperCase()
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
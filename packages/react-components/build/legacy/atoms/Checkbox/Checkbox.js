import _slicedToArray from '@babel/runtime/helpers/esm/slicedToArray';

var _svg;

import React, { useEffect, useState } from 'react';
import colors from '../../theme/colors';
import { Box } from '@mui/material'; // Types

import Typography from '../Typography';
import { jsx as _jsx } from 'react/jsx-runtime';
import { jsxs as _jsxs } from 'react/jsx-runtime';

var Checkbox = function Checkbox(_ref) {
  var _ref$isChecked = _ref.isChecked,
    isChecked = _ref$isChecked === void 0 ? false : _ref$isChecked,
    onChange = _ref.onChange,
    title = _ref.title,
    _ref$isSub = _ref.isSub,
    isSub = _ref$isSub === void 0 ? false : _ref$isSub;

  var _useState = useState(true),
    _useState2 = _slicedToArray(_useState, 2),
    isCheck = _useState2[0],
    setIsCheck = _useState2[1];

  useEffect(
    function () {
      setIsCheck(isChecked);
    },
    [isChecked],
  );

  var Icon =
    _svg ||
    (_svg = /*#__PURE__*/ _jsx('svg', {
      width: '14',
      height: '10',
      viewBox: '0 0 14 10',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: /*#__PURE__*/ _jsx('path', {
        d: 'M1 5L5 9L13 1',
        stroke: '#0169B2',
        strokeWidth: '2',
        strokeMiterlimit: '10',
        strokeLinecap: 'round',
        strokeLinejoin: 'round',
      }),
    }));

  return /*#__PURE__*/ _jsxs(Box, {
    sx: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    children: [
      title &&
        /*#__PURE__*/ _jsx(Typography, {
          variant: isSub ? 'p5' : 'p1',
          color: colors.otherColor.english,
          onClick: function onClick() {
            setIsCheck(!isCheck);
            onChange(!isCheck);
          },
          sx: {
            width: '100%',
            cursor: 'pointer',
            fontSize: {
              md: isSub ? '16px' : '20px',
              xs: isSub ? '14px' : '16px',
            },
            lineHeight: {
              md: isSub ? '22px' : '26px',
              xs: isSub ? '20px' : '22px',
            },
            fontWeight: 600,
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            display: 'block',
            textOverflow: 'ellipsis',
            marginRight: '4px',
          },
          children: title,
        }),
      /*#__PURE__*/ _jsx(Box, {
        sx: {
          display: 'flex',
          width: 24,
          height: 24,
          minWidth: 24,
          minHeight: 24,
          justifyContent: 'center',
          alignItems: 'center',
          background: isCheck ? 'rgba(1, 105, 178, 0.1)' : colors.neutral.neutral6,
          borderRadius: '4px',
          border: '1px solid',
          borderColor: isCheck ? colors.secondary.reactNamcoBlue : colors.neutral.neutral6,
          transform: 'all 0.3s',
          cursor: 'pointer',
        },
        onClick: function onClick() {
          setIsCheck(!isCheck);
          onChange(!isCheck);
        },
        children: isCheck && Icon,
      }),
    ],
  });
};

export default Checkbox;

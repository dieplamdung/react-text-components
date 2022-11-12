import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { Box } from '@mui/material';
import { jsx as _jsx } from "react/jsx-runtime";
export default function Image(props) {
  return /*#__PURE__*/_jsx(Box, _extends({
    component: "img"
  }, props, {
    sx: _extends({
      verticalAlign: 'middle',
      maxWidth: '100%',
      maxHeight: '100%'
    }, (props == null ? void 0 : props.sx) || {})
  }));
}
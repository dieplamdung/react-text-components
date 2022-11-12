import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { Container as MuiContainer } from '@mui/material'; // Import viewport specification

import { DESKTOP_MAX_WIDTH, SMALL_DESKTOP_MAX_WIDTH, TABLET_MAX_WIDTH, MOBILE_MAX_WIDTH } from "../../utils/viewport/constants"; // Types

import { jsx as _jsx } from "react/jsx-runtime";

/**
 * Wrapper for the component to set max-width and others common style
 */
const Container = /*#__PURE__*/React.forwardRef((props, ref) => {
  const {
    children,
    sx
  } = props;
  return /*#__PURE__*/_jsx(MuiContainer, _extends({
    ref: ref
  }, props, {
    sx: _extends({
      maxWidth: {
        xl: DESKTOP_MAX_WIDTH,
        lg: SMALL_DESKTOP_MAX_WIDTH,
        md: TABLET_MAX_WIDTH,
        xs: MOBILE_MAX_WIDTH
      },
      padding: '0 16px'
    }, sx || {}),
    children: children
  }));
});
export default Container;
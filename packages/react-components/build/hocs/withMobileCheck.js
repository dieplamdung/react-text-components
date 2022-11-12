import _extends from "@babel/runtime/helpers/esm/extends";
import React from 'react';
import { useTheme } from '@mui/styles';
import { useMediaQuery } from '@mui/material';
import { MobileDown } from "../utils/viewport";
import { jsx as _jsx } from "react/jsx-runtime";
export function withMobileCheck(WrappedComponent) {
  const ComponentWithMobileCheck = props => {
    const theme = useTheme();
    const isMobileDown = useMediaQuery(MobileDown(theme));
    return /*#__PURE__*/_jsx(WrappedComponent, _extends({}, props, {
      isMobile: isMobileDown
    }));
  };

  return ComponentWithMobileCheck;
}
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _viewport = require("../utils/viewport");

/* eslint-disable react-hooks/rules-of-hooks */
// Viewport

/**
 * @param muiTheme material theme, can reach when invoke useTheme()
 * @param option options with it's breakpoint
 * @param defaultValue default value when viewport map nothing
 * @returns the value mapped
 */
function breakpointSwitch(muiTheme, option, defaultValue) {
  const mobileUp = (0, _material.useMediaQuery)((0, _viewport.Mobile)(muiTheme));
  const smUp = (0, _material.useMediaQuery)(muiTheme.breakpoints.up('sm'));
  const tabletUp = (0, _material.useMediaQuery)((0, _viewport.UpFromTablet)(muiTheme));
  const smallDesktopUp = (0, _material.useMediaQuery)((0, _viewport.UpFromSmallDesktop)(muiTheme));
  const desktopUp = (0, _material.useMediaQuery)((0, _viewport.UpFromDesktop)(muiTheme));
  let result = defaultValue;

  if (mobileUp && option.xs) {
    result = option.xs;
  }

  if (smUp && option.sm) {
    result = option.sm;
  }

  if (tabletUp && option.md) {
    result = option.md;
  }

  if (smallDesktopUp && option.lg) {
    result = option.lg;
  }

  if (desktopUp && option.xl) {
    result = option.xl;
  }

  return result;
} // Can pass material theme to use this hook


const useBreakpointSwitch = muiTheme => function breakpointSwitchWrap(option, defaultValue) {
  breakpointSwitch(muiTheme, option, defaultValue);
};

var _default = useBreakpointSwitch;
exports.default = _default;
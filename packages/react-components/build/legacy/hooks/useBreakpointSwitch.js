/* eslint-disable react-hooks/rules-of-hooks */
import { useMediaQuery } from '@mui/material'; // Themes

// Viewport
import { Mobile, UpFromTablet, UpFromSmallDesktop, UpFromDesktop } from "../utils/viewport";

/**
 * @param muiTheme material theme, can reach when invoke useTheme()
 * @param option options with it's breakpoint
 * @param defaultValue default value when viewport map nothing
 * @returns the value mapped
 */
function breakpointSwitch(muiTheme, option, defaultValue) {
  var mobileUp = useMediaQuery(Mobile(muiTheme));
  var smUp = useMediaQuery(muiTheme.breakpoints.up('sm'));
  var tabletUp = useMediaQuery(UpFromTablet(muiTheme));
  var smallDesktopUp = useMediaQuery(UpFromSmallDesktop(muiTheme));
  var desktopUp = useMediaQuery(UpFromDesktop(muiTheme));
  var result = defaultValue;

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


var useBreakpointSwitch = function useBreakpointSwitch(muiTheme) {
  return function breakpointSwitchWrap(option, defaultValue) {
    breakpointSwitch(muiTheme, option, defaultValue);
  };
};

export default useBreakpointSwitch;
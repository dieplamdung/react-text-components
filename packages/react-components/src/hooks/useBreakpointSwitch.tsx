/* eslint-disable react-hooks/rules-of-hooks */
import { useMediaQuery } from '@mui/material';

// Themes
import { CustomThemeType } from '~/theme';

// Viewport
import { Mobile, UpFromTablet, UpFromSmallDesktop, UpFromDesktop } from '~/utils/viewport';

export interface OptionTypes<T> {
  xs?: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
}

/**
 * @param muiTheme material theme, can reach when invoke useTheme()
 * @param option options with it's breakpoint
 * @param defaultValue default value when viewport map nothing
 * @returns the value mapped
 */
function breakpointSwitch<T>(
  muiTheme: CustomThemeType,
  option: OptionTypes<T>,
  defaultValue?: unknown,
) {
  const mobileUp = useMediaQuery(Mobile(muiTheme));
  const smUp = useMediaQuery(muiTheme.breakpoints.up('sm'));
  const tabletUp = useMediaQuery(UpFromTablet(muiTheme));
  const smallDesktopUp = useMediaQuery(UpFromSmallDesktop(muiTheme));
  const desktopUp = useMediaQuery(UpFromDesktop(muiTheme));

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
}

// Can pass material theme to use this hook
const useBreakpointSwitch = (muiTheme: CustomThemeType) =>
  function breakpointSwitchWrap<T>(option: OptionTypes<T>, defaultValue?: T) {
    breakpointSwitch(muiTheme, option, defaultValue);
  };

export default useBreakpointSwitch;

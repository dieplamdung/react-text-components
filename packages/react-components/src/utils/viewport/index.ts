import { Breakpoint } from '@mui/material';

import { CustomThemeType } from '~/theme';
import { ViewportMethod } from './viewport.type';

// VIEWPORT UP --- FOLLOW <MOBILE FIRST> PATTERN
export const Mobile: ViewportMethod = (theme) => {
  return theme.breakpoints.up('xs');
};
export const UpFromTablet: ViewportMethod = (theme) => {
  return theme.breakpoints.up('md');
};
export const UpFromSmallDesktop: ViewportMethod = (theme) => {
  return theme.breakpoints.up('lg');
};
export const UpFromDesktop: ViewportMethod = (theme) => {
  return theme.breakpoints.up('xl');
};

// VIEWPORT DOWN --- FOLLOW <DESKTOP FIRST> PATTERN
export const SmallMobileDown: ViewportMethod = (theme) => {
  return theme.breakpoints.down('sm');
};
// Todo: rename to `DownToMobile`
export const MobileDown: ViewportMethod = (theme) => {
  return theme.breakpoints.down('md');
};
export const TabletDown: ViewportMethod = (theme) => {
  return theme.breakpoints.down('lg');
};
export const SmallDesktopDown: ViewportMethod = (theme) => {
  return theme.breakpoints.down('xl');
};
export const Desktop: ViewportMethod = (theme) => {
  return theme.breakpoints.up('xl');
};

// BETWEEN METHODS
export const Between = (theme: CustomThemeType) => {
  return (src: Breakpoint | number, des: Breakpoint | number) => {
    return theme.breakpoints.between(src, des);
  };
};

// UP & DOWN VIEWPORT
export const Up = (theme: CustomThemeType) => {
  return (breakpoint: Breakpoint | number) => {
    return theme.breakpoints.up(breakpoint);
  };
};
export const Down = (theme: CustomThemeType) => {
  return (breakpoint: Breakpoint | number) => {
    theme.breakpoints.down(breakpoint);
  };
};

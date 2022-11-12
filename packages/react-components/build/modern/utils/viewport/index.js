// VIEWPORT UP --- FOLLOW <MOBILE FIRST> PATTERN
export const Mobile = theme => {
  return theme.breakpoints.up('xs');
};
export const UpFromTablet = theme => {
  return theme.breakpoints.up('md');
};
export const UpFromSmallDesktop = theme => {
  return theme.breakpoints.up('lg');
};
export const UpFromDesktop = theme => {
  return theme.breakpoints.up('xl');
}; // VIEWPORT DOWN --- FOLLOW <DESKTOP FIRST> PATTERN

export const SmallMobileDown = theme => {
  return theme.breakpoints.down('sm');
}; // Todo: rename to `DownToMobile`

export const MobileDown = theme => {
  return theme.breakpoints.down('md');
};
export const TabletDown = theme => {
  return theme.breakpoints.down('lg');
};
export const SmallDesktopDown = theme => {
  return theme.breakpoints.down('xl');
};
export const Desktop = theme => {
  return theme.breakpoints.up('xl');
}; // BETWEEN METHODS

export const Between = theme => {
  return (src, des) => {
    return theme.breakpoints.between(src, des);
  };
}; // UP & DOWN VIEWPORT

export const Up = theme => {
  return breakpoint => {
    return theme.breakpoints.up(breakpoint);
  };
};
export const Down = theme => {
  return breakpoint => {
    theme.breakpoints.down(breakpoint);
  };
};
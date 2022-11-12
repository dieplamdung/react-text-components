// VIEWPORT UP --- FOLLOW <MOBILE FIRST> PATTERN
export var Mobile = function Mobile(theme) {
  return theme.breakpoints.up('xs');
};
export var UpFromTablet = function UpFromTablet(theme) {
  return theme.breakpoints.up('md');
};
export var UpFromSmallDesktop = function UpFromSmallDesktop(theme) {
  return theme.breakpoints.up('lg');
};
export var UpFromDesktop = function UpFromDesktop(theme) {
  return theme.breakpoints.up('xl');
}; // VIEWPORT DOWN --- FOLLOW <DESKTOP FIRST> PATTERN

export var SmallMobileDown = function SmallMobileDown(theme) {
  return theme.breakpoints.down('sm');
}; // Todo: rename to `DownToMobile`

export var MobileDown = function MobileDown(theme) {
  return theme.breakpoints.down('md');
};
export var TabletDown = function TabletDown(theme) {
  return theme.breakpoints.down('lg');
};
export var SmallDesktopDown = function SmallDesktopDown(theme) {
  return theme.breakpoints.down('xl');
};
export var Desktop = function Desktop(theme) {
  return theme.breakpoints.up('xl');
}; // BETWEEN METHODS

export var Between = function Between(theme) {
  return function (src, des) {
    return theme.breakpoints.between(src, des);
  };
}; // UP & DOWN VIEWPORT

export var Up = function Up(theme) {
  return function (breakpoint) {
    return theme.breakpoints.up(breakpoint);
  };
};
export var Down = function Down(theme) {
  return function (breakpoint) {
    theme.breakpoints.down(breakpoint);
  };
};
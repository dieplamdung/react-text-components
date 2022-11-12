"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UpFromTablet = exports.UpFromSmallDesktop = exports.UpFromDesktop = exports.Up = exports.TabletDown = exports.SmallMobileDown = exports.SmallDesktopDown = exports.MobileDown = exports.Mobile = exports.Down = exports.Desktop = exports.Between = void 0;

// VIEWPORT UP --- FOLLOW <MOBILE FIRST> PATTERN
const Mobile = theme => {
  return theme.breakpoints.up('xs');
};

exports.Mobile = Mobile;

const UpFromTablet = theme => {
  return theme.breakpoints.up('md');
};

exports.UpFromTablet = UpFromTablet;

const UpFromSmallDesktop = theme => {
  return theme.breakpoints.up('lg');
};

exports.UpFromSmallDesktop = UpFromSmallDesktop;

const UpFromDesktop = theme => {
  return theme.breakpoints.up('xl');
}; // VIEWPORT DOWN --- FOLLOW <DESKTOP FIRST> PATTERN


exports.UpFromDesktop = UpFromDesktop;

const SmallMobileDown = theme => {
  return theme.breakpoints.down('sm');
}; // Todo: rename to `DownToMobile`


exports.SmallMobileDown = SmallMobileDown;

const MobileDown = theme => {
  return theme.breakpoints.down('md');
};

exports.MobileDown = MobileDown;

const TabletDown = theme => {
  return theme.breakpoints.down('lg');
};

exports.TabletDown = TabletDown;

const SmallDesktopDown = theme => {
  return theme.breakpoints.down('xl');
};

exports.SmallDesktopDown = SmallDesktopDown;

const Desktop = theme => {
  return theme.breakpoints.up('xl');
}; // BETWEEN METHODS


exports.Desktop = Desktop;

const Between = theme => {
  return (src, des) => {
    return theme.breakpoints.between(src, des);
  };
}; // UP & DOWN VIEWPORT


exports.Between = Between;

const Up = theme => {
  return breakpoint => {
    return theme.breakpoints.up(breakpoint);
  };
};

exports.Up = Up;

const Down = theme => {
  return breakpoint => {
    theme.breakpoints.down(breakpoint);
  };
};

exports.Down = Down;
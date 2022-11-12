'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true,
});
exports.default = void 0;

var _constants = require('../../utils/viewport/constants');

var _colors = _interopRequireDefault(require('../colors'));

var _breakpoints = _interopRequireDefault(require('../breakpoints'));

const ButtonStyle = {
  fontSize: '16px',
  fontSizeMobile: '14px',
  fontWeight: 600,
  heightDesktop: '46px',
  heightMobile: '40px',
  startIconRightSpace: '9px',
  endIconLeftSpace: '6.5px',
  lineHeight: '24px',
};
const primaryColor = '#4D91DD';
const MuiButton = {
  styleOverrides: {
    root: {
      borderRadius: 90,
      padding: '10px 28px 14px 28px',
      fontSize: ButtonStyle.fontSize,
      fontWeight: ButtonStyle.fontWeight,
      height: ButtonStyle.heightDesktop,
      lineHeight: ButtonStyle.lineHeight,
      textTransform: 'unset',
      whiteSpace: 'nowrap',
      [_breakpoints.default.down(_constants.MOBILE_LIMIT)]: {
        height: ButtonStyle.heightMobile,
        fontSize: ButtonStyle.fontSizeMobile,
      },
    },
    startIcon: {
      marginRight: ButtonStyle.startIconRightSpace,
      marginLeft: '0px',
    },
    endIcon: {
      marginLeft: ButtonStyle.endIconLeftSpace,
      marginRight: '0px',
      marginTop: '1px',
    },
  },
  variants: [
    {
      props: {
        variant: 'primary',
      },
      style: {
        backgroundColor: 'rgba(230, 0, 0, 0.1)',
        color: _colors.default.primary.reactNamcoRed,
        lineHeight: '22px',
        '&:hover': {
          backgroundColor: _colors.default.primary.reactNamcoRed,
          color: _colors.default.neutral.white,
          '& svg': {
            '& path': {
              fill: _colors.default.primary.reactNamcoWhite,
            },
          },
        },
        '&.Mui-disabled': {
          backgroundColor: _colors.default.neutral.neutral6,
          color: _colors.default.otherColor.silver,
          '& svg': {
            '& path': {
              fill: _colors.default.otherColor.silver,
            },
          },
        },
      },
    },
    {
      props: {
        variant: 'primaryDark',
      },
      style: {
        backgroundColor: _colors.default.primary.reactNamcoRed,
        color: _colors.default.neutral.white,
        lineHeight: '22px',
        '& svg': {
          '& path': {
            fill: _colors.default.primary.reactNamcoWhite,
          },
        },
        '&:hover': {
          backgroundColor: _colors.default.accent.accentRed[1],
          color: _colors.default.neutral.white,
        },
        '&.Mui-disabled': {
          backgroundColor: _colors.default.neutral.neutral1,
          color: _colors.default.neutral.neutral2,
          '& svg': {
            '& path': {
              fill: _colors.default.neutral.neutral2,
            },
          },
        },
      },
    },
    {
      props: {
        variant: 'secondaryBlack',
      },
      style: {
        backgroundColor: _colors.default.primary.reactNamcoBlack,
        color: _colors.default.neutral.white,
        lineHeight: '22px',
        '& svg': {
          '& path': {
            fill: _colors.default.primary.reactNamcoWhite,
          },
        },
        '&:hover': {
          backgroundColor: _colors.default.neutral.neutral1,
          color: _colors.default.neutral.white,
        },
        '&.Mui-disabled': {
          backgroundColor: _colors.default.neutral.neutral1,
          color: _colors.default.neutral.neutral2,
          '& svg': {
            '& path': {
              fill: _colors.default.neutral.neutral2,
            },
          },
        },
      },
    },
    {
      props: {
        variant: 'secondary',
      },
      style: {
        // borderColor: primaryColor,
        border: `1px solid ${_colors.default.neutral.neutral5}`,
        color: _colors.default.primary.reactNamcoBlack,
        lineHeight: '22px',
        '& svg': {
          '& path': {
            fill: _colors.default.primary.reactNamcoBlack,
          },
        },
        '&:hover': {
          border: `1px solid ${_colors.default.primary.reactNamcoRed}`,
          backgroundColor: 'transparent',
          color: _colors.default.primary.reactNamcoRed,
          '& svg': {
            '& path': {
              fill: _colors.default.primary.reactNamcoRed,
            },
          },
        },
        '&.Mui-disabled': {
          border: `1px solid ${_colors.default.neutral.neutral5}`,
          color: _colors.default.neutral.neutral5,
          '& svg': {
            '& path': {
              fill: _colors.default.neutral.neutral5,
            },
          },
        },
      },
    },
    {
      props: {
        variant: 'secondaryDark',
      },
      style: {
        // borderColor: primaryColor,
        border: `1px solid ${_colors.default.neutral.white}`,
        color: _colors.default.neutral.white,
        lineHeight: '22px',
        '& svg': {
          '& path': {
            fill: _colors.default.neutral.white,
          },
        },
        '&:hover': {
          border: `1px solid ${_colors.default.neutral.white}`,
          backgroundColor: _colors.default.neutral.white,
          color: _colors.default.primary.reactNamcoBlack,
          '& svg': {
            '& path': {
              fill: _colors.default.primary.reactNamcoBlack,
            },
          },
        },
        '&.Mui-disabled': {
          border: `1px solid ${_colors.default.neutral.neutral1}`,
          backgroundColor: 'transparent',
          color: _colors.default.neutral.neutral1,
          '& svg': {
            '& path': {
              fill: _colors.default.neutral.neutral1,
            },
          },
        },
      },
    },
    {
      props: {
        variant: 'tertiary',
      },
      style: {
        background: 'none',
        color: primaryColor,
        '&:hover': {
          background: 'none',
          color: '#000000',
          borderColor: '#000000',
        },
      },
    },
  ],
};
var _default = MuiButton;
exports.default = _default;

import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import { MOBILE_LIMIT } from '../../utils/viewport/constants';
import colors from '../colors';
import breakpoints from '../breakpoints';
var ButtonStyle = {
  fontSize: '16px',
  fontSizeMobile: '14px',
  fontWeight: 600,
  heightDesktop: '46px',
  heightMobile: '40px',
  startIconRightSpace: '9px',
  endIconLeftSpace: '6.5px',
  lineHeight: '24px',
};
var primaryColor = '#4D91DD';
var MuiButton = {
  styleOverrides: {
    root: _defineProperty(
      {
        borderRadius: 90,
        padding: '10px 28px 14px 28px',
        fontSize: ButtonStyle.fontSize,
        fontWeight: ButtonStyle.fontWeight,
        height: ButtonStyle.heightDesktop,
        lineHeight: ButtonStyle.lineHeight,
        textTransform: 'unset',
        whiteSpace: 'nowrap',
      },
      breakpoints.down(MOBILE_LIMIT),
      {
        height: ButtonStyle.heightMobile,
        fontSize: ButtonStyle.fontSizeMobile,
      },
    ),
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
        color: colors.primary.reactNamcoRed,
        lineHeight: '22px',
        '&:hover': {
          backgroundColor: colors.primary.reactNamcoRed,
          color: colors.neutral.white,
          '& svg': {
            '& path': {
              fill: colors.primary.reactNamcoWhite,
            },
          },
        },
        '&.Mui-disabled': {
          backgroundColor: colors.neutral.neutral6,
          color: colors.otherColor.silver,
          '& svg': {
            '& path': {
              fill: colors.otherColor.silver,
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
        backgroundColor: colors.primary.reactNamcoRed,
        color: colors.neutral.white,
        lineHeight: '22px',
        '& svg': {
          '& path': {
            fill: colors.primary.reactNamcoWhite,
          },
        },
        '&:hover': {
          backgroundColor: colors.accent.accentRed[1],
          color: colors.neutral.white,
        },
        '&.Mui-disabled': {
          backgroundColor: colors.neutral.neutral1,
          color: colors.neutral.neutral2,
          '& svg': {
            '& path': {
              fill: colors.neutral.neutral2,
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
        backgroundColor: colors.primary.reactNamcoBlack,
        color: colors.neutral.white,
        lineHeight: '22px',
        '& svg': {
          '& path': {
            fill: colors.primary.reactNamcoWhite,
          },
        },
        '&:hover': {
          backgroundColor: colors.neutral.neutral1,
          color: colors.neutral.white,
        },
        '&.Mui-disabled': {
          backgroundColor: colors.neutral.neutral1,
          color: colors.neutral.neutral2,
          '& svg': {
            '& path': {
              fill: colors.neutral.neutral2,
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
        border: '1px solid '.concat(colors.neutral.neutral5),
        color: colors.primary.reactNamcoBlack,
        lineHeight: '22px',
        '& svg': {
          '& path': {
            fill: colors.primary.reactNamcoBlack,
          },
        },
        '&:hover': {
          border: '1px solid '.concat(colors.primary.reactNamcoRed),
          backgroundColor: 'transparent',
          color: colors.primary.reactNamcoRed,
          '& svg': {
            '& path': {
              fill: colors.primary.reactNamcoRed,
            },
          },
        },
        '&.Mui-disabled': {
          border: '1px solid '.concat(colors.neutral.neutral5),
          color: colors.neutral.neutral5,
          '& svg': {
            '& path': {
              fill: colors.neutral.neutral5,
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
        border: '1px solid '.concat(colors.neutral.white),
        color: colors.neutral.white,
        lineHeight: '22px',
        '& svg': {
          '& path': {
            fill: colors.neutral.white,
          },
        },
        '&:hover': {
          border: '1px solid '.concat(colors.neutral.white),
          backgroundColor: colors.neutral.white,
          color: colors.primary.reactNamcoBlack,
          '& svg': {
            '& path': {
              fill: colors.primary.reactNamcoBlack,
            },
          },
        },
        '&.Mui-disabled': {
          border: '1px solid '.concat(colors.neutral.neutral1),
          backgroundColor: 'transparent',
          color: colors.neutral.neutral1,
          '& svg': {
            '& path': {
              fill: colors.neutral.neutral1,
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
export default MuiButton;

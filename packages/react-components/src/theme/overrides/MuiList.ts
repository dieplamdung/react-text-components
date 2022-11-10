import { Components } from '@mui/material/styles';
import colors from '~/theme/colors';
import { MOBILE_LIMIT } from '~/utils/viewport/constants';
import breakpoints from '../breakpoints';

const MuiList = {
  styleOverrides: {
    root: {
      width: '100%',
      // maxHeight: '224px',
      backgroundColor: 'rgba(237, 237, 237, 0.8)',
      '& li': {
        color: colors.primary.dark,
        fontSize: '16px',
        '&:hover': {
          background: 'rgba(221, 221, 221, 0.8)'
        },
        '&.Mui-selected': {
          background: 'rgba(221, 221, 221, 0.8)'
        },
        [breakpoints.down(MOBILE_LIMIT)]: {
          fontSize: '14px',
          paddingTop: '3px',
          paddingBottom: '3px'
        },
      }
    },

  },
  variants: [
  ],
} as Components['MuiList'];

export default MuiList;

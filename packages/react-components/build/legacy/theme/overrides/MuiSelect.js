import _defineProperty from '@babel/runtime/helpers/esm/defineProperty';
import colors from '../colors';
import { MOBILE_LIMIT } from '../../utils/viewport/constants';
import breakpoints from '../breakpoints';
var MuiSelect = {
  styleOverrides: {
    root: {
      width: '100%',
    },
    select: _defineProperty(
      {
        color: colors.primary.reactNamcoBlack,
        padding: '18.5px 32px 18.5px 32px',
        '&.Mui-disabled': {
          color: colors.neutral.neutral5,
        },
      },
      breakpoints.down(MOBILE_LIMIT),
      {
        fontSize: '14px',
      },
    ),
  },
  variants: [],
};
export default MuiSelect;

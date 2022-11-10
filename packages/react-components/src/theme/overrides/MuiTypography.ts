import { Components } from '@mui/material/styles';

import { variantMappingTypography, font } from '../typography';

const MuiTypography = {
  defaultProps: {
    variantMapping: {
      ...variantMappingTypography,
    },
  },
  styleOverrides: {
    root: {
      fontFamily: font,
      // need checking remove
      // letterSpacing: 0,
      '& > p': {
        margin: 0,
        padding: 0,
      },
    },
  },
} as Components['MuiTypography'];

export default MuiTypography;

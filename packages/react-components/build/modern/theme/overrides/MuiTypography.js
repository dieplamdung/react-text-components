import _extends from "@babel/runtime/helpers/esm/extends";
import { variantMappingTypography, font } from "../typography";
const MuiTypography = {
  defaultProps: {
    variantMapping: _extends({}, variantMappingTypography)
  },
  styleOverrides: {
    root: {
      fontFamily: font,
      // need checking remove
      // letterSpacing: 0,
      '& > p': {
        margin: 0,
        padding: 0
      }
    }
  }
};
export default MuiTypography;
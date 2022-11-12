import { createTheme } from '@mui/material/styles';
import spacing from "./spacing";
import shape from "./shape";
import palette from "./palette";
import typography from "./typography";
import breakpoints from "./breakpoints";
import MuiButton from "./overrides/MuiButton";
import MuiTypography from "./overrides/MuiTypography";
import MuiSelect from "./overrides/MuiSelect";
import MuiList from "./overrides/MuiList";
import MuiPaper from "./overrides/MuiPaper"; // A custom theme for this app

var theme = createTheme({
  spacing: spacing,
  shape: shape,
  palette: palette,
  typography: typography,
  breakpoints: breakpoints,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  },
  components: {
    MuiTypography: MuiTypography,
    MuiButton: MuiButton,
    MuiSelect: MuiSelect,
    MuiList: MuiList,
    MuiPaper: MuiPaper
  }
});
theme.spacing(2);
export default theme;
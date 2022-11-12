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

const theme = createTheme({
  spacing,
  shape,
  palette,
  typography,
  breakpoints,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  },
  components: {
    MuiTypography,
    MuiButton,
    MuiSelect,
    MuiList,
    MuiPaper
  }
});
theme.spacing(2);
export default theme;
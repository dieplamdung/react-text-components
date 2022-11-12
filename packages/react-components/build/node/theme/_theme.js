"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styles = require("@mui/material/styles");

var _spacing = _interopRequireDefault(require("./spacing"));

var _shape = _interopRequireDefault(require("./shape"));

var _palette = _interopRequireDefault(require("./palette"));

var _typography = _interopRequireDefault(require("./typography"));

var _breakpoints = _interopRequireDefault(require("./breakpoints"));

var _MuiButton = _interopRequireDefault(require("./overrides/MuiButton"));

var _MuiTypography = _interopRequireDefault(require("./overrides/MuiTypography"));

var _MuiSelect = _interopRequireDefault(require("./overrides/MuiSelect"));

var _MuiList = _interopRequireDefault(require("./overrides/MuiList"));

var _MuiPaper = _interopRequireDefault(require("./overrides/MuiPaper"));

// A custom theme for this app
const theme = (0, _styles.createTheme)({
  spacing: _spacing.default,
  shape: _shape.default,
  palette: _palette.default,
  typography: _typography.default,
  breakpoints: _breakpoints.default,
  zIndex: {
    appBar: 1200,
    drawer: 1100
  },
  components: {
    MuiTypography: _MuiTypography.default,
    MuiButton: _MuiButton.default,
    MuiSelect: _MuiSelect.default,
    MuiList: _MuiList.default,
    MuiPaper: _MuiPaper.default
  }
});
theme.spacing(2);
var _default = theme;
exports.default = _default;
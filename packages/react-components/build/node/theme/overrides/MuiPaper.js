"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.linkColor = exports.default = void 0;
const linkColor = '#4D91DD';
exports.linkColor = linkColor;
const MuiPaper = {
  styleOverrides: {
    root: {
      boxShadow: '0px 8px 34px rgba(0, 0, 0, 0.07)',
      borderRadius: '12px',
      pointerEvents: "auto",
      "& .MuiAutocomplete-listbox": {
        background: "rgba(237,237,237,0.8)",
        "& .Mui-focused": {
          background: "rgb(221 221 221 / 80%)"
        }
      }
    }
  },
  variants: []
};
var _default = MuiPaper;
exports.default = _default;
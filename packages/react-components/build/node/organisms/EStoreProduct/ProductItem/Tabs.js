"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function Tabs(props) {
  const {
    tabList = []
  } = props;
  const isMobileBigger = (0, _material.useMediaQuery)('(max-width:322px)', {
    noSsr: true
  });
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      display: "flex",
      width: "100%",
      flexWrap: "wrap",
      gap: "8px",
      marginBottom: "8px",
      minHeight: "24px"
    },
    children: !!(tabList != null && tabList.length) && tabList.map((tab, index) => {
      return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          background: (tab == null ? void 0 : tab.color) || "#0169B2",
          width: isMobileBigger ? "min-content" : "fit-content",
          display: "flex",
          alignItems: "center",
          color: "#fff",
          fontWeight: "700",
          fontSize: "10px",
          lineHeight: "14px",
          textTransform: "uppercase",
          padding: "4px 8px 6px 8px",
          borderRadius: "5px",
          whiteSpace: "nowrap"
        },
        children: tab == null ? void 0 : tab.title
      }, index);
    })
  });
}

var _default = /*#__PURE__*/(0, _react.memo)(Tabs);

exports.default = _default;
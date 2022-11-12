"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Container = _interopRequireDefault(require("../../../atoms/Container"));

var _Typography = _interopRequireDefault(require("../../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../../theme/colors"));

var _Pill = _interopRequireDefault(require("./Pill"));

var _Tab = _interopRequireDefault(require("./Tab"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function TabFilter(props) {
  const theme = (0, _material.useTheme)();
  const isMobile = (0, _material.useMediaQuery)(theme.breakpoints.down('md'));
  const {
    title = "",
    labelPill = "",
    active = false,
    onClickPill,
    tabList = [],
    titleSelect = "",
    onSelectTab
  } = props;
  const refTabs = (0, _react.useRef)();
  const refTabsFixed = (0, _react.useRef)();
  const refScrollTop = (0, _react.useRef)(0);
  const refSticky = (0, _react.useRef)(false);
  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const content = refTabs.current;
      const {
        top
      } = content.getBoundingClientRect();
      const positionTopContentFilter = top + window.scrollY;
      window.addEventListener("scroll", () => {
        const heightComponent = isMobile ? 86 : 119;

        if (positionTopContentFilter + heightComponent > window.scrollY && !refSticky.current) {
          refSticky.current = true;
          refScrollTop.current = window.scrollY;
        }

        if (positionTopContentFilter + heightComponent > window.scrollY && refSticky.current) {
          refSticky.current = false;
        }
      });
    }

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [isMobile]);
  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const content = refTabs.current;
      const contentFixed = refTabsFixed.current;
      const heightTop = "-200px";

      if (content && contentFixed) {
        window.addEventListener("scroll", () => {
          if (window.scrollY > refScrollTop.current) {
            contentFixed.style.top = "0px";
            refScrollTop.current = window.scrollY;
          }

          if (window.scrollY < refScrollTop.current) {
            contentFixed.style.top = heightTop;
            refScrollTop.current = window.scrollY;
          }
        });
      }
    }

    ;
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column"
    },
    ref: refTabs,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: "18px"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h2",
        color: _colors.default.primary.bandaiNamcoBlack,
        sx: {},
        children: title
      }), isMobile && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pill.default, {
        active: active,
        label: labelPill || "Sort & filter",
        onClick: () => onClickPill == null ? void 0 : onClickPill()
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
        tabList: tabList,
        titleSelect: titleSelect,
        onSelectTab: v => onSelectTab == null ? void 0 : onSelectTab(v)
      }), !isMobile && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pill.default, {
        active: active,
        label: labelPill || "Sort & filter",
        onClick: onClickPill
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        position: "fixed",
        width: "100%",
        top: "-200px",
        left: "0px",
        background: "#fff",
        transition: "all 0.3s",
        boxShadow: "0px 7px 28px rgba(0, 0, 0, 0.06)",
        padding: {
          xs: "14px 0px",
          md: "24px 0px"
        },
        zIndex: 2
      },
      ref: refTabsFixed,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Tab.default, {
            tabList: tabList,
            titleSelect: titleSelect,
            onSelectTab: v => onSelectTab == null ? void 0 : onSelectTab(v)
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pill.default, {
            active: active,
            label: labelPill || "Sort & filter",
            onClick: onClickPill
          })]
        })
      })
    })]
  });
}

var _default = /*#__PURE__*/_react.default.memo(TabFilter);

exports.default = _default;
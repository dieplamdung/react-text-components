import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useRef } from 'react';
import Container from "../../../atoms/Container";
import Typography from "../../../atoms/Typography";
import colors from "../../../theme/colors";
import Pills from "./Pill";
import Tab from "./Tab";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

function TabFilter(props) {
  var theme = useTheme();
  var isMobile = useMediaQuery(theme.breakpoints.down('md'));
  var _props$title = props.title,
      title = _props$title === void 0 ? "" : _props$title,
      _props$labelPill = props.labelPill,
      labelPill = _props$labelPill === void 0 ? "" : _props$labelPill,
      _props$active = props.active,
      active = _props$active === void 0 ? false : _props$active,
      onClickPill = props.onClickPill,
      _props$tabList = props.tabList,
      tabList = _props$tabList === void 0 ? [] : _props$tabList,
      _props$titleSelect = props.titleSelect,
      titleSelect = _props$titleSelect === void 0 ? "" : _props$titleSelect,
      _onSelectTab = props.onSelectTab;
  var refTabs = useRef();
  var refTabsFixed = useRef();
  var refScrollTop = useRef(0);
  var refSticky = useRef(false);
  useEffect(function () {
    if (typeof window !== "undefined") {
      var content = refTabs.current;

      var _content$getBoundingC = content.getBoundingClientRect(),
          top = _content$getBoundingC.top;

      var positionTopContentFilter = top + window.scrollY;
      window.addEventListener("scroll", function () {
        var heightComponent = isMobile ? 86 : 119;

        if (positionTopContentFilter + heightComponent > window.scrollY && !refSticky.current) {
          refSticky.current = true;
          refScrollTop.current = window.scrollY;
        }

        if (positionTopContentFilter + heightComponent > window.scrollY && refSticky.current) {
          refSticky.current = false;
        }
      });
    }

    return function () {
      window.removeEventListener("scroll", function () {});
    };
  }, [isMobile]);
  useEffect(function () {
    if (typeof window !== "undefined") {
      var content = refTabs.current;
      var contentFixed = refTabsFixed.current;
      var heightTop = "-200px";

      if (content && contentFixed) {
        window.addEventListener("scroll", function () {
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
    return function () {
      window.removeEventListener("scroll", function () {});
    };
  }, []);
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column"
    },
    ref: refTabs,
    children: [/*#__PURE__*/_jsxs(Box, {
      sx: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: "18px"
      },
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "h2",
        color: colors.primary.bandaiNamcoBlack,
        sx: {},
        children: title
      }), isMobile && /*#__PURE__*/_jsx(Pills, {
        active: active,
        label: labelPill || "Sort & filter",
        onClick: function onClick() {
          return onClickPill == null ? void 0 : onClickPill();
        }
      })]
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between"
      },
      children: [/*#__PURE__*/_jsx(Tab, {
        tabList: tabList,
        titleSelect: titleSelect,
        onSelectTab: function onSelectTab(v) {
          return _onSelectTab == null ? void 0 : _onSelectTab(v);
        }
      }), !isMobile && /*#__PURE__*/_jsx(Pills, {
        active: active,
        label: labelPill || "Sort & filter",
        onClick: onClickPill
      })]
    }), /*#__PURE__*/_jsx(Box, {
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
      children: /*#__PURE__*/_jsx(Container, {
        children: /*#__PURE__*/_jsxs(Box, {
          sx: {
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          },
          children: [/*#__PURE__*/_jsx(Tab, {
            tabList: tabList,
            titleSelect: titleSelect,
            onSelectTab: function onSelectTab(v) {
              return _onSelectTab == null ? void 0 : _onSelectTab(v);
            }
          }), /*#__PURE__*/_jsx(Pills, {
            active: active,
            label: labelPill || "Sort & filter",
            onClick: onClickPill
          })]
        })
      })
    })]
  });
}

export default /*#__PURE__*/React.memo(TabFilter);
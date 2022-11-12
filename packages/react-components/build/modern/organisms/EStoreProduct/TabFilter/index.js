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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const {
    title = "",
    labelPill = "",
    active = false,
    onClickPill,
    tabList = [],
    titleSelect = "",
    onSelectTab
  } = props;
  const refTabs = useRef();
  const refTabsFixed = useRef();
  const refScrollTop = useRef(0);
  const refSticky = useRef(false);
  useEffect(() => {
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
  useEffect(() => {
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
        onClick: () => onClickPill?.()
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
        onSelectTab: v => onSelectTab?.(v)
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
            onSelectTab: v => onSelectTab?.(v)
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
import React, { useEffect, useRef, useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import colors from "../../theme/colors";
import { TabletDown } from "../../utils/viewport";
import WrapperSubMenu from "./WrapperSubMenu";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const SubNavigationBar = ({
  listNavigation,
  onBuy,
  onSelectItem,
  onSelectIdContent,
  externalLink,
  titleBtn
}) => {
  const theme = useTheme();
  const isTabletDown = useMediaQuery(TabletDown(theme));
  const [itemSelect, setItemSelect] = useState(listNavigation[0]);
  const refWrapperSubMenu = useRef();
  const refWrapperSubMenuFixed = useRef();
  const refScroll = useRef(0);
  const refIsMobile = useRef(isTabletDown);
  const refIsShowSubFixed = useRef(false);
  const refTimeOut = useRef(0);
  const refItemSelect = useRef(listNavigation[0] || {});
  useEffect(() => {
    refIsMobile.current = isTabletDown;

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        const wrapperSubMenu = refWrapperSubMenu.current;
        const wrapperSubMenuFixed = refWrapperSubMenuFixed.current;

        if (wrapperSubMenu) {
          const {
            bottom
          } = wrapperSubMenu?.getBoundingClientRect();
          wrapperSubMenu.style.position = "relative";
          const scrollTop = window.scrollY;

          if (bottom < -10) {
            refIsShowSubFixed.current = true;

            if (refScroll.current < scrollTop) {
              wrapperSubMenuFixed.style.top = "10px";
              wrapperSubMenuFixed.style.opacity = "1";
            }

            if (refScroll.current > scrollTop) {
              wrapperSubMenuFixed.style.top = refIsMobile.current ? "90px" : "112px";
              wrapperSubMenuFixed.style.opacity = "1";
            }

            refScroll.current = scrollTop;
          } else {
            refIsShowSubFixed.current = false;
            refScroll.current = scrollTop;
            wrapperSubMenuFixed.style.top = "-100px";
            wrapperSubMenuFixed.style.opacity = "0";
          }
        }
      });
    }

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [isTabletDown]);

  const handleMovieScrollTop = item => {
    setItemSelect(item);
    onSelectItem?.(item?.value ?? "");
    onSelectIdContent?.(item?.value || "");
    refItemSelect.current = item;

    if (typeof window !== "undefined") {
      const itemView = document.getElementById(`${item.value}`);

      if (itemView) {
        const {
          offsetTop
        } = itemView;
        window.scrollTo({
          top: offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const length = listNavigation.length;

      for (let i = 0; i < length; i += 1) {
        const item = listNavigation[i];
        window.addEventListener(`${item.value}`, event => {
          // if (refTimeOut.current) {
          //   window.clearTimeout(refTimeOut.current);
          // }
          // refTimeOut.current = setTimeout(() => {
          refTimeOut.current = undefined;
          const type = event?.type || "";

          if (type) {
            const itemSub = listNavigation.find(sub => sub.value?.toLowerCase() === type.toLowerCase()); // handleCheckURLById(itemSub?.value || "");

            onSelectIdContent?.(itemSub?.value || "");

            if (itemSub && itemSub.value !== refItemSelect?.current?.value) {
              setItemSelect(itemSub); // handleCheckURLById(itemSub.value);

              refItemSelect.current = itemSub;
            }
          } // }, 200);

        });
        window.addEventListener("masthead", event => {
          const type = event?.type || "";
          onSelectIdContent?.(type || "");
        });
      }
    }

    return () => {
      const length = listNavigation.length;

      for (let i = 0; i < length; i += 1) {
        const item = listNavigation[i];
        window.removeEventListener(`${item.value}`, () => {});
      }

      ;
      window.removeEventListener('masthead', () => {});
    };
  }, [listNavigation, onSelectIdContent]);
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: "100%",
      height: "74px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "0 32px",
      position: "relative",
      transition: "all 0.3s"
    },
    ref: refWrapperSubMenu,
    children: [/*#__PURE__*/_jsx(WrapperSubMenu, {
      listNavigation: listNavigation,
      onSelectItem: item => {
        handleMovieScrollTop(item);
      },
      onBuy: item => onBuy?.(item),
      externalLink: externalLink,
      titleBtn: titleBtn,
      itemSelect: itemSelect
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        height: "74px",
        display: "flex",
        justifyContent: "center",
        position: "fixed",
        transition: "all 0.3s",
        top: "-100px",
        zIndex: "3"
      },
      ref: refWrapperSubMenuFixed,
      children: /*#__PURE__*/_jsx(WrapperSubMenu, {
        listNavigation: listNavigation,
        onSelectItem: item => {
          handleMovieScrollTop(item);
        },
        onBuy: item => {
          onBuy?.(item);
        },
        itemSelect: itemSelect,
        externalLink: externalLink,
        background: colors.neutral.neutral8,
        titleBtn: titleBtn
      })
    })]
  });
};

export default SubNavigationBar;
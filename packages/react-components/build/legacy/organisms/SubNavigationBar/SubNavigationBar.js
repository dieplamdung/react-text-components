import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { useEffect, useRef, useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import colors from "../../theme/colors";
import { TabletDown } from "../../utils/viewport";
import WrapperSubMenu from "./WrapperSubMenu";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var SubNavigationBar = function SubNavigationBar(_ref) {
  var listNavigation = _ref.listNavigation,
      _onBuy = _ref.onBuy,
      onSelectItem = _ref.onSelectItem,
      onSelectIdContent = _ref.onSelectIdContent,
      externalLink = _ref.externalLink,
      titleBtn = _ref.titleBtn;
  var theme = useTheme();
  var isTabletDown = useMediaQuery(TabletDown(theme));

  var _useState = useState(listNavigation[0]),
      _useState2 = _slicedToArray(_useState, 2),
      itemSelect = _useState2[0],
      setItemSelect = _useState2[1];

  var refWrapperSubMenu = useRef();
  var refWrapperSubMenuFixed = useRef();
  var refScroll = useRef(0);
  var refIsMobile = useRef(isTabletDown);
  var refIsShowSubFixed = useRef(false);
  var refTimeOut = useRef(0);
  var refItemSelect = useRef(listNavigation[0] || {});
  useEffect(function () {
    refIsMobile.current = isTabletDown;

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", function () {
        var wrapperSubMenu = refWrapperSubMenu.current;
        var wrapperSubMenuFixed = refWrapperSubMenuFixed.current;

        if (wrapperSubMenu) {
          var _wrapperSubMenu$getBo = wrapperSubMenu == null ? void 0 : wrapperSubMenu.getBoundingClientRect(),
              bottom = _wrapperSubMenu$getBo.bottom;

          wrapperSubMenu.style.position = "relative";
          var scrollTop = window.scrollY;

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

    return function () {
      window.removeEventListener("scroll", function () {});
    };
  }, [isTabletDown]);

  var handleMovieScrollTop = function handleMovieScrollTop(item) {
    var _item$value;

    setItemSelect(item);
    onSelectItem == null ? void 0 : onSelectItem((_item$value = item == null ? void 0 : item.value) != null ? _item$value : "");
    onSelectIdContent == null ? void 0 : onSelectIdContent((item == null ? void 0 : item.value) || "");
    refItemSelect.current = item;

    if (typeof window !== "undefined") {
      var itemView = document.getElementById("".concat(item.value));

      if (itemView) {
        var offsetTop = itemView.offsetTop;
        window.scrollTo({
          top: offsetTop - 100,
          behavior: 'smooth'
        });
      }
    }
  };

  useEffect(function () {
    if (typeof window !== "undefined") {
      var length = listNavigation.length;

      for (var i = 0; i < length; i += 1) {
        var item = listNavigation[i];
        window.addEventListener("".concat(item.value), function (event) {
          // if (refTimeOut.current) {
          //   window.clearTimeout(refTimeOut.current);
          // }
          // refTimeOut.current = setTimeout(() => {
          refTimeOut.current = undefined;
          var type = (event == null ? void 0 : event.type) || "";

          if (type) {
            var _refItemSelect$curren;

            var itemSub = listNavigation.find(function (sub) {
              var _sub$value;

              return ((_sub$value = sub.value) == null ? void 0 : _sub$value.toLowerCase()) === type.toLowerCase();
            }); // handleCheckURLById(itemSub?.value || "");

            onSelectIdContent == null ? void 0 : onSelectIdContent((itemSub == null ? void 0 : itemSub.value) || "");

            if (itemSub && itemSub.value !== (refItemSelect == null ? void 0 : (_refItemSelect$curren = refItemSelect.current) == null ? void 0 : _refItemSelect$curren.value)) {
              setItemSelect(itemSub); // handleCheckURLById(itemSub.value);

              refItemSelect.current = itemSub;
            }
          } // }, 200);

        });
        window.addEventListener("masthead", function (event) {
          var type = (event == null ? void 0 : event.type) || "";
          onSelectIdContent == null ? void 0 : onSelectIdContent(type || "");
        });
      }
    }

    return function () {
      var length = listNavigation.length;

      for (var _i = 0; _i < length; _i += 1) {
        var _item = listNavigation[_i];
        window.removeEventListener("".concat(_item.value), function () {});
      }

      ;
      window.removeEventListener('masthead', function () {});
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
      onSelectItem: function onSelectItem(item) {
        handleMovieScrollTop(item);
      },
      onBuy: function onBuy(item) {
        return _onBuy == null ? void 0 : _onBuy(item);
      },
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
        onSelectItem: function onSelectItem(item) {
          handleMovieScrollTop(item);
        },
        onBuy: function onBuy(item) {
          _onBuy == null ? void 0 : _onBuy(item);
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
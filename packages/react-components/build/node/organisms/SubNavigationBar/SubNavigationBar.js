"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _viewport = require("../../utils/viewport");

var _WrapperSubMenu = _interopRequireDefault(require("./WrapperSubMenu"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SubNavigationBar = ({
  listNavigation,
  onBuy,
  onSelectItem,
  onSelectIdContent,
  externalLink,
  titleBtn
}) => {
  const theme = (0, _material.useTheme)();
  const isTabletDown = (0, _material.useMediaQuery)((0, _viewport.TabletDown)(theme));
  const [itemSelect, setItemSelect] = (0, _react.useState)(listNavigation[0]);
  const refWrapperSubMenu = (0, _react.useRef)();
  const refWrapperSubMenuFixed = (0, _react.useRef)();
  const refScroll = (0, _react.useRef)(0);
  const refIsMobile = (0, _react.useRef)(isTabletDown);
  const refIsShowSubFixed = (0, _react.useRef)(false);
  const refTimeOut = (0, _react.useRef)(0);
  const refItemSelect = (0, _react.useRef)(listNavigation[0] || {});
  (0, _react.useEffect)(() => {
    refIsMobile.current = isTabletDown;

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", () => {
        const wrapperSubMenu = refWrapperSubMenu.current;
        const wrapperSubMenuFixed = refWrapperSubMenuFixed.current;

        if (wrapperSubMenu) {
          const {
            bottom
          } = wrapperSubMenu == null ? void 0 : wrapperSubMenu.getBoundingClientRect();
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
    var _item$value;

    setItemSelect(item);
    onSelectItem == null ? void 0 : onSelectItem((_item$value = item == null ? void 0 : item.value) != null ? _item$value : "");
    onSelectIdContent == null ? void 0 : onSelectIdContent((item == null ? void 0 : item.value) || "");
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

  (0, _react.useEffect)(() => {
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
          const type = (event == null ? void 0 : event.type) || "";

          if (type) {
            var _refItemSelect$curren;

            const itemSub = listNavigation.find(sub => {
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
        window.addEventListener("masthead", event => {
          const type = (event == null ? void 0 : event.type) || "";
          onSelectIdContent == null ? void 0 : onSelectIdContent(type || "");
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_WrapperSubMenu.default, {
      listNavigation: listNavigation,
      onSelectItem: item => {
        handleMovieScrollTop(item);
      },
      onBuy: item => onBuy == null ? void 0 : onBuy(item),
      externalLink: externalLink,
      titleBtn: titleBtn,
      itemSelect: itemSelect
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_WrapperSubMenu.default, {
        listNavigation: listNavigation,
        onSelectItem: item => {
          handleMovieScrollTop(item);
        },
        onBuy: item => {
          onBuy == null ? void 0 : onBuy(item);
        },
        itemSelect: itemSelect,
        externalLink: externalLink,
        background: _colors.default.neutral.neutral8,
        titleBtn: titleBtn
      })
    })]
  });
};

var _default = SubNavigationBar;
exports.default = _default;
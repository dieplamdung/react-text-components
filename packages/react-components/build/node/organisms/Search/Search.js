"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _Icon = require("../../atoms/Icon");

var _viewport = require("../../utils/viewport");

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _disableScrollBody = require("../../utils/disableScrollBody");

var _Logo = _interopRequireDefault(require("./Logo"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Types
const Search = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    href,
    onClose,
    isShowSearch,
    onSearch,
    listResultDefault = [],
    hrefSeeAll,
    handleRemoveSearch = () => {},
    handleShowTrending = () => {}
  } = props;
  const RECENT_LOCAL = "recent_local";
  const theme = (0, _material.useTheme)();
  const isMobileDown = (0, _material.useMediaQuery)((0, _viewport.MobileDown)(theme));
  const refTimeOut = (0, _react.useRef)();
  const refTextField = (0, _react.useRef)();
  const [valueSearch, setValueSearch] = (0, _react.useState)("");
  const [, setListResultSearch] = (0, _react.useState)([]);
  const [, setRecentList] = (0, _react.useState)([]);
  const [isInputFocus, setIsInputFocus] = (0, _react.useState)(false); // handle ret recentList to localStorage?

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const recentInLocal = localStorage.getItem(RECENT_LOCAL);

      if (recentInLocal) {
        const recentLocal = JSON.parse(recentInLocal || "{}");
        setRecentList(recentLocal || []);
      }
    }
  }, [isShowSearch]); // handle reset value when component mount

  (0, _react.useEffect)(() => {
    if (refTextField.current) {
      var _refTextField$current;

      refTextField.current.value = "";
      setValueSearch("");
      (_refTextField$current = refTextField.current) == null ? void 0 : _refTextField$current.focus();
    }

    if (typeof window !== "undefined") {
      (0, _disableScrollBody.disableScrollBody)(isShowSearch != null ? isShowSearch : false);
    }
  }, [isShowSearch]); // handel event keyup Enter

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("keyup", event => {
        if (event.keyCode === 13 || event.key === 'Enter') {
          if (refTimeOut.current) {
            window.clearTimeout(refTimeOut.current);
          }

          refTimeOut.current = setTimeout(() => {
            if (valueSearch && isInputFocus) {
              var _JSON$parse;

              const recentInLocal = (_JSON$parse = JSON.parse(localStorage.getItem(RECENT_LOCAL))) != null ? _JSON$parse : [];
              recentInLocal.push(valueSearch);
              localStorage.setItem(RECENT_LOCAL, JSON.stringify(recentInLocal));
              window.location.href = `${hrefSeeAll}/search?q=${valueSearch}`;
            }
          }, 300);
        }
      });
    }
  }, [valueSearch, isInputFocus, hrefSeeAll]);
  (0, _react.useEffect)(() => {
    setListResultSearch(listResultDefault);
  }, [listResultDefault]); // handle change input search

  const handleOnChangeSearch = e => {
    var _e$target, _e$target$value;

    const value = e == null ? void 0 : (_e$target = e.target) == null ? void 0 : (_e$target$value = _e$target.value) == null ? void 0 : _e$target$value.trim();
    setValueSearch(value);

    if (refTimeOut.current) {
      window.clearTimeout(refTimeOut.current);
    }

    refTimeOut.current = setTimeout(() => {
      refTimeOut.current = undefined;

      try {
        if (value) {
          const data = onSearch == null ? void 0 : onSearch(value);
          setListResultSearch(data || []);
        } else {
          setListResultSearch(listResultDefault);
        }
      } catch (err) {
        console.warn(err);
      }
    }, 300);
  };

  (0, _react.useImperativeHandle)(ref, () => ({
    handleSetValueSearch(data) {
      setValueSearch(data != null ? data : '');
    },

    handleSetInputFocus(data) {
      setIsInputFocus(data != null ? data : false);
    },

    handleOnChangeInput(e) {
      handleOnChangeSearch(e);
    }

  }));
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      pointerEvents: "auto"
    },
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          width: "100%",
          display: "flex",
          flexDirection: "column"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              md: "row"
            }
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Logo.default, {
            href: href,
            onClose: onClose
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              width: "100%",
              maxWidth: "736px",
              margin: {
                xs: "28px 0px 0px 0px",
                md: "0px 64px 0px 34px ",
                lg: "0px 128px 0px 67px "
              },
              display: "flex",
              flexDirection: "column"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
              sx: {
                position: "relative"
              },
              children: [isShowSearch && (props == null ? void 0 : props.children), !!valueSearch && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                sx: {
                  position: "absolute",
                  top: "50%",
                  right: "0%",
                  lineHeight: "0px",
                  transform: `translate(-50%, -50%)`,
                  zIndex: 10,
                  padding: "2px",
                  cursor: "pointer"
                },
                onClick: () => {
                  handleRemoveSearch();
                  handleShowTrending();
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconClose, {
                  htmlColor: "#1E1E1E",
                  sx: {
                    cursor: "pointer"
                  }
                })
              })]
            })
          }), !isMobileDown && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconClose, {
            htmlColor: "#C1C1C1",
            sx: {
              cursor: "pointer"
            },
            onClick: () => onClose == null ? void 0 : onClose()
          })]
        })
      })
    })
  });
});
var _default = Search;
exports.default = _default;
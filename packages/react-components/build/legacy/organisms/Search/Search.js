import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
import React, { forwardRef, useEffect, useRef, useState, useImperativeHandle } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { IconClose } from "../../atoms/Icon";
import { MobileDown } from "../../utils/viewport"; // Types

import Container from "../../atoms/Container";
import { disableScrollBody } from "../../utils/disableScrollBody";
import Logo from "./Logo"; // import ContentResultSearch from './ContentResultSearch';

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var Search = /*#__PURE__*/forwardRef(function (props, ref) {
  var href = props.href,
      onClose = props.onClose,
      isShowSearch = props.isShowSearch,
      onSearch = props.onSearch,
      _props$listResultDefa = props.listResultDefault,
      listResultDefault = _props$listResultDefa === void 0 ? [] : _props$listResultDefa,
      hrefSeeAll = props.hrefSeeAll,
      _props$handleRemoveSe = props.handleRemoveSearch,
      handleRemoveSearch = _props$handleRemoveSe === void 0 ? function () {} : _props$handleRemoveSe,
      _props$handleShowTren = props.handleShowTrending,
      handleShowTrending = _props$handleShowTren === void 0 ? function () {} : _props$handleShowTren;
  var RECENT_LOCAL = "recent_local";
  var theme = useTheme();
  var isMobileDown = useMediaQuery(MobileDown(theme));
  var refTimeOut = useRef();
  var refTextField = useRef();

  var _useState = useState(""),
      _useState2 = _slicedToArray(_useState, 2),
      valueSearch = _useState2[0],
      setValueSearch = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      setListResultSearch = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      setRecentList = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isInputFocus = _useState8[0],
      setIsInputFocus = _useState8[1]; // handle ret recentList to localStorage?


  useEffect(function () {
    if (typeof window !== "undefined") {
      var recentInLocal = localStorage.getItem(RECENT_LOCAL);

      if (recentInLocal) {
        var recentLocal = JSON.parse(recentInLocal || "{}");
        setRecentList(recentLocal || []);
      }
    }
  }, [isShowSearch]); // handle reset value when component mount

  useEffect(function () {
    if (refTextField.current) {
      var _refTextField$current;

      refTextField.current.value = "";
      setValueSearch("");
      (_refTextField$current = refTextField.current) == null ? void 0 : _refTextField$current.focus();
    }

    if (typeof window !== "undefined") {
      disableScrollBody(isShowSearch != null ? isShowSearch : false);
    }
  }, [isShowSearch]); // handel event keyup Enter

  useEffect(function () {
    if (typeof window !== "undefined") {
      window.addEventListener("keyup", function (event) {
        if (event.keyCode === 13 || event.key === 'Enter') {
          if (refTimeOut.current) {
            window.clearTimeout(refTimeOut.current);
          }

          refTimeOut.current = setTimeout(function () {
            if (valueSearch && isInputFocus) {
              var _JSON$parse;

              var recentInLocal = (_JSON$parse = JSON.parse(localStorage.getItem(RECENT_LOCAL))) != null ? _JSON$parse : [];
              recentInLocal.push(valueSearch);
              localStorage.setItem(RECENT_LOCAL, JSON.stringify(recentInLocal));
              window.location.href = "".concat(hrefSeeAll, "/search?q=").concat(valueSearch);
            }
          }, 300);
        }
      });
    }
  }, [valueSearch, isInputFocus, hrefSeeAll]);
  useEffect(function () {
    setListResultSearch(listResultDefault);
  }, [listResultDefault]); // handle change input search

  var handleOnChangeSearch = function handleOnChangeSearch(e) {
    var _e$target, _e$target$value;

    var value = e == null ? void 0 : (_e$target = e.target) == null ? void 0 : (_e$target$value = _e$target.value) == null ? void 0 : _e$target$value.trim();
    setValueSearch(value);

    if (refTimeOut.current) {
      window.clearTimeout(refTimeOut.current);
    }

    refTimeOut.current = setTimeout(function () {
      refTimeOut.current = undefined;

      try {
        if (value) {
          var data = onSearch == null ? void 0 : onSearch(value);
          setListResultSearch(data || []);
        } else {
          setListResultSearch(listResultDefault);
        }
      } catch (err) {
        console.warn(err);
      }
    }, 300);
  };

  useImperativeHandle(ref, function () {
    return {
      handleSetValueSearch: function handleSetValueSearch(data) {
        setValueSearch(data != null ? data : '');
      },
      handleSetInputFocus: function handleSetInputFocus(data) {
        setIsInputFocus(data != null ? data : false);
      },
      handleOnChangeInput: function handleOnChangeInput(e) {
        handleOnChangeSearch(e);
      }
    };
  });
  return /*#__PURE__*/_jsx(Box, {
    sx: {
      pointerEvents: "auto"
    },
    children: /*#__PURE__*/_jsx(Container, {
      children: /*#__PURE__*/_jsx(Box, {
        sx: {
          width: "100%",
          display: "flex",
          flexDirection: "column"
        },
        children: /*#__PURE__*/_jsxs(Box, {
          sx: {
            width: "100%",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              md: "row"
            }
          },
          children: [/*#__PURE__*/_jsx(Logo, {
            href: href,
            onClose: onClose
          }), /*#__PURE__*/_jsx(Box, {
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
            children: /*#__PURE__*/_jsxs(Box, {
              sx: {
                position: "relative"
              },
              children: [isShowSearch && (props == null ? void 0 : props.children), !!valueSearch && /*#__PURE__*/_jsx(Box, {
                sx: {
                  position: "absolute",
                  top: "50%",
                  right: "0%",
                  lineHeight: "0px",
                  transform: "translate(-50%, -50%)",
                  zIndex: 10,
                  padding: "2px",
                  cursor: "pointer"
                },
                onClick: function onClick() {
                  handleRemoveSearch();
                  handleShowTrending();
                },
                children: /*#__PURE__*/_jsx(IconClose, {
                  htmlColor: "#1E1E1E",
                  sx: {
                    cursor: "pointer"
                  }
                })
              })]
            })
          }), !isMobileDown && /*#__PURE__*/_jsx(IconClose, {
            htmlColor: "#C1C1C1",
            sx: {
              cursor: "pointer"
            },
            onClick: function onClick() {
              return onClose == null ? void 0 : onClose();
            }
          })]
        })
      })
    })
  });
});
export default Search;
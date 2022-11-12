import React, { forwardRef, useEffect, useRef, useState, useImperativeHandle } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import { IconClose } from "../../atoms/Icon";
import { MobileDown } from "../../utils/viewport"; // Types

import Container from "../../atoms/Container";
import { disableScrollBody } from "../../utils/disableScrollBody";
import Logo from "./Logo"; // import ContentResultSearch from './ContentResultSearch';

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const Search = /*#__PURE__*/forwardRef((props, ref) => {
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
  const theme = useTheme();
  const isMobileDown = useMediaQuery(MobileDown(theme));
  const refTimeOut = useRef();
  const refTextField = useRef();
  const [valueSearch, setValueSearch] = useState("");
  const [, setListResultSearch] = useState([]);
  const [, setRecentList] = useState([]);
  const [isInputFocus, setIsInputFocus] = useState(false); // handle ret recentList to localStorage?

  useEffect(() => {
    if (typeof window !== "undefined") {
      const recentInLocal = localStorage.getItem(RECENT_LOCAL);

      if (recentInLocal) {
        const recentLocal = JSON.parse(recentInLocal || "{}");
        setRecentList(recentLocal || []);
      }
    }
  }, [isShowSearch]); // handle reset value when component mount

  useEffect(() => {
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

  useEffect(() => {
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
  useEffect(() => {
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

  useImperativeHandle(ref, () => ({
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
                  transform: `translate(-50%, -50%)`,
                  zIndex: 10,
                  padding: "2px",
                  cursor: "pointer"
                },
                onClick: () => {
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
            onClick: () => onClose == null ? void 0 : onClose()
          })]
        })
      })
    })
  });
});
export default Search;
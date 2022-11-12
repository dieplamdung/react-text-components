import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box } from '@mui/material';
import Link from '@mui/material/Link';
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors"; // Types

import Container from "../../atoms/Container";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var SearchResultFilterPill = /*#__PURE__*/forwardRef(function (props, ref) {
  var listTabs = props.listTabs,
      handleGetTabActive = props.handleGetTabActive;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isStickyContent = _useState2[0],
      setIsStickyContent = _useState2[1];

  var refContentSticker = useRef();
  var wrapperContent = useRef();
  var refSticky = useRef();
  var refScrollTop = useRef(0);

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      activeFilter = _useState4[0],
      setActiveFilter = _useState4[1];

  useEffect(function () {
    if (typeof window !== "undefined") {
      var content = wrapperContent.current;

      var _content$getBoundingC = content.getBoundingClientRect(),
          top = _content$getBoundingC.top;

      var heightComponent = 30;
      var positionTopContent = top + window.scrollY;

      if (content) {
        window.addEventListener("scroll", function () {
          var body = document.querySelector(".disable-scroll");

          if (!body) {
            if (positionTopContent + heightComponent <= window.scrollY && !refSticky.current) {
              refSticky.current = true;
              setIsStickyContent(true);
              refScrollTop.current = window.scrollY;
            }

            if (positionTopContent + heightComponent > window.scrollY && refSticky.current) {
              refSticky.current = false;
              setIsStickyContent(false);
            }
          }
        });
      }
    }

    return function () {
      window.removeEventListener("scroll", function () {});
    };
  }, []);
  useEffect(function () {
    if (typeof window !== "undefined") {
      var heightTop = "-150px";

      if (refSticky.current) {
        var content = refContentSticker.current;

        if (content) {
          window.addEventListener("scroll", function () {
            var body = document.querySelector(".disable-scroll");

            if (!body) {
              if (refSticky.current) {
                if (window.scrollY > refScrollTop.current) {
                  content.style.top = "0px";
                  refScrollTop.current = window.scrollY;
                }

                if (window.scrollY < refScrollTop.current) {
                  content.style.top = heightTop;
                  refScrollTop.current = window.scrollY;
                }
              }

              if (!refSticky.current) {
                content.style.top = heightTop;
              }
            }
          });
        }
      } else {
        window.removeEventListener("scroll", function () {});
      }
    }

    return function () {
      window.removeEventListener("scroll", function () {});
    };
  }, [isStickyContent]);

  var getTabActive = function getTabActive(e) {
    handleGetTabActive == null ? void 0 : handleGetTabActive(e);
  };

  useImperativeHandle(ref, function () {
    return {
      handleClickTab: function handleClickTab(idx, value) {
        setActiveFilter(idx);
        getTabActive(value);
      }
    };
  });

  var handleScrollTop = function handleScrollTop() {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return /*#__PURE__*/_jsxs(Box, {
    ref: wrapperContent,
    children: [/*#__PURE__*/_jsx(Box, {
      children: /*#__PURE__*/_jsx(Box, {
        sx: {
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          width: "100%",
          height: "100%",
          overflowX: "scroll",
          marginTop: '80px',
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        },
        children: listTabs == null ? void 0 : listTabs.map(function (item, idx) {
          return /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "inline-block",
              marginRight: {
                xs: '28px',
                md: '48'
              }
            },
            onClick: function onClick() {
              setActiveFilter(idx);
              getTabActive(item.value);
            },
            children: /*#__PURE__*/_jsx(Typography, {
              variant: "p3",
              color: colors.neutral.neutral4,
              className: idx === activeFilter ? 'active' : '',
              sx: {
                position: 'relative',
                '&:hover': {
                  '&:after': {
                    width: '100%'
                  },
                  '& a': {
                    color: colors.primary.bandaiNamcoRed
                  }
                },
                '&.active': {
                  '&:after': {
                    width: '100%'
                  },
                  '& a': {
                    color: colors.primary.bandaiNamcoRed
                  }
                },
                whiteSpace: 'nowrap',
                '&:after': {
                  content: "''",
                  width: '0%',
                  position: 'absolute',
                  bottom: 0,
                  height: '2px',
                  left: 0,
                  transition: 'all .4s',
                  backgroundColor: colors.primary.bandaiNamcoRed
                }
              },
              children: /*#__PURE__*/_jsx(Link // eslint-disable-next-line no-script-url
              , {
                href: 'javascript:void(0)',
                sx: {
                  textDecoration: 'none',
                  transition: 'all .4s',
                  color: colors.otherColor.silver,
                  userSelect: item.disable ? 'none' : 'auto',
                  pointerEvents: item.disable ? 'none' : 'auto'
                },
                children: item.label
              })
            })
          }, idx);
        })
      })
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        position: "fixed",
        top: "".concat(isStickyContent ? "0px" : "-150px"),
        left: "0px",
        width: "100%",
        height: "90px",
        display: "flex",
        alignItems: "center",
        background: "#FFFFFF",
        boxShadow: "0px 7px 17px rgba(0, 0, 0, 0.04)",
        zIndex: "99",
        transition: "all 0.3s"
      },
      ref: refContentSticker,
      children: /*#__PURE__*/_jsx(Container, {
        children: /*#__PURE__*/_jsx(Box, {
          sx: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            width: "100%",
            height: "100%",
            overflowX: "scroll",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none"
            },
            padding: '6px 0px'
          },
          children: listTabs == null ? void 0 : listTabs.map(function (item, idx) {
            return /*#__PURE__*/_jsx(Box, {
              sx: {
                display: "inline-block",
                marginRight: {
                  xs: '28px',
                  md: '48'
                }
              },
              onClick: function onClick() {
                setActiveFilter(idx);
                getTabActive(item.value);
                handleScrollTop();
              },
              children: /*#__PURE__*/_jsx(Typography, {
                variant: "p3",
                color: colors.neutral.neutral4,
                className: idx === activeFilter ? 'active' : '',
                sx: {
                  position: 'relative',
                  '&:hover': {
                    '&:after': {
                      width: '100%'
                    },
                    '& a': {
                      color: colors.primary.bandaiNamcoRed
                    }
                  },
                  '&.active': {
                    '&:after': {
                      width: '100%'
                    },
                    '& a': {
                      color: colors.primary.bandaiNamcoRed
                    }
                  },
                  whiteSpace: 'nowrap',
                  '&:after': {
                    content: "''",
                    width: '0%',
                    position: 'absolute',
                    bottom: 0,
                    height: '2px',
                    left: 0,
                    transition: 'all .4s',
                    backgroundColor: colors.primary.bandaiNamcoRed
                  }
                },
                children: /*#__PURE__*/_jsx(Link // eslint-disable-next-line no-script-url
                , {
                  href: 'javascript:void(0)',
                  sx: {
                    textDecoration: 'none',
                    transition: 'all .4s',
                    color: colors.otherColor.silver,
                    userSelect: item.disable ? 'none' : 'auto',
                    pointerEvents: item.disable ? 'none' : 'auto'
                  },
                  children: item.label
                })
              })
            }, idx);
          })
        })
      })
    })]
  });
});
export default SearchResultFilterPill;
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Box } from '@mui/material';
import Link from '@mui/material/Link';
import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors"; // Types

import Container from "../../atoms/Container";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const SearchResultFilterPill = /*#__PURE__*/forwardRef((props, ref) => {
  const {
    listTabs,
    handleGetTabActive
  } = props;
  const [isStickyContent, setIsStickyContent] = useState(false);
  const refContentSticker = useRef();
  const wrapperContent = useRef();
  const refSticky = useRef();
  const refScrollTop = useRef(0);
  const [activeFilter, setActiveFilter] = useState(0);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const content = wrapperContent.current;
      const {
        top
      } = content.getBoundingClientRect();
      const heightComponent = 30;
      const positionTopContent = top + window.scrollY;

      if (content) {
        window.addEventListener("scroll", () => {
          const body = document.querySelector(".disable-scroll");

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

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const heightTop = "-150px";

      if (refSticky.current) {
        const content = refContentSticker.current;

        if (content) {
          window.addEventListener("scroll", () => {
            const body = document.querySelector(".disable-scroll");

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
        window.removeEventListener("scroll", () => {});
      }
    }

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [isStickyContent]);

  const getTabActive = e => {
    handleGetTabActive == null ? void 0 : handleGetTabActive(e);
  };

  useImperativeHandle(ref, () => ({
    handleClickTab(idx, value) {
      setActiveFilter(idx);
      getTabActive(value);
    }

  }));

  const handleScrollTop = () => {
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
        children: listTabs == null ? void 0 : listTabs.map((item, idx) => /*#__PURE__*/_jsx(Box, {
          sx: {
            display: "inline-block",
            marginRight: {
              xs: '28px',
              md: '48'
            }
          },
          onClick: () => {
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
        }, idx))
      })
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        position: "fixed",
        top: `${isStickyContent ? "0px" : "-150px"}`,
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
          children: listTabs == null ? void 0 : listTabs.map((item, idx) => /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "inline-block",
              marginRight: {
                xs: '28px',
                md: '48'
              }
            },
            onClick: () => {
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
          }, idx))
        })
      })
    })]
  });
});
export default SearchResultFilterPill;
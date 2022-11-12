var _IconArrowDown;

import React, { memo, useEffect, useRef, useState } from 'react';
import { Box, useMediaQuery, useTheme } from '@mui/material';
import Button from "../../atoms/Button";
import { IconArrowDown, IconNextSlide, IconPrevSlide } from "../../atoms/Icon";
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors";
import { Desktop } from "../../utils/viewport"; // Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const WrapperSubMenu = ({
  listNavigation,
  onSelectItem,
  onBuy,
  itemSelect,
  background = "#fff",
  externalLink,
  titleBtn
}) => {
  const theme = useTheme();
  const isDesktopDown = useMediaQuery(Desktop(theme));
  const [isShowSubLink, setIsShowSubLink] = useState(false);
  const [isNextScroll, setIsNextScroll] = useState(true);
  const [maxWidth, setIsMaxWidth] = useState(1000);
  const refSubMenu = useRef();
  const refWrapperListSubMenu = useRef();
  const refTimeOut = useRef();
  useEffect(() => {
    if (typeof window !== "undefined") {
      refTimeOut.current = setTimeout(() => {
        var _refWrapperListSubMen;

        const listSub = refWrapperListSubMenu == null ? void 0 : (_refWrapperListSubMen = refWrapperListSubMenu.current) == null ? void 0 : _refWrapperListSubMen.querySelectorAll(".item-sub-navigation");

        if (listSub != null && listSub.length) {
          let mWidth = 0;
          listSub.forEach(element => {
            const offsetWidth = (element == null ? void 0 : element.offsetWidth) + 28;
            mWidth += offsetWidth;
          });
          setIsMaxWidth(mWidth > 830 ? 1001 : mWidth + 12);
        }
      }, 500);
    }

    return () => {
      window.clearTimeout(refTimeOut.current);
    };
  }, [listNavigation]);
  useEffect(() => {
    const SubMenu = refSubMenu.current;

    if (SubMenu && typeof window !== "undefined") {
      window.addEventListener("click", ev => {
        if (!SubMenu.contains(ev.target) && ev) {
          setIsShowSubLink(false);
        }
      });

      if (isShowSubLink) {
        window.addEventListener("scroll", () => {
          setIsShowSubLink(false);
        });
      }
    }

    return () => {
      window.removeEventListener("click", () => {});
      window.removeEventListener("scroll", () => {});
    };
  }, [isShowSubLink]);

  const handleScroll = type => {
    const wrapper = refWrapperListSubMenu == null ? void 0 : refWrapperListSubMenu.current;

    if (wrapper) {
      if (type === "pre") {
        wrapper.scrollTo({
          left: 0,
          behavior: "smooth"
        });
        setIsNextScroll(true);
      } else {
        wrapper.scrollTo({
          left: 20000,
          behavior: "smooth"
        });
        setIsNextScroll(false);
      }
    }
  };

  const handleScrollByIndexItem = index => {
    var _wrapper$childNodes;

    const wrapper = refWrapperListSubMenu == null ? void 0 : refWrapperListSubMenu.current;
    const item = wrapper == null ? void 0 : (_wrapper$childNodes = wrapper.childNodes) == null ? void 0 : _wrapper$childNodes[index];

    if (item) {
      const {
        offsetLeft
      } = item;

      if (offsetLeft > 600) {
        wrapper.scrollTo({
          left: 20000,
          behavior: "smooth"
        });
        setIsNextScroll(false);
      }

      if (offsetLeft < 600) {
        wrapper.scrollTo({
          left: 0,
          behavior: "smooth"
        });
        setIsNextScroll(true);
      }
    }
  };

  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      maxWidth: titleBtn ? "1024px" : "916px",
      minWidth: isDesktopDown ? "auto" : "282px",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      border: "1px solid",
      borderColor: colors.neutral.neutral5,
      borderRadius: "60px",
      background,
      padding: {
        xs: "0px 22px",
        xl: "0px 32px"
      },
      position: "relative",
      "&:hover": {
        "& .wrapper-menu": {
          width: `${maxWidth}px`,
          "& .menu-sub": {
            opacity: "0",
            zIndex: "-1"
          },
          "& .list-menu-sub": {
            opacity: "1"
          },
          "& .icon-arrow": {
            opacity: "1"
          }
        }
      }
    },
    children: [isDesktopDown && /*#__PURE__*/_jsxs(Box, {
      sx: {
        height: "100%",
        width: "153px",
        // width: "1000px",
        maxWidth: "1000px",
        display: "inline-flex",
        margin: "0px",
        marginLeft: "-12px",
        overflow: "hidden",
        position: "relative",
        transition: "all 0.8s"
      },
      className: "wrapper-menu",
      children: [/*#__PURE__*/_jsx(Box, {
        sx: {
          position: "absolute",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          padding: "0px 14px",
          opacity: "1",
          transition: "all 0.3s",
          justifyContent: titleBtn ? 'flex-start' : 'center'
        },
        className: "menu-sub",
        children: /*#__PURE__*/_jsx(Typography, {
          color: colors.primary.bandaiNamcoBlack,
          variant: "p3",
          sx: {
            fontSize: {
              xs: "14px",
              md: "16px"
            },
            lineHeight: {
              xs: "20px",
              md: "22px"
            },
            letterSpacing: "-0.2px",
            whiteSpace: "nowrap"
          },
          children: itemSelect.label
        })
      }), maxWidth > 1000 && /*#__PURE__*/_jsx(Box, {
        sx: {
          height: "100%",
          display: "flex",
          alignItems: "center",
          opacity: "0",
          transition: "all 0.3s",
          '&:hover': {
            '& path': {
              stroke: isNextScroll ? colors.otherColor.quickSilver : colors.primary.bandaiNamcoRed
            }
          },
          '& svg': {
            pointerEvents: isNextScroll ? 'none' : "all",
            '& path': {
              stroke: isNextScroll ? colors.otherColor.quickSilver : colors.primary.bandaiNamcoBlack
            }
          }
        },
        className: "icon-arrow",
        children: /*#__PURE__*/_jsx(IconPrevSlide, {
          htmlColor: "transparent",
          onClick: () => {
            handleScroll("pre");
            setIsNextScroll(true);
          }
        })
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          display: "flex",
          flex: 1,
          flexWrap: "nowrap",
          height: "100%",
          alignItems: "center",
          overflowX: "auto",
          opacity: "0",
          margin: "0px 12px",
          // opacity: "1",
          transition: "all 0.3s",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        },
        className: "list-menu-sub",
        ref: refWrapperListSubMenu,
        children: listNavigation.map((item, index) => {
          return /*#__PURE__*/_jsxs(Box, {
            sx: {
              display: "flex",
              justifyItems: "flex-start",
              alignItems: "center",
              height: "100%",
              margin: "0px 14px",
              position: "relative",
              cursor: "pointer",
              "&:hover": {
                "& p": {
                  color: colors.primary.bandaiNamcoRed
                },
                "& div": {
                  width: "100%"
                }
              },
              "&:first-child": titleBtn ? {
                marginLeft: "0px"
              } : {}
            },
            onClick: () => {
              onSelectItem == null ? void 0 : onSelectItem(item);
              handleScrollByIndexItem(index);
            },
            className: "item-sub-navigation",
            children: [/*#__PURE__*/_jsx(Typography, {
              color: item.value === itemSelect.value ? colors.primary.bandaiNamcoRed : colors.primary.bandaiNamcoBlack,
              variant: "p3",
              sx: {
                fontSize: {
                  xs: "14px",
                  md: "16px"
                },
                lineHeight: {
                  xs: "20px",
                  md: "22px"
                },
                letterSpacing: "-0.2px",
                whiteSpace: "nowrap"
              },
              children: item.label
            }), /*#__PURE__*/_jsx(Box, {
              sx: {
                position: "absolute",
                left: 0,
                bottom: "24px",
                height: "2px",
                width: item.value === itemSelect.value ? "100%" : "0%",
                background: "red",
                borderRadius: "20px",
                transition: "all 0.3s"
              }
            })]
          }, item.value);
        })
      }), maxWidth > 1000 && titleBtn && /*#__PURE__*/_jsx(Box, {
        sx: {
          height: "100%",
          display: "flex",
          alignItems: "center",
          marginRight: "20px",
          opacity: "0",
          transition: "all 0.3s",
          '&:hover': {
            '& path': {
              stroke: !isNextScroll ? colors.otherColor.quickSilver : colors.primary.bandaiNamcoRed
            }
          },
          '& svg': {
            pointerEvents: !isNextScroll ? 'none' : "all",
            '& path': {
              stroke: !isNextScroll ? colors.otherColor.quickSilver : colors.primary.bandaiNamcoBlack
            }
          }
        },
        className: "icon-arrow",
        children: /*#__PURE__*/_jsx(IconNextSlide, {
          htmlColor: "transparent",
          onClick: () => {
            setIsNextScroll(false);
            handleScroll("nex");
          }
        })
      })]
    }), !isDesktopDown && /*#__PURE__*/_jsxs(Box, {
      sx: {
        flex: 1,
        height: "100%",
        display: "flex",
        gap: '12px',
        alignItems: "center",
        justifyContent: "space-between",
        marginRight: "16px",
        cursor: "pointer",
        "& svg": {
          transform: isShowSubLink ? "rotate(-180deg)" : "rotate(0deg)",
          transition: "all 0.3s"
        }
      },
      onClick: e => {
        e.stopPropagation();
        setIsShowSubLink(!isShowSubLink);
      },
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "p3",
        sx: {
          fontSize: {
            xs: "14px",
            md: "16px"
          },
          lineHeight: {
            xs: "20px",
            md: "22px"
          },
          letterSpacing: "-0.2px"
        },
        children: itemSelect.label
      }), _IconArrowDown || (_IconArrowDown = /*#__PURE__*/_jsx(IconArrowDown, {
        htmlColor: "#000000"
      }))]
    }), !isDesktopDown && /*#__PURE__*/_jsx(Box, {
      sx: {
        position: "absolute",
        visibility: isShowSubLink ? "visible" : "hidden",
        top: isShowSubLink ? "74px" : "100px",
        left: "0",
        right: "0",
        width: "90%",
        margin: "0 auto",
        background: "rgba(237, 237, 237, 0.8)",
        "WebkitBackdropFilter": "blur(6px)",
        backdropFilter: " blur(6px)",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        zIndex: isShowSubLink ? 3 : -1,
        opacity: isShowSubLink ? "1" : "0",
        transition: "all 0.5s"
      },
      ref: refSubMenu,
      children: listNavigation.map(item => {
        return /*#__PURE__*/_jsx(Box, {
          sx: {
            height: "42px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0 16px",
            "&:hover": {
              background: colors.neutral.neutral5
            }
          },
          onClick: e => {
            e.stopPropagation();
            setIsShowSubLink(false);
            onSelectItem(item);
          },
          children: /*#__PURE__*/_jsx(Typography, {
            variant: "p3",
            sx: {
              fontWeight: "400",
              fontSize: {
                xs: "14px",
                md: "16px"
              },
              lineHeight: {
                xs: "20px",
                md: "22px"
              }
            },
            children: item.label
          })
        }, item.value);
      })
    }), titleBtn && /*#__PURE__*/_jsx(Button, {
      variant: "primaryDark",
      externalLink: externalLink,
      sx: {
        minWidth: "120px",
        height: {
          xs: "46px"
        }
      },
      onClick: () => onBuy == null ? void 0 : onBuy(itemSelect.value),
      children: titleBtn
    })]
  });
};

export default /*#__PURE__*/memo(WrapperSubMenu);
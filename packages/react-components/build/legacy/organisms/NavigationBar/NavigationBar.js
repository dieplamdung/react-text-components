import _extends from "@babel/runtime/helpers/esm/extends";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _svg, _IconClose;

import { Box, Grid, Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import React, { useEffect, useRef, useState } from 'react';
import Typography from "../../atoms/Typography";
import { IconLanguage, IconUser, IconShop, IconSearch, IconBandaiNamco, IconNextSlide, IconMenu } from "../../atoms/Icon";
import Container from "../../atoms/Container";
import Accordion from '@mui/material/Accordion';
import Button from "../../atoms/Button";
import { disableScrollBody } from "../../utils/disableScrollBody";
import loadable from '@loadable/component'; // Styles

import colors from "../../theme/colors"; // Types

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var AccordionSummary = loadable(function () {
  return import("@mui/material/AccordionSummary");
});
var AccordionDetails = loadable(function () {
  return import("@mui/material/AccordionDetails");
});
var NavigationBarDropDown = loadable(function () {
  return import("./NavigationBarDropDown");
});
var LocationSelectionBanner = loadable(function () {
  return import("../LocationSelectionBanner");
});
var MenuUserInfo = loadable(function () {
  return import("./MenuUserInfo");
});
var MenuUser = loadable(function () {
  return import("./MenuUser");
});
var Dropdown = loadable(function () {
  return import("../../molecules/Dropdown");
});

var IconClose = function IconClose() {
  return _svg || (_svg = /*#__PURE__*/_jsxs("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/_jsx("rect", {
      width: "2.31859",
      height: "17.4802",
      rx: "1.1593",
      transform: "matrix(0.707113 -0.7071 0.707113 0.7071 5 6.63953)",
      fill: "#1E1E1E"
    }), /*#__PURE__*/_jsx("rect", {
      width: "2.31859",
      height: "17.4802",
      rx: "1.1593",
      transform: "matrix(0.707113 0.7071 -0.707113 0.7071 17.3613 5.00049)",
      fill: "#1E1E1E"
    })]
  }));
};

var NavigationBar = function NavigationBar(props) {
  var _locationPrompt$isSho, _NavigationBarDropDow, _NavigationBarDropDow2;

  var theme = props.theme,
      logo = props.logo,
      menuProps = props.menuProps,
      rainbows = props.rainbows,
      _props$notify = props.notify,
      notify = _props$notify === void 0 ? false : _props$notify,
      buttonProps = props.buttonProps,
      _props$listLocation = props.listLocation,
      listLocation = _props$listLocation === void 0 ? [] : _props$listLocation,
      infoUser = props.infoUser,
      _props$logged = props.logged,
      logged = _props$logged === void 0 ? false : _props$logged,
      iconProps = props.iconProps,
      _props$languages = props.languages,
      languages = _props$languages === void 0 ? [] : _props$languages,
      _props$signInOut = props.signInOut,
      signInOut = _props$signInOut === void 0 ? [] : _props$signInOut,
      locationPrompt = props.locationPrompt,
      handleCloseBannerRevamp = props.handleCloseBannerRevamp,
      handleRedirectLanguage = props.handleRedirectLanguage,
      languagesDefault = props.languagesDefault,
      locale = props.locale,
      _props$handleShowLayo = props.handleShowLayoutSearch,
      handleShowLayoutSearch = _props$handleShowLayo === void 0 ? function () {} : _props$handleShowLayo,
      _props$estore = props.estore,
      estore = _props$estore === void 0 ? false : _props$estore;

  var _useState = useState(theme),
      _useState2 = _slicedToArray(_useState, 2),
      contentTheme = _useState2[0],
      setContentTheme = _useState2[1];

  var isMobile = useMediaQuery(function (themes) {
    return themes.breakpoints.down('lg');
  });
  var _colors$primary = colors.primary,
      bandaiNamcoWhite = _colors$primary.bandaiNamcoWhite,
      bandaiNamcoBlack = _colors$primary.bandaiNamcoBlack;

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      expanded = _useState4[0],
      setExpanded = _useState4[1]; // const [expandedMobile, setExpandedMobile] = useState<string | boolean>('');


  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isRelative = _useState6[0],
      setIsRelative = _useState6[1];

  var _useState7 = useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      offSetLeftMenu = _useState8[0],
      setOffSetLeftMenu = _useState8[1];

  var _useState9 = useState((_locationPrompt$isSho = locationPrompt.isShowLocation) != null ? _locationPrompt$isSho : false),
      _useState10 = _slicedToArray(_useState9, 2),
      isShowLocation = _useState10[0],
      setIsShowLocation = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isShowMenuUserInfo = _useState12[0],
      setIsShowMenuInfo = _useState12[1];

  var userInfoRef = useRef(0);
  var menuRef = useRef();
  useEffect(function () {
    setContentTheme(theme);
  }, [theme]);
  useEffect(function () {
    setIsShowLocation(locationPrompt.isShowLocation);
  }, [locationPrompt.isShowLocation]);

  var _handleCloseMenuUserInfo = function handleCloseMenuUserInfo() {
    // Info User
    setIsShowMenuInfo(false);
    var mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenu) {
      mobileMenu.style.overflowY = "auto";
    }
  };

  var _handleOpenMenuUserInfo = function handleOpenMenuUserInfo() {
    // Info User
    setIsShowMenuInfo(true);
    var mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenu) {
      mobileMenu.style.overflowY = "hidden";
    }
  };

  var handleCloseMenuMobile = function handleCloseMenuMobile() {
    var _document$getElementB, _document$getElementB2, _document$getElementB3, _document$getElementB4, _document$getElements, _document$getElements2;

    // Mobile menu
    (_document$getElementB = document.getElementById('mobile-menu')) == null ? void 0 : _document$getElementB.classList.add('closed');
    (_document$getElementB2 = document.getElementById('overlay')) == null ? void 0 : _document$getElementB2.classList.add('closed');
    (_document$getElementB3 = document.getElementById('mobile-menu')) == null ? void 0 : _document$getElementB3.classList.remove('opened');
    (_document$getElementB4 = document.getElementById('overlay')) == null ? void 0 : _document$getElementB4.classList.remove('opened'); // Desktop menu

    (_document$getElements = document.getElementsByClassName('navigationBar')[0]) == null ? void 0 : _document$getElements.classList.remove('hidden');
    (_document$getElements2 = document.getElementsByClassName('navigationBar')[0]) == null ? void 0 : _document$getElements2.classList.add('show'); // handleDisableScrollBody(false)

    disableScrollBody(false); // window.scrollTo(0, heightStateScroll);
  };

  var handleChange = function handleChange(panel) {
    return function (event, newExpanded) {
      setIsRelative(newExpanded);
      setExpanded(newExpanded ? panel : false);
    };
  };

  var handleShowMenu = function handleShowMenu() {
    // Show menu
    if (typeof window !== "undefined") {
      var _document$getElementB5, _document$getElementB6, _document$getElementB7, _document$getElementB8, _document$getElements3, _document$getElements4;

      // Mobile menu
      (_document$getElementB5 = document.getElementById('mobile-menu')) == null ? void 0 : _document$getElementB5.classList.add('opened');
      (_document$getElementB6 = document.getElementById('overlay')) == null ? void 0 : _document$getElementB6.classList.add('opened');
      (_document$getElementB7 = document.getElementById('mobile-menu')) == null ? void 0 : _document$getElementB7.classList.remove('closed');
      (_document$getElementB8 = document.getElementById('overlay')) == null ? void 0 : _document$getElementB8.classList.remove('closed'); // Desktop menu

      (_document$getElements3 = document.getElementsByClassName('navigationBar')[0]) == null ? void 0 : _document$getElements3.classList.add('hidden');
      (_document$getElements4 = document.getElementsByClassName('navigationBar')[0]) == null ? void 0 : _document$getElements4.classList.remove('show');
      disableScrollBody(true);
    }
  };

  var _handleCloseAllMenu = function handleCloseAllMenu() {
    var _document$getElementB9, _document$getElementB10, _document$getElements5, _document$getElements6;

    setIsShowMenuInfo(false); // Info User

    (_document$getElementB9 = document.getElementById('userInfo')) == null ? void 0 : _document$getElementB9.classList.add('closed');
    (_document$getElementB10 = document.getElementById('userInfo')) == null ? void 0 : _document$getElementB10.classList.remove('opened'); // Desktop menu

    (_document$getElements5 = document.getElementsByClassName('navigationBar')[0]) == null ? void 0 : _document$getElements5.classList.remove('hidden');
    (_document$getElements6 = document.getElementsByClassName('navigationBar')[0]) == null ? void 0 : _document$getElements6.classList.add('show'); // Mobile menu

    var mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenu) {
      mobileMenu.style.overflowY = "auto";
      mobileMenu.classList.add('closed');
      mobileMenu.classList.remove('opened');
    }

    disableScrollBody(false);
  };

  var propsDropDow = {
    disabled: false,
    error: false,
    helperText: 'Helper text',
    variant: "outlined",
    width: 270,
    defaultValue: languagesDefault,
    data: languages != null && languages.length ? languages.map(function (item) {
      return {
        label: item.label,
        value: item.label
      };
    }) : []
  };
  useEffect(function () {
    var nav = document.getElementById("navigation");
    var scrollUp = "scroll-up";
    var scrollDown = "scroll-down";
    var lastScroll = 0;
    window.addEventListener("scroll", function () {
      var currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        nav == null ? void 0 : nav.classList.remove(scrollUp);
        return;
      }

      if (currentScroll > lastScroll && !(nav != null && nav.classList.contains(scrollDown))) {
        // down
        nav == null ? void 0 : nav.classList.remove(scrollUp);
        nav == null ? void 0 : nav.classList.add(scrollDown);
      } else if (currentScroll < lastScroll && nav != null && nav.classList.contains(scrollDown)) {
        // up
        nav == null ? void 0 : nav.classList.remove(scrollDown);
        nav == null ? void 0 : nav.classList.add(scrollUp);
      }

      lastScroll = currentScroll;
    });

    var updateSize = function updateSize() {
      if (window.innerWidth >= 992) {
        var _menuRef$current;

        var offsetLeft = (menuRef == null ? void 0 : (_menuRef$current = menuRef.current) == null ? void 0 : _menuRef$current.offsetLeft) || 0;
        setOffSetLeftMenu(offsetLeft);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return function () {
      return window.removeEventListener('resize', updateSize);
    };
  }, []);

  var handleCloseBannerLocation = function handleCloseBannerLocation() {
    handleCloseBannerRevamp == null ? void 0 : handleCloseBannerRevamp();
  };

  var handleSelectLanguage = function handleSelectLanguage(value) {
    if (typeof window !== "undefined") {
      var itemLanguage = languages == null ? void 0 : languages.find(function (item) {
        return item.label === value;
      });

      if (itemLanguage) {
        window.location.href = "".concat(itemLanguage.href);
      }
    }
  };

  var handelMouseEnter = function handelMouseEnter(index) {
    var menuHover = (menuProps == null ? void 0 : menuProps[index]) || "";

    if (contentTheme === "transparent") {
      var _menuHover$subMenu;

      if (!!menuHover && menuHover != null && (_menuHover$subMenu = menuHover.subMenu) != null && _menuHover$subMenu.length) {
        setContentTheme("light");
      }
    }
  };

  var _onMouseLeave = function onMouseLeave(index) {
    var menuHover = (menuProps == null ? void 0 : menuProps[index]) || "";

    if (theme === "transparent") {
      var _menuHover$subMenu2;

      if (!!menuHover && menuHover != null && (_menuHover$subMenu2 = menuHover.subMenu) != null && _menuHover$subMenu2.length) {
        setContentTheme(theme);
      }
    }
  };

  return /*#__PURE__*/_jsx(Box, {
    children: /*#__PURE__*/_jsxs(Box, {
      id: "navigation",
      sx: {
        zIndex: '30',
        position: 'fixed',
        left: '0px',
        right: '0px',
        top: '0px',
        transition: 'transform 0.4s',
        '&.scroll-down': {
          transform: 'translate3d(0, -100%, 0)'
        },
        '&.scroll-up': {
          transform: 'none',
          '&:after': {
            content: "''",
            width: '100%',
            height: '1px',
            backgroundColor: contentTheme !== 'light' ? "none" : '#EAEAEA',
            position: 'absolute',
            bottom: '-1px'
          }
        },
        pointerEvents: "auto"
      },
      children: [isShowLocation && /*#__PURE__*/_jsx(Box, {
        children: /*#__PURE__*/_jsx(LocationSelectionBanner, _extends({}, locationPrompt, {
          listLocation: listLocation,
          onClose: setIsShowLocation,
          handleCloseFunc: handleCloseBannerLocation,
          onUpdate: function onUpdate(v) {
            handleRedirectLanguage == null ? void 0 : handleRedirectLanguage(v);
          }
        }))
      }), /*#__PURE__*/_jsxs(Box, {
        className: "navigationBar",
        sx: {
          backgroundColor: contentTheme === 'dark' ? bandaiNamcoBlack : contentTheme === 'light' && bandaiNamcoWhite || 'transparent',
          display: 'flex',
          flexWrap: 'nowrap',
          justifyContent: {
            xs: 'space-between',
            lg: 'unset'
          },
          transition: 'all .4s',
          transform: 'translateY(0)',
          position: 'relative',
          zIndex: '2',
          '&.hidden': {
            transform: 'translateY(-100px)'
          },
          '&.show': {
            transform: 'translateY(0px)'
          }
        },
        children: [contentTheme === 'light' && /*#__PURE__*/_jsx(Grid, {
          item: true,
          xs: 12,
          sx: {
            width: {
              xs: '50%',
              md: "calc(100% - ".concat(offSetLeftMenu != null ? offSetLeftMenu : 0, "px)")
            },
            position: "absolute",
            height: "4px",
            top: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'row-reverse',
            padding: '0px'
          },
          children: rainbows == null ? void 0 : rainbows.map(function (rainbow, index) {
            var _rainbows;

            return /*#__PURE__*/_jsx(Box, {
              sx: {
                width: {
                  xs: index === rainbows.length - 1 ? '300%' : '100%',
                  sm: '100%'
                },
                height: '100%',
                borderLeft: "4px solid ".concat((_rainbows = rainbows[index + 1]) != null ? _rainbows : 'transparent'),
                borderTop: "4px solid ".concat(rainbow)
              }
            }, index);
          })
        }), /*#__PURE__*/_jsx(Container, {
          children: /*#__PURE__*/_jsxs(Box, {
            sx: {
              width: "100%",
              display: 'flex',
              justifyContent: 'space-between',
              padding: {
                xs: '24px 0',
                xl: '32px 0'
              },
              position: "relative",
              '&:after': {
                content: "''",
                width: '100%',
                height: '1px',
                backgroundColor: contentTheme !== 'transparent' ? "none" : 'rgb(255 255 255)',
                position: 'absolute',
                bottom: '0px',
                opacity: '20%'
              }
            },
            children: [/*#__PURE__*/_jsx(Link, {
              href: "/".concat(locale),
              sx: {
                color: ['dark', 'transparent'].includes(contentTheme) ? colors.primary.bandaiNamcoWhite : colors.primary.bandaiNamcoBlack,
                display: 'inherit'
              },
              children: /*#__PURE__*/_jsx("img", {
                src: logo,
                alt: ""
              })
            }), !isMobile && /*#__PURE__*/_jsx(Box, {
              sx: {
                display: {
                  xs: 'none',
                  md: 'flex'
                },
                justifyContent: estore ? 'center' : 'left',
                flexDirection: 'row',
                gap: {
                  xs: '18px',
                  xl: '36px'
                },
                marginLeft: '60px',
                width: '100%'
              },
              ref: menuRef,
              children: menuProps == null ? void 0 : menuProps.map(function (menu, index) {
                var _menu$subMenu, _menu$subMenu2, _menu$ourPicks, _menu$ourPicks2, _menu$ourPicks3, _menu$seeAll, _menu$seeAll2;

                return /*#__PURE__*/_jsxs(Box, {
                  sx: {
                    position: 'relative',
                    display: 'inline-flex',
                    alignItems: 'center',
                    '& a': {
                      textDecoration: 'none',
                      color: contentTheme === 'dark' ? bandaiNamcoWhite : contentTheme === 'light' && bandaiNamcoBlack || bandaiNamcoWhite
                    },
                    '&:hover': {
                      '& .subMenu': {
                        opacity: 1,
                        zIndex: '999',
                        top: '96px',
                        visibility: 'visible'
                      }
                    }
                  },
                  onMouseLeave: function onMouseLeave() {
                    return _onMouseLeave(index);
                  },
                  onMouseEnter: function onMouseEnter() {
                    return handelMouseEnter(index);
                  },
                  children: [/*#__PURE__*/_jsx("a", {
                    href: menu.link,
                    children: /*#__PURE__*/_jsx(Typography, {
                      variant: "p5",
                      children: menu.label
                    })
                  }), (menu == null ? void 0 : menu.subMenu) && (menu == null ? void 0 : (_menu$subMenu = menu.subMenu) == null ? void 0 : _menu$subMenu.length) > 0 && /*#__PURE__*/_jsxs(Box, {
                    className: "subMenu",
                    sx: {
                      backgroundColor: colors.neutral.neutral8,
                      left: '0px',
                      right: '0px',
                      width: '100%',
                      position: 'fixed',
                      top: '120px',
                      paddingTop: '72px',
                      paddingBottom: '64px',
                      opacity: 0,
                      transition: 'opacity 0.3s,top 0.3s, z-index 0s',
                      zIndex: '-10',
                      visibility: 'hidden',
                      '&:after': {
                        content: "''",
                        position: 'absolute',
                        height: '40px',
                        width: '100%',
                        bottom: '100%'
                      }
                    },
                    children: [/*#__PURE__*/_jsx(Container, {
                      children: /*#__PURE__*/_jsxs(Box, {
                        sx: {
                          display: 'flex'
                        },
                        children: [/*#__PURE__*/_jsx(Box, {
                          sx: {
                            width: '50%'
                          },
                          children: /*#__PURE__*/_jsx(Box, {
                            sx: {
                              display: 'flex'
                            },
                            children: menu == null ? void 0 : (_menu$subMenu2 = menu.subMenu) == null ? void 0 : _menu$subMenu2.map(function (sub, subIndex) {
                              var _sub$items;

                              return /*#__PURE__*/_jsxs(Box, {
                                sx: {
                                  width: '50%',
                                  paddingRight: '10px'
                                },
                                children: [/*#__PURE__*/_jsx(Typography, {
                                  variant: "h6",
                                  sx: {
                                    color: colors.primary.bandaiNamcoBlack
                                  },
                                  children: sub.title
                                }), sub == null ? void 0 : (_sub$items = sub.items) == null ? void 0 : _sub$items.map(function (item, itemIndex) {
                                  return /*#__PURE__*/_jsx(Link, {
                                    href: item.href,
                                    sx: {
                                      marginTop: '12px !important',
                                      WebkitLineClamp: 1,
                                      display: '-webkit-box'
                                    },
                                    children: /*#__PURE__*/_jsx(Typography, {
                                      variant: "p8",
                                      sx: {
                                        color: colors.primary.bandaiNamcoBlack,
                                        wordBreak: 'break-word',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: "2"
                                        /* number of lines to show */
                                        ,
                                        lineClamp: "2",
                                        WebkitBoxOrient: 'vertical'
                                      },
                                      children: item.title
                                    })
                                  }, itemIndex);
                                })]
                              }, subIndex);
                            })
                          })
                        }), /*#__PURE__*/_jsxs(Box, {
                          sx: {
                            width: '50%'
                          },
                          children: [(menu == null ? void 0 : (_menu$ourPicks = menu.ourPicks) == null ? void 0 : _menu$ourPicks.title) && /*#__PURE__*/_jsx(Typography, {
                            variant: "p1",
                            children: menu == null ? void 0 : (_menu$ourPicks2 = menu.ourPicks) == null ? void 0 : _menu$ourPicks2.title
                          }), /*#__PURE__*/_jsx(Box, {
                            sx: {
                              display: 'flex',
                              marginTop: '16px'
                            },
                            children: menu == null ? void 0 : (_menu$ourPicks3 = menu.ourPicks) == null ? void 0 : _menu$ourPicks3.items.map(function (item, itemIndex) {
                              if (itemIndex < 2) {
                                var _item$title;

                                return /*#__PURE__*/_jsxs(Box, {
                                  sx: {
                                    maxWidth: {
                                      xs: '100%',
                                      md: '262px'
                                    },
                                    width: '100%',
                                    '&:first-of-type': {
                                      marginRight: '22px'
                                    }
                                  },
                                  children: [/*#__PURE__*/_jsx(Box, {
                                    sx: {
                                      maxWidth: {
                                        xs: '100%',
                                        md: '262px'
                                      },
                                      paddingBottom: '64%',
                                      borderRadius: '10px',
                                      overflow: "hidden",
                                      maxHeight: '162px',
                                      position: 'relative',
                                      transform: 'rotate(0)',
                                      "& a": {
                                        position: 'absolute',
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        width: '100%',
                                        height: '100%'
                                      },
                                      "& span": {
                                        width: "100% !important",
                                        height: "100% !important"
                                      },
                                      '& img': {
                                        position: "absolute",
                                        objectFit: 'cover',
                                        borderRadius: '10px',
                                        display: 'block',
                                        width: '100%',
                                        height: '100%',
                                        transform: "scale(1)",
                                        transition: "all 0.5s",
                                        top: 0,
                                        left: 0,
                                        right: 0,
                                        bottom: 0,
                                        "&:hover": {
                                          transform: "scale(1.2)"
                                        }
                                      }
                                    },
                                    children: /*#__PURE__*/_jsxs(Link, {
                                      href: item.href,
                                      children: [item.imageUrl && !item.mainImageNext && /*#__PURE__*/_jsx("img", {
                                        src: item.imageUrl,
                                        alt: (_item$title = item.title) != null ? _item$title : ''
                                      }), item.mainImageNext && item.mainImageNext]
                                    })
                                  }), /*#__PURE__*/_jsx(Link, {
                                    href: item.href,
                                    sx: {
                                      marginTop: '16px',
                                      letterSpacing: '0px',
                                      display: '-webkit-box'
                                    },
                                    children: /*#__PURE__*/_jsx(Typography, {
                                      variant: "p5",
                                      sx: {
                                        wordBreak: 'break-word',
                                        overflow: 'hidden',
                                        textOverflow: 'ellipsis',
                                        display: '-webkit-box',
                                        WebkitLineClamp: "2"
                                        /* number of lines to show */
                                        ,
                                        lineClamp: "2",
                                        WebkitBoxOrient: 'vertical'
                                      },
                                      children: item.title
                                    })
                                  })]
                                }, itemIndex);
                              }

                              return null;
                            })
                          })]
                        })]
                      })
                    }), /*#__PURE__*/_jsx(Box, {
                      sx: {
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '96px'
                      },
                      children: /*#__PURE__*/_jsx(Link, {
                        href: menu == null ? void 0 : (_menu$seeAll = menu.seeAll) == null ? void 0 : _menu$seeAll.href,
                        sx: {
                          display: 'inline-block',
                          marginLeft: 'auto',
                          marginRight: 'auto',
                          position: 'relative',
                          '&:after': {
                            content: "''",
                            width: '100%',
                            height: '1px',
                            position: 'absolute',
                            backgroundColor: colors.primary.bandaiNamcoRed,
                            top: 'calc(100% - 3px)',
                            transition: 'all .4s'
                          },
                          ':hover': {
                            '&:after': {
                              backgroundColor: colors.primary.bandaiNamcoBlack
                            },
                            '& p': {
                              color: colors.primary.bandaiNamcoBlack
                            }
                          }
                        },
                        children: /*#__PURE__*/_jsx(Typography, {
                          variant: "p5",
                          sx: {
                            color: colors.primary.bandaiNamcoRed,
                            transition: 'all .4s'
                          },
                          children: menu == null ? void 0 : (_menu$seeAll2 = menu.seeAll) == null ? void 0 : _menu$seeAll2.title
                        })
                      })
                    })]
                  })]
                }, index);
              })
            }), contentTheme !== 'dark' && iconProps && /*#__PURE__*/_jsx(Box, {
              sx: {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                gap: {
                  xs: '25px',
                  md: '32px'
                },
                marginTop: '4px'
              },
              children: iconProps == null ? void 0 : iconProps.map(function (icon) {
                return /*#__PURE__*/_jsxs(React.Fragment, {
                  children: [icon.name === 'IconSearch' && /*#__PURE__*/_jsx(IconSearch, {
                    sx: {
                      width: '16px',
                      height: '16px',
                      cursor: "pointer",
                      display: 'flex',
                      alignItems: 'center',
                      '& path': {
                        fill: ['transparent'].indexOf(contentTheme) !== -1 ? colors.primary.bandaiNamcoWhite : colors.primary.bandaiNamcoBlack
                      },
                      transition: 'all .4s',
                      '&:hover': {
                        '& path': {
                          fill: colors.primary.bandaiNamcoRed
                        }
                      }
                    },
                    htmlColor: ['transparent'].indexOf(contentTheme) !== -1 ? colors.primary.bandaiNamcoWhite : colors.primary.bandaiNamcoBlack,
                    onClick: function onClick() {
                      return handleShowLayoutSearch();
                    }
                  }), !isMobile && icon.name === 'IconLanguage' && (languages == null ? void 0 : languages.length) > 1 && /*#__PURE__*/_jsx(React.Fragment, {
                    children: /*#__PURE__*/_jsxs(Box, {
                      sx: {
                        position: 'relative',
                        display: 'flex',
                        alignItems: 'center',
                        '&:hover': {
                          '& .downDown': {
                            visibility: 'visible',
                            zIndex: 1,
                            opacity: 1
                          }
                        }
                      },
                      children: [/*#__PURE__*/_jsx(IconLanguage, {
                        sx: {
                          width: '16px',
                          height: '16px',
                          transition: 'all .4s',
                          '&:hover': {
                            '& path': {
                              fill: colors.primary.bandaiNamcoRed
                            }
                          }
                        },
                        htmlColor: ['transparent'].indexOf(contentTheme) !== -1 ? colors.primary.bandaiNamcoWhite : colors.primary.bandaiNamcoBlack
                      }), /*#__PURE__*/_jsx(Box, {
                        className: "downDown",
                        sx: {
                          width: '114px',
                          position: 'absolute',
                          top: 'calc(100% + 6px)',
                          left: '50%',
                          transform: 'translateX(-50%)',
                          opacity: 0,
                          transition: 'visibility 0.3s linear,opacity 0.3s linear',
                          zIndex: '-1',
                          visibility: 'hidden'
                        },
                        children: _NavigationBarDropDow || (_NavigationBarDropDow = /*#__PURE__*/_jsx(NavigationBarDropDown, {
                          data: languages,
                          languagesDefault: languagesDefault
                        }))
                      })]
                    })
                  }, icon == null ? void 0 : icon.name), icon.name === 'IconShop' && /*#__PURE__*/_jsx(Link, {
                    href: icon == null ? void 0 : icon.href,
                    children: /*#__PURE__*/_jsx(IconShop, {
                      sx: {
                        width: '16px',
                        height: '16px',
                        transition: 'all .4s',
                        display: 'flex',
                        alignItems: 'center',
                        '&:hover': {
                          '& path': {
                            fill: colors.primary.bandaiNamcoRed
                          }
                        }
                      },
                      htmlColor: ['transparent'].indexOf(contentTheme) !== -1 ? colors.primary.bandaiNamcoWhite : colors.primary.bandaiNamcoBlack,
                      notify: notify
                    })
                  }), !isMobile && icon.name === 'IconUser' && /*#__PURE__*/_jsxs(Box, {
                    sx: {
                      position: 'relative',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      '&:hover': {
                        '& .downDown': {
                          visibility: 'visible',
                          zIndex: 1,
                          opacity: 1
                        }
                      }
                    },
                    children: [/*#__PURE__*/_jsx(IconUser, {
                      sx: {
                        width: '16px',
                        height: '16px',
                        transition: 'all .4s',
                        '&:hover': {
                          '& path': {
                            fill: colors.primary.bandaiNamcoRed
                          }
                        }
                      },
                      htmlColor: ['transparent'].indexOf(contentTheme) !== -1 ? colors.primary.bandaiNamcoWhite : colors.primary.bandaiNamcoBlack
                    }), /*#__PURE__*/_jsx(Box, {
                      className: "downDown",
                      sx: {
                        width: '114px',
                        position: 'absolute',
                        top: 'calc(100% + 6px)',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        opacity: 0,
                        transition: 'visibility 0.3s linear,opacity 0.3s linear',
                        zIndex: '-1',
                        visibility: 'hidden'
                      },
                      children: _NavigationBarDropDow2 || (_NavigationBarDropDow2 = /*#__PURE__*/_jsx(NavigationBarDropDown, {
                        data: signInOut
                      }))
                    })]
                  }), isMobile && icon.name === 'IconMenu' && /*#__PURE__*/_jsx(IconMenu, {
                    onClick: function onClick() {
                      return handleShowMenu();
                    },
                    sx: {
                      width: '16px',
                      height: '16px',
                      marginTop: '5px',
                      cursor: 'pointer',
                      '& line': {
                        stroke: ['transparent'].indexOf(contentTheme) !== -1 ? colors.primary.bandaiNamcoWhite : colors.primary.bandaiNamcoBlack
                      }
                    }
                  })]
                }, icon == null ? void 0 : icon.name);
              })
            })]
          })
        })]
      }), isMobile && /*#__PURE__*/_jsxs(Box, {
        children: [/*#__PURE__*/_jsx(Box, {
          id: "overlay",
          onClick: function onClick() {
            return handleCloseMenuMobile();
          },
          sx: {
            position: 'absolute',
            width: 0,
            height: 0,
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(178, 173, 173, 0.6)",
            opacity: 0,
            transition: 'opacity 0.4s ease-in-out',
            '&.closed': {
              opacity: 0,
              width: 0,
              height: 0
            },
            '&.opened': {
              height: '100vh',
              width: '100vw',
              zIndex: 10,
              opacity: 1
            }
          }
        }), /*#__PURE__*/_jsxs(Box, {
          id: "mobile-menu",
          sx: {
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 'calc(-100vw)',
            height: '100%',
            width: '92.2%',
            zIndex: '99',
            transition: '.4s ease-in-out',
            overflowY: 'auto',
            overflowX: 'hidden',
            '&.closed': {
              left: 'calc(-100vw)'
            },
            '&.opened': {
              left: '0%'
            }
          },
          children: [/*#__PURE__*/_jsxs(Box, {
            sx: {
              backgroundColor: colors.primary.bandaiNamcoWhite,
              width: '100%',
              display: "flex",
              flexDirection: "column",
              marginRight: "32px",
              // minHeight: '100vh',
              height: '100%',
              paddingLeft: '32px',
              paddingRight: '32px',
              overflow: 'auto',
              zIndex: '99',
              position: "relative",
              '& .MuiPaper-elevation': {
                padding: '16px 0',
                backgroundColor: 'transparent',
                boxShadow: 'none',
                borderRadius: '0',
                "&:last-child": {
                  paddingBottom: "0px"
                }
              },
              '& .MuiPaper-root': {
                '&:before': {
                  content: "''",
                  display: 'none'
                }
              },
              '& .MuiAccordionSummary-content': {
                margin: '0px',
                '& a': {
                  color: colors.primary.p1,
                  fontWeight: '700',
                  fontSize: '16px',
                  display: 'flex',
                  lineHeight: '26px',
                  alignItems: 'center',
                  textDecoration: 'none',
                  '&:hover': {
                    textDecoration: 'none'
                  },
                  '& svg': {
                    marginLeft: '6px'
                  }
                }
              },
              '& .MuiAccordionSummary-root': {
                padding: '0',
                minHeight: 'auto'
              },
              '& .Mui-expanded': {
                '&:before': {
                  content: "''",
                  opacity: '1'
                },
                '& .MuiAccordionSummary-root': {
                  '& a': {
                    color: colors.primary.p2,
                    '& >svg': {
                      transform: 'rotate(-180deg)',
                      transition: 'transform 200ms cubic-bezier(0.4,0,0.2,1) 0ms',
                      '& path': {
                        stroke: colors.primary.p2
                      }
                    }
                  }
                }
              }
            },
            children: [/*#__PURE__*/_jsxs(Box, {
              sx: {
                display: 'flex',
                justifyContent: 'space-between',
                padding: '32px 0 49px 0'
              },
              children: [/*#__PURE__*/_jsx(Link, {
                href: "/".concat(locale),
                sx: {
                  color: colors.primary.bandaiNamcoBlack
                },
                children: /*#__PURE__*/_jsx(IconBandaiNamco, {
                  sx: {
                    width: {
                      xs: '110px',
                      md: '130px'
                    },
                    height: {
                      xs: '25px',
                      md: '32px'
                    }
                  }
                })
              }), /*#__PURE__*/_jsx(Box, {
                onClick: function onClick() {
                  return handleCloseMenuMobile();
                },
                children: _IconClose || (_IconClose = /*#__PURE__*/_jsx(IconClose, {}))
              })]
            }), logged && /*#__PURE__*/_jsx(MenuUser, {
              handleOpenMenuUserInfo: function handleOpenMenuUserInfo() {
                return _handleOpenMenuUserInfo();
              },
              avatarUrl: infoUser == null ? void 0 : infoUser.avatarUrl,
              name: infoUser == null ? void 0 : infoUser.name
            }), menuProps == null ? void 0 : menuProps.map(function (menu, menuIndex) {
              var _menu$seeAll$href, _menu$seeAll3, _menu$seeAll4, _menu$ourPicks4, _menu$ourPicks5, _menu$ourPicks6, _menu$ourPicks7;

              return /*#__PURE__*/_jsxs(Accordion, {
                disableGutters: true,
                expanded: expanded === menu.label,
                elevation: 0,
                onChange: handleChange(menu.label),
                children: [/*#__PURE__*/_jsx(AccordionSummary, {
                  "aria-controls": menu.label,
                  id: menu.label // onClick={() => (item.href === '/save' || item.href === '/pricing') && handleShowMenu()}
                  ,
                  sx: {
                    '& svg': {
                      transform: 'rotate(90deg)',
                      transition: 'transform 200ms cubic-bezier(0.4,0,0.2,1) 0ms'
                    },
                    '& .Mui-expanded': {
                      '&  h3': {
                        color: colors.primary.dark
                      },
                      '& svg': {
                        transform: 'rotate(-90deg)'
                      }
                    }
                  },
                  children: /*#__PURE__*/_jsxs(Box, {
                    sx: {
                      textDecoration: 'none',
                      position: 'relative',
                      display: 'block',
                      width: '100%'
                    },
                    children: [/*#__PURE__*/_jsx(Link, {
                      href: menu.link ? "".concat(menu != null && menu.subMenu ? "#" : menu.link) : '#',
                      color: colors.secondaryGray.main,
                      children: /*#__PURE__*/_jsx(Typography, {
                        variant: "h3",
                        sx: {
                          fontSize: '24px',
                          lineHeight: '30px',
                          color: colors.primary.bandaiNamcoBlack,
                          transition: 'all .4s'
                        },
                        children: menu == null ? void 0 : menu.label
                      })
                    }), menu.subMenu && menu.subMenu.length > 0 && /*#__PURE__*/_jsx(Box, {
                      sx: {
                        '& svg': {
                          height: '10px',
                          position: 'absolute',
                          right: '0px',
                          top: 0,
                          bottom: 0,
                          margin: 'auto',
                          transform: "rotate(90deg)"
                        }
                      },
                      children: /*#__PURE__*/_jsx(IconNextSlide, {
                        htmlColor: "transparent",
                        sx: {
                          height: '10px'
                        }
                      })
                    })]
                  })
                }), menu.subMenu && menu.subMenu.length > 0 && /*#__PURE__*/_jsxs(AccordionDetails, {
                  sx: {
                    // background: colors.neutral.white,
                    borderRadius: '16px',
                    marginTop: '34px',
                    padding: '0px',
                    marginLeft: "16px",
                    '&  h3': {
                      fontSize: "20px",
                      lineHeight: "26px",
                      color: colors.primary.dark
                    }
                  },
                  children: [menu.seeAll && /*#__PURE__*/_jsx(Link, {
                    href: (_menu$seeAll$href = menu == null ? void 0 : (_menu$seeAll3 = menu.seeAll) == null ? void 0 : _menu$seeAll3.href) != null ? _menu$seeAll$href : '#',
                    sx: {
                      textDecoration: 'none',
                      position: 'relative',
                      display: 'block',
                      width: '100%',
                      marginTop: '34px',
                      paddingBottom: '16px'
                    },
                    children: /*#__PURE__*/_jsx(Typography, {
                      variant: "h3",
                      sx: {
                        fontSize: '24px',
                        lineHeight: '30px',
                        color: colors.primary.bandaiNamcoBlack,
                        transition: 'all .4s'
                      },
                      children: menu == null ? void 0 : (_menu$seeAll4 = menu.seeAll) == null ? void 0 : _menu$seeAll4.titleMobile
                    })
                  }), menu.subMenu && menu.subMenu.length > 0 && menu.subMenu.map(function (item, subIndex) {
                    return /*#__PURE__*/_jsxs(Accordion, {
                      disableGutters: true,
                      sx: {
                        padding: '0px'
                      },
                      children: [/*#__PURE__*/_jsx(AccordionSummary, {
                        "aria-controls": item.title,
                        id: item.title,
                        sx: {
                          '& svg': {
                            transform: 'rotate(90deg)',
                            transition: 'transform 200ms cubic-bezier(0.4,0,0.2,1) 0ms'
                          },
                          '& .Mui-expanded': {
                            '& svg': {
                              transform: 'rotate(-90deg)'
                            }
                          }
                        },
                        children: /*#__PURE__*/_jsxs(Box, {
                          color: colors.secondaryGray.main,
                          sx: {
                            textDecoration: 'none',
                            position: 'relative',
                            display: 'block',
                            width: '100%'
                          },
                          children: [/*#__PURE__*/_jsx(Typography, {
                            variant: "h3",
                            sx: {
                              fontSize: '24px',
                              lineHeight: '30px',
                              color: colors.primary.bandaiNamcoBlack,
                              transition: 'all .4s'
                            },
                            children: item == null ? void 0 : item.title
                          }), item.items && item.items.length > 0 && /*#__PURE__*/_jsx(Box, {
                            sx: {
                              '& svg': {
                                height: '10px',
                                position: 'absolute',
                                right: '0px',
                                top: 0,
                                bottom: 0,
                                margin: 'auto',
                                transform: 'rotate(90deg) '
                              }
                            },
                            children: /*#__PURE__*/_jsx(IconNextSlide, {
                              htmlColor: "transparent",
                              sx: {
                                height: '10px'
                              }
                            })
                          })]
                        })
                      }), /*#__PURE__*/_jsx(AccordionDetails, {
                        sx: {
                          background: colors.neutral.white,
                          borderRadius: '16px',
                          marginTop: '8px',
                          padding: '0px'
                        },
                        children: item.items && item.items.length > 0 && item.items.map(function (itemChild, itemIndex) {
                          return /*#__PURE__*/_jsx(Link, {
                            href: itemChild.href,
                            sx: {
                              display: 'block',
                              textDecoration: 'none',
                              marginTop: '22px',
                              '&:first-of-type': {
                                marginTop: '24px'
                              }
                            },
                            children: /*#__PURE__*/_jsx(Typography, {
                              variant: "p4",
                              sx: {
                                color: colors.primary.bandaiNamcoBlack,
                                wordBreak: 'break-word',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: "2"
                                /* number of lines to show */
                                ,
                                lineClamp: "2",
                                WebkitBoxOrient: 'vertical'
                              },
                              children: itemChild.title
                            })
                          }, itemIndex);
                        })
                      })]
                    }, "".concat("".concat(item.title, "mobile-child")) || subIndex);
                  }), /*#__PURE__*/_jsxs(Accordion, {
                    disableGutters: true,
                    sx: {
                      padding: '0px'
                    },
                    children: [/*#__PURE__*/_jsx(AccordionSummary, {
                      sx: {
                        '& svg': {
                          transform: 'rotate(90deg)',
                          transition: 'transform 200ms cubic-bezier(0.4,0,0.2,1) 0ms'
                        },
                        '& .Mui-expanded': {
                          '& svg': {
                            transform: 'rotate(-90deg)'
                          }
                        }
                      },
                      children: /*#__PURE__*/_jsxs(Box, {
                        color: colors.secondaryGray.main,
                        sx: {
                          textDecoration: 'none',
                          position: 'relative',
                          display: 'block',
                          width: '100%'
                        },
                        children: [/*#__PURE__*/_jsx(Typography, {
                          variant: "h3",
                          sx: {
                            fontSize: '24px',
                            lineHeight: '30px',
                            color: colors.primary.bandaiNamcoBlack,
                            transition: 'all .4s'
                          },
                          children: menu == null ? void 0 : (_menu$ourPicks4 = menu.ourPicks) == null ? void 0 : _menu$ourPicks4.title
                        }), /*#__PURE__*/_jsx(Box, {
                          sx: {
                            '& svg': {
                              height: '10px',
                              position: 'absolute',
                              right: '0px',
                              top: 0,
                              bottom: 0,
                              margin: 'auto'
                            }
                          },
                          children: /*#__PURE__*/_jsx(IconNextSlide, {
                            htmlColor: "transparent",
                            sx: {
                              height: '10px'
                            }
                          })
                        })]
                      })
                    }), /*#__PURE__*/_jsx(AccordionDetails, {
                      sx: {
                        background: colors.neutral.white,
                        marginTop: '8px',
                        padding: '0px'
                      },
                      children: ((_menu$ourPicks5 = menu.ourPicks) == null ? void 0 : _menu$ourPicks5.items) && ((_menu$ourPicks6 = menu.ourPicks) == null ? void 0 : _menu$ourPicks6.items.length) > 0 && ((_menu$ourPicks7 = menu.ourPicks) == null ? void 0 : _menu$ourPicks7.items.map(function (itemChild, itemIndex) {
                        return /*#__PURE__*/_jsx(Link, {
                          href: itemChild.href,
                          sx: {
                            display: 'block',
                            textDecoration: 'none',
                            marginTop: '22px',
                            '&:first-of-type': {
                              marginTop: '24px'
                            }
                          },
                          children: /*#__PURE__*/_jsx(Typography, {
                            variant: "p4",
                            sx: {
                              color: colors.primary.bandaiNamcoBlack,
                              wordBreak: 'break-word',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis',
                              display: '-webkit-box',
                              WebkitLineClamp: "2"
                              /* number of lines to show */
                              ,
                              lineClamp: "2",
                              WebkitBoxOrient: 'vertical'
                            },
                            children: itemChild.title
                          })
                        }, itemIndex);
                      }))
                    })]
                  })]
                })]
              }, "".concat("".concat(menu.label, "mobile")) || menuIndex);
            }), /*#__PURE__*/_jsxs(Box, {
              sx: {
                display: "flex",
                flexDirection: "column",
                marginTop: "auto",
                marginBottom: "32px"
              },
              children: [!logged && /*#__PURE__*/_jsx(Box, {
                sx: {
                  display: 'flex',
                  marginTop: "32px",
                  '& button': {
                    '&:first-of-type': {
                      marginRight: '6px'
                    },
                    '&:last-of-type': {
                      marginLeft: '6px'
                    }
                  },
                  '& a': {
                    '&:first-of-type': {
                      marginRight: '6px'
                    },
                    '&:last-of-type': {
                      marginLeft: '6px'
                    }
                  }
                },
                children: buttonProps == null ? void 0 : buttonProps.map(function (button, buttonIndex) {
                  return /*#__PURE__*/_jsx(Button, _extends({}, button, {
                    sx: {
                      width: '133px'
                    }
                  }), buttonIndex);
                })
              }), !!(languages != null && languages.length) && /*#__PURE__*/_jsx(Box, {
                sx: {
                  paddingTop: '24px',
                  borderTop: "1px solid ".concat(colors.neutral.neutral5),
                  display: "flex",
                  marginTop: '26px',
                  pointerEvents: "auto"
                },
                children: /*#__PURE__*/_jsxs(Box, {
                  sx: {
                    display: "flex",
                    alignItems: "center",
                    width: "fix-content",
                    height: {
                      md: "46px",
                      xs: "40px"
                    },
                    marginRight: "12px",
                    position: "relative",
                    cursor: "pointer"
                  },
                  children: [/*#__PURE__*/_jsx(Box, {
                    sx: {
                      width: "100%",
                      height: "100%",
                      borderColor: colors.neutral.neutral2,
                      borderRadius: "90px",
                      overflow: "hidden",
                      zIndex: 2,
                      position: "relative",
                      "& div": {
                        '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                          borderColor: colors.primary.bandaiNamcoBlack
                        },
                        '&.MuiSelect-select': {
                          padding: ' 0px 32px 0px 40px !important'
                        },
                        height: "100%",
                        width: "100%",
                        fontSize: {
                          md: "16px",
                          xs: "14px"
                        },
                        lineHeight: {
                          md: "22px",
                          xs: "20px"
                        },
                        fontWeight: "600",
                        '& .MuiSelect-standard': {
                          padding: {
                            md: '18.5px 38px 18.5px 38px !important',
                            xs: '15.5px 38px 15.5px 46px !important'
                          },
                          "&:focus": {
                            background: "none"
                          }
                        },
                        "& svg": {
                          position: "absolute",
                          zIndex: "1",
                          cursor: "pointer",
                          right: "16px",
                          transform: "translateX(0px)"
                        }
                      }
                    },
                    children: /*#__PURE__*/_jsx(Dropdown, _extends({}, propsDropDow, {
                      onChange: function onChange(e) {
                        var _e$target;

                        handleSelectLanguage(e == null ? void 0 : (_e$target = e.target) == null ? void 0 : _e$target.value);
                      }
                    }))
                  }), /*#__PURE__*/_jsx(Box, {
                    sx: {
                      position: "absolute",
                      zIndex: "1",
                      marginTop: "5px",
                      left: {
                        xs: "16px"
                      },
                      "& svg": {
                        width: "16px",
                        height: "16px"
                      }
                    },
                    children: /*#__PURE__*/_jsx(IconLanguage, {
                      htmlColor: colors.primary.bandaiNamcoBlack
                    })
                  })]
                })
              })]
            })]
          }), logged && /*#__PURE__*/_jsx(MenuUserInfo, {
            handleCloseMenuUserInfo: function handleCloseMenuUserInfo() {
              return _handleCloseMenuUserInfo();
            },
            handleCloseAllMenu: function handleCloseAllMenu() {
              return _handleCloseAllMenu();
            },
            details: infoUser == null ? void 0 : infoUser.details,
            account: infoUser == null ? void 0 : infoUser.account,
            orders: infoUser == null ? void 0 : infoUser.orders,
            address: infoUser == null ? void 0 : infoUser.address,
            isRelative: isRelative,
            logout: infoUser == null ? void 0 : infoUser.logout,
            ref: userInfoRef,
            isShow: isShowMenuUserInfo
          })]
        })]
      })]
    })
  });
};

export default NavigationBar;
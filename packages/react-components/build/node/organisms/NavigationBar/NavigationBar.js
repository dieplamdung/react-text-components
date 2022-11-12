"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _useMediaQuery = _interopRequireDefault(require("@mui/material/useMediaQuery"));

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Icon = require("../../atoms/Icon");

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _Accordion = _interopRequireDefault(require("@mui/material/Accordion"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _disableScrollBody = require("../../utils/disableScrollBody");

var _component = _interopRequireDefault(require("@loadable/component"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

var _svg, _IconClose;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const AccordionSummary = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("@mui/material/AccordionSummary"))));
const AccordionDetails = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("@mui/material/AccordionDetails"))));
const NavigationBarDropDown = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("./NavigationBarDropDown"))));
const LocationSelectionBanner = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../LocationSelectionBanner"))));
const MenuUserInfo = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("./MenuUserInfo"))));
const MenuUser = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("./MenuUser"))));
const Dropdown = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../../molecules/Dropdown"))));

const IconClose = () => {
  return _svg || (_svg = /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
      width: "2.31859",
      height: "17.4802",
      rx: "1.1593",
      transform: "matrix(0.707113 -0.7071 0.707113 0.7071 5 6.63953)",
      fill: "#1E1E1E"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("rect", {
      width: "2.31859",
      height: "17.4802",
      rx: "1.1593",
      transform: "matrix(0.707113 0.7071 -0.707113 0.7071 17.3613 5.00049)",
      fill: "#1E1E1E"
    })]
  }));
};

const NavigationBar = props => {
  var _locationPrompt$isSho, _NavigationBarDropDow, _NavigationBarDropDow2;

  const {
    theme,
    logo,
    menuProps,
    rainbows,
    notify = false,
    buttonProps,
    listLocation = [],
    infoUser,
    logged = false,
    iconProps,
    languages = [],
    signInOut = [],
    locationPrompt,
    handleCloseBannerRevamp,
    handleRedirectLanguage,
    languagesDefault,
    locale,
    handleShowLayoutSearch = () => {},
    estore = false
  } = props;
  const [contentTheme, setContentTheme] = (0, _react.useState)(theme);
  const isMobile = (0, _useMediaQuery.default)(themes => themes.breakpoints.down('lg'));
  const {
    bandaiNamcoWhite,
    bandaiNamcoBlack
  } = _colors.default.primary;
  const [expanded, setExpanded] = (0, _react.useState)(''); // const [expandedMobile, setExpandedMobile] = useState<string | boolean>('');

  const [isRelative, setIsRelative] = (0, _react.useState)(false);
  const [offSetLeftMenu, setOffSetLeftMenu] = (0, _react.useState)(0);
  const [isShowLocation, setIsShowLocation] = (0, _react.useState)((_locationPrompt$isSho = locationPrompt.isShowLocation) != null ? _locationPrompt$isSho : false);
  const [isShowMenuUserInfo, setIsShowMenuInfo] = (0, _react.useState)(false);
  const userInfoRef = (0, _react.useRef)(0);
  const menuRef = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    setContentTheme(theme);
  }, [theme]);
  (0, _react.useEffect)(() => {
    setIsShowLocation(locationPrompt.isShowLocation);
  }, [locationPrompt.isShowLocation]);

  const handleCloseMenuUserInfo = () => {
    // Info User
    setIsShowMenuInfo(false);
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenu) {
      mobileMenu.style.overflowY = "auto";
    }
  };

  const handleOpenMenuUserInfo = () => {
    // Info User
    setIsShowMenuInfo(true);
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenu) {
      mobileMenu.style.overflowY = "hidden";
    }
  };

  const handleCloseMenuMobile = () => {
    var _document$getElementB, _document$getElementB2, _document$getElementB3, _document$getElementB4, _document$getElements, _document$getElements2;

    // Mobile menu
    (_document$getElementB = document.getElementById('mobile-menu')) == null ? void 0 : _document$getElementB.classList.add('closed');
    (_document$getElementB2 = document.getElementById('overlay')) == null ? void 0 : _document$getElementB2.classList.add('closed');
    (_document$getElementB3 = document.getElementById('mobile-menu')) == null ? void 0 : _document$getElementB3.classList.remove('opened');
    (_document$getElementB4 = document.getElementById('overlay')) == null ? void 0 : _document$getElementB4.classList.remove('opened'); // Desktop menu

    (_document$getElements = document.getElementsByClassName('navigationBar')[0]) == null ? void 0 : _document$getElements.classList.remove('hidden');
    (_document$getElements2 = document.getElementsByClassName('navigationBar')[0]) == null ? void 0 : _document$getElements2.classList.add('show'); // handleDisableScrollBody(false)

    (0, _disableScrollBody.disableScrollBody)(false); // window.scrollTo(0, heightStateScroll);
  };

  const handleChange = panel => (event, newExpanded) => {
    setIsRelative(newExpanded);
    setExpanded(newExpanded ? panel : false);
  };

  const handleShowMenu = () => {
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
      (0, _disableScrollBody.disableScrollBody)(true);
    }
  };

  const handleCloseAllMenu = () => {
    var _document$getElementB9, _document$getElementB10, _document$getElements5, _document$getElements6;

    setIsShowMenuInfo(false); // Info User

    (_document$getElementB9 = document.getElementById('userInfo')) == null ? void 0 : _document$getElementB9.classList.add('closed');
    (_document$getElementB10 = document.getElementById('userInfo')) == null ? void 0 : _document$getElementB10.classList.remove('opened'); // Desktop menu

    (_document$getElements5 = document.getElementsByClassName('navigationBar')[0]) == null ? void 0 : _document$getElements5.classList.remove('hidden');
    (_document$getElements6 = document.getElementsByClassName('navigationBar')[0]) == null ? void 0 : _document$getElements6.classList.add('show'); // Mobile menu

    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenu) {
      mobileMenu.style.overflowY = "auto";
      mobileMenu.classList.add('closed');
      mobileMenu.classList.remove('opened');
    }

    (0, _disableScrollBody.disableScrollBody)(false);
  };

  const propsDropDow = {
    disabled: false,
    error: false,
    helperText: 'Helper text',
    variant: "outlined",
    width: 270,
    defaultValue: languagesDefault,
    data: languages != null && languages.length ? languages.map(item => {
      return {
        label: item.label,
        value: item.label
      };
    }) : []
  };
  (0, _react.useEffect)(() => {
    const nav = document.getElementById("navigation");
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

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

    const updateSize = () => {
      if (window.innerWidth >= 992) {
        var _menuRef$current;

        const offsetLeft = (menuRef == null ? void 0 : (_menuRef$current = menuRef.current) == null ? void 0 : _menuRef$current.offsetLeft) || 0;
        setOffSetLeftMenu(offsetLeft);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleCloseBannerLocation = () => {
    handleCloseBannerRevamp == null ? void 0 : handleCloseBannerRevamp();
  };

  const handleSelectLanguage = value => {
    if (typeof window !== "undefined") {
      const itemLanguage = languages == null ? void 0 : languages.find(item => item.label === value);

      if (itemLanguage) {
        window.location.href = `${itemLanguage.href}`;
      }
    }
  };

  const handelMouseEnter = index => {
    const menuHover = (menuProps == null ? void 0 : menuProps[index]) || "";

    if (contentTheme === "transparent") {
      var _menuHover$subMenu;

      if (!!menuHover && menuHover != null && (_menuHover$subMenu = menuHover.subMenu) != null && _menuHover$subMenu.length) {
        setContentTheme("light");
      }
    }
  };

  const onMouseLeave = index => {
    const menuHover = (menuProps == null ? void 0 : menuProps[index]) || "";

    if (theme === "transparent") {
      var _menuHover$subMenu2;

      if (!!menuHover && menuHover != null && (_menuHover$subMenu2 = menuHover.subMenu) != null && _menuHover$subMenu2.length) {
        setContentTheme(theme);
      }
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
      children: [isShowLocation && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(LocationSelectionBanner, (0, _extends2.default)({}, locationPrompt, {
          listLocation: listLocation,
          onClose: setIsShowLocation,
          handleCloseFunc: handleCloseBannerLocation,
          onUpdate: v => {
            handleRedirectLanguage == null ? void 0 : handleRedirectLanguage(v);
          }
        }))
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
        children: [contentTheme === 'light' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
          item: true,
          xs: 12,
          sx: {
            width: {
              xs: '50%',
              md: `calc(100% - ${offSetLeftMenu != null ? offSetLeftMenu : 0}px)`
            },
            position: "absolute",
            height: "4px",
            top: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'row-reverse',
            padding: '0px'
          },
          children: rainbows == null ? void 0 : rainbows.map((rainbow, index) => {
            var _rainbows;

            return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                width: {
                  xs: index === rainbows.length - 1 ? '300%' : '100%',
                  sm: '100%'
                },
                height: '100%',
                borderLeft: `4px solid ${(_rainbows = rainbows[index + 1]) != null ? _rainbows : 'transparent'}`,
                borderTop: `4px solid ${rainbow}`
              }
            }, index);
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
              href: `/${locale}`,
              sx: {
                color: ['dark', 'transparent'].includes(contentTheme) ? _colors.default.primary.bandaiNamcoWhite : _colors.default.primary.bandaiNamcoBlack,
                display: 'inherit'
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                src: logo,
                alt: ""
              })
            }), !isMobile && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
              children: menuProps == null ? void 0 : menuProps.map((menu, index) => {
                var _menu$subMenu, _menu$subMenu2, _menu$ourPicks, _menu$ourPicks2, _menu$ourPicks3, _menu$seeAll, _menu$seeAll2;

                return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
                  onMouseLeave: () => onMouseLeave(index),
                  onMouseEnter: () => handelMouseEnter(index),
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("a", {
                    href: menu.link,
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                      variant: "p5",
                      children: menu.label
                    })
                  }), (menu == null ? void 0 : menu.subMenu) && (menu == null ? void 0 : (_menu$subMenu = menu.subMenu) == null ? void 0 : _menu$subMenu.length) > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
                    className: "subMenu",
                    sx: {
                      backgroundColor: _colors.default.neutral.neutral8,
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
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
                        sx: {
                          display: 'flex'
                        },
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                          sx: {
                            width: '50%'
                          },
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                            sx: {
                              display: 'flex'
                            },
                            children: menu == null ? void 0 : (_menu$subMenu2 = menu.subMenu) == null ? void 0 : _menu$subMenu2.map((sub, subIndex) => {
                              var _sub$items;

                              return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
                                sx: {
                                  width: '50%',
                                  paddingRight: '10px'
                                },
                                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                                  variant: "h6",
                                  sx: {
                                    color: _colors.default.primary.bandaiNamcoBlack
                                  },
                                  children: sub.title
                                }), sub == null ? void 0 : (_sub$items = sub.items) == null ? void 0 : _sub$items.map((item, itemIndex) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
                                  href: item.href,
                                  sx: {
                                    marginTop: '12px !important',
                                    WebkitLineClamp: 1,
                                    display: '-webkit-box'
                                  },
                                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                                    variant: "p8",
                                    sx: {
                                      color: _colors.default.primary.bandaiNamcoBlack,
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
                                }, itemIndex))]
                              }, subIndex);
                            })
                          })
                        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
                          sx: {
                            width: '50%'
                          },
                          children: [(menu == null ? void 0 : (_menu$ourPicks = menu.ourPicks) == null ? void 0 : _menu$ourPicks.title) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                            variant: "p1",
                            children: menu == null ? void 0 : (_menu$ourPicks2 = menu.ourPicks) == null ? void 0 : _menu$ourPicks2.title
                          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                            sx: {
                              display: 'flex',
                              marginTop: '16px'
                            },
                            children: menu == null ? void 0 : (_menu$ourPicks3 = menu.ourPicks) == null ? void 0 : _menu$ourPicks3.items.map((item, itemIndex) => {
                              if (itemIndex < 2) {
                                var _item$title;

                                return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
                                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
                                    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Link, {
                                      href: item.href,
                                      children: [item.imageUrl && !item.mainImageNext && /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                                        src: item.imageUrl,
                                        alt: (_item$title = item.title) != null ? _item$title : ''
                                      }), item.mainImageNext && item.mainImageNext]
                                    })
                                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
                                    href: item.href,
                                    sx: {
                                      marginTop: '16px',
                                      letterSpacing: '0px',
                                      display: '-webkit-box'
                                    },
                                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
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
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                      sx: {
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: '96px'
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
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
                            backgroundColor: _colors.default.primary.bandaiNamcoRed,
                            top: 'calc(100% - 3px)',
                            transition: 'all .4s'
                          },
                          ':hover': {
                            '&:after': {
                              backgroundColor: _colors.default.primary.bandaiNamcoBlack
                            },
                            '& p': {
                              color: _colors.default.primary.bandaiNamcoBlack
                            }
                          }
                        },
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                          variant: "p5",
                          sx: {
                            color: _colors.default.primary.bandaiNamcoRed,
                            transition: 'all .4s'
                          },
                          children: menu == null ? void 0 : (_menu$seeAll2 = menu.seeAll) == null ? void 0 : _menu$seeAll2.title
                        })
                      })
                    })]
                  })]
                }, index);
              })
            }), contentTheme !== 'dark' && iconProps && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
              children: iconProps == null ? void 0 : iconProps.map(icon => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react.default.Fragment, {
                children: [icon.name === 'IconSearch' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconSearch, {
                  sx: {
                    width: '16px',
                    height: '16px',
                    cursor: "pointer",
                    display: 'flex',
                    alignItems: 'center',
                    '& path': {
                      fill: ['transparent'].indexOf(contentTheme) !== -1 ? _colors.default.primary.bandaiNamcoWhite : _colors.default.primary.bandaiNamcoBlack
                    },
                    transition: 'all .4s',
                    '&:hover': {
                      '& path': {
                        fill: _colors.default.primary.bandaiNamcoRed
                      }
                    }
                  },
                  htmlColor: ['transparent'].indexOf(contentTheme) !== -1 ? _colors.default.primary.bandaiNamcoWhite : _colors.default.primary.bandaiNamcoBlack,
                  onClick: () => handleShowLayoutSearch()
                }), !isMobile && icon.name === 'IconLanguage' && (languages == null ? void 0 : languages.length) > 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_react.default.Fragment, {
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconLanguage, {
                      sx: {
                        width: '16px',
                        height: '16px',
                        transition: 'all .4s',
                        '&:hover': {
                          '& path': {
                            fill: _colors.default.primary.bandaiNamcoRed
                          }
                        }
                      },
                      htmlColor: ['transparent'].indexOf(contentTheme) !== -1 ? _colors.default.primary.bandaiNamcoWhite : _colors.default.primary.bandaiNamcoBlack
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
                      children: _NavigationBarDropDow || (_NavigationBarDropDow = /*#__PURE__*/(0, _jsxRuntime.jsx)(NavigationBarDropDown, {
                        data: languages,
                        languagesDefault: languagesDefault
                      }))
                    })]
                  })
                }, icon == null ? void 0 : icon.name), icon.name === 'IconShop' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
                  href: icon == null ? void 0 : icon.href,
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconShop, {
                    sx: {
                      width: '16px',
                      height: '16px',
                      transition: 'all .4s',
                      display: 'flex',
                      alignItems: 'center',
                      '&:hover': {
                        '& path': {
                          fill: _colors.default.primary.bandaiNamcoRed
                        }
                      }
                    },
                    htmlColor: ['transparent'].indexOf(contentTheme) !== -1 ? _colors.default.primary.bandaiNamcoWhite : _colors.default.primary.bandaiNamcoBlack,
                    notify: notify
                  })
                }), !isMobile && icon.name === 'IconUser' && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconUser, {
                    sx: {
                      width: '16px',
                      height: '16px',
                      transition: 'all .4s',
                      '&:hover': {
                        '& path': {
                          fill: _colors.default.primary.bandaiNamcoRed
                        }
                      }
                    },
                    htmlColor: ['transparent'].indexOf(contentTheme) !== -1 ? _colors.default.primary.bandaiNamcoWhite : _colors.default.primary.bandaiNamcoBlack
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
                    children: _NavigationBarDropDow2 || (_NavigationBarDropDow2 = /*#__PURE__*/(0, _jsxRuntime.jsx)(NavigationBarDropDown, {
                      data: signInOut
                    }))
                  })]
                }), isMobile && icon.name === 'IconMenu' && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconMenu, {
                  onClick: () => handleShowMenu(),
                  sx: {
                    width: '16px',
                    height: '16px',
                    marginTop: '5px',
                    cursor: 'pointer',
                    '& line': {
                      stroke: ['transparent'].indexOf(contentTheme) !== -1 ? _colors.default.primary.bandaiNamcoWhite : _colors.default.primary.bandaiNamcoBlack
                    }
                  }
                })]
              }, icon == null ? void 0 : icon.name))
            })]
          })
        })]
      }), isMobile && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          id: "overlay",
          onClick: () => handleCloseMenuMobile(),
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
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              backgroundColor: _colors.default.primary.bandaiNamcoWhite,
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
                  color: _colors.default.primary.p1,
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
                    color: _colors.default.primary.p2,
                    '& >svg': {
                      transform: 'rotate(-180deg)',
                      transition: 'transform 200ms cubic-bezier(0.4,0,0.2,1) 0ms',
                      '& path': {
                        stroke: _colors.default.primary.p2
                      }
                    }
                  }
                }
              }
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
              sx: {
                display: 'flex',
                justifyContent: 'space-between',
                padding: '32px 0 49px 0'
              },
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
                href: `/${locale}`,
                sx: {
                  color: _colors.default.primary.bandaiNamcoBlack
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconBandaiNamco, {
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
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                onClick: () => handleCloseMenuMobile(),
                children: _IconClose || (_IconClose = /*#__PURE__*/(0, _jsxRuntime.jsx)(IconClose, {}))
              })]
            }), logged && /*#__PURE__*/(0, _jsxRuntime.jsx)(MenuUser, {
              handleOpenMenuUserInfo: () => handleOpenMenuUserInfo(),
              avatarUrl: infoUser == null ? void 0 : infoUser.avatarUrl,
              name: infoUser == null ? void 0 : infoUser.name
            }), menuProps == null ? void 0 : menuProps.map((menu, menuIndex) => {
              var _menu$seeAll$href, _menu$seeAll3, _menu$seeAll4, _menu$ourPicks4, _menu$ourPicks5, _menu$ourPicks6, _menu$ourPicks7;

              return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Accordion.default, {
                disableGutters: true,
                expanded: expanded === menu.label,
                elevation: 0,
                onChange: handleChange(menu.label),
                children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(AccordionSummary, {
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
                        color: _colors.default.primary.dark
                      },
                      '& svg': {
                        transform: 'rotate(-90deg)'
                      }
                    }
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
                    sx: {
                      textDecoration: 'none',
                      position: 'relative',
                      display: 'block',
                      width: '100%'
                    },
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
                      href: menu.link ? `${menu != null && menu.subMenu ? "#" : menu.link}` : '#',
                      color: _colors.default.secondaryGray.main,
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                        variant: "h3",
                        sx: {
                          fontSize: '24px',
                          lineHeight: '30px',
                          color: _colors.default.primary.bandaiNamcoBlack,
                          transition: 'all .4s'
                        },
                        children: menu == null ? void 0 : menu.label
                      })
                    }), menu.subMenu && menu.subMenu.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconNextSlide, {
                        htmlColor: "transparent",
                        sx: {
                          height: '10px'
                        }
                      })
                    })]
                  })
                }), menu.subMenu && menu.subMenu.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(AccordionDetails, {
                  sx: {
                    // background: colors.neutral.white,
                    borderRadius: '16px',
                    marginTop: '34px',
                    padding: '0px',
                    marginLeft: "16px",
                    '&  h3': {
                      fontSize: "20px",
                      lineHeight: "26px",
                      color: _colors.default.primary.dark
                    }
                  },
                  children: [menu.seeAll && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
                    href: (_menu$seeAll$href = menu == null ? void 0 : (_menu$seeAll3 = menu.seeAll) == null ? void 0 : _menu$seeAll3.href) != null ? _menu$seeAll$href : '#',
                    sx: {
                      textDecoration: 'none',
                      position: 'relative',
                      display: 'block',
                      width: '100%',
                      marginTop: '34px',
                      paddingBottom: '16px'
                    },
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                      variant: "h3",
                      sx: {
                        fontSize: '24px',
                        lineHeight: '30px',
                        color: _colors.default.primary.bandaiNamcoBlack,
                        transition: 'all .4s'
                      },
                      children: menu == null ? void 0 : (_menu$seeAll4 = menu.seeAll) == null ? void 0 : _menu$seeAll4.titleMobile
                    })
                  }), menu.subMenu && menu.subMenu.length > 0 && menu.subMenu.map((item, subIndex) => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Accordion.default, {
                    disableGutters: true,
                    sx: {
                      padding: '0px'
                    },
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(AccordionSummary, {
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
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
                        color: _colors.default.secondaryGray.main,
                        sx: {
                          textDecoration: 'none',
                          position: 'relative',
                          display: 'block',
                          width: '100%'
                        },
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                          variant: "h3",
                          sx: {
                            fontSize: '24px',
                            lineHeight: '30px',
                            color: _colors.default.primary.bandaiNamcoBlack,
                            transition: 'all .4s'
                          },
                          children: item == null ? void 0 : item.title
                        }), item.items && item.items.length > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconNextSlide, {
                            htmlColor: "transparent",
                            sx: {
                              height: '10px'
                            }
                          })
                        })]
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(AccordionDetails, {
                      sx: {
                        background: _colors.default.neutral.white,
                        borderRadius: '16px',
                        marginTop: '8px',
                        padding: '0px'
                      },
                      children: item.items && item.items.length > 0 && item.items.map((itemChild, itemIndex) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
                        href: itemChild.href,
                        sx: {
                          display: 'block',
                          textDecoration: 'none',
                          marginTop: '22px',
                          '&:first-of-type': {
                            marginTop: '24px'
                          }
                        },
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                          variant: "p4",
                          sx: {
                            color: _colors.default.primary.bandaiNamcoBlack,
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
                      }, itemIndex))
                    })]
                  }, `${`${item.title}mobile-child`}` || subIndex)), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Accordion.default, {
                    disableGutters: true,
                    sx: {
                      padding: '0px'
                    },
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(AccordionSummary, {
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
                      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
                        color: _colors.default.secondaryGray.main,
                        sx: {
                          textDecoration: 'none',
                          position: 'relative',
                          display: 'block',
                          width: '100%'
                        },
                        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                          variant: "h3",
                          sx: {
                            fontSize: '24px',
                            lineHeight: '30px',
                            color: _colors.default.primary.bandaiNamcoBlack,
                            transition: 'all .4s'
                          },
                          children: menu == null ? void 0 : (_menu$ourPicks4 = menu.ourPicks) == null ? void 0 : _menu$ourPicks4.title
                        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
                          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconNextSlide, {
                            htmlColor: "transparent",
                            sx: {
                              height: '10px'
                            }
                          })
                        })]
                      })
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(AccordionDetails, {
                      sx: {
                        background: _colors.default.neutral.white,
                        marginTop: '8px',
                        padding: '0px'
                      },
                      children: ((_menu$ourPicks5 = menu.ourPicks) == null ? void 0 : _menu$ourPicks5.items) && ((_menu$ourPicks6 = menu.ourPicks) == null ? void 0 : _menu$ourPicks6.items.length) > 0 && ((_menu$ourPicks7 = menu.ourPicks) == null ? void 0 : _menu$ourPicks7.items.map((itemChild, itemIndex) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Link, {
                        href: itemChild.href,
                        sx: {
                          display: 'block',
                          textDecoration: 'none',
                          marginTop: '22px',
                          '&:first-of-type': {
                            marginTop: '24px'
                          }
                        },
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                          variant: "p4",
                          sx: {
                            color: _colors.default.primary.bandaiNamcoBlack,
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
                      }, itemIndex)))
                    })]
                  })]
                })]
              }, `${`${menu.label}mobile`}` || menuIndex);
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
              sx: {
                display: "flex",
                flexDirection: "column",
                marginTop: "auto",
                marginBottom: "32px"
              },
              children: [!logged && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
                children: buttonProps == null ? void 0 : buttonProps.map((button, buttonIndex) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, button, {
                  sx: {
                    width: '133px'
                  }
                }), buttonIndex))
              }), !!(languages != null && languages.length) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                sx: {
                  paddingTop: '24px',
                  borderTop: `1px solid ${_colors.default.neutral.neutral5}`,
                  display: "flex",
                  marginTop: '26px',
                  pointerEvents: "auto"
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
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
                  children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                    sx: {
                      width: "100%",
                      height: "100%",
                      borderColor: _colors.default.neutral.neutral2,
                      borderRadius: "90px",
                      overflow: "hidden",
                      zIndex: 2,
                      position: "relative",
                      "& div": {
                        '&.MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
                          borderColor: _colors.default.primary.bandaiNamcoBlack
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
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Dropdown, (0, _extends2.default)({}, propsDropDow, {
                      onChange: e => {
                        var _e$target;

                        handleSelectLanguage(e == null ? void 0 : (_e$target = e.target) == null ? void 0 : _e$target.value);
                      }
                    }))
                  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
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
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconLanguage, {
                      htmlColor: _colors.default.primary.bandaiNamcoBlack
                    })
                  })]
                })
              })]
            })]
          }), logged && /*#__PURE__*/(0, _jsxRuntime.jsx)(MenuUserInfo, {
            handleCloseMenuUserInfo: () => handleCloseMenuUserInfo(),
            handleCloseAllMenu: () => handleCloseAllMenu(),
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

var _default = NavigationBar;
exports.default = _default;
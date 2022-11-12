import _extends from "@babel/runtime/helpers/esm/extends";

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
const AccordionSummary = loadable(() => import("@mui/material/AccordionSummary"));
const AccordionDetails = loadable(() => import("@mui/material/AccordionDetails"));
const NavigationBarDropDown = loadable(() => import("./NavigationBarDropDown"));
const LocationSelectionBanner = loadable(() => import("../LocationSelectionBanner"));
const MenuUserInfo = loadable(() => import("./MenuUserInfo"));
const MenuUser = loadable(() => import("./MenuUser"));
const Dropdown = loadable(() => import("../../molecules/Dropdown"));

const IconClose = () => {
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

const NavigationBar = props => {
  var _NavigationBarDropDow, _NavigationBarDropDow2;

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
  const [contentTheme, setContentTheme] = useState(theme);
  const isMobile = useMediaQuery(themes => themes.breakpoints.down('lg'));
  const {
    bandaiNamcoWhite,
    bandaiNamcoBlack
  } = colors.primary;
  const [expanded, setExpanded] = useState(''); // const [expandedMobile, setExpandedMobile] = useState<string | boolean>('');

  const [isRelative, setIsRelative] = useState(false);
  const [offSetLeftMenu, setOffSetLeftMenu] = useState(0);
  const [isShowLocation, setIsShowLocation] = useState(locationPrompt.isShowLocation ?? false);
  const [isShowMenuUserInfo, setIsShowMenuInfo] = useState(false);
  const userInfoRef = useRef(0);
  const menuRef = useRef();
  useEffect(() => {
    setContentTheme(theme);
  }, [theme]);
  useEffect(() => {
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
    // Mobile menu
    document.getElementById('mobile-menu')?.classList.add('closed');
    document.getElementById('overlay')?.classList.add('closed');
    document.getElementById('mobile-menu')?.classList.remove('opened');
    document.getElementById('overlay')?.classList.remove('opened'); // Desktop menu

    document.getElementsByClassName('navigationBar')[0]?.classList.remove('hidden');
    document.getElementsByClassName('navigationBar')[0]?.classList.add('show'); // handleDisableScrollBody(false)

    disableScrollBody(false); // window.scrollTo(0, heightStateScroll);
  };

  const handleChange = panel => (event, newExpanded) => {
    setIsRelative(newExpanded);
    setExpanded(newExpanded ? panel : false);
  };

  const handleShowMenu = () => {
    // Show menu
    if (typeof window !== "undefined") {
      // Mobile menu
      document.getElementById('mobile-menu')?.classList.add('opened');
      document.getElementById('overlay')?.classList.add('opened');
      document.getElementById('mobile-menu')?.classList.remove('closed');
      document.getElementById('overlay')?.classList.remove('closed'); // Desktop menu

      document.getElementsByClassName('navigationBar')[0]?.classList.add('hidden');
      document.getElementsByClassName('navigationBar')[0]?.classList.remove('show');
      disableScrollBody(true);
    }
  };

  const handleCloseAllMenu = () => {
    setIsShowMenuInfo(false); // Info User

    document.getElementById('userInfo')?.classList.add('closed');
    document.getElementById('userInfo')?.classList.remove('opened'); // Desktop menu

    document.getElementsByClassName('navigationBar')[0]?.classList.remove('hidden');
    document.getElementsByClassName('navigationBar')[0]?.classList.add('show'); // Mobile menu

    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenu) {
      mobileMenu.style.overflowY = "auto";
      mobileMenu.classList.add('closed');
      mobileMenu.classList.remove('opened');
    }

    disableScrollBody(false);
  };

  const propsDropDow = {
    disabled: false,
    error: false,
    helperText: 'Helper text',
    variant: "outlined",
    width: 270,
    defaultValue: languagesDefault,
    data: languages?.length ? languages.map(item => {
      return {
        label: item.label,
        value: item.label
      };
    }) : []
  };
  useEffect(() => {
    const nav = document.getElementById("navigation");
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;
    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        nav?.classList.remove(scrollUp);
        return;
      }

      if (currentScroll > lastScroll && !nav?.classList.contains(scrollDown)) {
        // down
        nav?.classList.remove(scrollUp);
        nav?.classList.add(scrollDown);
      } else if (currentScroll < lastScroll && nav?.classList.contains(scrollDown)) {
        // up
        nav?.classList.remove(scrollDown);
        nav?.classList.add(scrollUp);
      }

      lastScroll = currentScroll;
    });

    const updateSize = () => {
      if (window.innerWidth >= 992) {
        const offsetLeft = menuRef?.current?.offsetLeft || 0;
        setOffSetLeftMenu(offsetLeft);
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleCloseBannerLocation = () => {
    handleCloseBannerRevamp?.();
  };

  const handleSelectLanguage = value => {
    if (typeof window !== "undefined") {
      const itemLanguage = languages?.find(item => item.label === value);

      if (itemLanguage) {
        window.location.href = `${itemLanguage.href}`;
      }
    }
  };

  const handelMouseEnter = index => {
    const menuHover = menuProps?.[index] || "";

    if (contentTheme === "transparent") {
      if (!!menuHover && menuHover?.subMenu?.length) {
        setContentTheme("light");
      }
    }
  };

  const onMouseLeave = index => {
    const menuHover = menuProps?.[index] || "";

    if (theme === "transparent") {
      if (!!menuHover && menuHover?.subMenu?.length) {
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
          onUpdate: v => {
            handleRedirectLanguage?.(v);
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
              md: `calc(100% - ${offSetLeftMenu ?? 0}px)`
            },
            position: "absolute",
            height: "4px",
            top: 0,
            right: 0,
            display: 'flex',
            flexDirection: 'row-reverse',
            padding: '0px'
          },
          children: rainbows?.map((rainbow, index) => /*#__PURE__*/_jsx(Box, {
            sx: {
              width: {
                xs: index === rainbows.length - 1 ? '300%' : '100%',
                sm: '100%'
              },
              height: '100%',
              borderLeft: `4px solid ${rainbows[index + 1] ?? 'transparent'}`,
              borderTop: `4px solid ${rainbow}`
            }
          }, index))
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
              href: `/${locale}`,
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
              children: menuProps?.map((menu, index) => /*#__PURE__*/_jsxs(Box, {
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
                children: [/*#__PURE__*/_jsx("a", {
                  href: menu.link,
                  children: /*#__PURE__*/_jsx(Typography, {
                    variant: "p5",
                    children: menu.label
                  })
                }), menu?.subMenu && menu?.subMenu?.length > 0 && /*#__PURE__*/_jsxs(Box, {
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
                          children: menu?.subMenu?.map((sub, subIndex) => /*#__PURE__*/_jsxs(Box, {
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
                            }), sub?.items?.map((item, itemIndex) => /*#__PURE__*/_jsx(Link, {
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
                            }, itemIndex))]
                          }, subIndex))
                        })
                      }), /*#__PURE__*/_jsxs(Box, {
                        sx: {
                          width: '50%'
                        },
                        children: [menu?.ourPicks?.title && /*#__PURE__*/_jsx(Typography, {
                          variant: "p1",
                          children: menu?.ourPicks?.title
                        }), /*#__PURE__*/_jsx(Box, {
                          sx: {
                            display: 'flex',
                            marginTop: '16px'
                          },
                          children: menu?.ourPicks?.items.map((item, itemIndex) => {
                            if (itemIndex < 2) {
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
                                      alt: item.title ?? ''
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
                      href: menu?.seeAll?.href,
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
                        children: menu?.seeAll?.title
                      })
                    })
                  })]
                })]
              }, index))
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
              children: iconProps?.map(icon => /*#__PURE__*/_jsxs(React.Fragment, {
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
                  onClick: () => handleShowLayoutSearch()
                }), !isMobile && icon.name === 'IconLanguage' && languages?.length > 1 && /*#__PURE__*/_jsx(React.Fragment, {
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
                }, icon?.name), icon.name === 'IconShop' && /*#__PURE__*/_jsx(Link, {
                  href: icon?.href,
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
                  onClick: () => handleShowMenu(),
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
              }, icon?.name))
            })]
          })
        })]
      }), isMobile && /*#__PURE__*/_jsxs(Box, {
        children: [/*#__PURE__*/_jsx(Box, {
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
                href: `/${locale}`,
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
                onClick: () => handleCloseMenuMobile(),
                children: _IconClose || (_IconClose = /*#__PURE__*/_jsx(IconClose, {}))
              })]
            }), logged && /*#__PURE__*/_jsx(MenuUser, {
              handleOpenMenuUserInfo: () => handleOpenMenuUserInfo(),
              avatarUrl: infoUser?.avatarUrl,
              name: infoUser?.name
            }), menuProps?.map((menu, menuIndex) => /*#__PURE__*/_jsxs(Accordion, {
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
                    href: menu.link ? `${menu?.subMenu ? "#" : menu.link}` : '#',
                    color: colors.secondaryGray.main,
                    children: /*#__PURE__*/_jsx(Typography, {
                      variant: "h3",
                      sx: {
                        fontSize: '24px',
                        lineHeight: '30px',
                        color: colors.primary.bandaiNamcoBlack,
                        transition: 'all .4s'
                      },
                      children: menu?.label
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
                  href: menu?.seeAll?.href ?? '#',
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
                    children: menu?.seeAll?.titleMobile
                  })
                }), menu.subMenu && menu.subMenu.length > 0 && menu.subMenu.map((item, subIndex) => /*#__PURE__*/_jsxs(Accordion, {
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
                        children: item?.title
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
                    children: item.items && item.items.length > 0 && item.items.map((itemChild, itemIndex) => /*#__PURE__*/_jsx(Link, {
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
                    }, itemIndex))
                  })]
                }, `${`${item.title}mobile-child`}` || subIndex)), /*#__PURE__*/_jsxs(Accordion, {
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
                        children: menu?.ourPicks?.title
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
                    children: menu.ourPicks?.items && menu.ourPicks?.items.length > 0 && menu.ourPicks?.items.map((itemChild, itemIndex) => /*#__PURE__*/_jsx(Link, {
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
                    }, itemIndex))
                  })]
                })]
              })]
            }, `${`${menu.label}mobile`}` || menuIndex)), /*#__PURE__*/_jsxs(Box, {
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
                children: buttonProps?.map((button, buttonIndex) => /*#__PURE__*/_jsx(Button, _extends({}, button, {
                  sx: {
                    width: '133px'
                  }
                }), buttonIndex))
              }), !!languages?.length && /*#__PURE__*/_jsx(Box, {
                sx: {
                  paddingTop: '24px',
                  borderTop: `1px solid ${colors.neutral.neutral5}`,
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
                      onChange: e => {
                        handleSelectLanguage(e?.target?.value);
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
            handleCloseMenuUserInfo: () => handleCloseMenuUserInfo(),
            handleCloseAllMenu: () => handleCloseAllMenu(),
            details: infoUser?.details,
            account: infoUser?.account,
            orders: infoUser?.orders,
            address: infoUser?.address,
            isRelative: isRelative,
            logout: infoUser?.logout,
            ref: userInfoRef,
            isShow: isShowMenuUserInfo
          })]
        })]
      })]
    })
  });
};

export default NavigationBar;
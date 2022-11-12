"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Link = _interopRequireDefault(require("@mui/material/Link"));

var _Icon = require("../../atoms/Icon");

var _component = _interopRequireDefault(require("@loadable/component"));

var _jsxRuntime = require("react/jsx-runtime");

var _IconFb, _IconTwitter, _IconIns, _IconYtb, _IconTwitch, _IconWeibo, _IconKakaoTalk, _IconBiBi, _IconBlog, _IconLocation, _IconLanguage;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import FooterModalConfirm from './FooterConfirmLocale';
const FooterModalConfirm = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("./FooterConfirmLocale"))));
const Dropdown = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../../molecules/Dropdown"))));

const ContactInfo = props => {
  var _dropdownProps$defaul, _dropdownProps$defaul2, _dropdownPropsLanguag, _listPolicy$list, _listPolicy$list2;

  const {
    srcLogo,
    listMenu,
    rainbows,
    listPolicy,
    dropdownProps,
    dropdownPropsLanguages,
    modalConfirm,
    handleRedirectLanguage,
    handleRedirectLocale,
    locale = 'sea'
  } = props;
  const [openConfirm, setOpenConfirm] = (0, _react.useState)(false);
  const [valueRedirect, setValueRedirect] = (0, _react.useState)((_dropdownProps$defaul = dropdownProps == null ? void 0 : dropdownProps.defaultValue) != null ? _dropdownProps$defaul : '');
  const dropdownRef = (0, _react.useRef)();
  const [isLocalSoutheast, setIsLocalSoutheast] = (0, _react.useState)(false);
  const LIST_ICON_SOCIAL = {
    fb: _IconFb || (_IconFb = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconFb, {
      htmlColor: "#fff"
    })),
    tw: _IconTwitter || (_IconTwitter = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconTwitter, {
      htmlColor: "#fff"
    })),
    ins: _IconIns || (_IconIns = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconIns, {
      htmlColor: "#fff"
    })),
    ytb: _IconYtb || (_IconYtb = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconYtb, {
      htmlColor: "#fff"
    })),
    twitch: _IconTwitch || (_IconTwitch = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconTwitch, {
      htmlColor: "#fff"
    })),
    wei: _IconWeibo || (_IconWeibo = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconWeibo, {
      htmlColor: "#fff"
    })),
    kakao: _IconKakaoTalk || (_IconKakaoTalk = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconKakaoTalk, {
      htmlColor: "#fff"
    })),
    bibi: _IconBiBi || (_IconBiBi = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconBiBi, {
      htmlColor: "#fff"
    })),
    naver: _IconBlog || (_IconBlog = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconBlog, {
      htmlColor: "#fff"
    }))
  };

  const handleRenderLocale = lc => {
    let result = dropdownPropsLanguages == null ? void 0 : dropdownPropsLanguages.defaultValue;

    if (!lc) {
      return result;
    }

    if (lc === "tw-sc" || lc === "hk-sc") {
      result = "简体中文";
    }

    return result;
  };

  const prevLocaleRef = (0, _react.useRef)((_dropdownProps$defaul2 = dropdownProps == null ? void 0 : dropdownProps.defaultValue) != null ? _dropdownProps$defaul2 : '');
  (0, _react.useEffect)(() => {
    var _prevLocaleRef$curren;

    if (((_prevLocaleRef$curren = prevLocaleRef.current) == null ? void 0 : _prevLocaleRef$curren.toUpperCase()) === 'Southeast Asia (SEA)'.toUpperCase()) {
      setIsLocalSoutheast(true);
    }
  }, [prevLocaleRef]);

  const handleOpenModalConfirm = value => {
    if ((value == null ? void 0 : value.toLowerCase()) === "Southeast Asia (SEA)".toLowerCase()) {
      setIsLocalSoutheast(true);
    } else {
      setIsLocalSoutheast(false);
    }

    if (prevLocaleRef.current !== value) {
      setOpenConfirm(true);
      setValueRedirect(value);
    }
  };

  const handleCloseModalConfirm = () => {
    var _prevLocaleRef$curren2;

    setOpenConfirm(false);
    setValueRedirect(prevLocaleRef.current);
    dropdownRef.current.handleSetValueData();

    if (((_prevLocaleRef$curren2 = prevLocaleRef.current) == null ? void 0 : _prevLocaleRef$curren2.toLowerCase()) === "Southeast Asia (SEA)".toLowerCase()) {
      setIsLocalSoutheast(true);
    } else {
      setIsLocalSoutheast(false);
    }
  };

  const handleCloseModalConfirmRedirect = () => {
    setOpenConfirm(false);
    prevLocaleRef.current = valueRedirect;
  };

  const handleChangeLocale = e => {
    handleRedirectLocale == null ? void 0 : handleRedirectLocale(e);
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      padding: {
        lg: '60px 0 36px 0',
        xs: '57px 0 40px 0'
      }
    },
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(FooterModalConfirm, (0, _extends2.default)({}, modalConfirm, {
      isOpen: openConfirm,
      defaultValueLocale: prevLocaleRef.current,
      valueRedirect: valueRedirect,
      handleCloseModalConfirm: handleCloseModalConfirm,
      handleRedirectLanguage: handleRedirectLanguage,
      locale: locale,
      handleCloseModalConfirmRedirect: handleCloseModalConfirmRedirect
    })), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        flexWrap: 'wrap'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          width: {
            xs: '100%',
            lg: '50%'
          }
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
          item: true,
          xs: 12,
          sx: {
            width: "100%",
            position: "absolute",
            height: "4px",
            top: 0,
            left: 0,
            marginTop: '1em',
            display: 'flex',
            flexDirection: 'row-reverse',
            padding: '0px'
          },
          children: rainbows == null ? void 0 : rainbows.map((rainbow, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              width: {
                xs: index === rainbows.length - 1 ? '300%' : '100%',
                sm: '100%'
              },
              height: '100%',
              borderLeft: `4px solid ${rainbows[index + 1]}`,
              borderTop: `4px solid ${rainbow}`
            }
          }, index))
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: srcLogo,
            alt: "Logo Bandai"
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            display: 'flex',
            flexDirection: {
              md: "row",
              xs: isLocalSoutheast ? "column" : "row"
            },
            '& .MuiSelect-select.MuiSelect-standard': {
              fontWeight: 600,
              color: _colors.default.neutral.neutral4
            },
            '& .MuiSvgIcon-root': {
              '& path': {
                fill: _colors.default.neutral.neutral4
              }
            }
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              display: "flex",
              alignItems: "center",
              // width: {
              //   xs: isLocalSoutheast ? "208px" : "159px",
              //   md: isLocalSoutheast ? "230px" : "159px"
              // },
              width: "fit-content",
              height: {
                xs: "40px"
              },
              marginRight: "8px",
              position: "relative",
              cursor: "pointer",
              marginTop: '29px'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                width: "100%",
                height: "100%",
                border: "1px solid",
                borderColor: _colors.default.neutral.neutral2,
                borderRadius: "90px",
                overflow: "hidden",
                zIndex: 2,
                position: "relative",
                "& div": {
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
                  "& .MuiFormControl-root": {
                    maxWidth: {
                      xs: isLocalSoutheast ? "208px" : "159px",
                      md: isLocalSoutheast ? "230px" : "159px"
                    }
                  },
                  '& .MuiSelect-standard': {
                    // padding: {
                    //   md: isLocalSoutheast ? '18.5px 16px 18.5px 42px !important' : '18.5px 16px 18.5px 42px !important',
                    //   xs: isLocalSoutheast ? '15.5px 16px 15.5px 37px !important' : '15.5px 16px 15.5px 37px !important'
                    // },
                    padding: '18.5px 36px 18.5px 38px !important',
                    color: `${_colors.default.primary.bandaiNamcoWhite} !important`,
                    "&:focus": {
                      background: "none"
                    }
                  },
                  "& svg": {
                    position: "absolute",
                    zIndex: "1",
                    cursor: "pointer",
                    '& path': {
                      fill: `${_colors.default.primary.bandaiNamcoWhite} !important`
                    },
                    right: {
                      xs: isLocalSoutheast ? "6px" : '16px'
                    },
                    transform: isLocalSoutheast ? "translateX(-12px)" : "translateX(0px)"
                  }
                }
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Dropdown, (0, _extends2.default)({}, dropdownProps, {
                ref: dropdownRef,
                defaultValue: prevLocaleRef.current,
                handleClickItem: e => handleOpenModalConfirm(e),
                isScrollTop: true
              }))
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                position: "absolute",
                zIndex: "1",
                marginTop: "5px",
                left: "16px",
                "& svg": {
                  width: "13px",
                  height: "16px",
                  '& path': {
                    fill: `${_colors.default.primary.bandaiNamcoWhite} !important`
                  }
                }
              },
              children: _IconLocation || (_IconLocation = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconLocation, {}))
            })]
          }), dropdownPropsLanguages && !!((_dropdownPropsLanguag = dropdownPropsLanguages.data) != null && _dropdownPropsLanguag.length) && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              display: "flex",
              alignItems: "center",
              width: {
                xs: "159px"
              },
              height: {
                xs: "40px"
              },
              marginRight: "12px",
              position: "relative",
              cursor: "pointer",
              marginTop: '29px'
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                width: "100%",
                height: "100%",
                border: "1px solid",
                borderColor: _colors.default.neutral.neutral2,
                borderRadius: "90px",
                overflow: "hidden",
                zIndex: 2,
                position: "relative",
                "& div": {
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
                      md: '18.5px 0 18.5px 42px !important',
                      xs: '15.5px 0 15.5px 46px !important'
                    },
                    color: `${_colors.default.primary.bandaiNamcoWhite} !important`,
                    "&:focus": {
                      background: "none"
                    }
                  },
                  "& svg": {
                    position: "absolute",
                    zIndex: "1",
                    cursor: "pointer",
                    '& path': {
                      fill: `${_colors.default.primary.bandaiNamcoWhite} !important`
                    },
                    right: {
                      xs: "0"
                    },
                    transform: "translateX(0px)"
                  }
                }
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Dropdown, (0, _extends2.default)({}, dropdownPropsLanguages, {
                defaultValue: handleRenderLocale(locale),
                onChange: e => handleChangeLocale(e.target.value),
                isScrollTop: true
              }))
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                position: "absolute",
                zIndex: "1",
                marginTop: "5px",
                left: {
                  md: "20px",
                  xs: "28px"
                },
                "& svg": {
                  width: "13px",
                  height: "16px",
                  '& path': {
                    fill: `${_colors.default.neutral.neutral4} !important`
                  }
                }
              },
              children: _IconLanguage || (_IconLanguage = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconLanguage, {}))
            })]
          })]
        })]
      }), (listMenu == null ? void 0 : listMenu.length) > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: 'flex',
          flexWrap: {
            xs: 'wrap',
            sm: 'nowrap'
          },
          width: {
            xs: '100%',
            lg: '50%'
          },
          justifyContent: 'space-between',
          marginTop: {
            xs: '30px',
            lg: '0px'
          }
        },
        children: listMenu == null ? void 0 : listMenu.map((child, idx) => {
          if (idx <= 1) {
            var _child$cols$, _child$cols$2;

            return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
              component: "ul",
              sx: {
                padding: '0px',
                margin: '0px',
                width: {
                  xs: '100%',
                  sm: 'inherit'
                },
                marginTop: {
                  xs: '40px',
                  sm: '0px'
                },
                '&:last-of-type': {
                  marginTop: {
                    xs: '48px',
                    sm: '0px'
                  }
                }
              },
              children: [child.title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "p5",
                color: _colors.default.neutral.neutral4,
                sx: {
                  fontSize: '16px'
                },
                children: child.title
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                sx: {
                  display: (_child$cols$ = child.cols[0]) != null && _child$cols$.imgSrc ? 'flex' : 'block',
                  flexWrap: (_child$cols$2 = child.cols[0]) != null && _child$cols$2.imgSrc ? 'nowrap' : 'wrap'
                },
                children: child && child.cols.map((item, index) => {
                  var _child$cols$3, _item$title;

                  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
                    sx: {
                      marginRight: (_child$cols$3 = child.cols[0]) != null && _child$cols$3.imgSrc ? '16px' : '0'
                    },
                    children: [(item == null ? void 0 : item.imgSrc) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
                      href: `/${locale}/${item.href}`,
                      target: "_blank",
                      sx: {
                        marginTop: '18px',
                        display: 'inline-block'
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
                        src: item.imgSrc,
                        alt: (_item$title = item.title) != null ? _item$title : 'Social'
                      })
                    }), !item.imgSrc && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                      component: "li",
                      sx: {
                        listStyle: 'none',
                        marginTop: {
                          xs: '16px',
                          md: '8px'
                        },
                        '& a': {
                          textDecoration: 'none',
                          color: _colors.default.primary.bandaiNamcoWhite,
                          transition: 'all .4s',
                          '&:hover': {
                            color: _colors.default.primary.bandaiNamcoWhite,
                            '& p': {
                              color: _colors.default.neutral.neutral4
                            }
                          }
                        }
                      },
                      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
                        href: item != null && item.href.includes("http") ? item.href : `/${locale}/${item.href}`,
                        color: _colors.default.primary.bandaiNamcoWhite,
                        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                          variant: "p5",
                          color: _colors.default.primary.bandaiNamcoWhite,
                          sx: {
                            fontSize: '14px',
                            fontWeight: '400'
                          },
                          children: item.title
                        })
                      })
                    }, item.title)]
                  }, index);
                })
              })]
            }, `cols${idx}`);
          }

          return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            component: "ul",
            sx: {
              padding: '0px',
              margin: '0px',
              width: {
                xs: '100%',
                sm: 'inherit'
              },
              marginTop: {
                xs: '40px',
                sm: '0px'
              },
              '&:last-of-type': {
                marginTop: {
                  xs: '48px',
                  sm: '0px'
                }
              }
            },
            children: [child.title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
              variant: "p5",
              color: _colors.default.neutral.neutral4,
              sx: {
                fontSize: '16px'
              },
              children: child.title
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                display: 'flex',
                flexWrap: 'nowrap',
                lineHeight: "0px"
              },
              children: child && child.cols.map((item, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                sx: {
                  marginRight: '16px'
                },
                children: (item == null ? void 0 : item.title) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
                  href: `${item.href}`,
                  target: "_blank",
                  sx: {
                    marginTop: '18px',
                    display: 'inline-block',
                    "&:hover": {
                      "& svg": {
                        "& path": {
                          fill: `#737373`
                        }
                      }
                    }
                  },
                  children: LIST_ICON_SOCIAL[item.title.toLowerCase()]
                })
              }, index))
            })]
          }, `cols${idx}`);
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        marginTop: '40px',
        flexDirection: {
          xs: 'column',
          lg: 'inherit'
        }
      },
      children: [(listPolicy == null ? void 0 : listPolicy.copyRight) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          marginBottom: {
            xs: '24px',
            lg: '0px'
          },
          paddingRight: '20px',
          width: {
            xs: '100%',
            lg: '50%'
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p6",
          color: {
            xs: _colors.default.neutral.neutral4,
            lg: _colors.default.primary.bandaiNamcoWhite
          },
          sx: {
            textAlign: {
              xs: 'left'
            }
          },
          children: listPolicy == null ? void 0 : listPolicy.copyRight
        })
      }), (listPolicy == null ? void 0 : (_listPolicy$list = listPolicy.list) == null ? void 0 : _listPolicy$list.length) > 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        component: "ul",
        sx: {
          padding: '0px',
          margin: '0px',
          display: 'flex',
          flexWrap: {
            xs: 'wrap',
            xl: 'nowrap'
          },
          width: {
            xs: '100%',
            lg: '50%'
          }
        },
        children: listPolicy == null ? void 0 : (_listPolicy$list2 = listPolicy.list) == null ? void 0 : _listPolicy$list2.map(item => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          component: "li",
          sx: {
            listStyle: 'none',
            height: "fit-content",
            paddingRight: {
              xs: '22px',
              lg: '8px'
            },
            marginRight: {
              xs: '0',
              lg: '8px'
            },
            borderRight: {
              xs: 'none',
              lg: `1px solid ${_colors.default.neutral.neutral4}`
            },
            marginBottom: {
              xs: '8px',
              md: '0px'
            },
            '&:last-of-type': {
              borderRight: 'none',
              paddingRight: '0',
              marginRight: '0'
            },
            '& a': {
              textDecoration: 'none',
              color: _colors.default.primary.bandaiNamcoWhite,
              transition: 'all .4s',
              '&:hover': {
                color: _colors.default.primary.bandaiNamcoWhite,
                '& p': {
                  color: _colors.default.neutral.neutral4
                }
              }
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
            href: `/${locale}/${item.href}`,
            color: _colors.default.neutral.white,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
              variant: "p5",
              color: _colors.default.primary.bandaiNamcoWhite,
              sx: {
                fontWeight: '400',
                whiteSpace: 'nowrap'
              },
              children: item.title
            })
          })
        }, item.title))
      })]
    })]
  });
};

var _default = ContactInfo;
exports.default = _default;
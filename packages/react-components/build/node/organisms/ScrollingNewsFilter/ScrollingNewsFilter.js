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

var _Pills = _interopRequireDefault(require("../../atoms/Pills"));

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _Icon = require("../../atoms/Icon");

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _react2 = require("swiper/react");

var _utils = require("../../utils");

var _lodash = require("lodash");

var _disableScrollBody = require("../../utils/disableScrollBody");

var _component = _interopRequireDefault(require("@loadable/component"));

var _jsxRuntime = require("react/jsx-runtime");

var _IconClose;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const FilterSelectionListing = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../../molecules/FilterSelectionListing"))));
const Categories = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../../molecules/Categories")))); // define function

const ScrollingNewsFilter = props => {
  var _buttonPropsClear$lab, _buttonPropsDone$labe;

  const {
    title,
    // pillProps,
    categories,
    dataFilter,
    buttonPropsDone,
    buttonPropsClear,
    setDataQueryTags,
    setDataQueryGame
  } = props;
  const theme = (0, _material.useTheme)();
  const isMobile = (0, _material.useMediaQuery)(theme.breakpoints.down('lg'));
  const isMobileMin = (0, _material.useMediaQuery)(theme.breakpoints.down('md'));
  const isDesktop = (0, _material.useMediaQuery)(theme.breakpoints.down('xl'));
  const [backDrop, setBackDrop] = (0, _react.useState)(false);
  const [categorySelected, setCategorySelected] = (0, _react.useState)('');
  const [dataFilterSidebar, setDataFilterSidebar] = (0, _react.useState)(dataFilter || []);
  const [pillLength, setPillLength] = (0, _react.useState)(0); // const [listPill, setListPill] = useState<Array<PillProps>>(pillProps);
  // const [dataSideChecked, setDataSideChecked] = useState<ListingType[]>([]);

  const [isStickyContent, setIsStickyContent] = (0, _react.useState)(false);
  const refFilter = (0, _react.useRef)(null);
  const refPillSidebar = (0, _react.useRef)(null);
  const categoryRef = (0, _react.useRef)([]);
  const refTimeOut = (0, _react.useRef)();
  const screenY = (0, _react.useRef)();
  const refContentFilter = (0, _react.useRef)();
  const refSticky = (0, _react.useRef)(false);
  const [paddingScrollContent, setPaddingScrollContent] = (0, _react.useState)(0);
  const refWrapperContainer = (0, _react.useRef)();
  const refContainer = (0, _react.useRef)();
  const refItemContent = (0, _react.useRef)();
  const refWidthItem = (0, _react.useRef)();
  const refWrapperContent = (0, _react.useRef)();
  const refWrapperContentSticker = (0, _react.useRef)();
  const refFullWidthContent = (0, _react.useRef)(0);
  const refIsMobile = (0, _react.useRef)(isMobileMin);
  const arrowsContainer = (0, _react.useRef)();
  const refLastChild = (0, _react.useRef)();
  const refTimeout = (0, _react.useRef)();
  const refWrapperPills = (0, _react.useRef)();
  const [disableArrowRight, setDisableArrowRight] = (0, _react.useState)(false);
  const [disableArrowLeft, setDisableArrowLeft] = (0, _react.useState)(true); // const [isEnd, setIsEnd] = useState<boolean>(false);

  const [initialSlide, setInitialSlide] = (0, _react.useState)(0);
  const refISEnd = (0, _react.useRef)();
  const refValueFilterSidebar = (0, _react.useRef)([]);
  const refScrollTop = (0, _react.useRef)(0);
  const refContentFilterSticker = (0, _react.useRef)();
  const refBackdropFilterDesktop = (0, _react.useRef)(); // const [loading, setLoading] = React.useState(false);
  // const [numberSkip, setNumberSkip] = React.useState<number>(0);
  // const [totalItem, setTotalItem] = React.useState<number>(1);
  // const [itemData, setItemData] = React.useState<any[]>([]);
  // Handle call api fetch data

  const handleCallApiGetData = dataQuery => {
    setDataQueryTags == null ? void 0 : setDataQueryTags(dataQuery);
    setDataQueryGame == null ? void 0 : setDataQueryGame(categorySelected != null ? categorySelected : '');
  }; // handle return param filter


  const handleReturnValueFilter = listFilter => {
    const result = [];
    listFilter == null ? void 0 : listFilter.map(item => {
      var _item$listSub, _item$listSub2;

      if (item.isChecked && !((_item$listSub = item.listSub) != null && _item$listSub.length)) {
        result.push((0, _utils.convertCustomTagForFilter)(item.name));
        return null;
      }

      if ((_item$listSub2 = item.listSub) != null && _item$listSub2.length) {
        item.listSub.map(itemSub => {
          if (itemSub != null && itemSub.isChecked) {
            result.push((0, _utils.convertCustomTagForFilter)(itemSub.name));
          }

          return null;
        });
      }

      return null;
    }); // call api

    handleCallApiGetData(result);
  }; // handle Count item filter


  const handleCountSelected = listFilter => {
    let count = 0;
    listFilter == null ? void 0 : listFilter.map(item => {
      var _item$listSub3, _item$listSub4;

      if (!((_item$listSub3 = item.listSub) != null && _item$listSub3.length) && item.isChecked) {
        count += 1;
        return null;
      }

      if ((_item$listSub4 = item.listSub) != null && _item$listSub4.length) {
        item.listSub.map(itemSub => {
          if (itemSub != null && itemSub.isChecked) {
            count += 1;
          }

          ;
          return null;
        });
      }

      return null;
    });
    setPillLength(count);
  };

  const handleCheckFilterSub = listFilter => {
    setDataFilterSidebar(listFilter); // handleReturnValueFilter(newListFilter);
  };

  (0, _react.useEffect)(() => {
    handleCheckFilterSub(dataFilter);
    handleCountSelected(dataFilter); // const result: string[] = [];
    // dataFilter?.map((item) => {
    //   if (item.isChecked && !item.listSub?.length) {
    //     result.push(convertCustomTagForFilter(item.title));
    //     return null;
    //   }
    //   if (item.listSub?.length) {
    //     item.listSub.map((itemSub: any) => {
    //       if (itemSub?.isChecked) {
    //         result.push(convertCustomTagForFilter(itemSub.title));
    //       }
    //       return null
    //     })
    //   }
    //   return null
    // });
    // setDataQueryTags?.(result)
  }, [dataFilter, setDataQueryTags]);
  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      var _refContainer$current, _refItemContent$curre;

      const contentFilter = refContentFilter.current;

      if (contentFilter && typeof window !== undefined) {
        const {
          top
        } = contentFilter.getBoundingClientRect();
        const positionTopContentFilter = top + window.scrollY;
        window.addEventListener("scroll", () => {
          const heightComponent = isMobileMin ? 200 : 347;

          if (positionTopContentFilter + heightComponent <= window.scrollY && !refSticky.current) {
            refSticky.current = true;
            setIsStickyContent(true);
            refScrollTop.current = window.scrollY;
          }

          if (positionTopContentFilter + heightComponent > window.scrollY && refSticky.current) {
            // window.scrollTo({ top: positionTopContentFilter, behavior: "smooth" });
            refSticky.current = false;
            setIsStickyContent(false);
          }
        });
      }

      refIsMobile.current = isMobileMin; // set padding-left content scroll  = left container. 

      setPaddingScrollContent(((_refContainer$current = refContainer.current) == null ? void 0 : _refContainer$current.offsetLeft) + (isMobileMin ? 16 : 24));
      refWidthItem.current = ((_refItemContent$curre = refItemContent.current) == null ? void 0 : _refItemContent$curre.offsetWidth) + 24; // listen to events window resize for change padding left  content scroll.

      window.addEventListener("resize", () => {
        var _refItemContent$curre2, _refItemContent$curre3;

        if (refWrapperContainer.current) {
          const lastChild = refWrapperContainer.current.querySelector(".last-child-item");

          if (lastChild) {
            lastChild.style.width = `${refContainer.current.offsetLeft + (isMobileMin ? 2 : 12)}px`;
          }

          if (refTimeOut.current) {
            window.clearTimeout(refTimeOut.current);
          }

          refTimeOut.current = setTimeout(() => {
            var _refWrapperContainer$;

            refTimeOut.current = undefined;
            const listSwiper = refWrapperContainer == null ? void 0 : (_refWrapperContainer$ = refWrapperContainer.current) == null ? void 0 : _refWrapperContainer$.querySelectorAll(".mySwiper");

            if (listSwiper != null && listSwiper.length) {
              listSwiper.forEach(element => {
                var _element$swiper, _element$swiper$obser;

                element == null ? void 0 : (_element$swiper = element.swiper) == null ? void 0 : (_element$swiper$obser = _element$swiper.observer) == null ? void 0 : _element$swiper$obser.destroy();
              });
            }
          }, 200);
        } // set padding left when window resize


        if (refWrapperContent.current) {
          refWrapperContent.current.style.paddingLeft = `${refContainer.current.offsetLeft + 24}px`;
        }

        if (refWrapperContentSticker.current) {
          refWrapperContentSticker.current.style.paddingLeft = `${refContainer.current.offsetLeft + 24}px`;
        }

        if (refWrapperPills.current) {
          refWrapperPills.current.style.paddingLeft = `${refContainer.current.offsetLeft + 24}px`;
        } // set width item


        refWidthItem.current = ((_refItemContent$curre2 = refItemContent.current) == null ? void 0 : _refItemContent$curre2.offsetWidth) + 24; // get full width content scroll

        refFullWidthContent.current = ((_refItemContent$curre3 = refItemContent.current) == null ? void 0 : _refItemContent$curre3.offsetWidth) + 24 + (refWidthItem.current * categories.length || 1);
        refIsMobile.current = isMobileMin;
      });
    }

    return () => {
      window.removeEventListener("scroll", () => {});
      window.removeEventListener("resize", () => {});
    };
  }, [categories, isMobileMin, isDesktop, isMobile]);
  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const content = refWrapperContent.current;

      if (content) {
        content.addEventListener("scroll", () => {
          const itemLastChild = refLastChild.current.getBoundingClientRect();
          const positionWidth = itemLastChild.x;

          if (!refIsMobile.current) {
            if (refTimeout.current) {
              window.clearTimeout(refTimeout.current);
            }

            refTimeout.current = setTimeout(() => {
              refTimeout.current = undefined;

              if (content.scrollLeft === 0) {
                setDisableArrowLeft(true);
              }

              if (disableArrowLeft && content.scrollLeft > 0) {
                setDisableArrowLeft(false);
              }

              if (positionWidth <= content.clientWidth) {
                setDisableArrowRight(true);
              }

              if (positionWidth > content.clientWidth && disableArrowRight) {
                setDisableArrowRight(false);
              }
            }, 100);
          }
        });
      }
    }

    return () => {
      window.clearTimeout(refTimeout.current);
    };
  }, [disableArrowRight, disableArrowLeft]);
  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      (0, _disableScrollBody.disableScrollBody)(backDrop);
    }
  }, [backDrop]); // handel listing event scroll set Hide sub nav and show main nav when user scroll up.

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const heightTop = "-200px";

      if (refSticky.current) {
        const content = refContentFilterSticker.current;
        const backdrop = refBackdropFilterDesktop.current;

        if (content) {
          window.addEventListener("scroll", () => {
            if (refSticky.current) {
              if (window.scrollY > refScrollTop.current) {
                content.style.top = "0px";
                backdrop.style.top = "0px";
                refScrollTop.current = window.scrollY;
              }

              if (window.scrollY < refScrollTop.current) {
                content.style.top = heightTop;
                backdrop.style.top = heightTop;
                refScrollTop.current = window.scrollY;
              }
            }

            if (!refSticky.current) {
              content.style.top = heightTop;
              backdrop.style.top = heightTop;
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
  }, [isStickyContent, isMobile]);

  const handelDestroySwiper = () => {
    var _refWrapperContainer$2;

    const listSwiper = refWrapperContainer == null ? void 0 : (_refWrapperContainer$2 = refWrapperContainer.current) == null ? void 0 : _refWrapperContainer$2.querySelectorAll(".mySwiper");

    if (listSwiper != null && listSwiper.length) {
      listSwiper.forEach(element => {
        var _element$swiper2, _element$swiper3, _element$swiper3$obse, _element$swiper3$obse2, _element$swiper4, _element$swiper4$resi, _element$swiper4$resi2;

        element == null ? void 0 : (_element$swiper2 = element.swiper) == null ? void 0 : _element$swiper2.updateSlides();
        element == null ? void 0 : (_element$swiper3 = element.swiper) == null ? void 0 : (_element$swiper3$obse = _element$swiper3.observer) == null ? void 0 : (_element$swiper3$obse2 = _element$swiper3$obse.destroy) == null ? void 0 : _element$swiper3$obse2.call(_element$swiper3$obse);
        element == null ? void 0 : (_element$swiper4 = element.swiper) == null ? void 0 : (_element$swiper4$resi = _element$swiper4.resize) == null ? void 0 : (_element$swiper4$resi2 = _element$swiper4$resi.orientationChangeHandler) == null ? void 0 : _element$swiper4$resi2.call(_element$swiper4$resi);
      });
    }
  };

  const handelChangeHandlerSwiper = e => {
    if (!refISEnd.current && !!e) {
      var _refContentFilter$cur;

      refISEnd.current = e.isEnd;
      const listSwiper = refContentFilter == null ? void 0 : (_refContentFilter$cur = refContentFilter.current) == null ? void 0 : _refContentFilter$cur.querySelectorAll(".mySwiper");

      if (listSwiper != null && listSwiper.length) {
        listSwiper.forEach(element => {
          var _element$swiper5, _element$swiper5$resi;

          element == null ? void 0 : (_element$swiper5 = element.swiper) == null ? void 0 : (_element$swiper5$resi = _element$swiper5.resize) == null ? void 0 : _element$swiper5$resi.orientationChangeHandler();
        });
      }
    }
  };

  (0, _react.useEffect)(() => {
    let timeOut = null;

    if (typeof window !== "undefined") {
      timeOut = setTimeout(() => {
        handelDestroySwiper();
      }, 300);
    }

    return () => {
      window.clearTimeout(timeOut);
    };
  }, [isStickyContent, pillLength, isMobile, isMobileMin]); // Handle to click on categories

  const handleActiveCategory = (item, index) => {
    var _categoryRef$current;

    const span = categoryRef.current[index]; // corresponding DOM node

    (_categoryRef$current = categoryRef.current) == null ? void 0 : _categoryRef$current.forEach((spanElm, idx) => {
      if (index !== idx) {
        spanElm.classList.remove("active");
      }

      return null;
    });
    span.classList.toggle("active");

    if (categorySelected === item) {
      setCategorySelected("");
      setDataQueryGame == null ? void 0 : setDataQueryGame("");
    } else {
      setCategorySelected(item);
      setDataQueryGame == null ? void 0 : setDataQueryGame(item);
    }
  };

  const handleClick = (label, index) => {
    var _newDataFilterSidebar;

    const newDataFilterSidebar = [...dataFilterSidebar];
    newDataFilterSidebar[index].isChecked = !newDataFilterSidebar[index].isChecked;
    const newListSub = (_newDataFilterSidebar = newDataFilterSidebar[index].listSub) == null ? void 0 : _newDataFilterSidebar.map(item => {
      return (0, _extends2.default)({}, item, {
        isChecked: newDataFilterSidebar[index].isChecked
      });
    });
    newDataFilterSidebar[index].listSub = newListSub;
    setDataFilterSidebar(newDataFilterSidebar);
    handleCountSelected(newDataFilterSidebar);
    handleReturnValueFilter(newDataFilterSidebar);
  };

  const next = e => {
    var _refItemContent$curre4, _refWrapperContent$cu;

    e.stopPropagation();
    const scroll = refWrapperContent.current.scrollLeft + ((_refItemContent$curre4 = refItemContent.current) == null ? void 0 : _refItemContent$curre4.offsetWidth) + 24;
    (_refWrapperContent$cu = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu.scrollTo({
      left: scroll,
      behavior: "smooth"
    });
  };

  const previous = e => {
    var _refItemContent$curre5, _refWrapperContent$cu2;

    e.stopPropagation();
    const scroll = refWrapperContent.current.scrollLeft - ((_refItemContent$curre5 = refItemContent.current) == null ? void 0 : _refItemContent$curre5.offsetWidth) + 24;
    (_refWrapperContent$cu2 = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu2.scrollTo({
      left: scroll,
      behavior: "smooth"
    });
  };
  /**
   * Handle show filter side bar
   */


  const handleShowSideBarFilter = () => {
    setBackDrop(!backDrop);
  }; // Handle clear filter checkbox


  const handleResetFilter = () => {
    const newDataFilterSidebar = dataFilterSidebar.map(item => {
      var _item$listSub5;

      return (0, _extends2.default)({}, item, {
        isChecked: false,
        listSub: (item == null ? void 0 : (_item$listSub5 = item.listSub) == null ? void 0 : _item$listSub5.map(itemSub => {
          return (0, _extends2.default)({}, itemSub, {
            isChecked: false
          });
        })) || []
      });
    });
    setDataFilterSidebar(newDataFilterSidebar);
    setPillLength(0);
  };

  const handleFilterInMenu = valueFilter => {
    handleCheckFilterSub([...valueFilter]);
    handleCountSelected(valueFilter);
  };

  const handleOnPointerMove = e => {
    if (refTimeOut.current) {
      window.clearTimeout(refTimeOut.current);
    }

    refTimeOut.current = setTimeout(() => {
      refTimeOut.current = undefined;
      const newScreenY = e.screenY;

      if (newScreenY > screenY.current) {
        setBackDrop(false);
      }
    }, 150);
  };

  const handleOnPointerDown = e => {
    screenY.current = e.screenY;
  };

  const returnValueBottom = () => {
    if (isMobileMin && backDrop) {
      return 0;
    }

    if (isMobileMin) {
      return "-474px";
    }

    return 0;
  };

  const returnValueRight = () => {
    if (isMobileMin || backDrop) {
      return 0;
    }

    return '-400px';
  };

  (0, _react.useEffect)(() => {
    if (isMobileMin) {
      var _refFilter$current, _refFilter$current$ha;

      (_refFilter$current = refFilter.current) == null ? void 0 : (_refFilter$current$ha = _refFilter$current.handleSetStyle) == null ? void 0 : _refFilter$current$ha.call(_refFilter$current, 320);
    }
  }, [isMobileMin, refFilter]);

  const returnRenderIsStickyContent = () => {
    const result = isStickyContent; // if (!pillLength && !categorySelected) {
    //   result = false;
    // }

    return result;
  };

  const ArrowSlide = ({
    children,
    sx,
    disabled,
    funcClick
  }) => {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      onClick: e => funcClick(e),
      sx: (0, _extends2.default)({
        width: '62px',
        height: '62px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: disabled ? _colors.default.otherColor.alabaster : _colors.default.neutral.neutral7,
        borderRadius: '100%',
        pointerEvents: 'auto',
        cursor: 'pointer'
      }, sx, {
        '&:hover': {
          '& path': {
            stroke: disabled ? _colors.default.otherColor.quickSilver : _colors.default.primary.bandaiNamcoRed
          }
        },
        '& svg': {
          height: '10px',
          pointerEvents: 'none',
          '& path': {
            stroke: disabled ? _colors.default.otherColor.quickSilver : _colors.default.primary.bandaiNamcoBlack
          }
        }
      }),
      children: children
    });
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      width: "100%",
      pointerEvents: "auto"
    },
    ref: refWrapperContainer,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        width: '100%',
        maxHeight: "100%",
        display: "flex",
        flexDirection: "column",
        zIndex: 1001,
        overflow: "hidden",
        backgroundColor: _colors.default.primary.bandaiNamcoWhite
      },
      ref: refContentFilter,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
        sx: {
          zIndex: "10"
        },
        ref: refContainer,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "h1",
          sx: {
            letterSpacing: {
              xs: '-0.4px',
              md: '-1px'
            },
            marginBottom: {
              xs: "16px",
              md: "28px"
            }
          },
          children: title
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          height: '46px',
          marginBottom: {
            xs: '28px',
            md: '48px'
          },
          paddingLeft: `${paddingScrollContent}px`
        },
        ref: refWrapperPills,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            height: "100%",
            padding: returnRenderIsStickyContent() ? "32px 0px" : "0px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: _colors.default.primary.bandaiNamcoWhite
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              display: "flex",
              width: "100%",
              "& .swiper": {
                width: "100%",
                height: "100%"
              },
              "& .swiper-container": {
                width: "100%",
                height: "100%",
                overflow: "hidden !important",
                marginLeft: "0px",
                transition: "all 0.5s"
              },
              "& .swiper-slide": {
                width: "auto !important",
                "& p": {
                  height: {
                    xs: "21px",
                    md: "20px"
                  }
                },
                "&:last-child": {
                  margin: "0px !important"
                }
              }
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              onClick: () => {
                handleShowSideBarFilter();
                refValueFilterSidebar.current = (0, _lodash.cloneDeep)(dataFilterSidebar);
              },
              sx: {
                cursor: 'pointer',
                marginRight: "12px"
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pills.default, {
                active: backDrop,
                numberFilter: pillLength,
                iconMobile: true,
                ref: refPillSidebar
              })
            }), isDesktop && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react2.Swiper, {
              slidesPerView: "auto",
              spaceBetween: 12,
              freeMode: true,
              observer: true,
              initialSlide: initialSlide,
              resizeObserver: true,
              onTransitionEnd: e => {
                if (refTimeout.current) {
                  window.clearTimeout(refTimeout.current);
                }

                refTimeout.current = setTimeout(() => {
                  setInitialSlide(e.activeIndex);
                  handelDestroySwiper();
                  handelChangeHandlerSwiper((e == null ? void 0 : e.isEnd) || false);
                }, 200);
              },
              className: "mySwiper",
              children: [dataFilterSidebar.map((pill, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pills.default, {
                  label: pill.title,
                  active: pill.isChecked,
                  triggerClick: label => {
                    handleClick(label, index);
                  }
                }, index)
              })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                  sx: {
                    width: `${paddingScrollContent - 12}px`,
                    height: "100%",
                    opacity: "0"
                  },
                  className: "last-child-item"
                })
              })]
            }), !isDesktop && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                display: "flex"
              },
              children: dataFilterSidebar.map((pill, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                sx: {
                  marginRight: "12px"
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pills.default, {
                  label: pill.title,
                  active: pill.isChecked,
                  triggerClick: label => {
                    handleClick(label, index);
                  }
                }, index)
              }))
            })]
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          position: 'relative',
          display: "flex",
          width: "100%",
          justifyContent: "center",
          overflowX: "hidden"
        },
        children: [!isMobile && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container.default, {
          sx: {
            opacity: '0',
            transition: 'all .4s',
            display: 'flex',
            alignItems: 'center',
            position: 'absolute',
            width: '100%',
            height: '0px',
            top: '50%',
            justifyContent: 'space-between',
            transform: "all 0.3s",
            zIndex: "10"
          },
          ref: arrowsContainer,
          onMouseEnter: () => {
            if (arrowsContainer != null && arrowsContainer.current) {
              arrowsContainer.current.style.opacity = "1";
            }
          },
          onMouseLeave: () => {
            if (arrowsContainer != null && arrowsContainer.current) {
              arrowsContainer.current.style.opacity = "0";
            }
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(ArrowSlide, {
            disabled: disableArrowLeft,
            funcClick: previous,
            sx: {
              marginLeft: "12px"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconPrevSlide, {
              htmlColor: "transparent",
              sx: {
                height: '10px'
              }
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ArrowSlide, {
            disabled: disableArrowRight,
            funcClick: next,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconNextSlide, {
              htmlColor: "transparent",
              sx: {
                height: '10px'
              }
            })
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            minHeight: {
              xs: "72px",
              md: "150px"
            },
            zIndex: "8"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              display: "flex",
              flexWrap: "nowrap",
              height: "100%",
              overflowX: "auto",
              paddingLeft: `${paddingScrollContent}px`,
              scrollbarWidth: "none",
              "&::-webkit-scrollbar": {
                display: "none"
              },
              '& img': {
                height: '100%',
                objectFit: 'cover'
              },
              "-webkit-touch-callout": "none",
              "-webkit-user-select": "none",
              "-khtml-user-select": "none",
              "-moz-user-select": "-moz-none",
              "-o-user-select": "none",
              userSelect: "none"
            },
            ref: refWrapperContent,
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
              sx: {
                display: "flex",
                width: "100%",
                height: "100%",
                flexWrap: "nowrap",
                "-webkit-touch-callout": "none",
                "-webkit-user-select": "none",
                "-khtml-user-select": "none",
                "-moz-user-select": "-moz-none",
                "-o-user-select": "none",
                userSelect: "none"
              },
              onMouseEnter: () => {
                if (arrowsContainer != null && arrowsContainer.current) {
                  arrowsContainer.current.style.opacity = "1";
                }
              },
              onMouseLeave: () => {
                if (arrowsContainer != null && arrowsContainer.current) {
                  arrowsContainer.current.style.opacity = "0";
                }
              },
              children: [categories == null ? void 0 : categories.map((item, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                sx: {
                  paddingRight: {
                    xs: '8px',
                    md: '24px'
                  },
                  '& p': {
                    fontSize: {
                      xs: '12px',
                      md: '20px'
                    },
                    lineHeight: {
                      xs: '18px',
                      md: '26px'
                    }
                  },
                  "-webkit-touch-callout": "none",
                  "-webkit-user-select": "none",
                  "-khtml-user-select": "none",
                  "-moz-user-select": "-moz-none",
                  "-o-user-select": "none",
                  userSelect: "none"
                },
                ref: refItemContent,
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                  onClick: () => handleActiveCategory(item.title, index),
                  ref: el => {
                    if (el !== null) {
                      categoryRef.current[index] = el;
                    }
                  },
                  sx: {
                    position: "relative",
                    padding: {
                      xs: "4px 0px",
                      md: "8px 0px"
                    },
                    borderRadius: {
                      xs: "10px",
                      md: "20px"
                    },
                    cursor: "pointer",
                    "&:hover": {
                      "& .style-Categories": {
                        backgroundSize: "120%"
                      }
                    },
                    "& .style-Categories": {
                      backgroundSize: item.title === categorySelected ? "120%" : "110%"
                    },
                    "&::after": {
                      content: "' '",
                      position: "absolute",
                      borderRadius: {
                        xs: "10px",
                        md: "20px"
                      },
                      top: "0px",
                      left: {
                        xs: "-4px",
                        md: "-8px"
                      },
                      width: {
                        xs: "calc(100% + 8px)",
                        md: "calc(100% + 16px)"
                      },
                      height: "100%",
                      border: `1px solid ${item.title === categorySelected ? _colors.default.secondary.bandaiNamcoBlue : "transparent"}`
                    }
                  },
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(Categories, (0, _extends2.default)({}, item, {
                    isShowImageNext: false
                  }))
                })
              }, item.title)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                sx: {
                  display: 'flex',
                  width: "0px",
                  height: "0px",
                  opacity: "0"
                },
                ref: refLastChild
              })]
            })
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          backgroundColor: _colors.default.primary.bandaiNamcoWhite,
          position: "fixed",
          top: returnRenderIsStickyContent() ? "0px" : "-172px",
          display: "inline-block",
          // height: {
          //   xs: "164px",
          //   md: "172px"
          // },
          width: "100%",
          transition: "all 0.3s",
          overflow: "hidden",
          zIndex: "1001"
        },
        ref: refContentFilterSticker,
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            height: "100%",
            padding: returnRenderIsStickyContent() ? "32px 0px" : "0px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: _colors.default.primary.bandaiNamcoWhite,
            paddingLeft: `${paddingScrollContent}px`
          },
          ref: refWrapperContentSticker,
          children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              display: "flex",
              width: "100%",
              "& .swiper": {
                width: "100%",
                height: "100%"
              },
              "& .swiper-container": {
                width: "100%",
                height: "100%",
                overflow: "hidden !important",
                transition: "all 0.5s",
                marginLeft: "0px"
              },
              "& .swiper-slide": {
                width: "auto !important",
                "& p": {
                  height: {
                    xs: "21px",
                    md: "20px"
                  }
                },
                "&:last-child": {
                  margin: "0px !important"
                }
              }
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              onClick: () => handleShowSideBarFilter(),
              sx: {
                cursor: 'pointer',
                marginRight: "12px"
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pills.default, {
                active: backDrop,
                numberFilter: pillLength,
                iconMobile: true,
                ref: refPillSidebar
              })
            }), isStickyContent && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react2.Swiper, {
              slidesPerView: "auto",
              spaceBetween: 12,
              freeMode: true,
              observer: true,
              initialSlide: initialSlide,
              resizeObserver: true,
              onTransitionEnd: e => {
                if (refTimeout.current) {
                  window.clearTimeout(refTimeout.current);
                }

                refTimeout.current = setTimeout(() => {
                  setInitialSlide(e.activeIndex);
                  handelDestroySwiper();
                  handelChangeHandlerSwiper((e == null ? void 0 : e.isEnd) || false);
                }, 200);
              },
              className: "mySwiper",
              children: [dataFilterSidebar.map((pill, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pills.default, {
                  label: pill.title,
                  active: pill.isChecked,
                  triggerClick: label => handleClick(label, index)
                }, index)
              })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                  sx: {
                    width: `${paddingScrollContent - 12}px`,
                    height: "100%",
                    opacity: "0"
                  },
                  className: "last-child-item"
                })
              })]
            })]
          }), returnRenderIsStickyContent() && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              display: 'flex',
              gap: '12px',
              marginTop: {
                xs: '8px',
                md: '16px'
              }
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                width: '100%',
                display: "block",
                "& .swiper": {
                  width: "100%",
                  height: "100%"
                },
                "& .swiper-container": {
                  width: "100%",
                  height: "100%",
                  overflow: "hidden !important",
                  transition: "all 0.3s",
                  marginLeft: "0px !important"
                },
                "& .swiper-slide": {
                  width: "auto !important",
                  "& p": {
                    height: {
                      xs: "21px",
                      md: "20px"
                    }
                  },
                  "&:last-child": {
                    margin: "0px !important"
                  }
                }
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react2.Swiper, {
                slidesPerView: "auto",
                spaceBetween: 12,
                freeMode: true,
                observer: true,
                className: "mySwiper",
                children: [categories == null ? void 0 : categories.map((category, index) => {
                  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
                    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pills.default, {
                      label: category.title,
                      active: category.title === categorySelected,
                      triggerClick: label => {
                        handleActiveCategory(label, index);
                      }
                    }, index)
                  });
                }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                    sx: {
                      width: `${paddingScrollContent - 12}px`,
                      height: "100%",
                      opacity: "0"
                    },
                    className: "last-child-item"
                  })
                })]
              })
            })
          })]
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: ' rgba(0,0,0,0.5)',
          opacity: backDrop ? '1' : '0',
          transition: 'all 0.3s  z-index 0.01s ',
          zIndex: backDrop ? '1002' : '-1'
        },
        onClick: () => {
          setBackDrop(false);

          if (!(0, _lodash.isEqual)(refValueFilterSidebar.current, dataFilterSidebar)) {
            setDataFilterSidebar(refValueFilterSidebar.current);
            handleCountSelected(refValueFilterSidebar.current);
          }
        }
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          position: 'fixed',
          top: isMobileMin ? 'auto' : 0,
          borderRadius: isMobileMin ? "20px 20px 0px 0px" : '0px',
          height: isMobileMin ? "474px" : "auto",
          padding: isMobileMin ? '16px 32px 32px 32px' : '64px 32px 32px 32px',
          right: returnValueRight(),
          maxWidth: isMobileMin ? '100%' : '375px',
          width: '100%',
          zIndex: '10002',
          transition: 'all .4s',
          backgroundColor: _colors.default.primary.bandaiNamcoWhite,
          bottom: returnValueBottom()
        },
        children: [!isMobileMin && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            position: "absolute",
            top: "24px",
            right: "24px",
            cursor: "pointer"
          },
          onClick: () => setBackDrop(false),
          children: _IconClose || (_IconClose = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconClose, {}))
        }), isMobileMin && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            width: "100%",
            height: "28px",
            display: "flex",
            justifyContent: "center"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              width: "48px",
              height: "100%"
            },
            onPointerDown: handleOnPointerDown,
            onPointerMove: handleOnPointerMove,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                width: "100%",
                height: "4px",
                background: _colors.default.neutral.neutral5,
                borderRadius: "15px"
              }
            })
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(FilterSelectionListing, {
          ref: refFilter,
          dataDefault: dataFilterSidebar,
          onChange: e => handleFilterInMenu(e),
          toggleDisplayListSub: false
        }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            position: isMobileMin ? 'fixed' : 'absolute',
            bottom: isMobileMin ? '44px' : '32px',
            display: 'flex',
            justifyContent: 'center',
            opacity: backDrop ? 1 : 0,
            transition: 'opacity 0.2s linear',
            left: 0,
            right: 0
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, buttonPropsClear, {
            onClick: () => {
              handleResetFilter();
            },
            label: `${(_buttonPropsClear$lab = buttonPropsClear == null ? void 0 : buttonPropsClear.label) != null ? _buttonPropsClear$lab : 'Clear'} ${pillLength > 0 ? `(${pillLength})` : ""}`,
            disabled: !pillLength,
            sx: {
              width: '152px',
              marginRight: '4px'
            }
          })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, buttonPropsDone, {
            label: `${(_buttonPropsDone$labe = buttonPropsDone == null ? void 0 : buttonPropsDone.label) != null ? _buttonPropsDone$labe : 'Done'}`,
            onClick: () => {
              handleReturnValueFilter(dataFilterSidebar);
              setBackDrop(false);
            },
            sx: {
              width: '152px',
              marginLeft: '4px'
            }
          }))]
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          backgroundColor: _colors.default.primary.bandaiNamcoWhite,
          position: "fixed",
          top: {
            xs: returnRenderIsStickyContent() ? "0px" : "-164px",
            md: returnRenderIsStickyContent() ? "0px" : "-172px"
          },
          left: "0px",
          display: "flex",
          // height: {
          //   xs: "164px",
          //   md: "172px"
          // },
          minWidth: "100vw",
          width: "100%",
          transition: "all 0.3s",
          boxShadow: returnRenderIsStickyContent() ? "0px 7px 17px rgba(0, 0, 0, 0.2)" : "none",
          zIndex: 1000
        },
        ref: refBackdropFilterDesktop
      })
    })]
  });
};

var _default = ScrollingNewsFilter;
exports.default = _default;
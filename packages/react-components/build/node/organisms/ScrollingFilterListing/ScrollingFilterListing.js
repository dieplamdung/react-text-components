"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireWildcard(require("react"));

var _styles = require("@mui/styles");

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Pills = _interopRequireDefault(require("../../atoms/Pills"));

var _material = require("@mui/material");

var _Button = _interopRequireDefault(require("../../atoms/Button"));

var _lodash = require("lodash");

var _react2 = require("swiper/react");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _FilterSelectionListing = _interopRequireDefault(require("../../molecules/FilterSelectionListing"));

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _Icon = require("../../atoms/Icon");

var _disableScrollBody = require("../../utils/disableScrollBody");

var _jsxRuntime = require("react/jsx-runtime");

var _IconClose;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// define function
const ScrollingScrollingFilterListing = props => {
  var _valueFilter$, _valueFilter$$dataFil, _valueFilter$2, _valueFilter$2$dataFi, _valueFilter$3, _valueFilter$3$dataFi, _valueFilter$4, _valueFilter$4$dataFi, _valueFilter$5, _valueFilter$5$dataFi, _valueFilter$6, _valueFilter$6$dataFi, _buttonPropsClear$lab;

  const {
    title,
    sortByText,
    filterByText,
    showMoreText,
    showLessText,
    dataFilter,
    buttonPropsDone,
    buttonPropsClear,
    sortBy,
    onFilter,
    defaultTags = []
  } = props;
  const theme = (0, _styles.useTheme)();
  const isMobile = (0, _material.useMediaQuery)(theme.breakpoints.down('md'));
  const isTablet = (0, _material.useMediaQuery)(theme.breakpoints.down('lg'));
  const isDesktop = (0, _material.useMediaQuery)(theme.breakpoints.down('xl'));
  const [valueSort, setValueSort] = (0, _react.useState)([...sortBy]);
  const [backDrop, setBackDrop] = (0, _react.useState)(false);
  const [valueFilter, setValueFilter] = (0, _react.useState)(dataFilter);
  const [lengthFilter, setLengthFilter] = (0, _react.useState)(0);
  const [isStickyContent, setIsStickyContent] = (0, _react.useState)(false);
  const refPillSidebar = (0, _react.useRef)(null);
  const [paddingScrollContent, setPaddingScrollContent] = (0, _react.useState)(0);
  const [initialSlide, setInitialSlide] = (0, _react.useState)(0);
  const refTimeOut = (0, _react.useRef)();
  const screenY = (0, _react.useRef)();
  const refSticky = (0, _react.useRef)(false);
  const refValueFilter = (0, _react.useRef)();
  const refWrapperContainer = (0, _react.useRef)();
  const refContainer = (0, _react.useRef)();
  const refWrapperContent = (0, _react.useRef)();
  const refWrapperContentSticker = (0, _react.useRef)();
  const refContentFilterSticker = (0, _react.useRef)();
  const refBackdropFilterDesktop = (0, _react.useRef)();
  const refIsEnd = (0, _react.useRef)(false);
  const refScrollTop = (0, _react.useRef)(0); // const [loading, setLoading] = React.useState(false);
  // const [numberSkip, setNumberSkip] = React.useState<number>(0);
  // const [totalItem, setTotalItem] = React.useState<number>(1);
  // const [itemData, setItemData] = React.useState<any[]>([]);

  const LIST_FILTER = ["PlayStation 4", "Nintendo Switch", "PC", "Action", "Adventure", "Role playing (RPG)"];
  (0, _react.useEffect)(() => {
    if (!!(defaultTags != null && defaultTags.length) && !!(dataFilter != null && dataFilter.length)) {
      let countFilter = 0;
      const newDataFilter = dataFilter.map(item => {
        var _item$dataFilter;

        if (item != null && (_item$dataFilter = item.dataFilter) != null && _item$dataFilter.length) {
          item == null ? void 0 : item.dataFilter.map((itemFilter, index) => {
            if (defaultTags.includes(itemFilter.name)) {
              item.dataFilter[index].isChecked = true;
              countFilter += 1;
            }

            return null;
          });
        }

        return (0, _extends2.default)({}, item);
      });
      setLengthFilter(countFilter);
      setValueFilter(newDataFilter);
      return;
    }

    setValueFilter(dataFilter);
  }, [dataFilter, defaultTags]);
  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      setPaddingScrollContent(refContainer.current.offsetLeft + 24);
    }
  }, [backDrop, isMobile, isTablet, isDesktop]); // handle listing event scroll set  Sticky menu and set position item fillter

  (0, _react.useEffect)(() => {
    const contentFilter = refWrapperContent.current;

    if (contentFilter && typeof window !== "undefined") {
      const {
        top
      } = contentFilter.getBoundingClientRect();
      const positionTopContentFilter = top + window.scrollY;
      window.addEventListener("scroll", () => {
        const heightComponent = isMobile ? 101 : 135;

        if (positionTopContentFilter + heightComponent <= window.scrollY && !refSticky.current) {
          refSticky.current = true;
          setIsStickyContent(true);
          refScrollTop.current = window.scrollY;
        }

        if (positionTopContentFilter + heightComponent > window.scrollY && refSticky.current) {
          refSticky.current = false;
          setIsStickyContent(false);
        }
      });
      window.addEventListener("resize", () => {
        // set padding left when window resize
        if (refWrapperContainer.current) {
          const lastChild = refWrapperContainer.current.querySelector(".last-child-item");

          if (lastChild) {
            lastChild.style.width = `${refContainer.current.offsetLeft + 12}px`;
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
        }

        if (refWrapperContent.current) {
          refWrapperContent.current.style.paddingLeft = `${refContainer.current.offsetLeft + 24}px`;
        }

        if (refWrapperContentSticker.current) {
          refWrapperContentSticker.current.style.paddingLeft = `${refContainer.current.offsetLeft + 24}px`;
        }
      });
    }

    return () => {
      window.removeEventListener("scroll", () => {});
      window.removeEventListener("resize", () => {});
      window.clearTimeout(refTimeOut.current);
    };
  }, [isMobile]); // handel listing event scroll set Hide sub nav and show main nav when user scroll up.

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const heightTop = "-150px";

      if (refSticky.current) {
        const content = refContentFilterSticker.current;
        const backdrop = refBackdropFilterDesktop.current;

        if (content && backdrop) {
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
    if (!refIsEnd.current && !!e) {
      var _refWrapperContainer$3;

      refIsEnd.current = e.isEnd;
      const listSwiper = refWrapperContainer == null ? void 0 : (_refWrapperContainer$3 = refWrapperContainer.current) == null ? void 0 : _refWrapperContainer$3.querySelectorAll(".mySwiper");

      if (listSwiper != null && listSwiper.length) {
        listSwiper.forEach(element => {
          var _element$swiper5, _element$swiper5$obse, _element$swiper5$obse2;

          element == null ? void 0 : (_element$swiper5 = element.swiper) == null ? void 0 : (_element$swiper5$obse = _element$swiper5.observer) == null ? void 0 : (_element$swiper5$obse2 = _element$swiper5$obse.destroy) == null ? void 0 : _element$swiper5$obse2.call(_element$swiper5$obse);
        });
      }
    }
  };

  (0, _react.useEffect)(() => {
    let time = 0;

    if (typeof window !== "undefined") {
      time = setTimeout(() => {
        handelDestroySwiper();
      }, 300);
    }

    return () => {
      window.clearTimeout(time);
    };
  }, [isStickyContent, lengthFilter, isMobile, isTablet, isDesktop]); // unable to scroll when filter open

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      (0, _disableScrollBody.disableScrollBody)(backDrop);

      if (backDrop && refSticky.current) {
        setIsStickyContent(false);
      }

      if (!backDrop && refSticky.current) {
        setIsStickyContent(true);
      }
    }
  }, [backDrop]);

  const handleCountSelectedFilterAll = listFilter => {
    const newValueFilter = [...listFilter];
    let totalCount = 0;
    newValueFilter.map((filterItem, index) => {
      let count = 0;
      filterItem == null ? void 0 : filterItem.dataFilter.map(filter => {
        if (filter.isChecked) {
          count += 1;
          totalCount += 1;
        }

        return filter;
      });
      newValueFilter[index].countSelect = count;
      return filterItem;
    });
    setValueFilter(newValueFilter);
    setLengthFilter(totalCount);
  };

  const handleGetListParamFilter = listFilter => {
    const result = {};
    listFilter.map(filterItem => {
      const filter = [];
      filterItem == null ? void 0 : filterItem.dataFilter.map(item => {
        if (item.isChecked) {
          filter.push(item.name);
        }

        return null;
      });

      if (filter.length) {
        result[filterItem.value || filterItem.title] = filter;
      }

      return null;
    });
    return result;
  };

  const handleClick = (index, name) => {
    var _valueFilter$index, _valueSort$find;

    setIsStickyContent(false);
    refSticky.current = false;
    (_valueFilter$index = valueFilter[index]) == null ? void 0 : _valueFilter$index.dataFilter.map(filter => {
      if (filter.name === name) {
        filter.isChecked = !filter.isChecked;
      }

      return null;
    });
    const newValueFilter = [...valueFilter];
    handleCountSelectedFilterAll(newValueFilter); // call api

    const paramFilter = handleGetListParamFilter(newValueFilter);
    const paramSort = (_valueSort$find = valueSort.find(sort => sort.isChecked === true)) == null ? void 0 : _valueSort$find.name;
    onFilter == null ? void 0 : onFilter(paramFilter, paramSort);
  };
  /**
   * Handle show filter side bar
   */


  const handleShowSideBarFilter = () => {
    setBackDrop(!backDrop);
    refValueFilter.current = (0, _lodash.cloneDeep)(valueFilter);
  };

  const handleResetSort = () => {
    const newValueSort = valueSort.map((sort, index) => {
      if (index === 0) {
        sort.isChecked = true;
        return (0, _extends2.default)({}, sort);
      }

      sort.isChecked = false;
      return (0, _extends2.default)({}, sort);
    });
    setValueSort(newValueSort);
  };

  const handleResetFilter = () => {
    setValueSort([...sortBy]);
    const newValueFilter = [...valueFilter];
    newValueFilter.map(filterItem => {
      filterItem == null ? void 0 : filterItem.dataFilter.map(filter => {
        filter.isChecked = false;
        return null;
      });
      return null;
    });
    handleCountSelectedFilterAll(newValueFilter);
    handleResetSort();
  };

  const handleCountFilter = (value, index) => {
    const newValueFilter = [...valueFilter];
    newValueFilter[index].dataFilter = value;
    handleCountSelectedFilterAll(newValueFilter);
  };

  const handleConfirmFilter = () => {
    var _valueSort$find2;

    setIsStickyContent(false);
    setBackDrop(false);
    refSticky.current = false;
    const paramFilter = handleGetListParamFilter(valueFilter);
    const paramSort = (_valueSort$find2 = valueSort.find(sort => sort.isChecked === true)) == null ? void 0 : _valueSort$find2.name; // call api

    onFilter == null ? void 0 : onFilter(paramFilter, paramSort);
  };

  const handleShowMore = (value, index) => {
    const newValueFilter = [...valueFilter];
    newValueFilter[index].showMore = value;
    setValueFilter(newValueFilter);
  };

  const returnValueBottom = () => {
    if (isMobile && backDrop) {
      return 0;
    }

    if (isMobile) {
      return "-474px";
    }

    return 0;
  };

  const returnValueRight = () => {
    if (isMobile || backDrop) {
      return 0;
    }

    return '-500px';
  };

  const returnRenderIsStickyContent = () => {
    const result = isStickyContent; // if (!lengthFilter) {
    //   result = false;
    // }

    return result;
  }; // handle check filter not click done.


  const handleCloseFilter = () => {
    const hadEqual = (0, _lodash.isEqual)(valueFilter, refValueFilter.current);

    if (!hadEqual) {
      handleCountSelectedFilterAll(refValueFilter.current);
    }
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
        handleCloseFilter();
      }
    }, 150);
  };

  const handleOnPointerDown = e => {
    screenY.current = e.screenY;
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      width: "100%",
      pointerEvents: "auto"
    },
    ref: refWrapperContainer,
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
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        height: '46px',
        paddingLeft: `${paddingScrollContent}px`
      },
      ref: refWrapperContent,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          height: "100%",
          padding: returnRenderIsStickyContent() ? "32px 0px" : "0px",
          display: "flex",
          flexDirection: "column",
          backgroundColor: _colors.default.primary.bandaiNamcoWhite
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
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
              overflow: "hidden !!important",
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
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            onClick: () => handleShowSideBarFilter(),
            sx: {
              cursor: 'pointer',
              marginRight: "12px"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pills.default, {
              active: backDrop,
              numberFilter: lengthFilter,
              iconMobile: true,
              ref: refPillSidebar
            })
          }), isDesktop && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react2.Swiper, {
            slidesPerView: "auto",
            spaceBetween: 12,
            freeMode: true,
            observer: true,
            resizeObserver: true,
            initialSlide: initialSlide,
            onTransitionEnd: e => {
              if (refTimeOut.current) {
                window.clearTimeout(refTimeOut.current);
              }

              refTimeOut.current = setTimeout(() => {
                handelChangeHandlerSwiper((e == null ? void 0 : e.isEnd) || false);
                setInitialSlide(e.activeIndex);
              }, 100);
            },
            className: "mySwiper",
            children: [valueFilter == null ? void 0 : (_valueFilter$ = valueFilter[0]) == null ? void 0 : (_valueFilter$$dataFil = _valueFilter$.dataFilter) == null ? void 0 : _valueFilter$$dataFil.filter(item => LIST_FILTER.includes(item.name)).map((data, index) => {
              const newPill = {
                label: data.title,
                triggerClick: () => {
                  handleClick(0, data.name);
                },
                active: data.isChecked
              };
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pills.default, (0, _extends2.default)({}, newPill))
              }, index);
            }), valueFilter == null ? void 0 : (_valueFilter$2 = valueFilter[1]) == null ? void 0 : (_valueFilter$2$dataFi = _valueFilter$2.dataFilter) == null ? void 0 : _valueFilter$2$dataFi.filter(item => LIST_FILTER.includes(item.name)).map((data, index) => {
              const newPill = {
                label: data.title,
                triggerClick: () => {
                  handleClick(1, data.name);
                },
                active: data.isChecked
              };
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pills.default, (0, _extends2.default)({}, newPill))
              }, index);
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
                sx: {
                  width: `${paddingScrollContent - 12}px`,
                  height: "100%",
                  opacity: "0"
                },
                className: "last-child-item"
              })
            })]
          }), !isDesktop && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
            sx: {
              display: "flex"
            },
            children: [valueFilter == null ? void 0 : (_valueFilter$3 = valueFilter[0]) == null ? void 0 : (_valueFilter$3$dataFi = _valueFilter$3.dataFilter) == null ? void 0 : _valueFilter$3$dataFi.filter(item => LIST_FILTER.includes(item.name)).map((data, index) => {
              const newPill = {
                label: data.title,
                triggerClick: () => {
                  handleClick(0, data.name);
                },
                active: data.isChecked
              };
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
                sx: {
                  marginRight: "12px"
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pills.default, (0, _extends2.default)({}, newPill))
              }, index);
            }), valueFilter == null ? void 0 : (_valueFilter$4 = valueFilter[1]) == null ? void 0 : (_valueFilter$4$dataFi = _valueFilter$4.dataFilter) == null ? void 0 : _valueFilter$4$dataFi.filter(item => LIST_FILTER.includes(item.name)).map((data, index) => {
              const newPill = {
                label: data.title,
                triggerClick: () => {
                  handleClick(1, data.name);
                },
                active: data.isChecked
              };
              return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
                sx: {
                  marginRight: "12px"
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pills.default, (0, _extends2.default)({}, newPill))
              }, index);
            })]
          })]
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        backgroundColor: _colors.default.primary.bandaiNamcoWhite,
        position: "fixed",
        top: returnRenderIsStickyContent() ? "0px" : `-150px`,
        display: "inline-block",
        height: {
          xs: `106px`,
          md: `110px`
        },
        width: "100%",
        transition: "all 0.3s",
        overflow: "hidden",
        zIndex: "1001"
      },
      ref: refContentFilterSticker,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          height: '46px',
          marginBottom: {
            xs: '28px',
            md: '56px'
          },
          paddingLeft: `${paddingScrollContent}px`
        },
        ref: refWrapperContentSticker,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          sx: {
            height: "100%",
            padding: "32px 0px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: _colors.default.primary.bandaiNamcoWhite
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
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
                overflow: "hidden !!important",
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
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
              onClick: () => handleShowSideBarFilter(),
              sx: {
                cursor: 'pointer',
                marginRight: "12px"
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pills.default, {
                active: backDrop,
                numberFilter: lengthFilter,
                iconMobile: true,
                ref: refPillSidebar
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_react2.Swiper, {
              slidesPerView: "auto",
              spaceBetween: 12,
              freeMode: true,
              observer: true,
              resizeObserver: true,
              observeSlideChildren: true,
              initialSlide: initialSlide,
              onTransitionEnd: e => {
                if (refTimeOut.current) {
                  window.clearTimeout(refTimeOut.current);
                }

                refTimeOut.current = setTimeout(() => {
                  setInitialSlide(e.activeIndex);
                  handelChangeHandlerSwiper((e == null ? void 0 : e.isEnd) || false);
                }, 100);
              },
              className: "mySwiper",
              children: [valueFilter == null ? void 0 : (_valueFilter$5 = valueFilter[0]) == null ? void 0 : (_valueFilter$5$dataFi = _valueFilter$5.dataFilter) == null ? void 0 : _valueFilter$5$dataFi.filter(item => LIST_FILTER.includes(item.name)).map((data, index) => {
                const newPill = {
                  label: data.title,
                  triggerClick: () => {
                    handleClick(0, data.name);
                  },
                  active: data.isChecked
                };
                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pills.default, (0, _extends2.default)({}, newPill))
                }, index);
              }), valueFilter == null ? void 0 : (_valueFilter$6 = valueFilter[1]) == null ? void 0 : (_valueFilter$6$dataFi = _valueFilter$6.dataFilter) == null ? void 0 : _valueFilter$6$dataFi.filter(item => LIST_FILTER.includes(item.name)).map((data, index) => {
                const newPill = {
                  label: data.title,
                  triggerClick: () => {
                    handleClick(1, data.name);
                  },
                  active: data.isChecked
                };
                return /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
                  children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pills.default, (0, _extends2.default)({}, newPill))
                }, index);
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
                  sx: {
                    width: `${paddingScrollContent - 12}px`,
                    height: "100%",
                    opacity: "0"
                  },
                  className: "last-child-item"
                })
              })]
            })]
          })
        })
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
        handleCloseFilter();
      }
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        position: 'fixed',
        top: isMobile ? 'auto' : 0,
        borderRadius: isMobile ? "20px 20px 0px 0px" : '0px',
        height: isMobile ? "474px" : "100vh",
        right: returnValueRight(),
        maxWidth: isMobile ? '100%' : '495px',
        width: '100%',
        zIndex: '10002',
        transition: 'all .4s',
        backgroundColor: _colors.default.primary.bandaiNamcoWhite,
        bottom: returnValueBottom()
      },
      children: [!isMobile && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          position: "absolute",
          top: "24px",
          right: "24px",
          cursor: "pointer",
          '& svg': {
            '& path': {
              stroke: '#C1C1C1'
            }
          }
        },
        onClick: () => setBackDrop(false),
        children: _IconClose || (_IconClose = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconClose, {}))
      }), isMobile && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
        sx: {
          width: "100%",
          height: "44px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
          sx: {
            width: "48px"
          },
          onPointerDown: handleOnPointerDown,
          onPointerMove: handleOnPointerMove,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            sx: {
              width: "100%",
              height: "4px",
              background: _colors.default.neutral.neutral5,
              borderRadius: "15px"
            }
          })
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        sx: {
          display: "flex",
          flexDirection: "column",
          position: "absolute",
          top: isMobile ? "44px" : "38px",
          left: "0px",
          right: "0px",
          bottom: "110px",
          width: "100%",
          padding: isMobile ? '0px 32px 0px 32px' : '0px 56px 0px 56px',
          overflowX: "auto",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
          sx: {
            width: "100%",
            paddingBottom: {
              xs: "14px",
              md: "32px"
            },
            marginBottom: {
              xs: "18px",
              md: "32px"
            },
            borderBottom: "1px solid",
            borderColor: {
              xs: _colors.default.primary.bandaiNamcoWhite,
              md: "rgb(77 77 77 / 50%)"
            }
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p8",
            sx: {
              marginBottom: {
                xs: "20px",
                md: "24px"
              },
              fontSize: {
                xs: "12px",
                md: "18px"
              },
              color: _colors.default.neutral.neutral2,
              fontWeight: "600",
              letterSpacing: "-0.2px"
            },
            children: sortByText
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilterSelectionListing.default, {
            dataDefault: valueSort,
            onChange: setValueSort,
            types: "radio"
          })]
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p8",
          sx: {
            marginBottom: {
              xs: "20px",
              md: "24px"
            },
            fontSize: {
              xs: "12px",
              md: "18px"
            },
            color: _colors.default.neutral.neutral2,
            fontWeight: "600",
            letterSpacing: "-0.2px"
          },
          children: filterByText
        }), valueFilter.map((filter, index) => {
          var _filter$dataFilter;

          return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
            sx: {
              width: "100%",
              paddingBottom: {
                xs: "14px",
                md: "32px"
              },
              marginBottom: {
                xs: "18px",
                md: "32px"
              },
              borderBottom: "1px solid",
              borderColor: {
                xs: _colors.default.primary.bandaiNamcoWhite,
                md: "rgb(77 77 77 / 50%)"
              }
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
              variant: "h4",
              sx: {
                marginBottom: {
                  xs: "20px",
                  md: "24px"
                },
                fontSize: {
                  xs: '20px',
                  md: '22px'
                },
                lineHeight: {
                  xs: '26px',
                  md: '28px'
                },
                color: _colors.default.primary.dark,
                letterSpacing: "-0.4px"
              },
              children: [filter.title, " ", filter.countSelect > 0 && `(${filter.countSelect})`]
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_FilterSelectionListing.default, {
              dataDefault: filter == null ? void 0 : filter.dataFilter,
              onChange: e => handleCountFilter(e, index),
              hadShowMore: true,
              showMore: filter.showMore
            }), ((_filter$dataFilter = filter.dataFilter) == null ? void 0 : _filter$dataFilter.length) > 4 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
              variant: "p5",
              sx: {
                width: "fit-content",
                marginTop: {
                  xs: "20px",
                  md: "32px"
                },
                color: _colors.default.neutral.neutral2,
                fontSize: {
                  xs: "14px",
                  md: "16px"
                },
                lineHeight: {
                  xs: "20px",
                  md: "22px"
                },
                cursor: "pointer",
                position: "relative",
                "&::before": {
                  content: "''",
                  position: "absolute",
                  left: "0px",
                  bottom: "0px",
                  width: "100%",
                  borderBottom: `1px solid ${_colors.default.neutral.neutral2}`
                }
              },
              onClick: () => handleShowMore(!filter.showMore, index),
              children: !filter.showMore ? showMoreText : showLessText
            })]
          }, index);
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        sx: {
          position: isMobile ? 'fixed' : 'absolute',
          height: {
            xs: "110px",
            md: "104px"
          },
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: {
            xs: "center",
            md: "flex-start"
          },
          padding: {
            xs: "0px 32px 0px 32px",
            md: "24px 56px 0px 56px"
          },
          opacity: backDrop ? 1 : 0,
          transition: 'all 0.3s',
          left: 0,
          right: 0,
          bottom: backDrop ? 0 : `${!isMobile ? 0 : "-110px"}`,
          boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.05)"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, buttonPropsClear, {
          disabled: !lengthFilter,
          onClick: () => {
            handleResetFilter(); // handleCallApiGetData(dataSideChecked, 'clear') 
          },
          label: `${(_buttonPropsClear$lab = buttonPropsClear == null ? void 0 : buttonPropsClear.label) != null ? _buttonPropsClear$lab : 'Clear'} ${lengthFilter > 0 ? `(${lengthFilter})` : ""}`,
          sx: {
            width: {
              xs: "calc(50% - 4px)",
              md: "calc(50% - 18px)"
            }
          }
        })), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Button.default, (0, _extends2.default)({}, buttonPropsDone, {
          onClick: () => {
            handleConfirmFilter();
            setBackDrop(false);
          },
          sx: {
            width: {
              xs: "calc(50% - 4px)",
              md: "calc(50% - 18px)"
            }
          }
        }))]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        backgroundColor: _colors.default.primary.bandaiNamcoWhite,
        position: "fixed",
        top: {
          xs: returnRenderIsStickyContent() ? "0px" : `-106px`,
          md: returnRenderIsStickyContent() ? "0px" : `-110px`
        },
        left: "0px",
        display: "flex",
        height: {
          xs: `106px`,
          md: `110px`
        },
        minWidth: "100vw",
        width: "100%",
        transition: "all 0.3s",
        boxShadow: returnRenderIsStickyContent() ? "0px 7px 17px rgba(0, 0, 0, 0.2)" : "none",
        zIndex: 1000
      },
      ref: refBackdropFilterDesktop
    })]
  });
};

var _default = ScrollingScrollingFilterListing;
exports.default = _default;
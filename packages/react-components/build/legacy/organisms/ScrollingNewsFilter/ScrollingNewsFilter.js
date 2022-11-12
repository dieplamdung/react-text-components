import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _typeof from "@babel/runtime/helpers/esm/typeof";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _IconClose;

// import modules
import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { useState, useRef, useEffect } from 'react';
import Typography from "../../atoms/Typography";
import Pills from "../../atoms/Pills"; // import Categories from '~/molecules/Categories'

import Button from "../../atoms/Button";
import { IconNextSlide, IconPrevSlide, IconClose } from "../../atoms/Icon";
import Container from "../../atoms/Container";
import colors from "../../theme/colors";
import { Swiper, SwiperSlide } from "swiper/react";
import { convertCustomTagForFilter } from "../../utils";
import { cloneDeep, isEqual } from 'lodash';
import { disableScrollBody } from "../../utils/disableScrollBody";
import loadable from '@loadable/component';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
var FilterSelectionListing = loadable(function () {
  return import("../../molecules/FilterSelectionListing");
});
var Categories = loadable(function () {
  return import("../../molecules/Categories");
}); // define function

var ScrollingNewsFilter = function ScrollingNewsFilter(props) {
  var _buttonPropsClear$lab, _buttonPropsDone$labe;

  var title = props.title,
      categories = props.categories,
      dataFilter = props.dataFilter,
      buttonPropsDone = props.buttonPropsDone,
      buttonPropsClear = props.buttonPropsClear,
      setDataQueryTags = props.setDataQueryTags,
      setDataQueryGame = props.setDataQueryGame;
  var theme = useTheme();
  var isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  var isMobileMin = useMediaQuery(theme.breakpoints.down('md'));
  var isDesktop = useMediaQuery(theme.breakpoints.down('xl'));

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      backDrop = _useState2[0],
      setBackDrop = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      categorySelected = _useState4[0],
      setCategorySelected = _useState4[1];

  var _useState5 = useState(dataFilter || []),
      _useState6 = _slicedToArray(_useState5, 2),
      dataFilterSidebar = _useState6[0],
      setDataFilterSidebar = _useState6[1];

  var _useState7 = useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      pillLength = _useState8[0],
      setPillLength = _useState8[1]; // const [listPill, setListPill] = useState<Array<PillProps>>(pillProps);
  // const [dataSideChecked, setDataSideChecked] = useState<ListingType[]>([]);


  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isStickyContent = _useState10[0],
      setIsStickyContent = _useState10[1];

  var refFilter = useRef(null);
  var refPillSidebar = useRef(null);
  var categoryRef = useRef([]);
  var refTimeOut = useRef();
  var screenY = useRef();
  var refContentFilter = useRef();
  var refSticky = useRef(false);

  var _useState11 = useState(0),
      _useState12 = _slicedToArray(_useState11, 2),
      paddingScrollContent = _useState12[0],
      setPaddingScrollContent = _useState12[1];

  var refWrapperContainer = useRef();
  var refContainer = useRef();
  var refItemContent = useRef();
  var refWidthItem = useRef();
  var refWrapperContent = useRef();
  var refWrapperContentSticker = useRef();
  var refFullWidthContent = useRef(0);
  var refIsMobile = useRef(isMobileMin);
  var arrowsContainer = useRef();
  var refLastChild = useRef();
  var refTimeout = useRef();
  var refWrapperPills = useRef();

  var _useState13 = useState(false),
      _useState14 = _slicedToArray(_useState13, 2),
      disableArrowRight = _useState14[0],
      setDisableArrowRight = _useState14[1];

  var _useState15 = useState(true),
      _useState16 = _slicedToArray(_useState15, 2),
      disableArrowLeft = _useState16[0],
      setDisableArrowLeft = _useState16[1]; // const [isEnd, setIsEnd] = useState<boolean>(false);


  var _useState17 = useState(0),
      _useState18 = _slicedToArray(_useState17, 2),
      initialSlide = _useState18[0],
      setInitialSlide = _useState18[1];

  var refISEnd = useRef();
  var refValueFilterSidebar = useRef([]);
  var refScrollTop = useRef(0);
  var refContentFilterSticker = useRef();
  var refBackdropFilterDesktop = useRef(); // const [loading, setLoading] = React.useState(false);
  // const [numberSkip, setNumberSkip] = React.useState<number>(0);
  // const [totalItem, setTotalItem] = React.useState<number>(1);
  // const [itemData, setItemData] = React.useState<any[]>([]);
  // Handle call api fetch data

  var handleCallApiGetData = function handleCallApiGetData(dataQuery) {
    setDataQueryTags == null ? void 0 : setDataQueryTags(dataQuery);
    setDataQueryGame == null ? void 0 : setDataQueryGame(categorySelected != null ? categorySelected : '');
  }; // handle return param filter


  var handleReturnValueFilter = function handleReturnValueFilter(listFilter) {
    var result = [];
    listFilter == null ? void 0 : listFilter.map(function (item) {
      var _item$listSub, _item$listSub2;

      if (item.isChecked && !((_item$listSub = item.listSub) != null && _item$listSub.length)) {
        result.push(convertCustomTagForFilter(item.name));
        return null;
      }

      if ((_item$listSub2 = item.listSub) != null && _item$listSub2.length) {
        item.listSub.map(function (itemSub) {
          if (itemSub != null && itemSub.isChecked) {
            result.push(convertCustomTagForFilter(itemSub.name));
          }

          return null;
        });
      }

      return null;
    }); // call api

    handleCallApiGetData(result);
  }; // handle Count item filter


  var handleCountSelected = function handleCountSelected(listFilter) {
    var count = 0;
    listFilter == null ? void 0 : listFilter.map(function (item) {
      var _item$listSub3, _item$listSub4;

      if (!((_item$listSub3 = item.listSub) != null && _item$listSub3.length) && item.isChecked) {
        count += 1;
        return null;
      }

      if ((_item$listSub4 = item.listSub) != null && _item$listSub4.length) {
        item.listSub.map(function (itemSub) {
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

  var handleCheckFilterSub = function handleCheckFilterSub(listFilter) {
    setDataFilterSidebar(listFilter); // handleReturnValueFilter(newListFilter);
  };

  useEffect(function () {
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
  useEffect(function () {
    if (typeof window !== "undefined") {
      var _refContainer$current, _refItemContent$curre;

      var contentFilter = refContentFilter.current;

      if (contentFilter && (typeof window === "undefined" ? "undefined" : _typeof(window)) !== undefined) {
        var _contentFilter$getBou = contentFilter.getBoundingClientRect(),
            top = _contentFilter$getBou.top;

        var positionTopContentFilter = top + window.scrollY;
        window.addEventListener("scroll", function () {
          var heightComponent = isMobileMin ? 200 : 347;

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

      window.addEventListener("resize", function () {
        var _refItemContent$curre2, _refItemContent$curre3;

        if (refWrapperContainer.current) {
          var lastChild = refWrapperContainer.current.querySelector(".last-child-item");

          if (lastChild) {
            lastChild.style.width = "".concat(refContainer.current.offsetLeft + (isMobileMin ? 2 : 12), "px");
          }

          if (refTimeOut.current) {
            window.clearTimeout(refTimeOut.current);
          }

          refTimeOut.current = setTimeout(function () {
            var _refWrapperContainer$;

            refTimeOut.current = undefined;
            var listSwiper = refWrapperContainer == null ? void 0 : (_refWrapperContainer$ = refWrapperContainer.current) == null ? void 0 : _refWrapperContainer$.querySelectorAll(".mySwiper");

            if (listSwiper != null && listSwiper.length) {
              listSwiper.forEach(function (element) {
                var _element$swiper, _element$swiper$obser;

                element == null ? void 0 : (_element$swiper = element.swiper) == null ? void 0 : (_element$swiper$obser = _element$swiper.observer) == null ? void 0 : _element$swiper$obser.destroy();
              });
            }
          }, 200);
        } // set padding left when window resize


        if (refWrapperContent.current) {
          refWrapperContent.current.style.paddingLeft = "".concat(refContainer.current.offsetLeft + 24, "px");
        }

        if (refWrapperContentSticker.current) {
          refWrapperContentSticker.current.style.paddingLeft = "".concat(refContainer.current.offsetLeft + 24, "px");
        }

        if (refWrapperPills.current) {
          refWrapperPills.current.style.paddingLeft = "".concat(refContainer.current.offsetLeft + 24, "px");
        } // set width item


        refWidthItem.current = ((_refItemContent$curre2 = refItemContent.current) == null ? void 0 : _refItemContent$curre2.offsetWidth) + 24; // get full width content scroll

        refFullWidthContent.current = ((_refItemContent$curre3 = refItemContent.current) == null ? void 0 : _refItemContent$curre3.offsetWidth) + 24 + (refWidthItem.current * categories.length || 1);
        refIsMobile.current = isMobileMin;
      });
    }

    return function () {
      window.removeEventListener("scroll", function () {});
      window.removeEventListener("resize", function () {});
    };
  }, [categories, isMobileMin, isDesktop, isMobile]);
  useEffect(function () {
    if (typeof window !== "undefined") {
      var content = refWrapperContent.current;

      if (content) {
        content.addEventListener("scroll", function () {
          var itemLastChild = refLastChild.current.getBoundingClientRect();
          var positionWidth = itemLastChild.x;

          if (!refIsMobile.current) {
            if (refTimeout.current) {
              window.clearTimeout(refTimeout.current);
            }

            refTimeout.current = setTimeout(function () {
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

    return function () {
      window.clearTimeout(refTimeout.current);
    };
  }, [disableArrowRight, disableArrowLeft]);
  useEffect(function () {
    if (typeof window !== "undefined") {
      disableScrollBody(backDrop);
    }
  }, [backDrop]); // handel listing event scroll set Hide sub nav and show main nav when user scroll up.

  useEffect(function () {
    if (typeof window !== "undefined") {
      var heightTop = "-200px";

      if (refSticky.current) {
        var content = refContentFilterSticker.current;
        var backdrop = refBackdropFilterDesktop.current;

        if (content) {
          window.addEventListener("scroll", function () {
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
        window.removeEventListener("scroll", function () {});
      }
    }

    return function () {
      window.removeEventListener("scroll", function () {});
    };
  }, [isStickyContent, isMobile]);

  var handelDestroySwiper = function handelDestroySwiper() {
    var _refWrapperContainer$2;

    var listSwiper = refWrapperContainer == null ? void 0 : (_refWrapperContainer$2 = refWrapperContainer.current) == null ? void 0 : _refWrapperContainer$2.querySelectorAll(".mySwiper");

    if (listSwiper != null && listSwiper.length) {
      listSwiper.forEach(function (element) {
        var _element$swiper2, _element$swiper3, _element$swiper3$obse, _element$swiper3$obse2, _element$swiper4, _element$swiper4$resi, _element$swiper4$resi2;

        element == null ? void 0 : (_element$swiper2 = element.swiper) == null ? void 0 : _element$swiper2.updateSlides();
        element == null ? void 0 : (_element$swiper3 = element.swiper) == null ? void 0 : (_element$swiper3$obse = _element$swiper3.observer) == null ? void 0 : (_element$swiper3$obse2 = _element$swiper3$obse.destroy) == null ? void 0 : _element$swiper3$obse2.call(_element$swiper3$obse);
        element == null ? void 0 : (_element$swiper4 = element.swiper) == null ? void 0 : (_element$swiper4$resi = _element$swiper4.resize) == null ? void 0 : (_element$swiper4$resi2 = _element$swiper4$resi.orientationChangeHandler) == null ? void 0 : _element$swiper4$resi2.call(_element$swiper4$resi);
      });
    }
  };

  var handelChangeHandlerSwiper = function handelChangeHandlerSwiper(e) {
    if (!refISEnd.current && !!e) {
      var _refContentFilter$cur;

      refISEnd.current = e.isEnd;
      var listSwiper = refContentFilter == null ? void 0 : (_refContentFilter$cur = refContentFilter.current) == null ? void 0 : _refContentFilter$cur.querySelectorAll(".mySwiper");

      if (listSwiper != null && listSwiper.length) {
        listSwiper.forEach(function (element) {
          var _element$swiper5, _element$swiper5$resi;

          element == null ? void 0 : (_element$swiper5 = element.swiper) == null ? void 0 : (_element$swiper5$resi = _element$swiper5.resize) == null ? void 0 : _element$swiper5$resi.orientationChangeHandler();
        });
      }
    }
  };

  useEffect(function () {
    var timeOut = null;

    if (typeof window !== "undefined") {
      timeOut = setTimeout(function () {
        handelDestroySwiper();
      }, 300);
    }

    return function () {
      window.clearTimeout(timeOut);
    };
  }, [isStickyContent, pillLength, isMobile, isMobileMin]); // Handle to click on categories

  var handleActiveCategory = function handleActiveCategory(item, index) {
    var _categoryRef$current;

    var span = categoryRef.current[index]; // corresponding DOM node

    (_categoryRef$current = categoryRef.current) == null ? void 0 : _categoryRef$current.forEach(function (spanElm, idx) {
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

  var handleClick = function handleClick(label, index) {
    var _newDataFilterSidebar;

    var newDataFilterSidebar = _toConsumableArray(dataFilterSidebar);

    newDataFilterSidebar[index].isChecked = !newDataFilterSidebar[index].isChecked;
    var newListSub = (_newDataFilterSidebar = newDataFilterSidebar[index].listSub) == null ? void 0 : _newDataFilterSidebar.map(function (item) {
      return _extends({}, item, {
        isChecked: newDataFilterSidebar[index].isChecked
      });
    });
    newDataFilterSidebar[index].listSub = newListSub;
    setDataFilterSidebar(newDataFilterSidebar);
    handleCountSelected(newDataFilterSidebar);
    handleReturnValueFilter(newDataFilterSidebar);
  };

  var next = function next(e) {
    var _refItemContent$curre4, _refWrapperContent$cu;

    e.stopPropagation();
    var scroll = refWrapperContent.current.scrollLeft + ((_refItemContent$curre4 = refItemContent.current) == null ? void 0 : _refItemContent$curre4.offsetWidth) + 24;
    (_refWrapperContent$cu = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu.scrollTo({
      left: scroll,
      behavior: "smooth"
    });
  };

  var previous = function previous(e) {
    var _refItemContent$curre5, _refWrapperContent$cu2;

    e.stopPropagation();
    var scroll = refWrapperContent.current.scrollLeft - ((_refItemContent$curre5 = refItemContent.current) == null ? void 0 : _refItemContent$curre5.offsetWidth) + 24;
    (_refWrapperContent$cu2 = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu2.scrollTo({
      left: scroll,
      behavior: "smooth"
    });
  };
  /**
   * Handle show filter side bar
   */


  var handleShowSideBarFilter = function handleShowSideBarFilter() {
    setBackDrop(!backDrop);
  }; // Handle clear filter checkbox


  var handleResetFilter = function handleResetFilter() {
    var newDataFilterSidebar = dataFilterSidebar.map(function (item) {
      var _item$listSub5;

      return _extends({}, item, {
        isChecked: false,
        listSub: (item == null ? void 0 : (_item$listSub5 = item.listSub) == null ? void 0 : _item$listSub5.map(function (itemSub) {
          return _extends({}, itemSub, {
            isChecked: false
          });
        })) || []
      });
    });
    setDataFilterSidebar(newDataFilterSidebar);
    setPillLength(0);
  };

  var handleFilterInMenu = function handleFilterInMenu(valueFilter) {
    handleCheckFilterSub(_toConsumableArray(valueFilter));
    handleCountSelected(valueFilter);
  };

  var handleOnPointerMove = function handleOnPointerMove(e) {
    if (refTimeOut.current) {
      window.clearTimeout(refTimeOut.current);
    }

    refTimeOut.current = setTimeout(function () {
      refTimeOut.current = undefined;
      var newScreenY = e.screenY;

      if (newScreenY > screenY.current) {
        setBackDrop(false);
      }
    }, 150);
  };

  var handleOnPointerDown = function handleOnPointerDown(e) {
    screenY.current = e.screenY;
  };

  var returnValueBottom = function returnValueBottom() {
    if (isMobileMin && backDrop) {
      return 0;
    }

    if (isMobileMin) {
      return "-474px";
    }

    return 0;
  };

  var returnValueRight = function returnValueRight() {
    if (isMobileMin || backDrop) {
      return 0;
    }

    return '-400px';
  };

  useEffect(function () {
    if (isMobileMin) {
      var _refFilter$current, _refFilter$current$ha;

      (_refFilter$current = refFilter.current) == null ? void 0 : (_refFilter$current$ha = _refFilter$current.handleSetStyle) == null ? void 0 : _refFilter$current$ha.call(_refFilter$current, 320);
    }
  }, [isMobileMin, refFilter]);

  var returnRenderIsStickyContent = function returnRenderIsStickyContent() {
    var result = isStickyContent; // if (!pillLength && !categorySelected) {
    //   result = false;
    // }

    return result;
  };

  var ArrowSlide = function ArrowSlide(_ref) {
    var children = _ref.children,
        sx = _ref.sx,
        disabled = _ref.disabled,
        funcClick = _ref.funcClick;
    return /*#__PURE__*/_jsx(Box, {
      onClick: function onClick(e) {
        return funcClick(e);
      },
      sx: _extends({
        width: '62px',
        height: '62px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: disabled ? colors.otherColor.alabaster : colors.neutral.neutral7,
        borderRadius: '100%',
        pointerEvents: 'auto',
        cursor: 'pointer'
      }, sx, {
        '&:hover': {
          '& path': {
            stroke: disabled ? colors.otherColor.quickSilver : colors.primary.bandaiNamcoRed
          }
        },
        '& svg': {
          height: '10px',
          pointerEvents: 'none',
          '& path': {
            stroke: disabled ? colors.otherColor.quickSilver : colors.primary.bandaiNamcoBlack
          }
        }
      }),
      children: children
    });
  };

  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: "100%",
      pointerEvents: "auto"
    },
    ref: refWrapperContainer,
    children: [/*#__PURE__*/_jsxs(Box, {
      sx: {
        width: '100%',
        maxHeight: "100%",
        display: "flex",
        flexDirection: "column",
        zIndex: 1001,
        overflow: "hidden",
        backgroundColor: colors.primary.bandaiNamcoWhite
      },
      ref: refContentFilter,
      children: [/*#__PURE__*/_jsx(Container, {
        sx: {
          zIndex: "10"
        },
        ref: refContainer,
        children: /*#__PURE__*/_jsx(Typography, {
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
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          height: '46px',
          marginBottom: {
            xs: '28px',
            md: '48px'
          },
          paddingLeft: "".concat(paddingScrollContent, "px")
        },
        ref: refWrapperPills,
        children: /*#__PURE__*/_jsx(Box, {
          sx: {
            height: "100%",
            padding: returnRenderIsStickyContent() ? "32px 0px" : "0px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: colors.primary.bandaiNamcoWhite
          },
          children: /*#__PURE__*/_jsxs(Box, {
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
            children: [/*#__PURE__*/_jsx(Box, {
              onClick: function onClick() {
                handleShowSideBarFilter();
                refValueFilterSidebar.current = cloneDeep(dataFilterSidebar);
              },
              sx: {
                cursor: 'pointer',
                marginRight: "12px"
              },
              children: /*#__PURE__*/_jsx(Pills, {
                active: backDrop,
                numberFilter: pillLength,
                iconMobile: true,
                ref: refPillSidebar
              })
            }), isDesktop && /*#__PURE__*/_jsxs(Swiper, {
              slidesPerView: "auto",
              spaceBetween: 12,
              freeMode: true,
              observer: true,
              initialSlide: initialSlide,
              resizeObserver: true,
              onTransitionEnd: function onTransitionEnd(e) {
                if (refTimeout.current) {
                  window.clearTimeout(refTimeout.current);
                }

                refTimeout.current = setTimeout(function () {
                  setInitialSlide(e.activeIndex);
                  handelDestroySwiper();
                  handelChangeHandlerSwiper((e == null ? void 0 : e.isEnd) || false);
                }, 200);
              },
              className: "mySwiper",
              children: [dataFilterSidebar.map(function (pill, index) {
                return /*#__PURE__*/_jsx(SwiperSlide, {
                  children: /*#__PURE__*/_jsx(Pills, {
                    label: pill.title,
                    active: pill.isChecked,
                    triggerClick: function triggerClick(label) {
                      handleClick(label, index);
                    }
                  }, index)
                });
              }), /*#__PURE__*/_jsx(SwiperSlide, {
                children: /*#__PURE__*/_jsx(Box, {
                  sx: {
                    width: "".concat(paddingScrollContent - 12, "px"),
                    height: "100%",
                    opacity: "0"
                  },
                  className: "last-child-item"
                })
              })]
            }), !isDesktop && /*#__PURE__*/_jsx(Box, {
              sx: {
                display: "flex"
              },
              children: dataFilterSidebar.map(function (pill, index) {
                return /*#__PURE__*/_jsx(Box, {
                  sx: {
                    marginRight: "12px"
                  },
                  children: /*#__PURE__*/_jsx(Pills, {
                    label: pill.title,
                    active: pill.isChecked,
                    triggerClick: function triggerClick(label) {
                      handleClick(label, index);
                    }
                  }, index)
                });
              })
            })]
          })
        })
      }), /*#__PURE__*/_jsxs(Box, {
        sx: {
          position: 'relative',
          display: "flex",
          width: "100%",
          justifyContent: "center",
          overflowX: "hidden"
        },
        children: [!isMobile && /*#__PURE__*/_jsxs(Container, {
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
          onMouseEnter: function onMouseEnter() {
            if (arrowsContainer != null && arrowsContainer.current) {
              arrowsContainer.current.style.opacity = "1";
            }
          },
          onMouseLeave: function onMouseLeave() {
            if (arrowsContainer != null && arrowsContainer.current) {
              arrowsContainer.current.style.opacity = "0";
            }
          },
          children: [/*#__PURE__*/_jsx(ArrowSlide, {
            disabled: disableArrowLeft,
            funcClick: previous,
            sx: {
              marginLeft: "12px"
            },
            children: /*#__PURE__*/_jsx(IconPrevSlide, {
              htmlColor: "transparent",
              sx: {
                height: '10px'
              }
            })
          }), /*#__PURE__*/_jsx(ArrowSlide, {
            disabled: disableArrowRight,
            funcClick: next,
            children: /*#__PURE__*/_jsx(IconNextSlide, {
              htmlColor: "transparent",
              sx: {
                height: '10px'
              }
            })
          })]
        }), /*#__PURE__*/_jsx(Box, {
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
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "flex",
              flexWrap: "nowrap",
              height: "100%",
              overflowX: "auto",
              paddingLeft: "".concat(paddingScrollContent, "px"),
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
            children: /*#__PURE__*/_jsxs(Box, {
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
              onMouseEnter: function onMouseEnter() {
                if (arrowsContainer != null && arrowsContainer.current) {
                  arrowsContainer.current.style.opacity = "1";
                }
              },
              onMouseLeave: function onMouseLeave() {
                if (arrowsContainer != null && arrowsContainer.current) {
                  arrowsContainer.current.style.opacity = "0";
                }
              },
              children: [categories == null ? void 0 : categories.map(function (item, index) {
                return /*#__PURE__*/_jsx(Box, {
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
                  children: /*#__PURE__*/_jsx(Box, {
                    onClick: function onClick() {
                      return handleActiveCategory(item.title, index);
                    },
                    ref: function ref(el) {
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
                        border: "1px solid ".concat(item.title === categorySelected ? colors.secondary.bandaiNamcoBlue : "transparent")
                      }
                    },
                    children: /*#__PURE__*/_jsx(Categories, _extends({}, item, {
                      isShowImageNext: false
                    }))
                  })
                }, item.title);
              }), /*#__PURE__*/_jsx(Box, {
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
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          backgroundColor: colors.primary.bandaiNamcoWhite,
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
        children: /*#__PURE__*/_jsxs(Box, {
          sx: {
            height: "100%",
            padding: returnRenderIsStickyContent() ? "32px 0px" : "0px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: colors.primary.bandaiNamcoWhite,
            paddingLeft: "".concat(paddingScrollContent, "px")
          },
          ref: refWrapperContentSticker,
          children: [/*#__PURE__*/_jsxs(Box, {
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
            children: [/*#__PURE__*/_jsx(Box, {
              onClick: function onClick() {
                return handleShowSideBarFilter();
              },
              sx: {
                cursor: 'pointer',
                marginRight: "12px"
              },
              children: /*#__PURE__*/_jsx(Pills, {
                active: backDrop,
                numberFilter: pillLength,
                iconMobile: true,
                ref: refPillSidebar
              })
            }), isStickyContent && /*#__PURE__*/_jsxs(Swiper, {
              slidesPerView: "auto",
              spaceBetween: 12,
              freeMode: true,
              observer: true,
              initialSlide: initialSlide,
              resizeObserver: true,
              onTransitionEnd: function onTransitionEnd(e) {
                if (refTimeout.current) {
                  window.clearTimeout(refTimeout.current);
                }

                refTimeout.current = setTimeout(function () {
                  setInitialSlide(e.activeIndex);
                  handelDestroySwiper();
                  handelChangeHandlerSwiper((e == null ? void 0 : e.isEnd) || false);
                }, 200);
              },
              className: "mySwiper",
              children: [dataFilterSidebar.map(function (pill, index) {
                return /*#__PURE__*/_jsx(SwiperSlide, {
                  children: /*#__PURE__*/_jsx(Pills, {
                    label: pill.title,
                    active: pill.isChecked,
                    triggerClick: function triggerClick(label) {
                      return handleClick(label, index);
                    }
                  }, index)
                });
              }), /*#__PURE__*/_jsx(SwiperSlide, {
                children: /*#__PURE__*/_jsx(Box, {
                  sx: {
                    width: "".concat(paddingScrollContent - 12, "px"),
                    height: "100%",
                    opacity: "0"
                  },
                  className: "last-child-item"
                })
              })]
            })]
          }), returnRenderIsStickyContent() && /*#__PURE__*/_jsx(Box, {
            sx: {
              display: 'flex',
              gap: '12px',
              marginTop: {
                xs: '8px',
                md: '16px'
              }
            },
            children: /*#__PURE__*/_jsx(Box, {
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
              children: /*#__PURE__*/_jsxs(Swiper, {
                slidesPerView: "auto",
                spaceBetween: 12,
                freeMode: true,
                observer: true,
                className: "mySwiper",
                children: [categories == null ? void 0 : categories.map(function (category, index) {
                  return /*#__PURE__*/_jsx(SwiperSlide, {
                    children: /*#__PURE__*/_jsx(Pills, {
                      label: category.title,
                      active: category.title === categorySelected,
                      triggerClick: function triggerClick(label) {
                        handleActiveCategory(label, index);
                      }
                    }, index)
                  });
                }), /*#__PURE__*/_jsx(SwiperSlide, {
                  children: /*#__PURE__*/_jsx(Box, {
                    sx: {
                      width: "".concat(paddingScrollContent - 12, "px"),
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
      }), /*#__PURE__*/_jsx(Box, {
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
        onClick: function onClick() {
          setBackDrop(false);

          if (!isEqual(refValueFilterSidebar.current, dataFilterSidebar)) {
            setDataFilterSidebar(refValueFilterSidebar.current);
            handleCountSelected(refValueFilterSidebar.current);
          }
        }
      }), /*#__PURE__*/_jsxs(Box, {
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
          backgroundColor: colors.primary.bandaiNamcoWhite,
          bottom: returnValueBottom()
        },
        children: [!isMobileMin && /*#__PURE__*/_jsx(Box, {
          sx: {
            position: "absolute",
            top: "24px",
            right: "24px",
            cursor: "pointer"
          },
          onClick: function onClick() {
            return setBackDrop(false);
          },
          children: _IconClose || (_IconClose = /*#__PURE__*/_jsx(IconClose, {}))
        }), isMobileMin && /*#__PURE__*/_jsx(Box, {
          sx: {
            width: "100%",
            height: "28px",
            display: "flex",
            justifyContent: "center"
          },
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              width: "48px",
              height: "100%"
            },
            onPointerDown: handleOnPointerDown,
            onPointerMove: handleOnPointerMove,
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                width: "100%",
                height: "4px",
                background: colors.neutral.neutral5,
                borderRadius: "15px"
              }
            })
          })
        }), /*#__PURE__*/_jsx(FilterSelectionListing, {
          ref: refFilter,
          dataDefault: dataFilterSidebar,
          onChange: function onChange(e) {
            return handleFilterInMenu(e);
          },
          toggleDisplayListSub: false
        }), /*#__PURE__*/_jsxs(Box, {
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
          children: [/*#__PURE__*/_jsx(Button, _extends({}, buttonPropsClear, {
            onClick: function onClick() {
              handleResetFilter();
            },
            label: "".concat((_buttonPropsClear$lab = buttonPropsClear == null ? void 0 : buttonPropsClear.label) != null ? _buttonPropsClear$lab : 'Clear', " ").concat(pillLength > 0 ? "(".concat(pillLength, ")") : ""),
            disabled: !pillLength,
            sx: {
              width: '152px',
              marginRight: '4px'
            }
          })), /*#__PURE__*/_jsx(Button, _extends({}, buttonPropsDone, {
            label: "".concat((_buttonPropsDone$labe = buttonPropsDone == null ? void 0 : buttonPropsDone.label) != null ? _buttonPropsDone$labe : 'Done'),
            onClick: function onClick() {
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
    }), /*#__PURE__*/_jsx(Container, {
      children: /*#__PURE__*/_jsx(Box, {
        sx: {
          backgroundColor: colors.primary.bandaiNamcoWhite,
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

export default ScrollingNewsFilter;
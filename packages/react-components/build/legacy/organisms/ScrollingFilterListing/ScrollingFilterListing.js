import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";

var _IconClose;

// import modules
import Box from '@mui/material/Box';
import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '@mui/styles';
import Typography from "../../atoms/Typography";
import Pills from "../../atoms/Pills";
import { useMediaQuery } from '@mui/material';
import Button from "../../atoms/Button";
import { cloneDeep, isEqual } from 'lodash';
import { Swiper, SwiperSlide } from "swiper/react"; // styles

import colors from "../../theme/colors";
import FilterSelectionListing from "../../molecules/FilterSelectionListing";
import Container from "../../atoms/Container";
import { IconClose } from "../../atoms/Icon";
import { disableScrollBody } from "../../utils/disableScrollBody";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

// define function
var ScrollingScrollingFilterListing = function ScrollingScrollingFilterListing(props) {
  var _valueFilter$, _valueFilter$$dataFil, _valueFilter$2, _valueFilter$2$dataFi, _valueFilter$3, _valueFilter$3$dataFi, _valueFilter$4, _valueFilter$4$dataFi, _valueFilter$5, _valueFilter$5$dataFi, _valueFilter$6, _valueFilter$6$dataFi, _buttonPropsClear$lab;

  var title = props.title,
      sortByText = props.sortByText,
      filterByText = props.filterByText,
      showMoreText = props.showMoreText,
      showLessText = props.showLessText,
      dataFilter = props.dataFilter,
      buttonPropsDone = props.buttonPropsDone,
      buttonPropsClear = props.buttonPropsClear,
      sortBy = props.sortBy,
      onFilter = props.onFilter,
      _props$defaultTags = props.defaultTags,
      defaultTags = _props$defaultTags === void 0 ? [] : _props$defaultTags;
  var theme = useTheme();
  var isMobile = useMediaQuery(theme.breakpoints.down('md'));
  var isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  var isDesktop = useMediaQuery(theme.breakpoints.down('xl'));

  var _useState = useState(_toConsumableArray(sortBy)),
      _useState2 = _slicedToArray(_useState, 2),
      valueSort = _useState2[0],
      setValueSort = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      backDrop = _useState4[0],
      setBackDrop = _useState4[1];

  var _useState5 = useState(dataFilter),
      _useState6 = _slicedToArray(_useState5, 2),
      valueFilter = _useState6[0],
      setValueFilter = _useState6[1];

  var _useState7 = useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      lengthFilter = _useState8[0],
      setLengthFilter = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      isStickyContent = _useState10[0],
      setIsStickyContent = _useState10[1];

  var refPillSidebar = useRef(null);

  var _useState11 = useState(0),
      _useState12 = _slicedToArray(_useState11, 2),
      paddingScrollContent = _useState12[0],
      setPaddingScrollContent = _useState12[1];

  var _useState13 = useState(0),
      _useState14 = _slicedToArray(_useState13, 2),
      initialSlide = _useState14[0],
      setInitialSlide = _useState14[1];

  var refTimeOut = useRef();
  var screenY = useRef();
  var refSticky = useRef(false);
  var refValueFilter = useRef();
  var refWrapperContainer = useRef();
  var refContainer = useRef();
  var refWrapperContent = useRef();
  var refWrapperContentSticker = useRef();
  var refContentFilterSticker = useRef();
  var refBackdropFilterDesktop = useRef();
  var refIsEnd = useRef(false);
  var refScrollTop = useRef(0); // const [loading, setLoading] = React.useState(false);
  // const [numberSkip, setNumberSkip] = React.useState<number>(0);
  // const [totalItem, setTotalItem] = React.useState<number>(1);
  // const [itemData, setItemData] = React.useState<any[]>([]);

  var LIST_FILTER = ["PlayStation 4", "Nintendo Switch", "PC", "Action", "Adventure", "Role playing (RPG)"];
  useEffect(function () {
    if (!!(defaultTags != null && defaultTags.length) && !!(dataFilter != null && dataFilter.length)) {
      var countFilter = 0;
      var newDataFilter = dataFilter.map(function (item) {
        var _item$dataFilter;

        if (item != null && (_item$dataFilter = item.dataFilter) != null && _item$dataFilter.length) {
          item == null ? void 0 : item.dataFilter.map(function (itemFilter, index) {
            if (defaultTags.includes(itemFilter.name)) {
              item.dataFilter[index].isChecked = true;
              countFilter += 1;
            }

            return null;
          });
        }

        return _extends({}, item);
      });
      setLengthFilter(countFilter);
      setValueFilter(newDataFilter);
      return;
    }

    setValueFilter(dataFilter);
  }, [dataFilter, defaultTags]);
  useEffect(function () {
    if (typeof window !== "undefined") {
      setPaddingScrollContent(refContainer.current.offsetLeft + 24);
    }
  }, [backDrop, isMobile, isTablet, isDesktop]); // handle listing event scroll set  Sticky menu and set position item fillter

  useEffect(function () {
    var contentFilter = refWrapperContent.current;

    if (contentFilter && typeof window !== "undefined") {
      var _contentFilter$getBou = contentFilter.getBoundingClientRect(),
          top = _contentFilter$getBou.top;

      var positionTopContentFilter = top + window.scrollY;
      window.addEventListener("scroll", function () {
        var heightComponent = isMobile ? 101 : 135;

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
      window.addEventListener("resize", function () {
        // set padding left when window resize
        if (refWrapperContainer.current) {
          var lastChild = refWrapperContainer.current.querySelector(".last-child-item");

          if (lastChild) {
            lastChild.style.width = "".concat(refContainer.current.offsetLeft + 12, "px");
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
        }

        if (refWrapperContent.current) {
          refWrapperContent.current.style.paddingLeft = "".concat(refContainer.current.offsetLeft + 24, "px");
        }

        if (refWrapperContentSticker.current) {
          refWrapperContentSticker.current.style.paddingLeft = "".concat(refContainer.current.offsetLeft + 24, "px");
        }
      });
    }

    return function () {
      window.removeEventListener("scroll", function () {});
      window.removeEventListener("resize", function () {});
      window.clearTimeout(refTimeOut.current);
    };
  }, [isMobile]); // handel listing event scroll set Hide sub nav and show main nav when user scroll up.

  useEffect(function () {
    if (typeof window !== "undefined") {
      var heightTop = "-150px";

      if (refSticky.current) {
        var content = refContentFilterSticker.current;
        var backdrop = refBackdropFilterDesktop.current;

        if (content && backdrop) {
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
    if (!refIsEnd.current && !!e) {
      var _refWrapperContainer$3;

      refIsEnd.current = e.isEnd;
      var listSwiper = refWrapperContainer == null ? void 0 : (_refWrapperContainer$3 = refWrapperContainer.current) == null ? void 0 : _refWrapperContainer$3.querySelectorAll(".mySwiper");

      if (listSwiper != null && listSwiper.length) {
        listSwiper.forEach(function (element) {
          var _element$swiper5, _element$swiper5$obse, _element$swiper5$obse2;

          element == null ? void 0 : (_element$swiper5 = element.swiper) == null ? void 0 : (_element$swiper5$obse = _element$swiper5.observer) == null ? void 0 : (_element$swiper5$obse2 = _element$swiper5$obse.destroy) == null ? void 0 : _element$swiper5$obse2.call(_element$swiper5$obse);
        });
      }
    }
  };

  useEffect(function () {
    var time = 0;

    if (typeof window !== "undefined") {
      time = setTimeout(function () {
        handelDestroySwiper();
      }, 300);
    }

    return function () {
      window.clearTimeout(time);
    };
  }, [isStickyContent, lengthFilter, isMobile, isTablet, isDesktop]); // unable to scroll when filter open

  useEffect(function () {
    if (typeof window !== "undefined") {
      disableScrollBody(backDrop);

      if (backDrop && refSticky.current) {
        setIsStickyContent(false);
      }

      if (!backDrop && refSticky.current) {
        setIsStickyContent(true);
      }
    }
  }, [backDrop]);

  var handleCountSelectedFilterAll = function handleCountSelectedFilterAll(listFilter) {
    var newValueFilter = _toConsumableArray(listFilter);

    var totalCount = 0;
    newValueFilter.map(function (filterItem, index) {
      var count = 0;
      filterItem == null ? void 0 : filterItem.dataFilter.map(function (filter) {
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

  var handleGetListParamFilter = function handleGetListParamFilter(listFilter) {
    var result = {};
    listFilter.map(function (filterItem) {
      var filter = [];
      filterItem == null ? void 0 : filterItem.dataFilter.map(function (item) {
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

  var handleClick = function handleClick(index, name) {
    var _valueFilter$index, _valueSort$find;

    setIsStickyContent(false);
    refSticky.current = false;
    (_valueFilter$index = valueFilter[index]) == null ? void 0 : _valueFilter$index.dataFilter.map(function (filter) {
      if (filter.name === name) {
        filter.isChecked = !filter.isChecked;
      }

      return null;
    });

    var newValueFilter = _toConsumableArray(valueFilter);

    handleCountSelectedFilterAll(newValueFilter); // call api

    var paramFilter = handleGetListParamFilter(newValueFilter);
    var paramSort = (_valueSort$find = valueSort.find(function (sort) {
      return sort.isChecked === true;
    })) == null ? void 0 : _valueSort$find.name;
    onFilter == null ? void 0 : onFilter(paramFilter, paramSort);
  };
  /**
   * Handle show filter side bar
   */


  var handleShowSideBarFilter = function handleShowSideBarFilter() {
    setBackDrop(!backDrop);
    refValueFilter.current = cloneDeep(valueFilter);
  };

  var handleResetSort = function handleResetSort() {
    var newValueSort = valueSort.map(function (sort, index) {
      if (index === 0) {
        sort.isChecked = true;
        return _extends({}, sort);
      }

      sort.isChecked = false;
      return _extends({}, sort);
    });
    setValueSort(newValueSort);
  };

  var handleResetFilter = function handleResetFilter() {
    setValueSort(_toConsumableArray(sortBy));

    var newValueFilter = _toConsumableArray(valueFilter);

    newValueFilter.map(function (filterItem) {
      filterItem == null ? void 0 : filterItem.dataFilter.map(function (filter) {
        filter.isChecked = false;
        return null;
      });
      return null;
    });
    handleCountSelectedFilterAll(newValueFilter);
    handleResetSort();
  };

  var handleCountFilter = function handleCountFilter(value, index) {
    var newValueFilter = _toConsumableArray(valueFilter);

    newValueFilter[index].dataFilter = value;
    handleCountSelectedFilterAll(newValueFilter);
  };

  var handleConfirmFilter = function handleConfirmFilter() {
    var _valueSort$find2;

    setIsStickyContent(false);
    setBackDrop(false);
    refSticky.current = false;
    var paramFilter = handleGetListParamFilter(valueFilter);
    var paramSort = (_valueSort$find2 = valueSort.find(function (sort) {
      return sort.isChecked === true;
    })) == null ? void 0 : _valueSort$find2.name; // call api

    onFilter == null ? void 0 : onFilter(paramFilter, paramSort);
  };

  var handleShowMore = function handleShowMore(value, index) {
    var newValueFilter = _toConsumableArray(valueFilter);

    newValueFilter[index].showMore = value;
    setValueFilter(newValueFilter);
  };

  var returnValueBottom = function returnValueBottom() {
    if (isMobile && backDrop) {
      return 0;
    }

    if (isMobile) {
      return "-474px";
    }

    return 0;
  };

  var returnValueRight = function returnValueRight() {
    if (isMobile || backDrop) {
      return 0;
    }

    return '-500px';
  };

  var returnRenderIsStickyContent = function returnRenderIsStickyContent() {
    var result = isStickyContent; // if (!lengthFilter) {
    //   result = false;
    // }

    return result;
  }; // handle check filter not click done.


  var handleCloseFilter = function handleCloseFilter() {
    var hadEqual = isEqual(valueFilter, refValueFilter.current);

    if (!hadEqual) {
      handleCountSelectedFilterAll(refValueFilter.current);
    }
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
        handleCloseFilter();
      }
    }, 150);
  };

  var handleOnPointerDown = function handleOnPointerDown(e) {
    screenY.current = e.screenY;
  };

  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: "100%",
      pointerEvents: "auto"
    },
    ref: refWrapperContainer,
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
        paddingLeft: "".concat(paddingScrollContent, "px")
      },
      ref: refWrapperContent,
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
              numberFilter: lengthFilter,
              iconMobile: true,
              ref: refPillSidebar
            })
          }), isDesktop && /*#__PURE__*/_jsxs(Swiper, {
            slidesPerView: "auto",
            spaceBetween: 12,
            freeMode: true,
            observer: true,
            resizeObserver: true,
            initialSlide: initialSlide,
            onTransitionEnd: function onTransitionEnd(e) {
              if (refTimeOut.current) {
                window.clearTimeout(refTimeOut.current);
              }

              refTimeOut.current = setTimeout(function () {
                handelChangeHandlerSwiper((e == null ? void 0 : e.isEnd) || false);
                setInitialSlide(e.activeIndex);
              }, 100);
            },
            className: "mySwiper",
            children: [valueFilter == null ? void 0 : (_valueFilter$ = valueFilter[0]) == null ? void 0 : (_valueFilter$$dataFil = _valueFilter$.dataFilter) == null ? void 0 : _valueFilter$$dataFil.filter(function (item) {
              return LIST_FILTER.includes(item.name);
            }).map(function (data, index) {
              var newPill = {
                label: data.title,
                triggerClick: function triggerClick() {
                  handleClick(0, data.name);
                },
                active: data.isChecked
              };
              return /*#__PURE__*/_jsx(SwiperSlide, {
                children: /*#__PURE__*/_jsx(Pills, _extends({}, newPill))
              }, index);
            }), valueFilter == null ? void 0 : (_valueFilter$2 = valueFilter[1]) == null ? void 0 : (_valueFilter$2$dataFi = _valueFilter$2.dataFilter) == null ? void 0 : _valueFilter$2$dataFi.filter(function (item) {
              return LIST_FILTER.includes(item.name);
            }).map(function (data, index) {
              var newPill = {
                label: data.title,
                triggerClick: function triggerClick() {
                  handleClick(1, data.name);
                },
                active: data.isChecked
              };
              return /*#__PURE__*/_jsx(SwiperSlide, {
                children: /*#__PURE__*/_jsx(Pills, _extends({}, newPill))
              }, index);
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
          }), !isDesktop && /*#__PURE__*/_jsxs(Box, {
            sx: {
              display: "flex"
            },
            children: [valueFilter == null ? void 0 : (_valueFilter$3 = valueFilter[0]) == null ? void 0 : (_valueFilter$3$dataFi = _valueFilter$3.dataFilter) == null ? void 0 : _valueFilter$3$dataFi.filter(function (item) {
              return LIST_FILTER.includes(item.name);
            }).map(function (data, index) {
              var newPill = {
                label: data.title,
                triggerClick: function triggerClick() {
                  handleClick(0, data.name);
                },
                active: data.isChecked
              };
              return /*#__PURE__*/_jsx(Box, {
                sx: {
                  marginRight: "12px"
                },
                children: /*#__PURE__*/_jsx(Pills, _extends({}, newPill))
              }, index);
            }), valueFilter == null ? void 0 : (_valueFilter$4 = valueFilter[1]) == null ? void 0 : (_valueFilter$4$dataFi = _valueFilter$4.dataFilter) == null ? void 0 : _valueFilter$4$dataFi.filter(function (item) {
              return LIST_FILTER.includes(item.name);
            }).map(function (data, index) {
              var newPill = {
                label: data.title,
                triggerClick: function triggerClick() {
                  handleClick(1, data.name);
                },
                active: data.isChecked
              };
              return /*#__PURE__*/_jsx(Box, {
                sx: {
                  marginRight: "12px"
                },
                children: /*#__PURE__*/_jsx(Pills, _extends({}, newPill))
              }, index);
            })]
          })]
        })
      })
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        backgroundColor: colors.primary.bandaiNamcoWhite,
        position: "fixed",
        top: returnRenderIsStickyContent() ? "0px" : "-150px",
        display: "inline-block",
        height: {
          xs: "106px",
          md: "110px"
        },
        width: "100%",
        transition: "all 0.3s",
        overflow: "hidden",
        zIndex: "1001"
      },
      ref: refContentFilterSticker,
      children: /*#__PURE__*/_jsx(Box, {
        sx: {
          height: '46px',
          marginBottom: {
            xs: '28px',
            md: '56px'
          },
          paddingLeft: "".concat(paddingScrollContent, "px")
        },
        ref: refWrapperContentSticker,
        children: /*#__PURE__*/_jsx(Box, {
          sx: {
            height: "100%",
            padding: "32px 0px",
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
                numberFilter: lengthFilter,
                iconMobile: true,
                ref: refPillSidebar
              })
            }), /*#__PURE__*/_jsxs(Swiper, {
              slidesPerView: "auto",
              spaceBetween: 12,
              freeMode: true,
              observer: true,
              resizeObserver: true,
              observeSlideChildren: true,
              initialSlide: initialSlide,
              onTransitionEnd: function onTransitionEnd(e) {
                if (refTimeOut.current) {
                  window.clearTimeout(refTimeOut.current);
                }

                refTimeOut.current = setTimeout(function () {
                  setInitialSlide(e.activeIndex);
                  handelChangeHandlerSwiper((e == null ? void 0 : e.isEnd) || false);
                }, 100);
              },
              className: "mySwiper",
              children: [valueFilter == null ? void 0 : (_valueFilter$5 = valueFilter[0]) == null ? void 0 : (_valueFilter$5$dataFi = _valueFilter$5.dataFilter) == null ? void 0 : _valueFilter$5$dataFi.filter(function (item) {
                return LIST_FILTER.includes(item.name);
              }).map(function (data, index) {
                var newPill = {
                  label: data.title,
                  triggerClick: function triggerClick() {
                    handleClick(0, data.name);
                  },
                  active: data.isChecked
                };
                return /*#__PURE__*/_jsx(SwiperSlide, {
                  children: /*#__PURE__*/_jsx(Pills, _extends({}, newPill))
                }, index);
              }), valueFilter == null ? void 0 : (_valueFilter$6 = valueFilter[1]) == null ? void 0 : (_valueFilter$6$dataFi = _valueFilter$6.dataFilter) == null ? void 0 : _valueFilter$6$dataFi.filter(function (item) {
                return LIST_FILTER.includes(item.name);
              }).map(function (data, index) {
                var newPill = {
                  label: data.title,
                  triggerClick: function triggerClick() {
                    handleClick(1, data.name);
                  },
                  active: data.isChecked
                };
                return /*#__PURE__*/_jsx(SwiperSlide, {
                  children: /*#__PURE__*/_jsx(Pills, _extends({}, newPill))
                }, index);
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
          })
        })
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
        handleCloseFilter();
      }
    }), /*#__PURE__*/_jsxs(Box, {
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
        backgroundColor: colors.primary.bandaiNamcoWhite,
        bottom: returnValueBottom()
      },
      children: [!isMobile && /*#__PURE__*/_jsx(Box, {
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
        onClick: function onClick() {
          return setBackDrop(false);
        },
        children: _IconClose || (_IconClose = /*#__PURE__*/_jsx(IconClose, {}))
      }), isMobile && /*#__PURE__*/_jsx(Box, {
        sx: {
          width: "100%",
          height: "44px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        },
        children: /*#__PURE__*/_jsx(Box, {
          sx: {
            width: "48px"
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
      }), /*#__PURE__*/_jsxs(Box, {
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
        children: [/*#__PURE__*/_jsxs(Box, {
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
              xs: colors.primary.bandaiNamcoWhite,
              md: "rgb(77 77 77 / 50%)"
            }
          },
          children: [/*#__PURE__*/_jsx(Typography, {
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
              color: colors.neutral.neutral2,
              fontWeight: "600",
              letterSpacing: "-0.2px"
            },
            children: sortByText
          }), /*#__PURE__*/_jsx(FilterSelectionListing, {
            dataDefault: valueSort,
            onChange: setValueSort,
            types: "radio"
          })]
        }), /*#__PURE__*/_jsx(Typography, {
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
            color: colors.neutral.neutral2,
            fontWeight: "600",
            letterSpacing: "-0.2px"
          },
          children: filterByText
        }), valueFilter.map(function (filter, index) {
          var _filter$dataFilter;

          return /*#__PURE__*/_jsxs(Box, {
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
                xs: colors.primary.bandaiNamcoWhite,
                md: "rgb(77 77 77 / 50%)"
              }
            },
            children: [/*#__PURE__*/_jsxs(Typography, {
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
                color: colors.primary.dark,
                letterSpacing: "-0.4px"
              },
              children: [filter.title, " ", filter.countSelect > 0 && "(".concat(filter.countSelect, ")")]
            }), /*#__PURE__*/_jsx(FilterSelectionListing, {
              dataDefault: filter == null ? void 0 : filter.dataFilter,
              onChange: function onChange(e) {
                return handleCountFilter(e, index);
              },
              hadShowMore: true,
              showMore: filter.showMore
            }), ((_filter$dataFilter = filter.dataFilter) == null ? void 0 : _filter$dataFilter.length) > 4 && /*#__PURE__*/_jsx(Typography, {
              variant: "p5",
              sx: {
                width: "fit-content",
                marginTop: {
                  xs: "20px",
                  md: "32px"
                },
                color: colors.neutral.neutral2,
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
                  borderBottom: "1px solid ".concat(colors.neutral.neutral2)
                }
              },
              onClick: function onClick() {
                return handleShowMore(!filter.showMore, index);
              },
              children: !filter.showMore ? showMoreText : showLessText
            })]
          }, index);
        })]
      }), /*#__PURE__*/_jsxs(Box, {
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
          bottom: backDrop ? 0 : "".concat(!isMobile ? 0 : "-110px"),
          boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.05)"
        },
        children: [/*#__PURE__*/_jsx(Button, _extends({}, buttonPropsClear, {
          disabled: !lengthFilter,
          onClick: function onClick() {
            handleResetFilter(); // handleCallApiGetData(dataSideChecked, 'clear') 
          },
          label: "".concat((_buttonPropsClear$lab = buttonPropsClear == null ? void 0 : buttonPropsClear.label) != null ? _buttonPropsClear$lab : 'Clear', " ").concat(lengthFilter > 0 ? "(".concat(lengthFilter, ")") : ""),
          sx: {
            width: {
              xs: "calc(50% - 4px)",
              md: "calc(50% - 18px)"
            }
          }
        })), /*#__PURE__*/_jsx(Button, _extends({}, buttonPropsDone, {
          onClick: function onClick() {
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
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        backgroundColor: colors.primary.bandaiNamcoWhite,
        position: "fixed",
        top: {
          xs: returnRenderIsStickyContent() ? "0px" : "-106px",
          md: returnRenderIsStickyContent() ? "0px" : "-110px"
        },
        left: "0px",
        display: "flex",
        height: {
          xs: "106px",
          md: "110px"
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

export default ScrollingScrollingFilterListing;
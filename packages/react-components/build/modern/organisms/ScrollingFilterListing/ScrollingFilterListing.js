import _extends from "@babel/runtime/helpers/esm/extends";

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
const ScrollingScrollingFilterListing = props => {
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));
  const isTablet = useMediaQuery(theme.breakpoints.down('lg'));
  const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));
  const [valueSort, setValueSort] = useState([...sortBy]);
  const [backDrop, setBackDrop] = useState(false);
  const [valueFilter, setValueFilter] = useState(dataFilter);
  const [lengthFilter, setLengthFilter] = useState(0);
  const [isStickyContent, setIsStickyContent] = useState(false);
  const refPillSidebar = useRef(null);
  const [paddingScrollContent, setPaddingScrollContent] = useState(0);
  const [initialSlide, setInitialSlide] = useState(0);
  const refTimeOut = useRef();
  const screenY = useRef();
  const refSticky = useRef(false);
  const refValueFilter = useRef();
  const refWrapperContainer = useRef();
  const refContainer = useRef();
  const refWrapperContent = useRef();
  const refWrapperContentSticker = useRef();
  const refContentFilterSticker = useRef();
  const refBackdropFilterDesktop = useRef();
  const refIsEnd = useRef(false);
  const refScrollTop = useRef(0); // const [loading, setLoading] = React.useState(false);
  // const [numberSkip, setNumberSkip] = React.useState<number>(0);
  // const [totalItem, setTotalItem] = React.useState<number>(1);
  // const [itemData, setItemData] = React.useState<any[]>([]);

  const LIST_FILTER = ["PlayStation 4", "Nintendo Switch", "PC", "Action", "Adventure", "Role playing (RPG)"];
  useEffect(() => {
    if (!!defaultTags?.length && !!dataFilter?.length) {
      let countFilter = 0;
      const newDataFilter = dataFilter.map(item => {
        if (item?.dataFilter?.length) {
          item?.dataFilter.map((itemFilter, index) => {
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
  useEffect(() => {
    if (typeof window !== "undefined") {
      setPaddingScrollContent(refContainer.current.offsetLeft + 24);
    }
  }, [backDrop, isMobile, isTablet, isDesktop]); // handle listing event scroll set  Sticky menu and set position item fillter

  useEffect(() => {
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
            refTimeOut.current = undefined;
            const listSwiper = refWrapperContainer?.current?.querySelectorAll(".mySwiper");

            if (listSwiper?.length) {
              listSwiper.forEach(element => {
                element?.swiper?.observer?.destroy();
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

  useEffect(() => {
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
    const listSwiper = refWrapperContainer?.current?.querySelectorAll(".mySwiper");

    if (listSwiper?.length) {
      listSwiper.forEach(element => {
        element?.swiper?.updateSlides();
        element?.swiper?.observer?.destroy?.();
        element?.swiper?.resize?.orientationChangeHandler?.();
      });
    }
  };

  const handelChangeHandlerSwiper = e => {
    if (!refIsEnd.current && !!e) {
      refIsEnd.current = e.isEnd;
      const listSwiper = refWrapperContainer?.current?.querySelectorAll(".mySwiper");

      if (listSwiper?.length) {
        listSwiper.forEach(element => {
          element?.swiper?.observer?.destroy?.();
        });
      }
    }
  };

  useEffect(() => {
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

  useEffect(() => {
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

  const handleCountSelectedFilterAll = listFilter => {
    const newValueFilter = [...listFilter];
    let totalCount = 0;
    newValueFilter.map((filterItem, index) => {
      let count = 0;
      filterItem?.dataFilter.map(filter => {
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
      filterItem?.dataFilter.map(item => {
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
    setIsStickyContent(false);
    refSticky.current = false;
    valueFilter[index]?.dataFilter.map(filter => {
      if (filter.name === name) {
        filter.isChecked = !filter.isChecked;
      }

      return null;
    });
    const newValueFilter = [...valueFilter];
    handleCountSelectedFilterAll(newValueFilter); // call api

    const paramFilter = handleGetListParamFilter(newValueFilter);
    const paramSort = valueSort.find(sort => sort.isChecked === true)?.name;
    onFilter?.(paramFilter, paramSort);
  };
  /**
   * Handle show filter side bar
   */


  const handleShowSideBarFilter = () => {
    setBackDrop(!backDrop);
    refValueFilter.current = cloneDeep(valueFilter);
  };

  const handleResetSort = () => {
    const newValueSort = valueSort.map((sort, index) => {
      if (index === 0) {
        sort.isChecked = true;
        return _extends({}, sort);
      }

      sort.isChecked = false;
      return _extends({}, sort);
    });
    setValueSort(newValueSort);
  };

  const handleResetFilter = () => {
    setValueSort([...sortBy]);
    const newValueFilter = [...valueFilter];
    newValueFilter.map(filterItem => {
      filterItem?.dataFilter.map(filter => {
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
    setIsStickyContent(false);
    setBackDrop(false);
    refSticky.current = false;
    const paramFilter = handleGetListParamFilter(valueFilter);
    const paramSort = valueSort.find(sort => sort.isChecked === true)?.name; // call api

    onFilter?.(paramFilter, paramSort);
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
    const hadEqual = isEqual(valueFilter, refValueFilter.current);

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
        paddingLeft: `${paddingScrollContent}px`
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
            onClick: () => handleShowSideBarFilter(),
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
            onTransitionEnd: e => {
              if (refTimeOut.current) {
                window.clearTimeout(refTimeOut.current);
              }

              refTimeOut.current = setTimeout(() => {
                handelChangeHandlerSwiper(e?.isEnd || false);
                setInitialSlide(e.activeIndex);
              }, 100);
            },
            className: "mySwiper",
            children: [valueFilter?.[0]?.dataFilter?.filter(item => LIST_FILTER.includes(item.name)).map((data, index) => {
              const newPill = {
                label: data.title,
                triggerClick: () => {
                  handleClick(0, data.name);
                },
                active: data.isChecked
              };
              return /*#__PURE__*/_jsx(SwiperSlide, {
                children: /*#__PURE__*/_jsx(Pills, _extends({}, newPill))
              }, index);
            }), valueFilter?.[1]?.dataFilter?.filter(item => LIST_FILTER.includes(item.name)).map((data, index) => {
              const newPill = {
                label: data.title,
                triggerClick: () => {
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
                  width: `${paddingScrollContent - 12}px`,
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
            children: [valueFilter?.[0]?.dataFilter?.filter(item => LIST_FILTER.includes(item.name)).map((data, index) => {
              const newPill = {
                label: data.title,
                triggerClick: () => {
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
            }), valueFilter?.[1]?.dataFilter?.filter(item => LIST_FILTER.includes(item.name)).map((data, index) => {
              const newPill = {
                label: data.title,
                triggerClick: () => {
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
      children: /*#__PURE__*/_jsx(Box, {
        sx: {
          height: '46px',
          marginBottom: {
            xs: '28px',
            md: '56px'
          },
          paddingLeft: `${paddingScrollContent}px`
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
              onClick: () => handleShowSideBarFilter(),
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
              onTransitionEnd: e => {
                if (refTimeOut.current) {
                  window.clearTimeout(refTimeOut.current);
                }

                refTimeOut.current = setTimeout(() => {
                  setInitialSlide(e.activeIndex);
                  handelChangeHandlerSwiper(e?.isEnd || false);
                }, 100);
              },
              className: "mySwiper",
              children: [valueFilter?.[0]?.dataFilter?.filter(item => LIST_FILTER.includes(item.name)).map((data, index) => {
                const newPill = {
                  label: data.title,
                  triggerClick: () => {
                    handleClick(0, data.name);
                  },
                  active: data.isChecked
                };
                return /*#__PURE__*/_jsx(SwiperSlide, {
                  children: /*#__PURE__*/_jsx(Pills, _extends({}, newPill))
                }, index);
              }), valueFilter?.[1]?.dataFilter?.filter(item => LIST_FILTER.includes(item.name)).map((data, index) => {
                const newPill = {
                  label: data.title,
                  triggerClick: () => {
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
      onClick: () => {
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
        onClick: () => setBackDrop(false),
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
        }), valueFilter.map((filter, index) => {
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
              children: [filter.title, " ", filter.countSelect > 0 && `(${filter.countSelect})`]
            }), /*#__PURE__*/_jsx(FilterSelectionListing, {
              dataDefault: filter?.dataFilter,
              onChange: e => handleCountFilter(e, index),
              hadShowMore: true,
              showMore: filter.showMore
            }), filter.dataFilter?.length > 4 && /*#__PURE__*/_jsx(Typography, {
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
                  borderBottom: `1px solid ${colors.neutral.neutral2}`
                }
              },
              onClick: () => handleShowMore(!filter.showMore, index),
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
          bottom: backDrop ? 0 : `${!isMobile ? 0 : "-110px"}`,
          boxShadow: "0px -4px 10px rgba(0, 0, 0, 0.05)"
        },
        children: [/*#__PURE__*/_jsx(Button, _extends({}, buttonPropsClear, {
          disabled: !lengthFilter,
          onClick: () => {
            handleResetFilter(); // handleCallApiGetData(dataSideChecked, 'clear') 
          },
          label: `${buttonPropsClear?.label ?? 'Clear'} ${lengthFilter > 0 ? `(${lengthFilter})` : ""}`,
          sx: {
            width: {
              xs: "calc(50% - 4px)",
              md: "calc(50% - 18px)"
            }
          }
        })), /*#__PURE__*/_jsx(Button, _extends({}, buttonPropsDone, {
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
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        backgroundColor: colors.primary.bandaiNamcoWhite,
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

export default ScrollingScrollingFilterListing;
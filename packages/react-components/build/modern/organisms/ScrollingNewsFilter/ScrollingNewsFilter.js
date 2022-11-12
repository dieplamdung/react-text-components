import _extends from "@babel/runtime/helpers/esm/extends";

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
const FilterSelectionListing = loadable(() => import("../../molecules/FilterSelectionListing"));
const Categories = loadable(() => import("../../molecules/Categories")); // define function

const ScrollingNewsFilter = props => {
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const isMobileMin = useMediaQuery(theme.breakpoints.down('md'));
  const isDesktop = useMediaQuery(theme.breakpoints.down('xl'));
  const [backDrop, setBackDrop] = useState(false);
  const [categorySelected, setCategorySelected] = useState('');
  const [dataFilterSidebar, setDataFilterSidebar] = useState(dataFilter || []);
  const [pillLength, setPillLength] = useState(0); // const [listPill, setListPill] = useState<Array<PillProps>>(pillProps);
  // const [dataSideChecked, setDataSideChecked] = useState<ListingType[]>([]);

  const [isStickyContent, setIsStickyContent] = useState(false);
  const refFilter = useRef(null);
  const refPillSidebar = useRef(null);
  const categoryRef = useRef([]);
  const refTimeOut = useRef();
  const screenY = useRef();
  const refContentFilter = useRef();
  const refSticky = useRef(false);
  const [paddingScrollContent, setPaddingScrollContent] = useState(0);
  const refWrapperContainer = useRef();
  const refContainer = useRef();
  const refItemContent = useRef();
  const refWidthItem = useRef();
  const refWrapperContent = useRef();
  const refWrapperContentSticker = useRef();
  const refFullWidthContent = useRef(0);
  const refIsMobile = useRef(isMobileMin);
  const arrowsContainer = useRef();
  const refLastChild = useRef();
  const refTimeout = useRef();
  const refWrapperPills = useRef();
  const [disableArrowRight, setDisableArrowRight] = useState(false);
  const [disableArrowLeft, setDisableArrowLeft] = useState(true); // const [isEnd, setIsEnd] = useState<boolean>(false);

  const [initialSlide, setInitialSlide] = useState(0);
  const refISEnd = useRef();
  const refValueFilterSidebar = useRef([]);
  const refScrollTop = useRef(0);
  const refContentFilterSticker = useRef();
  const refBackdropFilterDesktop = useRef(); // const [loading, setLoading] = React.useState(false);
  // const [numberSkip, setNumberSkip] = React.useState<number>(0);
  // const [totalItem, setTotalItem] = React.useState<number>(1);
  // const [itemData, setItemData] = React.useState<any[]>([]);
  // Handle call api fetch data

  const handleCallApiGetData = dataQuery => {
    setDataQueryTags?.(dataQuery);
    setDataQueryGame?.(categorySelected ?? '');
  }; // handle return param filter


  const handleReturnValueFilter = listFilter => {
    const result = [];
    listFilter?.map(item => {
      if (item.isChecked && !item.listSub?.length) {
        result.push(convertCustomTagForFilter(item.name));
        return null;
      }

      if (item.listSub?.length) {
        item.listSub.map(itemSub => {
          if (itemSub?.isChecked) {
            result.push(convertCustomTagForFilter(itemSub.name));
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
    listFilter?.map(item => {
      if (!item.listSub?.length && item.isChecked) {
        count += 1;
        return null;
      }

      if (item.listSub?.length) {
        item.listSub.map(itemSub => {
          if (itemSub?.isChecked) {
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

  useEffect(() => {
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
  useEffect(() => {
    if (typeof window !== "undefined") {
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

      setPaddingScrollContent(refContainer.current?.offsetLeft + (isMobileMin ? 16 : 24));
      refWidthItem.current = refItemContent.current?.offsetWidth + 24; // listen to events window resize for change padding left  content scroll.

      window.addEventListener("resize", () => {
        if (refWrapperContainer.current) {
          const lastChild = refWrapperContainer.current.querySelector(".last-child-item");

          if (lastChild) {
            lastChild.style.width = `${refContainer.current.offsetLeft + (isMobileMin ? 2 : 12)}px`;
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


        refWidthItem.current = refItemContent.current?.offsetWidth + 24; // get full width content scroll

        refFullWidthContent.current = refItemContent.current?.offsetWidth + 24 + (refWidthItem.current * categories.length || 1);
        refIsMobile.current = isMobileMin;
      });
    }

    return () => {
      window.removeEventListener("scroll", () => {});
      window.removeEventListener("resize", () => {});
    };
  }, [categories, isMobileMin, isDesktop, isMobile]);
  useEffect(() => {
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
  useEffect(() => {
    if (typeof window !== "undefined") {
      disableScrollBody(backDrop);
    }
  }, [backDrop]); // handel listing event scroll set Hide sub nav and show main nav when user scroll up.

  useEffect(() => {
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
    if (!refISEnd.current && !!e) {
      refISEnd.current = e.isEnd;
      const listSwiper = refContentFilter?.current?.querySelectorAll(".mySwiper");

      if (listSwiper?.length) {
        listSwiper.forEach(element => {
          element?.swiper?.resize?.orientationChangeHandler();
        });
      }
    }
  };

  useEffect(() => {
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
    const span = categoryRef.current[index]; // corresponding DOM node

    categoryRef.current?.forEach((spanElm, idx) => {
      if (index !== idx) {
        spanElm.classList.remove("active");
      }

      return null;
    });
    span.classList.toggle("active");

    if (categorySelected === item) {
      setCategorySelected("");
      setDataQueryGame?.("");
    } else {
      setCategorySelected(item);
      setDataQueryGame?.(item);
    }
  };

  const handleClick = (label, index) => {
    const newDataFilterSidebar = [...dataFilterSidebar];
    newDataFilterSidebar[index].isChecked = !newDataFilterSidebar[index].isChecked;
    const newListSub = newDataFilterSidebar[index].listSub?.map(item => {
      return _extends({}, item, {
        isChecked: newDataFilterSidebar[index].isChecked
      });
    });
    newDataFilterSidebar[index].listSub = newListSub;
    setDataFilterSidebar(newDataFilterSidebar);
    handleCountSelected(newDataFilterSidebar);
    handleReturnValueFilter(newDataFilterSidebar);
  };

  const next = e => {
    e.stopPropagation();
    const scroll = refWrapperContent.current.scrollLeft + refItemContent.current?.offsetWidth + 24;
    refWrapperContent.current?.scrollTo({
      left: scroll,
      behavior: "smooth"
    });
  };

  const previous = e => {
    e.stopPropagation();
    const scroll = refWrapperContent.current.scrollLeft - refItemContent.current?.offsetWidth + 24;
    refWrapperContent.current?.scrollTo({
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
      return _extends({}, item, {
        isChecked: false,
        listSub: item?.listSub?.map(itemSub => {
          return _extends({}, itemSub, {
            isChecked: false
          });
        }) || []
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

  useEffect(() => {
    if (isMobileMin) {
      refFilter.current?.handleSetStyle?.(320);
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
    return /*#__PURE__*/_jsx(Box, {
      onClick: e => funcClick(e),
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
          paddingLeft: `${paddingScrollContent}px`
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
              onClick: () => {
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
              onTransitionEnd: e => {
                if (refTimeout.current) {
                  window.clearTimeout(refTimeout.current);
                }

                refTimeout.current = setTimeout(() => {
                  setInitialSlide(e.activeIndex);
                  handelDestroySwiper();
                  handelChangeHandlerSwiper(e?.isEnd || false);
                }, 200);
              },
              className: "mySwiper",
              children: [dataFilterSidebar.map((pill, index) => /*#__PURE__*/_jsx(SwiperSlide, {
                children: /*#__PURE__*/_jsx(Pills, {
                  label: pill.title,
                  active: pill.isChecked,
                  triggerClick: label => {
                    handleClick(label, index);
                  }
                }, index)
              })), /*#__PURE__*/_jsx(SwiperSlide, {
                children: /*#__PURE__*/_jsx(Box, {
                  sx: {
                    width: `${paddingScrollContent - 12}px`,
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
              children: dataFilterSidebar.map((pill, index) => /*#__PURE__*/_jsx(Box, {
                sx: {
                  marginRight: "12px"
                },
                children: /*#__PURE__*/_jsx(Pills, {
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
          onMouseEnter: () => {
            if (arrowsContainer?.current) {
              arrowsContainer.current.style.opacity = "1";
            }
          },
          onMouseLeave: () => {
            if (arrowsContainer?.current) {
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
              onMouseEnter: () => {
                if (arrowsContainer?.current) {
                  arrowsContainer.current.style.opacity = "1";
                }
              },
              onMouseLeave: () => {
                if (arrowsContainer?.current) {
                  arrowsContainer.current.style.opacity = "0";
                }
              },
              children: [categories?.map((item, index) => /*#__PURE__*/_jsx(Box, {
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
                      border: `1px solid ${item.title === categorySelected ? colors.secondary.bandaiNamcoBlue : "transparent"}`
                    }
                  },
                  children: /*#__PURE__*/_jsx(Categories, _extends({}, item, {
                    isShowImageNext: false
                  }))
                })
              }, item.title)), /*#__PURE__*/_jsx(Box, {
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
            paddingLeft: `${paddingScrollContent}px`
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
              onClick: () => handleShowSideBarFilter(),
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
              onTransitionEnd: e => {
                if (refTimeout.current) {
                  window.clearTimeout(refTimeout.current);
                }

                refTimeout.current = setTimeout(() => {
                  setInitialSlide(e.activeIndex);
                  handelDestroySwiper();
                  handelChangeHandlerSwiper(e?.isEnd || false);
                }, 200);
              },
              className: "mySwiper",
              children: [dataFilterSidebar.map((pill, index) => /*#__PURE__*/_jsx(SwiperSlide, {
                children: /*#__PURE__*/_jsx(Pills, {
                  label: pill.title,
                  active: pill.isChecked,
                  triggerClick: label => handleClick(label, index)
                }, index)
              })), /*#__PURE__*/_jsx(SwiperSlide, {
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
                children: [categories?.map((category, index) => {
                  return /*#__PURE__*/_jsx(SwiperSlide, {
                    children: /*#__PURE__*/_jsx(Pills, {
                      label: category.title,
                      active: category.title === categorySelected,
                      triggerClick: label => {
                        handleActiveCategory(label, index);
                      }
                    }, index)
                  });
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
        onClick: () => {
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
          onClick: () => setBackDrop(false),
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
          onChange: e => handleFilterInMenu(e),
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
            onClick: () => {
              handleResetFilter();
            },
            label: `${buttonPropsClear?.label ?? 'Clear'} ${pillLength > 0 ? `(${pillLength})` : ""}`,
            disabled: !pillLength,
            sx: {
              width: '152px',
              marginRight: '4px'
            }
          })), /*#__PURE__*/_jsx(Button, _extends({}, buttonPropsDone, {
            label: `${buttonPropsDone?.label ?? 'Done'}`,
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
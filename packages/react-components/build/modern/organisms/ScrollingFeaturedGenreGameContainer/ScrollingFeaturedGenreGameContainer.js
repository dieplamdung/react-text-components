import _extends from "@babel/runtime/helpers/esm/extends";
// import modules
import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Typography from "../../atoms/Typography";
import PopularCard from "../../molecules/PopularCard";
import { IconNextSlide, IconPrevSlide } from "../../atoms/Icon"; // import styles

import colors from "../../theme/colors";
// import type
import { MobileDown, SmallMobileDown, TabletDown } from "../../utils/viewport";
import Container from "../../atoms/Container";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const ScrollingFeaturedGenreGameContainer = props => {
  const {
    title,
    listPopularCard,
    // viewMore,
    description,
    ticker,
    classSection = 'scrolling-featured-genre-game-container',
    stepScroll = 1
  } = props;
  const theme = useTheme();
  const isTabletDown = useMediaQuery(TabletDown(theme));
  const isMobileDown = useMediaQuery(MobileDown(theme));
  const refIsMobile = useRef(isMobileDown);
  const isMobileMin = useMediaQuery(SmallMobileDown(theme));
  const refIsMobileMin = useRef(isMobileMin); // const refNumberNext = useRef<number>(0);

  const [disableArrowRight, setDisableArrowRight] = useState(false);
  const [disableArrowLeft, setDisableArrowLeft] = useState(true);
  const [paddingScrollContent, setPaddingScrollContent] = useState(0);
  const refWrapper = useRef();
  const refWrapperContent = useRef();
  const refWrapperScroll = useRef();
  const refItemContent = useRef();
  const refWidthItem = useRef();
  const refContainer = useRef();
  const refFullWidthContent = useRef(0);
  const refLastChild = useRef();
  const refTimeout = useRef();
  useEffect(() => {
    refIsMobileMin.current = isMobileMin;
  }, [isMobileMin]); // handle event resize set translateX item content scroll 

  useEffect(() => {
    if (typeof window !== "undefined") {
      refIsMobile.current = isMobileDown; // set padding-left content scroll  = left container. 

      setPaddingScrollContent(refContainer.current?.offsetLeft + (refIsMobileMin.current ? 16 : 24));
      refWidthItem.current = refItemContent.current?.offsetWidth + 24; // listen to events window resize for change padding left  content scroll.

      window.addEventListener("resize", () => {
        // set padding left when window resize
        if (refWrapperContent.current) {
          refWrapperContent.current.style.paddingLeft = `${refContainer.current?.offsetLeft + (refIsMobileMin.current ? 16 : 24)}px`;
        } // set width item


        refWidthItem.current = refItemContent.current?.offsetWidth + 24; // get full width content scroll

        refFullWidthContent.current = refItemContent.current?.offsetWidth + 24 + (refWidthItem.current * listPopularCard.length || 1);
        refIsMobile.current = isMobileDown;
        const itemLastChild = refLastChild.current.getBoundingClientRect();
        const positionWidth = itemLastChild.x;

        if (positionWidth <= refWrapper.current.clientWidth) {
          setDisableArrowRight(true);
        } else {
          setDisableArrowRight(false);
        }
      });
    }

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [listPopularCard, isMobileDown, isTabletDown]); // handel event scroll refWrapperContent disable btn left or right

  useEffect(() => {
    if (typeof window !== "undefined") {
      const content = refWrapperScroll.current;

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

              if (positionWidth <= refWrapperContent.current.clientWidth) {
                setDisableArrowRight(true);
              }

              if (positionWidth > refContainer.current.clientWidth && disableArrowRight) {
                setDisableArrowRight(false);
              }
            }, 100);
          }
        });
      }
    }
  }, [disableArrowRight, disableArrowLeft]); // reset scroll

  useEffect(() => {
    if (typeof window !== "undefined") {
      refWrapperScroll.current?.scrollBy({
        left: 0,
        behavior: "smooth"
      });
      refWrapperContent.current?.scrollBy({
        left: 0,
        behavior: "smooth"
      });
      const content = refWrapper.current;

      if (content) {
        const itemLastChild = refLastChild.current.getBoundingClientRect();
        const positionWidth = itemLastChild.x;

        if (positionWidth <= refWrapper.current.clientWidth) {
          setDisableArrowRight(true);
        } else {
          setDisableArrowRight(false);
        }
      }
    }
  }, [paddingScrollContent]); // handle next item

  const next = () => {
    const clientWidth = refItemContent.current.clientWidth * stepScroll;
    refWrapperScroll.current?.scrollBy({
      left: clientWidth,
      behavior: "smooth"
    });
  }; // handle prev item


  const previous = () => {
    const clientWidth = refItemContent.current.clientWidth * stepScroll;
    refWrapperScroll.current?.scrollBy({
      left: -clientWidth,
      behavior: "smooth"
    });
  };

  const ArrowSlide = ({
    children,
    sx,
    disabled,
    funcClick
  }) => {
    return /*#__PURE__*/_jsx(Box, {
      onClick: () => funcClick(),
      sx: _extends({
        width: '62px',
        height: '62px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: disabled ? colors.otherColor.alabaster : colors.neutral.neutral7,
        borderRadius: '100%',
        pointerEvents: disabled ? 'none' : 'auto',
        cursor: !disabled ? 'pointer' : 'none'
      }, sx, {
        '&:hover': {
          '& path': {
            stroke: colors.primary.bandaiNamcoRed
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
  }; // handel event scroll to set scrollBy item correct
  // const handleScroll = () => {
  //   if (refTimeout.current) {
  //     window.clearTimeout(refTimeout.current)
  //   }
  //   refTimeout.current = setTimeout(() => {
  //     refTimeout.current = undefined;
  //     const scrollLeft = refWrapperContent.current.scrollLeft;
  //     const clientWidth = refItemContent.current.clientWidth;
  //     if (Math.floor(scrollLeft) % clientWidth !== 0) {
  //       const length = listPopularCard.length || 0;
  //       for (let i = 0; i < length; i += 1) {
  //         const step = clientWidth * i;
  //         if (step > Math.floor(scrollLeft)) {
  //           refWrapperContent.current?.scrollBy({ left: step - scrollLeft, behavior: "smooth" });
  //           break;
  //         }
  //       }
  //     }
  //   }, 300);
  // }


  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      overflowX: "hidden"
    },
    ref: refWrapper,
    children: [/*#__PURE__*/_jsx(Container, {
      ref: refContainer,
      sx: {
        height: "0px",
        opacity: "0"
      }
    }), /*#__PURE__*/_jsxs(Box, {
      className: classSection,
      sx: {
        position: 'relative',
        display: 'flex',
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingLeft: isMobileDown ? "0px" : `${paddingScrollContent}px`,
        overflowX: isMobileDown ? "scroll" : "hidden",
        paddingTop: {
          xs: '70px',
          md: '80px'
        },
        paddingBottom: {
          xs: '30px',
          md: '80px'
        },
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
        overscrollBehaviorX: "contain",
        scrollBehavior: "smooth",
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      },
      ref: refWrapperContent,
      children: [/*#__PURE__*/_jsx(Box, {
        sx: {
          display: "inline-block",
          scrollSnapAlign: "start",
          height: "100%"
        },
        children: /*#__PURE__*/_jsxs(Box, {
          sx: {
            maxWidth: {
              md: '225px',
              xs: "183px"
            },
            transform: `translateX(${isMobileDown ? paddingScrollContent : 0}px)`
          },
          children: [/*#__PURE__*/_jsx(Box, {
            sx: {
              width: '100%',
              alignItems: 'center',
              marginTop: {
                xs: '-62px',
                md: '-75px'
              },
              marginLeft: {
                xs: '35px',
                md: '100px'
              },
              '& img': {
                objectFit: 'cover',
                borderRadius: '20px',
                display: 'block'
              }
            },
            children: ticker && /*#__PURE__*/_jsx("img", {
              src: ticker,
              alt: title ?? ''
            })
          }), title && /*#__PURE__*/_jsx(Typography, {
            variant: "h4",
            color: colors.primary.bandaiNamcoBlack,
            children: title
          }), /*#__PURE__*/_jsx(Typography, {
            variant: "p8",
            sx: {
              color: colors.neutral.neutral2,
              marginTop: {
                xs: '8px',
                md: '10px'
              },
              marginBottom: '22px'
            },
            children: description
          }), !isTabletDown && listPopularCard.length > 2 && /*#__PURE__*/_jsxs(Box, {
            sx: {
              display: 'flex',
              alignItems: 'center',
              marginTop: "40px"
            },
            children: [/*#__PURE__*/_jsx(Box, {
              sx: {
                marginRight: "16px"
              },
              children: /*#__PURE__*/_jsx(ArrowSlide, {
                disabled: disableArrowLeft,
                funcClick: previous,
                children: /*#__PURE__*/_jsx(IconPrevSlide, {
                  htmlColor: "transparent",
                  sx: {
                    height: '10px'
                  }
                })
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
          })]
        })
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          flex: 1,
          position: "relative",
          overflow: isMobileDown ? "visible" : "hidden",
          marginLeft: {
            lg: "156px",
            md: "80px",
            xs: "38px"
          }
        },
        children: /*#__PURE__*/_jsxs(Box, {
          sx: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            width: "100%",
            height: "100%",
            overflowX: isMobileDown ? "visible" : "scroll",
            scrollSnapType: "x mandatory",
            WebkitOverflowScrolling: "touch",
            overscrollBehaviorX: "contain",
            scrollBehavior: "smooth",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none"
            }
          },
          ref: refWrapperScroll // onScroll={handleScroll}
          ,
          children: [listPopularCard.map((itemProps, index) => /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "inline-block",
              scrollSnapAlign: "start",
              height: "100%"
            },
            ref: refItemContent,
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                display: "flex",
                marginLeft: "0px",
                height: "100%",
                width: {
                  md: "285px",
                  xs: "223px"
                },
                paddingRight: '22px',
                transform: `translateX(${isMobileDown ? paddingScrollContent : 0}px)`
              },
              className: "childContent",
              ref: refItemContent,
              children: /*#__PURE__*/_jsx(PopularCard, _extends({}, itemProps), index)
            })
          }, index)), /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "inline-block",
              zIndex: "10"
            },
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                display: "flex",
                marginLeft: `${isMobileDown ? paddingScrollContent - 20 : -32}px`,
                paddingRight: '0px',
                // width: "0px",
                // height: "0px",
                // opacity: "0",
                width: "10px",
                height: "10px",
                opacity: "0"
              },
              ref: refLastChild
            })
          })]
        })
      })]
    })]
  });
};

export default ScrollingFeaturedGenreGameContainer;
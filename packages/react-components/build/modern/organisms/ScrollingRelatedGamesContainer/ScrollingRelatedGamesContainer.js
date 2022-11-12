import _extends from "@babel/runtime/helpers/esm/extends";
// Modules
import { Box, Link, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Typography from "../../atoms/Typography";
import RelatedGameCard from "../../molecules/RelatedGameCard";
import { IconNextSlide, IconPrevSlide } from "../../atoms/Icon"; // Styles

import colors from "../../theme/colors";
import { MobileDown, SmallMobileDown, TabletDown, Desktop } from "../../utils/viewport";
// Types
import Container from "../../atoms/Container";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const ScrollingRelatedGamesContainer = props => {
  const {
    listThumbnail,
    title,
    viewMore,
    classSection = 'thumbnail-card-carousel',
    stepScroll = 1,
    id
  } = props;
  const [disableArrowRight, setDisableArrowRight] = useState(false);
  const [disableArrowLeft, setDisableArrowLeft] = useState(true);
  const [paddingScrollContent, setPaddingScrollContent] = useState(0);
  const theme = useTheme();
  const isDesktop = useMediaQuery(Desktop(theme));
  const isTabletDown = useMediaQuery(TabletDown(theme));
  const isMobileDown = useMediaQuery(MobileDown(theme));
  const refIsMobile = useRef(isMobileDown);
  const isMobileMin = useMediaQuery(SmallMobileDown(theme));
  const refIsMobileMin = useRef(isMobileMin);
  const refWrapper = useRef();
  const refContainer = useRef();
  const refItemContent = useRef();
  const refWidthItem = useRef();
  const refWrapperContent = useRef();
  const refFullWidthContent = useRef(0);
  const refScrollRight = useRef(false);
  const refLastChild = useRef();
  const refTimeout = useRef(); // const refIsShow = useRef<any>();

  useEffect(() => {
    refIsMobileMin.current = isMobileMin;
  }, [isMobileMin]); // handle event resize set translateX item content scroll 

  useEffect(() => {
    if (typeof window !== "undefined") {
      refIsMobile.current = isMobileDown; // set padding-left content scroll  = left container.

      setPaddingScrollContent(refContainer.current?.offsetLeft + (refIsMobileMin.current ? 16 : 24));
      refWidthItem.current = refItemContent.current?.offsetWidth + 24; // listen to events window resize for change padding left  content scroll.

      window.addEventListener("resize", () => {
        if (refWrapperContent.current) {
          const listChild = refWrapperContent.current.querySelectorAll(".childContent");

          if (listChild.length) {
            listChild.forEach(child => {
              child.style.transform = `translateX(${refContainer.current?.offsetLeft + (refIsMobileMin.current ? 16 : 24)}px)`;
            });
          }

          const itemLastChild = refLastChild.current.getBoundingClientRect();
          const positionWidth = itemLastChild.x;

          if (positionWidth <= refWrapperContent.current.clientWidth) {
            setDisableArrowRight(true);
          } else {
            setDisableArrowRight(false);
          }
        }

        refLastChild.current.style.marginLeft = `${refContainer.current?.offsetLeft + (refIsMobileMin.current ? 16 : 24)}px`; // set width item

        refWidthItem.current = refItemContent.current?.offsetWidth + 24; // get full width content scroll

        refFullWidthContent.current = refItemContent.current?.offsetWidth + 24 + (refWidthItem.current * listThumbnail.length || 1);
        refIsMobile.current = isMobileDown;
      });
    }

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [listThumbnail, isMobileDown]); // handel event scroll refWrapperContent disable btn left or right

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
  }, [disableArrowRight, disableArrowLeft]); // dispatchEvent event send id to sub navigation

  useEffect(() => {
    if (typeof window !== "undefined") {
      const container = refWrapper.current; // const height = window.innerHeight;

      window.addEventListener("scroll", () => {
        if (container) {
          const {
            bottom,
            top
          } = container.getBoundingClientRect();
          const newBottom = Math.floor(bottom);
          const newTop = Math.floor(top);

          if (newTop < 120 && newBottom > 100) {
            // refIsShow.current = true;
            window?.dispatchEvent(new Event(`${id}`));
          } // if ((newBottom < 0 && refIsShow.current) || (newTop > height && refIsShow.current)) {
          //   refIsShow.current = false;
          //   window.removeEventListener(`${id}`, () => { })
          // }

        }
      });
    }

    return () => {
      window.removeEventListener(`${id}`, () => {});
      window.removeEventListener(`scroll`, () => {});
    };
  }, [id]); // reset scroll

  useEffect(() => {
    if (typeof window !== "undefined") {
      refWrapperContent.current?.scrollBy({
        left: 0,
        behavior: "smooth"
      });
      const content = refWrapperContent.current;

      if (content) {
        const itemLastChild = refLastChild.current.getBoundingClientRect();
        const positionWidth = itemLastChild.x;

        if (positionWidth <= content.clientWidth) {
          setDisableArrowRight(true);
        } else {
          setDisableArrowRight(false);
        }
      }
    }
  }, [paddingScrollContent]); // handle next item

  const next = () => {
    const clientWidth = refItemContent.current.clientWidth * stepScroll;
    refWrapperContent.current?.scrollBy({
      left: clientWidth,
      behavior: "smooth"
    });
  }; // handle prev item


  const previous = () => {
    const clientWidth = refItemContent.current.clientWidth * stepScroll;
    refWrapperContent.current?.scrollBy({
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
  //       const length = listThumbnail.length || 0;
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
    className: classSection,
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      '& a': {
        outline: 'none'
      }
    },
    id: id,
    ref: refWrapper,
    children: [/*#__PURE__*/_jsx(Container, {
      ref: refContainer,
      children: /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '0',
          paddingRight: '16px',
          maxWidth: {
            xs: 'calc(100vw - 16px)',
            md: '720px',
            lg: '960px',
            xl: '1140px'
          }
        },
        children: [title && /*#__PURE__*/_jsx(Typography, {
          variant: "h4",
          color: colors.primary.bandaiNamcoBlack,
          children: title
        }), /*#__PURE__*/_jsxs(Box, {
          sx: {
            display: 'flex',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/_jsx(Box, {
            children: viewMore?.title && /*#__PURE__*/_jsx(Link, {
              href: viewMore?.href,
              target: viewMore?.target,
              sx: {
                borderBottom: `1px solid ${colors.neutral.neutral2}`,
                transition: 'all .4s',
                color: colors.neutral.neutral2,
                textDecoration: 'none',
                lineHeight: '21px',
                display: 'inline-block',
                '&:hover': {
                  '& p': {
                    color: colors.primary.bandaiNamcoBlack
                  },
                  borderBottom: `1px solid ${colors.primary.bandaiNamcoBlack}`
                }
              },
              children: /*#__PURE__*/_jsx(Typography, {
                variant: "p5",
                color: colors.neutral.neutral2,
                sx: {
                  transition: 'all .4s'
                },
                children: viewMore?.title
              })
            })
          }), !isTabletDown && (isDesktop ? listThumbnail?.length > 3 : listThumbnail?.length > 2) && /*#__PURE__*/_jsxs(Box, {
            sx: {
              display: 'flex',
              alignItems: 'center',
              marginLeft: '48px'
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
              funcClick: () => {
                next();
                refScrollRight.current = true;
              },
              children: /*#__PURE__*/_jsx(IconNextSlide, {
                htmlColor: "transparent",
                sx: {
                  height: '10px'
                }
              })
            })]
          })]
        })]
      })
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        marginTop: '44px',
        width: "100%",
        position: "relative",
        overflowX: "hidden"
      },
      children: /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          width: "100%",
          height: "100%",
          overflowX: "scroll",
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          overscrollBehaviorX: "contain",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        } // onScroll={handleScroll}
        ,
        ref: refWrapperContent,
        children: [listThumbnail && listThumbnail.length > 0 && listThumbnail.map((item, index) => /*#__PURE__*/_jsx(Box, {
          sx: {
            display: "inline-flex",
            scrollSnapAlign: "start"
          },
          ref: refItemContent,
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              minWidth: {
                xs: "331px",
                md: "357px"
              },
              display: "flex",
              marginLeft: "0px",
              marginRight: {
                xs: "0px",
                md: '22px'
              },
              transform: `translateX(${paddingScrollContent}px)`
            },
            className: "childContent",
            ref: refItemContent,
            children: /*#__PURE__*/_jsx(RelatedGameCard, _extends({}, item))
          })
        }, index)), /*#__PURE__*/_jsx(Box, {
          sx: {
            display: "inline-block"
          },
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "flex",
              marginLeft: `${paddingScrollContent - 32}px`,
              paddingRight: '0px',
              // width: "0px",
              // height: "0px",
              opacity: "0",
              width: "10px",
              height: "10px"
            },
            ref: refLastChild
          })
        })]
      })
    })]
  });
};

export default ScrollingRelatedGamesContainer;
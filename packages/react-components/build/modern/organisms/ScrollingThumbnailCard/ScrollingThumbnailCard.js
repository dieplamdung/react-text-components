import _extends from "@babel/runtime/helpers/esm/extends";
// import modules
import { Box, Link, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Typography from "../../atoms/Typography";
import colors from "../../theme/colors"; // import types

import { MobileDown, SmallMobileDown, SmallDesktopDown } from "../../utils/viewport";
import Container from "../../atoms/Container";
import { IconNextSlide, IconPrevSlide } from "../../atoms/Icon";
import ThumbnailNewsCard from "./ThumbnailNewsCard";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const ScrollingThumbnailCard = props => {
  const {
    listThumbnail,
    title,
    viewMore,
    classSection = 'thumbnail-card-carousel',
    stepScroll = 1,
    locale = 'en-us',
    isReverse = false
  } = props;
  const [disableArrowRight, setDisableArrowRight] = useState(false);
  const [disableArrowLeft, setDisableArrowLeft] = useState(true);
  const [paddingScrollContent, setPaddingScrollContent] = useState(0);
  const theme = useTheme();
  const isMobileDown = useMediaQuery(MobileDown(theme));
  const refIsMobile = useRef(isMobileDown);
  const isMobileMin = useMediaQuery(SmallMobileDown(theme));
  const refIsMobileMin = useRef(isMobileMin);
  const isTabletDown = useMediaQuery(SmallDesktopDown(theme));
  const refWrapper = useRef();
  const refContainer = useRef();
  const refWrapperContent = useRef();
  const refItemContent = useRef();
  const refLastChild = useRef();
  const refTimeout = useRef();
  useEffect(() => {
    refIsMobileMin.current = isMobileMin;
  }, [isMobileMin]); // handle event resize set translateX item content scroll 

  useEffect(() => {
    if (typeof window !== "undefined") {
      refIsMobile.current = isMobileDown; // set padding-left content scroll  = left container.

      setPaddingScrollContent(refContainer.current?.offsetLeft + (refIsMobileMin.current ? 16 : 24)); // listen to events window resize for change padding left  content scroll.

      window.addEventListener("resize", () => {
        // set padding left when window resize
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

        refLastChild.current.style.marginLeft = `${refContainer.current?.offsetLeft + (refIsMobileMin.current ? 16 : 24)}px`;
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
  }, [disableArrowRight, disableArrowLeft]); // reset scroll

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
  };

  return /*#__PURE__*/_jsxs(Box, {
    className: classSection,
    sx: {
      '& a': {
        outline: 'none'
      }
    },
    ref: refWrapper,
    children: [/*#__PURE__*/_jsx(Container, {
      ref: refContainer,
      children: /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '0'
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
          }), !isMobileDown && (isTabletDown ? listThumbnail.length > 2 : listThumbnail.length > 3) && /*#__PURE__*/_jsxs(Box, {
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
        width: "100%",
        marginTop: {
          xs: "24px",
          lg: "40px"
        },
        position: "relative",
        overflowX: "hidden"
      },
      className: "wrapper-content-component",
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
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        },
        ref: refWrapperContent // onScroll={handleScroll}
        ,
        children: [!!listThumbnail?.length && listThumbnail.map((item, index) => /*#__PURE__*/_jsx(Box, {
          sx: {
            display: "inline-block",
            scrollSnapAlign: "start"
          },
          ref: refItemContent,
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "flex",
              marginLeft: "0px",
              paddingRight: '22px',
              transform: `translateX(${paddingScrollContent}px)`
            },
            className: "childContent",
            children: /*#__PURE__*/_jsx(ThumbnailNewsCard, _extends({}, item, {
              locale: locale,
              isReverse: isReverse
            }))
          })
        }, index)), /*#__PURE__*/_jsx(Box, {
          sx: {
            display: "flex"
          },
          className: "1111",
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "flex",
              marginLeft: `${paddingScrollContent - 32}px`,
              paddingRight: '0px',
              width: "10px",
              height: "10px",
              opacity: "0"
            },
            ref: refLastChild
          })
        })]
      })
    })]
  });
};

export default /*#__PURE__*/React.memo(ScrollingThumbnailCard);
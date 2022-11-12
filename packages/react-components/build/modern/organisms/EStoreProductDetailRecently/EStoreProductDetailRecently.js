import _extends from "@babel/runtime/helpers/esm/extends";
// Modules
import { Box, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Typography from "../../atoms/Typography";
import { IconNextSlide, IconPrevSlide } from "../../atoms/Icon"; // Styles

import colors from "../../theme/colors";
import { MobileDown, SmallMobileDown, TabletDown } from "../../utils/viewport";
// Types
import Container from "../../atoms/Container";
import ProductItem from "../EStoreProduct/ProductItem";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const ScrollingDLCContainer = props => {
  const {
    productList,
    title,
    stepScroll = 1
  } = props;
  const [disableArrowRight, setDisableArrowRight] = useState(false);
  const [disableArrowLeft, setDisableArrowLeft] = useState(true);
  const [paddingScrollContent, setPaddingScrollContent] = useState(0);
  const theme = useTheme();
  const isTabletDown = useMediaQuery(TabletDown(theme));
  const isMobileDown = useMediaQuery(MobileDown(theme));
  const refIsMobile = useRef(isMobileDown);
  const isMobileMin = useMediaQuery(SmallMobileDown(theme));
  const refIsMobileMin = useRef(isMobileMin);
  const refWrapper = useRef();
  const refContainer = useRef();
  const refItemContent = useRef();
  const refWrapperContent = useRef();
  const refLastChild = useRef();
  const refTimeout = useRef(); // handel event scroll refWrapperContent disable btn left or right

  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const content = refWrapperContent.current;

      if (content && !refIsMobileMin.current) {
        content.addEventListener("scroll", () => {
          if (!isTabletDown) {
            const itemLastChild = refLastChild.current?.getBoundingClientRect();
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
          }
        });
      }
    }
  }; // handle setPaddingScrollContent


  useEffect(() => {
    if (typeof window !== "undefined") {
      refIsMobile.current = isMobileDown; // set padding-left content scroll  = left container.

      setPaddingScrollContent(refContainer.current?.offsetLeft + (refIsMobileMin.current ? 16 : 24));
      let time = null;
      window.addEventListener("resize", () => {
        if (time) {
          window.clearTimeout(time);
        }

        time = setTimeout(() => {
          time = null;
          setPaddingScrollContent(refContainer.current?.offsetLeft + (refIsMobileMin.current ? 16 : 24));
        }, 150);
      });
    }

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [productList, isMobileDown, isTabletDown]); // handle next item

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
  };

  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      padding: {
        xs: "72px 0px",
        md: "80px 0px"
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
          paddingLeft: '0',
          paddingRight: '16px',
          maxWidth: {
            xs: 'calc(100vw - 16px)',
            md: '720px',
            lg: '960px',
            xl: '1140px'
          },
          padding: {
            xs: "0px 16px",
            md: "0px"
          }
        },
        children: [title && /*#__PURE__*/_jsx(Typography, {
          variant: "h4",
          sx: {
            color: colors.primary.bandaiNamcoBlack,
            width: 'auto',
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            "-webkit-line-clamp": "2",

            /* number of lines to show */
            lineClamp: "2",
            "-webkit-box-orient": "vertical"
          },
          children: title
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            display: "flex",
            alignItems: "center"
          },
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              display: 'flex',
              alignItems: 'center'
            },
            children: !isTabletDown && productList?.length > 2 && /*#__PURE__*/_jsxs(Box, {
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
            })
          })
        })]
      })
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        width: "100%",
        marginTop: {
          xs: "24px",
          md: '40px'
        },
        position: "relative",
        overflowX: "hidden"
      },
      children: /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: "flex",
          gap: "24px",
          flexDirection: "row",
          flexWrap: "nowrap",
          width: "100%",
          overflow: "scroll",
          transition: "all 0.3s",
          scrollSnapType: "x mandatory",
          "-webkit-scroll-snap-type": "x mandatory",
          webkitOverflowScrolling: "touch",
          overscrollBehaviorX: "contain",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        },
        onScroll: handleScroll,
        ref: refWrapperContent,
        children: [!!productList?.length && productList.map((item, index) => {
          return /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "inline-block",
              scrollSnapAlign: "start"
            },
            ref: refItemContent,
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                display: "flex",
                width: {
                  xs: '201px',
                  md: '262px'
                },
                transform: {
                  xs: `translateX(${paddingScrollContent + 10}px)`,
                  md: `translateX(${paddingScrollContent}px)`
                }
              },
              className: "childContent",
              ref: refItemContent,
              children: /*#__PURE__*/_jsx(ProductItem, _extends({}, item, {
                isShowBottom: true
              }))
            })
          }, index);
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            display: {
              xs: "none",
              lg: "inline-block"
            }
          },
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "flex",
              marginLeft: `${paddingScrollContent - 34}px`,
              paddingRight: '0px',
              width: "1px",
              height: "11px",
              opacity: "0"
            },
            ref: refLastChild
          })
        })]
      })
    })]
  });
};

export default ScrollingDLCContainer;
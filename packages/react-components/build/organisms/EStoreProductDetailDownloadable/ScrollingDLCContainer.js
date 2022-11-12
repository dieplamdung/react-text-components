import _extends from "@babel/runtime/helpers/esm/extends";
// Modules
import { Box, Link, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Typography from "../../atoms/Typography";
import DLCCard from "../../molecules/DLCCard";
import { IconNextSlide, IconPrevSlide } from "../../atoms/Icon"; // Styles

import colors from "../../theme/colors";
import { MobileDown, SmallMobileDown, TabletDown } from "../../utils/viewport";
// Types
import Container from "../../atoms/Container";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const ScrollingDLCContainer = props => {
  const {
    listThumbnail,
    title,
    stepScroll = 1,
    alertShow = ["Show more", "Show less"],
    onClickBuyItem,
    nextLink,
    titleSeeAll,
    hrefSeeAll
  } = props;
  const [disableArrowRight, setDisableArrowRight] = useState(false);
  const [disableArrowLeft, setDisableArrowLeft] = useState(true);
  const [paddingScrollContent, setPaddingScrollContent] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [totalHeightItem, setTotalHeightItem] = useState(0);
  const [height3Item, setHeight3Item] = useState(0);
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
  const refTimeout = useRef(); // const refIsShow = useRef<any>();

  useEffect(() => {
    refIsMobileMin.current = isMobileMin;
    setShowMore(false);

    if (isMobileMin && typeof window !== "undefined" && (listThumbnail == null ? void 0 : listThumbnail.length) > 3) {
      const content = refWrapperContent.current;

      if (content) {
        const listChild = refWrapperContent.current.querySelectorAll(".childContent");

        if (listChild.length) {
          let heightTotal = 0;
          let heightMinItem = 0;
          listChild.forEach((child, index) => {
            if (index < 3) {
              heightMinItem += child.clientHeight + 104;
            }

            heightTotal += child.clientHeight + 104;
          });
          setTotalHeightItem(heightTotal - 104);
          setHeight3Item(heightMinItem - 104);
        }
      }
    }
  }, [isMobileMin, listThumbnail]); // handle event resize set translateX item content scroll 

  useEffect(() => {
    if (typeof window !== "undefined") {
      var _refContainer$current;

      refIsMobile.current = isMobileDown; // set padding-left content scroll  = left container.

      setPaddingScrollContent(((_refContainer$current = refContainer.current) == null ? void 0 : _refContainer$current.offsetLeft) + (refIsMobileMin.current ? 16 : 24)); // listen to events window resize for change padding left  content scroll.

      window.addEventListener("resize", () => {
        var _refContainer$current3;

        // set padding left when window resize
        if (refWrapperContent.current && !refIsMobileMin.current) {
          const listChild = refWrapperContent.current.querySelectorAll(".childContent");

          if (listChild.length) {
            listChild.forEach(child => {
              var _refContainer$current2;

              child.style.transform = `translateX(${((_refContainer$current2 = refContainer.current) == null ? void 0 : _refContainer$current2.offsetLeft) + (refIsMobileMin.current ? 16 : 24)}px)`;
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

        refLastChild.current.style.marginLeft = `${((_refContainer$current3 = refContainer.current) == null ? void 0 : _refContainer$current3.offsetLeft) + (refIsMobileMin.current ? 16 : 24)}px`;
      });
    }

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [listThumbnail, isMobileDown]); // handel event scroll refWrapperContent disable btn left or right

  useEffect(() => {
    if (typeof window !== "undefined") {
      const content = refWrapperContent.current;

      if (content && !refIsMobileMin.current) {
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
      var _refWrapperContent$cu;

      (_refWrapperContent$cu = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu.scrollBy({
        left: 0,
        behavior: "smooth"
      });
      const content = refWrapperContent.current;

      if (content && !refIsMobileMin.current) {
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
    var _refWrapperContent$cu2;

    const clientWidth = refItemContent.current.clientWidth * stepScroll;
    (_refWrapperContent$cu2 = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu2.scrollBy({
      left: clientWidth,
      behavior: "smooth"
    });
  }; // handle prev item


  const previous = () => {
    var _refWrapperContent$cu3;

    const clientWidth = refItemContent.current.clientWidth * stepScroll;
    (_refWrapperContent$cu3 = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu3.scrollBy({
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
        }), /*#__PURE__*/_jsxs(Box, {
          sx: {
            display: "flex",
            alignItems: "center"
          },
          children: [!!titleSeeAll && hrefSeeAll && /*#__PURE__*/_jsx(Box, {
            sx: {
              display: {
                xs: "none",
                md: "flex"
              },
              "& a": {
                textDecoration: "none"
              }
            },
            children: typeof nextLink === 'function' ? nextLink == null ? void 0 : nextLink(hrefSeeAll || "", /*#__PURE__*/_jsx(Typography, {
              variant: "p5",
              sx: {
                color: colors.neutral.neutral2,
                width: "fit-content",
                position: "relative",
                whiteSpace: "nowrap",
                "&:before": {
                  position: "absolute",
                  content: "' '",
                  left: "0px",
                  bottom: "0px",
                  width: "100%",
                  borderBottom: `1px solid ${colors.neutral.neutral2}`
                }
              },
              children: titleSeeAll
            })) : /*#__PURE__*/_jsx(Link, {
              href: hrefSeeAll,
              sx: {
                textDecoration: "none"
              },
              children: /*#__PURE__*/_jsx(Typography, {
                variant: "p5",
                sx: {
                  color: colors.neutral.neutral2,
                  width: "fit-content",
                  position: "relative",
                  whiteSpace: "nowrap",
                  "&:before": {
                    position: "absolute",
                    content: "' '",
                    left: "0px",
                    bottom: "0px",
                    width: "100%",
                    borderBottom: `1px solid ${colors.neutral.neutral2}`
                  }
                },
                children: titleSeeAll
              })
            })
          }), /*#__PURE__*/_jsx(Box, {
            sx: {
              display: 'flex',
              alignItems: 'center'
            },
            children: !isTabletDown && (listThumbnail == null ? void 0 : listThumbnail.length) > 2 && /*#__PURE__*/_jsxs(Box, {
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
          })]
        })]
      })
    }), /*#__PURE__*/_jsxs(Box, {
      sx: {
        width: "100%",
        marginTop: {
          xs: "24px",
          md: '40px'
        },
        position: "relative",
        overflowX: "hidden"
      },
      children: [/*#__PURE__*/_jsxs(Box, {
        sx: {
          display: "flex",
          flexDirection: {
            xs: "column",
            md: "row"
          },
          flexWrap: "nowrap",
          width: "100%",
          height: {
            xs: (listThumbnail == null ? void 0 : listThumbnail.length) > 3 ? `${showMore ? totalHeightItem : height3Item}px` : "100%",
            md: "100%"
          },
          overflow: {
            xs: (listThumbnail == null ? void 0 : listThumbnail.length) > 3 ? `${showMore ? "auto" : "hidden"}` : "auto",
            md: "scroll"
          },
          transition: "all 0.3s",
          scrollSnapType: "x mandatory",
          "-webkit-scroll-snap-type": "x mandatory",
          webkitOverflowScrolling: "touch",
          overscrollBehaviorX: "contain",
          // scrollBehavior: "smooth",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        } // onScroll={handleScroll}
        ,
        ref: refWrapperContent,
        children: [listThumbnail && listThumbnail.length > 0 && listThumbnail.map((item, index) => {
          return /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "inline-block",
              scrollSnapAlign: {
                xs: 'none',
                md: "start"
              },
              marginBottom: {
                xs: index === listThumbnail.length - 1 ? "0px" : "104px",
                md: "0px"
              }
            },
            ref: refItemContent,
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                display: "flex",
                minWidth: {
                  xs: '311px',
                  md: '371px'
                },
                marginLeft: "0px",
                paddingRight: {
                  xs: "16px",
                  md: '24px'
                },
                paddingLeft: {
                  xs: "16px",
                  md: '0px'
                },
                transform: {
                  xs: "0px",
                  md: `translateX(${paddingScrollContent}px)`
                }
              },
              className: "childContent",
              ref: refItemContent,
              children: /*#__PURE__*/_jsx(DLCCard, _extends({}, item, {
                isButtonSecond: true,
                onClickBuy: () => {
                  onClickBuyItem == null ? void 0 : onClickBuyItem(item == null ? void 0 : item.id);
                }
              }))
            })
          }, index);
        }), !isMobileMin && /*#__PURE__*/_jsx(Box, {
          sx: {
            display: "inline-block"
          },
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "flex",
              marginLeft: `${paddingScrollContent - 34}px`,
              paddingRight: '0px',
              width: "10px",
              height: "10px",
              opacity: "0"
            },
            ref: refLastChild
          })
        })]
      }), isMobileMin && (listThumbnail == null ? void 0 : listThumbnail.length) > 3 && /*#__PURE__*/_jsx(Box, {
        sx: {
          display: "flex",
          justifyContent: "center",
          marginTop: "48px"
        },
        children: /*#__PURE__*/_jsx(Typography, {
          color: colors.primary.bandaiNamcoRed,
          variant: "p5",
          sx: {
            position: 'relative',
            "&:after": {
              content: "' '",
              position: "absolute",
              left: "0px",
              bottom: "0px",
              width: "100%",
              borderBottom: "1px solid",
              borderBottomColor: colors.primary.bandaiNamcoRed
            }
          },
          onClick: () => setShowMore(!showMore),
          children: showMore ? alertShow[1] : alertShow[0]
        })
      })]
    })]
  });
};

export default ScrollingDLCContainer;
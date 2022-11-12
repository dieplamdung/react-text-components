import _extends from "@babel/runtime/helpers/esm/extends";
// import modules
import { Box, Modal, useMediaQuery, useTheme } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import Typography from "../../atoms/Typography";
import { IconNextSlide, IconPrevSlide } from "../../atoms/Icon";
import Container from "../../atoms/Container";
import VideoPopupSlider from "../VideoPopupSlider";
import { disableScrollBody } from "../../utils/disableScrollBody"; // import styles

import { TabletDown, SmallMobileDown } from "../../utils/viewport";
import colors from "../../theme/colors"; // import types

import FeaturedNewsCard from "./FeaturedNewsCard";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const ScrollingFeaturedCard = props => {
  const {
    listFeaturedNewsCard,
    title,
    stepScroll = 1
  } = props;
  const [openPopup, setOpenPopup] = useState(false);
  const [disableArrowRight, setDisableArrowRight] = useState(false);
  const [disableArrowLeft, setDisableArrowLeft] = useState(true);
  const [dataForPopup, setDataForPopup] = useState([]);
  const [paddingScrollContent, setPaddingScrollContent] = useState(0);
  const theme = useTheme();
  const isTabletDown = useMediaQuery(TabletDown(theme));
  const refIsMobile = useRef(isTabletDown);
  const isMobileMin = useMediaQuery(SmallMobileDown(theme));
  const refIsMobileMin = useRef(isMobileMin);
  const refWrapper = useRef();
  const refContainer = useRef();
  const refItemContent = useRef();
  const refWrapperContent = useRef();
  const refLastChild = useRef();
  const refTimeout = useRef();
  /**
   * Use to disable scroll body
   */

  useEffect(() => {
    if (typeof window !== "undefined") {
      disableScrollBody(openPopup);
    }
  }, [openPopup]);
  useEffect(() => {
    refIsMobileMin.current = isMobileMin;
  }, [isMobileMin]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      var _refContainer$current;

      refIsMobile.current = isMobileMin; // set padding-left content scroll  = left container.

      setPaddingScrollContent(((_refContainer$current = refContainer.current) == null ? void 0 : _refContainer$current.offsetLeft) + (refIsMobileMin.current ? 16 : 24)); // listen to events window resize for change padding left  content scroll.

      window.addEventListener("resize", () => {
        // set padding left when window resize
        if (refWrapperContent.current) {
          const listChild = refWrapperContent.current.querySelectorAll(".childContent");

          if (listChild.length) {
            listChild.forEach(child => {
              if (child) {
                var _refContainer$current2;

                child.style.transform = `translateX(${((_refContainer$current2 = refContainer.current) == null ? void 0 : _refContainer$current2.offsetLeft) + (refIsMobileMin.current ? 16 : 24)}px)`;
              }
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

        if (refLastChild.current) {
          var _refContainer$current3;

          refLastChild.current.style.marginLeft = `${((_refContainer$current3 = refContainer.current) == null ? void 0 : _refContainer$current3.offsetLeft) + (refIsMobileMin.current ? 16 : 24)}px`;
        }
      });
    }

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [listFeaturedNewsCard, isTabletDown, isMobileMin]); // handel event scroll refWrapperContent disable btn left or right

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
      var _refWrapperContent$cu;

      (_refWrapperContent$cu = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu.scrollBy({
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
  }, [paddingScrollContent]);

  const next = () => {
    var _refWrapperContent$cu2;

    const clientWidth = refItemContent.current.clientWidth * stepScroll;
    (_refWrapperContent$cu2 = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu2.scrollBy({
      left: clientWidth,
      behavior: "smooth"
    });
  };

  const previous = () => {
    var _refWrapperContent$cu3;

    const clientWidth = refItemContent.current.clientWidth * stepScroll;
    (_refWrapperContent$cu3 = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu3.scrollBy({
      left: -clientWidth,
      behavior: "smooth"
    });
  };

  const handleClickedButton = card => {
    var _card$trailers;

    setOpenPopup(true); // disableScrollBody(true)

    if (card != null && (_card$trailers = card.trailers) != null && _card$trailers.length) {
      setDataForPopup(card == null ? void 0 : card.trailers);
    }
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
    className: "featured-card-carousel",
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
          color: colors.primary.bandaiNamcoBlack,
          children: title
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            display: 'flex',
            alignItems: 'center'
          },
          children: !isTabletDown && (listFeaturedNewsCard == null ? void 0 : listFeaturedNewsCard.length) > 1 && /*#__PURE__*/_jsxs(Box, {
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
      })
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        marginTop: {
          xs: '24px',
          lg: "40px"
        },
        minHeight: {
          xs: "360px",
          lg: "460px"
        },
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
        children: [listFeaturedNewsCard.map((card, index) => {
          return /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "inline-block",
              scrollSnapAlign: "start"
            },
            ref: refItemContent,
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                display: "flex",
                marginLeft: "0px",
                paddingRight: {
                  xs: "20px",
                  lg: "32px",
                  xl: "100px"
                },
                transform: `translateX(${paddingScrollContent}px)`
              },
              className: "childContent",
              children: /*#__PURE__*/_jsx(FeaturedNewsCard, _extends({}, card, {
                variant: !isTabletDown ? 'horizontal' : 'vertical',
                onScrolling: true,
                setOpenTrailerPopup: () => handleClickedButton(card)
              }))
            })
          }, index);
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
    }), /*#__PURE__*/_jsx(Modal, {
      open: !!(dataForPopup != null && dataForPopup.length) && openPopup,
      sx: {
        pointerEvents: 'auto'
      },
      children: /*#__PURE__*/_jsx(VideoPopupSlider, {
        handleOpenPopup: result => {
          setOpenPopup(result);
        },
        trailerItems: dataForPopup,
        initialItem: 0
      })
    })]
  });
};

export default ScrollingFeaturedCard;
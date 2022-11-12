import _extends from "@babel/runtime/helpers/esm/extends";

var _IconDownload;

// import Modules
import React, { useEffect, useRef, useState, useMemo } from 'react';
import { Box, Modal, useMediaQuery, useTheme } from '@mui/material';
import Typography from "../../atoms/Typography";
import { IconDownload, IconNextSlide, IconPrevSlide } from "../../atoms/Icon";
import Container from "../../atoms/Container";
// import Styles
import colors from "../../theme/colors";
import { MobileDown, SmallMobileDown, TabletDown } from "../../utils/viewport";
// import Types
import loadable from '@loadable/component';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const DigitalDownloadCard = loadable(() => import("../../molecules/DigitalDownloadCard"));
const ImagePopupSlider = loadable(() => import("../ImagePopupSlider"));

const ScrollingRelatedGamesContainer = props => {
  const {
    listThumbnail,
    title,
    classSection = 'thumbnail-card-carousel',
    description,
    stepScroll = 1,
    isShowPopup = false,
    id
  } = props;
  const [disableArrowRight, setDisableArrowRight] = useState(false);
  const [disableArrowLeft, setDisableArrowLeft] = useState(true);
  const [openPopup, setOpenPopup] = useState(false);
  const [itemSlider, setItemSlider] = useState();
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
  const refScrollRight = useRef(false);
  const refLastChild = useRef();
  const refTimeout = useRef();
  const DOWNLOAD_TEXT = "Download";
  /**
   * Use to format data for ImagePopupSlider
   */

  const screenshotItems = useMemo(() => {
    return listThumbnail?.map(item => {
      return {
        mainImage: item?.mainImage ?? '',
        alt: item?.title,
        title: item?.title ?? '',
        description: item?.description ?? '',
        icon: _IconDownload || (_IconDownload = /*#__PURE__*/_jsx(IconDownload, {})),
        iconText: {
          href: item?.mainImage,
          label: DOWNLOAD_TEXT
        }
      };
    });
  }, [listThumbnail]) || [];
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
              if (child) {
                child.style.transform = `translateX(${refContainer.current?.offsetLeft + (refIsMobileMin.current ? 16 : 22)}px)`;
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
          refLastChild.current.style.marginLeft = `${refContainer.current?.offsetLeft + (refIsMobileMin.current ? 16 : 22)}px`;
        }
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
  }, [paddingScrollContent]); // dispatchEvent event send id to sub navigation

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
  }, [id]);

  const next = () => {
    const clientWidth = refItemContent.current.clientWidth * stepScroll;
    refWrapperContent.current?.scrollBy({
      left: clientWidth,
      behavior: "smooth"
    });
  };

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

  const handleClickItem = index => {
    if (isShowPopup) {
      setOpenPopup(!openPopup);
      setItemSlider(index);
    }
  };

  return /*#__PURE__*/_jsxs(Box, {
    className: classSection,
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column"
    },
    ref: refWrapper,
    id: id,
    children: [/*#__PURE__*/_jsxs(Container, {
      sx: {
        display: "flex",
        justifyContent: "space-between"
      },
      ref: refContainer,
      children: [/*#__PURE__*/_jsxs(Box, {
        children: [title && /*#__PURE__*/_jsx(Typography, {
          variant: "h4",
          color: colors.primary.bandaiNamcoBlack,
          children: title
        }), description && /*#__PURE__*/_jsx(Typography, {
          variant: "p2",
          sx: {
            color: colors.neutral.neutral2,
            marginTop: "8px"
          },
          children: description
        })]
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          display: {
            xs: 'none',
            md: 'flex'
          },
          alignItems: 'center'
        },
        children: !isTabletDown && listThumbnail?.length > 2 && /*#__PURE__*/_jsxs(Box, {
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
        })
      })]
    }), /*#__PURE__*/_jsx(Box, {
      sx: {
        width: "100%",
        marginTop: '44px',
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
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        },
        ref: refWrapperContent,
        children: [listThumbnail && listThumbnail.length > 0 && listThumbnail.map((item, index) => /*#__PURE__*/_jsx(Box, {
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
              height: "100%",
              minWidth: {
                md: "371px",
                xs: "355px"
              },
              maxWidth: {
                md: "371px",
                xs: "355px"
              },
              transform: `translateX(${paddingScrollContent}px)`
            },
            className: "childContent",
            ref: refItemContent,
            onClick: () => handleClickItem(index),
            children: /*#__PURE__*/_jsx(DigitalDownloadCard, _extends({}, item))
          })
        }, index)), /*#__PURE__*/_jsx(Box, {
          sx: {
            display: "inline-block"
          },
          children: /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "flex",
              marginLeft: `${paddingScrollContent - 24}px`,
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
    }), /*#__PURE__*/_jsx(Modal, {
      open: openPopup,
      children: /*#__PURE__*/_jsx(ImagePopupSlider, {
        handleOpenPopup: () => setOpenPopup(false),
        screenshotItems: screenshotItems,
        initialItem: itemSlider ?? 0
      })
    })]
  });
};

export default ScrollingRelatedGamesContainer;
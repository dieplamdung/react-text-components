import _extends from "@babel/runtime/helpers/esm/extends";
// import modules
import Box from '@mui/material/Box';
import React, { useLayoutEffect, useRef, useState } from 'react';
import Typography from "../../atoms/Typography";
import PopularCard from "../../molecules/PopularCard";
import useMediaQuery from '@mui/material/useMediaQuery';
import { SmallMobileDown, TabletDown } from "../../utils/viewport"; // import styles

import colors from "../../theme/colors"; // import type

import Container from "../../atoms/Container";
import { useTheme } from '@mui/material';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

const ScrollingPopularGameContainer = props => {
  const {
    title,
    listPopularCard
  } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(TabletDown(theme));
  const isMobileMin = useMediaQuery(SmallMobileDown(theme));
  const refIsMobileMin = useRef(isMobileMin);
  const [paddingScrollContent, setPaddingScrollContent] = useState(0);
  const refContainer = useRef();
  const refWrapperContent = useRef();
  useLayoutEffect(() => {
    refIsMobileMin.current = isMobileMin;
  }, [isMobileMin]);
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      // set padding-left content scroll  = left container.
      setPaddingScrollContent(refContainer.current.offsetLeft + (refIsMobileMin.current ? 16 : 24)); // listen to events window resize for change padding left  content scroll.

      window.addEventListener("resize", () => {
        // set padding left when window resize
        if (refWrapperContent.current) {
          const listChild = refWrapperContent.current.querySelectorAll(".childContent");

          if (listChild.length) {
            listChild.forEach(child => {
              child.style.transform = `translateX(${refContainer.current?.offsetLeft + (refIsMobileMin.current ? 16 : 22)}px)`;
            });
          }
        }
      });
    }

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [isMobile]);
  return /*#__PURE__*/_jsxs(Box, {
    children: [/*#__PURE__*/_jsx(Container, {
      ref: refContainer,
      children: title && /*#__PURE__*/_jsx(Typography, {
        variant: "h4",
        color: colors.primary.bandaiNamcoBlack,
        children: title
      })
    }), !isMobile && /*#__PURE__*/_jsx(Container, {
      children: /*#__PURE__*/_jsx(Box, {
        sx: {
          marginTop: '40px',
          display: 'flex',
          flexWrap: 'wrap',
          rowGap: '82px',
          justifyContent: 'space-between',
          '& > div': {
            width: {
              md: 'calc(300px - 22px)',
              xl: 'calc(358px - 22px)'
            },
            '% > div': {
              height: {
                md: '300px',
                xl: '358px'
              }
            }
          }
        },
        children: listPopularCard.map((itemProps, index) => /*#__PURE__*/_jsx(PopularCard, _extends({}, itemProps), index))
      })
    }), isMobile && /*#__PURE__*/_jsx(Box, {
      sx: {
        marginTop: '24px',
        width: "100%",
        position: "relative",
        overflowX: "hidden"
      },
      children: /*#__PURE__*/_jsx(Box, {
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
        ref: refWrapperContent,
        children: listPopularCard.map((itemProps, index) => {
          return /*#__PURE__*/_jsx(Box, {
            sx: {
              display: "inline-block",
              scrollSnapAlign: "start"
            },
            children: /*#__PURE__*/_jsx(Box, {
              sx: {
                display: "flex",
                marginLeft: "0px",
                minWidth: "233px",
                paddingRight: '22px',
                transform: `translateX(${paddingScrollContent}px)`
              },
              className: "childContent",
              children: /*#__PURE__*/_jsx(PopularCard, _extends({}, itemProps))
            })
          }, index);
        })
      })
    })]
  });
};

export default ScrollingPopularGameContainer;
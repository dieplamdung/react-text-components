import _extends from "@babel/runtime/helpers/esm/extends";
// import Modules
import React, { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import { Modal, useMediaQuery } from '@mui/material';
import Box from '@mui/material/Box';
import { Swiper, SwiperSlide } from "swiper/react";
import CardGame from "./CardGame"; // import Styles

import { useTheme } from '@mui/styles';
import loadable from '@loadable/component'; // import ImagePopupSlider from '~/organisms/ImagePopupSlider';

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
const ImagePopupSlider = loadable(() => import("../ImagePopupSlider"));

const CardGameList = props => {
  const {
    isNext = true,
    className = "CardGameList",
    listGame = [],
    isHomePage = false,
    secondLine = false
  } = props;
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const refTimeOut1 = useRef();
  const refTopWinDow = useRef(0);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [openPopup, setOpenPopup] = useState(false);
  const [currentItem, setCurrentItem] = useState(0);
  const cardNull = useMemo(() => {
    return {
      image: 'https://images.ctfassets.net/hnoi7ctzfs57/1Flq5y1eK7lSIaYUx3FmQE/5a8f5b56e795dddbdfb4c2dff2bf47ad/placeholder.webp'
    };
  }, []);
  const [listCardValue, setListCardValue] = useState([cardNull]);
  /**
  * Use to transform data for pop-ups
  */

  const remapScreenshotItems = useMemo(() => {
    return listCardValue?.map(item => {
      return {
        trailerTitle: item?.title ?? '',
        mainImage: item?.image,
        mainImageNext: item?.mainImageNext ?? '',
        alt: item?.alt ?? ''
      };
    });
  }, [listCardValue]);
  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      const wrapper = document.querySelector(`.${className}`);

      if (wrapper) {
        const swiper = wrapper.querySelector(".swiper-container");

        if (swiper) {
          window.addEventListener("scroll", () => {
            if (refTimeOut1.current) {
              window.clearTimeout(refTimeOut1.current);
            } // refTimeOut1.current = setTimeout(() => {


            refTimeOut1.current = undefined;

            if (window.scrollY > refTopWinDow.current) {
              refTopWinDow.current = window.scrollY;

              if (isNext) {
                swiper.swiper?.slideNext(2000, false);
              } else {
                swiper.swiper?.slidePrev(2000, false);
              }
            } else {
              refTopWinDow.current = window.scrollY;

              if (isNext) {
                swiper.swiper?.slidePrev(2000, false);
              } else {
                swiper.swiper?.slideNext(2000, false);
              }
            }
          });
        }
      }
    }

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [className, isNext, isMobile, secondLine]);
  useEffect(() => {
    if (listGame.length) {
      if (listGame.length % 2 !== 0) {
        if (!isHomePage) {
          const random = Math.floor(Math.random() * listGame.length);
          setListCardValue([...listGame, listGame[random]]);
        } else {
          setListCardValue([...listGame]);
        }
      } else {
        setListCardValue(listGame);
      }
    } else {
      setListCardValue([cardNull, cardNull, cardNull, cardNull, cardNull, cardNull, cardNull]);
    }
  }, [listGame, cardNull, isHomePage]);
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      "& .swiper-container": {
        "& .swiper-wrapper": {
          "& .swiper-slide": {
            width: "fit-content"
          }
        }
      }
    },
    className: className,
    children: [/*#__PURE__*/_jsx(Swiper, {
      slidesPerView: "auto",
      spaceBetween: isMobile ? 8 : 30,
      grabCursor: true,
      freeMode: true,
      loop: true,
      observer: true,
      className: "mySwiper",
      navigation: {
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current
      },
      children: listCardValue?.length && listCardValue?.map((item, index) => /*#__PURE__*/_jsx(SwiperSlide, {
        onClick: () => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          !item?.href && setOpenPopup(!openPopup);
          setCurrentItem(index);
        },
        children: /*#__PURE__*/_jsx(CardGame, _extends({}, item, {
          isHomePage: isHomePage,
          index: index
        }))
      }, index))
    }), /*#__PURE__*/_jsx(Modal, {
      open: openPopup,
      children: /*#__PURE__*/_jsx(ImagePopupSlider, {
        handleOpenPopup: e => setOpenPopup(e),
        initialItem: currentItem,
        screenshotItems: remapScreenshotItems
      })
    })]
  });
};

export default CardGameList;
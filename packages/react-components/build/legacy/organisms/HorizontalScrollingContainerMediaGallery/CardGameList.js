import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
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
var ImagePopupSlider = loadable(function () {
  return import("../ImagePopupSlider");
});

var CardGameList = function CardGameList(props) {
  var _props$isNext = props.isNext,
      isNext = _props$isNext === void 0 ? true : _props$isNext,
      _props$className = props.className,
      className = _props$className === void 0 ? "CardGameList" : _props$className,
      _props$listGame = props.listGame,
      listGame = _props$listGame === void 0 ? [] : _props$listGame,
      _props$isHomePage = props.isHomePage,
      isHomePage = _props$isHomePage === void 0 ? false : _props$isHomePage,
      _props$secondLine = props.secondLine,
      secondLine = _props$secondLine === void 0 ? false : _props$secondLine;
  var theme = useTheme();
  var isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  var refTimeOut1 = useRef();
  var refTopWinDow = useRef(0);
  var navigationPrevRef = useRef(null);
  var navigationNextRef = useRef(null);

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      openPopup = _useState2[0],
      setOpenPopup = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      currentItem = _useState4[0],
      setCurrentItem = _useState4[1];

  var cardNull = useMemo(function () {
    return {
      image: 'https://images.ctfassets.net/hnoi7ctzfs57/1Flq5y1eK7lSIaYUx3FmQE/5a8f5b56e795dddbdfb4c2dff2bf47ad/placeholder.webp'
    };
  }, []);

  var _useState5 = useState([cardNull]),
      _useState6 = _slicedToArray(_useState5, 2),
      listCardValue = _useState6[0],
      setListCardValue = _useState6[1];
  /**
  * Use to transform data for pop-ups
  */


  var remapScreenshotItems = useMemo(function () {
    return listCardValue == null ? void 0 : listCardValue.map(function (item) {
      var _item$title, _item$mainImageNext, _item$alt;

      return {
        trailerTitle: (_item$title = item == null ? void 0 : item.title) != null ? _item$title : '',
        mainImage: item == null ? void 0 : item.image,
        mainImageNext: (_item$mainImageNext = item == null ? void 0 : item.mainImageNext) != null ? _item$mainImageNext : '',
        alt: (_item$alt = item == null ? void 0 : item.alt) != null ? _item$alt : ''
      };
    });
  }, [listCardValue]);
  useLayoutEffect(function () {
    if (typeof window !== "undefined") {
      var wrapper = document.querySelector(".".concat(className));

      if (wrapper) {
        var swiper = wrapper.querySelector(".swiper-container");

        if (swiper) {
          window.addEventListener("scroll", function () {
            if (refTimeOut1.current) {
              window.clearTimeout(refTimeOut1.current);
            } // refTimeOut1.current = setTimeout(() => {


            refTimeOut1.current = undefined;

            if (window.scrollY > refTopWinDow.current) {
              refTopWinDow.current = window.scrollY;

              if (isNext) {
                var _swiper$swiper;

                (_swiper$swiper = swiper.swiper) == null ? void 0 : _swiper$swiper.slideNext(2000, false);
              } else {
                var _swiper$swiper2;

                (_swiper$swiper2 = swiper.swiper) == null ? void 0 : _swiper$swiper2.slidePrev(2000, false);
              }
            } else {
              refTopWinDow.current = window.scrollY;

              if (isNext) {
                var _swiper$swiper3;

                (_swiper$swiper3 = swiper.swiper) == null ? void 0 : _swiper$swiper3.slidePrev(2000, false);
              } else {
                var _swiper$swiper4;

                (_swiper$swiper4 = swiper.swiper) == null ? void 0 : _swiper$swiper4.slideNext(2000, false);
              }
            }
          });
        }
      }
    }

    return function () {
      window.removeEventListener("scroll", function () {});
    };
  }, [className, isNext, isMobile, secondLine]);
  useEffect(function () {
    if (listGame.length) {
      if (listGame.length % 2 !== 0) {
        if (!isHomePage) {
          var random = Math.floor(Math.random() * listGame.length);
          setListCardValue([].concat(_toConsumableArray(listGame), [listGame[random]]));
        } else {
          setListCardValue(_toConsumableArray(listGame));
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
      children: (listCardValue == null ? void 0 : listCardValue.length) && (listCardValue == null ? void 0 : listCardValue.map(function (item, index) {
        return /*#__PURE__*/_jsx(SwiperSlide, {
          onClick: function onClick() {
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            !(item != null && item.href) && setOpenPopup(!openPopup);
            setCurrentItem(index);
          },
          children: /*#__PURE__*/_jsx(CardGame, _extends({}, item, {
            isHomePage: isHomePage,
            index: index
          }))
        }, index);
      }))
    }), /*#__PURE__*/_jsx(Modal, {
      open: openPopup,
      children: /*#__PURE__*/_jsx(ImagePopupSlider, {
        handleOpenPopup: function handleOpenPopup(e) {
          return setOpenPopup(e);
        },
        initialItem: currentItem,
        screenshotItems: remapScreenshotItems
      })
    })]
  });
};

export default CardGameList;
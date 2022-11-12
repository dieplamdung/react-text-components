import _extends from "@babel/runtime/helpers/esm/extends";
import _toConsumableArray from "@babel/runtime/helpers/esm/toConsumableArray";
import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// Modules
import Box from '@mui/material/Box';
import React, { useEffect, useRef, useState } from 'react';
import Typography from "../../atoms/Typography"; // Styles

import colors from "../../theme/colors"; // Types

import { Swiper, SwiperSlide } from "swiper/react";
import Pills from "../../atoms/Pills";
import BlogCategoryCard from "./BlogFeatureCard";
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";

var BlogCategory = function BlogCategory(props) {
  var title = props.title,
      pillProps = props.pillProps,
      dataBlogCard = props.dataBlogCard,
      _props$pillSelected = props.pillSelected,
      pillSelected = _props$pillSelected === void 0 ? function () {} : _props$pillSelected,
      queryTag = props.queryTag;

  var _useState = useState(pillProps),
      _useState2 = _slicedToArray(_useState, 2),
      listPill = _useState2[0],
      setListPill = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      initialSlide = _useState4[0],
      setInitialSlide = _useState4[1];

  var refTimeout = useRef();
  var refISEnd = useRef();
  var refContentFilter = useRef();

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      tagSelectedLength = _useState6[0],
      setTagSelectedLength = _useState6[1];

  var handleClick = function handleClick(label, index) {
    var _newListPill$filter;

    var newListPill = _toConsumableArray(listPill);

    if (newListPill[index].active) {
      newListPill[index].active = false;
    } else {
      for (var i = 0; i < newListPill.length; i += 1) {
        newListPill[i].active = false;
      }

      newListPill[index].active = true;
    }

    setListPill(newListPill);
    var listLabelPillSelect = (_newListPill$filter = newListPill.filter(function (pill) {
      return pill.active;
    })) == null ? void 0 : _newListPill$filter.map(function (pill) {
      return pill.value;
    }); // Passing value to component parent

    pillSelected(listLabelPillSelect);
    setTagSelectedLength(listLabelPillSelect.length);
  };

  var handelDestroySwiper = function handelDestroySwiper() {
    var _refContentFilter$cur;

    var listSwiper = refContentFilter == null ? void 0 : (_refContentFilter$cur = refContentFilter.current) == null ? void 0 : _refContentFilter$cur.querySelectorAll(".mySwiper");

    if (listSwiper != null && listSwiper.length) {
      listSwiper.forEach(function (element) {
        var _element$swiper, _element$swiper$obser, _element$swiper2, _element$swiper2$resi;

        element == null ? void 0 : (_element$swiper = element.swiper) == null ? void 0 : (_element$swiper$obser = _element$swiper.observer) == null ? void 0 : _element$swiper$obser.destroy();
        element == null ? void 0 : (_element$swiper2 = element.swiper) == null ? void 0 : (_element$swiper2$resi = _element$swiper2.resize) == null ? void 0 : _element$swiper2$resi.orientationChangeHandler();
      });
    }
  };

  var handelChangeHandlerSwiper = function handelChangeHandlerSwiper(e) {
    if (!refISEnd.current && !!e) {
      var _refContentFilter$cur2;

      refISEnd.current = e.isEnd;
      var listSwiper = refContentFilter == null ? void 0 : (_refContentFilter$cur2 = refContentFilter.current) == null ? void 0 : _refContentFilter$cur2.querySelectorAll(".mySwiper");

      if (listSwiper != null && listSwiper.length) {
        listSwiper.forEach(function (element) {
          var _element$swiper3, _element$swiper3$resi;

          element == null ? void 0 : (_element$swiper3 = element.swiper) == null ? void 0 : (_element$swiper3$resi = _element$swiper3.resize) == null ? void 0 : _element$swiper3$resi.orientationChangeHandler();
        });
      }
    }
  };

  useEffect(function () {
    var dataClone = _toConsumableArray(pillProps);

    if (queryTag != null && queryTag.length) {
      var index = pillProps.findIndex(function (item) {
        return item.label === (queryTag == null ? void 0 : queryTag[0]);
      });

      if (index !== -1) {
        dataClone[index].active = true;
        setListPill(dataClone);
      }

      setTagSelectedLength(queryTag == null ? void 0 : queryTag.length);
      pillSelected(queryTag);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [queryTag]);
  return /*#__PURE__*/_jsxs(Box, {
    children: [title && /*#__PURE__*/_jsx(Typography, {
      color: colors.primary.bandaiNamcoBlack,
      variant: "h1",
      children: title
    }), /*#__PURE__*/_jsx(Box, {
      ref: refContentFilter,
      sx: {
        '& .swiper-slide': {
          width: 'auto !important'
        },
        marginTop: '28px'
      },
      children: /*#__PURE__*/_jsx(Swiper, {
        slidesPerView: "auto",
        spaceBetween: 12,
        freeMode: true,
        observer: true,
        initialSlide: initialSlide,
        resizeObserver: true,
        onTransitionEnd: function onTransitionEnd(e) {
          if (refTimeout.current) {
            window.clearTimeout(refTimeout.current);
          }

          refTimeout.current = setTimeout(function () {
            setInitialSlide(e.activeIndex);
            handelDestroySwiper();
            handelChangeHandlerSwiper((e == null ? void 0 : e.isEnd) || false);
          }, 200);
        },
        className: "mySwiper",
        children: listPill.map(function (pill, index) {
          return /*#__PURE__*/_jsx(SwiperSlide, {
            children: /*#__PURE__*/_jsx(Pills, _extends({}, pill, {
              active: pill.active,
              triggerClick: function triggerClick() {
                var _pill$value;

                handleClick((_pill$value = pill == null ? void 0 : pill.value) != null ? _pill$value : '', index);
              }
            }), index)
          });
        })
      })
    }), tagSelectedLength === 0 && /*#__PURE__*/_jsx(Box, {
      sx: {
        marginTop: {
          xs: '21px',
          md: '60px'
        }
      },
      children: /*#__PURE__*/_jsx(BlogCategoryCard, _extends({}, dataBlogCard == null ? void 0 : dataBlogCard[0]))
    })]
  });
};

export default BlogCategory;
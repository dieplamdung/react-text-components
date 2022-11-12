import _slicedToArray from "@babel/runtime/helpers/esm/slicedToArray";
// import modules
import Box from '@mui/material/Box';
import React, { useEffect, useRef, useState } from 'react';
import colors from "../../theme/colors";
import Typography from "../../atoms/Typography";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger"; // Types

import { useTheme } from '@mui/styles';
import { useMediaQuery } from '@mui/material';
import { MobileDown } from "../../utils/viewport";
import Container from "../../atoms/Container"; // import LocomotiveScroll from "locomotive-scroll";

import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
gsap.registerPlugin(ScrollTrigger); // gsap.registerPlugin(ScrollSmoother);

var ComplexKeyFeatureCard = function ComplexKeyFeatureCard(_ref) {
  var titleContent = _ref.titleContent,
      descriptionTop = _ref.descriptionTop,
      descriptionBottom = _ref.descriptionBottom,
      imgCenter = _ref.imgCenter,
      imgLeftTop = _ref.imgLeftTop,
      imgLeftCenter1 = _ref.imgLeftCenter1,
      imgLeftCenter2 = _ref.imgLeftCenter2,
      imgLeftBottom = _ref.imgLeftBottom,
      imgRightTop1 = _ref.imgRightTop1,
      imgRightTop2 = _ref.imgRightTop2,
      imgRightCenter = _ref.imgRightCenter,
      imgRightBottom = _ref.imgRightBottom;
  var theme = useTheme(); // const isSDesktop = useMediaQuery(Desktop(theme));

  var isMobileDown = useMediaQuery(MobileDown(theme));
  var isMobileSmallest = useMediaQuery('(max-width:321px)', {
    noSsr: true
  });
  var refWrapperContent = useRef();
  var refImgCenter = useRef();
  var refImgLeftTop = useRef();
  var refImgLeftCenter1 = useRef();
  var refImgLeftCenter2 = useRef();
  var refImgLeftBottom = useRef();
  var refImgRightTop1 = useRef();
  var refImgRightTop2 = useRef();
  var refImgRightCenter = useRef();
  var refImgRightBottom = useRef();
  var positionTopImgLeftTop = useRef(0);
  var heightImgMin = useRef(0);

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      minWidthImgCenter = _useState2[0],
      setMinWidthImgCenter = _useState2[1];

  var refMinWidthImgCenter = useRef(0);

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      minHeightImgCenter = _useState4[0],
      setMinHeightImgCenter = _useState4[1];

  var refMinHeightImgCenter = useRef(0);

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      heightImgLeftTop = _useState6[0],
      setHeightImgLeftTop = _useState6[1];

  var refHeightImgLeftTop = useRef(0);

  var _useState7 = useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      heightImgLeftCenter = _useState8[0],
      setHeightImgLeftCenter = _useState8[1];

  var _useState9 = useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      heightImgLeftBottom = _useState10[0],
      setHeightImgLeftBottom = _useState10[1];

  var _useState11 = useState(140),
      _useState12 = _slicedToArray(_useState11, 2),
      widthColumn = _useState12[0],
      setWidthColumn = _useState12[1]; // const refLocomotiveScroll = useRef<any>();


  var _useState13 = useState({}),
      _useState14 = _slicedToArray(_useState13, 2),
      imageCenter = _useState14[0],
      setImageCenter = _useState14[1];

  useEffect(function () {
    setImageCenter(imgCenter);
  }, [imgCenter]);
  useEffect(function () {
    if (typeof window !== "undefined") {
      var wrapperContent = refWrapperContent.current;

      if (wrapperContent) {
        if (isMobileSmallest) {
          setMinWidthImgCenter(220);
          refMinWidthImgCenter.current = 220;
          setMinHeightImgCenter(140);
          refMinHeightImgCenter.current = 140;
          setWidthColumn(40);
          positionTopImgLeftTop.current = wrapperContent.offsetHeight - 140;
          return;
        }

        if (isMobileDown) {
          setMinWidthImgCenter(241);
          setMinHeightImgCenter(140);
          setWidthColumn(54);
          positionTopImgLeftTop.current = wrapperContent.offsetHeight - 140;
          refMinHeightImgCenter.current = 140;
          return;
        }

        var body = document.querySelector("body");

        if (body) {
          var width = body.offsetWidth;
          var minWidth = width / 100 * 58;
          var minHeight = width / 100 * 33.6;
          var widthCl = width / 100 * (isMobileDown ? 23 : 20);
          var heightImgL = width / 100 * 21;
          var heightImgLC = width / 100 * 13.3;
          var heightImgLB = width / 100 * 26;
          setMinWidthImgCenter(minWidth);
          refMinWidthImgCenter.current = minWidth;
          setMinHeightImgCenter(minHeight);
          refMinHeightImgCenter.current = minHeight;
          setHeightImgLeftTop(heightImgL);
          refHeightImgLeftTop.current = heightImgL;
          setHeightImgLeftCenter(heightImgLC);
          setHeightImgLeftBottom(heightImgLB);
          heightImgMin.current = heightImgLC;
          positionTopImgLeftTop.current = wrapperContent.offsetHeight - minHeight;
          setWidthColumn(widthCl);
        }
      }

      ;
    }
  }, [isMobileDown, isMobileSmallest]); // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     refLocomotiveScroll.current = new LocomotiveScroll({
  //       el: refWrapperContent.current,
  //       smooth: true
  //     });
  //     ScrollTrigger.refresh();
  //   }
  // }, []);
  // ANIMATION IMG CENTER

  useEffect(function () {
    if (typeof window !== "undefined") {
      var parallax = gsap.timeline();
      ScrollTrigger.matchMedia({
        "(min-width:1600px)": function A1() {
          parallax.to(refImgCenter.current, {
            width: "".concat(refMinWidthImgCenter.current, "px"),
            height: "".concat(refMinHeightImgCenter.current, "px"),
            borderRadius: "20px"
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 80%",
            scrub: 2 // markers: true,

          });
        },
        "(min-width:1200px) and (max-width:1599px)": function A2() {
          parallax.to(refImgCenter.current, {
            width: "".concat(refMinWidthImgCenter.current, "px"),
            height: "".concat(refMinHeightImgCenter.current, "px"),
            borderRadius: "20px",
            duration: 1
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 70%",
            scrub: 2 // markers: true,

          });
        },
        "(min-width:300px) and (max-width:1199px)": function A3() {
          parallax.to(refImgCenter.current, {
            width: "".concat(refMinWidthImgCenter.current, "px"),
            height: "".concat(refMinHeightImgCenter.current, "px"),
            borderRadius: "10px"
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 40%",
            scrub: 2 // markers: true,

          });
        }
      });
    }
  }, []); // Animation IMG Top Left

  useEffect(function () {
    if (typeof window !== "undefined") {
      var parallax = gsap.timeline();
      ScrollTrigger.matchMedia({
        "(min-width:1200px)": function A() {
          parallax.to(refImgLeftTop.current, {
            right: "0px",
            top: positionTopImgLeftTop.current
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 70%",
            scrub: 2 // markers: true,

          });
        },
        "(min-width:1000px) and (max-width:1199px)": function A() {
          parallax.to(refImgLeftTop.current, {
            right: "0px",
            top: positionTopImgLeftTop.current
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 40%",
            scrub: 3 // markers: true,

          });
        },
        "(min-width:700px) and (max-width:999px)": function A() {
          parallax.to(refImgLeftTop.current, {
            right: "0px",
            top: positionTopImgLeftTop.current - 50
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 40%",
            scrub: 3 // markers: true,

          });
        },
        "(min-width:300px)and (max-width:699px)": function A() {
          parallax.to(refImgLeftTop.current, {
            right: "0px",
            top: positionTopImgLeftTop.current - refImgLeftTop.current.offsetHeight
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 40%",
            scrub: 3 // markers: true,

          });
        }
      });
    }
  }, []); // Animation IMG Top left  1

  useEffect(function () {
    if (typeof window !== "undefined") {
      var parallax = gsap.timeline();
      ScrollTrigger.matchMedia({
        "(min-width:1200px)": function A() {
          parallax.to(refImgLeftCenter1.current, {
            right: "0px"
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 70%",
            scrub: 2 // markers: true,

          });
        },
        "(min-width:1000px) and (max-width:1199px)": function A() {
          parallax.to(refImgLeftCenter1.current, {
            right: "0px"
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 40%",
            scrub: 3 // markers: true,

          });
        },
        "(min-width:700px) and (max-width:999px)": function A() {
          parallax.to(refImgLeftCenter1.current, {
            right: "0px",
            top: "".concat(positionTopImgLeftTop.current + refHeightImgLeftTop.current - 40, "px")
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 40%",
            scrub: 3 // markers: true,

          });
        },
        "(min-width:300px)and (max-width:699px)": function A() {
          parallax.to(refImgLeftCenter1.current, {
            right: "0px",
            top: "".concat(positionTopImgLeftTop.current + 20, "px")
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 40%",
            scrub: 3 // markers: true,

          });
        }
      });
    }
  }, []); // Animation IMG Top left 2

  useEffect(function () {
    if (typeof window !== "undefined") {
      var parallax = gsap.timeline();
      ScrollTrigger.matchMedia({
        "(min-width:1200px)": function A() {
          parallax.to(refImgLeftCenter2.current, {
            right: "".concat(heightImgMin.current + 20, "px")
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 70%",
            scrub: 3 // markers: true,

          });
        },
        "(min-width:1000px) and (max-width:1199px)": function A() {
          parallax.to(refImgLeftCenter2.current, {
            right: "".concat(heightImgMin.current + 20, "px")
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 40%",
            scrub: 3 // markers: true,

          });
        },
        "(min-width:700px) and (max-width:999px)": function A() {
          parallax.to(refImgLeftCenter2.current, {
            right: "".concat(130 + 12, "px"),
            top: "".concat(positionTopImgLeftTop.current + refHeightImgLeftTop.current - 40, "px")
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 40%",
            scrub: 3 // markers: true,

          });
        }
      });
    }
  }, []); // Animation IMG bottom Left

  useEffect(function () {
    if (typeof window !== "undefined") {
      var parallax = gsap.timeline();
      ScrollTrigger.matchMedia({
        "(min-width:1200px)": function A() {
          parallax.to(refImgLeftBottom.current, {
            right: "0px",
            top: "".concat(positionTopImgLeftTop.current + refMinHeightImgCenter.current + 44, "px"),
            ease: "none"
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 80%",
            scrub: 3 // markers: true,

          });
        },
        "(min-width:1000px) and (max-width:1199px)": function A() {
          parallax.to(refImgLeftBottom.current, {
            right: "0px",
            top: "".concat(positionTopImgLeftTop.current + refMinHeightImgCenter.current + 40, "px")
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 40%",
            scrub: 3 // markers: true,

          });
        },
        "(min-width:700px) and (max-width:999px)": function A() {
          parallax.to(refImgLeftBottom.current, {
            right: "0px",
            top: "".concat(positionTopImgLeftTop.current + refMinHeightImgCenter.current + 4, "px")
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 40%",
            scrub: 3 // markers: true,

          });
        }
      });
    }
  }, []); // Animation IMG Top Right 1

  useEffect(function () {
    if (typeof window !== "undefined") {
      var parallax = gsap.timeline();
      ScrollTrigger.matchMedia({
        "(min-width:1200px)": function A() {
          parallax.to(refImgRightTop1.current, {
            left: "0px",
            top: positionTopImgLeftTop.current
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 70%",
            scrub: 2 // markers: true,

          });
        },
        "(min-width:1000px) and (max-width:1199px)": function A() {
          parallax.to(refImgRightTop1.current, {
            left: "0px",
            top: positionTopImgLeftTop.current
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 40%",
            scrub: 2 // markers: true,

          });
        },
        "(min-width:700px) and (max-width:999px)": function A() {
          parallax.to(refImgRightTop1.current, {
            left: "0px",
            top: positionTopImgLeftTop.current - 50
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 40%",
            scrub: 3 // markers: true,

          });
        },
        "(min-width:300px)and (max-width:699px)": function A() {
          parallax.to(refImgRightTop1.current, {
            left: "0px",
            top: positionTopImgLeftTop.current - 100
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 40%",
            scrub: 3 // markers: true,

          });
        }
      });
    }
  }, []); // Animation IMG Top Right 2

  useEffect(function () {
    if (typeof window !== "undefined") {
      var parallax = gsap.timeline();
      ScrollTrigger.matchMedia({
        "(min-width:1200px)": function A() {
          parallax.to(refImgRightTop2.current, {
            left: "".concat(heightImgMin.current + 20, "px"),
            top: positionTopImgLeftTop.current
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 70%",
            scrub: 2 // markers: true,

          });
        },
        "(min-width:1000px) and (max-width:1199px)": function A() {
          parallax.to(refImgRightTop2.current, {
            left: "".concat(heightImgMin.current + 20, "px"),
            top: positionTopImgLeftTop.current
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 40%",
            scrub: 2 // markers: true,

          });
        },
        "(min-width:700px) and (max-width:999px)": function A() {
          parallax.to(refImgRightTop2.current, {
            left: "".concat(130 + 12, "px"),
            top: positionTopImgLeftTop.current - 50
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 40%",
            scrub: 3 // markers: true,

          });
        } // "(min-width:300px)and (max-width:699px)": function A() {
        //   const parallax = gsap.timeline();
        //   parallax.to(refImgRightTop2.current, {
        //     left: "0px",
        //     top: positionTopImgLeftTop.current - 100,
        //   });
        //   ScrollTrigger.create({
        //     animation: parallax,
        //     trigger: ".wrapper-content",
        //     start: "top top",
        //     end: "bottom 40%",
        //     scrub: 3,
        //     // markers: true,
        //   })
        // },

      });
    }
  }, []); // Animation IMG center Right

  useEffect(function () {
    if (typeof window !== "undefined") {
      var parallax = gsap.timeline();
      ScrollTrigger.matchMedia({
        "(min-width:1200px)": function A() {
          parallax.to(refImgRightCenter.current, {
            left: "0px",
            top: positionTopImgLeftTop.current + heightImgMin.current + 14
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 70%",
            scrub: 2
          });
        },
        "(min-width:1000px) and (max-width:1199px)": function A() {
          parallax.to(refImgRightCenter.current, {
            left: "0px",
            top: positionTopImgLeftTop.current + heightImgMin.current + 14
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 40%",
            scrub: 2
          });
        },
        "(min-width:700px) and (max-width:999px)": function A() {
          parallax.to(refImgRightCenter.current, {
            left: "0px",
            top: "".concat(positionTopImgLeftTop.current + 90, "px")
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 40%",
            scrub: 3
          });
        },
        "(min-width:300px)and (max-width:699px)": function A() {
          parallax.to(refImgRightCenter.current, {
            left: "0px",
            top: "".concat(positionTopImgLeftTop.current + 100, "px")
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 40%",
            scrub: 3 // markers: true,

          });
        }
      });
    }
  }, []); // Animation IMG bottom Right

  useEffect(function () {
    if (typeof window !== "undefined") {
      var parallax = gsap.timeline();
      ScrollTrigger.matchMedia({
        "(min-width:1200px)": function A() {
          parallax.to(refImgRightBottom.current, {
            left: "0px",
            top: "".concat(positionTopImgLeftTop.current + refMinHeightImgCenter.current + 40, "px")
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 70%",
            scrub: 2 // markers: true,

          });
        },
        "(min-width:1000px) and (max-width:1199px)": function A() {
          parallax.to(refImgRightBottom.current, {
            left: "0px",
            top: "".concat(positionTopImgLeftTop.current + refMinHeightImgCenter.current + 40, "px")
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 40%",
            scrub: 2 // markers: true,

          });
        },
        "(min-width:700px) and (max-width:999px)": function A() {
          parallax.to(refImgRightBottom.current, {
            left: "0px",
            top: "".concat(positionTopImgLeftTop.current + refMinHeightImgCenter.current + 4, "px")
          });
          ScrollTrigger.create({
            animation: parallax,
            trigger: ".wrapper-content",
            start: "top top",
            end: "bottom 40%",
            scrub: 2 // markers: true,

          });
        }
      });
    }
  }, []);
  return /*#__PURE__*/_jsxs(Box, {
    sx: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%"
    },
    className: "container-content",
    children: [/*#__PURE__*/_jsxs(Box, {
      sx: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "100vh",
        width: "100%" // background: "aqua",

      },
      className: "wrapper-content",
      ref: refWrapperContent,
      children: [/*#__PURE__*/_jsxs(Box, {
        sx: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: "".concat(widthColumn, "px"),
          height: "100%",
          zIndex: "2"
        },
        className: "column-left",
        children: [/*#__PURE__*/_jsx(Box, {
          ref: refImgLeftTop,
          sx: {
            position: "absolute",
            top: "0px",
            right: {
              xs: "250px",
              md: "466px"
            },
            minHeight: "82px",
            width: {
              xs: "150px",
              md: "250px",
              lg: "466px"
            },
            height: "".concat(heightImgLeftTop, "px"),
            borderRadius: {
              xs: "10px",
              md: "20px"
            },
            overflow: "hidden",
            "&:hover": {
              "& img": {// transform: "scale(1.2)"
              }
            },
            "& span": {
              width: "100% !important",
              height: "100% !important"
            },
            "& img": {
              width: "100%",
              height: "100%",
              border: "20px",
              transition: "transform 0.2s ",
              objectFit: 'cover'
            }
          },
          children: (imgLeftTop == null ? void 0 : imgLeftTop.nextImg) || /*#__PURE__*/_jsx("img", {
            src: (imgLeftTop == null ? void 0 : imgLeftTop.href) || "",
            alt: (imgLeftTop == null ? void 0 : imgLeftTop.alt) || ""
          })
        }), /*#__PURE__*/_jsx(Box, {
          ref: refImgLeftCenter1,
          sx: {
            position: "absolute",
            top: {
              xs: "50vh",
              lg: "".concat(positionTopImgLeftTop.current + heightImgLeftTop + 14, "px")
            },
            right: "466px",
            width: {
              xs: "170px",
              md: "130px",
              lg: "".concat(heightImgLeftCenter, "px")
            },
            height: {
              xs: "170px",
              md: "130px",
              lg: "".concat(heightImgLeftCenter, "px")
            },
            borderRadius: {
              xs: "10px",
              md: "20px"
            },
            overflow: "hidden",
            "&:hover": {
              "& img": {// transform: "scale(1.2)"
              }
            },
            "& span": {
              width: "100% !important",
              height: "100% !important"
            },
            "& img": {
              width: "100%",
              height: "100%",
              borderRadius: "20px",
              transition: "transform 0.2s",
              objectFit: 'cover'
            },
            zIndex: 2
          },
          children: (imgLeftCenter1 == null ? void 0 : imgLeftCenter1.nextImg) || /*#__PURE__*/_jsx("img", {
            src: (imgLeftCenter1 == null ? void 0 : imgLeftCenter1.href) || "",
            alt: (imgLeftCenter1 == null ? void 0 : imgLeftCenter1.alt) || ""
          })
        }), /*#__PURE__*/_jsx(Box, {
          ref: refImgLeftCenter2,
          sx: {
            display: {
              xs: "none",
              md: "flex"
            },
            position: "absolute",
            top: {
              xs: "50vh",
              lg: "".concat(positionTopImgLeftTop.current + heightImgLeftTop + 14, "px")
            },
            right: "500px",
            width: {
              xs: "170px",
              md: "130px",
              lg: "".concat(heightImgLeftCenter, "px")
            },
            height: {
              xs: "170px",
              md: "130px",
              lg: "".concat(heightImgLeftCenter, "px")
            },
            borderRadius: {
              xs: "10px",
              md: "20px"
            },
            overflow: "hidden",
            "&:hover": {
              "& img": {// transform: "scale(1.2)"
              }
            },
            "& span": {
              width: "100% !important",
              height: "100% !important"
            },
            "& img": {
              width: "100%",
              height: "100%",
              borderRadius: "20px",
              transition: "all 0.2s",
              objectFit: 'cover'
            },
            zIndex: 1
          },
          children: (imgLeftCenter2 == null ? void 0 : imgLeftCenter2.nextImg) || /*#__PURE__*/_jsx("img", {
            src: (imgLeftCenter2 == null ? void 0 : imgLeftCenter2.href) || "",
            alt: (imgLeftCenter2 == null ? void 0 : imgLeftCenter2.alt) || ""
          })
        }), /*#__PURE__*/_jsx(Box, {
          ref: refImgLeftBottom,
          sx: {
            position: "absolute",
            top: "calc(100vh + 200px)",
            right: {
              xs: "250px",
              md: "466px"
            },
            minHeight: "82px",
            width: {
              xs: "150px",
              md: "250px",
              lg: "".concat(heightImgLeftBottom + 50, "px"),
              xl: "466px"
            },
            height: "".concat(heightImgLeftBottom, "px"),
            borderRadius: {
              xs: "10px",
              md: "20px"
            },
            overflow: "hidden",
            "&:hover": {
              "& img": {// transform: "scale(1.2)"
              }
            },
            "& span": {
              width: "100% !important",
              height: "100% !important"
            },
            "& img": {
              width: "100%",
              height: "100%",
              borderRadius: "20px",
              transition: "all 0.2s",
              objectFit: "cover"
            }
          },
          children: (imgLeftBottom == null ? void 0 : imgLeftBottom.nextImg) || /*#__PURE__*/_jsx("img", {
            src: (imgLeftBottom == null ? void 0 : imgLeftBottom.href) || "",
            alt: (imgLeftBottom == null ? void 0 : imgLeftBottom.alt) || ""
          })
        })]
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          width: '100%',
          height: "100%",
          minWidth: "".concat(minWidthImgCenter, "px"),
          minHeight: "".concat(minHeightImgCenter, "px"),
          position: "relative",
          display: "block",
          overflow: "hidden",
          transition: "all 0.1",
          "&:hover": {
            "& img": {// transform: "scale(1.2)"
            }
          },
          "& span": {
            width: "100% !important",
            height: "100% !important"
          },
          '& img': {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "100%",
            height: "100%",
            minWidth: "".concat(minWidthImgCenter, "px"),
            minHeight: "".concat(minHeightImgCenter, "px"),
            objectFit: "cover",
            transition: "all 0.2s"
          }
        },
        ref: refImgCenter,
        children: (imageCenter == null ? void 0 : imageCenter.nextImg) || /*#__PURE__*/_jsx("img", {
          src: (imageCenter == null ? void 0 : imageCenter.href) || "",
          alt: (imageCenter == null ? void 0 : imageCenter.alt) || ""
        })
      }), /*#__PURE__*/_jsxs(Box, {
        sx: {
          position: "absolute",
          top: "0px",
          right: "0px",
          width: "".concat(widthColumn, "px"),
          height: "100%",
          zIndex: "2",
          overflow: "hidden",
          scrollbarWidth: "none",
          '& img': {
            objectFit: 'cover'
          },
          "&::-webkit-scrollbar": {
            display: "none"
          }
        },
        children: [/*#__PURE__*/_jsx(Box, {
          ref: refImgRightTop1,
          sx: {
            position: "absolute",
            top: "0px",
            left: "466px",
            width: {
              xs: "170px",
              md: "130px",
              lg: "".concat(heightImgLeftCenter, "px")
            },
            height: {
              xs: "170px",
              md: "130px",
              lg: "".concat(heightImgLeftCenter, "px")
            },
            borderRadius: {
              xs: "10px",
              md: "20px"
            },
            overflow: "hidden",
            "&:hover": {
              "& img": {// transform: "scale(1.2)"
              }
            },
            "& span": {
              width: "100% !important",
              height: "100% !important"
            },
            "& img": {
              width: "100%",
              height: "100%",
              objectFit: 'cover',
              borderRadius: {
                xs: "10px",
                md: "20px"
              },
              transition: "all 0.2s"
            },
            zIndex: 2
          },
          children: (imgRightTop1 == null ? void 0 : imgRightTop1.nextImg) || /*#__PURE__*/_jsx("img", {
            src: (imgRightTop1 == null ? void 0 : imgRightTop1.href) || "",
            alt: imgRightTop1 == null ? void 0 : imgRightTop1.alt
          })
        }), /*#__PURE__*/_jsx(Box, {
          ref: refImgRightTop2,
          sx: {
            display: {
              xs: "none",
              md: "flex"
            },
            position: "absolute",
            top: "0px",
            left: "500px",
            width: {
              xs: "170px",
              md: "130px",
              lg: "".concat(heightImgLeftCenter, "px")
            },
            height: {
              xs: "170px",
              md: "130px",
              lg: "".concat(heightImgLeftCenter, "px")
            },
            borderRadius: {
              xs: "10px",
              md: "20px"
            },
            overflow: "hidden",
            "&:hover": {
              "& img": {// transform: "scale(1.2)"
              }
            },
            "& span": {
              width: "100% !important",
              height: "100% !important"
            },
            "& img": {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              borderRadius: {
                xs: "10px",
                md: "20px"
              },
              transition: "all 0.2s"
            },
            zIndex: 1
          },
          children: (imgRightTop2 == null ? void 0 : imgRightTop2.nextImg) || /*#__PURE__*/_jsx("img", {
            src: (imgRightTop2 == null ? void 0 : imgRightTop2.href) || "",
            alt: imgRightTop2 == null ? void 0 : imgRightTop2.alt
          })
        }), /*#__PURE__*/_jsx(Box, {
          ref: refImgRightCenter,
          sx: {
            position: "absolute",
            top: "calc(100vh + 200px)",
            left: {
              xs: "250px",
              md: "466px"
            },
            minHeight: "82px",
            width: {
              xs: "150px",
              md: "250px",
              lg: "466px"
            },
            height: "".concat(heightImgLeftTop, "px"),
            borderRadius: {
              xs: "10px",
              md: "20px"
            },
            overflow: "hidden",
            "&:hover": {
              "& img": {// transform: "scale(1.2)"
              }
            },
            "& span": {
              width: "100% !important",
              height: "100% !important"
            },
            "& img": {
              width: "100%",
              height: "100%",
              objectFit: 'cover',
              borderRadius: {
                xs: "10px",
                md: "20px"
              },
              transition: "all 0.2s"
            }
          },
          children: (imgRightCenter == null ? void 0 : imgRightCenter.nextImg) || /*#__PURE__*/_jsx("img", {
            src: (imgRightCenter == null ? void 0 : imgRightCenter.href) || "",
            alt: imgRightCenter == null ? void 0 : imgRightCenter.alt
          })
        }), /*#__PURE__*/_jsx(Box, {
          ref: refImgRightBottom,
          sx: {
            display: {
              xs: "none",
              md: "block"
            },
            position: "absolute",
            top: "calc(100vh + 500px)",
            left: {
              xs: "250px",
              md: "466px"
            },
            minHeight: "82px",
            width: {
              xs: "150px",
              md: "250px",
              lg: "360px",
              xl: "466px"
            },
            height: {
              xs: "".concat(heightImgLeftTop, "px"),
              lg: "240px",
              xl: "".concat(heightImgLeftTop, "px")
            },
            borderRadius: {
              xs: "10px",
              md: "20px"
            },
            overflow: "hidden",
            "&:hover": {
              "& img": {// transform: "scale(1.2)"
              }
            },
            "& span": {
              width: "100% !important",
              height: "100% !important"
            },
            "& img": {
              width: "100%",
              height: "100%",
              objectFit: 'cover',
              borderRadius: {
                xs: "10px",
                md: "20px"
              },
              transition: "all 0.2s"
            }
          },
          children: (imgRightBottom == null ? void 0 : imgRightBottom.nextImg) || /*#__PURE__*/_jsx("img", {
            src: (imgRightBottom == null ? void 0 : imgRightBottom.href) || "",
            alt: imgRightBottom == null ? void 0 : imgRightBottom.alt
          })
        })]
      })]
    }), /*#__PURE__*/_jsxs(Container, {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: {
          xs: "auto",
          xl: "50vh"
        }
      },
      children: [/*#__PURE__*/_jsx(Typography, {
        variant: "h5",
        sx: {
          textAlign: "center",
          color: "#1E1E1E",
          marginTop: {
            xs: '50px',
            lg: "82px"
          },
          letterSpacing: {
            xs: "-0.4px",
            md: "-0.8px"
          }
        },
        children: titleContent
      }), /*#__PURE__*/_jsxs(Box, {
        sx: {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          zIndex: 1,
          width: "100%",
          maxWidth: {
            xs: "100%",
            md: "".concat(minWidthImgCenter - 20, "px"),
            xl: "687px"
          }
        },
        children: [/*#__PURE__*/_jsx(Typography, {
          variant: "p6",
          color: colors.neutral.neutral2,
          sx: {
            width: "100%",
            textAlign: "center",
            lineHeight: {
              xs: "22px",
              sm: "22px"
            },
            letterSpacing: "-0.2px",
            marginTop: {
              xs: "8px",
              md: "22px"
            },
            zIndex: 1
          },
          children: descriptionTop
        }), /*#__PURE__*/_jsx(Typography, {
          variant: "p6",
          color: colors.neutral.neutral2,
          sx: {
            width: "100%",
            textAlign: "center",
            lineHeight: {
              xs: "22px",
              sm: "22px"
            },
            letterSpacing: "-0.2px",
            marginTop: "22px",
            zIndex: 1,
            minHeight: {
              xs: "auto",
              lg: "70px"
            }
          },
          children: descriptionBottom
        })]
      })]
    })]
  });
};

export default ComplexKeyFeatureCard;
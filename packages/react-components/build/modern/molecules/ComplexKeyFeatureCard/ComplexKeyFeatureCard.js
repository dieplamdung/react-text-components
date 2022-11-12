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

const ComplexKeyFeatureCard = ({
  titleContent,
  descriptionTop,
  descriptionBottom,
  imgCenter,
  imgLeftTop,
  imgLeftCenter1,
  imgLeftCenter2,
  imgLeftBottom,
  imgRightTop1,
  imgRightTop2,
  imgRightCenter,
  imgRightBottom
}) => {
  const theme = useTheme(); // const isSDesktop = useMediaQuery(Desktop(theme));

  const isMobileDown = useMediaQuery(MobileDown(theme));
  const isMobileSmallest = useMediaQuery('(max-width:321px)', {
    noSsr: true
  });
  const refWrapperContent = useRef();
  const refImgCenter = useRef();
  const refImgLeftTop = useRef();
  const refImgLeftCenter1 = useRef();
  const refImgLeftCenter2 = useRef();
  const refImgLeftBottom = useRef();
  const refImgRightTop1 = useRef();
  const refImgRightTop2 = useRef();
  const refImgRightCenter = useRef();
  const refImgRightBottom = useRef();
  const positionTopImgLeftTop = useRef(0);
  const heightImgMin = useRef(0);
  const [minWidthImgCenter, setMinWidthImgCenter] = useState(0);
  const refMinWidthImgCenter = useRef(0);
  const [minHeightImgCenter, setMinHeightImgCenter] = useState(0);
  const refMinHeightImgCenter = useRef(0);
  const [heightImgLeftTop, setHeightImgLeftTop] = useState(0);
  const refHeightImgLeftTop = useRef(0);
  const [heightImgLeftCenter, setHeightImgLeftCenter] = useState(0);
  const [heightImgLeftBottom, setHeightImgLeftBottom] = useState(0);
  const [widthColumn, setWidthColumn] = useState(140); // const refLocomotiveScroll = useRef<any>();

  const [imageCenter, setImageCenter] = useState({});
  useEffect(() => {
    setImageCenter(imgCenter);
  }, [imgCenter]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const wrapperContent = refWrapperContent.current;

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

        const body = document.querySelector("body");

        if (body) {
          const width = body.offsetWidth;
          const minWidth = width / 100 * 58;
          const minHeight = width / 100 * 33.6;
          const widthCl = width / 100 * (isMobileDown ? 23 : 20);
          const heightImgL = width / 100 * 21;
          const heightImgLC = width / 100 * 13.3;
          const heightImgLB = width / 100 * 26;
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const parallax = gsap.timeline();
      ScrollTrigger.matchMedia({
        "(min-width:1600px)": function A1() {
          parallax.to(refImgCenter.current, {
            width: `${refMinWidthImgCenter.current}px`,
            height: `${refMinHeightImgCenter.current}px`,
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
            width: `${refMinWidthImgCenter.current}px`,
            height: `${refMinHeightImgCenter.current}px`,
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
            width: `${refMinWidthImgCenter.current}px`,
            height: `${refMinHeightImgCenter.current}px`,
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const parallax = gsap.timeline();
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const parallax = gsap.timeline();
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
            top: `${positionTopImgLeftTop.current + refHeightImgLeftTop.current - 40}px`
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
            top: `${positionTopImgLeftTop.current + 20}px`
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const parallax = gsap.timeline();
      ScrollTrigger.matchMedia({
        "(min-width:1200px)": function A() {
          parallax.to(refImgLeftCenter2.current, {
            right: `${heightImgMin.current + 20}px`
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
            right: `${heightImgMin.current + 20}px`
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
            right: `${130 + 12}px`,
            top: `${positionTopImgLeftTop.current + refHeightImgLeftTop.current - 40}px`
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const parallax = gsap.timeline();
      ScrollTrigger.matchMedia({
        "(min-width:1200px)": function A() {
          parallax.to(refImgLeftBottom.current, {
            right: "0px",
            top: `${positionTopImgLeftTop.current + refMinHeightImgCenter.current + 44}px`,
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
            top: `${positionTopImgLeftTop.current + refMinHeightImgCenter.current + 40}px`
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
            top: `${positionTopImgLeftTop.current + refMinHeightImgCenter.current + 4}px`
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const parallax = gsap.timeline();
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const parallax = gsap.timeline();
      ScrollTrigger.matchMedia({
        "(min-width:1200px)": function A() {
          parallax.to(refImgRightTop2.current, {
            left: `${heightImgMin.current + 20}px`,
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
            left: `${heightImgMin.current + 20}px`,
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
            left: `${130 + 12}px`,
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const parallax = gsap.timeline();
      ScrollTrigger.matchMedia({
        "(min-width:1200px)": function A() {
          parallax.to(refImgRightCenter.current, {
            left: `0px`,
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
            left: `0px`,
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
            left: `0px`,
            top: `${positionTopImgLeftTop.current + 90}px`
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
            left: `0px`,
            top: `${positionTopImgLeftTop.current + 100}px`
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

  useEffect(() => {
    if (typeof window !== "undefined") {
      const parallax = gsap.timeline();
      ScrollTrigger.matchMedia({
        "(min-width:1200px)": function A() {
          parallax.to(refImgRightBottom.current, {
            left: "0px",
            top: `${positionTopImgLeftTop.current + refMinHeightImgCenter.current + 40}px`
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
            top: `${positionTopImgLeftTop.current + refMinHeightImgCenter.current + 40}px`
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
            top: `${positionTopImgLeftTop.current + refMinHeightImgCenter.current + 4}px`
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
          width: `${widthColumn}px`,
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
              md: `466px`
            },
            minHeight: "82px",
            width: {
              xs: "150px",
              md: "250px",
              lg: "466px"
            },
            height: `${heightImgLeftTop}px`,
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
          children: imgLeftTop?.nextImg || /*#__PURE__*/_jsx("img", {
            src: imgLeftTop?.href || "",
            alt: imgLeftTop?.alt || ""
          })
        }), /*#__PURE__*/_jsx(Box, {
          ref: refImgLeftCenter1,
          sx: {
            position: "absolute",
            top: {
              xs: `50vh`,
              lg: `${positionTopImgLeftTop.current + heightImgLeftTop + 14}px`
            },
            right: `466px`,
            width: {
              xs: "170px",
              md: "130px",
              lg: `${heightImgLeftCenter}px`
            },
            height: {
              xs: "170px",
              md: "130px",
              lg: `${heightImgLeftCenter}px`
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
          children: imgLeftCenter1?.nextImg || /*#__PURE__*/_jsx("img", {
            src: imgLeftCenter1?.href || "",
            alt: imgLeftCenter1?.alt || ""
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
              xs: `50vh`,
              lg: `${positionTopImgLeftTop.current + heightImgLeftTop + 14}px`
            },
            right: `500px`,
            width: {
              xs: "170px",
              md: "130px",
              lg: `${heightImgLeftCenter}px`
            },
            height: {
              xs: "170px",
              md: "130px",
              lg: `${heightImgLeftCenter}px`
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
          children: imgLeftCenter2?.nextImg || /*#__PURE__*/_jsx("img", {
            src: imgLeftCenter2?.href || "",
            alt: imgLeftCenter2?.alt || ""
          })
        }), /*#__PURE__*/_jsx(Box, {
          ref: refImgLeftBottom,
          sx: {
            position: "absolute",
            top: `calc(100vh + 200px)`,
            right: {
              xs: "250px",
              md: `466px`
            },
            minHeight: "82px",
            width: {
              xs: "150px",
              md: "250px",
              lg: `${heightImgLeftBottom + 50}px`,
              xl: `466px`
            },
            height: `${heightImgLeftBottom}px`,
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
          children: imgLeftBottom?.nextImg || /*#__PURE__*/_jsx("img", {
            src: imgLeftBottom?.href || "",
            alt: imgLeftBottom?.alt || ""
          })
        })]
      }), /*#__PURE__*/_jsx(Box, {
        sx: {
          width: '100%',
          height: "100%",
          minWidth: `${minWidthImgCenter}px`,
          minHeight: `${minHeightImgCenter}px`,
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
            minWidth: `${minWidthImgCenter}px`,
            minHeight: `${minHeightImgCenter}px`,
            objectFit: "cover",
            transition: "all 0.2s"
          }
        },
        ref: refImgCenter,
        children: imageCenter?.nextImg || /*#__PURE__*/_jsx("img", {
          src: imageCenter?.href || "",
          alt: imageCenter?.alt || ""
        })
      }), /*#__PURE__*/_jsxs(Box, {
        sx: {
          position: "absolute",
          top: "0px",
          right: "0px",
          width: `${widthColumn}px`,
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
            left: `466px`,
            width: {
              xs: "170px",
              md: "130px",
              lg: `${heightImgLeftCenter}px`
            },
            height: {
              xs: "170px",
              md: "130px",
              lg: `${heightImgLeftCenter}px`
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
          children: imgRightTop1?.nextImg || /*#__PURE__*/_jsx("img", {
            src: imgRightTop1?.href || "",
            alt: imgRightTop1?.alt
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
            left: `500px`,
            width: {
              xs: "170px",
              md: "130px",
              lg: `${heightImgLeftCenter}px`
            },
            height: {
              xs: "170px",
              md: "130px",
              lg: `${heightImgLeftCenter}px`
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
          children: imgRightTop2?.nextImg || /*#__PURE__*/_jsx("img", {
            src: imgRightTop2?.href || "",
            alt: imgRightTop2?.alt
          })
        }), /*#__PURE__*/_jsx(Box, {
          ref: refImgRightCenter,
          sx: {
            position: "absolute",
            top: `calc(100vh + 200px)`,
            left: {
              xs: "250px",
              md: `466px`
            },
            minHeight: "82px",
            width: {
              xs: "150px",
              md: "250px",
              lg: "466px"
            },
            height: `${heightImgLeftTop}px`,
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
          children: imgRightCenter?.nextImg || /*#__PURE__*/_jsx("img", {
            src: imgRightCenter?.href || "",
            alt: imgRightCenter?.alt
          })
        }), /*#__PURE__*/_jsx(Box, {
          ref: refImgRightBottom,
          sx: {
            display: {
              xs: "none",
              md: "block"
            },
            position: "absolute",
            top: `calc(100vh + 500px)`,
            left: {
              xs: "250px",
              md: `466px`
            },
            minHeight: "82px",
            width: {
              xs: "150px",
              md: "250px",
              lg: "360px",
              xl: "466px"
            },
            height: {
              xs: `${heightImgLeftTop}px`,
              lg: "240px",
              xl: `${heightImgLeftTop}px`
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
          children: imgRightBottom?.nextImg || /*#__PURE__*/_jsx("img", {
            src: imgRightBottom?.href || "",
            alt: imgRightBottom?.alt
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
            md: `${minWidthImgCenter - 20}px`,
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
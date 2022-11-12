"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireWildcard(require("react"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _gsap = _interopRequireDefault(require("gsap"));

var _ScrollTrigger = require("gsap/ScrollTrigger");

var _styles = require("@mui/styles");

var _material = require("@mui/material");

var _viewport = require("../../utils/viewport");

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import modules
// Types
_gsap.default.registerPlugin(_ScrollTrigger.ScrollTrigger); // gsap.registerPlugin(ScrollSmoother);


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
  const theme = (0, _styles.useTheme)(); // const isSDesktop = useMediaQuery(Desktop(theme));

  const isMobileDown = (0, _material.useMediaQuery)((0, _viewport.MobileDown)(theme));
  const isMobileSmallest = (0, _material.useMediaQuery)('(max-width:321px)', {
    noSsr: true
  });
  const refWrapperContent = (0, _react.useRef)();
  const refImgCenter = (0, _react.useRef)();
  const refImgLeftTop = (0, _react.useRef)();
  const refImgLeftCenter1 = (0, _react.useRef)();
  const refImgLeftCenter2 = (0, _react.useRef)();
  const refImgLeftBottom = (0, _react.useRef)();
  const refImgRightTop1 = (0, _react.useRef)();
  const refImgRightTop2 = (0, _react.useRef)();
  const refImgRightCenter = (0, _react.useRef)();
  const refImgRightBottom = (0, _react.useRef)();
  const positionTopImgLeftTop = (0, _react.useRef)(0);
  const heightImgMin = (0, _react.useRef)(0);
  const [minWidthImgCenter, setMinWidthImgCenter] = (0, _react.useState)(0);
  const refMinWidthImgCenter = (0, _react.useRef)(0);
  const [minHeightImgCenter, setMinHeightImgCenter] = (0, _react.useState)(0);
  const refMinHeightImgCenter = (0, _react.useRef)(0);
  const [heightImgLeftTop, setHeightImgLeftTop] = (0, _react.useState)(0);
  const refHeightImgLeftTop = (0, _react.useRef)(0);
  const [heightImgLeftCenter, setHeightImgLeftCenter] = (0, _react.useState)(0);
  const [heightImgLeftBottom, setHeightImgLeftBottom] = (0, _react.useState)(0);
  const [widthColumn, setWidthColumn] = (0, _react.useState)(140); // const refLocomotiveScroll = useRef<any>();

  const [imageCenter, setImageCenter] = (0, _react.useState)({});
  (0, _react.useEffect)(() => {
    setImageCenter(imgCenter);
  }, [imgCenter]);
  (0, _react.useEffect)(() => {
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

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const parallax = _gsap.default.timeline();

      _ScrollTrigger.ScrollTrigger.matchMedia({
        "(min-width:1600px)": function A1() {
          parallax.to(refImgCenter.current, {
            width: `${refMinWidthImgCenter.current}px`,
            height: `${refMinHeightImgCenter.current}px`,
            borderRadius: "20px"
          });

          _ScrollTrigger.ScrollTrigger.create({
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

          _ScrollTrigger.ScrollTrigger.create({
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

          _ScrollTrigger.ScrollTrigger.create({
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

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const parallax = _gsap.default.timeline();

      _ScrollTrigger.ScrollTrigger.matchMedia({
        "(min-width:1200px)": function A() {
          parallax.to(refImgLeftTop.current, {
            right: "0px",
            top: positionTopImgLeftTop.current
          });

          _ScrollTrigger.ScrollTrigger.create({
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

          _ScrollTrigger.ScrollTrigger.create({
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

          _ScrollTrigger.ScrollTrigger.create({
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

          _ScrollTrigger.ScrollTrigger.create({
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

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const parallax = _gsap.default.timeline();

      _ScrollTrigger.ScrollTrigger.matchMedia({
        "(min-width:1200px)": function A() {
          parallax.to(refImgLeftCenter1.current, {
            right: "0px"
          });

          _ScrollTrigger.ScrollTrigger.create({
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

          _ScrollTrigger.ScrollTrigger.create({
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

          _ScrollTrigger.ScrollTrigger.create({
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

          _ScrollTrigger.ScrollTrigger.create({
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

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const parallax = _gsap.default.timeline();

      _ScrollTrigger.ScrollTrigger.matchMedia({
        "(min-width:1200px)": function A() {
          parallax.to(refImgLeftCenter2.current, {
            right: `${heightImgMin.current + 20}px`
          });

          _ScrollTrigger.ScrollTrigger.create({
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

          _ScrollTrigger.ScrollTrigger.create({
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

          _ScrollTrigger.ScrollTrigger.create({
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

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const parallax = _gsap.default.timeline();

      _ScrollTrigger.ScrollTrigger.matchMedia({
        "(min-width:1200px)": function A() {
          parallax.to(refImgLeftBottom.current, {
            right: "0px",
            top: `${positionTopImgLeftTop.current + refMinHeightImgCenter.current + 44}px`,
            ease: "none"
          });

          _ScrollTrigger.ScrollTrigger.create({
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

          _ScrollTrigger.ScrollTrigger.create({
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

          _ScrollTrigger.ScrollTrigger.create({
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

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const parallax = _gsap.default.timeline();

      _ScrollTrigger.ScrollTrigger.matchMedia({
        "(min-width:1200px)": function A() {
          parallax.to(refImgRightTop1.current, {
            left: "0px",
            top: positionTopImgLeftTop.current
          });

          _ScrollTrigger.ScrollTrigger.create({
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

          _ScrollTrigger.ScrollTrigger.create({
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

          _ScrollTrigger.ScrollTrigger.create({
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

          _ScrollTrigger.ScrollTrigger.create({
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

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const parallax = _gsap.default.timeline();

      _ScrollTrigger.ScrollTrigger.matchMedia({
        "(min-width:1200px)": function A() {
          parallax.to(refImgRightTop2.current, {
            left: `${heightImgMin.current + 20}px`,
            top: positionTopImgLeftTop.current
          });

          _ScrollTrigger.ScrollTrigger.create({
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

          _ScrollTrigger.ScrollTrigger.create({
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

          _ScrollTrigger.ScrollTrigger.create({
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

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const parallax = _gsap.default.timeline();

      _ScrollTrigger.ScrollTrigger.matchMedia({
        "(min-width:1200px)": function A() {
          parallax.to(refImgRightCenter.current, {
            left: `0px`,
            top: positionTopImgLeftTop.current + heightImgMin.current + 14
          });

          _ScrollTrigger.ScrollTrigger.create({
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

          _ScrollTrigger.ScrollTrigger.create({
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

          _ScrollTrigger.ScrollTrigger.create({
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

          _ScrollTrigger.ScrollTrigger.create({
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

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const parallax = _gsap.default.timeline();

      _ScrollTrigger.ScrollTrigger.matchMedia({
        "(min-width:1200px)": function A() {
          parallax.to(refImgRightBottom.current, {
            left: "0px",
            top: `${positionTopImgLeftTop.current + refMinHeightImgCenter.current + 40}px`
          });

          _ScrollTrigger.ScrollTrigger.create({
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

          _ScrollTrigger.ScrollTrigger.create({
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

          _ScrollTrigger.ScrollTrigger.create({
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    sx: {
      display: "flex",
      flexDirection: "column",
      position: "relative",
      width: "100%"
    },
    className: "container-content",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
      sx: {
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
        height: "100vh",
        width: "100%" // background: "aqua",

      },
      className: "wrapper-content",
      ref: refWrapperContent,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
        sx: {
          position: "absolute",
          top: "0px",
          left: "0px",
          width: `${widthColumn}px`,
          height: "100%",
          zIndex: "2"
        },
        className: "column-left",
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
          children: (imgLeftTop == null ? void 0 : imgLeftTop.nextImg) || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: (imgLeftTop == null ? void 0 : imgLeftTop.href) || "",
            alt: (imgLeftTop == null ? void 0 : imgLeftTop.alt) || ""
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
          children: (imgLeftCenter1 == null ? void 0 : imgLeftCenter1.nextImg) || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: (imgLeftCenter1 == null ? void 0 : imgLeftCenter1.href) || "",
            alt: (imgLeftCenter1 == null ? void 0 : imgLeftCenter1.alt) || ""
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
          children: (imgLeftCenter2 == null ? void 0 : imgLeftCenter2.nextImg) || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: (imgLeftCenter2 == null ? void 0 : imgLeftCenter2.href) || "",
            alt: (imgLeftCenter2 == null ? void 0 : imgLeftCenter2.alt) || ""
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
          children: (imgLeftBottom == null ? void 0 : imgLeftBottom.nextImg) || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: (imgLeftBottom == null ? void 0 : imgLeftBottom.href) || "",
            alt: (imgLeftBottom == null ? void 0 : imgLeftBottom.alt) || ""
          })
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
        children: (imageCenter == null ? void 0 : imageCenter.nextImg) || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: (imageCenter == null ? void 0 : imageCenter.href) || "",
          alt: (imageCenter == null ? void 0 : imageCenter.alt) || ""
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
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
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
          children: (imgRightTop1 == null ? void 0 : imgRightTop1.nextImg) || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: (imgRightTop1 == null ? void 0 : imgRightTop1.href) || "",
            alt: imgRightTop1 == null ? void 0 : imgRightTop1.alt
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
          children: (imgRightTop2 == null ? void 0 : imgRightTop2.nextImg) || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: (imgRightTop2 == null ? void 0 : imgRightTop2.href) || "",
            alt: imgRightTop2 == null ? void 0 : imgRightTop2.alt
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
          children: (imgRightCenter == null ? void 0 : imgRightCenter.nextImg) || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: (imgRightCenter == null ? void 0 : imgRightCenter.href) || "",
            alt: imgRightCenter == null ? void 0 : imgRightCenter.alt
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
          children: (imgRightBottom == null ? void 0 : imgRightBottom.nextImg) || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: (imgRightBottom == null ? void 0 : imgRightBottom.href) || "",
            alt: imgRightBottom == null ? void 0 : imgRightBottom.alt
          })
        })]
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container.default, {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: {
          xs: "auto",
          xl: "50vh"
        }
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
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
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
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
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p6",
          color: _colors.default.neutral.neutral2,
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
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p6",
          color: _colors.default.neutral.neutral2,
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

var _default = ComplexKeyFeatureCard;
exports.default = _default;
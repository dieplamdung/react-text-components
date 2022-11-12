"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react2 = require("swiper/react");

var _CardGame = _interopRequireDefault(require("./CardGame"));

var _styles = require("@mui/styles");

var _component = _interopRequireDefault(require("@loadable/component"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import ImagePopupSlider from '~/organisms/ImagePopupSlider';
const ImagePopupSlider = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../ImagePopupSlider"))));

const CardGameList = props => {
  const {
    isNext = true,
    className = "CardGameList",
    listGame = [],
    isHomePage = false,
    secondLine = false
  } = props;
  const theme = (0, _styles.useTheme)();
  const isMobile = (0, _material.useMediaQuery)(theme.breakpoints.down('lg'));
  const refTimeOut1 = (0, _react.useRef)();
  const refTopWinDow = (0, _react.useRef)(0);
  const navigationPrevRef = (0, _react.useRef)(null);
  const navigationNextRef = (0, _react.useRef)(null);
  const [openPopup, setOpenPopup] = (0, _react.useState)(false);
  const [currentItem, setCurrentItem] = (0, _react.useState)(0);
  const cardNull = (0, _react.useMemo)(() => {
    return {
      image: 'https://images.ctfassets.net/hnoi7ctzfs57/1Flq5y1eK7lSIaYUx3FmQE/5a8f5b56e795dddbdfb4c2dff2bf47ad/placeholder.webp'
    };
  }, []);
  const [listCardValue, setListCardValue] = (0, _react.useState)([cardNull]);
  /**
  * Use to transform data for pop-ups
  */

  const remapScreenshotItems = (0, _react.useMemo)(() => {
    return listCardValue == null ? void 0 : listCardValue.map(item => {
      var _item$title, _item$mainImageNext, _item$alt;

      return {
        trailerTitle: (_item$title = item == null ? void 0 : item.title) != null ? _item$title : '',
        mainImage: item == null ? void 0 : item.image,
        mainImageNext: (_item$mainImageNext = item == null ? void 0 : item.mainImageNext) != null ? _item$mainImageNext : '',
        alt: (_item$alt = item == null ? void 0 : item.alt) != null ? _item$alt : ''
      };
    });
  }, [listCardValue]);
  (0, _react.useLayoutEffect)(() => {
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

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [className, isNext, isMobile, secondLine]);
  (0, _react.useEffect)(() => {
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
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
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
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Swiper, {
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
      children: (listCardValue == null ? void 0 : listCardValue.length) && (listCardValue == null ? void 0 : listCardValue.map((item, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
        onClick: () => {
          // eslint-disable-next-line @typescript-eslint/no-unused-expressions
          !(item != null && item.href) && setOpenPopup(!openPopup);
          setCurrentItem(index);
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_CardGame.default, (0, _extends2.default)({}, item, {
          isHomePage: isHomePage,
          index: index
        }))
      }, index)))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Modal, {
      open: openPopup,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ImagePopupSlider, {
        handleOpenPopup: e => setOpenPopup(e),
        initialItem: currentItem,
        screenshotItems: remapScreenshotItems
      })
    })]
  });
};

var _default = CardGameList;
exports.default = _default;
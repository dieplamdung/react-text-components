"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _Box = _interopRequireDefault(require("@mui/material/Box"));

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _react2 = require("swiper/react");

var _Pills = _interopRequireDefault(require("../../atoms/Pills"));

var _BlogFeatureCard = _interopRequireDefault(require("./BlogFeatureCard"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Modules
// Styles
// Types
const BlogCategory = props => {
  const {
    title,
    pillProps,
    dataBlogCard,
    pillSelected = () => {},
    queryTag
  } = props;
  const [listPill, setListPill] = (0, _react.useState)(pillProps);
  const [initialSlide, setInitialSlide] = (0, _react.useState)(0);
  const refTimeout = (0, _react.useRef)();
  const refISEnd = (0, _react.useRef)();
  const refContentFilter = (0, _react.useRef)();
  const [tagSelectedLength, setTagSelectedLength] = (0, _react.useState)(0);

  const handleClick = (label, index) => {
    var _newListPill$filter;

    const newListPill = [...listPill];

    if (newListPill[index].active) {
      newListPill[index].active = false;
    } else {
      for (let i = 0; i < newListPill.length; i += 1) {
        newListPill[i].active = false;
      }

      newListPill[index].active = true;
    }

    setListPill(newListPill);
    const listLabelPillSelect = (_newListPill$filter = newListPill.filter(pill => pill.active)) == null ? void 0 : _newListPill$filter.map(pill => pill.value); // Passing value to component parent

    pillSelected(listLabelPillSelect);
    setTagSelectedLength(listLabelPillSelect.length);
  };

  const handelDestroySwiper = () => {
    var _refContentFilter$cur;

    const listSwiper = refContentFilter == null ? void 0 : (_refContentFilter$cur = refContentFilter.current) == null ? void 0 : _refContentFilter$cur.querySelectorAll(".mySwiper");

    if (listSwiper != null && listSwiper.length) {
      listSwiper.forEach(element => {
        var _element$swiper, _element$swiper$obser, _element$swiper2, _element$swiper2$resi;

        element == null ? void 0 : (_element$swiper = element.swiper) == null ? void 0 : (_element$swiper$obser = _element$swiper.observer) == null ? void 0 : _element$swiper$obser.destroy();
        element == null ? void 0 : (_element$swiper2 = element.swiper) == null ? void 0 : (_element$swiper2$resi = _element$swiper2.resize) == null ? void 0 : _element$swiper2$resi.orientationChangeHandler();
      });
    }
  };

  const handelChangeHandlerSwiper = e => {
    if (!refISEnd.current && !!e) {
      var _refContentFilter$cur2;

      refISEnd.current = e.isEnd;
      const listSwiper = refContentFilter == null ? void 0 : (_refContentFilter$cur2 = refContentFilter.current) == null ? void 0 : _refContentFilter$cur2.querySelectorAll(".mySwiper");

      if (listSwiper != null && listSwiper.length) {
        listSwiper.forEach(element => {
          var _element$swiper3, _element$swiper3$resi;

          element == null ? void 0 : (_element$swiper3 = element.swiper) == null ? void 0 : (_element$swiper3$resi = _element$swiper3.resize) == null ? void 0 : _element$swiper3$resi.orientationChangeHandler();
        });
      }
    }
  };

  (0, _react.useEffect)(() => {
    const dataClone = [...pillProps];

    if (queryTag != null && queryTag.length) {
      const index = pillProps.findIndex(item => item.label === (queryTag == null ? void 0 : queryTag[0]));

      if (index !== -1) {
        dataClone[index].active = true;
        setListPill(dataClone);
      }

      setTagSelectedLength(queryTag == null ? void 0 : queryTag.length);
      pillSelected(queryTag);
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [queryTag]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      color: _colors.default.primary.bandaiNamcoBlack,
      variant: "h1",
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      ref: refContentFilter,
      sx: {
        '& .swiper-slide': {
          width: 'auto !important'
        },
        marginTop: '28px'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.Swiper, {
        slidesPerView: "auto",
        spaceBetween: 12,
        freeMode: true,
        observer: true,
        initialSlide: initialSlide,
        resizeObserver: true,
        onTransitionEnd: e => {
          if (refTimeout.current) {
            window.clearTimeout(refTimeout.current);
          }

          refTimeout.current = setTimeout(() => {
            setInitialSlide(e.activeIndex);
            handelDestroySwiper();
            handelChangeHandlerSwiper((e == null ? void 0 : e.isEnd) || false);
          }, 200);
        },
        className: "mySwiper",
        children: listPill.map((pill, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_react2.SwiperSlide, {
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Pills.default, (0, _extends2.default)({}, pill, {
            active: pill.active,
            triggerClick: () => {
              var _pill$value;

              handleClick((_pill$value = pill == null ? void 0 : pill.value) != null ? _pill$value : '', index);
            }
          }), index)
        }))
      })
    }), tagSelectedLength === 0 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        marginTop: {
          xs: '21px',
          md: '60px'
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_BlogFeatureCard.default, (0, _extends2.default)({}, dataBlogCard == null ? void 0 : dataBlogCard[0]))
    })]
  });
};

var _default = BlogCategory;
exports.default = _default;
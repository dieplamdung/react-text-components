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

var _PopularCard = _interopRequireDefault(require("../../molecules/PopularCard"));

var _useMediaQuery = _interopRequireDefault(require("@mui/material/useMediaQuery"));

var _viewport = require("../../utils/viewport");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _material = require("@mui/material");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import modules
// import styles
// import type
const ScrollingPopularGameContainer = props => {
  const {
    title,
    listPopularCard
  } = props;
  const theme = (0, _material.useTheme)();
  const isMobile = (0, _useMediaQuery.default)((0, _viewport.TabletDown)(theme));
  const isMobileMin = (0, _useMediaQuery.default)((0, _viewport.SmallMobileDown)(theme));
  const refIsMobileMin = (0, _react.useRef)(isMobileMin);
  const [paddingScrollContent, setPaddingScrollContent] = (0, _react.useState)(0);
  const refContainer = (0, _react.useRef)();
  const refWrapperContent = (0, _react.useRef)();
  (0, _react.useLayoutEffect)(() => {
    refIsMobileMin.current = isMobileMin;
  }, [isMobileMin]);
  (0, _react.useLayoutEffect)(() => {
    if (typeof window !== "undefined") {
      // set padding-left content scroll  = left container.
      setPaddingScrollContent(refContainer.current.offsetLeft + (refIsMobileMin.current ? 16 : 24)); // listen to events window resize for change padding left  content scroll.

      window.addEventListener("resize", () => {
        // set padding left when window resize
        if (refWrapperContent.current) {
          const listChild = refWrapperContent.current.querySelectorAll(".childContent");

          if (listChild.length) {
            listChild.forEach(child => {
              var _refContainer$current;

              child.style.transform = `translateX(${((_refContainer$current = refContainer.current) == null ? void 0 : _refContainer$current.offsetLeft) + (refIsMobileMin.current ? 16 : 22)}px)`;
            });
          }
        }
      });
    }

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [isMobile]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Box.default, {
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      ref: refContainer,
      children: title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h4",
        color: _colors.default.primary.bandaiNamcoBlack,
        children: title
      })
    }), !isMobile && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
        children: listPopularCard.map((itemProps, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_PopularCard.default, (0, _extends2.default)({}, itemProps), index))
      })
    }), isMobile && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
      sx: {
        marginTop: '24px',
        width: "100%",
        position: "relative",
        overflowX: "hidden"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
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
          return /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
            sx: {
              display: "inline-block",
              scrollSnapAlign: "start"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Box.default, {
              sx: {
                display: "flex",
                marginLeft: "0px",
                minWidth: "233px",
                paddingRight: '22px',
                transform: `translateX(${paddingScrollContent}px)`
              },
              className: "childContent",
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_PopularCard.default, (0, _extends2.default)({}, itemProps))
            })
          }, index);
        })
      })
    })]
  });
};

var _default = ScrollingPopularGameContainer;
exports.default = _default;
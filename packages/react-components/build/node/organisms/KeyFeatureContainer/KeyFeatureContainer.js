"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _ComplexKeyFeatureCard = _interopRequireDefault(require("../../molecules/ComplexKeyFeatureCard"));

var _KeyFeature = _interopRequireDefault(require("../../molecules/KeyFeature"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import Modules
// import Styles
const KeyFeatureContainer = ({
  id,
  title,
  onlyShowKeyFeatureCard = false,
  dataComplexKeyFeatureCard,
  dataKeyFeatureCard
}) => {
  const refContainer = (0, _react.useRef)(); // const refIsShow = useRef<any>();
  // dispatchEvent event send id to sub navigation

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const container = refContainer.current; // const height = window.innerHeight;

      window.addEventListener("scroll", () => {
        if (container) {
          const {
            bottom,
            top
          } = container.getBoundingClientRect();
          const newBottom = Math.floor(bottom);
          const newTop = Math.floor(top);

          if (newTop < 120 && newBottom > 100) {
            var _window;

            // refIsShow.current = true;
            (_window = window) == null ? void 0 : _window.dispatchEvent(new Event(`${id}`));
          } // if ((newBottom < 0 && refIsShow.current) || (newTop > height && refIsShow.current)) {
          //   refIsShow.current = false;
          //   window.removeEventListener(`${id}`, () => { })
          // }

        }
      });
    }

    return () => {
      window.removeEventListener(`${id}`, () => {});
      window.removeEventListener(`scroll`, () => {});
    };
  }, [id]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    id: id,
    ref: refContainer,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        flex: 1,
        display: "flex",
        justifyContent: "center"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            width: "100%",
            display: "flex",
            marginBottom: {
              xs: "72px",
              md: "86px"
            },
            padding: {
              xs: "0px 16px",
              md: "0 50px",
              xl: "0px"
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h2",
            color: _colors.default.primary.bandaiNamcoBlack,
            children: title
          })
        })
      })
    }), !onlyShowKeyFeatureCard && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        marginBottom: {
          xs: "82px",
          md: "100px",
          lg: "132px"
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_ComplexKeyFeatureCard.default, (0, _extends2.default)({}, dataComplexKeyFeatureCard))
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%"
      },
      children: dataKeyFeatureCard.map((card, index) => {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            width: "100%",
            marginBottom: {
              xs: "82px",
              md: "100px",
              lg: "132px"
            },
            '&:last-child': {
              marginBottom: "0px"
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_KeyFeature.default, (0, _extends2.default)({}, card))
        }, index);
      })
    })]
  });
};

var _default = KeyFeatureContainer;
exports.default = _default;
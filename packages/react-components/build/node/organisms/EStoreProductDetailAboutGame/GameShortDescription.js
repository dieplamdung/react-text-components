"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _useMediaQuery = _interopRequireDefault(require("@mui/material/useMediaQuery"));

var _react = _interopRequireWildcard(require("react"));

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Modules
// Styles
const GameShortDescription = props => {
  const {
    title,
    description,
    mainImage,
    nextImage,
    id
  } = props;
  const isMobile = (0, _useMediaQuery.default)(themes => themes.breakpoints.down('lg'));
  const refT = (0, _react.useRef)("");
  const refTimeOut = (0, _react.useRef)("");
  const refContainer = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const T = refT.current;
      T.style.height = `auto`;

      if (T) {
        const {
          height
        } = T.getBoundingClientRect();
        T.style.height = `${height + (isMobile ? 3 : 5)}px`;
      }

      ;
      window.addEventListener("resize", () => {
        T.style.height = `auto`;

        if (refTimeOut.current) {
          window.clearTimeout(refTimeOut.current);
        }

        refTimeOut.current = setTimeout(() => {
          refTimeOut.current = undefined;
          const {
            height
          } = T.getBoundingClientRect();
          T.style.height = `${height + (isMobile ? 3 : 5)}px`;
        }, 100);
      });
    }

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [isMobile]); // dispatchEvent event send id to sub navigation

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
          }
        }
      });
    }

    return () => {
      window.removeEventListener(`${id}`, () => {});
      window.removeEventListener(`scroll`, () => {});
    };
  }, [id]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    id: id,
    ref: refContainer,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: 'flex',
          flexDirection: "column",
          width: "100%"
        },
        children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            padding: {
              xs: "0px 16px",
              md: "0px"
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h2",
            ref: refT,
            sx: {
              padding: {
                xs: "0px",
                lg: "0px 76px",
                xl: "0px 177px"
              },
              width: "100%",
              color: _colors.default.primary.bandaiNamcoBlack,
              letterSpacing: {
                md: "-1px",
                xs: '-0.4px'
              },
              wordBreak: 'break-word'
            },
            children: title
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            maxWidth: '100%',
            width: "100%",
            display: "flex",
            flexDirection: "column",
            position: "relative",
            margin: {
              xs: '36px 0',
              lg: '80px 0'
            },
            paddingBottom: "56.2%",
            borderRadius: {
              xs: '10px',
              md: "20px"
            },
            overflow: "hidden",
            "& span": {
              position: "absolute !important",
              top: "0px",
              left: "0px",
              width: "100% !important",
              height: "100% !important"
            },
            '& img': {
              position: "absolute",
              top: "0px",
              left: "0px",
              objectFit: 'cover',
              display: 'block',
              width: '100%',
              height: '100%',
              marginLeft: {
                xs: '0',
                lg: '0px'
              }
            }
          },
          children: nextImage || /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
            src: mainImage,
            alt: title != null ? title : ''
          })
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            gridColumn: '2/3',
            gridRow: '-2/-1',
            padding: {
              xs: '0px 16px',
              md: "0px",
              lg: '0 95px 0 474px'
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p6",
            sx: {
              color: _colors.default.neutral.neutral2,
              paddingBottom: !isMobile ? '32.5px' : 'unset',
              wordBreak: 'break-word'
            },
            children: description
          })
        })]
      })
    })
  });
};

var _default = GameShortDescription;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _Link = _interopRequireDefault(require("@mui/material/Link"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const AdsContainer = ({
  img,
  alt,
  title,
  description,
  href,
  id
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
          //     refIsShow.current = false;
          //     window.removeEventListener(`${id}`, () => { })
          // }

        }
      });
    }

    return () => {
      window.removeEventListener(`${id}`, () => {});
      window.removeEventListener(`scroll`, () => {});
    };
  }, [id]);
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      width: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },
    id: id,
    ref: refContainer,
    children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        maxWidth: {
          xs: "100%",
          md: "736px"
        },
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderRadius: "20px",
        '& a': {
          width: "100%",
          height: {
            xs: "204px",
            md: "414px"
          },
          '& img': {
            width: "100%",
            height: "100%",
            borderRadius: {
              xs: "10px",
              md: "20px"
            },
            objectFit: "cover"
          }
        }
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default, {
        href: href,
        sx: {
          textDecoration: "none"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)("img", {
          src: img || "",
          alt: alt || ""
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "h5",
        sx: {
          textAlign: "center",
          whiteSpace: "nowrap",
          overflow: "hidden",
          display: "block",
          textOverflow: "ellipsis",
          letterSpacing: {
            xs: "-0.4px",
            md: "-0.8px"
          },
          color: _colors.default.primary.bandaiNamcoBlack,
          marginTop: {
            xs: "20px",
            md: "32px"
          }
        },
        children: title
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        variant: "p4",
        sx: {
          textAlign: "center",
          lineHeight: "24px",
          whiteSpace: "nowrap",
          overflow: "hidden",
          display: "block",
          textOverflow: "ellipsis",
          color: "#7E7E7E",
          marginTop: "4px"
        },
        children: description
      })]
    })
  });
};

var _default = AdsContainer;
exports.default = _default;
"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Edition;

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../../theme/colors"));

var _index = require("./index");

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// eslint-disable-next-line import/no-cycle
function Edition(props) {
  const {
    title,
    editionList,
    itemSelectEdition,
    onSelectEdition,
    isDisable = false,
    padding = 0,
    titleCompare
  } = props;
  const refWrapper = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    let timeout = null;

    if (typeof window !== "undefined") {
      const wrapper = refWrapper.current;

      if (wrapper) {
        window.addEventListener("resize", () => {
          timeout = setTimeout(() => {
            wrapper == null ? void 0 : wrapper.scrollTo({
              left: 0,
              behavior: "smooth"
            });
          }, 500);
        });
      }
    }

    ;
    return () => {
      window.removeEventListener("resize", () => {});
      window.clearTimeout(timeout);
    };
  }, []);

  const handleClickCompare = () => {
    if (typeof window !== "undefined") {
      const compareContent = document.querySelector(".content-compare-edition");

      if (compareContent) {
        const {
          top
        } = compareContent.getBoundingClientRect();
        window.scrollTo({
          top: top + window.scrollY,
          behavior: "smooth"
        });
      }
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    sx: {
      opacity: isDisable ? "0.4" : "1",
      pointerEvents: isDisable ? "none" : "auto"
    },
    children: [(0, _index.WrapperContainer)( /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        color: _colors.default.neutral.neutral2,
        variant: "p6",
        children: title
      }), !!titleCompare && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
        color: _colors.default.primary.bandaiNamcoRed,
        variant: "p5",
        sx: {
          width: "fit-content",
          cursor: "pointer",
          position: "relative",
          "&:before": {
            position: "absolute",
            content: "' '",
            width: "100%",
            left: "0px",
            bottom: "0px",
            borderBottom: `1px solid ${_colors.default.primary.bandaiNamcoRed}`
          }
        },
        onClick: handleClickCompare,
        children: titleCompare
      })]
    })), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
      sx: {
        width: "100%",
        display: "flex",
        flexWrap: {
          xs: "nowrap",
          lg: "wrap"
        },
        height: "fit-content",
        gap: "12px",
        paddingTop: "14px",
        overflow: "scroll",
        scrollbarWidth: "none",
        scrollSnapType: "x mandatory",
        WebkitOverflowScrolling: "touch",
        overscrollBehaviorX: "contain",
        "&::-webkit-scrollbar": {
          display: "none"
        }
      },
      ref: refWrapper,
      children: [!!(editionList != null && editionList.length) && editionList.map((item, index) => {
        return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: "inline-block",
            scrollSnapAlign: "start",
            minWidth: {
              xs: "fit-content",
              lg: "calc(50% - 6px)"
            },
            maxWidth: {
              xs: "auto",
              lg: "calc(50% - 6px)"
            },
            width: "fit-content"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              transform: {
                xs: `translateX(${padding + 16}px)`,
                md: `translateX(${padding}px)`
              },
              width: "100%"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
              sx: {
                flex: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                padding: "11.5px 24px",
                border: "1px solid",
                borderRadius: "10px",
                borderColor: (itemSelectEdition == null ? void 0 : itemSelectEdition.id) === (item == null ? void 0 : item.id) ? _colors.default.secondary.bandaiNamcoBlue : _colors.default.neutral.neutral5,
                cursor: "pointer",
                transition: "all 0.3s",
                "&:hover": {
                  borderColor: _colors.default.secondary.bandaiNamcoBlue,
                  "& p": {
                    color: _colors.default.secondary.bandaiNamcoBlue
                  }
                }
              },
              onClick: () => onSelectEdition == null ? void 0 : onSelectEdition(item),
              children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "p5",
                color: (itemSelectEdition == null ? void 0 : itemSelectEdition.id) === (item == null ? void 0 : item.id) ? _colors.default.secondary.bandaiNamcoBlue : _colors.default.primary.bandaiNamcoBlack,
                sx: {
                  lineHeight: {
                    xs: "20px",
                    lg: "22px"
                  },
                  whiteSpace: "nowrap",
                  textAlign: "center"
                },
                children: item == null ? void 0 : item.titleEdition
              }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                variant: "p6",
                color: (itemSelectEdition == null ? void 0 : itemSelectEdition.id) === (item == null ? void 0 : item.id) ? _colors.default.secondary.bandaiNamcoBlue : "#9F9F9F",
                sx: {
                  lineHeight: {
                    xs: "20px",
                    lg: "22px"
                  },
                  color: "#9F9F9F",
                  marginTop: "-1px",
                  whiteSpace: "nowrap",
                  textAlign: "center"
                },
                children: item == null ? void 0 : item.valuePrice
              })]
            })
          })
        }, index);
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: {
            xs: "inline-block",
            lg: "none"
          },
          scrollSnapAlign: "start"
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            transform: {
              xs: `translateX(${padding + 4}px)`,
              md: `translateX(${padding - 12}px)`
            }
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              display: "inline-block",
              width: {
                xs: `${padding + 16}px`,
                md: `${padding}px`
              },
              height: "100%",
              background: "red"
            }
          })
        })
      })]
    })]
  });
}
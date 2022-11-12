"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Modules
const GameDetailInformation = props => {
  const {
    listProps,
    title,
    id
  } = props;
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
  return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
    sx: {
      padding: {
        xs: "0px 16px",
        md: "0px 20px"
      }
    },
    id: id,
    ref: refContainer,
    children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        backgroundColor: _colors.default.neutral.neutral7,
        borderRadius: "20px",
        padding: {
          xs: "0px 8px",
          lg: "0px"
        }
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
        sx: {
          paddingTop: {
            xs: "22px",
            md: "100px"
          },
          paddingBottom: {
            xs: "22px",
            md: "100px"
          }
        },
        children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "h4",
            sx: {
              marginBottom: '40px'
            },
            children: title
          }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
            sx: {
              width: "100%",
              display: "flex",
              flexDirection: {
                xs: "column",
                md: "row"
              },
              justifyContent: "space-between"
            },
            children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                width: {
                  xs: "100%",
                  md: "50%"
                },
                maxWidth: "357px",
                marginRight: {
                  xs: "0px",
                  md: "50px"
                }
              },
              children: listProps.map((item, index) => {
                if (index < 3) {
                  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
                    sx: {
                      position: "relative",
                      paddingBottom: {
                        xs: "16px",
                        md: "28px"
                      },
                      paddingTop: "16px",
                      "&:after": {
                        position: "absolute",
                        content: '" "',
                        left: "0",
                        bottom: "0",
                        borderBottom: "1px solid #DDDDDD",
                        opacity: "100%",
                        width: "100%"
                      }
                    },
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                      variant: "p3",
                      children: item.title
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                      variant: "p6",
                      sx: {
                        color: _colors.default.neutral.neutral2
                      },
                      children: item.detail
                    })]
                  }, index);
                }

                return null;
              })
            }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              sx: {
                width: {
                  xs: "100%",
                  md: "50%"
                },
                maxWidth: "357px"
              },
              children: listProps.map((item, index) => {
                if (index > 2) {
                  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
                    sx: {
                      position: "relative",
                      paddingBottom: {
                        xs: "16px",
                        md: "28px"
                      },
                      paddingTop: "16px",
                      "&:after": {
                        position: "absolute",
                        content: '" "',
                        left: "0",
                        bottom: "0",
                        borderBottom: "1px solid #DDDDDD",
                        opacity: "100%",
                        width: "100%"
                      },
                      "&:last-child": {
                        "&:after": {
                          display: {
                            xs: "none",
                            md: "flex"
                          }
                        }
                      }
                    },
                    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                      variant: "p3",
                      children: item.title
                    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                      variant: "p6",
                      sx: {
                        color: _colors.default.neutral.neutral2
                      },
                      children: item.detail
                    })]
                  }, index);
                }

                return null;
              })
            })]
          })]
        })
      })
    })
  });
};

var _default = GameDetailInformation;
exports.default = _default;
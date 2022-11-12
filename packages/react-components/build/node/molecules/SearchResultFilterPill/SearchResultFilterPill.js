"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _material = require("@mui/material");

var _Link = _interopRequireDefault(require("@mui/material/Link"));

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable jsx-a11y/anchor-is-valid */
const SearchResultFilterPill = /*#__PURE__*/(0, _react.forwardRef)((props, ref) => {
  const {
    listTabs,
    handleGetTabActive
  } = props;
  const [isStickyContent, setIsStickyContent] = (0, _react.useState)(false);
  const refContentSticker = (0, _react.useRef)();
  const wrapperContent = (0, _react.useRef)();
  const refSticky = (0, _react.useRef)();
  const refScrollTop = (0, _react.useRef)(0);
  const [activeFilter, setActiveFilter] = (0, _react.useState)(0);
  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const content = wrapperContent.current;
      const {
        top
      } = content.getBoundingClientRect();
      const heightComponent = 30;
      const positionTopContent = top + window.scrollY;

      if (content) {
        window.addEventListener("scroll", () => {
          const body = document.querySelector(".disable-scroll");

          if (!body) {
            if (positionTopContent + heightComponent <= window.scrollY && !refSticky.current) {
              refSticky.current = true;
              setIsStickyContent(true);
              refScrollTop.current = window.scrollY;
            }

            if (positionTopContent + heightComponent > window.scrollY && refSticky.current) {
              refSticky.current = false;
              setIsStickyContent(false);
            }
          }
        });
      }
    }

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []);
  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const heightTop = "-150px";

      if (refSticky.current) {
        const content = refContentSticker.current;

        if (content) {
          window.addEventListener("scroll", () => {
            const body = document.querySelector(".disable-scroll");

            if (!body) {
              if (refSticky.current) {
                if (window.scrollY > refScrollTop.current) {
                  content.style.top = "0px";
                  refScrollTop.current = window.scrollY;
                }

                if (window.scrollY < refScrollTop.current) {
                  content.style.top = heightTop;
                  refScrollTop.current = window.scrollY;
                }
              }

              if (!refSticky.current) {
                content.style.top = heightTop;
              }
            }
          });
        }
      } else {
        window.removeEventListener("scroll", () => {});
      }
    }

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [isStickyContent]);

  const getTabActive = e => {
    handleGetTabActive == null ? void 0 : handleGetTabActive(e);
  };

  (0, _react.useImperativeHandle)(ref, () => ({
    handleClickTab(idx, value) {
      setActiveFilter(idx);
      getTabActive(value);
    }

  }));

  const handleScrollTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    ref: wrapperContent,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          width: "100%",
          height: "100%",
          overflowX: "scroll",
          marginTop: '80px',
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        },
        children: listTabs == null ? void 0 : listTabs.map((item, idx) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: "inline-block",
            marginRight: {
              xs: '28px',
              md: '48'
            }
          },
          onClick: () => {
            setActiveFilter(idx);
            getTabActive(item.value);
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p3",
            color: _colors.default.neutral.neutral4,
            className: idx === activeFilter ? 'active' : '',
            sx: {
              position: 'relative',
              '&:hover': {
                '&:after': {
                  width: '100%'
                },
                '& a': {
                  color: _colors.default.primary.bandaiNamcoRed
                }
              },
              '&.active': {
                '&:after': {
                  width: '100%'
                },
                '& a': {
                  color: _colors.default.primary.bandaiNamcoRed
                }
              },
              whiteSpace: 'nowrap',
              '&:after': {
                content: "''",
                width: '0%',
                position: 'absolute',
                bottom: 0,
                height: '2px',
                left: 0,
                transition: 'all .4s',
                backgroundColor: _colors.default.primary.bandaiNamcoRed
              }
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default // eslint-disable-next-line no-script-url
            , {
              href: 'javascript:void(0)',
              sx: {
                textDecoration: 'none',
                transition: 'all .4s',
                color: _colors.default.otherColor.silver,
                userSelect: item.disable ? 'none' : 'auto',
                pointerEvents: item.disable ? 'none' : 'auto'
              },
              children: item.label
            })
          })
        }, idx))
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        position: "fixed",
        top: `${isStickyContent ? "0px" : "-150px"}`,
        left: "0px",
        width: "100%",
        height: "90px",
        display: "flex",
        alignItems: "center",
        background: "#FFFFFF",
        boxShadow: "0px 7px 17px rgba(0, 0, 0, 0.04)",
        zIndex: "99",
        transition: "all 0.3s"
      },
      ref: refContentSticker,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            width: "100%",
            height: "100%",
            overflowX: "scroll",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none"
            },
            padding: '6px 0px'
          },
          children: listTabs == null ? void 0 : listTabs.map((item, idx) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              display: "inline-block",
              marginRight: {
                xs: '28px',
                md: '48'
              }
            },
            onClick: () => {
              setActiveFilter(idx);
              getTabActive(item.value);
              handleScrollTop();
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
              variant: "p3",
              color: _colors.default.neutral.neutral4,
              className: idx === activeFilter ? 'active' : '',
              sx: {
                position: 'relative',
                '&:hover': {
                  '&:after': {
                    width: '100%'
                  },
                  '& a': {
                    color: _colors.default.primary.bandaiNamcoRed
                  }
                },
                '&.active': {
                  '&:after': {
                    width: '100%'
                  },
                  '& a': {
                    color: _colors.default.primary.bandaiNamcoRed
                  }
                },
                whiteSpace: 'nowrap',
                '&:after': {
                  content: "''",
                  width: '0%',
                  position: 'absolute',
                  bottom: 0,
                  height: '2px',
                  left: 0,
                  transition: 'all .4s',
                  backgroundColor: _colors.default.primary.bandaiNamcoRed
                }
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Link.default // eslint-disable-next-line no-script-url
              , {
                href: 'javascript:void(0)',
                sx: {
                  textDecoration: 'none',
                  transition: 'all .4s',
                  color: _colors.default.otherColor.silver,
                  userSelect: item.disable ? 'none' : 'auto',
                  pointerEvents: item.disable ? 'none' : 'auto'
                },
                children: item.label
              })
            })
          }, idx))
        })
      })
    })]
  });
});
var _default = SearchResultFilterPill;
exports.default = _default;
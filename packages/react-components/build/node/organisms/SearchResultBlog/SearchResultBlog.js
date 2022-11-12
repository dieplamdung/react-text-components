"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _viewport = require("../../utils/viewport");

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _RelatedGameCardBlog = _interopRequireDefault(require("../SearchResult/RelatedGameCardBlog"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// Modules
// Types
const SearchResultBlog = props => {
  const {
    listThumbnail = [],
    title,
    classSection = 'thumbnail-card-carousel',
    isBlog = false,
    viewMore,
    numberShow,
    clickViewMore
  } = props;
  const [dataItem, setDataItem] = (0, _react.useState)([]);
  const [paddingScrollContent, setPaddingScrollContent] = (0, _react.useState)(0);
  const theme = (0, _material.useTheme)();
  const isMobileDown = (0, _material.useMediaQuery)((0, _viewport.MobileDown)(theme));
  const refIsMobile = (0, _react.useRef)(isMobileDown);
  const isMobileMin = (0, _material.useMediaQuery)((0, _viewport.SmallMobileDown)(theme));
  const refIsMobileMin = (0, _react.useRef)(isMobileMin);
  const refWrapper = (0, _react.useRef)();
  const refContainer = (0, _react.useRef)();
  const refItemContent = (0, _react.useRef)();
  const refWrapperContent = (0, _react.useRef)();
  const refLastChild = (0, _react.useRef)();
  const refTimeout = (0, _react.useRef)();
  (0, _react.useEffect)(() => {
    refIsMobileMin.current = isMobileMin;
  }, [isMobileMin]); // handle event resize set translateX item content scroll 

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      var _refContainer$current;

      refIsMobile.current = isMobileDown; // set padding-left content scroll  = left container.

      setPaddingScrollContent(((_refContainer$current = refContainer.current) == null ? void 0 : _refContainer$current.offsetLeft) + (refIsMobileMin.current ? 16 : 24)); // listen to events window resize for change padding left  content scroll.

      window.addEventListener("resize", () => {
        var _refContainer$current3;

        // set padding left when window resize
        if (refWrapperContent.current) {
          const listChild = refWrapperContent.current.querySelectorAll(".childContent");

          if (listChild.length) {
            listChild.forEach(child => {
              var _refContainer$current2;

              child.style.transform = `translateX(${((_refContainer$current2 = refContainer.current) == null ? void 0 : _refContainer$current2.offsetLeft) + (refIsMobileMin.current ? 16 : 24)}px)`;
            });
          }
        }

        refLastChild.current.style.marginLeft = `${((_refContainer$current3 = refContainer.current) == null ? void 0 : _refContainer$current3.offsetLeft) + (refIsMobileMin.current ? 16 : 24)}px`;
      });
    }

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [listThumbnail, isMobileDown]); // handel event scroll to set scrollBy item correct

  const handleScroll = () => {
    if (refTimeout.current) {
      window.clearTimeout(refTimeout.current);
    }

    refTimeout.current = setTimeout(() => {
      refTimeout.current = undefined;
      const scrollLeft = refWrapperContent.current.scrollLeft;
      const clientWidth = refItemContent.current.clientWidth;

      if (Math.floor(scrollLeft) % clientWidth !== 0) {
        const length = listThumbnail.length || 0;

        for (let i = 0; i < length; i += 1) {
          const step = clientWidth * i;

          if (step > Math.floor(scrollLeft)) {
            var _refWrapperContent$cu;

            (_refWrapperContent$cu = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu.scrollBy({
              left: step - scrollLeft,
              behavior: "smooth"
            });
            break;
          }
        }
      }
    }, 300);
  };

  (0, _react.useEffect)(() => {
    if (numberShow) {
      const dataClone = [...listThumbnail];
      const data = dataClone.splice(0, numberShow);
      setDataItem(data);
    } else {
      setDataItem(listThumbnail);
    }
  }, [numberShow, listThumbnail]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    className: classSection,
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      '& a': {
        outline: 'none'
      }
    },
    ref: refWrapper,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_Container.default, {
      ref: refContainer,
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingLeft: '0',
          paddingRight: '16px',
          maxWidth: {
            xs: 'calc(100vw - 16px)',
            md: '720px',
            lg: '960px',
            xl: '1140px'
          },
          marginBottom: title ? '44px' : '0px'
        },
        children: [title && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_Typography.default, {
          variant: "h2",
          color: _colors.default.primary.bandaiNamcoBlack,
          sx: {
            display: 'flex',
            alignItems: 'center'
          },
          children: [title, " ", /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
            variant: "p5",
            sx: {
              minWidth: '28px',
              height: '28px',
              borderRadius: listThumbnail.length > 99 ? '8px !important' : '100%',
              backgroundColor: _colors.default.neutral.neutral6,
              overflow: 'hidden',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: '6px !important',
              paddingLeft: listThumbnail.length > 99 ? '6px !important' : '0px !important',
              paddingRight: listThumbnail.length > 99 ? '6px !important' : '0px !important'
            },
            children: listThumbnail.length
          })]
        }), !!(listThumbnail != null && listThumbnail.length) && (listThumbnail == null ? void 0 : listThumbnail.length) > 3 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: 'flex',
            alignItems: 'center'
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            children: (viewMore == null ? void 0 : viewMore.title) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
              onClick: () => clickViewMore == null ? void 0 : clickViewMore(),
              sx: {
                display: 'inline-block'
              },
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                component: 'span' // href={viewMore?.href}
                // target={viewMore?.target}
                ,
                sx: {
                  cursor: 'pointer',
                  borderBottom: `1px solid ${_colors.default.neutral.neutral2}`,
                  transition: 'all .4s',
                  color: _colors.default.neutral.neutral2,
                  textDecoration: 'none',
                  lineHeight: '21px',
                  display: 'inline-block',
                  '&:hover': {
                    '& p': {
                      color: _colors.default.primary.bandaiNamcoBlack
                    },
                    borderBottom: `1px solid ${_colors.default.primary.bandaiNamcoBlack}`
                  }
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
                  variant: "p5",
                  color: _colors.default.neutral.neutral2,
                  sx: {
                    transition: 'all .4s'
                  },
                  children: viewMore == null ? void 0 : viewMore.title
                })
              })
            })
          })
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        width: "100%",
        position: "relative",
        overflowX: "hidden"
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          display: "flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          width: "100%",
          height: "100%",
          overflowX: "scroll",
          scrollSnapType: "x proximity",
          WebkitOverflowScrolling: "touch",
          overscrollBehaviorX: "contain",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        },
        onScroll: handleScroll,
        ref: refWrapperContent,
        children: [!!(dataItem != null && dataItem.length) && dataItem.map((item, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: "inline-block",
            scrollSnapAlign: "start"
          },
          ref: refItemContent,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              minWidth: {
                xs: "288px",
                md: "357px"
              },
              display: "flex",
              marginLeft: "0px",
              marginRight: {
                xs: "20px",
                md: '22px'
              },
              transform: `translateX(${paddingScrollContent}px)`
            },
            className: "childContent",
            ref: refItemContent,
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_RelatedGameCardBlog.default, (0, _extends2.default)({}, item, {
              tagBg: true,
              isBlog: isBlog
            }))
          })
        }, index)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: "inline-block"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              display: "flex",
              marginLeft: `${paddingScrollContent}px`,
              paddingRight: '0px',
              width: "0px",
              height: "0px",
              opacity: "0"
            },
            ref: refLastChild
          })
        })]
      })
    })]
  });
};

var _default = SearchResultBlog;
exports.default = _default;
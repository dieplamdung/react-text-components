"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _material = require("@mui/material");

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Icon = require("../../atoms/Icon");

var _Container = _interopRequireDefault(require("../../atoms/Container"));

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _viewport = require("../../utils/viewport");

var _component = _interopRequireDefault(require("@loadable/component"));

var _jsxRuntime = require("react/jsx-runtime");

var _IconDownload;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DigitalDownloadCard = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../../molecules/DigitalDownloadCard"))));
const ImagePopupSlider = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../ImagePopupSlider"))));

const ScrollingRelatedGamesContainer = props => {
  const {
    listThumbnail,
    title,
    classSection = 'thumbnail-card-carousel',
    description,
    stepScroll = 1,
    isShowPopup = false,
    id
  } = props;
  const [disableArrowRight, setDisableArrowRight] = (0, _react.useState)(false);
  const [disableArrowLeft, setDisableArrowLeft] = (0, _react.useState)(true);
  const [openPopup, setOpenPopup] = (0, _react.useState)(false);
  const [itemSlider, setItemSlider] = (0, _react.useState)();
  const [paddingScrollContent, setPaddingScrollContent] = (0, _react.useState)(0);
  const theme = (0, _material.useTheme)();
  const isTabletDown = (0, _material.useMediaQuery)((0, _viewport.TabletDown)(theme));
  const isMobileDown = (0, _material.useMediaQuery)((0, _viewport.MobileDown)(theme));
  const refIsMobile = (0, _react.useRef)(isMobileDown);
  const isMobileMin = (0, _material.useMediaQuery)((0, _viewport.SmallMobileDown)(theme));
  const refIsMobileMin = (0, _react.useRef)(isMobileMin);
  const refWrapper = (0, _react.useRef)();
  const refContainer = (0, _react.useRef)();
  const refItemContent = (0, _react.useRef)();
  const refWrapperContent = (0, _react.useRef)();
  const refScrollRight = (0, _react.useRef)(false);
  const refLastChild = (0, _react.useRef)();
  const refTimeout = (0, _react.useRef)();
  const DOWNLOAD_TEXT = "Download";
  /**
   * Use to format data for ImagePopupSlider
   */

  const screenshotItems = (0, _react.useMemo)(() => {
    return listThumbnail == null ? void 0 : listThumbnail.map(item => {
      var _item$mainImage, _item$title, _item$description;

      return {
        mainImage: (_item$mainImage = item == null ? void 0 : item.mainImage) != null ? _item$mainImage : '',
        alt: item == null ? void 0 : item.title,
        title: (_item$title = item == null ? void 0 : item.title) != null ? _item$title : '',
        description: (_item$description = item == null ? void 0 : item.description) != null ? _item$description : '',
        icon: _IconDownload || (_IconDownload = /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconDownload, {})),
        iconText: {
          href: item == null ? void 0 : item.mainImage,
          label: DOWNLOAD_TEXT
        }
      };
    });
  }, [listThumbnail]) || [];
  (0, _react.useEffect)(() => {
    refIsMobileMin.current = isMobileMin;
  }, [isMobileMin]); // handle event resize set translateX item content scroll

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      var _refContainer$current;

      refIsMobile.current = isMobileDown; // set padding-left content scroll  = left container.

      setPaddingScrollContent(((_refContainer$current = refContainer.current) == null ? void 0 : _refContainer$current.offsetLeft) + (refIsMobileMin.current ? 16 : 24)); // listen to events window resize for change padding left  content scroll.

      window.addEventListener("resize", () => {
        // set padding left when window resize
        if (refWrapperContent.current) {
          const listChild = refWrapperContent.current.querySelectorAll(".childContent");

          if (listChild.length) {
            listChild.forEach(child => {
              if (child) {
                var _refContainer$current2;

                child.style.transform = `translateX(${((_refContainer$current2 = refContainer.current) == null ? void 0 : _refContainer$current2.offsetLeft) + (refIsMobileMin.current ? 16 : 22)}px)`;
              }
            });
          }

          const itemLastChild = refLastChild.current.getBoundingClientRect();
          const positionWidth = itemLastChild.x;

          if (positionWidth <= refWrapperContent.current.clientWidth) {
            setDisableArrowRight(true);
          } else {
            setDisableArrowRight(false);
          }
        }

        if (refLastChild.current) {
          var _refContainer$current3;

          refLastChild.current.style.marginLeft = `${((_refContainer$current3 = refContainer.current) == null ? void 0 : _refContainer$current3.offsetLeft) + (refIsMobileMin.current ? 16 : 22)}px`;
        }
      });
    }

    return () => {
      window.removeEventListener("resize", () => {});
    };
  }, [listThumbnail, isMobileDown]); // handel event scroll refWrapperContent disable btn left or right

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const content = refWrapperContent.current;

      if (content) {
        content.addEventListener("scroll", () => {
          const itemLastChild = refLastChild.current.getBoundingClientRect();
          const positionWidth = itemLastChild.x;

          if (!refIsMobile.current) {
            if (refTimeout.current) {
              window.clearTimeout(refTimeout.current);
            }

            refTimeout.current = setTimeout(() => {
              refTimeout.current = undefined;

              if (content.scrollLeft === 0) {
                setDisableArrowLeft(true);
              }

              if (disableArrowLeft && content.scrollLeft > 0) {
                setDisableArrowLeft(false);
              }

              if (positionWidth <= content.clientWidth) {
                setDisableArrowRight(true);
              }

              if (positionWidth > content.clientWidth && disableArrowRight) {
                setDisableArrowRight(false);
              }
            }, 100);
          }
        });
      }
    }
  }, [disableArrowRight, disableArrowLeft]); // reset scroll

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      var _refWrapperContent$cu;

      (_refWrapperContent$cu = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu.scrollBy({
        left: 0,
        behavior: "smooth"
      });
      const content = refWrapperContent.current;

      if (content) {
        const itemLastChild = refLastChild.current.getBoundingClientRect();
        const positionWidth = itemLastChild.x;

        if (positionWidth <= content.clientWidth) {
          setDisableArrowRight(true);
        } else {
          setDisableArrowRight(false);
        }
      }
    }
  }, [paddingScrollContent]); // dispatchEvent event send id to sub navigation

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const container = refWrapper.current; // const height = window.innerHeight;

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

  const next = () => {
    var _refWrapperContent$cu2;

    const clientWidth = refItemContent.current.clientWidth * stepScroll;
    (_refWrapperContent$cu2 = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu2.scrollBy({
      left: clientWidth,
      behavior: "smooth"
    });
  };

  const previous = () => {
    var _refWrapperContent$cu3;

    const clientWidth = refItemContent.current.clientWidth * stepScroll;
    (_refWrapperContent$cu3 = refWrapperContent.current) == null ? void 0 : _refWrapperContent$cu3.scrollBy({
      left: -clientWidth,
      behavior: "smooth"
    });
  };

  const ArrowSlide = ({
    children,
    sx,
    disabled,
    funcClick
  }) => {
    return /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      onClick: () => funcClick(),
      sx: (0, _extends2.default)({
        width: '62px',
        height: '62px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: disabled ? _colors.default.otherColor.alabaster : _colors.default.neutral.neutral7,
        borderRadius: '100%',
        pointerEvents: disabled ? 'none' : 'auto',
        cursor: !disabled ? 'pointer' : 'none'
      }, sx, {
        '&:hover': {
          '& path': {
            stroke: _colors.default.primary.bandaiNamcoRed
          }
        },
        '& svg': {
          height: '10px',
          pointerEvents: 'none',
          '& path': {
            stroke: disabled ? _colors.default.otherColor.quickSilver : _colors.default.primary.bandaiNamcoBlack
          }
        }
      }),
      children: children
    });
  };

  const handleClickItem = index => {
    if (isShowPopup) {
      setOpenPopup(!openPopup);
      setItemSlider(index);
    }
  };

  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    className: classSection,
    sx: {
      width: "100%",
      display: "flex",
      flexDirection: "column"
    },
    ref: refWrapper,
    id: id,
    children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_Container.default, {
      sx: {
        display: "flex",
        justifyContent: "space-between"
      },
      ref: refContainer,
      children: [/*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "h4",
          color: _colors.default.primary.bandaiNamcoBlack,
          children: title
        }), description && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p2",
          sx: {
            color: _colors.default.neutral.neutral2,
            marginTop: "8px"
          },
          children: description
        })]
      }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
        sx: {
          display: {
            xs: 'none',
            md: 'flex'
          },
          alignItems: 'center'
        },
        children: !isTabletDown && (listThumbnail == null ? void 0 : listThumbnail.length) > 2 && /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
          sx: {
            display: 'flex',
            alignItems: 'center',
            marginLeft: '48px'
          },
          children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              marginRight: "16px"
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ArrowSlide, {
              disabled: disableArrowLeft,
              funcClick: previous,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconPrevSlide, {
                htmlColor: "transparent",
                sx: {
                  height: '10px'
                }
              })
            })
          }), /*#__PURE__*/(0, _jsxRuntime.jsx)(ArrowSlide, {
            disabled: disableArrowRight,
            funcClick: () => {
              next();
              refScrollRight.current = true;
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Icon.IconNextSlide, {
              htmlColor: "transparent",
              sx: {
                height: '10px'
              }
            })
          })]
        })
      })]
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        width: "100%",
        marginTop: '44px',
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
          scrollSnapType: "x mandatory",
          WebkitOverflowScrolling: "touch",
          scrollBehavior: "smooth",
          scrollbarWidth: "none",
          "&::-webkit-scrollbar": {
            display: "none"
          }
        },
        ref: refWrapperContent,
        children: [listThumbnail && listThumbnail.length > 0 && listThumbnail.map((item, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: "inline-block",
            scrollSnapAlign: "start"
          },
          ref: refItemContent,
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              display: "flex",
              marginLeft: "0px",
              paddingRight: '22px',
              height: "100%",
              minWidth: {
                md: "371px",
                xs: "355px"
              },
              maxWidth: {
                md: "371px",
                xs: "355px"
              },
              transform: `translateX(${paddingScrollContent}px)`
            },
            className: "childContent",
            ref: refItemContent,
            onClick: () => handleClickItem(index),
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(DigitalDownloadCard, (0, _extends2.default)({}, item))
          })
        }, index)), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: "inline-block"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              display: "flex",
              marginLeft: `${paddingScrollContent - 24}px`,
              paddingRight: '0px',
              // width: "0px",
              // height: "0px",
              // opacity: "0",
              width: "10px",
              height: "10px",
              opacity: "0"
            },
            ref: refLastChild
          })
        })]
      })
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Modal, {
      open: openPopup,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ImagePopupSlider, {
        handleOpenPopup: () => setOpenPopup(false),
        screenshotItems: screenshotItems,
        initialItem: itemSlider != null ? itemSlider : 0
      })
    })]
  });
};

var _default = ScrollingRelatedGamesContainer;
exports.default = _default;
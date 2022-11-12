"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _material = require("@mui/material");

var _styles = require("@mui/styles");

var _react = _interopRequireWildcard(require("react"));

var _Typography = _interopRequireDefault(require("../../atoms/Typography"));

var _Tabs = _interopRequireDefault(require("../../atoms/Tabs"));

var _dist = require("react-xmasonry/dist");

var _colors = _interopRequireDefault(require("../../theme/colors"));

var _component = _interopRequireDefault(require("@loadable/component"));

var _jsxRuntime = require("react/jsx-runtime");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// import ImagePopupSlider from '~/organisms/ImagePopupSlider'
// import VideoPopupSlider from '~/organisms/VideoPopupSlider'
const VideoPopupSlider = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../VideoPopupSlider"))));
const ImagePopupSlider = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../ImagePopupSlider"))));
const GalleryCard = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../../molecules/GalleryCard"))));
const MediaGalleryCard = (0, _component.default)(() => Promise.resolve().then(() => _interopRequireWildcard(require("../../molecules/MediaGalleryCard"))));

const MediaGalleryContainer = props => {
  var _listThumbnail$, _listThumbnail$$media, _tab$mediaGalleryCard, _tab$mediaGalleryCard2, _tab$mediaGalleryCard3;

  const {
    listTabs,
    listThumbnail,
    title,
    seeMoreLabel = 'See more',
    seeLessLabel = 'See less',
    id
  } = props;
  const [tab, setTab] = (0, _react.useState)((listThumbnail == null ? void 0 : listThumbnail[0]) || []);
  const [itemSlider, setItemSlider] = (0, _react.useState)();
  const theme = (0, _styles.useTheme)();
  const isMobile = (0, _material.useMediaQuery)(theme.breakpoints.down('lg'));
  const popupRef = (0, _react.useRef)();
  const refContainer = (0, _react.useRef)();
  const [openPopup, setOpenPopup] = (0, _react.useState)(false);
  const [dataMobileShowing, setDataMobileShowing] = (0, _react.useState)(listThumbnail == null ? void 0 : (_listThumbnail$ = listThumbnail[0]) == null ? void 0 : (_listThumbnail$$media = _listThumbnail$.mediaGalleryCard) == null ? void 0 : _listThumbnail$$media.slice(0, 3));
  const [clickedViewMore, setClickedViewMore] = (0, _react.useState)(false); // dispatchEvent event send id to sub navigation

  (0, _react.useEffect)(() => {
    if (typeof window !== "undefined") {
      const container = refContainer.current;
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
  /**
   * Handling data switch tabs
   */

  const handleTabs = data => {
    var _filter$mediaGalleryC;

    const filter = listThumbnail == null ? void 0 : listThumbnail.find(item => (item == null ? void 0 : item.id) === data);
    setTab(filter);
    setDataMobileShowing(filter == null ? void 0 : (_filter$mediaGalleryC = filter.mediaGalleryCard) == null ? void 0 : _filter$mediaGalleryC.slice(0, 3));
    setClickedViewMore(false);
  };
  /**
   * Use to map data for ImagePopupSlider
   */


  const screenshotItems = (0, _react.useMemo)(() => {
    return tab.mediaGalleryCard.map(item => {
      var _item$img, _item$description;

      return {
        mainImage: (_item$img = item == null ? void 0 : item.img) != null ? _item$img : '',
        alt: item.alt,
        title: (_item$description = item == null ? void 0 : item.description) != null ? _item$description : '',
        description: '',
        mainImageNext: item == null ? void 0 : item.nextImage
      };
    });
  }, [tab.mediaGalleryCard]);
  /**
   * Use to map data for VideoPopupSlider
   */

  const trailerItems = (0, _react.useMemo)(() => {
    return tab.mediaGalleryCard.map(item => {
      var _item$videoUrl, _item$description2, _item$img2, _item$alt, _item$tags$title, _item$tags;

      return {
        trailerUrl: (_item$videoUrl = item == null ? void 0 : item.videoUrl) != null ? _item$videoUrl : '',
        trailerTitle: (_item$description2 = item == null ? void 0 : item.description) != null ? _item$description2 : '',
        trailerImg: (_item$img2 = item == null ? void 0 : item.img) != null ? _item$img2 : '',
        trailerImgAlt: (_item$alt = item == null ? void 0 : item.alt) != null ? _item$alt : '',
        nextImage: item == null ? void 0 : item.nextImage,
        videoType: (_item$tags$title = item == null ? void 0 : (_item$tags = item.tags) == null ? void 0 : _item$tags.title) != null ? _item$tags$title : ""
      };
    });
  }, [tab.mediaGalleryCard]);
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
    id: id,
    ref: refContainer,
    children: [title && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
      variant: "h4",
      color: _colors.default.primary.bandaiNamcoBlack,
      sx: {
        marginBottom: {
          xs: '36px',
          md: '54px'
        }
      },
      children: title
    }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
      container: true,
      gap: {
        xs: '34px',
        md: '56px'
      },
      children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Grid, {
        item: true,
        xs: 12,
        children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_Tabs.default, {
          data: handleTabs,
          listTabs: listTabs
        })
      }), /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Grid, {
        item: true,
        xs: 12,
        sx: {
          '& .button--secondary': {
            border: 'none',
            background: 'none'
          }
        },
        children: [(tab == null ? void 0 : tab.id) === 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            display: {
              xs: 'block',
              lg: 'flex'
            },
            flexDirection: {
              xs: 'column',
              md: 'row'
            },
            flexWrap: 'wrap',
            gap: '41px 22px',
            '& button': {
              border: 'none',
              background: 'none'
            }
          },
          children: isMobile ? dataMobileShowing == null ? void 0 : dataMobileShowing.map((item, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              cursor: 'pointer',
              overflow: 'hidden',
              maxWidth: '100%',
              height: 'unset',
              marginBottom: '36px'
            },
            onClick: () => {
              var _popupRef$current;

              popupRef == null ? void 0 : (_popupRef$current = popupRef.current) == null ? void 0 : _popupRef$current.handleOpen();
              setItemSlider(index);
              setOpenPopup(open => !open);
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(MediaGalleryCard, (0, _extends2.default)({}, item))
          }, index)) : tab == null ? void 0 : (_tab$mediaGalleryCard = tab.mediaGalleryCard) == null ? void 0 : _tab$mediaGalleryCard.map((item, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
            sx: {
              cursor: 'pointer',
              maxWidth: '49%',
              overflow: 'hidden',
              flex: '1 1 400px'
            },
            onClick: () => {
              var _popupRef$current2;

              popupRef == null ? void 0 : (_popupRef$current2 = popupRef.current) == null ? void 0 : _popupRef$current2.handleOpen();
              setItemSlider(index);
              setOpenPopup(open => !open);
            },
            children: /*#__PURE__*/(0, _jsxRuntime.jsx)(MediaGalleryCard, (0, _extends2.default)({}, item))
          }, index))
        }), (tab == null ? void 0 : tab.id) === 2 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            gap: '20px',
            '& .card': {
              margin: '11px'
            },
            margin: "0px -11px"
          },
          children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_dist.XMasonry, {
            maxColumns: 2,
            targetBlockWidth: 500,
            children: !isMobile ? tab == null ? void 0 : (_tab$mediaGalleryCard2 = tab.mediaGalleryCard) == null ? void 0 : _tab$mediaGalleryCard2.map((item, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_dist.XBlock, {
              width: item == null ? void 0 : item.width,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                sx: {
                  cursor: 'pointer',
                  '& .card': {
                    aspectRatio: 'unset'
                  }
                },
                onClick: () => {
                  var _popupRef$current3;

                  popupRef == null ? void 0 : (_popupRef$current3 = popupRef.current) == null ? void 0 : _popupRef$current3.handleOpen();
                  setItemSlider(index);
                  setOpenPopup(open => !open);
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(GalleryCard, (0, _extends2.default)({}, item))
              })
            }, index)) : dataMobileShowing == null ? void 0 : dataMobileShowing.map((item, index) => /*#__PURE__*/(0, _jsxRuntime.jsx)(_dist.XBlock, {
              width: item == null ? void 0 : item.width,
              children: /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
                sx: {
                  cursor: 'pointer'
                },
                onClick: () => {
                  var _popupRef$current4;

                  popupRef == null ? void 0 : (_popupRef$current4 = popupRef.current) == null ? void 0 : _popupRef$current4.handleOpen();
                  setItemSlider(index);
                  setOpenPopup(open => !open);
                },
                children: /*#__PURE__*/(0, _jsxRuntime.jsx)(GalleryCard, (0, _extends2.default)({}, item))
              })
            }, index))
          })
        })]
      })]
    }), isMobile && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
      sx: {
        display: 'flex',
        justifyContent: 'center'
      },
      children: /*#__PURE__*/(0, _jsxRuntime.jsxs)(_material.Box, {
        sx: {
          marginTop: '56px',
          cursor: 'pointer'
        },
        children: [!!(dataMobileShowing != null && dataMobileShowing.length) && (dataMobileShowing == null ? void 0 : dataMobileShowing.length) < (tab == null ? void 0 : (_tab$mediaGalleryCard3 = tab.mediaGalleryCard) == null ? void 0 : _tab$mediaGalleryCard3.length) && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p5",
          onClick: () => {
            setDataMobileShowing(tab == null ? void 0 : tab.mediaGalleryCard);
            setClickedViewMore(true);
          },
          sx: {
            color: _colors.default.primary.bandaiNamcoRed
          },
          children: seeMoreLabel
        }), clickedViewMore && /*#__PURE__*/(0, _jsxRuntime.jsx)(_Typography.default, {
          variant: "p5",
          onClick: () => {
            setDataMobileShowing(tab == null ? void 0 : tab.mediaGalleryCard.slice(0, 3));
            setClickedViewMore(false);
          },
          sx: {
            color: _colors.default.primary.bandaiNamcoRed
          },
          children: seeLessLabel
        }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Box, {
          sx: {
            backgroundColor: _colors.default.primary.bandaiNamcoRed,
            width: '100%',
            height: '1px',
            transition: 'all .4s'
          }
        })]
      })
    }), (tab == null ? void 0 : tab.id) === 1 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Modal, {
      open: openPopup,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(VideoPopupSlider, {
        handleOpenPopup: () => setOpenPopup(false),
        trailerItems: (tab == null ? void 0 : tab.id) === 1 ? trailerItems : [],
        initialItem: itemSlider != null ? itemSlider : 0
      })
    }), (tab == null ? void 0 : tab.id) === 2 && /*#__PURE__*/(0, _jsxRuntime.jsx)(_material.Modal, {
      open: openPopup,
      children: /*#__PURE__*/(0, _jsxRuntime.jsx)(ImagePopupSlider, {
        handleOpenPopup: () => setOpenPopup(false),
        screenshotItems: (tab == null ? void 0 : tab.id) === 2 ? screenshotItems : [],
        initialItem: itemSlider != null ? itemSlider : 0
      })
    })]
  });
};

var _default = MediaGalleryContainer;
exports.default = _default;
import _extends from "@babel/runtime/helpers/esm/extends";
// import Modules
import { Box, Grid, Modal, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/styles';
import React, { useState, useRef, useMemo, useEffect } from 'react';
import Typography from "../../atoms/Typography";
import Tabs from "../../atoms/Tabs";
import { XMasonry, XBlock } from "react-xmasonry/dist"; // import Styles

import colors from "../../theme/colors";
import loadable from '@loadable/component';
import { jsx as _jsx } from "react/jsx-runtime";
import { jsxs as _jsxs } from "react/jsx-runtime";
// import ImagePopupSlider from '~/organisms/ImagePopupSlider'
// import VideoPopupSlider from '~/organisms/VideoPopupSlider'
const VideoPopupSlider = loadable(() => import("../VideoPopupSlider"));
const ImagePopupSlider = loadable(() => import("../ImagePopupSlider"));
const GalleryCard = loadable(() => import("../../molecules/GalleryCard"));
const MediaGalleryCard = loadable(() => import("../../molecules/MediaGalleryCard"));

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
  const [tab, setTab] = useState((listThumbnail == null ? void 0 : listThumbnail[0]) || []);
  const [itemSlider, setItemSlider] = useState();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
  const popupRef = useRef();
  const refContainer = useRef();
  const [openPopup, setOpenPopup] = useState(false);
  const [dataMobileShowing, setDataMobileShowing] = useState(listThumbnail == null ? void 0 : (_listThumbnail$ = listThumbnail[0]) == null ? void 0 : (_listThumbnail$$media = _listThumbnail$.mediaGalleryCard) == null ? void 0 : _listThumbnail$$media.slice(0, 3));
  const [clickedViewMore, setClickedViewMore] = useState(false); // dispatchEvent event send id to sub navigation

  useEffect(() => {
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


  const screenshotItems = useMemo(() => {
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

  const trailerItems = useMemo(() => {
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
  return /*#__PURE__*/_jsxs(Box, {
    id: id,
    ref: refContainer,
    children: [title && /*#__PURE__*/_jsx(Typography, {
      variant: "h4",
      color: colors.primary.bandaiNamcoBlack,
      sx: {
        marginBottom: {
          xs: '36px',
          md: '54px'
        }
      },
      children: title
    }), /*#__PURE__*/_jsxs(Grid, {
      container: true,
      gap: {
        xs: '34px',
        md: '56px'
      },
      children: [/*#__PURE__*/_jsx(Grid, {
        item: true,
        xs: 12,
        children: /*#__PURE__*/_jsx(Tabs, {
          data: handleTabs,
          listTabs: listTabs
        })
      }), /*#__PURE__*/_jsxs(Grid, {
        item: true,
        xs: 12,
        sx: {
          '& .button--secondary': {
            border: 'none',
            background: 'none'
          }
        },
        children: [(tab == null ? void 0 : tab.id) === 1 && /*#__PURE__*/_jsx(Box, {
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
          children: isMobile ? dataMobileShowing == null ? void 0 : dataMobileShowing.map((item, index) => /*#__PURE__*/_jsx(Box, {
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
            children: /*#__PURE__*/_jsx(MediaGalleryCard, _extends({}, item))
          }, index)) : tab == null ? void 0 : (_tab$mediaGalleryCard = tab.mediaGalleryCard) == null ? void 0 : _tab$mediaGalleryCard.map((item, index) => /*#__PURE__*/_jsx(Box, {
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
            children: /*#__PURE__*/_jsx(MediaGalleryCard, _extends({}, item))
          }, index))
        }), (tab == null ? void 0 : tab.id) === 2 && /*#__PURE__*/_jsx(Box, {
          sx: {
            gap: '20px',
            '& .card': {
              margin: '11px'
            },
            margin: "0px -11px"
          },
          children: /*#__PURE__*/_jsx(XMasonry, {
            maxColumns: 2,
            targetBlockWidth: 500,
            children: !isMobile ? tab == null ? void 0 : (_tab$mediaGalleryCard2 = tab.mediaGalleryCard) == null ? void 0 : _tab$mediaGalleryCard2.map((item, index) => /*#__PURE__*/_jsx(XBlock, {
              width: item == null ? void 0 : item.width,
              children: /*#__PURE__*/_jsx(Box, {
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
                children: /*#__PURE__*/_jsx(GalleryCard, _extends({}, item))
              })
            }, index)) : dataMobileShowing == null ? void 0 : dataMobileShowing.map((item, index) => /*#__PURE__*/_jsx(XBlock, {
              width: item == null ? void 0 : item.width,
              children: /*#__PURE__*/_jsx(Box, {
                sx: {
                  cursor: 'pointer'
                },
                onClick: () => {
                  var _popupRef$current4;

                  popupRef == null ? void 0 : (_popupRef$current4 = popupRef.current) == null ? void 0 : _popupRef$current4.handleOpen();
                  setItemSlider(index);
                  setOpenPopup(open => !open);
                },
                children: /*#__PURE__*/_jsx(GalleryCard, _extends({}, item))
              })
            }, index))
          })
        })]
      })]
    }), isMobile && /*#__PURE__*/_jsx(Box, {
      sx: {
        display: 'flex',
        justifyContent: 'center'
      },
      children: /*#__PURE__*/_jsxs(Box, {
        sx: {
          marginTop: '56px',
          cursor: 'pointer'
        },
        children: [!!(dataMobileShowing != null && dataMobileShowing.length) && (dataMobileShowing == null ? void 0 : dataMobileShowing.length) < (tab == null ? void 0 : (_tab$mediaGalleryCard3 = tab.mediaGalleryCard) == null ? void 0 : _tab$mediaGalleryCard3.length) && /*#__PURE__*/_jsx(Typography, {
          variant: "p5",
          onClick: () => {
            setDataMobileShowing(tab == null ? void 0 : tab.mediaGalleryCard);
            setClickedViewMore(true);
          },
          sx: {
            color: colors.primary.bandaiNamcoRed
          },
          children: seeMoreLabel
        }), clickedViewMore && /*#__PURE__*/_jsx(Typography, {
          variant: "p5",
          onClick: () => {
            setDataMobileShowing(tab == null ? void 0 : tab.mediaGalleryCard.slice(0, 3));
            setClickedViewMore(false);
          },
          sx: {
            color: colors.primary.bandaiNamcoRed
          },
          children: seeLessLabel
        }), /*#__PURE__*/_jsx(Box, {
          sx: {
            backgroundColor: colors.primary.bandaiNamcoRed,
            width: '100%',
            height: '1px',
            transition: 'all .4s'
          }
        })]
      })
    }), (tab == null ? void 0 : tab.id) === 1 && /*#__PURE__*/_jsx(Modal, {
      open: openPopup,
      children: /*#__PURE__*/_jsx(VideoPopupSlider, {
        handleOpenPopup: () => setOpenPopup(false),
        trailerItems: (tab == null ? void 0 : tab.id) === 1 ? trailerItems : [],
        initialItem: itemSlider != null ? itemSlider : 0
      })
    }), (tab == null ? void 0 : tab.id) === 2 && /*#__PURE__*/_jsx(Modal, {
      open: openPopup,
      children: /*#__PURE__*/_jsx(ImagePopupSlider, {
        handleOpenPopup: () => setOpenPopup(false),
        screenshotItems: (tab == null ? void 0 : tab.id) === 2 ? screenshotItems : [],
        initialItem: itemSlider != null ? itemSlider : 0
      })
    })]
  });
};

export default MediaGalleryContainer;